<template>
  <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Hmmmmm error 404 not found</h4>
    <hr />
    <p>The page you're looking for is not found. Maybe you should try again</p>
    <router-link :to="{ name: 'Home' }">
      Or click here to back to the home page</router-link
    >
  </div>
</template>
