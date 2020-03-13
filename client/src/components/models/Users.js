const Users = [
    { Name: 'Pavani', Password: '2020', Email: 'gorlagup1@newpaltz.edu' },
    { Name: 'Gorlagunta', Password: '5780', Email: 'pavani@newpaltz.edu' },

];

export let CurrentUser = null;

export function Login1(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
} 
