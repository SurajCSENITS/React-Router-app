import React, { useContext } from 'react'
import Post from './Post'
import { PostListContext } from '../store/Post-List-Store'

function PostList() {

  const {postList} = useContext(PostListContext);
  
  return (
    <div>
      {
        postList.map(function(post){
          return (<Post post={post} key={post.id} />)
        })
      }
    </div>
  )
}

export default PostList