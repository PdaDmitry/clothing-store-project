import { useEffect, useState } from 'react';
import { fetchUsers } from '../../../api';
import { UserList } from '../../components/UserList/UserList';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchUsers();
        setUsers(data);
        console.log(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <UserList users={users} />
    </>
  );
};
