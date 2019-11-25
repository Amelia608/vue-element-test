import axios from 'axios'
import cloneDeep from 'lodash/cloneDeep'
import { clearDeep, getAccessToken } from '@/common/utils'

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_GATEWAY,
	withCredentials: true
})

instance.interceptors.request.use(config => {
	if(config.baseURL === process.env.VUE_APP_API_GATEWAY) {
		const accessToken = getAccessToken()

		if(accessToken) {
			config.headers = config.headers || {}

			config.headers['Authorization'] = `Bearer ${accessToken}`
		}
	}
	config.params = config.params || {}
	// prevent browser side cache
	config.params.ts = new Date().getTime()

	if(config.data && !(config.data instanceof FormData)) {
		// clone data
		config.data = cloneDeep(config.data)
		clearDeep(config.data)
	}
	return config
})
axios
	.get(
		"http://dev.zhimeiplus.com:20001/api/cspc/v1/customer/ranks", {
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				"token": "eyJhbGciOiJIUzI1NiJ9.eyJsb2dpbl9pZCI6IjI3IiwidGVuYW50SWQiOiIxMjM1IiwidGVuYW50Q29kZSI6ImNzIiwiZXhwIjoxNTM3NDQ5MzkxfQ.GPpTXmAWp0o7tnNTX2CjL2RDC-Hc3RmpzwpReg7Yqek"
			}
		}
	)
	.then(res => {
		console.log(res);
	});
export default instance