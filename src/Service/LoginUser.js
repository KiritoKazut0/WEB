import axios from "axios";

const LoginUser = async (credentials) => {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

export default LoginUser;