import axios from 'axios'

export const addUser = async (userData) => {
    const config = {
        headers: {'Content-Type': 'application/json'}
    }

    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/users/add-user`,userData, config)
        console.log(res)
    } catch(err) {
        console.log(err)
    }
}