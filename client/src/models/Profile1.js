import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/users')
            .then(x=> { 
                this.State = x;
                console.log(x);
     })
    }
}