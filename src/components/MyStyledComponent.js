import React from 'react';

function MyStyledComponent(props) {
  const myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return (
    <div style={myStyledComponentStyles}>
    </div>
  );
}

export default MyStyledComponent;