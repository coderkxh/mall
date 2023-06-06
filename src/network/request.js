import axios from 'axios'

const service = axios.create({
	baseURL: 'http://123.207.32.32:8000', // 所有的请求地址前缀部分
	timeout: 5000, // 请求超时时间毫秒
})

// 添加请求拦截器
service.interceptors.request.use(config => {
			// 在发送请求之前做些什么
			return config
	},
	error => {
			// 对请求错误做些什么
			return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(response => {
			return response
	},error => {
			console.log(error)
			return Promise.reject(error)
	}
)
export  {service}