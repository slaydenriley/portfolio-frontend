import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import editPost from '../../actions/editPost'
import fetchSinglePost from '../../actions/fetchSinglePost'
import fetchTags from '../../actions/fetchTags'
import PostEditor from '../../components/posts/PostEditor'
import { BlockReserveLoading } from 'react-loadingg';
import { Redirect} from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class EditSinglePostContainer extends React.Component {
  state = {
    title: this.props.post.post.title,
    user_id: this.props.post.post.user_id,
    content: this.props.post.post.content,
    category: this.props.post.post.category,
    id: this.props.match.params.id,
    image_link: this.props.post.post.image_link,
    redirectToNewPage: false,
    tags: []
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchSinglePost(id)
    this.props.fetchTags()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        title: this.props.post.post.title,
        user_id: this.props.post.post.user_id,
        content: this.props.post.post.content,
        category: this.props.post.post.category,
        id: this.props.match.params.id,
        image_link: this.props.post.post.image_link,
        redirectToNewPage: false,
        tags: []
      })

    if (this.props.post.post.tags) {
      this.setState({tags: this.props.post.post.tags.map(tag => tag.id.toString())})
    }
    }
  }

  handleEditorChange(value) {
    this.setState({content: value})
  }

  handleChange = event => {
    let index
    if (event.target.type === "checkbox" && event.target.checked === true) {
      this.state.tags.push(event.target.value)
    } else if (event.target.type === "checkbox" && event.target.checked === false) {
        index = this.state.tags.indexOf(+event.target.value)
        this.state.tags.splice(index, 1)
    } else {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
  };

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = this.state
    this.props.editPost(formData)
    this.props.history.push(`/${this.state.category}s/${this.state.id}`)
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  }

  handleLoading = () => {
    if (this.props.post.requesting || this.props.tags.requesting) {
      return <BlockReserveLoading />;
    }
    else {
      return (
        <div className="new-post" onSubmit={this.handleSubmit}>
          <form>
            <div onChange={this.handleChange}>
              <PostEditor post={this.props.post.post} tags={this.props.tags.tags}/>
            </div>

            <div className="rich-text-editor">
              <ReactQuill
                defaultValue={this.props.post.post.content}
                onChange={this.handleEditorChange.bind(this)}
                modules={this.modules}
              />
            </div>
          </form>
        </div>
      )
    }
  }

  render() {
    return (
        <div>
          {this.handleLoading()}
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.single_post,
    tags: state.tags
  }
}

export default connect(mapStateToProps, {fetchSinglePost, editPost, fetchTags})(EditSinglePostContainer)

//this.props.post.post.tags.map(tag => tag.id.toString())
