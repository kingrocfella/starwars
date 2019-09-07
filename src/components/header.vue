<template>
  <div class="bg">
    <div class="bg_content">
      <div class="logo">
        <Logo />
      </div>
      <div class="middle">
        <div class="mid_content">
          <div class="dir">
            <div class="dir_logo">
              <Logo />
            </div>
            <div class="dir_text">Directory</div>
            <div class="hr">
              <hr />
            </div>
          </div>
          <div class="desc">
            <div class="desc1">Find your favorite Characters, Films, Species,</div>
            <div class="desc2">Starships and Planets</div>
          </div>
          <div class="search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Enter a search term" v-model="search" id="searchBox" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/logo";
import { setTimeout, clearTimeout } from "timers";
export default {
  components: {
    Logo
  },
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search: function() {
      let typingTimer; //timer identifier
      let myInput = document.getElementById("searchBox");

      //on keyup, start the countdown
      //store search term in vuex store after 2 seconds automatically
      let app = this;
      myInput.addEventListener("keyup", () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
          app.$store.dispatch("setSearchTerm", app.search);
        }, 2000);
      });
    }
  }
};
</script>

<style scoped>
.bg {
  background-image: url(../assets/hero-banner.jpg);
}

.bg_content {
  display: grid;
  grid-template-columns: 10em auto 10em;
  grid-template-areas: "logo mid .";
}

.logo {
  grid-area: logo;
  display: flex;
  justify-content: space-around;
  padding: 1.5em;
}

.middle {
  grid-area: mid;
  display: grid;
  grid-template-rows: 5em auto 5em;
  grid-template-areas:
    "."
    "mc"
    ".";
}

.mid_content {
  grid-area: mc;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 1em;
  grid-template-areas:
    "dir"
    "desc"
    "sh";
}

.dir {
  grid-area: dir;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    ". . . dirlogo dirtext . . ."
    ". . . hr hr . . .";
}

.dir > .dir_logo {
  grid-area: dirlogo;
}

.dir > .hr {
  grid-area: hr;
  margin-top: -10%;
}

.dir > .dir_text {
  grid-area: dirtext;
  color: white;
  font-size: 2em;
  font-weight: 900;
  font-family: "Ubuntu", sans-serif;
}

.desc {
  grid-area: desc;
  color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.1em;
}

@media screen and (max-width: 500px) {
  .desc {
    grid-area: desc;
    color: #f7f7f7;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.1em;
  }
}

.search,
input {
  grid-area: sh;
  display: flex;
  flex: 0.6;
  box-sizing: border-box;
  padding: 15px 30px;
  justify-content: center;
  border-radius: 5px;
  border: none;
}
</style>

