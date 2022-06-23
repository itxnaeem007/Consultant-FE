import React from 'react';
import loginImage from './../../shared/_next/static/images/marketing-030523e8624d4dddd91543a7504c9491.png'
import { loginService } from './../../services/blog.service';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FloatingStyle from '../../shared/floatingStyle';

interface LoginForm {
    email: string;
    password: string;
}

function LoginScreen() {
    const history = useHistory();

    const [data, setData] = React.useState<LoginForm>({
        email: '',
        password: ''
    })

    const SubmitLogin = async () => {
        try {
            const response = await loginService(data)
            console.log('response', response)
            sessionStorage.setItem('token', response.data.auth_token);
            history.push(`/write/post`);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.non_field_errors[0]) {
                toast.error(error.response.data.non_field_errors[0])
            }
        }
    }

    return (
        <div >
            <ToastContainer limit={1} />
            <section className="page-title-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Login</h2>
                        </div>
                    </div>
                </div>
                <FloatingStyle />
            </section>
            <section className="login-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-image"><img
                                src={loginImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="login-form">
                                <h3>Welcome!</h3>
                                <p>Please login to your account.</p>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                value={data['email']}
                                                onChange={(e) => {
                                                    setData(prevState => ({
                                                        ...data,
                                                        email: e.target.value,
                                                    }));
                                                }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={data['password']}
                                                onChange={(e) => {
                                                    setData(prevState => ({
                                                        ...data,
                                                        password: e.target.value,
                                                    }));
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="btn " onClick={() => {
                                            SubmitLogin()
                                        }}>
                                            Login Now!
                                                </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginScreen;