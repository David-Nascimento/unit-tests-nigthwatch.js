module.exports = {
    'email nao informado': (browser) => {
        let login = browser.page.login()
        login
        .whith('','admin123')
        .alertAsserts("Username cannot be empty")
    }
}