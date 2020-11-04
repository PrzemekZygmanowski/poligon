import React from 'react';

class Form extends React.Component {
  state = { name: '' };
  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //   }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleClick = (event) => {
    console.log('handleClick: ', event);
    console.log('React button');
  };
  handleChange = (event) => {
    console.log('input value: ', event.target.value);
    this.setState({ name: event.target.value });
    console.log('this: ', this);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} />
        <button onClick={this.handleClick}>Szkoła Reacta</button>
      </form>
    );
  }
}
// function Form() {
//   const handleClick = () => console.log('react button');
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <button onClick={handleClick}>Szkoła Reacta</button>
//     </form>
//   );
// }
export default Form;
