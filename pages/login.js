var loginAction = {
    with: function (email, pass) {
        return this
        .navigate()
        .setValue('@login', email)
        .setValue('@senha', pass)
        .click('@btnLogar')
    },

    alertAsserts: function (alerts) {
        return this
        .assert.containsText('#spanMessage', alerts)
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