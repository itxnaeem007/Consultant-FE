import axios from "axios";
import Config from "./../config/index";

const getTeamService = async () => {
    const url = `${Config.baseUrl}/api/team/list`;
    const result: any = await axios.get(url);
    return result;
};

export { getTeamService }