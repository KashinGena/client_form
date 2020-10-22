<template>
  <fieldset class="form__fieldset">
    <legend class="form__title">Данные документа</legend>
    <div
      class="select"
      
    >
      <label class="select__label">Документ</label>
      <div class="select__wrapper">
        <select
          :class="{ select__control_default: typeOfDoc.length === 0 }"
          class="select__control"
          v-model="typeOfDoc"
        >
          <option disabled hidden value="">Выберите документ</option>
          <option>Паспорт</option>
          <option>Свидетельство о рождении</option>
          <option>Вод. удостоверение</option>
        </select>
      </div>
    </div>

    <div
      class="input"
      :class="{ input_error: $v.series.$error && $v.series.$dirty }"
    >
      <label class="input__label">Серия</label>
      <input
        class="input__control"
        pattern="\d*"
        max-length="4"
        v-model="series"
        type="text"
        :placeholder="seriesPlaceholder"
      />
    </div>
    <div class="error" v-if="$v.series.$error && $v.series.$dirty">
      Некорректный формат
    </div>

    <div
      class="input"
      :class="{ input_error: $v.number.$error && $v.number.$dirty }"
    >
      <label class="input__label">Номер</label>
      <input
        class="input__control passport__number"
        v-model="number"
        type="text"
        placeholder="123456"
        inputmode="numeric"
        pattern="[0-9]*"
      />
    </div>
    <div class="error" v-if="!$v.number.alpha && $v.number.$dirty">
      Номер должен состоять из 6 цифр
    </div>

    <div class="input">
      <label for="issuedBy" class="input__label">Кем выдан</label>
      <input
        id="issuedBy"
        class="input__control"
        v-model="issuedBy"
        type="text"
        placeholder="Отделом МВД г. Москва"
      />
    </div>

    <div
      class="input"
      :class="{
        input_error: $v.dateOfIssue.$error && $v.dateOfIssue.$dirty,
      }"
    >
      <label for="dateOfIssue" class="input__label">Дата выдачи *</label>
      <input
        id="dateOfIssue"
        :class="{ input__control_default: dateOfIssue.length === 0 }"
        class="input__control"
        v-model="dateOfIssue"
        type="date"
      />
    </div>
    <div class="error" v-if="!$v.dateOfIssue.required && $v.dateOfIssue.$dirty">
      Поле обязательно для заполнения
    </div>
    <div
      class="error"
      v-if="!$v.dateOfIssue.validDate && $v.dateOfIssue.$dirty"
    >
      Введите корректную дату
    </div>
  </fieldset>
</template>

<script>
import { required, minLength, sameAs, or } from "vuelidate/lib/validators";

import { alpha, number, validDate, seriesPassport, seriesDrivLicence,seriesBirthSertificate } from "@/validations/validators";

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
    seriesPlaceholder() {
      switch (this.typeOfDoc) {
      case "Паспорт":
        return "1234"
        break;
      case "Вод. удостоверение":
        return "34AB"
        break;
      case "Свидетельство о рождении":
        return "III-МЮ"
        break;

      default:
        return "1234"
        break;
    }
    },
    series: {
      get() {
        return this.$store.state.user.user.series;
      },
      set(value) {
        this.$store.commit("updateSeries", value);
      },
    },

    number: {
      get() {
        return this.$store.state.user.user.number;
      },
      set(value) {
        this.$store.commit("updateNumber", value);
      },
    },

    issuedBy: {
      get() {
        return this.$store.state.user.user.issuedBy;
      },
      set(value) {
        this.$store.commit("updateIssuedBy", value);
      },
    },

    typeOfDoc: {
      get() {
        return this.$store.state.user.user.typeOfDoc;
      },
      set(value) {
        this.$store.commit("updateTypeOfDoc", value);
      },
    },

    dateOfIssue: {
      get() {
        return this.$store.state.user.user.dateOfIssue;
      },
      set(value) {
        this.$v.dateOfIssue.$touch();
        this.$store.commit("updateDateOfIssue", value);
      },
    },
  },

  validations() {
    switch (this.typeOfDoc) {
      case "Паспорт":
        return {
          series: {
            seriesPassport
          },
          number: {
            number
          },
          dateOfIssue: {
            required,
            validDate
          }
        }
        break;
      case "Вод. удостоверение":
          return {
          series: {
            seriesDrivLicence
          },
           number: {
            number
          },
          dateOfIssue: {
            required,
            validDate
          }
        }
        break;
      case "Свидетельство о рождении":
          return {
          series: {
            seriesBirthSertificate
          },
           number: {
            number
          },
          dateOfIssue: {
            required,
            validDate
          }
        }
        break;

      default:
        return {
          series: {
            seriesPassport
          },
           number: {
            number
          },
          dateOfIssue: {
            required,
            validDate
          }
        }
        break;
    }
  },
};
</script>

<style lang="scss"></style>
