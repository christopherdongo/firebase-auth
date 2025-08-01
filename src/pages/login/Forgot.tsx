
import { RiLockPasswordFill } from 'react-icons/ri'


export const Forgot = () => {

    const handlerSubmit = (formData: FormData) => {
        const email = formData.get('email')
        const password = formData.get('password')

        console.log('email', email)
        console.log('password', password)

    }



    return (
        <div className="py-4 py-md-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm">
                        <div className='card-body p-3 p-md-4 p-xl-4'>
                            <div className='text-center mb-3'>
                            <RiLockPasswordFill size={70} color='gray' />
                            </div>
                            <h2 className='fs-6 fw-normal text-center text-secondary mb-4'>Forgot Password</h2>
                        </div>

                        <form action={handlerSubmit}>
                                <div className='col-12 b-1'>
                                <div className="form-floating">
                    <input type="email" required name="email" className="form-control" id="email" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                                </div>

                                <button type="submit" className="btn btn-primary white w-100 mt-4">Get Reset Password</button>
                            </form>

                            <div className='col-12 mt-3'>
                                        <p className='mb-0 text-secondary text-center'>Already have an account <a href="/login" className='link-primary text-decoration-none text-left'>Log in</a></p>
                                    </div>
                            
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}