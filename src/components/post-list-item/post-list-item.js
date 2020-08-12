import React, { Component } from 'react'

export default class PostListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            like: false,
            Heart: false
        };
        this.onLike = this.onLike.bind(this);
        this.onHeart = this.onHeart.bind(this);
    }
    onLike(){
        this.setState(({like})=>({
            like: !like
        }))
    }
    onHeart(){
        this.setState(({Heart})=>({
            Heart: !Heart
        }))
    }


    render(){
        const {label} = this.props;
        const {like,Heart} = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';
        if (like){
            classNames += ' important';
        }
        if (Heart){
            classNames += ' like';
        }


        return (
        <div className = {classNames}>
            <span 
            className = 'app-list-item-label'
            onClick={this.onHeart}>
                {label}
            </span>
            <div className = 'd-flex justify-content-center align-items-center'>
                <button 
                type = 'button'
                className = 'btn-star btn-sm'
                onClick={this.onLike}>
                    <i className = 'fa fa-star'></i>
                </button>
                <button type = 'button' className = 'btn-trash btn-sm' >
                    <i className = 'fa fa-trash-o'></i>
                </button>
                <i className = 'fa fa-heart'></i>
            </div>
        </div>
        )
    }
}
