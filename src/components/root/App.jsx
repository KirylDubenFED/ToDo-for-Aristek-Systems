import React, { Fragment, useState } from 'react';
import Button from '../Button/Button';
import './App.scss';
import Input from '../Input/Input';

function App() {
  const [inputValue, setInputValue] = useState('');
  const setTasks = useState([]);

  const handleButtonClick = () => {
    setTasks(inputValue);
  };

  return (
    <>
      <div className="App">Hello World</div>
      <Input onInputChange={setInputValue} />
      <Button onButtonClick={handleButtonClick} className="button">Добавить задачу</Button>
    </>
  );
}

export default App;
