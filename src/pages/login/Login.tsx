import 'react-toastify/dist/ReactToastify.css'
import { FaGoogle, FaFacebook, FaGithub, FaMicrosoft, FaYahoo } from 'react-icons/fa'
import { Form } from '../../components/form/Form'

export const Login = () => {


    return (
        <div className='py-3 py-md-5'>
            <div className='container'>
                <div className='row justify-content-center'>
                     <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4'>
                        <div className='card border border-light-subtle rounded-3 shadow-sm'>
                            <div className='card-body p-3 p-md-4 p-xl-5'>


                                <div className='d-grid gap-2 mb-3'>
                                    <button className='btn btn-outline-danger btn-lg d-flex justify-content-center align-items-center' type='button'>
                                        <FaGoogle className='me-2' /> Sign in with Google
                                    </button>

                                    <button className='btn btn-outline-primary btn-lg d-flex justify-content-center align-items-center' type='button'>
                                        <FaFacebook className='me-2' /> Sign in with Facebook
                                    </button>

                                    <button className='btn btn-outline-dark btn-lg d-flex justify-content-center align-items-center' type='button'>
                                        <FaGithub className='me-2' /> Sign in with Github
                                    </button>

                                    <button className='btn btn-outline-info btn-lg d-flex justify-content-center align-items-center' type='button'>
                                        <FaMicrosoft className='me-2' /> Sign in with Microsoft
                                    </button>

                                    <button className='btn btn-outline-warning btn-lg d-flex justify-content-center align-items-center' type='button'>
                                        <FaYahoo className='me-2' /> Sign in with Yahoo
                                    </button>
                                </div>

                                <div className='text-center mb-3'><span className='text-black fw-bold'>Or</span></div>

                                {/* login password*/}
                                <div className='row gy-2 overflow-hidden'>
                                    <Form />

                                    <div className='col-12 text-left'>
                                        <a href="/forgot" className='link-primary text-decoration-none text-left'>Forgot Password?</a>
                                    </div>

                                    <div className='col-12'>
                                        <p className='mb-0 text-secondary text-center'>Don't have an account? <a href="/register" className='link-primary text-decoration-none text-left'>Sign up</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                     </div>

                </div>

            </div>
        </div>
    )
}