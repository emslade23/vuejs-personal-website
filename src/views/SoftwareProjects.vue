<template>
  <div class="softwareprojects">

    <span class="md-headline">Software Projects</span>
    <br>
    <span class="md-body-1">from software engineering courses and personal projects.</span>

     <v-container rid-list-md>
      <v-layout row>
        <v-flex xs6>
             <ProjectElement title="COVID Tracker App" aspectRatio=".5" des="I developed a React Native Application that pulls COVID data from an API and overlays it on a map to a user. The overlay depends on the longitude and laditude of the specific country, so I created a data structure to keep track of the
             countries locations and their respective COVID health data. I then referenced this data structure to create the map overlay.
             The app also provides a summary of the total infected, total deaths, and total recovered." 
                image="covidapp.gif" link="https://github.com/emslade23/codvid-app-emslade23" linkName="COVID Project Repo"
              ></ProjectElement>
        </v-flex>
        <v-flex xs6>
             <ProjectElement title="ML Translate" aspectRatio="1" des="In this project, my team and I built an app that helps you translate objects into another language. This app could be useful when you are traveling. The app accesses your webcam, and allows you to select a language to translate to. Then, you can show the webcam any object, 
             and our image recognition algorithm with recognize the image and convert it to a text string. I developed the live API that will take that text string and translate it into the user selected language. The translated text will then get displayed back to
             the user in real time!" 
                image="mltranslate2.gif" link="https://github.com/emslade23/TranslateAR" linkName="Project Repo"
                video="https://pure-eyrie-22820.herokuapp.com/" videoName="Live Video Demo Online" video2="https://translate-ar.herokuapp.com/translate?translateTo=russian&textToTranslate=hi+friend" videoName2="Live Translate API"
              ></ProjectElement>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs6>
            <ProjectElement title="Twitter Summarizer App" aspectRatio="1" des="For this project, I developed an application that allows a user to input a twitter handle, and the number of tweets they would like to see and then, a video summarizing the tweets is returned to the user. The app is currently online, 
            and multiple users are able to request tweets at a time because of the threading feature I implemented.  
            I designed this project using object oriented programming and decided it would be best to store
            the tweets in a userTweets object that I could reference when creating the tweet summary video." 
                image="musk.gif" link="https://github.com/emslade23/twitter-summarizer-rest-service-emslade23/blob/master/README.md" linkName="Project Repo"
                video="https://twitter-video-app.herokuapp.com/tweetVideo?handle=@lifemathmoney&tweetNumber=30" videoName="Example Twitter Summary Video for @lifemathmoney"
            ></ProjectElement>
        </v-flex>
        <v-flex xs6>
            <ProjectElement title="Weather App with Saved Locations" aspectRatio="1.6" des="For this project, my teammate and I wanted to develop a web application that allows a user to login, search for a location's weather, and save visited locations for future use. 
            I implemented the single sign on feature for the project, while my teammate designed and managed the database. I also developed the call to the Weather API, developed the data visualization to display the weather data for a respective location, and I also deployed the application."
                image="weatherSeniorDesign.gif" link="https://github.com/emslade23/2019-mini-s25" linkName="Project Repo" 
                video="http://emslade.pythonanywhere.com/" videoName="Live Weather Website!"
                
            ></ProjectElement>
        </v-flex>
      </v-layout>


      <v-layout row>
        <v-flex xs6>
            <ProjectElement title="Weather API for Airports" aspectRatio="1.3" des="The goal of this project was to develop my own REST API architecture and help a user receive weather information at a specific airport. When a user inputs an airport, my
            API will return the maximum possible temperature, minimum possible temperature, and humidity for that given location. What happens behind the scenes: the user inputs a location and I check it to make sure it is valid. Then, I 
            look through a CSV to determine the latitude and longitude coordinates of the airport, then using this data, I call a weather API and return the weather data back to the user." 
                image="weatherapi.png" link="https://github.com/emslade23/api-design-emslade23" linkName="Project Repo"
            ></ProjectElement>
        </v-flex>
        <v-flex xs6>
             <ProjectElement title="Health Monitor App" aspectRatio="1.6" des="This project simulates a Health Monitor setup for an ICU. A user can see a patient's current blood pressure, blood oxygen levels, and pulse. 
                An alert is sent if any reading returns a value outside of the given healthy interval. The readings are fed into an ML algorithm that returns predictions about future readings for the patient.
                My team divided the project into independent modules to make the development process more efficient. I developed a program that uses linear regression to predict the next blood pressure, blood oxygen, and pulse." 
                          image="healthmonitor.png" link="https://github.com/emslade23/health-monitor-team7" linkName="Project Repo"
            ></ProjectElement>
        </v-flex>
      </v-layout>

            <v-layout row>
        <v-flex xs6>
            <ProjectElement title="Cloud Computing ChRIS Benchmarking Project" aspectRatio="1" des="For this project, my team and I created a ChRIS plugin that could measure GPU performance on x86 and Power9 architectures. I focused on deploying the process manager, pman and the process file input and output handler, pfioh images onto an x86 Openshift cluster to use. "
                image="chris.png" link="https://github.com/emslade23/Medical-Compute-using-ChRIS-on-the-MOC-PowerPC-and-x86_64-GPU-usage-and-benchmarking" linkName="Project Repo" 
                video="https://www.youtube.com/watch?v=1e_rx_YLQEw" videoName="Final Project Video Demo"
            ></ProjectElement>
        </v-flex>
        <v-flex xs6>
             <ProjectElement title="Time2Care" aspectRatio="1" des="This application is meant for people wanting to go to an emergency room in the fastest way possible. The app takes in wait times for emergency rooms and displays it for users to help them make the most informed decision about which emergency room to go to. I developed the patient portal pages. We developed this app at an Accenture hackathon and won first place." 
                          image="emergency.jpeg" link="https://github.com/emslade23/Time2Care" linkName="Project Repo" 
            ></ProjectElement>
        </v-flex>
      </v-layout>
    </v-container>


    
  </div>
</template>

<script>
import ProjectElement from '@/components/ProjectElement.vue'
export default {
  name: 'SoftwareProjects',
  components: {
    ProjectElement
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-card {
  margin: 2em;
}

</style>
