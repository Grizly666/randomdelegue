// local reviews data
const reviews = [
  {
    id: 1,
    name: "Antoine Marie",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
   
  },
  {
    id: 2,
    name: "Damien Bellec",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
   
  },
  {
    id: 3,
    name: "Maxence Denquin",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
 
  },
  {
    id: 4,
    name: "Maxime Sauvage",
    
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    
  },
  {
    id: 5,
    name: "Simon Libert",
    
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",

  },
  {
    id: 6,
    name: "Sébastien Collbert",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    
  },
  {
    id: 7,
    name: "Florent Merlin",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    
  },
  {
    id: 8,
    name: "Ludovic Truffier",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
   
  },
  {
    id: 9,
    name: "Ludovic Fournier",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    
      
  },
  {
    id: 10,
    name: "Nelson Sanchez",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
   
  },
  {
    id: 11,
    name: "Sébastien Delansay",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
 
  },
  {
    id: 12,
    name: "Maxence Podevin",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
   
  },
  
  
];

const prevBtn = document.getElementsByClassName("prev-btn")[0];
const nextBtn = document.getElementsByClassName("next-btn")[0];
const randomBtn = document.querySelector(".random-btn");

const img = document.getElementById("person-img");
const author = document.getElementById("author");


let currentItem = 0;

function person(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
 
}
//test 

const img2 = document.getElementById("person2-img");
const author2 = document.getElementById("author2");


function person2 (){
    const item = reviews[currentItem];
    img2.src = item.img;
    author2.textContent = item.name;
   
}

//DEFAULT REVIEW DISPLAY WHEN WINDOW LOADS

window.addEventListener("DOMContentLoaded", ()=>{
  person();    
});

window.addEventListener("DOMContentLoaded", ()=>{
    person2();    
  });

//RANDOM PERSON PREVIEW

randomBtn.addEventListener("click", ()=>{
  currentItem = Math.floor(Math.random() * reviews.length);  
  person();  
 
});

randomBtn.addEventListener("click", ()=>{

    
    currentItem = Math.floor(Math.random() * reviews.length) ;  
    person2(); 
    
  });
