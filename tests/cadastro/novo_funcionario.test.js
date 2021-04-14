let cadastroFuncionario = {}

module.exports = {
    'Dado que eu tenho um novo funcionario para cadastro': function(browser) {
        cadastroFuncionario = {
            name: 'David',
            lasName: 'Nascimento',
            address: 'Rua 70',
            emailAdress: 'testes@testes.com.br',
            phone: '85 99419-4958',
            pass: '123123123',
            confirPass: '123123123',
            cover: 'img1.jpg'
        }
    },

    'Quando eu faco o cadastro do novo funcionario': function(browser) {
        let novoFuncionario = browser.page.novo_funcionario()

        novoFuncionario
            .with('David', 'Nascimento', 'Rua 70', 'testes@testes.com.br', '85 99419-4958')
            .selectCheckBox()
    }
}