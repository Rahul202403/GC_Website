import React from "react";
import Navbar from "./components/Navbar.js"
import Slider from "./components/Slider.js"
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import Events from "./components/Events.js"
import Achievements from "./components/Achievements.js"
import Testimonials from "./components/Testimonials.js"
import infl1 from "./images/Sriram.jpeg"
import infl2 from "./images/Sathvika.jpeg"
import infl3 from "./images/Meghana.jpeg"
import infl4 from "./images/Divyanshi.jpeg"
import infl5 from "./images/Amruthvarsh.jpeg"
import connect_img from "./images/gc-connect-1.JPG"
import ideathon_img from "./images/ideathon-img.jpg"
import ideathon_img2 from "./images/ideathon_img.jpg"
import gc_connect2 from "./images/gc_connect2.JPG"


export default function App() {
  const sliderImages = [connect_img, ideathon_img2, ideathon_img, gc_connect2]
  const eventImages = [
  {'event_name':'Google Crowdsource Connect 1.0','description':'The Google Crowdsource connect 1.0 held on June 7, 2023, at the Chethana Auditorium in VBIT, was an interactive session with all the class ambassadors of their respective departments. The event was conducted to introduce the class ambassadors about the Google Crowdsource and its significance. The class ambassadors were encouraged to actively participate and share their ideas throughout the event.', 'image':connect_img},
  {'event_name':'IDEATHON','description':'The Ideathon event held on August 25, 2023, at the Nalanda Auditorium in VBIT, was a remarkable gathering of innovative minds. The event was organized by the Google Crowdsource VBIT, aiming to create a platform for students to showcase their technological ideas and collaborate.', 'image':ideathon_img}
  ]
  const testimonials = [
    {'image': infl1,'content':"Helloooo!!! I am Sriram and i work as an influencer for crowdsource. I love working as an influencer because it puts me in a position where i need to be active and also gives me this thrive to learn new things. Being connected with people and also providing them with information in a way that they will understand is an important aspect of an influencer. And I am really excited to know what’s ahead and am blessed to be part of such an amazing community.",'author':'Sriram'},
    {'image': infl2,'content':"Hello! I'm Sathvika, a student from Electronics Department. I am really interested to spread the information about Crowdsource and make people involve in it. Google Crowdsource is nothing but a 'Collaborative Contribution' app that aims to tap the collective wisdom of users to improve its services. Being an influencer as part of this club itself makes me excited because I get to meet and explore the other side of the world. Upon that, being an influencer of Crowdsource club gives me a great opportunity to reach out to as many people as I can. This provides an immense pleasure for me to work effectively, conducting events and ofcourse making it successful with your help. So, I encourage you all to be a part of it and it’s only when we come together can make an event hit.",'author':'Sathvika'},
    {'image': infl3,'content':"Hello everyone, this is R. Meghana. As a student of VBIT, I am fortunate to use the Google Crowdsource app. When I came to know I can contribute to Google I was instantly ready to grab the opportunity. As a Class Ambassador it was such an honorable experience to talk about Google Crowdsource app with my peers. The efforts I put in as a Class Ambassador made sure I got a great opportunity to be an Influencer. The efforts that the forum members put into making any event in my college successful made me enthusiastic to contribute more. By becoming an Influencer, it helps me connect to the professional world and get to know about its positives and negatives.I am thrilled to help Google in improving their services.",'author':'R. Meghana'},
    {'image': infl4,'content':"Hello everyone .. ! I'm Divyanshi Roy , a student pursuing a degree in computer science . Crowdsource is a fun, easy way for all of us  to use our  own abilities to contribute to the building blocks of artificial intelligence (AI). Starting the crowdsource journey  from being as a class ambassador  to crowdsource influencers is delightful and thrilling . Being a crowdsource influencer allows me to connect with a diverse audience and learn from others . This incredible initiative taken by our forum allows me to get connected to the vibrant community of like-minded individuals to contribute alongside the world, trying to  make  a positive impact on the digital world . I'm excited about the opportunity to inspire and be inspired by the wisdom of the crowd..",'author':'Divyanshi Roy'},
    {'image': infl5,'content':"My name is P. Amruth Varsh, and I consider it a great honor to share my experience using the Google Crowdsource app. When I was chosen as an influencer for this amazing network, what had first been a simple curiosity rapidly became an opportunity of a lifetime.My journey was spurred on by a single event: an enthralling seminar given by Google Crowdsource influencers. Their zeal, commitment, and the difference they were creating struck a powerful chord with me. It was a turning point that motivated me to take action.As a Google Crowdsource influencer, I've had the honor of not only utilizing the program myself but also mentoring and motivating others as they go about making contributions. Being a part of a group committed to improving the internet has been an amazing experience.",'author':'P. Amruth Varsh'}
  ]
  
  return (
    <div>
      <Navbar/>
      <Slider images={sliderImages}/>
      <About/>
      <Events eventImages={eventImages}/>
      <Achievements/>
      <Testimonials testimonials={testimonials}/>
      <Footer/>
    </div> 
  )
}