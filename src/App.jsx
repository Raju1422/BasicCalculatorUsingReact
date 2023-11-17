import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
function App() {
  let [value, SetValue] = useState("");
  let GetValue = (item) => {
    if (item === "C") {
      SetValue("");
    }
    else if (item === "=") {
      let result = eval(value);
      SetValue(result);
    }
    else {
      let newValue = value + item;
      SetValue(newValue);
    }
  }
  return (
    <div id={styles['calculator']}>
      <Display displayVal={value}></Display>
      <ButtonContainer onButtonClick={GetValue}></ButtonContainer>
    </div>
  )
}

export default App
