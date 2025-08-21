import axios from 'axios'
import qs from 'qs'
import projectData from '@/utils/projectData';

import { useAuthStore } from '@/store/authStore';
import { snakeToCamel } from '@/utils/snakeToCamel'

const baseDomain = projectData.FRONTEND_URL;
const baseURL = `${baseDomain}/api/`;
const APIHandler = axios.create({
    baseURL,
    timeout: 10000,
});

APIHandler.interceptors.request.use((config: any) => {
    const authStore = useAuthStore();
    if (authStore.accessToken) {
        config.headers.Authorization = `Bearer ${authStore.accessToken}`;
    }
    return config;
});

APIHandler.interceptors.response.use((response: any) => {
    if (response.data) {
        response.data = snakeToCamel(response.data)
    }

    return response
})

APIHandler.defaults.paramsSerializer = (params: any) => qs.stringify(params, { arrayFormat: "repeat" })

export default APIHandler;