<template>
<div class="autocomplete">
    <div class="input" @click="tooglevisible"></div>
    </div>
    </template>

    <script>
        export default {
            data(){
                return {
                    visible: false
                };

                },
                methods: {
                    toogleVisible(){
                        this.visible = !this.visible;
                    }
                }
        }
        </script>

        <style scoped>
            .autocomplete {
                width: 100%;
                position:relative;
                }
                .input {
                    height: 40px;
                    border-radius: 3px;
                    border: 2px solid lightgray;
                    box-shadow: 0 0 10px #eceaea;
                    font-size:25px;
                    padding-left:10px;
                    padding-top:10px;
                    cursor:text;
                }
        
        