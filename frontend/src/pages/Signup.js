import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <section className="bg-light">
                <div className="d-flex flex-column align-items-center justify-content-center px-3 py-4 mx-auto vh-100">
                    <div className="w-100 bg-white rounded shadow-sm border-0 mt-3" style={{ maxWidth: "400px" }}>
                        <div className="p-4">
                            <h1 className="fs-5 fw-bold text-dark">
                                Create an account
                            </h1>
                            <form className="mt-3">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-dark">
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
                                    <label htmlFor="password" className="form-label text-dark">
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
                                <div className="mb-3">
                                    <label htmlFor="confirm-password" className="form-label text-dark">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirm-password"
                                        id="confirm-password"
                                        placeholder="••••••••"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="form-check me-2">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="form-check-input"
                                            required
                                        />
                                    </div>
                                    <div className="text-muted">
                                        <label htmlFor="terms" className="form-check-label">
                                            I accept the{" "}
                                            <a className="text-decoration-none text-primary" href="#">
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 mb-3"
                                >
                                    Create an account
                                </button>
                                <p className="text-muted text-center">
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-decoration-none text-primary">
                                        Login here
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

export default Signup
