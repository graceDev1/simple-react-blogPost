import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { postBlog } from '../../actions/blog';
import PropTypes from 'prop-types';


export class NewPost extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : "",
            content: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();
        const post = {
            title:this.state.title,
            content:this.state.content
        }
        this.props.postBlog(post);
    }

    render() {
        return (
            <Fragment>
                <div className="card card-body mt-4 mb-4">
                    <h3> ADD POST HERE </h3>
                    <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <input className="form-control" type="text" onChange={this.onChange} value={this.state.title} name="title" placeholder="Tape title"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" onChange={this.onChange} value={this.state.content} name="content" placeholder="Content">
                        </textarea>
                    </div>
                   
                    <div className="form-group">
                        <button className="btn btn-success" type="submit" >ADD</button>
                    </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

NewPost.propTypes = {
    getPost: PropTypes.func.isRequired
}


export default connect(null, { postBlog })(NewPost);
