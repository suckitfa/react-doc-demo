class CommentList extends React.Component {
    construtor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            comments:DataSource.getComments()
        }
    }
    componentDidMount() {
        DataSource.addChangeListener(this.handleChange)
    }
    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
    }
    handleChange() {
        this.setState({
            coments:dataSource.getComments()
        })
    }
    render() {
        return(
            <div>
            {this.state.comments.map((comment)=><Comment comment={comment} key={comment.id}/>)
            </div>
        )
    }
}