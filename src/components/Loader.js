import React from 'react';
import loader from '../images/load.gif';

const Loader = ({ isloading }) => {
    return <img className='img' src={loader} isloading={isloading} alt='loading...'/>
}

export default Loader;
