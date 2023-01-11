import axios from 'axios'
import { getSession } from 'next-auth/react'

export const ApiClient = () => {
    const instance = axios.create()
    instance.interceptors.request.use(async (request: any) => {
        const session = await getSession()

        if (session) {
            request.headers = {
              Authorization: `Bearer ${session.user.accessToken}`
            }
          
            
        }
        return request
    })

    instance.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            // TODO: TESTAR ISSO
            window.location.href = '/api/auth/signin'
            console.log(`error`, error)
        }
    )

    return instance
}

