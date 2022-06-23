import React from 'react';
import FloatingStyle from '../../shared/floatingStyle';
import marketing from './../../shared/_next/static/images/marketing-030523e8624d4dddd91543a7504c9491.png';

function AboutScreen() {
    return (
        <div >
            <section className="page-title-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>About Us</h2>
                        </div>
                    </div>
                </div>
                <FloatingStyle />
            </section>
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>Where Innovation Meets Excellence</h2>
                                    <div className="bar"></div>
                                    <p>Welcome to CCS Company. We aim to provide advanced software technologies to our clients through a positive, innovative, and corporate team.</p>
                                </div>
                                <p>We adopt an agile and adaptive approach to create advanced software technologies.  Our organization works side by side with every client and provides proficient services that result in extraordinary digital experiences. </p>
                                <p>We have the most qualified team who share their expertise and passion to build solutions that empower your business. If you are looking for a reliable and trusted organization to develop your software or take your current </p>
                                <p>system to the next level, you have spotted the right organization. We specialize in the following areas:</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12"><img src={marketing} alt="" /></div>
                    </div>
                </div>
                <div className="about-inner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Our Company</h3>
                                    <p>We aim to provide advanced software technologies to our clients through a positive, innovative, and corporate team.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Who we are</h3>
                                    <p>In our company, it is mandatory that every worker understands and embraces our rules and regulations. We work through the values ​​that provide positive results, and deliver quality work promptly. Our values are.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>What we Value</h3>
                                    <p>We adopt an agile and adaptive approach to create advanced software technologies. Our organization works side by side with every client and provides proficient services that result in extraordinary digital experiences.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Contact Us</h3>
                                    <p>Whether you’re trying to develop software for your business or there any problem with your current system, you can contact us via XYZ email and get a chance to avail of our service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-area ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Smart Team</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="row"></div>
                </div>
            </section>
            <div className="cta-area">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-7">
                            <p>Want a bite? You&#x27;re in the right place!</p>
                        </div>
                        <div className="col-lg-5 col-md-5 text-right"><a className="btn" href="!#">Take a Test Drive</a></div>
                    </div>
                </div>
            </div>
            <section className="feedback-area ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="row"></div>
                </div><svg className="svg-feedback-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff"></path></svg></section>
            <div className="partner-area app-partner">
                <div className="container">
                    <div className="row"></div>
                </div>
            </div>
            <section className="platform-connect ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Interact With Your Users On Every Single Platform</h2>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a className="box" href="!#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAwCAMAAABQUBiUAAADAFBMVEX/89UxiMn//v3h3Nj827MUIjZQpOD///9qUkeWbU+5raj/8NPOxMD28/AiMEN2WEmRf3dtU0jEuLSHdGp4W0p7XEqOaE1KP0H/5MH//vWSgHiddlf93rjr5+V2XVHx0a1Mod6woZv/58X727V+aV8rda2llo+FY0tyV0hvVUiQak2AX0sYJDZfTEV/Zlb+37kVKD5Emtd/h5Oll5BJntyIZExPY3WHdWuTa07OsJNlT0YpLTrX0M3/68z/7s9veYUvg8Hq0bS2kXC6mHmLZk3x0q6Bd3SCYUv44sX606kdKDf/6sr83bd0XVJQVFwvgb7PtJlhUk3/6syPdWOXfWuUeGT/8NH/47+cgm7ixKIiKzf14MTk3tzex6tDgrCci4PQr0vduU0+OT5URkPgwZ6ykHH50KP1xZPv0Kukf2GKZk2og2X83LXGp4lJm9X01bLi3Nrv1LQtfLbIrZL/7Mz22rj71q3+4Lv72LD2yJi8noN0W03uz6y+oYbo0re7oIkyPlAziss4Njy2nIaWfW4YNVH/+OkjXIhEPD4zMzv/6MekiXM2js3s1rvLwr2PlqBFltF/Z1uDaVtCTV4fKjd4Xk+UfGYaO1xGeqK/o0nWtJJ9Xkqzj3D54MC7lneje13UuJtPQ0L42LPiwZ7BnXxgV1ashmkcQmTcwKPw2rxYUlTGo4Ttzakudq1QWGRuW1EuMDrlxKAzZIutknqbioOzln3Go4M5UWodSG2de1/BoIKUmaHcwaL63rwufLZFWGyWfW3GrpaurbC1qaPHsJiZgHHdyLN4YVX948Xj1MWzl37/79jVwKeQeGj/9eO7sKvlzbD/++43YYQ9lNIvbJyIbFtRXGshVYA/W3QxaJQucKWGcWd0Y12ymYOik4qKdWkXLkiQfXSNcV68vbyfhHRDUWSus7qQem7FyMiVj3JoV1DEqIuRgUXazsNmaGKeoaGIdmbrxE+diUZqUkZFdpsrdaw4fbAjMj89hLeJckf/21OlnFxQnM1WXWWNpJFUnsyd5ZYsAAAENUlEQVRIx3XVZVRbSRQA4JeXeclEiTYhhIYIKRQIFNkWOUCBAywhtMWKy9a2Ld22W90uW+ruPbV1d3d3d3d3d/c7b+YlL6Hcc/In7zt37h3l1KOC1xe4+i38qP+5xD+U/fifo319fxwW7ZIl2jL++FTp+vLnwr///e/3Y4Pfq/X9+Lra2lrs4kdT3ouPpqlUvx7786+BwQH89oN3VawThGxHhE+kysAJp6gg9v02OPDj1198lG8UaMyyJFAL7lOJUfhL1w/ffl4hROMkUzwtuGQflapJlUe+22sUxqL8ZDo45Ny19ZNPDwrycHhlFGQalS+lb67Ij4NCNk6N0ahM2/WasPdV8r3BMcuRs+H6bJLUJJusyddSWVh5RIC+S7flYBY5XUIpTUppwZXTJon9pL9vBNngwLEoaSjRxlbLMuMahaKQyDxjvpC9jaHMOps9CezNsYVNjdyoUCjWpxFZIXTRsTPtE6ZoSBSZ9THquk9BYj3Ig8J2EdprNNGoCUSpfsY0kabnCeuEDQTaJmrkkaGUaOBFUVZuFowC6cc8Qe5uvSc84mK0jCW9DCaQjG4eB2D+5VOXLp598dlXLUYINWIDpcHXRbkVZCkZvQjkpc2+IcTixNNW7qQVcIE3iDw1D9avBGQSyJRwLoi5El79JKP4TUJvh6QXSEmLnWjuvJUoGqczGnmZJJWGx6SVcxCat1py0zsRZtTbVKlQ3CatORlf44QKARWL9JmNCLOzxVub7m1KgrYnZpkZzRWNBy9CKDe89vloVjVvxVl0Du2M+kU6G9+C3O1utAINh6StrSXfF95wdTUUkEHm/0zWzRq0fO1G1FvO1beQ8w00AqNXQaZiUuxZJK1HpEPO5RzH6eDHNbcUEGogXQ/Dp1C0L81FAHeIiEVzRwFQJaFLGxv9N4lzME60566QQ043048N0BaGjXm3zrnqsEhtYM8b9skhV+5GXxGqttbBWtbryjvo1No1VY1OOWyfiTwHfgqStsrMsD9T7iy+g27/KZoL3bKhwwB37u8J6MWzFcykBYq0RlPlCTNW7luFPGe0vbUHjoqWnlgtttctyMoQk8IAJxPXGnps0yP3b4qYnuMp8dJ7wGAxsU1gIzsL5NMtj8ZdvN/0YunOUjJK1ngO0IfXPP7UluTk5C3PvgBfez7r7rVGb0Kr1D9U0Mxx3aEn1CCTyaeeDz7u3nEoNUr1lGaQ/qoh7QP7HxKL3PPuex27db7OoOx+ZdWSgz1fnICR1tD4A63v7ObafUP+8byMprK+iL1CNrE+pxuhDy1xFzwrgaxs9VT5cjn9bcGEZ0PLyoU9O0dmdZ2HrHziY2Sh1gw3W8r59Wz7TX8Fg9QbEp44fYRabMsqWrBw0bJlI21w4IKQ0zDqNTSYcGJE9GO+sQlYy4/5HMOseQOSs8of8ONQUkeZFkIZ/9D/D8378ebri7p9AAAAAElFTkSuQmCC"
                                alt="mailchimp" />
                                <h3>Mail Chimp</h3><span>Send Mail</span><i className="icofont-bubble-right"></i></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a className="box" href="!#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACPVBMVEXoqTFmhTw7Jzr3//8+uI3DJSwlknj///93zdXWH1/v//r/6/T//e7/+OD30o//3ent/v/qrj7j+vH///zshKm25+z8///J8OLaLmn/+v+I1Nz/68WW3MPYLWjW9epKvJT/8dLc9/n6wNPS8/aJ1rr736rihzR90bN/0NdBtpJWwpt0xMJvrZJnj0/l+/2X3MP9zt+35+yj4OXpdp7mZ5P52JxSsqzzor7HKTOt4+g0nIjc9/prxsmj4cvrtEvOIErprj0umYI9p5JBtJXdO3LuulpLvJTTTTmw5tIynIbJ7/POOzjsharzx3RBrJXdPHT95bf1zIGTol5MKD8vmYNkx6OS2N/KIj6869tIrKDGJTDEIy5pklhYJEFOJD7DH1pywLiSIU7stExspH7gSn57ml5niUViUl2a3OLzx3XjWonK8OPA6+/k+/1wzKux5tP9z9/wwWf1zYLwlbSL09JCr5XNIEjGIzXSREzVH1vgXH/cbTcqln3UH1fJIjvvlLP0o77LIkFDqJrFIzEqlX3WVzmv5NjEJC7gS35ivb1jx6NXt7LmaJTRIFGu5OlTs6T3ssp/0NjeejaS199iP1LKqUSErYL3scl2mFxGpITQIE5XwpyCnV9sklNmwsRhXmJXLUa9qEx1I0ik4OVUhXalIFKEQl3uuljJ7vNEJDv1uqlpjkycpFvYqTrRum1FJTxPlHxfOE5gOE7MH1zUrbr6wdRSKkLpd55eaWh+p5rQ5NF/Ikm4IFanpFebIVDxgzwCAAAC5UlEQVRIx42W918TMRjGr9ej1+tugdJSVplFZaOIiKKiIogyFBEXKsO9995777333lv/NtMkby5pr59Pn99y7/u9e5K8eXOSmkCOTV7vSmf8cylBvtMrIXmdSQMbJaxlyQKpElUoSSAPgM6EgG39apvBF7x4WF5ujgUqFKQKnWjXPRU8tiJViUCWgtXIgA6S/vbNNStVOg/YSL4yTfB0teuGyVQGgNXMATkUUDIY8a7rrgmrH4ACI6CQZJtbe0aZqJYDEOYAv8J58rT2oPBIAMqMLKklQByryqTxhUD0G0xa7cXZUyZPOsTmKHqKrBGX1Y+zLRbLHgZwniL14didbjh/xEJ0khHU09Dgr9jSaDh30Xqa5lvmC56GBv9KkksEwniW4wGYo3t6fedhfI1LHhoeB8Q9Ms5M9zyHenLwQDUFxvCeUDaKjQagiAfAgO7p8gsPPaYATDUCqKcZs0p9LDjBwJNUb9U9oWy0fVks6BI9bQhGAXOEAlu2lpLquK23Dt1T8MIZTdNWudGyelag7GpUu6egnuI8FR/dpREF7NGNM6/F0RYAGgVPxdPHpqRso4BWw3UNOHbKXN0TzkbaDkCAbzMjgKDtw37gxOEUqr0UyOaBLABa0MA9czaKHwRgIgVqecDHPJFspLMA7KMfcAudj3h6cqV7CVjWFgCxMzpqdoutEnn68albluWlDJine8quyY/trV8+vpexFjHgFs0/viM/thl//R7QFstUoqe+tt2SlCoCmwPR6G8AOE99bZfwdncIQBqJ/gEAPDWnvYJ6aucBO7yPefqMBgP73SjWBEQqB+QD8AiAfwN1dvLKTgDyOKAOgKck/dvwT7YYISOAWdJeyvKD4Q9o+/yMaBKOnThpTXt2/yYpj14G0F7gEpcVE7XXgxlQTyWqeFJdsZeivbIyemTVXCD4v4JQkSPhtVsIQI7xhRwHME/+JAE4d+vUZAHyiVxf0oDqK8lVCm2Jfov+A69xj0SAxz1fAAAAAElFTkSuQmCC"
                                alt="mailchimp" />
                                <h3>Slack</h3><span>Messaging</span><i className="icofont-bubble-right"></i></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a className="box" href="!#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABDlBMVEX///+w5f0zs+q36P5lx/Gc3vpQvu4vseo8tuub3fpkx/FyzPTT9P/7///8//9ryfPh+f87tuvt/v+P1/g1s+qp4/xKu+3w//82tOtoyPNXwu/M8P+a3Pp/0fbg+f/3//84teszsuqB0vb9//+A0fb1//+O1/i96/+q4/xBuOxCuOxYwu/V9f/G7v89tuzS9P/0///+//+V2vl5z/Xu//+o4vyp4vxqyfPx//+k4fun4vvn/P+a3fo+t+w/t+wxsurs/v9Iu+1Huu3W9f9Wwe9SwO/P8f86teva9v+z5/1Eue246f7f+f85tevX9v++6//e+P9ixvFkxvH4///F7f+W2/mN1vjz///L8P+Q1/i9zbOYAAAB5UlEQVQYGY3BBYLiQAAEwI72xHB3VmDd7dzd/e7/HzkgNiEJUIW0bq/fNkc02/1eF+s0r29rlNSKN3fI9+O3ypTWxRA5Ho6Y6ZN1jgwPTOZ69RQpr99whcdHWKI84UrqByQoXEuB5MWYa42PEGnucwP7TQS2O9zIIQIWswnbshxKLCzslrkgmGR4mPEcUlg654SHuQl92h5lGgLaAC59F5jZrdFXQJ2xKmIl0RGca50BUBgAoAmGCoh4g8oefQqAIgOYqej06ZBpDBSBbZWBK8yd6pxzINljSAWmDFXhq9Rt0oFEZ+QvLIZECZHKABKdEQs7DDSqnRKyMbYDmyHkYsyGyZCLHC5jJsoMOchhMFZGmREN2RqMlWEyZiBLiRITNmOdnQHStiixccmYgQwuZZeYMCZKSNMpm2BKibjCMoMJUxRUyqouEo6ZoJ4DRSaIn5AcCyYUASiUCMuDROMSBcAf+nTbsU4hKzhctosZiwsNFwkFTXCZhbnCAX0No4SQWxVMOdjGQp0RoW8ZhrGlM1Mdge/cyDeEhs+4gedDRL6OuVbrIyQK1/qCBEXlSuo7LPn8iCu8f4uUyiFzvTxDlvsnzHRyDzm8fypTWr885GveFGuU1G6v77BOt9dvmyOa7X6vi5T/DOM9gDv+fnkAAAAASUVORK5CYII="
                                alt="mailchimp" />
                                <h3>Twitter</h3><span>Twitter Feed</span><i className="icofont-bubble-right"></i></a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a className="box" href="!#"><img src="data:image/png;base64,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"
                                alt="mailchimp" />
                                <h3>Instagram</h3><span>News Feed</span><i className="icofont-bubble-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutScreen;