const Users = [
    
    { Name: 'Pavani', Password: '2020', Email: 'gorlagup1@hawkmail.newpaltz.edu' },
    { Name: 'Pavan', Password: '5780', Email: '547gpavani@newpaltz.edu' },
    
];

export let CurrentUsers1 = null;

export function SignUp(Username,email, password) {

    const users1 = Users1.find(x => x.Email == email);
    if(!users1) throw Error('User not found');
    if(user1.users1.Password != password) throw Error('Wrong Password');   

    return CurrentUsers1 = users1;
}