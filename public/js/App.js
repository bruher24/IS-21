window.onload = function () {

  async function sendRequest(params = {}) {
    const query = Object.keys(params)
      .map(key => `${key}=${params[key]}`).join('&');
    const response = await fetch(`api/?${query}`);
    return await response.text();
  }

  async function send() {
    const value = document.getElementById('value').value;
    const degFirst = document.getElementById('degFirst').value;
    const degSecond = document.getElementById('degSecond').value;
    const answer = await sendRequest({ value, degFirst, degSecond });

    document.getElementById('output').innerHTML = 'Ответ: ' + answer;
  }


  const domContainer = document.getElementById('root');

  class Title extends React.Component {

  }

  const Button = ({ onClick }) => {
    return (
      <button id="send" onClick={onClick}>Перевести</button>
    )
  }

  class Input extends React.Component {
    render() {
      return (
        <div id="input">
          <input id="value" type="number" placeholder="Введите число"></input>
          <input id="degFirst" type="number" placeholder="Введите исходную систему счисления"></input>
          <input id="degSecond" type="number" placeholder="Введите требуемую систему счисления"></input>
          <Button onClick={send} />
        </div>
      );
    }
  }

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
}