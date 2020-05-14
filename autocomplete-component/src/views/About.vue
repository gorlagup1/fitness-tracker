<template>
  <div class="about flex-col item">
    <input type="text" class="bg-gray-300 px-4 py-2" autocomplete="off" v-model="state">
  <div v-if="filteredexercises && model">
    <ul class="w-48 bg-gray-800 text-white">
      <li v-for="filterexercises in filterexercises" in class="py-2 border-b cursor-pointer" @client>{{ filteredexercises}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      exercises: '',
      model: false,
      exercises: [
        'Running',' Walking','Cycling','pushups','jogging'
      ],
      filterExercises: [],
    }
  },
  

methods: {
  filterExercises(){
    this.filterExercises = this.exercises.filter(exercises => {
      return exercises.toLowercase().startsWith(this.exercises.toLowerCase());
    });
  },
  setExercises(exercise){
    this.exercise=exercise;
  }
}
}
</script>