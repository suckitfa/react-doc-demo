import React from 'react'
class EassyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:'请写一篇关于你喜欢的DOM元素的文章'
        }
        this.hanldeChange = this.hanldeChange.bind(this)
        this.hanldeSubmit = this.hanldeSubmit.bind(this)
    }
    hanldeChange(e) {
        this.setState({
            value:e.target.value
        })
    }
    hanldeSubmit(e) {
        alert('提交的文章为 ' + this.state.value)
    }
    render() {
        return(
            <form onSubmit={this.hanldeSubmit}>
                <label>
                    文章:
                    <textarea value={this.state.value} onChange={this.hanldeChange}></textarea>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }   
}

export default EassyForm;