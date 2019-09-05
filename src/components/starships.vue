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
            <div class="w3-container">
              <div id="id01" class="w3-modal">
                <div class="w3-modal-content">
                  <div class="w3-container">
                    <span
                      onclick="document.getElementById('id01').style.display='none'"
                      class="w3-button w3-display-topright"
                    >&times;</span>
                    <div class="details">
                      <StarshipModal :selectedName="selectedName" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onclick="document.getElementById('id01').style.display='block'"
              style="display: none;"
              id="clickBtn"
            ></button>
          </div>
          <div class="read_more" v-if="selectedName !== item.name">
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
import StarshipModal from "@/components/starship-modal";
export default {
  components: {
    StarshipModal
  },
  props: ["data"],
  methods: {
    shipIndex() {
      //generate a random number between 1 - 6 for starship images
      let num = Math.floor(Math.random() * 6) + 1;
      return require(`@/assets/starship-${num}.jpg`);
    },
    showDetails(name) {
      this.selectedName = name;
      document.getElementById("clickBtn").click();
    }
  },
  data() {
    return {
      selectedName: ""
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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