import axios from 'axios'
import Settings from '@/services/Settings'

export default () => {
    let api = axios.create({
        baseURL: Settings.getBaseApiUrl,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params:{
            key:'22798814-c6a6febdde4edc54b7e610eea' // yes this stuff i need store in .env
        }
    });
        api.interceptors.response.use(function (response) {
            if (response.status === 200) {
                return response.data
            } else {
                let error = response.data.response;
                console.error('API error:', error);
                // if (Vue.store)
                //     Vue.store.actions.showDefaultError();

                return Promise.reject(error);
            }
        }, function (error) {
            console.error('API call error:', error);
            return Promise.reject(error);
        });
    return api
}