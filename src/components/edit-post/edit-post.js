import React from 'react';

import { connect } from 'react-redux';
import { getPost } from '../../redux/actions/posts';

class EditPost extends React.Component {


    state = {
        title: '',
        post: '',
        author: '',
        category: '',
    }

    onChange = event => {
        
        let { id, value } = event.target;
        
        this.setState({
            [id]: value
        })

        
    }

    componentDidMount () {
        this.props.getPost (this.props.postId);
    }

    componentWillReceiveProps (nextProps) {

        let { title, body, id, author, category } = nextProps.post?nextProps.post:null;

        this.setState({
            title,
            body,
            author, 
            category
        })
    }

    render () {

        let { categories } = this.props;


        return (
            
            <div>
                <div>
                    <select name="" id="" onChange={this.onChange} value={this.state.category}>
                        {categories.map((category, index) => {
                            return <option value={category.value} key={index}>{category.name}</option>
                        })}
                    </select>
                </div>

                <div>
                    <input placeholder="Title" onChange={this.onChange} type="text" id="title" value={this.state.title} />
                </div>
                <div>
                    <textarea onChange={this.onChange} id="body" value={this.state.body} />
                </div>
                <div>
                    <input placeholder="Your name"  onChange={this.onChange} type="text" id="author" value={this.state.author} />
                </div>
                <div>
                    <a onClick={this.handleSubmit} href="">Submit</a>
                </div>
            </div>
           
        );
    }
}

const mapStateToProps = state => {

    let { post, categories } = state;
    return {
        post,
        categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: id => dispatch(getPost(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (EditPost);