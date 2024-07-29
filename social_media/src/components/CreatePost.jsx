import React, { useContext, useRef } from 'react'
import { PostListContext } from '../store/Post-List-Store';

function CreatePost() {

    const userRef= useRef();
    const titleRef= useRef();
    const bodyRef= useRef();
    const reactionRef= useRef();
    const tagRef= useRef();

    const {addPost}= useContext(PostListContext);

    function handleSubmit(event){
        event.preventDefault();
        const userId= userRef.current.value;
        const title= titleRef.current.value;
        const body= bodyRef.current.value;
        const reactions= reactionRef.current.value;
        const tags= tagRef.current.value;
        addPost(userId, title, body, reactions, tags);

        // clear the form
        userRef.current.value= titleRef.current.value= bodyRef.current.value= reactionRef.current.value= tagRef.current.value= "";
    }   

    return (
        <form className='create-form' onSubmit={(e) => (handleSubmit(e))} >
            <div className="mb-3">
                <label htmlFor="userid" className="form-label">
                    Enter your User ID here:
                </label>
                <input
                    type='text'
                    className="form-control"
                    id="userid"
                    placeholder='Your User ID:'
                    ref={userRef}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Post title:
                </label>
                <input
                    type='text'
                    className="form-control"
                    id="title"
                    placeholder='How are you feeling today...'
                    ref={titleRef}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    Post Content:
                </label>
                <textarea
                    className="form-control"
                    rows= "3"
                    id="content"
                    placeholder='Tell us more about it!'
                    ref={bodyRef}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">
                    Number of reactions:
                </label>
                <input
                    type='text'
                    className="form-control"
                    id="reactions"
                    placeholder='How many people reacted to your post?'
                    ref={reactionRef}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="hashtags" className="form-label">
                    Enter your hashtags here:
                </label>
                <input
                    type='text'
                    className="form-control"
                    id="hashtags"
                    placeholder='Please enter tags using space'
                    ref={tagRef}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Post
            </button>
        </form>

    )
}

export default CreatePost