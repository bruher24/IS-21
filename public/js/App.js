'use strict';

const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
// const domContainer = document.querySelector(
//     '#root'
//   )
//   ReactDOM.render(e(LikeButton), domContainer)




// class Inputs extends React.Component {
//   render() {

//     return e(
//       'select',
//       {
//         id: 'select_1'
//       },
//       e(
//         'option',
//         {
//           id: 'bin',
//           value: '2'
//         },
//         '2'
//       ),
//       e(
//         'option',
//         {
//           id: 'oct',
//           value: '8'
//         },
//         '8'
//       ),
//       e(
//         'option',
//         {
//           id: 'dec',
//           value: '10'
//         },
//         '10'
//       ),
//       e(
//         'option',
//         {
//           id: 'hex',
//           value: '16'
//         },
//         '16'
//       ),
//     );
//   }


// }

function App(){
  return(
    <select id="select_1" value="Test" onChange={(e) => onChange(e.target.value)}>
      {/* <option selected disabled>тест</option> */}
      <option>2-ичная</option>
      <option>8-ичная</option>
      <option>10-ичная</option>
      <option>16-ичная</option>
    </select>
  );
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);