import axios from "axios";
import Config from "./../config/index";

const WriteBlogService = async (postobj: any) => {
    let token = sessionStorage.getItem('token') || '';

    var bodyFormData = new FormData();

    bodyFormData.append('title', postobj.title);
    bodyFormData.append('overview', postobj.overview);
    bodyFormData.append('content', postobj.content);
    bodyFormData.append('author', postobj.author);
    bodyFormData.append('thumbnail', postobj.thumbnail);
    // bodyFormData.append('featured', 'false');

    const url = `${Config.baseUrl}/api/blog/create/`;
    const result: any = await axios.post(url, bodyFormData, {
        headers: {
            Authorization: `Token ${token}`
        }
    });
    return result;
};

const loginService = async (data: any) => {
    const url = `${Config.baseUrl}/api/auth/token/login/`;
    const result: any = await axios.post(url, data);
    return result;
};

const getAllBlogService = async () => {
    const url = `${Config.baseUrl}/api/blog/list`;
    const result: any = await axios.get(url);
    return result;
};


const SearchBlogService = async (search_value: string) => {
    const url = `${Config.baseUrl}/api/blog/list?search=${search_value}`;
    const result: any = await axios.get(url);
    return result;
};

const getAuthorService = async () => {
    const url = `${Config.baseUrl}/api/blog/author/list`;
    const result: any = await axios.get(url);
    return result;
};


const getBlogListService = async (id: any) => {
    const url = `${Config.baseUrl}/api/blog/author/blogs/${id}`;
    const result: any = await axios.get(url);
    return result;
};

const getBlogDetailService = async (id: any) => {
    const url = `${Config.baseUrl}/api/blog/detail/${id}`;
    const result: any = await axios.get(url);
    return result;
};

const getUserService = async () => {
    let token = sessionStorage.getItem('token') || '';
    const url = `${Config.baseUrl}/api/auth/users/me/`;
    const result: any = await axios.get(url, {
        headers: {
            Authorization: `Token ${token}`
        }
    });
    return result;
};

const deleteBlogService = async (id: any) => {
    let token = sessionStorage.getItem('token') || '';
    const url = `${Config.baseUrl}/api/blog/delete/${id}`;
    const result: any = await axios.delete(url, {
        headers: {
            Authorization: `Token ${token}`
        }
    });
    return result;
};

const updateBlogService = async (id: any, postobj: any) => {
    let token = sessionStorage.getItem('token') || '';

    var bodyFormData = new FormData();

    bodyFormData.append('title', postobj.title);
    bodyFormData.append('overview', postobj.overview);
    bodyFormData.append('content', postobj.content);
    bodyFormData.append('author', postobj.author);
    // bodyFormData.append('thumbnail', postobj.thumbnail);

    const url = `${Config.baseUrl}/api/blog/update/${id}`;
    const result: any = await axios.patch(url, bodyFormData, {
        headers: {
            Authorization: `Token ${token}`
        }
    });
    return result;
};

export { getAuthorService, updateBlogService, deleteBlogService, getUserService, getBlogDetailService, WriteBlogService, loginService, getAllBlogService, SearchBlogService, getBlogListService }