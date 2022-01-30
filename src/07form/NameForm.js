import React from 'react'
class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value:''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.hanldeChange = this.hanldeChange.bind(this)
    }
    hanldeChange(e) {
        this.setState({vale:e.target.value})
    }
    handleSubmit(e) {
        alert('提交的名字为：' + this.state.value)
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.hanldeChange}/>
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

export default NameForm;