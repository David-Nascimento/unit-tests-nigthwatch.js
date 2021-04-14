module.exports = {
    'login sem sucesso': (browser) => {
        let login = browser.page.login()
        login
        .with('Admin','admin')
        .alertAsserts("Invalid credentials")
        .saveScreenshot('tests_output/screenshots.png')
    }
}