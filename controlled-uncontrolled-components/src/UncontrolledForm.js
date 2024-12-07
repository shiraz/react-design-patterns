import React, { useRef } from 'react';

export const UncontrolledForm = () => {
  const ageRef = useRef();
  const hairColorRef = useRef();
  const nameRef = useRef();

  const handleSubmit = (e) => {
    console.log(nameRef.current.value);
    console.log(ageRef.current.value);
    console.log(hairColorRef.current.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameRef} />
      <input name="age" type="number" placeholder="Age" ref={ageRef} />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorRef}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
