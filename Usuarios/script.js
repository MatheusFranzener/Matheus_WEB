let userName = document.location.search;
let userName2 = userName.replace('?','');

let avatar = document.createElement('img');

function getUserGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                showUserGithub(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function showUserGithub(user) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.login;
    document.body.appendChild(divName);
}

function getUserReposGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('Repositories Data:', data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}
