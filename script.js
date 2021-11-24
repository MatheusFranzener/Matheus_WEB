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
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Bruno Henrique', userName: 'brunohvc' },
    { name: 'Bruno Henrique', userName: 'brunohvc' }
]

let listPerson = [];

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
    document.body.appendChild(background);

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
    title.innerText = 'Cadastro Pessoa';
    header.appendChild(title);

    const main = document.createElement('div');
    main.id = 'person-main';

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Nome';
    main.appendChild(inputNome);

    const inputSobrenome = document.createElement('input');
    inputSobrenome.type = 'text';
    inputSobrenome.placeholder = 'Sobrenome';
    main.appendChild(inputSobrenome);

    const inputData = document.createElement('input');
    inputData.type = 'date';
    inputData.placeholder = 'Data de Nascimento';
    main.appendChild(inputData);

    const footer = document.createElement('div');
    footer.id = 'person-footer';
    const buttonRegistery = document.createElement('button');
    buttonRegistery.innerText = 'Registrar';
    function registery() {
        const name = inputNome.value;
        const surname = inputSobrenome.value;
        const birthdate = inputData.value;

        if (!name || name == '') {
            return;
        }
        if (!surname || surname == '') {
            return;
        }
        if (!birthdate || birthdate == '') {
            return;
        }

        registeryPerson(name, surname, birthdate);
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

function registeryPerson(name, surname, birthdate) {
    let person = {
        name: name,
        surname: surname,
        birthdate: birthdate
    }

    listPerson.push(person);
    showPersonTable();
}

function showPersonTable() {
    const actualTable = document.querySelector('table');
    if (actualTable) {
        actualTable.remove();
    }

    const table = document.createElement('table');
    const row = document.createElement('tr');
    const columnName = document.createElement('th');
    const columnSurname = document.createElement('th');
    const columnBirthDate = document.createElement('th');

    columnName.innerText = 'Nome';
    columnSurname.innerText = 'Sobrenome';
    columnBirthDate.innerText = 'Data Nascimento';

    row.appendChild(columnName);
    row.appendChild(columnSurname);
    row.appendChild(columnBirthDate);
    table.appendChild(row);

    listPerson.forEach(function (element) {
        console.log('element:', element);
        const rowTable = getPersonTableRow(
            element.name,
            element.surname,
            element.birthdate);

        table.appendChild(rowTable);
    })

    document.body.appendChild(table);
}

function getPersonTableRow(name, surname, birthdate) {
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnSurname = document.createElement('td');
    const columnBirthDate = document.createElement('td');

    columnName.innerText = name;
    columnSurname.innerText = surname;
    columnBirthDate.innerText = birthdate;

    row.appendChild(columnName);
    row.appendChild(columnSurname);
    row.appendChild(columnBirthDate);
    return row;
}
