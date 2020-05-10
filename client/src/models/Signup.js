import { Signup } from "./myFetch";


export async function signup(email,password) {
    console.log("inside signup method");
   
    console.log(email);
    console.log(password);
    const user = await signup('/users/login/'+email+','+password) ;
}