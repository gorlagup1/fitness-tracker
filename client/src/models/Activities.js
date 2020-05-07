const fit = require('fit');
const path = require('path');
const physical =  require('physical');

class Activities {
    constructor()
    {
        this.Activities = [{ type:'Walking'},{ type:'Running'},{type:'Skipping'},{type:'Pushups'},{type:'jogging'},{type:'Jumping'},{type:'Streating'},{type:'Playing'}];
        this.PhysicalTraining=[];
    }
    FetchAllPhysicalTraining(req){
        if(typeof req == 'string')
        req = JSON.parse(req);
        let filter = this.PhysicalTraining.filter(item=>{
            if(req.query.isPrivate==='false'){
                if((item.email === req.query.email) && !item.isPrivate){
                    return true
                }
                else
                {
                        return false;
             }
                }
                else if((item.email === req.query.email)){
                    return true
                
                }
                else
                {
                    return false
                }
                });
                return filter;
            }
            addPhysicalTraining(req){
                if(typeof req.body == 'string'){
                    JSON.parse(req.body)
                }
                req.body.createdAt=moment().format('MMMMM Do YYYY, h:mm:ss a');;
                this.PhysicalTrainings.push(req.body);
                return ({status:true,message:'Activity added successfully'})
            }
                }
                module.exports = new PhysicalTrainings();
            }