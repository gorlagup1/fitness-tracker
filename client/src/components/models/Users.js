/* B"H
*/
const  Users = [
    { Name: 'Charu', Password: '2020', Email: 'yaduc1@hawkmail.newpaltz.edu' },
    { Name: 'Cher', Password: '5780', Email: 'charu@hawkmail.newpaltz.edu' }
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}
