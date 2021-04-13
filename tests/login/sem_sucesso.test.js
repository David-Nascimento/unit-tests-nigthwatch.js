module.exports = {
    'login sem sucesso': (browser) => {
        let login = '#txtUsername'
        let senha = '#txtPassword'
        let btnLogar = '#btnLogin'
        browser
        .url('https://opensource-demo.orangehrmlive.com/')
        .waitForElementVisible('#divLogo', 3000)
        .setValue(login, 'Admin')
        .setValue(senha, 'admin')
        .click(btnLogar)
        .assert.containsText('#spanMessage', "Invalid credentials")
    },

    'email nao informado': (browser) => {
        let login = '#txtUsername'
        let senha = '#txtPassword'
        let btnLogar = '#btnLogin'
        browser
        .url('https://opensource-demo.orangehrmlive.com/')
        .waitForElementVisible('#divLogo', 3000)
        .setValue(login, '')
        .setValue(senha, 'admin')
        .click(btnLogar)
        .assert.containsText('#spanMessage', "Username cannot be empty")
    },
    'senha nao informado': (browser) => {
        let login = '#txtUsername'
        let senha = '#txtPassword'
        let btnLogar = '#btnLogin'
        browser
        .url('https://opensource-demo.orangehrmlive.com/')
        .waitForElementVisible('#divLogo', 3000)
        .setValue(login, 'Admin')
        .setValue(senha, '')
        .click(btnLogar)
        .assert.containsText('#spanMessage', "Password cannot be empty")
        .end();
    }
}