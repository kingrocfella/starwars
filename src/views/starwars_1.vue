<template>
  <div class="main">
    <Header class="header" />
    <div class="content">
      <div class="mid_content">
        <div class="top_mid">
          <div class="top_text">
            <u>Starwars Characters</u>
          </div>
          <div class="top_dropdown">
            <div class="top_select">
              <div class="dd_1">
                <span>FILTER</span>
                <select name="filter">
                  <option value>Choose a value</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <div class="dd_2">
                <span>VIEW</span>
                <select name="view">
                  <option value>Choose a value</option>
                  <option value="grid">Grid</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="mid_mid">
          <div v-if="loader" class="loader">Please wait...</div>
          <Characters :data="ch_data"  v-if="!loader" />
        </div>
        <div class="bottom_mid" v-if="!loader">
          <div class="navs">
            <div class="nav_num"> {{page}} - {{total_pages}} of {{total_items}}</div>
            <div class="navs-btn">
              <div class="left">
                <button id="left-nav" @click="navigateTo(prev,'prev')">
                  <i class="fas fa-angle-left"></i>
                </button>
              </div>
              <div class="right">
                <button id="right-nav" @click="navigateTo(next,'next')">
                  <i class="fas fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header";
import Characters from "@/components/characters";
import apiService from "@/services/apiroutes";
export default {
  name: "home",
  components: {
    Header,
    Characters
  },
  data() {
    return {
      ch_data: [],
      errMessage: "",
      next: "",
      prev: "",
      loader: true,
      total_items:"",
      page: 1,
      total_pages: ""
    };
  },
  created() {
    this.getAllPeople();
  },
  methods: {
    navigateTo(route,dir) {
      if (route === null) return;
      this.loader = true;
      apiService
        .navigateTo(route)
        .then(res => {
          this.loader = false;
          let { results, next, previous, count } = res.data;
          this.ch_data = results;
          this.next = next;
          this.prev = previous;
          this.total_items = count;
          this.total_pages = Math.ceil(count/10);
          if(dir === 'next') this.page++;
          else this.page--;
        })
        .catch(err => {
          this.loader = false;
          alert("An error occurred while fetching data!");
          console.log(err.message);
        });
    },
    getAllPeople() {
      apiService
        .getAllPeople()
        .then(res => {
          this.loader = false;
          let { results, next, previous, count } = res.data;
          this.ch_data = results;
          this.next = next;
          this.prev = previous;
          this.total_items = count;
          this.total_pages = Math.ceil(count/10);
        })
        .catch(err => {
          this.loader = false;
          alert("An error occurred while fetching data!");
          console.log(err.message);
        });
    }
  }
};
</script>

<style scoped>
.main {
  height: 200vh;
  display: grid;
  grid-template-rows: 25em auto 3em;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    "h h h h h h h h h h h h"
    ". c c c c c c c c c c ."
    "f f f f f f f f f f f f";
  grid-row-gap: 1em;
}

.header {
  grid-area: h;
  background-color: black;
}

.content {
  grid-area: c;
  display: grid;
  grid-template-columns: 1em auto 1em;
  grid-template-areas: ". mc .";
}

.mid_content {
  grid-area: mc;
  display: grid;
  grid-template-rows: 7em auto 5em;
  grid-row-gap: 1em;
  grid-template-areas:
    "top_mid"
    "mid_mid"
    "down_mid";
}

.top_mid {
  grid-area: top_mid;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "top_text"
    "dropdown";
}

.top_text {
  grid-area: top_text;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6em;
  font-weight: 800;
  font-family: "Ubuntu", sans-serif;
}

u {
  text-decoration: none;
  border-bottom: 5px solid black;
}

.top_dropdown {
  grid-area: dropdown;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "dd .";
}

.top_select {
  grid-area: dd;
  display: flex;
  justify-content: space-around;
  font-family: "Ubuntu", sans-serif;
}

select {
  margin: 1em;
  padding: 10px 12px;
  border-radius: 7px;
  border: 1px solid #d1d1d1;
}

.mid_mid {
  grid-area: mid_mid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.bottom_mid {
  grid-area: down_mid;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navs{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.navs-btn{
  display: flex;
}

.nav_num{
  margin-right: 10px;
  font-family: "Ubuntu", sans-serif;
  color: #bfbfbf;
}

#left-nav {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #d1d1d1;
  padding: 10px 15px;
  cursor: pointer;
}

#right-nav {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #d1d1d1;
  padding: 10px 15px;
  cursor: pointer;
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
  background-color: #c4c4c4;
  margin-bottom: 10px;
}
</style>
