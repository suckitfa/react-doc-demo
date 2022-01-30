function Blog({posts}) {
    const sidebar = (
        <ul>
            {posts.map(post=> <li key={post.id}>{post.title}</li>)}
        </ul>
    )
    const content = posts.map(post=>(<div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>))
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

export default Blog;