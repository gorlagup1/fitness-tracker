/* B"H
*/
const api_root = "http://localhost:3000";
let result;
const Exercise=[];
const Time=[];
const TimeSpent=[];
const Calories=[];
async function myFetch(url, data){
    console.log(url);
    console.log(data);
    let response;
    if(data){
        console.log(api_root + url);
        await fetch(api_root + url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.  
        }).then(res => {
            return res.json()
          })
        .then((response) => {
            //const res=JSON.stringify(response);
            console.log('res: ' + response);
            for (var i = 0; i < response.length; i++) {
                console.log(response[i].Name);
                result =response[i].Name;
            }
            console.log("result is"+result);
            return result;
        })
        return result;
    } 
}
 async function myUpdate(url){
    console.log(url);
    let response;
        console.log(api_root + url);
        console.log("Update method is calling");
        await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.  
        })
      
}
async function myExercise(url){
    console.log(url);
    let response;
        console.log(api_root + url);
        console.log("My Exercise method is calling");
        await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.  
        })   
}
async function getExercise(url){
    console.log(url);
    let response;
        console.log(api_root + url);
        console.log("Get Exercise method is calling");
        await fetch(api_root + url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.  
        }).then(res => {
            return res.json()
          })
        .then((response) => {
            console.log('res: ' + JSON.stringify(response));
            console.log(Object.keys(response[0].exercise).length);
            const length=Object.keys(response[0].user).length;
            //result=JSON.stringify(response);
            for (var i = 0; i < length; i++) {
                   console.log("madam is"+JSON.stringify(response[0].exercise["exercise"+i].Exercise));
                   Exercise[i]=JSON.stringify(response[0].exercise);
                   //TimeSpent[i]=JSON.stringify(response[0].exercise["exercise"+i].Time);
                   //Calories[i]=JSON.stringify(response[0].exercise["exercise"+i].Calories);
                   //Time[i]=JSON.stringify(response[0].exercise["exercise"+i].Date);
                   console.log(Exercise);
           }
        })
        console.log("Exercise is"+Exercise);
    return Exercise;
} 

async function sendemail(url){
    console.log(url);
    let response;
        console.log(api_root + url);
        console.log("My sendemail method is calling");
        await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.  
        })   
}
export {myFetch,myUpdate,myExercise,getExercise,sendemail};