import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//const DAY = 'saturday';
const styles = {
  backgroundColor: 'chocolate',
  border: '5px solid green',
  padding: 10,
  para: {
    backgroundColor: 'green',
  },
};

// const News = () => <p>Hello</p>;

// //komponent klasowy
// class News extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     date: new Date(),
//   //     score: 5,
//   //   };
//   // }
//   state = {
//     date: new Date(),
//     score: 5,
//   };

//   componentDidMount() {
//     let loading = true;
//     this.setState({ score: 7 }, () => {
//       loading = false;
//     });
//   }

//   render() {
//     const { header, intro } = this.props;
//     const { score } = this.state;

//     return (
//       <div className='news'>
//         <h2>{header}</h2>
//         <p>{intro}</p>
//         <p>{score}</p>
//       </div>
//     );
//   }
// }

const Scoring = ({ score }) => <p>ocena: {score}</p>;
const Author = ({ author }) => <p>Autor: {author}</p>;

// //komponent funkcyjny
function News({ header, intro, author }) {
  // const { h2, p } = props;
  const [score, setScore] = useState(5);
  //setScore(10); nie tutaj
  return (
    <div style={styles}>
      <h2>{header}</h2>
      <p style={styles.para}>{intro}</p>
      <Author author={author} />
      <Scoring score={score} />
    </div>
  );
}

// function News({ header, intro }) {
//   // const { h2, p } = props;
//   return (
//     <div className='news'>
//       <h2>{header}</h2>
//       <p>{intro}</p>
//     </div>
//   );
// }

const data = [
  {
    id: 1,
    author: 'Jan Brzęczek',
    title: 'Pilne: Co to był za dzień!',
    intro: 'Tego świat jeszcze nie widział',
  },
  {
    id: 2,
    author: 'Jaś Brzęczek',
    title: 'Wszyscy zazdroszą Polakom!',
    intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił',
  },
  {
    id: 3,
    author: 'Janusz Brzęczek',
    title: 'Adam Małysz Zgolił wąs',
    intro:
      'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy',
  },
];

function App() {
  return (
    <div>
      {data.map((elem) => (
        <News
          key={`news-${elem.id}`}
          header={elem.title}
          intro={elem.intro}
          author={elem.author}
        />
      ))}

      {/* <News header='Nagłówek 1' intro='intro 1' />
      <News header='Nagłówek 2:breaking news' intro='intro 2' />
      <News
        header='Nagłówek 3: nie mogę spać bo zrzucam kota z parapetu'
        intro='intro 3'
      /> */}
    </div>
  );
}

export default App;

// function App() {
//   const checkDay = () => {
//     if (DAY == 'monday') {
//       return (
//         <div>
//           <News header='Nagłówek 1' intro='intro 1' />
//           <News header='Nagłówek 2:breaking news' intro='intro 2' />
//           <News
//             header='Nagłówek 3: nie mogę spać bo zrzucam kota z parapetu'
//             intro='intro 3'
//           />
//         </div>
//       );
//     } else {
//       return <p>nie ma newsów z poniedziałku</p>;
//     }
//   };
//   return <div className='App'>{checkDay()}</div>;
// }
