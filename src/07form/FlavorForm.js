import React from 'react'
class FlavorForm extends React.Component {
    constructor(props ) {
        super(props)
        this.state = {
            value:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.hanldeChange.bind(this)
    }
    hanldeChange(e) {
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit(e) {
        alert('你喜欢的风味 ' + this.state.value)
        e.preventDefault()
    }
    render() {
        return(
        <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
        )
    }
}

export default FlavorForm;