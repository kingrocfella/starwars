<template>
  <div class="container">
    <div v-for="(item,index) in data" :key="index">
      <div class="starships">
        <div class="img">
          <img :src="shipIndex()" height="200px" width="300px" />
        </div>
        <div class="content">
          <div class="header">{{item.name}}</div>
          <div class="text">
            <div class="model">Model: {{item.model}}</div>
            <div class="cargo_capacity">Cargo Capacity: {{item.cargo_capacity}}</div>
          </div>
          <div class="read_more">
            <button class="read_more_btn" @click="showDetails(item)">
              Read More
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    generateIndex() {
      //generate a random number between 1 - 6 for starship images
      return Math.floor(Math.random() * 6) + 1;
    },
    shipIndex() {
      return require(`@/assets/starship-${this.generateIndex()}.jpg`);
    },
    showDetails(detail) {
      //get id of the selected item by splitting the current url
      let id = String(detail.url).split("https://swapi.co/api/starships/");
      //redirect to starship detail page
      this.$router.push(`/starship/details/${id[1]}${this.generateIndex()}`);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (max-width: 500px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
.starships {
  height: 30em;
  width: 20em;
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "img"
    "c";
  background-color: #c7c7c7;
  margin-top: 2em;
}

.img {
  grid-area: img;
}

.content {
  grid-area: c;
  width: 20em;
  display: grid;
  grid-template-rows: 1em 2em auto 3em;
  grid-row-gap: 2em;
  grid-template-areas:
    "."
    "header"
    "text"
    "read_more";
  margin-left: 0.5em;
  margin-bottom: 0.5em;
  padding-left: 0.9em;
  background-color: #ebebeb;
}

.header {
  grid-area: header;
  font-weight: 500;
  font-size: 1.1em;
  font-family: "Ubuntu", sans-serif;
}

.text {
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.9em;
  color: #949494;
}

.read_more {
  grid-area: read_more;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1em;
}

.read_more_btn {
  box-sizing: border-box;
  padding: 10px 20px;
  border: none;
  background-color: black;
  color: white;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.7em;
  cursor: pointer;
}
</style>