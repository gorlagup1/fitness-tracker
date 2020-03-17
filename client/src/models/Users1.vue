const Users1 = [
    { Name: 'Pavani', Password: '2020', Email: 'gorlagup1@hawkmail.newpaltz.edu' },
    { Name: 'Pavan', Password: '5780', Email: '547gpavani@newpaltz.edu' },
    
];

export let CurrentUser = null;

export function Sign-UP(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user1) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');   

    return CurrentUser1 = user1;
}