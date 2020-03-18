<template>
  <div class="calorie">
    
    <section class="hero is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    <span class="icon">
                        <i class="fas fa-utensils"></i>
                    </span>
                    Calorie Tracker
                </h1>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">Food Item</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" name="foodname" v-model="newFoodName">
                        <span class="icon is-small is-left">
                        <i class="fas fa-apple-alt"></i>
                        </span>
                        <p class="help ">Enter the name of the food or drink</p>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Calories</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="number" name="calorie" placeholder="0" v-model.number="newCalorie">
                        <span class="icon is-small is-left">
                            <i class="fas fa-fire"></i>
                        </span>
                        <p class="help ">Enter the calories</p>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Protein</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="numver" name="protein" placeholder="" v-model.number="newProtein">
                        <span class="icon is-left">
                            <i class="fas fa-drumstick-bite"></i>
                        </span>
                        <p class="help">Enter the protein content in grams</p>
                    </div>
                </div>

               

                <div class="field">
                    <label class="label">Fat</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="number" name="fat" placeholder="" v-model.number="newFat">
                        <span class="icon is-small is-left">
                            <i class="fas fa-bacon"></i>
                        </span>
                        <p class="help ">Enter the fat content in grams</p>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-danger" @click="add();addcalorie();addprotein();addfat()">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-danger is-light">Cancel</button>
                    </div>
                </div>
            </div>

            <div class="column">
                <h1 class="title has-text-centered">
                   Daily Nutrients
                </h1>
                <hr>
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Calories</p>
                        <p class="title">{{calorieCount}}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Protein</p>
                        <p class="title">{{proteinCount}}</p>
                        </div>
                    </div>
                    
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Fat</p>
                        <p class="title">{{fatCount}}</p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
       
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th> Name of Food</th>
                    <th> Calories</th>
                    <th> Protein</th>
                   
                    <th>Fat</th>
                </tr>
            </thead>
            <tbody>
                <tr r v-for="i in todos" :key="i.name">
                    <td>{{i.name}}</td>
                    <td>{{i.calorie}}</td>
                    <td>{{i.protein}}</td>
                  
                    <td>{{i.fat}}</td>
                </tr>
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    </section>
  </div>
</template>

<script>
import { todos, add, addcalorie, addprotein, addcarbs, addfat } from "../models/Calories";
export default {
    
    data:() => ({
        todos,
        calorieCount: 0,
        proteinCount: 0,
        carbsCount: 0,
        fatCount: 0,
        newFoodName: "",
        newCalorie: 0,
        newProtein: 0,
        newCarbs: 0,
        newFat: 0,
    }),
    methods: {
        add,
        addcalorie,
        addprotein,
        addcarbs,
        addfat
    }
    
}
</script>

<style>
.hero-body{
   
  margin:0%;
  padding:2.3%;
  background:cover;
    background: cover;
}

</style>