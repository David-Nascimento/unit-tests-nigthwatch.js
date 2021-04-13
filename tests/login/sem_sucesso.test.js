module.exports = {

    before: (browser) => {
        browser
        .resizeWindow(1920, 1000)
    },

    after: (browser) => {
        browser
        .end();
    },

    'login sem sucesso': (browser) => {
        let login = browser.page.login()
        login.navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@login', 'Admin')
        .setValue('@senha', 'admin')
        .click('@btnLogar')
        .assert.containsText('#spanMessage', "Invalid credentials")
    },

    'email nao informado': (browser) => {
        let login = browser.page.login()
        login.navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@login', '')
        .setValue('@senha', 'admin123')
        .click('@btnLogar')
        .assert.containsText('#spanMessage', "Username cannot be empty")
    },

    'senha nao informado': (browser) => {
        let login = browser.page.login()
        login.navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@login', 'Admin')
        .setValue('@senha', '')
        .click('@btnLogar')
        .assert.containsText('#spanMessage', "Password cannot be empty")
    }
}