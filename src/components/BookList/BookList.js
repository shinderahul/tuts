import React from 'react'
import Book from '../Book/Book'
import {data} from './books'
import './index.css'
import { v4 as uuidv4 } from 'uuid';

const BookList = () => {
    return (
        <div className="book-list">
            {data.map((book) => { 
            return <Book {...book} key={uuidv4()}/>
            })}
        </div>
    )
}

export default BookList
