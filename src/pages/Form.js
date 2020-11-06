import React, { useState, useRef } from 'react';

// class Form extends React.Component {
//   state = { name: '', surname: '', age: '' };
//   //   constructor(props) {
//   //     super(props);
//   //     this.handleChange = this.handleChange.bind(this);
//   //   }

//   constructor(props) {
//     super(props);
//     this.surnameInput = React.createRef();
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }

//   handleClick = (event) => {
//     console.log('handleClick: ', event);
//     console.log('React button');
//   };

//   handleChange = (event) => {
//     // console.log('input value: ', event.target.value);
//     //event.target.name
//     const keyName = event.target.name;
//     this.setState({ [keyName]: event.target.value });
//     // console.log('this: ', this);
//   };

//   handleFocusClick = () => {
//     this.surnameInput.current.focus();
//     this.surnameInput.current.value = 'Kowalski';
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <input
//             type='text'
//             name='name'
//             placeholder='name'
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type='text'
//             name='surname'
//             ref={this.surnameInput}
//             placeholder='surname'
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type='text'
//             name='age'
//             placeholder='age'
//             onChange={this.handleChange}
//           />
//         </div>
//         <button type='submit' onClick={this.handleClick}>
//           Szkoła Reacta
//         </button>
//         <button type='button' onClick={this.handleFocusClick}>
//           focus
//         </button>
//       </form>
//     );
//   }
// }

function useInput(initialValue = '') {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

function Form() {
  const [name, handleNameChange] = useInput('');
  const [surname, handleSurnameChange] = useInput('');
  const [age, handleAgeChange] = useInput('');
  const surnameInput = useRef();

  const handleClick = () => console.log('react button');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleFocusClick = () => {
    surnameInput.current.focus();
    surnameInput.current.value = 'Kowalski';
  };

  //   const handleChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     if (name === 'name') {
  //       setName(value);
  //     } else if (name === 'surname') {
  //       setSurname(value);
  //     } else if (name === 'age') {
  //       setAge(value);
  //     }
  //   };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          name='name'
          placeholder='name'
          onChange={handleNameChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='surname'
          ref={surnameInput}
          placeholder='surname'
          onChange={handleSurnameChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='age'
          placeholder='age'
          onChange={handleAgeChange}
        />
      </div>
      <button type='submit' onClick={handleClick}>
        Szkoła Reacta
      </button>
      <button type='button' onClick={handleFocusClick}>
        focus
      </button>
    </form>
  );
}
export default Form;
