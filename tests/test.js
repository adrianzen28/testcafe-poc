import { Selector } from 'testcafe'; // first import testcafe selectors

const submitButton = Selector('button').withText('Send');
const ticketForm = Selector('header h1');

fixture `Getting Started`// declare the fixture
    .page `http://localhost:1337/live.html`;  // specify the start page


//then create a test and place your code there
test('Click the launcher pill', async t => {
    await t
        .switchToIframe('#launcher')
        .click('#Embed')
        .switchToMainWindow()
        .switchToIframe('#webWidget')
        .expect(ticketForm.innerText).eql('Leave us a message')
        .typeText('input[name=\'name\']', 'Adrian')
        .typeText('input[name=\'email\']', 'agent@z3nmail.com')
        .typeText('textarea[name=\'description\']', 'My Description')
        .click(submitButton)
        .wait( 3000 )

});