import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';
import StepNavigation from './components/StepNavigation';

const App = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const validateStep = () => {
        let errors = {};
        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^[0-9]+$/;
        const cityRegex = /^[A-Za-z\s]+$/;
        const stateRegex = /^[A-Za-z\s]+$/;
        const zipRegex = /^[0-9]+$/;
        switch (step) {
            case 1:
                if (!formData.name) errors.name = 'Name is required';
                else if (!nameRegex.test(formData.name)) errors.name = 'Name can only contain letters and spaces';
                if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
                if (!formData.phone) errors.phone = 'Phone is required';
                else if (!phoneRegex.test(formData.phone)) errors.phone = 'Phone can only contain numbers';
                break;
            case 2:
                if (!formData.address1) errors.address1 = 'Address Line 1 is required';
                if (!formData.city) errors.city = 'City is required';
                else if (!cityRegex.test(formData.city)) errors.city = 'City can only contain letters and spaces';
                if (!formData.state) errors.state = 'State is required';
                else if (!stateRegex.test(formData.state)) errors.state = 'State can only contain letters and spaces';
                if (!formData.zip) errors.zip = 'Zip is required';
                else if (!zipRegex.test(formData.zip)) errors.zip = 'Zip code can only contain numbers';
                break;
            default:
                break;
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    


    return (
        <div className='container'>
            <div className='form-box'>
            {step === 1 && <PersonalInfo formData={formData} errors={errors} handleChange={handleChange} />}
            {step === 2 && <AddressInfo formData={formData} errors={errors} handleChange={handleChange} />}
            {step === 3 && <Confirmation formData={formData} />}

            <StepNavigation step={step} nextStep={nextStep} prevStep={prevStep} />
            </div>
        </div>
    );
};

export default App;
