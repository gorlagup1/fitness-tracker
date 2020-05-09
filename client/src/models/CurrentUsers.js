import myFetch from "./myFetch";

export let CurrentUser =  null;

export async function Signup(username, password) {
    const user = await myFetch('/currentusers/signup', { username, password }) ;

    return CurrentUser = currentuser;
}