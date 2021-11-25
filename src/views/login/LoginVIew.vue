<template>
  <div class="containerBox">
    <Particles
      id="tsparticles"
      :options="config"
    />
    <div class="content">
      <LoginForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { config } from './particles'
import LoginForm from './LoginForm.vue'

</script>

<style scoped>
.containerBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.content {
  background: rgb(236, 230, 230);
}
</style>
