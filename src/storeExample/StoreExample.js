import { connect } from "react-redux";


function StoreExample({counter,username,rename,add}) {
    const handleNameChange = (e) => {
        const name = e.target.value
        rename(name)
    }

    const hanldeAddNum = () => {
        add(1)
    }
    return(
        <div>
            <h1>Store Example</h1>
            <div>
                <div><button onClick={hanldeAddNum}>+1</button></div>
                <div><input type="text" onChange={handleNameChange} /></div>
            </div>
            <div>Counter = {counter}</div>
            <div>username = {username}</div>
        </div>
    )
}

export default connect(function mapStateToProps(state) {
    // 组件可以拿到里面的对象
    return {
        counter:state.counter.count,
        username:state.user.name
    }
}, function mapDispatchToProps(dispatch) {
    return {
        add: (num) => dispatch({type:'ADD',num}),
        rename: (name) => dispatch({type:"UPDATE_USERNAME",name})
    }
}
)(StoreExample)