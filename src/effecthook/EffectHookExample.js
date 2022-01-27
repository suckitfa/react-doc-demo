import React, {useEffect, useState} from 'react'
// 操作浏览器的title
function EffectHookExample() {
    const [count,setCount] = useState(0)
    const handleClickAdd = () => {
        setCount(c => c +1)
    }
    useEffect( () => {
        document.title = `You clicked ${count} times!`;
    })
    useEffect( () => {
        console.log('effected invoked')
        return () => console.log('effected deteched')
    })
    // 每次渲染都会执行, 0 , 1.....
    console.log('count = ',count)
    return(
        <div>
            <h1>Effect Hooks Example</h1>
            <div><button onClick={handleClickAdd}>+1</button></div>
            <div>Count = {count}</div>
            <hr />
        </div>
    )
}

export default EffectHookExample;