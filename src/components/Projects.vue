<template>
  <div class="projects">

    <h1>Projects</h1>
    <ProjectElement title="Retro Alarm Clock (EC444)" des="The primary function of the alarm clock is to work as a timer. So when a user inputs a specific time,
                then our clock will take in that time and start a timer. When this timer starts, the seconds will be recorded by one of the servos. Then, the minutes will be 
                recorded by the last two digits on the Alphanumeric display and by the second servo. The hours will be recorded by the first two digits of the alphanumeric display." 
                image="retroalarm.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-1/report.md" linkName="Project Repo"
                video="https://www.youtube.com/watch?v=3sD5_wn7ulk&feature=youtu.be" videoName="Video Demo"
    ></ProjectElement>
    <ProjectElement title="Sensor Central (EC444)" des="In this project, our task was to measure sensor data and display it
                on an application in real time. We worked with infrared and ultrasonic sensors to measure range and we worked with 
                thermistors to measure temperature. We then used a socket to send the new data values to the web application, and the web 
                application was updated with the values in real time." 
                image="sensorcentral.png" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-2/report.md" linkName="Project Repo"
                video="https://www.youtube.com/watch?v=vtBfmNzGsuc&feature=youtu.be" videoName="Video Demo"
    ></ProjectElement>
    <ProjectElement title="FitBit Health Tracker (EC444)" des="For this project, we were given sensors to measure heart rate and steps, and
                we had to record a user's data, and then send it to a web application where we displayed the data in real time. The web application with the biometric data can
                be viewed from anywhere in the world! The main purpose behind this project is to allow family members to monitor health data of their family member
                who is running a marathon." 
                image="wearablecomputer.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-3/report.md" linkName="Project Repo"
                video="https://www.youtube.com/watch?v=s8XyCHvXPtk&feature=youtu.be" videoName="Video Demo"
    ></ProjectElement>
    <ProjectElement title="Autonomous Driving (EC444)" des="In this task, we converted a remote control car, into a self driving car that can drive effectively
                between two segments in a track. Our requirements for the self driving car include: it must prevent collisions using adaptive cruise control, maintain driving center of the track,
                maintain a speed of 0.1m/s-0.4m/s, and sending wireless commands start and stop to the car. We had several more project features such as an
                alpha-numeric display and tfmini LIDAR sensors to control turning!" 
                image="crawler.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-4/report.md" linkName="Check out project repo to learn more!"
                video="https://www.youtube.com/watch?v=6dlBu9K2hMU&feature=youtu.be" videoName="Video Demo"
    ></ProjectElement>
    <ProjectElement title="Secure Key (EC444)" des="The goal for this project is to create a key fob that transmits a proper signal, and if the signal is correct, on the receiving end, a LED will light up." 
                image="securekey2.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-5/report.md" linkName="Project Repo" 
                video="https://www.youtube.com/watch?v=rQ8CEyopQT4&feature=youtu.be" videoName="Video Demo"
    ></ProjectElement>
    <ProjectElement title="Capture the Flag with Crawler (EC444)" des="The goal for this project is to to program a crawler to automatically navigate itself though a course and react
     to stop and go signals emitted from beacons on the track as smoothly as possible. The crawler must also include a manually controlled feature though a web client and use a webcam to decipher a QR code." 
                image="crawlerp1.jpeg" link="https://github.com/emslade23/EC444-Projects/blob/master/quest-6/report.md" linkName="Project Repo" 
                video="https://www.youtube.com/watch?v=9xKs3fbmaRE&feature=youtu.be" videoName="Video Demo!"
    ></ProjectElement>

    
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
