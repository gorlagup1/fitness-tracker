const Users = [
    { Name: 'cute', Password: '20cute', Email: 'gorlagup1@hawkmail.newpaltz.edu' },
    { Name: 'Pavan', Password: '5780', Email: '547gpavani@newpaltz.edu' },
    
];

export let CurrentUser = null;

export function SignUp1(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');   

    return CurrentUser = user;
}