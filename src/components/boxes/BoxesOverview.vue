<template>
  <h1>Boxes!</h1>
  <p>Overview van alle boxes in mooie cards, die clickable zijn voor naar detail te gaan </p>

  <button @click="fetchBoxes">GetBoxes</button>
   <a>
  <div class="box" v-for="box in boxes" :key="box.id">
    <p>Name: {{box.name}}</p>
    <p>Price: {{box.price}}</p>
    <p>Number of dishes: {{box.dishes.length}}</p>
  </div>
  <button>Add Box</button>
  </a>
</template>

<script>

export default {
  data() {
    return {
      boxes: [],
    };
  },
  methods: {
    fetchBoxes() {
      const url = 'http://localhost:3000/boxes/';
      this.boxes = [];
      fetch(url)
        .then((response) => response.json())
        // eslint-disable-next-line no-return-assign
        .then((boxes) => { this.boxes = boxes; console.log(boxes); });
    },
  },
  name: 'BoxesPage',
};
</script>

<style>
.box {
  width : 100px;
  height: 150px;
  border: 1px solid black;
}
</style>
