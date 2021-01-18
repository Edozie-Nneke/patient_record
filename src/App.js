import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from './components/Grid';
import Pages from './pagination/Pages';
import './App.css';
import {capitalize} from "lodash"

function App() {

    const [patientProfile, setPatientProfile] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [isloading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [gender, setGender] = useState('');

    const updateInput = (e) => {
        setPaymentMethod('');
        setGender('');
        setSearchInput(e.target.value);
        
    }

    const handlePayChange = e => {
        setGender('');
        setSearchInput('');
        setPaymentMethod(e.target.value);
    }

    const handleGenderChange = e => {
        setSearchInput('');
        setPaymentMethod('');
        setGender(e.target.value);
    }


    useEffect(() => {

        setIsLoading(true);
        setPatientProfile(patientProfile);

        const fetchProfile = async () => {
            const response = await axios(`https://api.enye.tech/v1/challenge/records`)

            const fetchedProfiles = await response.data.records.profiles;

            setPatientProfile(fetchedProfiles);

            setIsLoading(false);
        }
        
        fetchProfile();

        return [patientProfile];
        
    }, [])

     /** Assign a filter function that returns the desired filter for 
      * for either ther SEARCH bar, FILTER by Gender or FILTER by 
      * PaymentMethod
      */
    let filteredProfile = patientProfile.filter((eachObj) => {
        let refinedInput = capitalize(searchInput)
        if(gender){
            return eachObj.Gender.indexOf(gender) !== -1;
        }else{
            if(paymentMethod){
                return eachObj.PaymentMethod.indexOf(paymentMethod) !== -1;
            }
        }
       
        return eachObj.FirstName.indexOf(refinedInput) !== -1;
    });
    

    //  Declare and workout modalities for Pagination
    const indexOfLastPP = currentPage * 20;
    const indexOfFirstPP = indexOfLastPP - 20;
    const current = filteredProfile.slice(indexOfFirstPP, indexOfLastPP);
    
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    

    return (
        <main className='main'>
            <header className='head'>
                <h3>Patient Profile</h3>
                <div className='filterBy Pay'>
                    <select className='custom-select' onChange={handlePayChange}>
                        <option value='Filter By Payment Method'>Filter By Payment Method</option>
                        <option value='paypal'>Paypal</option>
                        <option value='cc'>CC</option>
                        <option value='money order'>Money Order</option>
                        <option value='check'>Check</option>
                    </select>
                </div>
                <div className='filterBy Gender'>
                    <select className='custom-select' onChange={handleGenderChange}>
                        <option value='Filter by Gender'>Filter by Gender</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Prefer to skip'>Others</option>
                    </select>
                </div>
                <input
                    type='text'
                    className='input_value'
                    onChange={updateInput}
                    value={searchInput}
                    placeholder='Search Patient Name'
                />
            </header>
            <Grid currentfilteredProfile={current} isloading={isloading} />
            <Pages dataLength={filteredProfile.length} changePage={handlePageChange} />
        </main>
    )
}

export default App;