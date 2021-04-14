module.exports = {
    'login sem sucesso': (browser) => {
        let login = browser.page.login()
        login
        .whith('Admin','admin')
        .alertAssert("Invalid credentials")
        .saveScreenshot('tests_output/screenshots.png')
    }
}