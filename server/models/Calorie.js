const Calorie = [
    {
        UserId: 0,
        Calorie: [
            //date, name, claories, protein, carbs, fat
            ["18 April 2020", "Sample", 0, 0, 0, 0]
        ],
        CalorieCount: 0,
        ProteinCount: 0,
        CarbsCount: 0,
        FatCount: 0
    },
    {
        UserId: 1,
        Calorie: [
            ["18 April 2020", "Sample", 0, 0, 0, 0]
        ],
        CalorieCount: 0,
        ProteinCount: 0,
        CarbsCount: 0,
        FatCount: 0
    },
    {
        UserId: 2,
        Calorie: [
            ["18 April 2020", "Sample", 0, 0, 0, 0]
        ],
        CalorieCount: 0,
        ProteinCount: 0,
        CarbsCount: 0,
        FatCount: 0
    },
    {
        UserId: 3,
        Calorie: [
            ["18 April 2020", "Sample", 0, 0, 0, 0]
        ],
        CalorieCount: 0,
        ProteinCount: 0,
        CarbsCount: 0,
        FatCount: 0
    }
]

function add(userid, date, newFoodName, newCalorie, newProtein, newCarbs, newFat) {
    const eater = Calorie.find(x => x.UserId == userid);
    eater.Calorie.push(
      [
        date, newFoodName, newCalorie, newProtein, newCarbs, newFat 
      ]
    );
    return true;
};

function addnutrients(userid, newCalorie, newProtein, newCarbs, newFat) {
    const eater = Calories.find(x => x.UserId == userid);
    eater.CalorieCount += newCalorie;
    eater.ProteinCount += newProtein;
    eater.CarbsCount += newCarbs;
    eater.FatCount += newFat;
    return true;
};

function getUser(token) {
    //we want to use the bearer token to find the corresponding userId
    return Calorie.findIndex(x=> x.UserId == token)
};

module.exports = {
    Calorie,
    add, addnutrients, getUser
}