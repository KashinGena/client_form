<template>
  <div class="modal__mask">
    <div class="modal__wrapper">
      <div class="modal__container">
        <h3 class="modal__title">Пользователь успешно создан</h3>

        <a class="modal__button" @click="$emit('close')">
          OK
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal__container {
  width: 300px;
  height: 200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal__button {
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  display: block;
   background-color: #7621bf;

  margin: 0 auto;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: #fff;
}
</style>
