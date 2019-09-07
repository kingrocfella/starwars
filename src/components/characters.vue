<template>
  <div class="characters">
    <div v-for="(item,index) in data" :key="index">
      <div class="char_container">
        <div class="char_img">
          <img :src="charIndex()" height="280px" width="300px" />
        </div>
        <div class="char_text">
          <div class="char_name">{{item.name}}</div>
          <div class="char_bio">
            <div class="char_birth"> Birth Year: {{item.birth_year}}</div>
            <div class="char_gender">Gender: {{item.gender}}</div>
            <div class="show_details" @click="showDetails(item.name)" v-if="selectedName !== item.name">Read More</div>
            <div class="details" v-else>
              <div class="char_height">Height: {{item.height}}</div>
              <div class="char_mass">Mass: {{item.mass}}</div>
              <div class="char_hair_color">Hair Color: {{item.hair_color}}</div>
              <div class="char_skin_color">Skin Color: {{item.skin_color}}</div>
              <div class="char_eye_color">Eye Color: {{item.eye_color}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      selectedName:""
    }
  },
  methods: {
    charIndex(){
      //generate a random number between 1 - 4 for character images
      let num = Math.floor(Math.random() * 3) + 1;
      return require(`@/assets/character-${num}.jpg`);
    },
    showDetails(name){
      this.selectedName = name;
    }
  },
};
</script>

<style scoped>

.characters{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.char_container {
  background-color: #f7f7f7;
  height: 18.8em;
  width: 30em;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "img char_text";
  margin-top: 1em;
}

.char_img {
  grid-area: img;
}

.char_text {
  grid-area: char_text;
  padding-left: 0.3em;
  display: grid;
  grid-template-rows: 3em 2em 2em auto 5em;
  grid-template-areas:
    "."
    "name"
    "."
    "bio"
    ".";
}

.char_name {
  grid-area: name;
  font-weight: 800;
  font-size: 1.1em;
  font-family: "Ubuntu", sans-serif;
}

.char_bio {
  grid-area: bio;
  font-family: "Ubuntu", sans-serif;
}

.char_birth, .char_gender, .details{
  color: #949494;
}

.show_details{
  font-weight: 700;
  text-decoration: underline;
  padding: 5px;
  cursor: pointer;
}
</style>