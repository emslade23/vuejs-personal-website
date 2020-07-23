<template>
  <div class="photography">

    <span class="md-headline">Photography and Family Photos</span>
    <v-row>

        <v-col cols="20">
            <v-card flat>
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="n in 10"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                  >
                    <v-card flat class="d-flex">
                      <v-img
                        :src="`assets/me${n}.jpeg`"
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
      

    
  </div>
</template>

<script>
export default {
  name: 'Photography',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-card {
  margin: 2em;
}

</style>
