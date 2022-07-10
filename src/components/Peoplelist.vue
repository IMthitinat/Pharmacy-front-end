<template>
  <tr>
    <td colspan="8">{{ people.name }} {{ people.Surname }}</td>
    <td>{{ people.status }}</td>
    <td>
      <router-link :to="{ name: 'PeopleDetail', params: { id: people.id } }">
        <span @click="detail" class="material-icons"> trending_flat </span>
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: "PeopleList",
  props: {
    people: {
      type: Object,
      required: true,
    },
  },
  inject: ["GStore"],
  methods: {
    detail() {
      this.GStore.flashMessage = "You are in Information page ";
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      this.$router.push({
        name: "PeopleDetail",
      });
    },
  },
};
</script>

<style scoped>
.id a {
  text-decoration-line: none;
  color: brown;
}
</style>
