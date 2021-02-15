import React from 'react'
import {connect} from 'react-redux'
import fetchTags from '../../actions/fetchTags'
import addNewTag from '../../actions/addNewTag'
import Tags from '../../components/tags/Tags'
import { BlockReserveLoading } from 'react-loadingg';

class TagContainer extends React.Component {
  
  state = {}

  componentDidMount() {
    this.props.fetchTags()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let tag = {tag: {name: this.state.tag}}
    this.props.addNewTag(tag)
  }

  handleLoading = () => {
    if (this.props.tags.requesting) {
      <BlockReserveLoading />;
    }
    else {
      return (
        <div onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Tags tags={this.props.tags.tags} />
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
    tags: state.tags
  }
}

export default connect(mapStateToProps, {fetchTags, addNewTag})(TagContainer)
