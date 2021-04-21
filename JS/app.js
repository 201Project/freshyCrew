'use strict';
let locations = [];

let result = document.getElementById('result');


const gymName = ['Gaia\'s Cocoon Spa and gym',' Gold\'s Gym','Power-hut The Experience','Trainers Gym','Fitness First Abdoun','PLANET Gym & Fitness','BXR','Z-energy','Fairmont Banff Springs','North End Fitness & Training','Embody fitness','24-Hour Fitness','Planet Fitness','Anytime Fitness','Equinox','LAFitness','Crunch Fitness','Orangetheory Fitness','Platinum Gym','PureGym','I_gym_ladies','Total Fitness','Curves','MOTION FITNESS-CENTER','STRONG LADIES GYM','IN SHAPE LADIES FITNESS CLUB','Yoga with Adriene','Sweat with SELF','Calorie-Crushing-Workouts','Blogilates'];

const gymLocation = ['Amman','Amman','Amman','Amman','Amman','Amman','Amman','Amman','Amman','Amman','Irbid','Irbid','Irbid','Irbid','Irbid','Zarqa','Zarqa','Zarqa','Zarqa','Zarqa','Zarqa',' Zarqa','Zarqa','Zarqa','Zarqa','Online','Online','Online','Online','Online'];


const gymDesq =['Resistance training equipment including,,,Fixed weight machines, dumbbells, barbells and weight plates.Also clean toilets, changing and shower rooms and exercise mats.','technically a national franchise—there are over 700 locations, but the highest concentration of Gold\'s Gym franchises is in California. It makes sense, as the original Gold\'s Gym.',' From low cost flexible memberships and 24 hour opening times, to quality gym equipment and classes included, there are loads of reasons why PureGym is the favourite gym for youth.','Trainers is where experts In fitness techniques,personal training, recreation and healthy lifestyle come together in one gym',' Gym & Fitness is an ultra-modern unisex fitness center with the best amenities and training equipment. We offer a wide range of classes and exercising programs.',' Your favourite gym experience just got even better, now you can share the love of fitness with your BFF or loved one. When you join, they join too!!!!Please note that for this offer provides one membership card which is shared between the Primary Member and the nominated plus one. .',' customers are at the centre of what we do and why we do it! We have a team of knowledgeable sales representatives who are ready to assist you with your gym equipment needs. Our crew will be able to answer your questions from honest product information to the best way to integrate a piece of equipment into your workout routine.',' Exercise studioAll Be Well (fitness programming on guest room television)Scheduled group fitness & yoga classesFree weights & strength training machinesTreadmills.',' TRX and so much moreWe offer a variety of fitness and yoga classes. One-on-one training (including yoga) with our certified personal trainers is also available. For information on Fitness Classes and Yoga offered.',' Don\'t settle for good enough. Get the most out of every workout and take on real results today with our Personal Training program at North End Fitness & Training. We\'re helping men and women of all abilities enjoy customized fitness training like never before. .',' We know something\'s motivating you to transform your body.It\'s burning away inside you, just like it does with all our clients.',' 24-Hour Fitness has a little bit of everything and a lot of the things that most gym-goers love: It\'s a 24-hour facility, has ample floor space and equipment, offers group fitness classes and personal training.',' On the end of the gym spectrum opposite Equinox, Planet Fitness is known for its inclusivity, simplicity, and small price tag , members can access virtually all types of cardio machines.',' Anytime Fitness offers a unique amenity that most commercial gyms—even 24-hour ones—don\'t Your very own key FOB to enter the gym at any time of day or night,without needing a gym employee there to let you in. This unique travel-friendly feature (plus the more than 4,700 franchises) ',' If you enjoy the finer things in life, you\'ll probably feel very at home in one of the 100-plus Equinox locations around Irbid Equinox is known for its high-end amenities, high-quality equipment, modern interior design, and sleek branding — and its eye-widening price tag for a monthly membership',' another commercial gym that caters to bodybuilders and anyone looking to perform hypertrophy-focused (muscle-building) workouts. The floor layout typically includes a vast selection of weight machines that allow you to hit any muscle you can think of from any angle. ',' Like all commercial gyms, the offerings at Crunch Fitness vary by location. However, Crunch Fitness has earned itself a good reputation for having a large variety of fun, effective group workout classes.',' Your favourite gym experience just got even better, now you can share the love of fitness with your BFF or loved one. When you join, they join too',' The largest sports club in the north of the Hashemite Kingdom of Jordan Irbid" ..For men and women .. In The City Centre',' you\'ll find everything you need for a safe and great workout – you can train with confidence at the UK\'s favourite gym. Find out more about our TrainSafe Commitment and everything you need to know about reopening our gym',' A women\'s gym with Irpic and Zumba classes and equipment under the supervision of Arab coaches certified by Ribs and Liz Mills',' Created specifically for women, Curves offers a complete fitness and nutrition solution. The Curves 30 minute workout exercises every major muscle group and burns up to 500 calories through a proven program of strength training, cardio and stretching. In addition, club promotions and events encourage women to support charitable causes.',' Tucked away within Umm Suqeim, Motion Fitness Center is an exclusive gym for ladies . It offers pilates, reformer, barre and cardio classes in the city that you can enrol in, to sculpt and tone your body. MFT has experienced trainers who help you increase your muscle endurance and build stamina',' As the name indicates, Strong Ladies Gym Zarqaa trains women to stay strong, fit and healthy. It offers them a positive environment where they can take care of their physical and psychological health. Founded by Maryam Al Mur Bin Huraiz Al Falasi, who is a fitness enthusiast herself.',' Established in 2009, In Shape Fitness Club is one of the most comfortable ladies gyms in Dubai where you can work out with ease. You can get personal as well as group training at this club. If you\'re going for personal training, the gym will create a comprehensive training schedule just for you.',' Yoga with Adriene Getting back to the true you. It can be that simple. Yoga offers up a way for us to see a world that is working for you instead of against you. Yoga reminds me that everything is connected so we must live, act, breathe with awareness. The process is the candy. Enjoy!',' If you\'re looking for some serious “fitspiration,” the “Sweat with SELF” channel is where you should go. From the backdrop of their classes (the NYC skyline is often featured), to the upbeat and spandex-clad instructors, these classes give the most realistic vibe of an in-person group fitness class',' Enjoy these customized calorie-crushing workouts. And remember, the faster you move, the more calories you\'ll burn. Online only',' Our resident yoga teacher (who is also one of our editors) swears by Blogilates for arms and abs workouts. Most of these workouts are about 10 minutes or less, and based around Pilates workouts to help strengthen and tone muscle. The instructor.',' No need to waste your time with moves that only target one muscle group. Try these insanely effective three-in-one toning exercises instead. Build lean muscles, sculpt your abs and get shapely glutes and thighs with "Triple Tone.',] ;


const gymImg = ['./img/gymimgs/1.jpg', './img/gymimgs/2.jpg','./img/gymimgs/3.jpg', './img/gymimgs/4.jpg', './img/gymimgs/5.jpg', './img/gymimgs/31.jpg', './img/gymimgs/6.jpg', './img/gymimgs/7.jpg','./img/gymimgs/8.jpg', './img/gymimgs/9.jpg','./img/gymimgs/10.jpg', './img/gymimgs/11.jpg','./img/gymimgs/12.jpg', './img/gymimgs/13.jpg','./img/gymimgs/14.jpg', './img/gymimgs/15.jpg','./img/gymimgs/16.jpg', './img/gymimgs/17.jpg','./img/gymimgs/18.jpg', './img/gymimgs/19.jpg', './img/gymimgs/20.jpg', './img/10.jpg', './img/gymimgs/21.jpg', './img/gymimgs/22.jpg','./img/gymimgs/23.jpg', './img/gymimgs/24.jpg','./img/gymimgs/25.jpg', './img/gymimgs/26.jpg','./img/gymimgs/27.jpg', './img/gymimgs/28.jpg','./img/gymimgs/29.jpg'];


const gymCoast = ['76 JoD/month', '50 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', '76 JoD/month', ' 23$ /Cours',' 21$ /Cours', '30$ /Cours', '22$ /Cours', '25$ /Cours','20$ /Cours',];


const gymGender = ['Male', 'Female', 'Both', 'Both', 'Male', 'Female', 'Both', 'Both','Both','Female','Male', 'Female','Both', 'Both', 'Male', 'Female','Both','Both','Female', 'Female','Both', 'Both', 'Male', 'Female','Both', 'Both','Both','Both', 'Both','Both'];

function GymCategories(name, cities, description, image, price, gender) {
  this.gymName = name;
  this.gymLocation = cities;
  this.gymDesq = description;
  this.gymImg = image;
  this.gymCoast = price;
  this.gymGender = gender;

  locations.push(this);
}
for (let i = 0; i < gymLocation.length; i++) {
new GymCategories(gymName[i], gymLocation[i], gymDesq[i], gymImg[i], gymCoast[i], gymGender[i]);

}
 let clickedItem=[];
if (localStorage.getItem('gyms') !== null) {
   let parsedStorage = JSON.parse(localStorage.getItem('gyms'));
  clickedItem = parsedStorage;
}
GymCategories.prototype.inject =function(gym){


    let locationContainer = document.createElement('div');
    locationContainer.className = 'location';
    result.appendChild(locationContainer);

    let imgContainer = document.createElement("div");
    imgContainer.className = "divLeft";
    locationContainer.appendChild(imgContainer);

    let locationImage = document.createElement("img");
    imgContainer.appendChild(locationImage);
    locationImage.src = gym.gymImg;

    let textContainer = document.createElement("div");
    textContainer.className = "divRight";
    locationContainer.appendChild(textContainer);

    let heading = document.createElement("h2");
    textContainer.appendChild(heading);
    heading.textContent = gym.gymName;

    let description = document.createElement("p");
    description.className = "description";
    textContainer.appendChild(description);
    description.textContent =gym.gymDesq;

    let price = document.createElement("p");
    textContainer.appendChild(price);
    price.textContent = 'Price: ' + gym.gymCoast;

    let reserveBtn = document.createElement("button");
    textContainer.appendChild(reserveBtn);
    reserveBtn.id='booknow';
    // console.log(reserveBtn);
    reserveBtn.textContent = 'Book Now!'; //add link in array to book
// console.log(this);

    reserveBtn.addEventListener('click', goToCheckout);

    function goToCheckout(event) {
      event.preventDefault();
      let count = 0;
     console.log(gym);

            if(!(clickedItem.includes(gym)))
            {
              alert('added!');
              clickedItem.push(gym);
              let stringOfLocations = JSON.stringify(clickedItem);
              localStorage.setItem('gyms', stringOfLocations);
              if(localStorage.getItem('cartCounter')){
                let paresedNumber=parseInt(localStorage.getItem('cartCounter'));
                localStorage.setItem('cartCounter',paresedNumber+1);
              }
              
              else
              {
                count++;
                localStorage.setItem('cartCounter',count);
              }
              let counter=document.getElementById('cart');
              counter.textContent=localStorage.getItem('cartCounter');
            }
            else{
              alert('already there');
            }
          }

}
for(let i=0;i<locations.length;i++){
  GymCategories.prototype.inject(locations[i]);
}



let OnlineCourse;

let form = document.getElementById("customerData");


form.addEventListener('submit', handleCustomerSubmit);

function handleCustomerSubmit(event) {
  event.preventDefault();

  let place = event.target.categouryPlace.value;

  let genderCategouries = event.target.categouryGender.value;

  if (event.target.Online.checked) {
    OnlineCourse = 'Online';
  }
  else {
    OnlineCourse = '';
  }





    result.innerHTML="";

for (let i = 0; i < locations.length; i++) {
  if (locations[i].gymLocation == OnlineCourse) {

    GymCategories.prototype.inject(locations[i]);

    console.log('first',GymCategories);


    }  if ((locations[i].gymGender == genderCategouries) && (locations[i].gymLocation == place)) {
      GymCategories.prototype.inject(locations[i]);

      // console.log('secondelse', locations[i]);


    // }else if ((locations[i].gymGender == genderCategouries) && (genderCategouries !== 'NoCategoury')){

    //   console.log('third', locations[i]);

    // } else if  ((locations[i].gymLocation == place) && (place !== 'NoPlaceCategoury')){
    //   console.log('fourth', locations[i]);

  }
}

   
}
