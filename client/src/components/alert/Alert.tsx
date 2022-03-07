import React from 'react'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Loader from './Loader'

const Notify = () => {
    const { alert }: any = useSelector(state => state)
    const dispatch = useDispatch()
    if (alert.error) {
        toast.error(`${alert.error}`);
    } else if (alert.success) {
        toast.success(`${alert.success}`);
    }
    return (
        <div>
            {alert.loading && <Loader />}
        </div>
    )
}

export default Notify
