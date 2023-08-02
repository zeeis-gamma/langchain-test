import config from './config'
import axios from 'axios'
axios.defaults.timeout = 15000
if (config.proxy && config.proxy.host) {
  axios.defaults.proxy = config.proxy
}