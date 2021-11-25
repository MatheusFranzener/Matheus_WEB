let nomeUser = document.location.search;
nomeUser = nomeUser.replace('?', '');

getUserGithub(nomeUser);
getUserReposGithub(nomeUser);

function getUserGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                showUserGithub(data);
                showLoginGithub(data);
                showAvatarGithub(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function showLoginGithub(userName) {
    let divLogin = document.createElement('div');
    divLogin.innerText = userName.login;
    document.body.appendChild(divLogin);
}

function showUserGithub(userName) {
    let divName = document.createElement('div');
    divName.innerText = userName.name;
    document.body.appendChild(divName);
}

function showAvatarGithub(userName) {
    let Avatar = document.createElement('img');
    Avatar.src = userName.avatar_url;
    document.body.appendChild(Avatar);
}

function getUserReposGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log("Lista: ",data);
                data.forEach(function (element) {
                    showNamerepos(element);
                    showLinkrepos(element)
                })
            
            })
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function showNamerepos(userName) {
    let name = document.createElement('div');
    name.innerText = userName.name;
    document.body.appendChild(name);
}

function showLinkrepos(userName) {
    let link = document.createElement('a');
    link.href = userName.svn_url;
    link.innerText = userName.svn_url;
    document.body.appendChild(link);
}
