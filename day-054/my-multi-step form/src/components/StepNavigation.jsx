import React from 'react'

const StepNavigation = ({ step, nextStep, prevStep }) => {
  return (
    <div>
      {step > 1 && <button onClick={prevStep}>Back</button>}
      {step < 3 ? (
        <button onClick={nextStep}>Next</button>
      ) : (
        <button onClick={() => alert('Form Submitted')}>Submit</button>
      )}
    </div>
  );
};

export default StepNavigation;
