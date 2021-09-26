import http from "./httpService";
import { apiUrl } from "../config/config.json";

import jwtDecode from "jwt-decode";

const tokenKey="token";

export function logout(){
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){

try { 

const jwt = localStorage.getItem(tokenKey);
return jwtDecode(jwt);
} catch(ex){
  return null;
}
 
}

export async function login(email,password){
const { data }= await http.post(`${apiUrl}/auth`,{email,password});
localStorage.setItem(tokenKey,data.token);

}
export default {
    login,
    getCurrentUser,
    logout
};
