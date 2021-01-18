import React from 'react';
import Loader from './Loader'
import PatientProfile from './PatientProfile';

const Grid = ({ currentfilteredProfile,  isloading }) => {
    
    return (
        !isloading ?
         (
             <div className='container tableContainer ' style={{overflow_x:'auto'}}>
                <table className='table table-sm table-hover table-striped shadow p-3 mb-5 bg-white rounded content'>
                    <thead className='thead-dark'>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Credit Card Type.</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>LastLogin</th>
                        <th>Phone Number</th>
                        <th>Payment Method</th>              
                    </thead>
                    <tbody>
                        {currentfilteredProfile.map(obj => (<PatientProfile key={obj.CreditCardNumber} obj={obj}></PatientProfile>))}
                    </tbody>
                </table>
            </div>
         ): (<Loader />) 
        
    )   
}

export default Grid;
