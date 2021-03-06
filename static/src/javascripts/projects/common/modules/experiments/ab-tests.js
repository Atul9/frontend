// @flow
import { commercialPrebidSafeframe } from 'common/modules/experiments/tests/commercial-prebid-safeframe.js';
import { commercialAdVerification } from 'common/modules/experiments/tests/commercial-ad-verification.js';
import { commercialCmpCustomise } from 'common/modules/experiments/tests/commercial-cmp-customise.js';
import { commercialAdMobileWebIncrease } from 'common/modules/experiments/tests/commercial-ad-mobile-web-increase.js';
import { commercialOutbrainNewids } from 'common/modules/experiments/tests/commercial-outbrain-newids.js';
import { acquisitionsEpicUsTopTicker } from 'common/modules/experiments/tests/acquisitions-epic-us-top-ticker';
import { acquisitionsEpicAuPostOneMillion } from 'common/modules/experiments/tests/acquisitions-epic-au-post-one-million';
import { acquisitionsEpicFromGoogleDocOneVariant } from 'common/modules/experiments/tests/acquisitions-epic-from-google-doc-one-variant';
import { acquisitionsEpicFromGoogleDocTwoVariants } from 'common/modules/experiments/tests/acquisitions-epic-from-google-doc-two-variants';
import { acquisitionsEpicFromGoogleDocThreeVariants } from 'common/modules/experiments/tests/acquisitions-epic-from-google-doc-three-variants';
import { acquisitionsEpicFromGoogleDocFourVariants } from 'common/modules/experiments/tests/acquisitions-epic-from-google-doc-four-variants';
import { acquisitionsEpicFromGoogleDocFiveVariants } from 'common/modules/experiments/tests/acquisitions-epic-from-google-doc-five-variants';
import { acquisitionsEpicAusEnvCampaign } from 'common/modules/experiments/tests/acquisitions-epic-aus-env-campaign';
import { acquisitionsEpicUSGunCampaign } from 'common/modules/experiments/tests/acquisitions-epic-us-gun-campaign';
import { askFourEarning } from 'common/modules/experiments/tests/contributions-epic-ask-four-earning';
import { acquisitionsEpicAlwaysAskIfTagged } from 'common/modules/experiments/tests/acquisitions-epic-always-ask-if-tagged';
import { acquisitionsEpicLiveblog } from 'common/modules/experiments/tests/acquisitions-epic-liveblog';
import { acquisitionsEpicThankYou } from 'common/modules/experiments/tests/acquisitions-epic-thank-you';
import { AcquisitionsBannerUsEoy } from 'common/modules/experiments/tests/acquisitions-banner-us-eoy';
import { AcquisitionsBannerAustraliaPostOneMillionTest } from 'common/modules/experiments/tests/acquisitions-banner-australia-post-one-million';
import {
    AcquisitionsBannerGoogleDocTestFiveVariants,
    AcquisitionsBannerGoogleDocTestFourVariants,
    AcquisitionsBannerGoogleDocTestOneVariant,
    AcquisitionsBannerGoogleDocTestThreeVariants,
    AcquisitionsBannerGoogleDocTestTwoVariants,
} from 'common/modules/experiments/tests/acquisitions-banner-from-google-doc';

export const concurrentTests: $ReadOnlyArray<ABTest> = [
    commercialPrebidSafeframe,
    commercialAdVerification,
    commercialCmpCustomise,
    commercialAdMobileWebIncrease,
    commercialOutbrainNewids,
];

export const epicTests: $ReadOnlyArray<EpicABTest> = [
    acquisitionsEpicUsTopTicker,
    acquisitionsEpicAuPostOneMillion,
    acquisitionsEpicFromGoogleDocOneVariant,
    acquisitionsEpicFromGoogleDocTwoVariants,
    acquisitionsEpicFromGoogleDocThreeVariants,
    acquisitionsEpicFromGoogleDocFourVariants,
    acquisitionsEpicFromGoogleDocFiveVariants,
    acquisitionsEpicAusEnvCampaign,
    acquisitionsEpicUSGunCampaign,
    askFourEarning,
    acquisitionsEpicAlwaysAskIfTagged,
    acquisitionsEpicLiveblog,
    acquisitionsEpicThankYou,
];

export const engagementBannerTests: $ReadOnlyArray<AcquisitionsABTest> = [
    AcquisitionsBannerUsEoy,
    AcquisitionsBannerAustraliaPostOneMillionTest,
    AcquisitionsBannerGoogleDocTestOneVariant,
    AcquisitionsBannerGoogleDocTestTwoVariants,
    AcquisitionsBannerGoogleDocTestThreeVariants,
    AcquisitionsBannerGoogleDocTestFourVariants,
    AcquisitionsBannerGoogleDocTestFiveVariants,
];
