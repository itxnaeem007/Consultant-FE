import axios from "axios";
import Config from "./../config/index";

const getService = async () => {
    const url = `${Config.baseUrl}/api/service/list`;
    const result: any = await axios.get(url);
    return result;
};

export { getService }