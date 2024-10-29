import { Link } from 'react-router-dom';
import { User } from '../User/User';

export function UserList({ users }) {
  return (
    <div>
      <p>User List:</p>
      <ul>
        {users.map(({ id, firstName, lastName }) => (
          <li key={id}>
            <Link to={id.toString()}>
              <User name={firstName} lastName={lastName} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
