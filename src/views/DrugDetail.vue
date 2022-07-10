<template>
  <div class="hello">
    <h1 class="display-6">Medicine List</h1>
  </div>

  <div class="medicine">
    <tr>
      <td>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder</v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>


                      <h1>Name: {{ this.drugs[0].name }}</h1>

                     <h1>Description: {{ this.drugs[0].description }}</h1>

                     <h1>Short Description: {{ this.drugs[0].shortDesc }}</h1>

                     <h1>How to Take: {{ this.drugs[0].howToTake }}</h1>


        </v-card>
      </td>

    </tr>
  </div>
</template>

<script>

import EventService from "@/service/EventService.js";
import { watchEffect } from '@vue/runtime-core'
// import * as yup from 'yup'
// import ROUTE_PATH from '@/constants/router.js'

export default {
  name: 'DrugDetail',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  data (){
    return {
      drugs: [],
      totalEvents: 0,
    }},
  created() {
      watchEffect(() => {
        EventService.getEventLists(6, 1)
          .then((response) => {
            console.log(response)
            this.drugs = response.data
            this.totalEvents = response.headers['x-total-count']
          })
          .catch((error) => {
            console.log(error)
          })
      })
  },
};
</script>
