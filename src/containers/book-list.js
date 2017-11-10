import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

 
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title} 
          onClick={() => this.props.selectBook(book)} 
          className="books list-group-item">{book.title}
        </li>
      )
    })
  }

  render() {
    console.log('this.props:', this.props)
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned here will show as props
  //inside BookList
  return {
    books: state.books
  }
}

//anything returned will end up as props on the book-list container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called the result should be passed to all reducers:
  //dispatch function takes actions, receives them and spits out to all the different reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote book-list from a component to a container - it needs to know about about new dispatch
//method, selectBook and make it available as a prop. 
export default connect(mapStateToProps, mapDispatchToProps)(BookList)