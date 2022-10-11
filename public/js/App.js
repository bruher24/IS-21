async function sendRequest(params = {}) {
  const query = Object.keys(params)
    .map(key => `${key}=${params[key]}`).join('&');
    console.log(params);
  const response = await fetch(`api/?${query}`);
  return await response.text();
}

async function login() {
  const method = 'login';
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const answer = await sendRequest({ method, login, password, sender : 'aboba' });

  document.getElementById('output').innerHTML = answer;
}

async function register() {
  const method = 'registration';
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const answer = await sendRequest({ method, login, password });

  document.getElementById('output').innerHTML = answer;
}

async function logout() {
  const method = 'logout';
  const login = document.getElementById('login').value;
  const answer = await sendRequest({ method, login });

  document.getElementById('output').innerHTML = answer;
}



  const LoginButton = () => {
    return (
      <button id="log_button">Login</button>
    )
  }

  const RegButton = () => {
    return (
      <button id="reg_button">Register</button>
    )
  }
  const LogoutButton = () => {
    return (
      <button id="logout_button">Logout</button>
    )
  }

  class Input extends React.Component {
    render() {
      return (
        <div id="input">
          <input id="login" type="login" placeholder="Введите логин"></input>
          <input id="password" type="password" placeholder="Введите пароль"></input>
          <input id="value" type="number" placeholder="Введите число"></input>
          <input id="degFirst" type="number" placeholder="Введите исходную систему счисления"></input>
          <input id="degSecond" type="number" placeholder="Введите требуемую систему счисления"></input>
          <LoginButton /*onClick={login}*/ />
          <RegButton /*onClick={register}*/ />
          <LogoutButton /*onClick={logout}*/ />
        </div>
      );
    }
  }
  

  const domContainer = document.getElementById('root');

  class Output extends React.Component {
    render() {
      return (
        <p id="output"></p>
      );
    }
  }

  ReactDOM.render(
    <div id="show">
      <Input />
      <Output />
    </div>,
    domContainer
  )
