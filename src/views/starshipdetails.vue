<template>
  <div class="main">
    <StarshipHeader class="header" :imgId="$route.params.imgId" :name="starship_data.name" />
    <div class="content">
      <div class="content_header">{{starship_data.name}}</div>
      <div class="details">
        <div v-if="loader" class="loader">Please wait...</div>
        <StarshipDetail :detail="starship_data" v-if="!loader" />
      </div>
      <div class="slider_title">
        <div class="title_text">Recently viewed Starships</div>
      </div>
    </div>
    <div class="slider">
      <div v-if="slider_loader" class="loader">Please wait...</div>
      <StarShips :data="slider_data" />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import StarShips from "@/components/starships";
import StarshipHeader from "@/components/starshipheader";
import Footer from "@/components/footer";
import apiService from "@/services/apiroutes";
import StarshipDetail from "@/components/starship-detail";

export default {
  components: {
    Footer,
    StarshipHeader,
    StarshipDetail,
    StarShips
  },
  data() {
    return {
      starship_data: [],
      loader: "",
      slider_data: [],
      slider_loader: ""
    };
  },
  created() {
    this.getStarshipDetail();
    this.getAllStarships();
  },
  methods: {
    getStarshipDetail() {
      this.loader = true;
      apiService
        .getStarshipDetail(this.$route.params.id)
        .then(res => {
          this.loader = false;
          this.starship_data = res.data;
        })
        .catch(err => {
          this.loader = false;
          alert("An error occurred while fetching data!");
          console.log(err.message);
        });
    },
    getAllStarships() {
      this.slider_loader = true;
      apiService
        .getAllStarships()
        .then(res => {
          this.slider_loader = false;
          let { results } = res.data;
          let num = this.generateIndexes();
          console.log(num)
          this.slider_data = results.slice(num[0],num[1]);
        })
        .catch(err => {
          this.slider_loader = false;
          alert("An error occurred while fetching data!");
          console.log(err.message);
        });
    },
    generateIndexes(){
      //generate 2 randoms numbers whose difference is 3;
      let max,min;
      let num1 = Math.floor(Math.random() * 6) + 1;
      let num2 = 3 + num1;
      return [num1,num2];
    }
  }
};
</script>

<style scoped>
.main {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0.1fr, 1fr));
  grid-template-rows: 25em 30em auto 3em;
  grid-template-areas:
    "h h h h h h h h h h h h"
    ". . . c c c c c c . . ."
    ". s s s s s s s s s s ."
    "f f f f f f f f f f f f";
  grid-row-gap: 1em;
}

@media screen and (max-width: 500px) {
  .main {
    height: 200vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    grid-template-rows: 25em 30em auto 3em;
    grid-template-areas:
      "h h h h h h h h h h h h"
      ". . c c c c c c c c . ."
      "s s s s s s s s s s s s"
      "f f f f f f f f f f f f";
    grid-row-gap: 1em;
  }
}
.header {
  grid-area: h;
}
.content {
  grid-area: c;
  display: grid;
  grid-template-columns: 5em auto 5em;
  grid-template-rows: 2em 2em auto 1em 3em;
  grid-template-areas:
    ". . ."
    "title title ."
    "detail detail detail"
    ". . ."
    ". st .";
  grid-row-gap: 1em;
  padding-bottom: 0.5em;
}
.content_header {
  grid-area: title;
  font-size: 1.3em;
  font-weight: bolder;
}
.details {
  grid-area: detail;
}
.slider_title {
  grid-area: st;
  font-size: 1em;
  font-weight: bold;
  display: grid;
  grid-template-columns: auto 20em auto;
  grid-template-areas: ". title_text .";
}
.title_text {
  grid-area: title_text;
  border: 1px solid #bababa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em;
}
.slider {
  grid-area: s;
  border-top: 1px solid #bababa;
}
.loader {
  font-weight: 800;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
}
.footer {
  grid-area: f;
}
</style>