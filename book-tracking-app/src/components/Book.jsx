import React, { Component } from 'react'

export default class Book extends Component {
  handleSelect = (event) => {
    const { value } = event.target
    const { book } = this.props
    this.props.changeBookShelf(book, value)
  }

  render() {
    const { title } = this.props.book
    const { authors } = this.props.book
    const { thumbnail } = this.props.book.imageLinks || ''

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleSelect}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {authors && authors.map(name => (
          <div key={name} className="book-authors">
            {name}
          </div>
        ))}
      </div>
    )
  }
}
