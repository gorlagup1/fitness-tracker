import myFetch from "./myFetch";

export let CurrentUser = null;
export async function Signup(name,email,password) {
    console.log("inside signup method");
    console.log(name);
    console.log(email);
    console.log(password);
    const user = await myFetch('/users/login/'+name+','+email+','+password) ;
}