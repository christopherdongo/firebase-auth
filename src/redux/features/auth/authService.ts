import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_REACT_APP_API

export const API_URL = BACKEND_URL


export const createOrUdateUser = async (authToken: string) => {
    return await axios.post(`${API_URL}/create-or-update-user`, {}, {headers: {authToken}})

}

export const currentUser = async (authToken: string) => {
    return await axios.post(`${API_URL}/current-user`, {}, {headers: {authToken}})

}

export const curentAdmin = async (authToken: string) => {
    return await axios.post(`${API_URL}/current-admin`, {}, {headers: {authToken}})

}