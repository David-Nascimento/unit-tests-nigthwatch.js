module.exports = {
    'senha nao informado': (browser) => {
        let login = browser.page.login()
        login
        .with('Admin','')
        .alertAsserts("Password cannot be empty")
    }
}