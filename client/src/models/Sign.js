const Sign = [
    { Name: 'Pavani', Password: '2020', Email: 'gorlagup1@hawkmail.newpaltz.edu' },
    { Name: 'Pavan', Password: '5780', Email: '547gpavani@newpaltz.edu' },
    ];
export let CurrentSign = null;
export function SignUp(email, password) {
const Sign = Sign.find(x => x.Email == email);
    if(!Sign) throw Error('User not found');
    if(Sign.Password != password) throw Error('Wrong Password');   
return CurrentSign= Sign;
}

