import myFetch from "./myFetch";

export let CurrentUser =  null;

export async function Login(email) {
    console.log(email);
    const user = await myFetch('/users/login/'+email, { email }) ;
    console.log("user data is");
    console.log(user);
    return user;
}
