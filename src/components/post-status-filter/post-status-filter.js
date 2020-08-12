import React from 'react';
import Button from 'react-bootstrap/Button'

const PostStatusFilter = () => {
    return (
        <div className= 'btn-group'>
            <Button variant="info">Все</Button>
            <button type='button' className='btn btn-outline-secondary'>Понравилось</button>

        </div>
    )
}
export default PostStatusFilter;