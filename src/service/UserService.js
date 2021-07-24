import axios from "axios"

const usersUrl = 'https://reqres.in/api/users';
// TODO: paginación
const perPage = 10;

const fetchUsers = async () => {
    const response = await axios.get(`${usersUrl}?per_page=${perPage}`);
    const data = response.data.data;
    return data;
}

const fetchUser = async (id) => {
    const response = await axios.get(`${usersUrl}/${id}`);
    const data = response.data.data;
    return data;
}

export {
    fetchUsers,
    fetchUser
};