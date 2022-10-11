import Server from './Server.js';
window.onload = function(){

    let server = new Server();

    function login() {
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        let value = document.getElementById('value').value;
        let systemFrom = document.getElementById('degFirst').value;
        let systemTo = document.getElementById('degSecond').value;
        let answer = server.login(login, password);
        return answer;
    }
    let elem = document.querySelector('#log_button');
    elem.addEventListener('click', login);
}
