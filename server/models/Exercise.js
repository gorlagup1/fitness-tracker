const exerciseList = [
    {
    exercise: "Decline situp"}
];
function addExercise(newExercise){
    this.exerciseList.push(newExercise);
    return true;
};
function removeExercise(i){
    this.exerciseList.splice(i,1);
    return true;
};
module.exports={
    exerciseList,
    addExercise,
    removeExercise
}

