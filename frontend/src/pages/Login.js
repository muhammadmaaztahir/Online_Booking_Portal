import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <section className="bg-light">
                <div className="d-flex flex-column align-items-center justify-content-center px-3 py-4 mx-auto vh-100">
                    <div className="w-56 bg-white rounded shadow-sm border-0 mt-3 sm-max-width-400">
                        <div className="p-4">
                            <h1 className="fs-4 fw-bold text-dark">
                                Sign in to your account
                            </h1>
                            <form className="mt-3">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-medium text-dark">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-medium text-dark">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="form-check">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            className="form-check-input"
                                            required
                                        />
                                        <label htmlFor="remember" className="form-check-label text-muted">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="/forgotpassword" className="text-decoration-none text-primary">
                                        Forgot password?
                                    </Link>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mb-2">
                                    Sign in
                                </button>
                                <p className="text-muted text-center">
                                    Don’t have an account yet?{" "}
                                    <Link to="/signup" className="text-decoration-none text-primary">
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Login
