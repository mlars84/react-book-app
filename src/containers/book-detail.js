import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    const props = this.props.book
    console.log('BookDetail props:', props)
    if (!this.props.book) {
      return <h3 className="book-details">Select a book to get started.</h3>
    }
    return (
      <div className="book-details">
        <h3>Details for:</h3>
        <div>You selected {props.title} by {props.author}.</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)