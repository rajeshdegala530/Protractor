let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');



var reporter = new HtmlScreenshotReporter({
  dest: 'test-reports/screenshots',
  filename: 'my-report.html',
  reportTitle: "Super Hero Test Results",
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true
});


exports.config = {
    //jasmine is testing framework//
    framework: 'jasmine',

    //This is selenium address
    seleniumAddress: 'http://localhost:4444/wd/hub',
    

    //Browser details
    capabilities:{
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--window-size=1600,1200']
        }
    },
//basically tests, spec file is a test file
    specs:[
      './test/login_spec.js',
      './test/vote_spec.js',
       './test/nav_spec.js',
       './test/header_spec.js',
       './test/roster_spec.js'
    ],

    jasmineNodeOpts:
    {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
    },

      // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
},

    logLevel: 'WARN',
    onPrepare: function () {
      jasmine.getEnv().addReporter(reporter);
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        },
        summary: {
          displayDuration: false
        }
      }));
    }
}