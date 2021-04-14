module.exports = {

    'login sem sucesso': (browser) => {
        let login = browser.page.login()
        login
        .whith('Admin','admin')
        .assert.containsText('#spanMessage', "Invalid credentials")
        .saveScreenshot('tests_output/screenshots.png')
    },

    'email nao informado': (browser) => {
        let login = browser.page.login()
        login
        .whith('','admin123')
        .assert.containsText('#spanMessage', "Username cannot be empty")
    },

    'senha nao informado': (browser) => {
        let login = browser.page.login()
        login
        .whith('Admin','')
        .assert.containsText('#spanMessage', "Password cannot be empty")
    }
}