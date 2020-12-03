import React from 'react';
import { Button } from 'react-bootstrap';
import './index.scss';

const Book = (props) => {
    const { imgSrc, title, author, amount, children } = props;
    const pressEvent = () => { 
        alert(title)
    }
    return (
			<div className='book'>
				<img src={imgSrc} alt='' />
				<h2>{title}</h2>
				<div className='author'>By {author} </div>
				<p>Rs. {amount}</p>
				<p>{children}</p>
				<Button
					onClick={pressEvent}
					variant='primary'
				>
					Primary
				</Button>
			</div>
		);
}

export default Book
