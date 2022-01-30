import React from 'react'
class FileForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.myFileInputRef = React.createRef()
    }
    handleChange(e) {
        const files = this.myFileInputRef
        console.log(files)
        console.log(e.target)
    }
    render() {
        return(
            <form >
                <input type="file" onChange={this.handleChange} ref={this.myFileInputRef}/>
            </form>
        )
    }
}

export default FileForm;