// @flow
import template from 'lodash/template';
import { local as storage } from 'lib/storage';
import $ from 'lib/$';
import bean from 'bean';
import config from 'lib/config';
import overlay from 'raw-loader!common/views/experiments/overlay.html';
import styles from 'raw-loader!common/views/experiments/styles.css';
import {
    concurrentTests,
    epicTests,
    engagementBannerTests,
} from 'common/modules/experiments/ab-tests';
import { isExpired } from 'lib/time-utils';
import {
    getParticipationsFromLocalStorage,
    setParticipationsInLocalStorage,
} from 'common/modules/experiments/ab-local-storage';

const selectRadios = () => {
    const participations = getParticipationsFromLocalStorage();

    $('.js-experiments-radio').each(radio => {
        $(radio).attr('checked', false);
    });

    Object.keys(participations).forEach(testId => {
        $(`#${testId}-${participations[testId].variant}`).attr('checked', true);
    });
};

const bindEvents = () => {
    $('.js-experiments-force-ab').each(label => {
        bean.on(label, 'click', () => {
            const testId = label.getAttribute('data-ab-test');
            const variantId = label.getAttribute('data-ab-variant');
            const participations = getParticipationsFromLocalStorage();

            participations[testId] = {
                variant: variantId,
            };

            setParticipationsInLocalStorage(participations);
        });
    });

    bean.on($('.js-experiments-clear-ab')[0], 'click', () => {
        storage.set('gu.experiments.ab', JSON.stringify([]));
        selectRadios();
    });

    bean.on($('.js-experiments-reload')[0], 'click', () => {
        window.location.reload();
    });

    bean.on($('.js-experiments-toggle')[0], 'click', () => {
        const toggleButton = $('.js-experiments-toggle');

        if (toggleButton.text() === 'X') {
            toggleButton.text('>');
        } else {
            toggleButton.text('X');
        }
        $('.experiments').toggleClass('experiments--hidden');
    });
};

const applyCss = () => {
    const el = $.create('<style type="text/css"></style>');

    el.append(styles);
    $('head').append(el);
};

const appendOverlay = () => {
    const extractData = ({ id, variants, description, expiry }) => ({
        id,
        variants,
        description,
        isSwitchedOn: config.get(`switches.ab${id}`),
        isExpired: isExpired(expiry),
    });
    const data = {
        testGroups: [
            { name: 'Epic', tests: epicTests.map(extractData) },
            { name: 'Banner', tests: engagementBannerTests.map(extractData) },
            { name: 'Other', tests: concurrentTests.map(extractData) },
        ],
    };

    $('body').prepend(template(overlay)(data));
};

export const showExperiments = () => {
    appendOverlay();
    bindEvents();
    selectRadios();
    applyCss();
};
