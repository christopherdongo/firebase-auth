import { toast, ToastContainer } from 'react-toastify'
import './Register.css'
import { useNavigate } from 'react-router'
import { FaUserPlus } from 'react-icons/fa'


export const Register = () => {

    const onSubmitRegister  =() => {

    }

    return (
        <div className="py-3 py-md-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
                    <div className="card border border-light-subtle rounded-3 shadow-sm">
                        <div className="card-body p-3 p-md-4 p-xl-4">
                            <div className='d-grid gap-2 mb-3'>
                            <div className="text-center mb-4">
                                <FaUserPlus size={70} color='gray'/>
                            </div>
                            <h2 className='fs-6 fw-normal text-center text-secondary mb-4'>Register Your account</h2>

                            <div id='action'>
                                <div className='row gy-2 overflow-hidden'>
                                    <form action={onSubmitRegister}>
                                        <div className='col-12'>
                                            <div className='form-floating mb-3'>
                                            <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" required />
                                            <label htmlFor="floatingInput">Email address</label>
                                            </div>
                                        </div>

                                        <div className='col-12'>
                                            <div className='d-grid my-3'>
                                            <button type="submit" className="btn btn-outline-primary w-100 mt-4">Register</button>
                                            </div>
                                        </div>

                                    </form>

                                    <div className='col-12'>
                                        <p className='m-0 text-secondary text-center'>
                                            Already have an account? <a className='text-primary text-decoration-none' href='/login'>Log in</a>
                                        </p>
                                    </div>
                                    
                                </div>
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