
module.exports = {
    'login com sucesso': (browser) => {
        let login = browser.page.login()
        login.navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@login', 'Admin')
        .setValue('@senha', 'admin123')
        .click('@btnLogar')
        .assert.containsText('#welcome', 'Welcome Paul')
        .end();
    }
}