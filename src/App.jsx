import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  const [display, setDisplay] = useState('')

  const handleButtonClick = (value) => {
    const operators = ['+', '-', '*', '/']

    if (value === 'C') {
      setDisplay('')
      return
    }

    if (value === 'Delete') {
      setDisplay((prev) => prev.slice(0, -1))
      return
    }

    if (value === '=') {
      try {
        const sanitized = display.replace(/[^0-9.+\-*/]/g, '')
        if (!sanitized) {
          setDisplay('')
          return
        }
        const result = eval(sanitized)
        setDisplay(String(result))
      } catch {
        setDisplay('Error')
      }
      return
    }

    if (operators.includes(value)) {
      if (!display && value !== '-') {
        return
      }
      if (operators.includes(display.slice(-1))) {
        setDisplay((prev) => prev.slice(0, -1) + value)
        return
      }
    }

    setDisplay((prev) => prev + value)
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <small>Calculadora</small>
          <input type="text" placeholder="0" value={display || ''} readOnly />
        </div>

        <div className="keys">
          <Button id="btnClear" title="C" className="key function" onClick={() => handleButtonClick('0')} />
          <Button id="btnDelete" title="Delete" className="key function" onClick={() => handleButtonClick('Delete')} />
          <Button id="btnDivide" title="/" className="button key operator" onClick={() => handleButtonClick('/')} />
          <Button id="btnMultiply" title="*" className="button key operator" onClick={() => handleButtonClick('*')} />

          <Button id="btn7" title="7" className="button key" onClick={() => handleButtonClick('7')} />
          <Button id="btn8" title="8" className="button key" onClick={() => handleButtonClick('8')} />
          <Button id="btn9" title="9" className="button key" onClick={() => handleButtonClick('9')} />
          <Button id="btnSubtract" title="-" className="button key operator" onClick={() => handleButtonClick('-')} />

          <Button id="btn4" title="4" className="button key" onClick={() => handleButtonClick('4')} />
          <Button id="btn5" title="5" className="button key" onClick={() => handleButtonClick('5')} />
          <Button id="btn6" title="6" className="button key" onClick={() => handleButtonClick('6')} />
          <Button id="btnAdd" title="+" className="button key operator" onClick={() => handleButtonClick('+')} />

          <Button id="btn1" title="1" className="button key" onClick={() => handleButtonClick('1')} />
          <Button id="btn2" title="2" className="button key" onClick={() => handleButtonClick('2')} />
          <Button id="btn3" title="3" className="button key" onClick={() => handleButtonClick('3')} />
          <Button id="btnEquals" title="=" className="button key equal" onClick={() => handleButtonClick('=')} />

          <Button id="btn0" title="0" className="button key zero" onClick={() => handleButtonClick('0')} />
        </div>
      </div>
    </div>
  )
}

export default App
