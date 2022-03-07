
import React, { useState, useEffect } from 'react'
import { login, refreshToken } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData
    const { auth }: any = useSelector(state => state)
    const [typePass, setTypePass] = useState(false)
    const router = useRouter();
    const dispatch = useDispatch()

    useEffect(() => {

        if (auth.token) {
            router.push('/')
        }
        else {
            router.push('/login')
        }
    }, [auth])

    useEffect(() => {
        dispatch(refreshToken())
    }, [])

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="auth_page  mt-5">
            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-center mb-4">Rida</h3>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                        aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />

                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="pass">

                        <input type={typePass ? "text" : "password"}
                            className="form-control" id="exampleInputPassword1"
                            onChange={handleChangeInput} value={password} name="password" />

                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>

                </div>

                <button type="submit" className="btn btn-dark w-100"
                    disabled={email && password ? false : true}>
                    Login
                </button>

                <p className="my-2">
                    You don't have an account? <Link href="/register">Register Now</Link>
                </p>
            </form>
        </div>
    )
}

export default Login