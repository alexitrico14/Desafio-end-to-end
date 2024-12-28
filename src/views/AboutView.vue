<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the About page.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
