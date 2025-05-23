import React, { useState } from 'react';
import { Link } from "react-router-dom";
import bg3 from "../../assect/images/bg/03.jpg"
import logo from "../../assect/images/logo-icon-80.png"
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/authSlice';

export default function AuthLogin() {

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData).unwrap();
            console.log(response)
            dispatch(setCredentials(response));
            localStorage.setItem('token', response.data.authToken);
            localStorage.setItem('isLoggedIn',true);

            // redirect or show success
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         console.log(1);
    //       const res = await login({ email, password }).unwrap();
    //       console.log(res);
    //       dispatch(setCredentials(res));
    //       localStorage.setItem('token', res.data.authToken);
    //     } catch (err) {
    //       console.error('Login failed:', err);
    //     }
    //   };

    return (
        <section className="bg-home zoom-image d-flex align-items-center">
            <div className="bg-overlay image-wrap" style={{ backgroundImage: `url(${bg3})`, backgroundPosition: 'center' }}></div>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-4 bg-white rounded-3 shadow-md mx-auto w-100" style={{ maxWidth: '400px' }}>
                            <form onSubmit={handleSubmit}>
                                <Link to="/"><img src={logo} className="mb-4 d-block mx-auto" alt="" /></Link>
                                <h5 className="mb-3">Please sign in</h5>

                                <div className="form-floating mb-2">
                                    <input
                                        name='email'
                                        type="email"
                                        onChange={handleChange}
                                        value={formData.email}
                                        className="form-control" id="floatingInput"
                                        placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        name='password'
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label text-muted" htmlFor="flexCheckDefault">Remember me</label>
                                        </div>
                                    </div>
                                    <span className="forgot-pass text-muted mb-0"><Link to="/auth-reset-password" className="text-muted">Forgot password ?</Link></span>
                                </div>

                                {/* <button className="btn btn-primary w-100" type="submit">Sign in</button> */}
                                <button className="btn btn-primary w-100" type="submit" disabled={isLoading}>
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </button>
                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted me-2">Don't have an account ?</span> <Link to="/auth-signup" className="text-dark fw-medium">Sign Up</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
