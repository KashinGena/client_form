<template>
  <form @submit.prevent  class="form">
    <div class="form__header">Шаг {{current+1}} из {{form.length}}</div>
    <div class="form__inner">
      <keep-alive>
        <component
          :isWantChange="isWantChange"
          :isValid.sync="isValid"
          :is="form[current]"
        ></component>
      </keep-alive>

      <p class="form__warning">
        Поля со знаком * обязательны для заполнения
      </p>
    </div>

    <div class="form__button-container">
      <a
        class="form__button form__button_left"
       
       @click.stop="goBack($event)"
       :disabled="current===0"      
      >
        Назад
      </a>
      <a
        class="form__button form__button_right"
        v-show="!isFinished"
        @click.prevent="goForward"
      >
        Далее
      </a>
      <a
        @click="createUser"
        class="form__button"
        v-show="isFinished"
      >
        Отправить
      </a>
    </div>
  </form>
  
</template>

<script>
import Personal from "@/components/Personal";
import Address from "@/components/Address";
import Passport from "@/components/Passport";


const alpha = (val) => /^[а-яё]*$/i.test(val);

export default {
  data() {
    return {
      currentForm: 0,
      form: [Personal, Address, Passport],
      isWantChange: false,
      isValid: false,
      showModal:false
    };
  },

  components: {
    Personal,
    Address,
    Passport,
  },

  computed: {
    current() { 
      return  this.currentForm;
    },
    
    isFinished() {
      return this.currentForm >= 2;
    },
  
  },
  methods: {
    goForward() {
      this.isWantChange = true;
      setTimeout(() => {
        if (this.isValid) {
          console.log(this.isValid);
          this.isWantChange = false
          this.currentForm += 1
        }
      }, 0);
        setTimeout(() => this.isWantChange = false,0)
       console.log(this.isValid);    
    },

 createUser() {
      this.isWantChange = true;
       setTimeout(() => {
        if (this.isValid) {
          this.isWantChange = false
          // this.$store.commit('userCreated')
          this.$emit('usercreated')
        }
      }, 0);
        setTimeout(() => this.isWantChange = false,0)
  },


    goBack(event) {
     console.log(event.target);
       console.log(event.currentTarget);
      console.log("dfg");
      
      this.currentForm -= 1;
    },

     onValid(value) {
       console.log('change');
       
       this.isWantChange = value;
      
    },
  
  },
};
</script>

<style lang="scss">

</style>
