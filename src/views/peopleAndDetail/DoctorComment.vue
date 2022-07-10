<template>
  <div class="card-body">
    <h4>Doctor's comments on {{ people.name }}'s vaccination'</h4>

    <ul>
      <li v-for="Acomment in Comments" v-bind:key="Acomment.name">
        <b> {{ Acomment.name }} </b> : " {{ Acomment.comment }} "
      </li>
    </ul>
    <hr />
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" />
      </div>
      <div class="mb-3">
        <label for="comment" class="form-label">Comment</label>
        <textarea
          class="form-control"
          id="comment"
          rows="3"
          v-model="comment"
        ></textarea>
      </div>
      <button
        type="button"
        class="btn btn-outline-primary btn-sm"
        @click="submit"
      >
        Submit
      </button>
    </form>

    <!-- {{ Comments}} -->
  </div>
</template>

<script>
export default {
  props: ["people", "Comments"],
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    submit() {
      let newComment = {
        name: this.name,
        comment: this.comment,
      };
      this.$emit("comment", newComment);
      this.name = "";
      this.comment = "";
    },
  },
};
</script>
