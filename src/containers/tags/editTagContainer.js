import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import fetchTags from '../../actions/fetchTags'
import deleteTag from '../../actions/deleteTag'
import addNewTag from '../../actions/addNewTag'
import { useHistory } from 'react-router-dom'
import { BlockReserveLoading } from 'react-loadingg';
import TagEditor from '../../components/tags/TagEditor'
import Tags from '../../components/tags/Tags'

class EditTagContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.props.fetchTags()
  }

  handleDeleteClick = (event) => {
    let tag = {tag: {id: event.target.id}}
    if (window.confirm("Are you sure you want to delete this tag?")) {
      this.props.deleteTag(tag)
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let tag = {tag: {name: this.state.tag}}
    this.props.addNewTag(tag)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLoading = () => {
    if (this.props.requesting) {
      return <BlockReserveLoading />
    }
    else {
      return (
        <div className="posts">
          <h1>Tag Manager</h1>
          <hr className="line"/>
          <div className="row-1">
            <TagEditor tags={this.props.tags} delete={this.handleDeleteClick}/>
          </div>
          <div className="row-2" onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Tags />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <>
        {this.handleLoading()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    tags: state.tags,
    requesting: state.tags.requesting
  }
}

export default connect(mapStateToProps, {fetchTags, deleteTag, addNewTag})(EditTagContainer)
