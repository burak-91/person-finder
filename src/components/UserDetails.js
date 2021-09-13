import { upperCaseFirstLetter } from '../utils/string';

function UserDetails({ user }) {
  const displayProps = ['name', 'username', 'email', 'website'];
  return (
    <>
      <h5>User Details</h5>
      <ul className="green-blue-list">
        {displayProps.map(userProp => 
          <li key={userProp} className="green-blue-list-item">
            <p className="listing">{upperCaseFirstLetter(userProp)}: <b>{user[userProp]}</b></p>
          </li>
        )}
      </ul>
    </>
  )
}

export default UserDetails;