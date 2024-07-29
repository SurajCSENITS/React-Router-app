import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostListContext } from '../store/Post-List-Store';

function Post({ post }) {

    const {deletePost}= useContext(PostListContext);

    return (
        <div className="card" style={{ width: "22rem" }}>
            <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{cursor: "pointer"}} onClick={() => (deletePost(post.id))} >
                    <MdDelete />
                </span>
                <p className="card-text">
                    {post.body}
                </p>
                <div className="alert alert-success post-reactions" role="alert">
                    This post has {post.reactions} number of reactions
                </div>
                {
                    post.tags.map(function (tag) {
                        return (<span className="badge rounded-pill text-bg-primary tags">{tag}</span>)
                    })
                }
            </div>
        </div>
    )
}

export default Post