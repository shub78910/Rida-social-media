import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshToken } from '../redux/actions/authAction'

const Home: NextPage = () => {
  const { auth }: any = useSelector(state => state)
  const dispatch = useDispatch()
  const router = useRouter();

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
  }, [dispatch])

  return (
    <div>
      toasssstt lala
      toasssstt lala
      toasssstt lala
      toasssstt lala

    </div>
  )
}

export default Home
