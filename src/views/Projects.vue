<template>
  <div class="projects">

    <span class="md-headline">IoT Projects</span>
    <br>
    <span class="md-body-1">EC444: Smart and Connected Systems</span>

     <v-container rid-list-md>
      <v-layout row>
        <v-flex xs6>
            <ProjectElement title="Huzzah: Senior Capstone Project" aspectRatio=".5" des="This project aims to map objects or people in a room using non-intrusive technology. Our system provides users with a map of a space and indicators as to which seats are occupied. This is significant for our coffee shop example as it would give users insight as to whether they would be able to get a table. 
             Our final project construction consisted of an end-to-end pipeline which records accelerometer and temperature measurements on IoT devices, aggregates measurements from all devices on a server, makes a decision on state from incoming data, and displays this data on a user-friendly application." 
                image="huzzahapp.png" link="https://github.com/BostonUniversitySeniorDesign/20-05-MLpuck" linkName="Capstone Project Repo"
                video="https://youtu.be/-mY4iKuY7C4" videoName="Project Demo"
                video2="https://docs.google.com/document/d/1NR3jxW8fqn4cia8qNwKgRihuU2aQn5e1e3cuTmxNX5A/edit?usp=sharing" videoName2="Final Capstone Project Report"
            ></ProjectElement>
        </v-flex>
         <v-flex xs6>
             <ProjectElement title="Capture the Flag Crawler Style" aspectRatio="1.1" des="The goal for this project is to to program a crawler to automatically navigate itself though a course and react
                        to stop and go signals emitted from beacons on the track as smoothly as possible. The crawler must also include a manually controlled feature though a web client and use a webcam to decipher a QR code. I build tbe web app and sent data over sockets about manual control mechanism. I also developed the QR deciphering feature from a webcam frame captures." 
                          image="crawlerp1.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-6/report.md" linkName="Project Repo" 
                          video="https://www.youtube.com/watch?v=9xKs3fbmaRE&feature=youtu.be" videoName="Video Demo!"
            ></ProjectElement>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs6>
            <ProjectElement title="FitBit Health Tracker" des="For this project, we were given sensors to measure heart rate and steps, and
                we had to record a user's data, and then send it to a web application where we displayed the data in real time. The web application with the biometric data can
                be viewed from anywhere in the world! The main purpose behind this project is to allow family members to monitor health data of their family member
                who is running a marathon." 
                image="wearablecomputer.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-3/report.md" linkName="Project Repo"
                video="https://www.youtube.com/watch?v=s8XyCHvXPtk&feature=youtu.be" videoName="Video Demo"
            ></ProjectElement>
        </v-flex>
        <v-flex xs6>
             <ProjectElement title="Autonomous Driving" des="In this task, we converted a remote control car, into a self driving car that can drive effectively
                between two segments in a track. Our requirements for the self driving car include: it must prevent collisions using adaptive cruise control, maintain driving center of the track,
                maintain a speed of 0.1m/s-0.4m/s, and sending wireless commands start and stop to the car. We had several more project features such as an
                alpha-numeric display and tfmini LIDAR sensors to control turning!" 
                image="crawler.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-4/report.md" linkName="Project Repo"
                video="https://www.youtube.com/watch?v=6dlBu9K2hMU&feature=youtu.be" videoName="Video Demo"
              ></ProjectElement>
        </v-flex>
      </v-layout>


      <v-layout row>
        <v-flex xs6>
            <ProjectElement title="Secure Key Fob Device" aspectRatio="1" des="For this project, we created a key fob using the esp32 board, a transmitter, and a receiver. This key is met to interact with a hub by sending 
            a unique ID and code which the hub then relays to a servers along with its own ID. Through a local network, the server on the RPi and a web client receive both IDs, the location and time of the interaction as well as the person. The hub then sends an unlocked signal to the fob triggering a green LED on the board. "
                image="securekey2.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-5/report.md" linkName="Project Repo" 
                video="https://www.youtube.com/watch?v=rQ8CEyopQT4&feature=youtu.be" videoName="Video Demo"
            ></ProjectElement>
        </v-flex>
        <v-flex xs6>
             <ProjectElement title="Sensor Central App" aspectRatio="1.5" des="In this project, our task was to measure sensor data and display it
                on an application in real time. We worked with infrared and ultrasonic sensors to measure range and we worked with 
                thermistors to measure temperature. We then used a socket to send the new data values to the web application, and the web 
                application was updated with the values in real time." 
                image="sensorcentral.png" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-2/report.md" linkName="Project Repo"
                video="https://www.youtube.com/watch?v=vtBfmNzGsuc&feature=youtu.be" videoName="Video Demo"
              ></ProjectElement>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6>
            <ProjectElement title="Retro Alarm Clock" des="The primary function of the alarm clock is to work as a timer. So when a user inputs a specific time,
                then our clock will take in that time and start a timer. When this timer starts, the seconds will be recorded by one of the servos. Then, the minutes will be 
                recorded by the last two digits on the Alphanumeric display and by the second servo. The hours will be recorded by the first two digits of the alphanumeric display." 
                image="retroalarm.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-1/report.md" linkName="Project Repo"
                video="https://www.youtube.com/watch?v=3sD5_wn7ulk&feature=youtu.be" videoName="Video Demo"
            ></ProjectElement>
        </v-flex>

      </v-layout>
    </v-container>


    
  </div>
</template>

<script>
import ProjectElement from '@/components/ProjectElement.vue'
export default {
  name: 'Projects',
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
