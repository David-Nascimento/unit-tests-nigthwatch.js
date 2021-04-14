var cadastro = {
    with: function(name, lasName, address, emailAdress, phone){
        return this
        .navigate()
        .pause(2000)
        .waitForElementVisible('@Register', 3000)
        .setValue('@inputFirstName', name)
        .setValue('@inputLastName', lasName)
        .setValue('@inputAdress', address)
        .setValue('@inputEamil', emailAdress)
        .setValue('@inputPhone', phone)
    },

    selectCheckBox: function() {
        return this
        .navigate()
        .click('@radioMale')
        .click('@checkboxHobbies')
    },
}



module.exports = {
    url: 'http://demo.automationtesting.in/Register.html',
    commands: [cadastro],
    elements: {
        Register: 'div > h2',
        inputFirstName: 'input[placeholder="First Name"]',
        inputLastName: 'input[placeholder="Last Name"]',
        inputAdress: 'textarea[ng-model="Adress"]',
        inputEamil: 'input[type="email"]',
        inputPhone: 'input[type="tel"]',
        radioMale: 'input[value="Male"]',
        checkboxHobbies: '#checkbox3'
    }
}