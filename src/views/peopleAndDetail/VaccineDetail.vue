<template>
  <div class="card-body">
    <h2 class="card-title">{{ Vaccine.name }}</h2>
    <hr />
    <div class="row">
      <div class="col"><b>Detail </b>:</div>
      <div class="col-10">
        <p class="card-text">{{ Vaccine.detail }}</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col"><b>Country</b> :</div>
      <div class="col-10">
        <p class="card-text">{{ Vaccine.Country }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/service/EventService.js";

export default {
  props: ["Vid"],
  data() {
    return {
      Vaccine: null,
    };
  },
  created() {
    EventService.getVaccineDetail(this.Vid)
      .then((response) => {
        this.Vaccine = response.data;
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
};
</script>
