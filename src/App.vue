<template>
  <div id="app">

    <div class="container">

      <div class="row">
        <Nav/>
      </div>
      
      <div class="row">
          <div class="main-content">
            <router-view></router-view>
          </div>
      </div>

    </div>

  </div>
</template>

<script>

import Nav from './partials/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>

</style>
