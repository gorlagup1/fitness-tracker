const foodList = [
    {name: "Example", calories:10}
];
function addFood(name, calories) {
    this.foodList.push({name, calories});
    return true;
};
module.exports={
    foodList,
    removeFood,
    addFood
}
