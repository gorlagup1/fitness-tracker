const User = [
    {Name : 'John Michel',username:'JohnMichel547', Email:'JohnMichel547@23.com', Password:'JohnMichel', isAdmin:false, userID:0},
    {Name : 'Easy', Username: 'scooby', Email:'scooby@76.com', Password:'scooby', isAdmin:true, userID:1}
];
module.exports={
    Login(username, password){
        const user = User.find(x=>x.Username == username);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('wrong Password');
        return user;
    },
    Get: userid => Users[userid]
    
}