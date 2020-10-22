<template>
  <div id="app">
    <div class="container">
      <Form @usercreated="onUserCreate"/>
      <Modal v-if="showModal" @close="showModal=false"/>
      
    </div>
   
    
  </div>
</template>

<script>
import Form from '@/components/Form'
import Modal from '@/components/Modal'

export default {
  name: 'App',
  components: {
    Form,
    Modal
  },
 data() {
   return {
     showModal:false
   }
 },
 methods: {
   onUserCreate() {
     this.showModal=true
   }
 }
}
</script>

<style lang="scss">
.container {
  max-width:1170px;
  margin:0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
