const showBanner = require('node-banner');
const fs = require('fs');

(async () => {
  const path = './aws-exports.js';
  if (!fs.existsSync(path)) {
    await showBanner(
      'tigerbud',
      '⚠️  You must configure the Amplify project to run the app. ⚠️',
      'magenta',
      'red',
    );
    process.exit(1);
  } else {
    await showBanner(
      'tigerbud',
      'Project configured correctly ✅',
      'magenta',
      'green',
    );
  }
})();
