


const Post = ({post}) => {
    const {id, title, body} = post

    return (
        <div className={'post'}>
            <h1>ID: {id}</h1>
            <h2>Title: {title}</h2>
            <h3>Body: {body}</h3>
        </div>
    );
};

export default Post;