import React, { useState } from 'react';
// import client1 from './../../shared/_next/static/images/client2-ba19e26d1f551729a794ccdab7b23093.jpg';
// import client2 from './../../shared/_next/static/images/client3-b91a26226f8b63ca33fdf0239ed1da20.jpg';

import { getBlogDetailService } from './../../services/blog.service';
import moment from 'moment';
import FloatingStyle from '../../shared/floatingStyle';

function BlogDetail(props: any) {
    const [loading, setLoading] = React.useState(false);
    const [blogDetail, setBlogDetail] = useState<any>();

    React.useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await getBlogDetailService(props.match.params.type)
                setBlogDetail(response.data)
                console.log('response response', response)
                let contentDiv = document.getElementById("content");
                if (contentDiv) {
                    contentDiv.innerHTML = response.data.content;
                }
            } catch (error) { }
            setLoading(true);
        }
        getDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div >
            <section className="page-title-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Blog Details</h2>
                        </div>
                    </div>
                </div>
                <FloatingStyle />
            </section>
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details">
                                {loading ?
                                    <div className="article-img"><img src={blogDetail.thumbnail} alt="blog-details" />
                                        < div className="date">{moment(blogDetail.timestamp).format("DD")} <br />{moment(blogDetail.timestamp).format("MMM")}</div>

                                    </div>
                                    : ''}
                                <div className="article-content">
                                    <ul className="category">
                                        <li><div className="tag">IT</div></li>
                                        <li><div className="tag">Mobile</div></li>
                                        <li><div className="tag">Marketing</div></li>
                                        <li><div className="tag">Design</div></li>
                                        <li><div className="tag">Development</div></li>
                                    </ul>
                                    {loading ?
                                        <>
                                            <h3>{blogDetail.overview}</h3>
                                        </> : ''}
                                    <div className="mt-5" id="content" ></div>
                                    <div className="share-post">
                                        <ul>
                                            <li><a href="!#"><i className="icofont-linkedin"></i></a></li>
                                            <li><a href="!#"><i className="icofont-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="post-comments">
                                <h3>Comments</h3>
                                <div className="single-comment">
                                    <div className="comment-img"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAjAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNjQ1MkQzRTNGRDMxMUU5OEIwQkQzMUExNjlDQTZDOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjQ1MkQzRjNGRDMxMUU5OEIwQkQzMUExNjlDQTZDOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NDUyRDNDM0ZEMzExRTk4QjBCRDMxQTE2OUNBNkM4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2NDUyRDNEM0ZEMzExRTk4QjBCRDMxQTE2OUNBNkM4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/b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"
                                        alt="client" /></div>
                                    <div className="comment-content">
                                        <h4>John Smith</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p><span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="!#">Reply</a>
                                    </div>
                                </div>
                                <div className="single-comment left-m">
                                    <div className="comment-img"><img src={client1} alt="client" /></div>
                                    <div className="comment-content">
                                        <h4>Doe John</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p><span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="!#">Reply</a>
                                    </div>
                                </div>
                                <div className="single-comment">
                                    <div className="comment-img"><img src={client2} alt="client" /></div>
                                    <div className="comment-content">
                                        <h4>Steven Doe</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p><span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="!#">Reply</a>
                                    </div>
                                </div>
                                <div className="single-comment">
                                    <div className="comment-img"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAjAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMDk0NTJFMTNGRDIxMUU5QUQzNTk2MDU4QTgyNUFGNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMDk0NTJFMjNGRDIxMUU5QUQzNTk2MDU4QTgyNUFGNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUwOTQ1MkRGM0ZEMjExRTlBRDM1OTYwNThBODI1QUY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUwOTQ1MkUwM0ZEMjExRTlBRDM1OTYwNThBODI1QUY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/b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"
                                        alt="client" /></div>
                                    <div className="comment-content">
                                        <h4>John Cina</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p><span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="!#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div className="leave-a-reply">
                                <h3>Leave a Reply</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group"><input type="text" className="form-control" placeholder="Full Name" /></div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group"><input type="email" className="form-control" placeholder="E-Mail" /></div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group"><textarea name="comment" cols={30} rows={5} className="form-control" placeholder="Your Comment"></textarea></div>
                                    </div>
                                    <div className="col-lg-12 col-md-12"><button type="submit" className="btn btn-primary">Submit</button></div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="sidebar-area">
                                <div className="widget widget-search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                    />
                                    <i onClick={() => {
                                    }} className="icon icofont-search-2 "></i>
                                </div>
                                <div className="widget widget_post_categories">
                                    <h3 className="widget-title">Post Categories</h3>
                                    <div className="bar"></div>
                                    <ul>
                                        <li><a href="!#"><i className="icofont-bubble-right"></i> Art</a></li>
                                        <li><a href="!#"><i className="icofont-bubble-right"></i> Book</a></li>
                                        <li><a href="!#"><i className="icofont-bubble-right"></i> Watch</a></li>
                                        <li><a href="!#"><i className="icofont-bubble-right"></i> TV</a></li>
                                        <li><a href="!#"><i className="icofont-bubble-right"></i> Gifts</a></li>
                                        <li><a href="!#"><i className="icofont-bubble-right"></i> Design</a></li>
                                        <li><a href="!#"><i className="icofont-bubble-right"></i> Smart TV</a></li>
                                    </ul>
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
                                    <div className="tagcloud"><a href="!#">Art</a><a href="!#">Book</a><a href="!#">Watch</a><a href="!#">TV</a><a href="!#">Gifts</a><a href="!#">Smart TV</a><a href="!#">Design</a></div>
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
                        </div> */}
                    </div>
                </div>
            </section>
        </div >
    );
}

export default BlogDetail;