import ReactDOM from "react-dom"
function TestRender() {
    const element = (
        <div>
            <h1>Hello world</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
    ReactDOM.render(element,document.getElementById('root'))
    return ''
}

setInterval(TestRender,1000)


export default TestRender