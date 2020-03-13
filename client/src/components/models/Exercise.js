import { CurrentUser } from "./Users";
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
    