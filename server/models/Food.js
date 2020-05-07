const foodList = [
    {name: "Example", calories:10}
];
function addFood(name, calories) {
    this.foodList.push({name, calories});
    return true;
};
function removeFood(i){
    this.foodList.splice(i,1);
    return true;
};

module.exports={
    foodList,
    removeFood,
    addFood
}
