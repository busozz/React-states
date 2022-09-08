import {useState} from 'react'


function Counter() {

  let [count,setCount] = useState(0)

  const increase = ()=>{
    setCount(count+1)
  }

  const decrease = () => {
    setCount(count -1)
  }

    return (
      <>
      <div >{count}</div>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>İncrease</button>

      </>
    )
}

export default Counter