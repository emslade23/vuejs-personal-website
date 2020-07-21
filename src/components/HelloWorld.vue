<template>
  <div class="hello">
    <div>
      <h1>{{ msg }}</h1>
    <p class="font-weight-regular">
      Systems Engineer, Creator, Cook
    </p>
    <p class="font-weight-light">Boston University B.S Computer Engineering (May 2020).</p>

    </div>
<v-container>
    <v-row class="pa-md-7 mx-lg-auto">
      <v-col >
            <v-row >
              <v-col
                cols="4"
              >
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="'/assets/IMG_1255.jpeg'"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                  </v-img>
                </v-card>
              </v-col>
              <v-col
                cols="6"
              >
                <br>
                  
                  <v-card-text > 
                  I have a wide range of interests including
                  self driving cars, psychology and cooking. I am always excited to try out new healthy and delicious meals, so please reach out if you have any good
                  suggestions! 
                  </v-card-text>
                  <v-card-text>
                  I am also always excited to learn more about how the human mind develops, learns, and perceives. I am currently learning about 
                  developmental psychology which begins to explain how we become who we are. 
                  </v-card-text>
                  <v-card-text>
                  I am also interested making the future exciting for generations to come. Imagine a world where your car drives you to work and your children attend school
                  from a VR headset in their rooms. One day, I believe this is what our future will look like, and for the time being,
                  I want to take part in the development of that future, particularly, the development of self driving cars.  
                  </v-card-text>
              </v-col>
            </v-row>
      
      </v-col>
    </v-row>
 </v-container>




  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-container {
  margin: 3em;

}
.v-card {
  margin: 2em;
}
</style>
