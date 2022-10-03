
window.onload = function (){

async function sendRequest(params = {}) {
    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`).join('&');
        const response = await fetch(`api/?${query}`);
        return await response.text();
}

    async function send(){
        const value = document.getElementById('value').value;
        const degFirst = document.getElementById('select-1').value;
        const degSecond = document.getElementById('select-2').value;
        const answer = await sendRequest({value, degFirst, degSecond});

        document.getElementById('result').innerHTML =answer;
    }
    document.getElementById('send').addEventListener('click', send);
}
//клиент написать на реакте
//разрешить корсы (cors)
//все должно быть в гитхабе
//на клиенте написать калькулятор перевода чисел из одной системы счисления в другую. Расчеты должны проихводиться на бэкенде.
//На бэкенде написать класс, который будет переводить с помощью соответствующих методов. Ответ выводить в морду экрана.