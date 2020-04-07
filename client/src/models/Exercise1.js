import { CurrentUser } from "./Users";
import myFetch from "./myFetch";
import { response } from "express";
export const Running = async (exercise)=>{
    const responsev = await fetch('${CurrentUser}/exercise/ass',{
        method:'POST',
        credentials:'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(exercise),
    });
    const parseResponse = await response.json();
    return parseResponse;
};
export default{
    postExercise, 
};
export function Init(){
    myFetch('http://localhost:3000/game')
        .then(x=> { 
            State = x;
            console.log(x);
        });
    }
    