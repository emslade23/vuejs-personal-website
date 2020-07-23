<template>
  <div id="app">

    <v-card tile color="#E5A29A">
      <v-card-title class="py-7">

      </v-card-title>
     </v-card>
     <br>
     <br>
    <div>
        <h1 class="title display-3">Elizabeth Slade</h1>
        <span class="md-subheading">
        Systems Engineer, Builder, Creator, Cook
        </span>
        <!-- <span class="md-body-1">BU Computer Engineering (May 2020)</span> -->
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/iotProjects">IoT Projects </router-link> | 
      <router-link to="/softwareProjects"> Software Projects</router-link> |
      <router-link to="/cooking"> Cooking</router-link> |
      <router-link to="/photography"> Photography</router-link> 
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #092B47;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 12pt;
  color: #092B47;
}

#nav a.router-link-exact-active {
  color: #006064;
  font-size: 12pt;
}

.title {
color: #CD4F1A !important;
font: serif;
font-weight: bold;
font-size: 30pt;
padding: .3em;
}
</style>
