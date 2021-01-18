import React from 'react'
import '../App.css';

function Pages({ dataLength, changePage }) {

    const paginationNumber = [];

    for(let p = 1; p <= Math.ceil(dataLength / 20); p++){
        paginationNumber.push(p);
    }


    return (
        <nav className='Page navigation example mx-auto pages'>
            <ul className='pagination'>
                {paginationNumber.map(page => (
                    <li key={page} className='page-item'>
                        <a className='page-link' href='!#' onClick={() => changePage(page)}>{page}</a>
                    </li>
                ))}
            </ul>       
        </nav>
    )
}

export default Pages;