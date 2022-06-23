import React, { useState } from 'react';
import blogImage from './../../shared/_next/static/images/blog-img1-4578e9e080aff43b32bd1438b270465b.jpg';
import blog2Image from './../../shared/_next/static/images/blog-img2-91359a1a2e74069088c8f5dfa8560d8a.jpg';
import blog4Image from './../../shared/_next/static/images/blog-img4-de3021b792a6ff5d0aef1fd3aff391ae.jpg';
import blog6Image from './../../shared/_next/static/images/blog-img3-feae63b1dfc89019b015564b04fb8603.jpg';
import work1Image from './../../shared/_next/static/images/work-img1-8dacc40f0f223bcbeff9d70d17a64e26.jpg';
import work2Image from './../../shared/_next/static/images/work-img2-df7b4b1147c02fdc7c3645f91b593ede.jpg';
import work3Image from './../../shared/_next/static/images/work-img3-f5d9cdf6e8362b5c4e8ade5c4ce2de52.jpg';
import work4Image from './../../shared/_next/static/images/work-img4-eda5d736b4e68cc9814b6909f458ead9.jpg';
import work5Image from './../../shared/_next/static/images/work-img5-6e6e89da47c52ed5334b329ab0f69fc8.jpg';
import work6Image from './../../shared/_next/static/images/work-img6-3d2b6b2f9b45f16dd1e3b9c5545b9e3e.jpg';
import { getAllBlogService, SearchBlogService } from './../../services/blog.service'
import moment from 'moment';
import FloatingStyle from '../../shared/floatingStyle';

function BlogScreen() {

    const [blogList, setBlogList] = useState<any>([])
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        setLoading(true);
        const fetchBlog = async () => {
            try {
                const response = await getAllBlogService();
                setBlogList(response.data.results)
            } catch (error) { }
            setLoading(false);
        }
        fetchBlog()
    }, [])


    const searchData = async () => {
        setLoading(true);
        try {
            const res = await SearchBlogService(searchValue)
            setBlogList(res.data.results)
        } catch (error) { }
        setLoading(false);
    }

    //tags
    const tagArray = ['Web', 'Android', 'Python', 'Django', 'AI', 'Design', 'UI', 'React Native']

    const searchDataByTag = async (tag: string) => {
        setLoading(true);
        try {
            const res = await SearchBlogService(tag)
            setBlogList(res.data.results)
        } catch (error) { }
        setLoading(false);
    }

    return (
        <div >
            <section className="page-title-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Our Latest Blog</h2>
                        </div>
                    </div>
                </div>
                <FloatingStyle />
            </section>
            <section className="blog-area blog-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                {!loading ?
                                    blogList && blogList.map((blog: any, index: number) => {
                                        return (
                                            <div className="col-lg-6 col-md-6" key={index}>
                                                <div className="single-blog-post">
                                                    <a href={`/blog/detail/${blog.id}`} className="post-image"><img src={blog.thumbnail} alt="blog" /></a>
                                                    <div className="blog-post-content">
                                                        <ul>
                                                            <li><i className="icofont-user-male"></i> <a href={`/blog/detail/${blog.id}`}>{blog.author}</a></li>
                                                            <li><i className="icofont-wall-clock"></i>{moment(blog.timestamp).format("DD MMM YYYY")}</li>
                                                        </ul>
                                                        <h3><a href={`/blog/detail/${blog.id}`}>{blog.title}</a></h3>
                                                        <p>{blog.overview}</p><a href={`/blog/detail/${blog.id}`} className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    <div>
                                        <div className="preloader-area">
                                            <div className="lds-hourglass"></div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar-area">
                                <div className="widget d-flex widget-search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={searchValue}
                                        placeholder="Search"
                                        onChange={(e) => {
                                            setSearchValue(e.target.value)
                                        }}
                                        onBlur={() => {
                                            searchData()
                                        }}
                                        onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                                searchData();
                                            }
                                        }}
                                    />
                                    <i onClick={() => {
                                        searchData()
                                    }} className="icon icofont-search-2 "></i>
                                </div>
                                <div className="widget widget_recent_posts">
                                    <h3 className="widget-title">Recent Post</h3>
                                    <div className="bar"></div>
                                    <ul>
                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="!#"><img src={blogImage} alt="blog" /></a>
                                            </div>
                                            <div className="recent-post-content">
                                                <h3><a href="!#">10 Hot Marketing Trends You Need to Implement</a></h3><span className="date">23 January 2018</span></div>
                                        </li>
                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="!#"><img src={blog6Image} alt="blog" /></a>
                                            </div>
                                            <div className="recent-post-content">
                                                <h3><a href="!#">10 Hot Marketing Trends You Need to Implement</a></h3><span className="date">23 January 2018</span></div>
                                        </li>
                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="!#"><img src={blog2Image} alt="blog" /></a>
                                            </div>
                                            <div className="recent-post-content">
                                                <h3><a href="!#">10 Hot Marketing Trends You Need to Implement</a></h3><span className="date">23 January 2018</span></div>
                                        </li>
                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="!#"><img src={blog4Image} alt="blog" /></a>
                                            </div>
                                            <div className="recent-post-content">
                                                <h3><a href="!#">10 Hot Marketing Trends You Need to Implement</a></h3><span className="date">23 January 2018</span></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget widget_tag_cloud">
                                    <h3 className="widget-title">Popular Tags</h3>
                                    <div className="bar"></div>
                                    <div className="tagcloud row">
                                        {tagArray.map((tag, index) => {
                                            return (
                                                <div className="tags" key={index}
                                                    onClick={() => {
                                                        searchDataByTag(tag)
                                                    }}
                                                >
                                                    {tag}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="widget widget_text">
                                    <h3 className="widget-title">Instagram</h3>
                                    <div className="bar"></div>
                                    <ul>
                                        <li>
                                            <a href="!#"><img src={work1Image} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="!#"><img src={work2Image} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="!#"><img src={work3Image} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="!#"><img src={work4Image} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="!#"><img src={work5Image} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="!#"><img src={work6Image} alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BlogScreen;