const imageSets = [
  {
    id:1,  
    name: 'Andrew Smith',
    title: 'Innocence',
    images: [
      'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
      'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
    ],
  },
  {
    id:2,
    name: 'Jane Doe',
    title: 'Nature Adventures',
    images: [
      'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
    ],
  },
  {
    id:3,
    name: 'Irna Tawsen',
    title: 'Faces of the World',
    images: [
      'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ],
  },
  {
    id:4,
    name: 'Mark Dale',
    title: 'Wild Animals',
    images: [
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
      'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
      'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ]
  }

];

let currentId;
let currentImage;

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  currentId = urlParams.get("id");

  currentImage = imageSets.filter((item) => item.id == currentId)[0];  

  console.log(currentImage); 


  //what do I put here to iterate thorugh img?
  const imageSet = `<div>
    <h1 class="labels">${currentImage.title}</h1>
    <h2 class="labels">${currentImage.name}</h2>
    <img src="${currentImage.images}" class="img-sequence"> 
  </div>`
  
  const imageContainer = document.querySelector("#dynamicImgContainer");
  imageContainer.innerHTML = imageSet;
}



  // ITERATE THRU GALLERY
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let counter = 0;

  const upOne = () =>{
    const imageSeq = document.querySelector('.img-sequence'); 
    if (counter >= currentImage.images.length - 1){
      counter = counter; 
    } else {
      counter++; 
      imageSeq.src = currentImage.images[counter];
    } 
    document.querySelector('.current-image-number').innerText = `${counter + 1} of ${currentImage.images.length}`;
  }; 

  const dwnOne = () =>{
    const imageSeq = document.querySelector('.img-sequence');
    if (counter <= 0){
      counter = counter; 
    } else {
      counter--; 
      imageSeq.src = currentImage.images[counter];
    } 
    document.querySelector('.current-image-number').innerText = `${counter + 1} of ${currentImage.images.length}`;
  }; 

  prevBtn.addEventListener("click", dwnOne);
  nextBtn.addEventListener("click", upOne); 



  // const nextImg = (imageSets) => { 
  //   for (let i=0; i < imageSets.images.length; i++){
  //     const displayImg = document.querySelector("img");

  //     displayImg.setAttribute("src", `${imageSets.images[i]}`);
  //   }
  // }

  // nextBtn.addEventListener("click", nextImg);




//HAMBURGER MENU
const menuIcon = document.querySelector("#menu-icon");
const openMenu = () => {
  const btnContainer = document.querySelector(".nav-btns");
  btnContainer.classList.toggle("mobile-menu");
}
menuIcon.onclick = openMenu;


//DARK/LIGHT MODE TOGGLE
const themeButton = document.querySelector("#drk");
const toggleTheme = () => {
  const body = document.querySelector("body");
  const labels = document.querySelectorAll(".sub-text, .see-more");
  const heading = document.querySelector("h1");

  if(body.style.backgroundColor === "var(--background-color)"){
    body.style.backgroundColor = "white";
    themeButton.innerHTML = "DARK MODE";
    heading.style.color = "black";
    for(let i = 0; i < labels.length; i++){
      labels[i].style.color = "black";
      }
  } else {
    body.style.backgroundColor = "var(--background-color)";
    themeButton.innerHTML = "LIGHT MODE";
    heading.style.color = "white";
    for(let i = 0; i < labels.length; i++){
    labels[i].style.color = "white";
    }
  }
}
themeButton.onclick = toggleTheme;

//left off at jsevents2
// each see more button is taking it to the same details image gallery
//how do i fix this?