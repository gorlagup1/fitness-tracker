const Profile = [
    {
        UserId: 1,
        Name: " amon",
        Handle: "cloren",
        Image: "http://cs.newpaltz.edu/~cloren/assets/thundersome.jpg",
        Age: 18,
        Height:189,
        Sex:"Male",
        Description: " Member of pubg game"
    },
        {
            UserId: 2,
            Name:"oman",
            Handle:"sarif",
            Image: "http://cs.newpaltz.edu/~cloren/assets/oman.png",
            Age:56,
            Height:160,
            Sex:"Female",
            Description: "From glaxy 69s group"
        },
        
    ];
    const Calorie= [
        {
            userId: 0,
            Focus: "Strength Training",
            Goal:1000,
            
        },
        {
            userId: 1,
            Focus: "Postive Feelings",
            Goal:2000,
            
        }
    ];
    const Exercise = [
        {
            UserId: 0,
            Exercise: [
                ["09:00 - 12 jan", "WeighLifting","0.25",200],
                ["08:20 - 17 feb", "Jogging", "0.30", 250]
            ]
        },
        {
            UserId: 1,
            Exercise:[
                ["2:00 - 22 May", "Pushups","1.00",300],
                ["04:00 - 31 May", "Running","0:45",323]
    ]
        }
    ];
function editProfile(userid, newAge,  newHeight, newDescription){
    const user = Profile.find(x=> x.UserId == userid);
    console.log(user);
    user.Height = newHeight;
    user.Age = newAge;
    user.Description = newDescription;
    return user;
};
function editGoals(userid, newFocus, newStep){
    const user = Calorie.find(x=> x.UserId == userid);
    user.Focus = newFocus;
    user.StepGoal = newStep;
    return user;
};
function addExercise(userid, date, type, duration, calories){
    const user = Exercise.find(x=> x.UserId == userid);
    user.Exercise.push([date, type, duration, calories]);
    return true;
}
function getuser(token){
    return Profile.fintIndex(x=> x.UserId == token)
// getuser help us to get the current index with the help of token and we can get to know about userId//
}
module.exports = {
    Profile, Calorie, Exercise,
    editProfile, editGoals, addExercise
}


