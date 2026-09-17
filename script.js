const data={
bus:{
tag:"IoT • GPS • PHP • MySQL",
title:"Smart Bus Tracking & Digital Ticketing System",
overview:"The Smart Bus Tracking & Digital Ticketing System is an IoT and web-based transportation solution designed to make public bus transportation easier, smarter and more transparent.",
sections:{
purpose:"The main purpose of this project is to allow passengers to find buses, select routes, purchase digital tickets and see the live GPS location of a selected bus. It also helps administrators manage buses, routes, prices and ticket information.",
problem:"Traditional bus systems can make it difficult for passengers to know the location of a bus, manage ticket information and access route details. This project addresses these challenges by connecting GPS, IoT, a web application and a database.",
how:"An ESP32 connected to a GPS module obtains the bus coordinates. The coordinates are sent to the server through an internet/GSM connection. The PHP backend stores and provides the data, while the web dashboard displays the bus location on a map. Users can also select a route and purchase a digital ticket.",
users:"Passengers use the system to register, select a bus/route, pay and view tickets. Administrators manage buses, routes, prices and system information. The driver/bus device provides GPS location data.",
result:"The expected result is a connected transport platform where passengers can access route information, digital tickets and near-real-time bus location from a web interface."
},
features:["Admin adds buses, routes and route prices","User registration and login","Route and bus selection","Digital ticket purchase","Payment status","Ticket history","Live GPS bus location on a map"],
tech:["ESP32","NEO-6M GPS","PHP","MySQL","JavaScript","Google Maps","GSM/HTTP"]
},
water:{
tag:"ADVANCED IoT",
title:"Smart Water Monitoring",
overview:"An advanced IoT platform concept for monitoring water conditions and waste and presenting useful information through a dashboard.",
sections:{purpose:"The purpose is to collect water-related sensor data and provide a dashboard that can help fishermen, tourists and fish buyers understand water conditions and fish-related locations.",problem:"Water pollution and limited information about water conditions can make activities around lakes and rivers more difficult.",how:"IoT sensors collect measurements and send them to a server. The dashboard presents the information and can generate alerts when abnormal conditions are detected.",users:"Fishermen, tourists, fish buyers and administrators.",result:"A centralized dashboard for monitoring water conditions and useful location information."},
features:["Water-quality/waste sensing","IoT data collection","Monitoring dashboard","Fish-location visualization concept","Alerts","Historical data"],
tech:["ESP32","IoT Sensors","PHP","MySQL","JavaScript"]
},
attendance:{
tag:"WEB APPLICATION",
title:"Attendance Management System",
overview:"A digital attendance platform for recording, storing and reviewing attendance information efficiently.",
sections:{purpose:"The purpose is to replace or improve manual attendance records with a searchable digital system.",problem:"Manual attendance can take time and makes searching and maintaining historical records difficult.",how:"Authorized users record attendance through a web interface. PHP processes the information and MySQL stores the records.",users:"Students, teachers and administrators.",result:"Faster attendance recording, organized records and easier reporting."},
features:["Attendance recording","Student/user records","Searchable history","Dashboard","Database storage"],
tech:["PHP","MySQL","HTML","CSS","JavaScript"]
},
security:{
tag:"IoT • SECURITY",
title:"Security Control System",
overview:"An IoT security monitoring and control solution designed to detect events and provide a centralized interface for monitoring security status.",
sections:{purpose:"The purpose is to improve security monitoring by connecting sensors and a digital control interface.",problem:"Manual monitoring can delay detection of security events.",how:"Sensors detect events and send information to a controller. The system can display status information and provide control actions through an interface.",users:"Security personnel, administrators and authorized users.",result:"A more organized approach to monitoring security events and system status."},
features:["Event detection","Security status monitoring","Control interface","Real-time feedback"],
tech:["ESP32","IoT","Sensors","Web Dashboard"]
},
temperature:{
tag:"IoT MONITORING",
title:"Temperature Monitoring System",
overview:"A sensor-based IoT system that measures temperature and presents readings through a digital monitoring interface.",
sections:{purpose:"The purpose is to monitor temperature continuously and make readings easy to view.",problem:"Checking temperature manually can be inconvenient and does not provide continuous records.",how:"A temperature sensor connected to an ESP32 collects readings. Data can be sent to a PHP/MySQL backend and displayed on a dashboard.",users:"Technicians, administrators and anyone responsible for monitoring temperature.",result:"Continuous digital temperature monitoring with stored readings."},
features:["Temperature sensing","Continuous readings","Dashboard visualization","Historical monitoring"],
tech:["ESP32","DHT11","PHP","MySQL","JavaScript"]
},
portfolio:{
tag:"WEB DESIGN",
title:"Personal Portfolio Website",
overview:"A responsive personal website created to present professional information, technical skills and projects.",
sections:{purpose:"The purpose is to provide one place where visitors can learn about my skills, projects and contact information.",problem:"Information about different projects can be difficult to present professionally without a central website.",how:"HTML structures the content, CSS creates the responsive design, and JavaScript provides interactive project-overview popups.",users:"Recruiters, teachers, clients, classmates and other visitors.",result:"A modern responsive website that presents projects and technical skills clearly."},
features:["Responsive design","Interactive project overview","Skills section","Project showcase","Contact section"],
tech:["HTML5","CSS3","JavaScript"]
}
};

const modal=document.querySelector("#modal");
const tag=document.querySelector("#tag"), title=document.querySelector("#title"), overview=document.querySelector("#overview");
const close=document.querySelector("#close");

document.querySelectorAll("article").forEach(card=>{
 card.onclick=()=>{
  const p=data[card.dataset.p];
  tag.textContent=p.tag;
  title.textContent=p.title;
  overview.textContent=p.overview;
  const s=p.sections;
  document.querySelector("#details").innerHTML=`
   <div class="detail"><h3>🎯 Project Purpose</h3><p>${s.purpose}</p></div>
   <div class="detail"><h3>⚠ Problem / Challenge</h3><p>${s.problem}</p></div>
   <div class="detail"><h3>⚙ How the Project Works</h3><p>${s.how}</p></div>
   <div class="detail"><h3>👥 Target Users</h3><p>${s.users}</p></div>
   <div class="detail"><h3>✅ Expected Result</h3><p>${s.result}</p></div>
   <div class="detail"><h3>⭐ Key Features</h3><ul>${p.features.map(x=>`<li>${x}</li>`).join("")}</ul></div>
   <div class="detail"><h3>💻 Technologies Used</h3><div class="tech">${p.tech.map(x=>`<span>${x}</span>`).join("")}</div></div>`;
  modal.classList.add("show");
  document.body.style.overflow="hidden";
 };
});
function hide(){modal.classList.remove("show");document.body.style.overflow=""}
close.onclick=hide;
modal.onclick=e=>{if(e.target===modal)hide()};
document.onkeydown=e=>{if(e.key==="Escape")hide()};