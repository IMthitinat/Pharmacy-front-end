<template>
  <div>
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-thumbnail" v-bind:src="people.img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title">{{ people.name }} {{ people.Surname }}</h4>
          <hr />
          <div class="container">
            <div class="row">
              <div class="col"><h6 class="card-text">Age :</h6></div>

              <div class="col-8">
                <p class="card-text">
                  {{ people.age }}
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col">Home Town :</div>

              <div class="col-8">
                {{ people.hometown }}
              </div>
            </div>

            <div class="row">
              <div class="col">Vaccine :</div>

              <div class="col-8">
                {{ people.Vaccinename }}
              </div>
            </div>

            <div class="row">
              <div class="col">Status :</div>

              <div class="col-8">
                {{ people.status }}
                <span v-if="people.status === ' 1 '"> dose</span>
                <span v-else>
                  doses <span class="material-icons"> check_circle </span></span
                >
              </div>
            </div>

            <div class="row">
              <div class="col">Latest vaccinated :</div>

              <div class="col-8">
                {{ people.when }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["people"],
};
</script>
