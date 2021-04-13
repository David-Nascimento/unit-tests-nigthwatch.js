var loginAction = {
    whith: function(email, pass) {
        return this
        .navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@login', email)
        .setValue('@senha', pass)
        .click('@btnLogar')
    }
}

module.exports = {
    url: 'https://opensource-demo.orangehrmlive.com/',
    commands: [loginAction],
    elements: {
        form: '#divLogo',
        login: '#txtUsername',
        senha: '#txtPassword',
        btnLogar: '#btnLogin'
    }
}