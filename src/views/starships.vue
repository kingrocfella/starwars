<template>
  <div class="main">
    <Header class="header" />
    <div class="content">
      <div class="content_header">
        <div class="content_text">
          <u>Popular Starships</u>
        </div>
      </div>
      <div class="starships">
        <div v-if="loader" class="loader">Please wait...</div>
        <div
          v-if="(starships_data.length === 0) && !loader"
          class="loader"
        >No records to be displayed!</div>
        <Starships :data="starships_data" />
      </div>
      <div class="navs" v-if="(starships_data.length > 0) && !loader">
        <div class="nav_num">{{page}} - {{total_pages}} of {{total_items}}</div>
        <div class="left-nav">
          <button class="left-nav-btn" @click="navigateTo(prev,'prev')">
            <i class="fas fa-angle-left"></i>
          </button>
        </div>
        <div class="right-nav">
          <button class="right-nav-btn" @click="navigateTo(next,'next')">
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from "@/components/header";
import Starships from "@/components/starships";
import apiService from "@/services/apiroutes";
import Footer from "@/components/footer";
export default {
  components: {
    Header,
    Starships,
    Footer
  },
  data() {
    return {
      starships_data: [],
      next: "",
      prev: "",
      loader: true,
      total_items: "",
      page: 1,
      total_pages: ""
    };
  },
  created() {
    this.getAllStarships();
  },
  watch: {
    "$store.state.searchTerm": function() {
      this.loader = true;
      //call search API with search term as parameter
      apiService
        .searchStarships(this.$store.state.searchTerm)
        .then(res => {
          this.loader = false;
          let { results, next, previous, count } = res.data;
          this.starships_data = results;
          this.next = next;
          this.prev = previous;
          this.total_items = count;
          this.total_pages = results.length - 1 + this.page;
        })
        .catch(err => {
          this.loader = false;
          alert("An error occurred while fetching data!");
          console.log(err.message);
        });
    }
  },
  methods: {
    getAllStarships() {
      apiService
        .getAllStarships()
        .then(res => {
          this.loader = false;
          let { results, count, next, previous } = res.data;
          this.starships_data = results;
          this.next = next;
          this.prev = previous;
          this.total_items = count;
          this.total_pages = results.length - 1 + this.page;
        })
        .catch(err => {
          this.loader = false;
          alert("An error occurred while fetching data!");
          console.log(err.message);
        });
    },
    navigateTo(route, dir) {
      if (route === null) return;
      this.loader = true;
      apiService
        .navigateTo(route)
        .then(res => {
          this.loader = false;
          let prevPage = this.total_pages;
          let prevLength = this.starships_data.length;
          let { results, next, previous, count } = res.data;
          this.starships_data = results;
          this.next = next;
          this.prev = previous;
          this.total_items = count;
          if (dir === "next") {
            this.total_pages += results.length;
            this.page = prevPage + 1;
          } else {
            this.total_pages -= prevLength;
            this.page -= results.length;
          }
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
  grid-template-columns: repeat(auto-fit, minmax(0.8fr,1fr));
  grid-template-areas:
    "h h h h h h h h h h h h"
    ". c c c c c c c c c c ."
    "f f f f f f f f f f f f";
  grid-row-gap: 1em;
  grid-column-gap: 1em;
}

.header {
  grid-area: h;
}

.content {
  grid-area: c;
  display: grid;
  grid-template-rows: 7em auto 5em;
  grid-row-gap: 1em;
  grid-template-areas:
    "con_head"
    "ships"
    "navs";
}

.content_header {
  grid-area: con_head;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content_text {
  font-size: 1.6em;
  font-weight: 800;
  font-family: "Ubuntu", sans-serif;
}

u {
  text-decoration: none;
  border-bottom: 5px solid black;
}

.starships {
  grid-area: ships;
}

.navs {
  grid-area: navs;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
}

.nav_num {
  margin-right: 10px;
  color: #a1a1a1;
}

.left-nav-btn {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #d1d1d1;
  padding: 10px 15px;
  cursor: pointer;
}

.right-nav-btn {
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
}
</style>
