import React,  { useState }  from "react";
import "./App.css"

type Props = {
  title?: string;
  initValue: number;
}

const App: React.FC<Props> = ({title, initValue}: Props) => {
  const [count, setCount] = useState(initValue || 3)

  const onAddEvent = () => {
    setCount(count + 1)
  }

  const onSubEvent = () => {
    setCount(count - 1)
  }

  const onMulEvent = () => {
    setCount(count * 2)
  }

  const onDivideEvent = () => {
    setCount(count / 2)
  }

  return (
    <div className="root">
      <h1>{title || "Counter App"}</h1>
      <div className="button_wrap">
        <button onClick={onMulEvent} className="button_child">×2</button>
        <button onClick={onAddEvent} className="button_child">+</button>
        <p className="counter">{count}</p>
        <button onClick={onSubEvent} className="button_child">-</button>
        <button onClick={onDivideEvent} className="button_child">÷2</button>
      </div>
    </div>
  )
}

export default App;
