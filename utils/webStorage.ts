import { useCookies } from 'next-client-cookies';
import { NoWindowAvailable } from './constants'

//Cookie
export const setCookie = (key: string, value: any) => {
    const cookies = useCookies();
    if (typeof window !== undefined) cookies.set(key, JSON.stringify(value))
    else throw Error(NoWindowAvailable)
}
export const getCookie = (key: string) => {
    const cookies = useCookies();
    if (typeof window !== undefined) return JSON.parse(cookies.get(key) || '')
    else throw Error(NoWindowAvailable)
}

