import React, {useRef} from "react";
function RefHookExample() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus()
    }
    return(
        <div>
            <h1>Ref Hook Example </h1>
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>Focus on the Input</button>
            <hr />
        </div>
    )
}


export default RefHookExample;