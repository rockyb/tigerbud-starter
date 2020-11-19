const getLocales = () => [
  // you can choose / add the locales you want
  {countryCode: 'GB', languageTag: 'en-GB', languageCode: 'en', isRTL: false},
  {countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false},
];

// use a provided translation, or return undefined to test your fallback
const findBestAvailableLanguage = () => ({
  languageTag: 'en-GB',
  isRTL: false,
});

const getNumberFormatSettings = () => ({
  decimalSeparator: '.',
  groupingSeparator: ',',
});

const getCalendar = () => 'gregorian'; // or "japanese", "buddhist"
const getCountry = () => 'GB'; // the country code you want
const getCurrencies = () => ['GBP', 'EUR']; // can be empty array
const getTemperatureUnit = () => 'celsius'; // or "fahrenheit"
const getTimeZone = () => 'Europe/Paris'; // the timezone you want
const uses24HourClock = () => true;
const usesMetricSystem = () => true;

const addEventListener = jest.fn();
const removeEventListener = jest.fn();

export {
  findBestAvailableLanguage,
  getLocales,
  getNumberFormatSettings,
  getCalendar,
  getCountry,
  getCurrencies,
  getTemperatureUnit,
  getTimeZone,
  uses24HourClock,
  usesMetricSystem,
  addEventListener,
  removeEventListener,
};
