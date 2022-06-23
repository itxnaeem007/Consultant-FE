import React, { useState } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import {
    WriteBlogService,
    getAuthorService,
    getBlogListService,
    deleteBlogService,
    getUserService,
    updateBlogService
} from './../../services/blog.service';
import { toast, ToastContainer } from 'react-toastify';
import { BiEditAlt } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
interface PostData {
    title: string;
    overview: string;
    content: string;
    author: string;
    thumbnail: File | undefined;
    featured: boolean;
}

function BlogWriteScreen() {
    const [userDetail, setUserDetail] = useState<any>();
    const [blogList, setBlogList] = useState<any>()

    const [postData, setPostData] = useState<PostData>({
        title: '',
        overview: '',
        content: '',
        author: '',
        thumbnail: undefined,
        featured: false
    })

    const handleEditorChange = (content: any, editor: any) => {
        postData.content = content;
        setPostData(postData)
        setPostData(prevState => ({
            ...postData,
            content: content,
        }));
    }

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setPostData(prevState => ({
                ...postData,
                thumbnail: event.target.files[0],
            }));
        }
    };

    const submitPostToServer = async () => {
        console.log('postData', postData)
        try {
            await WriteBlogService(postData)
            let emptyObj = {
                title: '',
                overview: '',
                content: '',
                author: '',
                thumbnail: undefined,
                featured: false
            }
            setPostData(emptyObj)
            fetchBlogByAuthor()
        } catch (error) {
            toast.error('Fields are Missing')
        }
    }
    const [authorList, setAuthlist] = useState<any>([])

    React.useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const res = await getAuthorService();
                console.log('res', res)
                setAuthlist(res.data.results);

                //fetch user detail
                const authResponse = await getUserService();
                setUserDetail(authResponse.data)

                // fetch user blog by id
                const blogResponse = await getBlogListService(authResponse.data.id);
                setBlogList(blogResponse.data.results)
            } catch (error) { }
        }
        fetchAuthor()
    }, [])

    // frtch blogs
    const fetchBlogByAuthor = async () => {
        try {
            const response = await getBlogListService(userDetail.id);
            setBlogList(response.data.results)
        } catch (error) { }
    }

    // delete blog

    const DeleteBlog = async (id: any) => {
        try {
            const response = await deleteBlogService(id);
            fetchBlogByAuthor()
            console.log('delete', response)
        } catch (error) { }
    }

    //update post 
    const UpdatePost = async () => {
        try {
            await updateBlogService(userDetail.id, postData)
            let emptyObj = {
                title: '',
                overview: '',
                content: '',
                author: '',
                thumbnail: undefined,
                featured: false
            }
            setPostData(emptyObj)
            fetchBlogByAuthor()
        } catch (error) {
            toast.error('Fields are Missing')
        }
    }

    return (
        <div >
            <ToastContainer />
            <div className="container-fuild mt-5">
                <div className="section-title ">
                    <h2 className="mt-3">ADD Post</h2>
                </div>
                <div className="section-title ">
                    <h2 className="mt-3">ADD Post</h2>
                    <div className="bar"></div>
                </div>
                <div className="row">
                    <div className="col-lg-3 pl-5">
                        <div className="sidebar-area" >
                            <div className="widget widget_recent_posts">
                                <h3 className="widget-title">Recent Post</h3>
                                <div className="bar"></div>
                                <ul >
                                    {blogList && blogList.map((blog: any, index: number) => {
                                        return (
                                            <li>
                                                <div className="recent-post-thumb">
                                                    <img src={blog.thumbnail} alt="blog" />
                                                </div>
                                                <div className="recent-post-content">
                                                    <p style={{ color: 'gray' }}>{blog.title}</p><span><BiEditAlt
                                                        onClick={() => {
                                                            setPostData(prevState => ({
                                                                ...postData,
                                                                title: blog.title,
                                                                overview: blog.overview,
                                                                content: blog.content,
                                                                author: userDetail.id,
                                                                thumbnail: blog.thumbnail,
                                                                featured: false
                                                            }));
                                                        }}
                                                    /></span><span className="ml-1"><FiTrash2
                                                        onClick={() => {
                                                            DeleteBlog(blog.id)
                                                        }}
                                                    /></span></div>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 border-left">
                        <div className="row mt-3">
                            <div className="col-lg-1 mt-2">
                                Title
                            </div>
                            <div className="col-lg-3">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    value={postData['title']}
                                    onChange={(e) => {
                                        setPostData(prevState => ({
                                            ...postData,
                                            title: e.target.value,
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-1 mt-2">
                                Overview
                    </div>
                            <div className="col-lg-3 mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="overview"
                                    value={postData['overview']}
                                    onChange={(e) => {
                                        setPostData(prevState => ({
                                            ...postData,
                                            overview: e.target.value,
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                        <Editor
                            value={postData.content}
                            initialValue="<p>This is the initial content of the editor</p>"
                            apiKey={'o7l33046oijipntzrm9yzvjhpyq8fskmmk7t6pxo5caudcjm'}
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar1:
                                    'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | outdent indent | removeformat | help fullscreen preview bold italic underline | fontselect | fontsizeselect  | forecolor backcolor | indent outdent | bullist numlist table | link image media | codesample',

                            }}
                            onEditorChange={handleEditorChange}
                        />
                        <div className="row mt-3">
                            <div className="col-lg-1 mt-2">
                                Author
                    </div>
                            <div className="col-lg-3">
                                <select name="" value={postData['author']} id="autor-id" className="form-control"
                                    onChange={(e) => {
                                        setPostData(prevState => ({
                                            ...postData,
                                            author: e.target.value,
                                        }))
                                    }}
                                >
                                    <option value="" defaultChecked hidden>Select Author</option>
                                    {authorList && authorList.map((element: any, index: number) => {
                                        return (
                                            <option value={element.user.id} >{element.user.first_name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-1 mt-2">
                                Thumbnail
                    </div>
                            <div className="col-lg-3">
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) => {
                                        onImageChange(e)
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-lg-12 pl-0 mt-5">
                            <button className="btn"
                                onClick={() => {
                                    submitPostToServer()
                                }}
                            >
                                Create Post
                            </button>
                            <button className="btn ml-2"
                                onClick={() => {
                                    UpdatePost()
                                }}
                            >
                                Update Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogWriteScreen;