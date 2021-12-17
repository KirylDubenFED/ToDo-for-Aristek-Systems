import React, { Fragment, useState } from 'react';
import Button from '../Button/Button';
import './App.scss';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setTasks(inputValue);
  };

  return (
    <>
      <div className="App">Hello World</div>
      <Button onButtonClick={handleButtonClick} className="button">Добавить задачу</Button>
    </> 
  );
}

export default App;
