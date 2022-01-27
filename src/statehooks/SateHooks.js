import React, {useState} from 'react'
function StateHooksExample() {
    const [age,setAge] = useState(0)
    const handleClickAdd = () => {
        setAge(a => a + 1)
    }
    const handleClickMins = () => {
        setAge(a => a-1)
    }
    console.log('age = ',age)
    return(
        <div>
            <h1>State Hook Example</h1>
            <button onClick={handleClickAdd}>+ 1</button>
            <button onClick={handleClickMins}>- 1</button>
            <div>age: {age}</div>
            <hr />
        </div>
    )
}
export default StateHooksExample;