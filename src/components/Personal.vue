<template>
  <fieldset class="form__fieldset">
    <legend class="form__title">Персональные данные</legend>
    <div
      class="input"
      :class="{
        input_error: $v.secondName.$error && $v.secondName.$dirty,
      }"
    >
      <label class="input__label">
        Фамилия*
      </label>
      <input
        autofocus
        v-model="secondName"
        class="input__control"
        type="text"
        placeholder="Иванов"
      />
    </div>
    <div class="error" v-if="!$v.secondName.required && $v.secondName.$dirty">
      Поле обязательно для заполнения
    </div>
    <div class="error" v-show="!$v.secondName.alpha && $v.secondName.$dirty">
      Допустимы только буквы русского алфавита
    </div>

    <div
      class="input"
      :class="{
        input_error: $v.firstName.$error && $v.firstName.$dirty,
      }"
    >
      <label class="input__label">
        Имя*
      </label>
      <input
        v-model="firstName"
        placeholder="Иван"
        class="input__control"
        type="text"
      />
    </div>
    <div class="error" v-if="!$v.firstName.required && $v.firstName.$dirty">
      Поле обязательно для заполнения
    </div>
    <div class="error" v-if="!$v.firstName.alpha && $v.firstName.$dirty">
      Допустимы только буквы русского алфавита
    </div>

    <div
      class="input"
      :class="{ input_error: $v.surname.$error && $v.surname.$dirty }"
    >
      <label class="input__label">
        Отчество
      </label>

      <input
        v-model="surname"
        class="input__control"
        placeholder="Иванович"
        type="text"
      />
    </div>
    <div class="error" v-if="!$v.surname.alpha && $v.surname.$dirty">
      Допустимы только буквы русского алфавита
    </div>

    <div
      class="input"
      :class="{
        input_error: $v.dateOfBirth.$error && $v.dateOfBirth.$dirty,
      }"
    >
      <label class="input__label">
        Дата рождения*
      </label>
      <input
        :class="{ input__control_default: dateOfBirth === null }"
        v-model.lazy="dateOfBirth"
        class="input__control"
        type="date"
      />
    </div>
    <div class="error" v-if="!$v.dateOfBirth.required && $v.dateOfBirth.$dirty">
      Поле обязательно для заполнения
    </div>
    <div class="error" v-if="!$v.dateOfBirth.validDate && $v.dateOfBirth.$dirty">
      Введите корректную дату
    </div>




    <div
      class="input"
      :class="{ input_error: $v.phone.$error && $v.phone.$dirty }"
    >
      <label class="input__label">
        Телефон*
      </label>
      <input
        v-model.lazy="phone"
        placeholder="71234567899"
        class="input__control "
        type="tel"
        inputmode="tel"
        pattern="[0-9]*"
      />
    </div>
    <div class="error" v-if="!$v.phone.required && $v.phone.$dirty">
      Поле обязательно для заполнения
    </div>
    <div class="error" v-if="!$v.phone.number && $v.phone.$dirty">
      Неверный формат номера телефона
    </div>

    <div class="radio">
      <label class="radio__label">Пол</label>
      <div class="radio__wrapper">
        <label class="radio-item__label">
          <input
            class="radio-item__control"
            value="male"
            v-model="sex"
            type="radio"
          />
          М
        </label>

        <label class="radio-item__label">
          <input
            class="radio-item__control"
            value="female"
            v-model="sex"
            type="radio"
          />
          Ж
        </label>
      </div>
    </div>

    <div
      class="select"
      :class="{
        select_error: $v.typeOfClient.$error && $v.typeOfClient.$dirty,
      }"
    >
      <label class="select__label">
        Группа клиентов*
      </label>
      <div class="select__wrapper" @click="showSelect = !showSelect">
        <input
          readonly
          placeholder="Выберите группу"
          size="0"
          :value="typeOfClient"
          class="select__control"
        />
        <ul class="option-list" :class="{ hidden: !showSelect }">
          <li class="option-item">
            <div class="checkbox">
              <label class="checkbox__label">
                <input
                  class="checkbox__control"
                  v-model="typeOfClient"
                  value="Проблемные"
                  type="checkbox"
                />
                Проблемные
              </label>
            </div>
          </li>
          <li class="option-item">
            <div class="checkbox">
              <label class="checkbox__label">
                <input
                  class="checkbox__control"
                  v-model="typeOfClient"
                  value="VIP"
                  type="checkbox"
                />
                VIP
              </label>
            </div>
          </li>
          <li class="option-item">
            <div class="checkbox">
              <label class="checkbox__label">
                <input class="checkbox__control"  v-model="typeOfClient" value="ОМС" type="checkbox" />
                ОМС
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="error"
      v-if="!$v.typeOfClient.required && $v.typeOfClient.$dirty"
    >
      Поле обязательно для заполнения
    </div>

    <div class="select">
      <label class="select__label">Врач </label>
      <div class="select__wrapper">
        <select
          v-model="doctor"
          class="select__control"
          :class="{ select__control_default: doctor.length === 0 }"
        >
          <option selected value="">Выберите врача</option>
          <option  class="option-item">Иванов</option>
          <option  class="option-item">Захаров</option>
          <option  class="option-item">Чернышева</option>
        </select>
      </div>
    </div>

    <div class="checkbox">
      <label class="checkbox__label">
        <input class="checkbox__control" v-model="isMessage" type="checkbox" />Не отправлять смс
      </label>
    </div>
  </fieldset>
</template>

<script>
import { required, minLength, sameAs, or } from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";

import {alpha,phone, validDate} from "@/validations/validators"

export default {
  props: {
    isWantChange: {
      type: Boolean,
    },
    isValid: {
      type: Boolean,
    },
  },
  data() {
    return {
      showSelect: false,
     
    };
  },
  methods: {},
  watch: {
    isWantChange() {
      if (this.isWantChange == true) {
        this.$v.$touch();
        this.$emit("update:isValid", !this.$v.$invalid);
      }
    },
  },
  computed: {
    secondName: {
      get() {
        return this.$store.state.user.user.secondName;
      },
      set(value) {
        this.$v.secondName.$touch();
        this.$store.commit("updateSecondName", value);
      },
    },
    firstName: {
      get() {
        return this.$store.state.user.user.firstName;
      },
      set(value) {
        this.$v.firstName.$touch();
        this.$store.commit("updateFirstName", value);
      },
    },

    surname: {
      get() {
        return this.$store.state.user.user.surname;
      },
      set(value) {
        this.$v.surname.$touch();
        this.$store.commit("updateSurname", value);
      },
    },

    dateOfBirth: {
      get() {
        return this.$store.state.user.user.dateOfBirth;
      },
      set(value) {
       
         this.$v.dateOfBirth.$touch()
        this.$store.commit("updateDateOfBirth", value);
      },
    },

    typeOfClient: {
      get() {
        return this.$store.state.user.user.typeOfClient;
      },
      set(value) {
        this.$store.commit("updateTypeOfClient", value);
      },
    },

    doctor: {
      get() {
        return this.$store.state.user.user.doctor;
      },
      set(value) {
        this.$store.commit("updateDoctor", value);
      },
    },

    phone: {
      get() {
        return this.$store.state.user.user.phone;
      },
      set(value) {
        console.log(this.getPhoneValid(value));
        
        this.$v.phone.$touch();
        this.$store.commit("updatePhone",this.getPhoneValid(value));
      },
    },

    sex: {
      get() {
        return this.$store.state.user.user.sex;
      },
      set(value) {
        this.$store.commit("updateSex", value);
      },
    },

    isMessage: {
      get() {
        return this.$store.state.user.user.isMessage;
      },
      set(value) {
        this.$store.commit("updateIsMessage", value);
      },
    },
  },

  validations: {
    firstName: {
      required,
      alpha,
    },
    secondName: {
      required,
      alpha,
    },
    surname: {
      alpha,
    },

    dateOfBirth: {
      required,
      validDate
     
    },
    phone: {
      required,
      phone,
    },
    typeOfClient: {
      required,
    },
  },
  methods: {
    getPhoneValid(value) {
     switch (value[0]) {
       case '+':
         return '7' + value.substr(2)
         break;
     case '8':
         return '7'+value.substr(1)
         break;
     
       default:
         return value
         break;
     }
    }
  //   onChangePhone(value) {
  //     switch (value.length) {
  //       case 2:
  //         return value[0] + "(" + value[1];
  //         break;
  //       case 5:
  //         return value + ")";
  //         break;
  //       case 9:
  //         return value + "-";
  //         break;

  //       default:
  //         return value;
  //         break;
  //     }
  //   },
   },
};
</script>

<style lang="scss"></style>
