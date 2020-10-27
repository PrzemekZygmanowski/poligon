import React from 'react';

import logoImg from './coffe.jpg';

const styles = {
  width: 150,
  height: 'auto',
};

function Logo() {
  return (
    <div>
      <img src={logoImg} style={styles} />
    </div>
  );
}

export default Logo;
