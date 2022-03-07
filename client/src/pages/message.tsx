import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from '../redux/actions/authAction';

const Message = () => {

    const { auth }: any = useSelector(state => state)
    const dispatch = useDispatch()
    const router = useRouter();

    useEffect(() => {
        dispatch(refreshToken())
    }, [dispatch])


    return (
        <div>message</div>
    )
}

export default Message