// import { withEditableUser } from './withEditableUser';
import { withEditableResource } from "./withEditableResource";

export const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onResetUser, onSaveUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <label>
          Name:{' '}
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>

        <label>
          Age:{' '}
          <input
            type="number"
            value={age}
            onChange={(e) => onChangeUser({ age: e.target.value })}
          />
        </label>

        <label>
          Hair Color:{' '}
          <input
            type="text"
            value={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save Changes</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  'user', '/users/234'
);
