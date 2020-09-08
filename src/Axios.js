import Axios from "axios";
Axios.defaults.baseURL="http://www.xidegui.top:9575/"
Axios.defaults.headers.post ["Content-Type"]="application/x-www-form-urlencoded"
export default Axios;