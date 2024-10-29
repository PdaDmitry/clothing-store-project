import axios from 'axios';

export const fetchUsers = async () => {
  const response = await axios.get('https://dummyjson.com/users');
  // console.log(response.data.users);

  return response.data.users;
};

export const fetchUsersById = async id => {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);

  return response.data;
};
