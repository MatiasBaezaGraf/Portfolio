/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        /**
         * Provide the locales you want to support in your application
         */
        locales: ["en-UK", "es-ES"],
        /**
         * This is the default locale you want to be used when visiting
         * a non-locale prefixed path.
         */
        defaultLocale: "en-UK",
    },
};
