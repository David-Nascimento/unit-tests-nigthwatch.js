
module.exports = {
    'login com sucesso': (browser) => {
        let login = browser.page.login()
        login.navigate()
        .whith('Admin','admin123')
        .assert.containsText('#welcome', 'Welcome Paul')
        .end();
    }
}