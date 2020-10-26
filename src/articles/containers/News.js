import React, { useState } from 'react';

import Author from '../components/Author';
import Scoring from '../components/Scoring';

const styles = {
  backgroundColor: 'chocolate',
  border: '5px solid green',
  padding: 10,
  para: {
    backgroundColor: 'green',
  },
};

// //komponent funkcyjny
function News({ header, intro, author }) {
  const [score, setScore] = useState(5);
  return (
    <div style={styles}>
      <h2>{header}</h2>
      <p style={styles.para}>{intro}</p>
      <Author author={author} />
      <Scoring score={score} />
    </div>
  );
}

export default News;
