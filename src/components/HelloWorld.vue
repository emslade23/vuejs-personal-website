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
      

    <v-app id="inspire">
        <v-card color=#E0F2F1 outlined class="mx-auto" width="800px">
            <v-row justify="center" no-gutters>
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
                   md="7" offset-md="1">
                    <br>
                    <v-card-title> Welcome to my website!</v-card-title>
                    <v-card-text> Please feel free to check out my engineering projects. There are IoT projects and software projects. Each of these projects were completed in college. </v-card-text>
                </v-col>
              </v-row>
        </v-card>
    </v-app>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-container {
  margin: 3em;
}
.v-card__title {
  color: #092B47;
  font-size: 25pt;
}
.v-card__text{
  color: #23435e;
}
</style>
