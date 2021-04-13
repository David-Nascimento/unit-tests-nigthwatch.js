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
        .end();
    }
}