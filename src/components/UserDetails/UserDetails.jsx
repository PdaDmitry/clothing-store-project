import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsersById } from '../../../api';

export const UseDetails = () => {
  const params = useParams();
  console.log('params: ', params);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const getParams = async () => {
        const data = await fetchUsersById(params.id);
        setUser(data);
        // console.log(data);
      };
      getParams();
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  if (!user) {
    //It is possible to install a spinner while an asynchronous request is being processed
    return <p>Loading user details...</p>;
  }

  return (
    <div>
      <p>User Details </p>

      <ul>
        <li>User ID: {user.id}</li>
        <li>
          {user.firstName} {user.lastName}
        </li>
        <li>Age: {user.age}</li>
        <li>Email: {user.email}</li>
        <li>Address: {`${user.address.city}, ${user.address.address}`}</li>
      </ul>
    </div>
  );
};
