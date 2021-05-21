let klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
        theme: ['light', 'bottom', 'wide'],
    },
    noAutoLoad: false,
    htmlTexts: true,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'klaro',
    // cookieDomain: '.github.com',
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    disablePoweredBy: true,
    translations: {
        en: {
            privacyPolicyUrl: '/privacy',
            consentModal: {
                title: '🍪 Cookie Settings',
                description:
                    'Radio Rasclat uses cookies to improve your user experience and for advertising purposes. Below you have the opportunity to review and manage your cookie settings for privacy purposes.',
            },
            googleAnalytics: {
                description: 'Web and user analytics hosted by Google.',
            },
            donorbox: {
                description: 'Donation via Donorbox.',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                livechat: 'Livechat',
                advertising: 'Advertising',
                styling: 'Styling',
                marketing: 'Marketing',
            },
        },
    },
    services: [
        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                ['_ga', '/', 'radio-rasclat.com'],
                ['_gid', '/', 'radio-rasclat.com'],
                [/^_dc_gtm.*$/i, '/', 'radio-rasclat.com'],
                ['_ga', '/', 'localhost'],
                ['_gat', '/', 'localhost'],
                ['_gid', '/', 'localhost'],
            ],
        },
        {
            name: 'donorbox',
            title: 'Donorbox',
            purposes: ['marketing'],
        },
    ],
};

module.exports = klaroConfig;
