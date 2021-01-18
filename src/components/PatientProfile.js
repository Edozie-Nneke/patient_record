import React from 'react';

const PatientProfile = ({ obj }) => {

    return (
       <tr>
           <td>{obj.FirstName}</td>
           <td>{obj.LastName}</td>
           <td>{obj.Gender}</td>
           <td>{obj.CreditCardType}</td>
           <td>{obj.Email}</td>
           <td>{obj.UserName}</td>
           <td>{obj.LastLogin}</td>
           <td>{obj.PhoneNumber}</td>
           <td>{obj.PaymentMethod}</td>
       </tr>
    )

}

export default PatientProfile;

