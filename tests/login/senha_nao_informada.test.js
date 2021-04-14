module.exports = {
    'senha nao informado': (browser) => {
        let login = browser.page.login()
        login
        .whith('Admin','')
        .alertAssert("Password cannot be empty")
    }
}