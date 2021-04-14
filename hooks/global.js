module.exports = {
    beforeEach: (browser) => {
        browser
        .resizeWindow(1920, 1000)
        .done()
    },

    afterEach: (browser) => {
        browser
        .done()
        .end();
    },
}