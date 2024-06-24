import axios from "axios";

const fetchHouse = async (event) => {
    try {
        const response = await axios.post(`http://localhost:3000/v1/event/${event}`,);
        return response.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

export default fetchHouse;