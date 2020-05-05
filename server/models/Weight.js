const Weights =[
    {Date:"5/31/19", Weight:69}
]
function addWeight(date, weight){
    this.Weights.push({date, weight});
    return true;
};
function removeWeight(i){
    this.Weights.splice(i,1);
    return true}
    module.exports={
        Weights,
        addWeight,
        removeWeight
    }
