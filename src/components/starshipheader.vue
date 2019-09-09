<template>
  <div class="header-bg" :style="{'background-image': 'url(' + require(`@/assets/starship-${imgId}.jpg`) + ')'}">
    <div class="header-main">
      <div class="header-logo"><Logo /></div>
      <div class="header-navs">
        <div class="box">
          <div class="left_box"></div>
          <div class="name">{{name}}</div>
          <div class="right_box"></div>
        </div>
        <div class="arrows" title="Click to change background image">
          <div class="left_nav" @click="changeBgImage()">
            <i class="fas fa-chevron-circle-left"></i>
          </div>
          <div class="right_nav" @click="changeBgImage()">
            <i class="fas fa-chevron-circle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/logo";
export default {
  components: {
    Logo
  },
  props: ["imgId","name"],
  methods: {
    changeBgImage(){
      this.imgId = Math.floor(Math.random() * 6) + 1;
    }
  },
};
</script>

<style scoped>
.header-bg {
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
}

.header-main {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2em 15em auto 10em 10em;
  grid-template-areas:
    ". . . . . . . . . . . ."
    ". l l . . . . . . . . ."
    ". . . . . . . . . . . ."
    ". . n n n n n n n n n ."
    ". . . . . . . . . . . .";
  color: white;
}

.header-logo {
  grid-area: l;
}

.header-navs {
  grid-area: n;
  display: grid;
  grid-template-columns: 20em auto 10em;
  grid-template-areas: 
  "box . arrows"
}

.box{
  grid-area: box;
  font-size: 1.3em;
  height: 2.8em;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1em auto 1em;
  grid-template-areas: 
  "lb name rb";
}

.left_box{
  grid-area: lb;
  border-left: 1px solid white;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  height: 100%;
  width: 100%;
}

.right_box{
  grid-area: rb;
  border-right: 1px solid white;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  height: 100%;
  width: 100%;
}

.name{
  grid-area: name;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrows{
  grid-area: arrows;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5em;
}

.fas{
  font-size: 3em;
}

.left_nav, .right_nav{
  cursor: pointer;
}
</style>