import React, { useState } from 'react';

// import { ControlledForm } from './ControlledForm';
// import { UncontrolledForm } from './UncontrolledForm';
// import { ControlledModal } from './ControlledModal';
// import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

function App() {
  // const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnBoardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  const Step1 = ({ goToNext }) => (
    <>
      <h1>Step 1</h1>
      <button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
    </>
  );
  const Step2 = ({ goToNext }) => (
    <>
      <h1>Step 2</h1>
      <button onClick={() => goToNext({ age: 100 })}>Next</button>
    </>
  );
  const Step3 = ({ goToNext }) => (
    <>
      <h1>Step 3</h1>
      <p>Congrats - you qualify for some offer.</p>
      <button onClick={() => goToNext({})}>Next</button>
    </>
  );
  const Step4 = ({ goToNext }) => (
    <>
      <h1>Step 4</h1>
      <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
    </>
  );

  return (
    <>
      {/* <UncontrolledForm />
      <ControlledForm />
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => {
          setShouldShowModal(false);
        }}
      >
        <h1>Modal Content</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
      </button> */}
      {/* <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert('Onboarding complete!');
        }}
      >
        <Step1 />
        <Step2 />
        <Step3 />
      </UncontrolledOnboardingFlow> */}
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <Step1 />
        <Step2 />
        {onboardingData.age >= 62 && <Step3 />}
        <Step4 />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
