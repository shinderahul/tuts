import React from 'react'
import Book from '../Book/Book'
import {data} from './books'
import './index.css'

const BookList = () => {
    return (
        <div className="book-list">
            {data.map((book) => { 
                return <Book {...book} />
            })}
        </div>
    )
}

export default BookList
