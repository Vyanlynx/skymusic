import { useCookies } from 'next-client-cookies';
import {NoWindowAvailable} from './constants'
//Session
export const setSessionStorage = (key: string, value: any) => {
    if (typeof window !== undefined) sessionStorage.setItem(key, JSON.stringify(value))
    else throw Error(NoWindowAvailable)
}
export const getSessionStorage = (key: string) => {
    if (typeof window !== undefined) return JSON.parse(sessionStorage.getItem(key) || '')
    else throw Error(NoWindowAvailable)
}
//LocalStorage
export const setLocalStorage = (key: string, value: any) => {
    if (typeof window !== undefined && localStorage) localStorage.setItem(key, JSON.stringify(value))
    else throw Error(NoWindowAvailable)
}
export const getLocalStorage = (key: string):string => {
    if (typeof window !== undefined && localStorage) return localStorage.getItem(key)||''
    else throw Error(NoWindowAvailable)
}
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

