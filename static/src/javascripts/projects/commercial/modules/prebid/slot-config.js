// @flow strict
import {
    getBreakpointKey,
    stripMobileSuffix,
    stripTrailingNumbersAbove1,
} from 'commercial/modules/prebid/utils';

import type { PrebidSlot } from 'commercial/modules/prebid/types';

const filterByAdvertId = (advertId: string, slots: Array<PrebidSlot>) => {
    const adUnits = slots.filter(slot =>
        stripTrailingNumbersAbove1(stripMobileSuffix(advertId)).endsWith(
            slot.key
        )
    );
    return adUnits;
};

const getSlots = (isArticle: boolean): Array<PrebidSlot> => {
    const commonSlots: Array<PrebidSlot> = [
        {
            key: 'mostpop',
            sizes: [[300, 250]],
        },
        {
            key: 'right',
            sizes: [[300, 600], [300, 250]],
        },
        {
            key: 'inline1',
            sizes: [[300, 250]],
        },
    ];

    const desktopSlots: Array<PrebidSlot> = [
        {
            key: 'top-above-nav',
            sizes: [[970, 250], [728, 90]],
        },
        {
            key: 'inline',
            sizes: isArticle ? [[300, 600], [300, 250]] : [[300, 250]],
        },
        {
            key: 'comments',
            sizes: [[300, 250]],
        },
    ];

    const tabletSlots: Array<PrebidSlot> = [
        {
            key: 'top-above-nav',
            sizes: [[728, 90]],
        },
        {
            key: 'inline',
            sizes: [[300, 250]],
        },
    ];

    const mobileSlots: Array<PrebidSlot> = [
        {
            key: 'top-above-nav',
            sizes: [[300, 250]],
        },
        {
            key: 'inline',
            sizes: [[300, 250]],
        },
    ];

    switch (getBreakpointKey()) {
        case 'M':
            return commonSlots.concat(mobileSlots);
        case 'T':
            return commonSlots.concat(tabletSlots);
        default:
            return commonSlots.concat(desktopSlots);
    }
};

export const slots = (advertId: string, isArticle: boolean) =>
    filterByAdvertId(advertId, getSlots(isArticle));

export const _ = { getSlots };
