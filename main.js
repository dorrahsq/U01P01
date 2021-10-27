let courses = JSON.parse(localStorage.getItem("courses")) || [
  {
    name: "JavaScript",
    ImgUrl:
      "https://i.pinimg.com/564x/3b/37/97/3b3797ea392f179cf7bdbc1f6249ac32.jpg",
    describe:
      "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites.",
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
    videoFile: "javascript.mp4",
    inFav: false,
  },
  {
    name: "Python",
    ImgUrl: "q.jpg",
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
    videoFile: "python.mp4",
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
    videoFile: "IMG_2332.mp4",
    inFav: false,
  },
  {
    name: "PHP",
    ImgUrl: "Elephant Chalkboard Wall Decal - Walmart_com.jpg",
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
    videoFile: "php.mp4",
    inFav: false,
  },
  {
    name: "C++",
    ImgUrl: "a3d6b940-1ec8-4613-b7f1-251f99589a56.jpg",
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
    videoFile: "FullSizeRender4.mp4",
    inFav: false,
  },
];

let mySearchUndex = null;
//open each card function
const VeiwCard = (i) => {
  $("main").hide();
  $("#favoriteDiv").hide();
  // $(".serchArea").hide();
  $(".itemDiscribe").show();
  $(".itemDiscribe").html(""); ///////////////////////////////////////////////////////////////////////
  const courseincludes = courses[i].courseincludes;
  $(".itemDiscribe").append(`
    <div class="describeItem "> 
        <h4> ${courses[i].name} <p class="desPrg">  ${courses[i].describe}  </br> ${courses[i].price} </p> </h4><p class="itemP"> <button class="buyBtn">buy now</button> </p>  <div class="divForIncludes"><ul id='courseincludes'><i id="archiveIcon" class="far fa-file-archive"></i>This course includes: </ul> </div> <span id="PreviewThisCourse"> <i class="fab fa-youtube"></i> Preview this course: </span> <div class="videoDiv">
        <video controls class="videoInsideDec"> <source src="${courses[i].videoFile}" type="video/mp4"> </video>  </div> </div> <video id="videoBG" autoplay muted loop>  <source src="intellisense.mp4" type="video/mp4"></video> `);
  courseincludes.forEach((item, i) => {
    $("#courseincludes").append(`<li class="includesLi">${item}</li>`);
  });
  console.log(courseincludes);
};
//renderhome
let favoriteArray = [];
let startPag = 3;
let courses2 = courses.slice(0, startPag);
const renderCards = () => {
  $(".appendItemHere").html("");
  if (startPag >= courses.length) {
    $("#showMoreBtn").hide();
  }
  courses2.forEach((element, i) => {
    if (i % 2 === 0) {
      console.log(i);
      $(".appendItemHere")
        .append(`<div class="itemDivv">  <div class="item1"></div>  <div class="item1backgr"></div> <div class="imghere">
    <img class="image" id="goToItem${i}" src='${element.ImgUrl}' alt=""> </div> <div class="descc"> <h3 class"hItem" id="h1-${i}">${element.name}</h3> <p class="allpr">${element.describe}</p> <p class="iconPr" id="icon-${i}"> <i class="far fa-heart"></i> </p> </div> </div>`);
    } else {
      console.log(i);
      $(".appendItemHere").append(`<div class="itemDivv2">
    <div class="item2"></div> <div class="item1backgr2"></div> <div class="imghere2">  <img  class="image" id="goToItem${i}" src='${element.ImgUrl}' alt=""> </div>  <div class="descc2">  <h3 class"hItem" id="h1-${i}">${element.name}</h3> <p class="allpr">${element.describe}</p> <p class="iconPr" id="icon-${i}"> <i class="far fa-heart"></i> </p> </div>  </div>`);
    }
    if (element.inFav === true) {
      $("#icon-" + i).html(
        `<p id="icon-${i}"> <i class="fas fa-heart"></i> </p>`
      );
    }
    $("#goToItem" + i).click(() => {
      VeiwCard(i);
    });
    //fav icon click
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
  $(".aboutUsDiv0").hide();
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
    );
  } else {
    favoriteArray.forEach((element, i) => {
      $("#favoriteDiv").append(`<ul class="favoriteUl">
    <li> <img class="allHomeImg" src="${element.ImgUrl}" alt="">
    <span id="name${i}" class="favoritespan">${element.name}</span> 
    <p class="favoritePr"> ${element.describe} </p>
    
    </li> </ul>
    `);

      /////click on name to show the item
      $("#name" + i).click(() => {
        VeiwCard(i);
      });
    });
  }
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
///aboutUs
const showAboutUs = () => {
  $("main").hide();
  $("#favoriteDiv").hide();
  $(".aboutUsDiv0").show();
  $(".aboutUsDiv0").html("");
  $(".aboutUsDiv0").append(
    `<div class="aboutUsimgDiv" > <img class="aboutUsImg" src="https://images.pexels.com/photos/4974913/pexels-photo-4974913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">  </div><h1 class="aboutis">ABOUT US </h1> <p> At CODER , we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow.  <p/> `
  );
};

$("#aboutUsId").click(showAboutUs);
/////// showMoreBtn

$("#showMoreBtn").click(() => {
  startPag += 3;
  courses2 = courses.slice(0, startPag);
  console.log(courses2);

  renderCards();
});

//search bar
const filtercourses = () => {
  let filterarray = [];
  $("main").hide();
  $(".serchArea").show();
  $("#favoriteDiv").hide();
  let mesage = $("#searchBar").val().toLowerCase();
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].name.toLowerCase().includes(mesage)) {
      mySearchUndex = i;
      filterarray.push(courses[i]);
    }
  }
  $("#searchBar").val("");

  if (filterarray.length === 0) {
    $(".serchArea").html("");
    $(".serchArea").append(
      '<div class="availablediv">This course isn`t available </br>  <a href="index.html"><button> see available courses</button> </a>  </div>'
    );
  } else
    filterarray.forEach((element, i) => {
      $(".serchArea").html("");
      $(".serchArea")
        .append(`<div class="itemDivv">  <div class="item1"></div>  <div class="item1backgr"></div> <div class="imghere">
    <img class="image" id="goToItem-${i}" src='${element.ImgUrl}' alt=""> </div> <div class="descc"> <h3 class"hItem" id="h1-${i}">${element.name}</h3> <p class="allpr">${element.describe}</p> <p class="iconPr" id="icon-${i}"></p> </div> </div> </br> </br>`);
      $("#goToItem-" + i).click(() => {
        console.log(i);
        $(".serchArea").hide();
        $(".itemDiscribe").show();
        VeiwCard(mySearchUndex);
      });
    });
};


$("#searchBar").change(filtercourses);
