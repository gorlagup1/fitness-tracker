import {CurrentUser} from "./Users";
import myFetch from "./myFetch";
export const todos = [
    {
        name: "Sample",
        calorie: 0,
        protein: 0,
        fat: 0
    }
];

export function add() {
    this.todos.push(
      { 
        name: this.newFoodName, 
        calorie: this.newCalorie, 
        protein: this.newProtein, 
        fat: this.newFat 
      }
    )
}; 
export function addcalorie() {
    this.calorieCount += this.newCalorie;
};
export function addprotein() {
    this.proteinCount += this.newProtein;
};

export function addfat() {
    this.fatCount += this.newFat;

};
export function Init(){
    myFetch('http://localhost:3000/game')
        .then(x=> { 
            State = x;
            console.log(x);
        });
    }