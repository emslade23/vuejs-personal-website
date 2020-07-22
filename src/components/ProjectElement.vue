<template>
<div id="project">
<v-container 
  align-content-center 
  >
    <v-row>
      <v-col >
        <v-card 
        height="480"
        outlined
        color=#E0F2F1 
        >
            <v-row >
              <v-col
               
              >
                <v-card flat class="d-flex">
                  <v-img
                    :src="'/assets/'+ image"
                    aspect-ratio="1"
                   
                  >
                  </v-img>
                </v-card>
              </v-col>
              <v-col
                class="d-flex child-flex"
                cols="5.5"
              >
                <v-card color=#E0F2F1 flat tile class="d-flex">
                <br>
                  <v-card-title>{{title}}</v-card-title>
                  <v-card-subtitle> {{des}} </v-card-subtitle> 
                  <a :href="link"> {{linkName}} </a>
                  <br>
                  <a :href="video"> {{videoName}} </a>
                </v-card>
              </v-col>
              
            </v-row>
        </v-card>
      </v-col>
    </v-row>
 </v-container>
 </div>
</template>

<script>

export default {
  name: 'ProjectElement',
  props: {
    title: String, 
    des: String,
    image: String,
    link: String,
    linkName: String,
    video: String,
    videoName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-card__title {
  color: #092B47;
}
.v-card__subtitle {
  color: #092B47; 
}

a {
    color: #092B47;
}

</style>
