<template>
  <fieldset class="form__fieldset">
    <legend class="form__title">Адрес</legend>

    <div class="input"
    :class="{input_error: $v.index.$error && $v.index.$dirty }">
      <label class="input__label"> Индекс </label>
      <input v-model.lazy="index"
        class="input__control" placeholder="123456" type="number"
        inputmode="numeric"
        pattern="[0-9]*"
         />
    </div>
    <div class="error" v-if="!$v.index.number && $v.index.$dirty">
       Индекс состоит из 6 цифр
    </div>
    <div
      class="input"
      :class="{ 'input_error': $v.country.$error && $v.country.$dirty }"
    >
      <label class="input__label">
        Страна
      </label>
      <input v-model="country" placeholder="Россия" class="input__control" type="text" />
    </div>
    <div class="error" v-if="!$v.country.alpha && $v.country.$dirty">
      Допустимы только буквы русского алфавита
    </div>

    <div
      class="input"
      :class="{ 'input_error': $v.region.$error && $v.region.$dirty }"
    >
      <label class="input__label">
        Область
      </label>
      <input v-model="region" placeholder="Московская" class="input__control" type="text" />
    </div>
    <div class="error" v-if="!$v.region.alpha && $v.region.$dirty">
      Допустимы только буквы русского алфавита
    </div>

    <div
      class="input"
      :class="{ 'input_error': $v.city.$error && $v.city.$dirty }"
    >
      <label class="input__label"> Город* </label>
      <input v-model="city" class="input__control" placeholder="Москва" type="text" />
    </div>
    <div class="error" v-if="!$v.city.required && $v.city.$dirty">
      Поле обязательно для заполнения
    </div>
    <div class="error" v-if="!$v.city.alpha && $v.city.$dirty">
      Допустимы только буквы русского алфавита
    </div>

    <div
      class="input"
    >
      <label class="input__label">
        Улица
      </label>
      <input v-model.lazy="street" placeholder="Набережная" class="input__control" type="text" />
    </div>
    

    <div class="input"
         :class="{ 'input_error': $v.house.$error && $v.house.$dirty }"
    >
      <label class="input__label"> Дом </label>
      <input v-model="house" placeholder="51" 
      class="input__control" type="text"
      inputmode="numeric"
       
       />
    </div>
    <div class="error" v-if="!$v.house.house && $v.house.$dirty">
      Номер дома должен начинаться с цифры
    </div>
  </fieldset>
</template>

<script>
import { required, minLength, sameAs, or } from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
import {alpha,house,number} from "@/validations/validators"
// const alpha = (val) => /^[а-яё]*$/i.test(val);

export default {
  props: {
    isWantChange: {
      type: Boolean,
    },
    isValid: {
      type: Boolean,
    },
  },
  watch: {
    isWantChange() {
      if (this.isWantChange == true) {
        this.$v.$touch();
        this.$emit("update:isValid", !this.$v.$invalid);
      }
    },
  },
  computed: {
    index: {
      get() {
        return this.$store.state.user.user.index;
      },
      set(value) {
        this.$v.index.$touch();
        this.$store.commit("updateIndex", value);
      },
    },

    country: {
      get() {
        return this.$store.state.user.user.country;
      },
      set(value) {
        this.$v.country.$touch();
        this.$store.commit("updateCountry", value);
      },
    },

    region: {
      get() {
        return this.$store.state.user.user.region;
      },
      set(value) {
        this.$v.region.$touch();
        this.$store.commit("updateRegion", value);
      },
    },

    city: {
      get() {
        return this.$store.state.user.user.city;
      },
      set(value) {
        this.$v.city.$touch();
        this.$store.commit("updateCity", value);
      },
    },

    street: {
      get() {
        return this.$store.state.user.user.street;
      },
      set(value) {
        this.$store.commit("updateStreet", value);
      },
    },

    house: {
      get() {
        return this.$store.state.user.user.house;
      },
      set(value) {
        this.$v.house.$touch();
        this.$store.commit("updateHouse", value);
      },
    },
  },

  validations: {
    index: {
      number
    },
    country: {
      alpha,
    },
    region: {
      alpha,
    },
    city: {
      required,
      alpha,
    },
     house: {
      house,
    },
  },
  
};
</script>

<style lang="scss"></style>
