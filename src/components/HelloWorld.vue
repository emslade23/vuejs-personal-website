<template>
  <div class="hello">

  <v-row>

        <v-col cols="15">
            <v-card flat>
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="n in 6"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                  >
                    <v-card flat class="d-flex ma-0 pa-0">
                      <v-img
                        :src="`assets/gallery${n}.jpeg`"
                        aspect-ratio="1.3"
                      >
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      


<v-card color=#E0F2F1 outlined>
    <v-row no-gutters class="pa-md-7 mx-lg-auto" >
              <v-col
                cols="3"
              >
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="'/assets/IMG_1255.jpeg'"
                      aspect-ratio="1.2"
                      class="grey lighten-2"
                    >
                    </v-img>
                  </v-card>
              </v-col>
              <v-col
                cols="8"
              > 
                  <v-card-title>About Me</v-card-title>
                  <v-card-text > 
                  I have a wide range of interests including
                  self driving cars, psychology and cooking. I am always excited to try out new healthy and delicious meals, so please reach out if you have any good
                  suggestions! 
                  I am also always excited to learn more about how the human mind develops, learns, and perceives. I am currently learning about 
                  developmental psychology which begins to explain how we become who we are. 
                  I am also interested making the future exciting for generations to come. 
                  </v-card-text>
                  <v-card-text>
                    Imagine a world where your car drives you to work and your children attend school
                  from a VR headset in their rooms. One day, I believe this is what our future will look like, and for the time being,
                  I want to take part in the development of that future, particularly, the development of self driving cars.  
                  </v-card-text>
              </v-col>
            </v-row>
 </v-card>
 <Timeline></Timeline>




  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue'
export default {
  name: 'HelloWorld',
  components: {
    Timeline
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-container {
  margin: 3em;
}
.v-card__title {
  color: #092B47;
  font-size: 20pt;

}
.v-card__text {
  color: #092B47; 
}


</style>
