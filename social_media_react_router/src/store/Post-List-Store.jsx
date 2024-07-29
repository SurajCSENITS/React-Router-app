import { createContext, useState } from 'react'

export const PostListContext= createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const DEFAULT_LIST= [
    {
        id: "1",
        title: "Going to Mumbai",
        body: "Mumbai, often referred to as the 'City of Dreams', is a vibrant metropolis on the west coast of India. Known for its bustling streets, iconic landmarks, and rich cultural heritage, Mumbai offers a unique blend of the old and new",
        reactions: 10,
        userId: "aapkaSuraj",
        tags: ["mumbai", "filmcity", "enjoying"],
    },
    {
        id: "2",
        title: "Pass ho gaya bhai",
        body: "4 saal ki maste k baad finally aaj B Tech pass ho0 gaya. Unbelieveable",
        reactions: 19,
        userId: "nongamba04",
        tags: ["btech", "graduated"],
    },
]

function PostListProvider({ children }) {
    
    const [postList, setPostList]= useState(DEFAULT_LIST);

    function addPost(userId, title, body, reactions, tags){
        // check if major input fields are empty
        if(userId==="" || title===""){
            alert("Enter User ID and Title both");
            return;
        }

        let newPost= {
            id: Date.now(),
            title: title,
            body: body,
            reactions: reactions,
            userId: userId,
            tags: tags.split(" "),
        }
        setPostList([newPost,...postList]);
    }

    function deletePost(postId){
        let newPostList= postList.filter(function(post){
            return post.id!==postId;
        });
        setPostList(newPostList);
    }

    return(
        <PostListContext.Provider value={{
            postList: postList,
            addPost: addPost,
            deletePost: deletePost
        }} >
            {children}
        </PostListContext.Provider>
    )
}

export default PostListProvider