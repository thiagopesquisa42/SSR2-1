<template>
  <div class="card">
    <p class="skill-item">{{ skill }}</p>
  </div>
</template>
<style>
.card{
  margin: 1em;
  padding: 1em;
}

.skill-item {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: darkorchid;
  text-align: center;
  padding: 70px;
  margin-top: 10px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}
</style>
<script>
export default {
  name: 'Card',
  props:{
    skill: String
  },
  data() {
    return {
      habilidades: ['React', 'Ulisses'],
    }
  },
}
</script>
