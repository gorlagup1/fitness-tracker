const Users = [
    {Name: "Pavani", Password:"mottu",Email:"mottu@gmail.com", Userid:0},
    {Name:"Archuna",Password:"Bestii",Email:"Archunabff@gmail.com", Userid:1}
];
module.exports={
    Login(username, password){
        const user = Users.find(x=> x.Name == username);
        if(!user) throw Error('User not found');
        if(user.Password !=password)throw Eroor('YOU ENTERED A WRONG PASSWORD');
        return user;
    },
    Get:userid=>Users[userid]
}
  