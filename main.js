// let ul = document.querySelector(".secondPageUl");

let courses = [
  {
    name: "Java Script",
    ImgUrl:
      "https://i.pinimg.com/564x/3b/37/97/3b3797ea392f179cf7bdbc1f6249ac32.jpg",
    describe:
      "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one.",
    extraImg: [, , , ,],
    price: "149$"
  },
  {
    name: "Python",
    ImgUrl:
      "https://i.pinimg.com/564x/4f/34/5e/4f345e3e292dc0624fd407bfa8675d09.jpg",
    describe:
      "This course is designed to teach you the foundations in order to write simple programs in Python using the most common structures",
      price: "99$"
    },
  {
    name: "Java",
    ImgUrl:
      "https://i.pinimg.com/564x/e5/9a/52/e59a522e5010613ae986ede14b8916a3.jpg",
    describe:
      "Java is one of the most in-demand programming languages today. This course is designed to provide the basic skills and knowledge on Java.",
      price: "249$"
    },
  {
    name: "PHP",
    ImgUrl:
      "https://i.pinimg.com/564x/1f/36/53/1f3653a8f829b6bfabeed50c9b83cabd.jpg",
    describe: `learn everything you need to become a professional PHP developer with practical exercises & projects.`,
    price: "89$"
  },
  {
    name: "C++",
    ImgUrl:
      "https://cdn-icons-png.flaticon.com/512/74/74897.png",
    describe: `Learn C++, a high-performance programming language used in the world's most exciting engineering jobs -- from self-driving cars and robotics, to web browsers, media platforms, servers, and even video games.`,
    price: "129$"
  },
];

const VeiwCard = (i) => {
  $("main").hide();
  $(".itemDiscribe").show();
  $(".itemDiscribe").append(`
    <div class="describeItem "> 
        <h4> ${courses[i].name} <p class="desPrg">  ${courses[i].describe}  </br> ${courses[i].price} </p> </h4>
         <p class="itemP"> <button class="buyBtn">buy now</button>
         </p>
      
         </div>



         
         <video id="videoBG" autoplay muted loop> 
         <source src="intellisense.mp4" type="video/mp4"></video>
         
         `
         );
};

{/* <div class="vidDiv">
         <video autoplay muted loop id="myVideo">
         <source src="intellisense.mp4" type="video/mp4">
         Your browser does not support HTML5 video.
         </video> </div> */}




/* <div class="itemDiscribe">

<div class="imgDiv"> <img src="https://i.pinimg.com/564x/1b/56/80/1b5680cf4024c4e34cd052dddf1c83a7.jpg" alt=""></div>
<div class="describeItem"> 
    <h4> JavaScript</h4>
     <p class="itemP"> JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.</p>
     </div>

    </div> */

let favoriteArray = [];

const renderCards = () => {
  $(".cards").innerHTML = "";

  if (JSON.parse(localStorage.getItem("favoriteArray"))?.length) {
    favoriteArray = [...JSON.parse(localStorage.getItem("favoriteArray"))];
  }
  ////   we start here
  courses.forEach((element, i) => {
    $(".cards").append(`<div class="cardii" id = "card+${i}">
    <img id="goToItemImg-${i}" src='${element.ImgUrl}'  />
    <h3 id="h1-${i}"> ${element.name} </h3>
    <p id="icon-${i}"> <i class="far fa-heart"></i> </p>
    </div>`);

    if (
      JSON.parse(localStorage.getItem("favoriteArray")).filter((item) => {
        return item.name === element.name;
      }).length !== 0
    ) {
      $("#icon-" + i).html(
        `<p id="icon-${i}"> <i class="fas fa-heart"></i> </p>`
      );
    }
    console.log(
      JSON.parse(localStorage.getItem("favoriteArray")).filter((item) => {
        return item.name === element.name;
      })
    );

    $("#goToItemImg-" + i).click(() => {
      VeiwCard(i);
    });
    //اذا سويت كليلك يتغير الايكون واسوي بوش للفيفوريت اري
    $("#icon-" + i).click(() => {
      if (!favoriteArray.find((elm) => elm.name === element.name)) {
        $("#icon-" + i).html(` <i class="fas fa-heart"></i>`);
        favoriteArray.push(element);
        localStorage.setItem("favoriteArray", JSON.stringify(favoriteArray));
      } else {
        $("#icon-" + i).html(`<i class="far fa-heart"></i>`);
        const index = favoriteArray.indexOf(element);
        console.log(index);
        favoriteArray.splice(index, 1);
        localStorage.setItem("favoriteArray", JSON.stringify(favoriteArray));
      }
    });
  });
};
renderCards();

// const renderFavorite = () =>{
//     $("#favoriteDiv").innerHTML("");
//     favoriteArray.forEach((element,i) => {
//     $("#favoriteDiv").append(`<ul class="favoriteUl">
//     <li>  <img src="${element.ImgUrl}" alt="">
//     <span class="favoritespan">${element.name}</span>
//     </li>
//     ` )
// });}

// renderFavorite();

$("#favoriteclick").click(() => {
  $("main").hide();
  $(".itemDiscribe").hide();
  $("#favoriteDiv").show();

  if (favoriteArray.length === 0) {
    $("#favoriteDiv").append(
      `<span class="emptyWishlist"> Your favorite list is empty <i class="far fa-sad-tear"></i></span>`
    );
  } else {
    favoriteArray.forEach((element, i) => {
      $("#favoriteDiv").append(`<ul class="favoriteUl">
    <li> <img class="allHomeImg" src="${element.ImgUrl}" alt="">
    <span class="favoritespan">${element.name}</span> 
    <p class="favoritePr"> ${element.describe} </p>
    </li> </ul>
    `);
    });
  }

  // renderFavorite();
});

// favoriteArray.forEach(element => {
//     localStorage.setItem("fav", JSON.stringify(favoriteArray[element]));
// });

/* <ul class="favoriteUl">
<li>  <img src="" alt="">
    <span class="favoritespan"> java scipt</span> 
    
</li>
<li>
    <img src="" alt="">
   <span class="favoritespan"> python</span> 
</li>
</ul>  */

let navCourses = document.querySelector(".courses2");

navCourses.scrollIntoView({
  behavior: "smooth",
  block: "end",
  inline: "nearest",
});
