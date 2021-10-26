let courses = JSON.parse(localStorage.getItem("courses")) || [
  {
    name: "JavaScript",
    ImgUrl:
      "https://i.pinimg.com/564x/3b/37/97/3b3797ea392f179cf7bdbc1f6249ac32.jpg",
    describe:
      "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one.",
    extraImg: [, , , ,],
    price: "149$",
    courseincludes: [
      "11.5 hours on-demand video",
      "7 articles",
      "50 downloadable resources",
      "Full lifetime access",
      "Access on mobile and TV",
      "Certificate of completion",
    ],
    videoFile: "javascriot.mov",
    inFav: false,
  },
  {
    name: "Python",
    ImgUrl:
      "https://i.pinimg.com/564x/4f/34/5e/4f345e3e292dc0624fd407bfa8675d09.jpg",
    describe:
      "This course is designed to teach you the foundations in order to write simple programs in Python using the most common structures",
    price: "99$",
    courseincludes: [
      "20.5 hours on-demand video",
      "8 articles",
      "2 downloadable resources",
      "Full lifetime access",
      "Access on mobile and TV",
      "Certificate of completion",
    ],
    videoFile: "Python.mov",
    inFav: false,
  },
  {
    name: "Java",
    ImgUrl:
      "https://i.pinimg.com/564x/e5/9a/52/e59a522e5010613ae986ede14b8916a3.jpg",
    describe:
      "Java is one of the most in-demand programming languages today. This course is designed to provide the basic skills and knowledge on Java.",
    price: "249$",
    courseincludes: [
      "68 hours on-demand video",
      "21 articles",
      "18 downloadable resources",
      "Full lifetime access",
      "Access on mobile and TV",
      "Certificate of completion",
    ],
    videoFile: "",
    inFav: false,
  },
  {
    name: "PHP",
    ImgUrl:
      "https://i.pinimg.com/564x/1f/36/53/1f3653a8f829b6bfabeed50c9b83cabd.jpg",
    describe: `learn everything you need to become a professional PHP developer with practical exercises & projects.`,
    price: "89$",
    courseincludes: [
      "38 hours on-demand video",
      "// 4 articles",
      "23 downloadable resources",
      "Full lifetime access",
      "Access on mobile and TV",
      "Certificate of completion",
    ],
    videoFile: "Php.mov",
    inFav: false,
  },
  {
    name: "C++",
    ImgUrl: "https://cdn-icons-png.flaticon.com/512/74/74897.png",
    describe: `Learn C++, a high-performance programming language used in the world's most exciting engineering jobs -- from self-driving cars and robotics, to web browsers, media platforms, servers, and even video games.`,
    price: "129$",
    courseincludes: [
      "11 hours on-demand video",
      "3 articles",
      "1 downloadable resources",
      "Full lifetime access",
      "Access on mobile and TV",
      "Certificate of completion",
    ],
    videoFile: "",
    inFav: false,
  },
];

const VeiwCard = (i) => {
  $("main").hide();
  $(".itemDiscribe").show();
  const courseincludes = courses[i].courseincludes;
  $(".itemDiscribe").append(`
    <div class="describeItem "> 
        <h4> ${courses[i].name} <p class="desPrg">  ${courses[i].describe}  </br> ${courses[i].price} </p> </h4>
         <p class="itemP"> <button class="buyBtn">buy now</button>
         </p>
   <div class="divForIncludes">
   <ul id='courseincludes'><i id="archiveIcon" class="far fa-file-archive"></i>This course includes: </ul>
   </div>
   <span id="PreviewThisCourse"> <i class="fab fa-youtube"></i> Preview this course: </span>
   <div class="videoDiv"><video class="videoInsideDec" src="${courses[i].videoFile}"  ></video>  </div>
   </div>
         <video id="videoBG" autoplay muted loop> 
         <source src="intellisense.mp4" type="video/mp4"></video>
         `);
  courseincludes.forEach((item, i) => {
    $("#courseincludes").append(`<li class="includesLi">${item}</li>`);
  });

  console.log(courseincludes);
};

let favoriteArray = [];
let startPag = 3;
let courses2 = courses.slice(0, startPag);
const renderCards = () => {
  $(".cards").html("");
  if (startPag >= courses.length) {
    $("#showMoreBtn").hide();
  }
  ////   we start here
  courses2.forEach((element, i) => {
    $(".cards").append(`<div class="cardii" id = "card+${i}">
    <div class="parentDivItem" id="goToItem${i}">
    <img class="image" id="goToItemImg-${i}" src='${element.ImgUrl}'  />
    <h3 class"hItem" id="h1-${i}"> ${element.name} </h3>  </div>
    <p id="icon-${i}"> <i class="far fa-heart"></i> </p>
    </div>`);

    if (element.inFav === true) {
      $("#icon-" + i).html(
        `<p id="icon-${i}"> <i class="fas fa-heart"></i> </p>`
      );
    }

    $("#goToItem" + i).click(() => {
      VeiwCard(i);
    });
    //اذا سويت كليلك يتغير الايكون واسوي بوش للفيفوريت اري
    $("#icon-" + i).click(() => {
      courses[i].inFav = !courses[i].inFav;
      localStorage.setItem("courses", JSON.stringify(courses));
      renderCards();
    });
  });
};
renderCards();
//// fav show

$("#favoriteclick").click(() => {
  $("main").hide();
  $(".itemDiscribe").hide();
  $("#favoriteDiv").show();
  $("#favoriteDiv").html("");
  favoriteArray = courses.filter((item) => {
    return item.inFav;
  });

  $("#favoriteclick").text(`favorite ${favoriteArray.length}`);

  if (favoriteArray.length === 0) {
    $("#favoriteDiv").append(
      `<span class="emptyWishlist"> Your favorite list is empty <i class="far fa-sad-tear"></i></span>
      <button id="goToCourses"> <a href="index.html"> go to courses </a></button> `
    ); //problem in linnnnk
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

/////////////

let navCourses = document.querySelector(".courses2");

navCourses.scrollIntoView({
  behavior: "smooth",
  block: "end",
  inline: "nearest",
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/////// showMoreBtn

$("#showMoreBtn").click(() => {
  startPag += 3;
  courses2 = courses.slice(0, startPag);
  console.log(courses2);

  renderCards();
});
