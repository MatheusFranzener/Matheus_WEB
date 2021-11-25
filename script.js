
const listaUsuarios = [
    { name: 'Bruno Henrique Verbinnen de Carvalho', userName: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },
    { name: 'João Henrique Meirles da Silva', userName: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Diego Planinscheck', userName: 'frst157' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' }
]

document.body.appendChild(criarTabela());

function criarTabela(){
    const tabela = document.createElement('table');
    const linha = document.createElement('tr');
    const colunaNome = document.createElement('th');
    const colunaUsuario = document.createElement('th');
    const botaoUsuario = document.createElement('th');

    colunaNome.innerText = 'Nome';
    colunaUsuario.innerText = 'Usuário';
    botaoUsuario.innerText = 'Botão';

    tabela.appendChild(linha);
    linha.appendChild(colunaNome);
    linha.appendChild(colunaUsuario);
    linha.appendChild(botaoUsuario);

    document.body.appendChild(tabela);

    listaUsuarios.forEach(function (element) {
        const linhaTabela = dadosTabela(
            element.name,
            element.userName)

        tabela.appendChild(linhaTabela);
    })

    return tabela;
}

function dadosTabela(name, userName) {
    const linha = document.createElement('tr');
    const colunaName = document.createElement('td');
    const colunaUsername = document.createElement('td');
    const botaoUsuario = document.createElement('button');
    const a = document.createElement('a');
    
    a.innerText = 'Conferir Dados';
    a.href = './Usuarios/index.html?'+userName;

    colunaName.innerText = name;
    colunaUsername.innerText = userName;

    botaoUsuario.appendChild(a);
    linha.appendChild(colunaName);
    linha.appendChild(colunaUsername);
    linha.appendChild(botaoUsuario);

    return linha;
}




