# How to run the test

1. Run embeddable framework dev server (this should start the dev server at `localhost:1337/live.html`)
1. Create a new folder e.g. `testcafe`
1. Clone this repo in the new folder
1. Install node modules: `npm install`
1. Run test: `npm test`

Note: There shoud be an error when the test tries to submit the form because of the `locale` issue in staging. 

Currently there isn't a way to execute javascript in the browser from the test (https://github.com/DevExpress/testcafe/issues/1739)