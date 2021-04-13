
module.exports = {
    'login com sucesso': (browser) => {
        let login = '#txtUsername'
        let senha = '#txtPassword'
        let btnLogar = '#btnLogin'
        browser
        .url('https://opensource-demo.orangehrmlive.com/')
        .waitForElementVisible('#divLogo', 3000)
        .setValue(login, 'Admin')
        .setValue(senha, 'admin123')
        .click(btnLogar)
        .assert.containsText('#welcome', 'Welcome Paul')
        .end();
    }
}