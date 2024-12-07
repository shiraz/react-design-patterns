import React, { useEffect, useState } from 'react';

export const ControlledForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [nameInputError, setNameInputError] = useState('');

  useEffect(() => {
    if (name.length < 2) {
      console.log('Name must be 2 or more characters.');
      setNameInputError('Name must be 2 or more characters.');
    } else {
        setNameInputError('');
    }

    if (age < 18) {
      console.log('You must be 18 or older to submit this form.');
    }
  }, [age, hairColor, name]);

  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
