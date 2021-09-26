import axios from "axios";
import { toast } from "react-toastify";

function getJwt() {
  return localStorage.getItem('token');
}

axios.defaults.headers.common['x-auth-token'] = getJwt();

axios.interceptors.response.use(null,error => {
    const expectedError=error.response && error.response.status >=403;
    if(expectedError) toast('an unexpected error occured');
    return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete

};
