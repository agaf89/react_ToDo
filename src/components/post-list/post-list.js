import React from 'react'
import PostListItem from '../post-list-item';
import ListGroup from 'react-bootstrap/ListGroup'

const PostList = ({posts})=>{
    console.log(posts)
    const elements = posts.filter((item)=>{
        return typeof(item)==='object';
    }).map((item)=>{
        const {id,...itemProps}=item;
        return (
            <li key={id} className = 'list-group-item'>
                <PostListItem {...itemProps} />
            </li>
        )
    })
    return (
       <ListGroup className= 'app-list'>
           {elements}
       </ListGroup> 
    )
}

export default PostList;