
module.exports = {
    'login com sucesso': (browser) => {
        let login = browser.page.login()
        login
        .with('Admin','admin123')
        .alertAsserts('Welcome Paul')
    }
}