<template>
  <div class="container">
    <div id = "progress"></div>
    <div id = "register">
      <div id = "inputContainer">
        <form>
          <input id="inputField" type="inputType" v-model="inputValue" ref="registerinput" required />>
          <label id="inputLabel">{{ inputLabel }}</label>
        </form>
        <div id="inputProgress"></div>
</div>
    </div>
  </div>
</template>

<script>
export default {
 
    data:() => {
      return {
      position: 0,
      inputLabel:'',
      inputType:'text',
      inputValue:'',
      registerSteps: [
        {
          label:" what's you first name ?",
          type:"text",
          value:"",
          pattern:/.+/
        },
        {
          label:"what's your email?",
          type:"text",
          value:"",
          pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        {
          label: "create your password",
          type="password",
          value:"",
          pattern:/.+/
        }
      ]
      }
      }
    },
    methods: {
      setStep(){
        this.inputLabel = this.registerSteps[this.position].label;
        this.inputType=this.registersteps[this.position].type;
        this.inputValue=this.registerSteps[this.position].value;
        this.$refs.registerinput.focus();
      
      }
    },
    mounted(){
      this.setStep();
      
    }
        
</script>
   <style lang="scss" scoped>
   .container{
     position:relative;
     font-family:'Noto Sans', sans-serif;
     font-size: 1 rem;
     color: #333;
     width: 100%;
     min-height:100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     background: radial-gradient(#009345,#106B4E);
     #progress{
       position:absolute;
       top:0;
       left:0;
       left:0;
       width:25%;
       height:100vh;
       background-color:#106B4E;
       transition:width .8s ease-in-out;
     }
     }
     #register{
       position:relative;
       width:480px;
       height:80px;
       background-color:0 15px 30px rgba(0,0,0,.2),
                        0 10px 10px rgba(0,0,0,.2);

     }
     #inputContainer{
       position:relative;
       padding:30px 20px 20px 20px;
       margin-right:60px;

       input{
         position:relative;
         width:100%;
         font-size:1.35rem;
         font-weight:bold;
         outline:0;
         background:transparent;
         box-shadow:none;
         border:none;
       }
       }
    
   </style>
                

                   