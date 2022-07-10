<template>
  <div id="layout">
    <div v-if="people">
      <div id="nav-nest">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <router-link
              @click="detail"
              class="page-link"
              id="page-prev"
              :to="{ name: 'PeopleDetail' }"
              >{{ people.name }}'s detail</router-link
            >
          </li>
          <li class="page-item">
            <router-link
              @click="doctor"
              class="page-link"
              id="page-prev"
              :to="{ name: 'DoctorComment' }"
              >Doctor's recommandation</router-link
            >
          </li>
          <li class="page-item">
            <router-link
              @click="vaccines"
              class="page-link"
              id="page-next"
              :to="{ name: 'VaccineDetail', params: { Vid: people.Vaccine } }"
              >Vaccine's detail</router-link
            >
          </li>
        </ul>
      </div>

      <div id="card" class="card mb-3" style="max-width: 900px">
        <router-view
          :people="people"
          :Comments="Comments"
          @comment="addComment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/service/EventService.js";

export default {
  props: ["id"],
  inject: ["GStore"],
  data() {
    return {
      people: null,
      Comments: [],
    };
  },
  created() {
    EventService.getPeopleDetail(this.id)
      .then((response) => {
        this.people = response.data;
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: "NotFound",
          });
        } else {
          this.$router.push({
            name: "NetworkError",
          });
        }
      });
  },
  methods: {
    addComment(comment) {
      this.Comments.push(comment);
    },
    doctor() {
      this.GStore.flashMessage = "You are in Doctor Comment page ";
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      this.$router.push({
        name: "DoctorComment",
      });
    },
    vaccines() {
      this.GStore.flashMessage = "You are in Vaccine Detail page ";
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      this.$router.push({
        name: "VaccineDetail",
      });
    },
    detail() {
      this.GStore.flashMessage = "You are in Information page ";
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      this.$router.push({
        name: "VaccineDetail",
      });
    },
  },
};
</script>

<style scoped>
#layout {
  margin-top: 10px;
}

#card {
  margin: 0 auto;
}
</style>
