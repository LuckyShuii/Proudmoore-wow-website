import axios from 'axios'
import qs from 'qs'
import projectData from '@/utils/projectData';

// import { useAuthStore } from '@/stores/authStore'
import { snakeToCamel } from '@/utils/snakeToCamel'

const baseDomain = projectData.FRONTEND_URL;
const baseURL = `${baseDomain}/api/`;
const APIHandler = axios.create({
    baseURL,
    timeout: 10000,
});

// sets the access_token in every API call

// To set later when auth system is coded <<<<<<<<<<

// APIHandler.interceptors.request.use((config: any) => {
//     const authStore = useAuthStore()
//     const accessToken = authStore.accessToken;
//     if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
// });

APIHandler.interceptors.response.use((response: any) => {
    if (response.data) {
        response.data = snakeToCamel(response.data)
    }

    return response
})

APIHandler.defaults.paramsSerializer = (params: any) => qs.stringify(params, { arrayFormat: "repeat" })

export default APIHandler;