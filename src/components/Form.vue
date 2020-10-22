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
        :class="{form__button_disabled:current===0}"
        
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
          this.isWantChange = false
          this.currentForm += 1
        }
      }, 0);
        setTimeout(() => this.isWantChange = false,0)
 
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


    goBack() {
      if (this.current!==0)
        this.currentForm -= 1;
    },


  
  },
};
</script>

<style lang="scss">

</style>
