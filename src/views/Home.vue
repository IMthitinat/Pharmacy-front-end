<template>
  <div class="home">
    <h1 class="display-6">List of vaccinated people</h1>
    <hr />
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <table class="table table-hover">
          <thead>
            <tr>
              <th colspan="8" scope="col">Name and Surname</th>
              <th scope="col">Status(dose(s))</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            <PeopleList
              v-for="people in peoples"
              :key="people.id"
              :people="people"
            />
          </tbody>
        </table>
      </div>

      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <router-link
              class="page-link"
              id="page-prev"
              :to="{ name: 'Home', query: { page: page - 1 } }"
              rel="prev"
              v-if="page != 1"
              >Previous</router-link
            >
          </li>
          <li class="page-item">
            <router-link
              class="page-link"
              id="page-next"
              :to="{ name: 'Home', query: { page: page + 1 } }"
              rel="next"
              v-if="hasNextPage"
              >Next</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PeopleList from "@/components/Peoplelist.vue";
import EventService from "@/service/EventService.js";
import { watchEffect } from "@vue/runtime-core";

export default {
  name: "Home",
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    PeopleList,
  },
  data() {
    return {
      peoples: null,
      totalEvents: 0,
    };
  },
  created() {
    watchEffect(() => {
      EventService.getPeoplelList(this.page)
        .then((response) => {
          this.peoples = response.data;
          this.totalEvents = response.headers["x-total-count"];
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 8);
      return this.page < totalPages;
    },
  },
};
</script>
<style>
.home {
  margin-top: 10px;
}
</style>
