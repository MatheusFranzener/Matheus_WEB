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

let divBody = document.querySelector('body');
divBody.appendChild(criarTabela());

function criarTabela(){
    let tabelaAtual = document.querySelector('table');

    if(tabelaAtual){
        tabelaAtual.remove();
    }

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

    divBody.appendChild(tabela);

    listaUsuarios.forEach(function (element) {
        const linhaTabela = dadosTabela(
            element.name,
            element.userName)

        tabela.appendChild(linhaTabela);
        }
    )

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

let botaoCadastro = document.createElement('button');
divBody.appendChild(botaoCadastro);
botaoCadastro.className = 'botaoCadastro'
botaoCadastro.onclick = clickButtonRegisteryPerson;
botaoCadastro.innerText = "Cadastrar novo Usuário";


function clickButtonRegisteryPerson() {
    const modal = createModal();
    const content = getContentRegesteryPersonModal(modal.removeModal);

    modal.insertHeader(content.header);
    modal.insertMain(content.main);
    modal.insertFooter(content.footer);
}

function createModal() {

    let background = document.createElement('div');
    background.id = "background-modal";
    let modal = document.createElement('div');
    modal.id = "modal";
    background.appendChild(modal);
    divBody.appendChild(background);

    let header = document.createElement('div');
    let main = document.createElement('div');
    let footer = document.createElement('div');

    header.id = 'modal-header';
    main.id = 'modal-main';
    footer.id = 'modal-footer';

    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);

    function removeModal() {
        background.remove();
    }

    function insertHeader(html) {
        header.appendChild(html);
    }

    function insertMain(html) {
        main.appendChild(html);
    }

    function insertFooter(html) {
        footer.appendChild(html);
    }

    let retorno = {
        background: background,
        modal: modal,
        removeModal: removeModal,
        insertHeader: insertHeader,
        insertMain: insertMain,
        insertFooter: insertFooter,
    }   
      
    return retorno;
}

function getContentRegesteryPersonModal(removeModal) {
    const header = document.createElement('div');
    header.id = 'person-header';
    const title = document.createElement('h1');
    title.innerText = 'Cadastrar novo Usuário';
    header.appendChild(title);

    const main = document.createElement('div');
    main.id = 'person-main';

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Nome';
    main.appendChild(inputNome);

    const inputSobrenome = document.createElement('input');
    inputSobrenome.type = 'text';
    inputSobrenome.placeholder = 'Usuario';
    main.appendChild(inputSobrenome);

    const footer = document.createElement('div');
    footer.id = 'person-footer';
    const buttonRegistery = document.createElement('button');
    buttonRegistery.innerText = 'Registrar';
    function registery() {
        const name = inputNome.value;
        const userName = inputSobrenome.value;

        if (!name || name == '') {
            return;
        }
        if (! userName ||  userName == '') {
            return;
        }
    
        registeryPerson(name,  userName);
        removeModal();
    }
    buttonRegistery.onclick = registery;

    const buttonCancel = document.createElement('button');
    buttonCancel.innerText = 'Cancelar';
    buttonCancel.onclick = removeModal;

    footer.appendChild(buttonRegistery);
    footer.appendChild(buttonCancel);

    return {
        header: header,
        main: main,
        footer: footer,
    }
}

function registeryPerson(name, userName) {
    let dados = {
        name: name,
        userName:  userName,
    }   
    listaUsuarios.push(dados);
    criarTabela();
}
