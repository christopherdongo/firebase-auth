
export const Form = () => {


    const handlerSubmit = (formData: FormData) => {
        const email = formData.get('email')
        const password = formData.get('password')

        console.log('email', email)
        console.log('password', password)

    }

    return (
        <form action={handlerSubmit}>
            <div className="col-12 mb-1">
                <div className="form-floating">
                    <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="password" className="form-control" id="password" placeholder="password" required />
                    <label htmlFor="floatingInput">Password</label>
                </div>
            </div>

            <button type="submit" className="btn btn-outline-primary w-100 mt-4">Log in</button>
        </form>
    )
}