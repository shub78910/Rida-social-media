import React, { useEffect } from 'react'
import Header from './header/Header'
import Alert from './alert/Alert'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import CustomToast from './CustomToast'

const App = ({ Component, pageProps }) => {

    const { auth }: any = useSelector(state => state)
    const router = useRouter();

    useEffect(() => {
        const authChecker = () => {
            if (!auth.token) {
                router.push('/login')
            }
        }
        authChecker()
    }, [])

    return (
        <>
            <input type="checkbox" id="theme" />
            <Alert />
            {auth.token && <Header />}
            <div className='pagesWrapper'>
                <Component {...pageProps} />
            </div>
            <CustomToast />

        </>

    )
}

export default App