import React, {useState} from 'react'
function Counter({initialCount}) {
    const [count,setCount] = useState(initialCount)
    return(
        <div>
            <h1>Counter using useState</h1>
                <button onClick={() => {setCount(initialCount)}}>Reset</button>
                <button onClick={() => {setCount(c => c +1)}}>+ 1</button>
                <button onClick={() => {setCount(c => c -1)}}>- 1</button>
                <div>count = {count}</div>
                <hr />
        </div>
    )
}

export default Counter;