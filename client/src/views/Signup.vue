<template>
  <div class="container">
    <div id = "progress"></div>
    <div id = "register">
      <i v-if="position === 0 class='previousButton fas fa-user">/i>
      <i v-else class="previousButton fas fa-arrow-left"></i>
      <i class="forwardBuutton fas fa-arrow-right"></i>
      <div id = "inputContainer" :class="{'showContainer':showContainer}>
        <form>
          <input id="inputField" :type="inputType" v-model="inputValue" ref="registerinput" required />>
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
      showContainer:false,
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
      
    },
    methods: {
      setStep(){
        this.inputLabel = this.registerSteps[this.position].label;
        this.inputType=this.registersteps[this.position].type;
        this.inputValue=this.registerSteps[this.position].value;
        this.$refs.registerinput.focus();
        this.showStep();
      
      },
  showStep(){
    setTimeout(() => {
this.showContainer = true;
    },100)
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
}
     .previousButton{
       position:absolute;
       left:30px;
       top:12px;
       font-size:1rem;
       color:#9e9e9e;
       cursor:pointer;
       z-index:2;
       &:hover{
         color:#009
       }
     }
     #inputContainer{
       position:relative;
       padding:30px 20px 20px 20px;
       margin-right:60px;
       opacity:1;
       transition: opacity .3s ease-in-out;

       input{
         position:relative;
         width:100%;
         font-size:1.35rem;
         font-weight:bold;
         outline:0;
         background:transparent;
         box-shadow:none;
         border:none;
         &:valid + #inputLabel1{
           top:3px;
           left:42px;
           font-size:.7rem;
           font-weight:normal;
           color:#999;
         }
       }
       }
       #inputLabel{
         position:absolute;
         top:32px;
         left:20px;
         font-size:1.35rem;

         pointer-events:none;
         transition:.2s ease-in-out;
       }
       #inputProgress{
         width:0;
         border-bottom:6px solid #106B4E;
         transition:width .6s ease-in-out;
       }
       .showContainer{
         opacity:1 !important;
         #inputProgress{
           width:100%;
         }
       }

  
    
   </style>
                

                   