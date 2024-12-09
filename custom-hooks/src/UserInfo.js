import axios from 'axios';

import { useDataResource } from './useDataResource';
// import { useUser } from './useUser';
// import { useResource } from './useResource';

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const localStorageResource = key => () => {
  return localStorage.getItem(key);
}

export const UserInfo = ({ userId }) => {
  // const user = useUser(userId);
  // const user = useResource(`/users/${userId}`);
  const user = useDataResource(serverResource(`/users/${userId}`));
  const message = useDataResource(localStorageResource('message'));

  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};
