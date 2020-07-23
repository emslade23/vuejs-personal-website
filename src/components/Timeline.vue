<template>
<div id="timeline">
     <v-timeline>
      <v-timeline-item
        color="#E5A29A"
        small
      >
        <template v-slot:opposite>
          <span>Summer 2018</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Accenture Security Internship</v-card-title>
          <v-card-text>
            I interned at Accenture as a Security Analyst. I developed correlation searches designed to trigger events relating to cloud vulnerabilities in a company network, outpacing competitors who lack cloud event monitoring systems and delivering enhanced security for clients. 
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        color="#092B47"
        small
      >
        <template v-slot:opposite>
          <span>Fall 2018</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Hack4Impact</v-card-title>
          <v-card-text>
            I started a Hack4Impact Chapter at Boston University! Hack4Impact is a club that builds technology for social good. I led a 40-student club that implements innovative technical solutions for nonprofit clients' challenges and fosters a welcoming, collaborative learning environment for students. For Life of Freedom Center, I orchestrated and participated in the development of responsive Javascript data visuals that highlight trends between common types of human trafficking and victims’ age, gender, and location, yielding more effective allocation of the nonprofit’s outreach to vulnerable populations and streamlining the connection between the victim and the necessary healthcare resources. For the Growing Real Opportunities in the Workforce Project, I delegated product features to a team of 5 engineers, while also implementing the Admin and Teacher modes in a MongoDB database schema for the GROW career development NodeJS application that inspires underprivileged youth in Chicago and the Bay Area to discover their interests and passions.
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        color="#006064"
        small
      >
        <template v-slot:opposite>
          <span>Summer 2019</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">VERTO Internship</v-card-title>
          <v-card-text>
            I interned at VERTO, an e-commerce start-up. I wrote a JS function for the mobile application that requests camera permissions from the user, stores multiple product photos, uploads them to a server, and uses labels to filter the product on the main product page, enhancing the seller’s user experience and boosting customer adoption of the university e-commerce site. I also wrote a JS function to allow seller to input price, tags, and details about the product and upload it to server using REST APIs, improving the organization of the main product page and boosting the quality of the product filtering mechanism.
   
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        color="#CD4F1A"
        small
      >
        <template v-slot:opposite>
          <span>Summer 2019</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Accenture Technology Internship</v-card-title>
          <v-card-text>
            I interned at Accenture as a Technology Analyst. I conducted market research to determine the most important use cases for an employee learning platform while also implementing these use cases, to convey the usefulness of platform during demo meetings with clients. I also customized queries and interactive graphs to showcase correlations between employee learning behavior and sales performance, boosting consulting managers’ and clients’ excitement for the potential of learning platform
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        color="#E0F2F1"
        small
      >
        <template v-slot:opposite>
          <span>Summer 2020</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Boston University Graduation</v-card-title>
          <v-card-text>
            I graduated Magna Cum Laude with a Bachelor of Science in Computer Engineering! I will be working at Optimus Ride in August and I am so excited to start!
    
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
 </div>
</template>

<script>

export default {
  name: 'Timeline'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title1{
    font-weight: bold;
    color: "#E5A29A";
}
.title2{
    font-weight: bold;
    color: "#092B47";
}
.title3{
    font-weight: bold;
    color: "#006064";
}
.title4{
    font-weight: bold;
    color: "#CD4F1A";
}
.title5{
    font-weight: bold;
    color: "#E0F2F1";
}
.first{
    color: "#092B47";
}

</style>
