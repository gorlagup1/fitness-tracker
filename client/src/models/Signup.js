import { myUpdate } from "./myFetch";


export async function Signup(name,email,password) {
    console.log("inside signup method");
    console.log(name);
    console.log(email);
    console.log(password);
    const user = await myUpdate('/users/login/'+name+','+email+','+password) ;
}