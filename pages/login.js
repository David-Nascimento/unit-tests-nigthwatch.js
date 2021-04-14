var loginAction = {
    with: function (email, pass) {
        return this
        .navigate()
        .setValue('@login', email)
        .setValue('@senha', pass)
        .click('@btnLogar')
        .assert.containsText('#spanMessage', "Invalid credentials")
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