// let ul = document.querySelector(".secondPageUl");

let courses = [
    {
      name: "Java Script",
      ImgUrl:
        "https://i.pinimg.com/564x/3b/37/97/3b3797ea392f179cf7bdbc1f6249ac32.jpg",
      describe:
        "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
    },
    {
      name: "Python",
      ImgUrl:
        "https://i.pinimg.com/564x/4f/34/5e/4f345e3e292dc0624fd407bfa8675d09.jpg",
      describe:
        "Python is a general-purpose, versatile, and powerful programming language. It’s a great first language because it’s concise and easy to read. Whatever you want to do, Python can do it. From web development to machine learning to data science, Python is the language for you.",
    },
    {
      name: "Java",
      ImgUrl:
        "https://i.pinimg.com/564x/e5/9a/52/e59a522e5010613ae986ede14b8916a3.jpg",
      describe:
        "Java™ is the world's leading programming language and platform. AdoptOpenJDK uses infrastructure, build and test scripts to produce prebuilt binaries from OpenJDK™ class libraries and a choice of either OpenJDK or the Eclipse OpenJ9 VM.",
    },
    {
      name: "PHP",
      ImgUrl:
        "https://i.pinimg.com/564x/1f/36/53/1f3653a8f829b6bfabeed50c9b83cabd.jpg",
      describe: `PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP.`,
    },
  ];
  
  const VeiwCard = (i) => {
    $("main").hide();
    $(".itemDiscribe").show();
    $(".itemDiscribe")
      .append(`<div id="imgDiv${i}"> <img src= ${courses[i].ImgUrl} alt=""></div>
      <div class="describeItem"> 
          <h4> ${courses[i].name} </h4>
           <p class="itemP"> ${courses[i].describe} </p>
           </div>`);
  };
  
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
  
    if(JSON.parse(localStorage.getItem("favoriteArray"))?.length) {
      favoriteArray = [...JSON.parse(localStorage.getItem("favoriteArray"))]
    }
  ////   we start here
    courses.forEach((element, i) => {
       if(favoriteArray.find(elm => elm.name === element.name)) {
        $(".cards").append(`<div class="cardii" id = "card+${i}">
        <img src='${element.ImgUrl}'  />
        <h3 id="h1-${i}"> ${element.name} </h3>
        <p id="icon-${i}"> <i class="fas fa-heart"></i> </p>
        </div>`);
       } else {
        $(".cards").append(`<div class="cardii" id = "card+${i}">
        <img src='${element.ImgUrl}'  />
        <h3 id="h1-${i}"> ${element.name} </h3>
        <p id="icon-${i}"> <i class="far fa-heart"></i> </p>
        </div>`);
       }
     
      $("#h1-" + i).click(() => {
        VeiwCard(i);
      });
  //اذا سويت كليلك يتغير الايكون واسوي بوش للفيفوريت اري
      $("#icon-" + i).click(() => {
        if (!favoriteArray.find(elm => elm.name === element.name)) {
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
    
    if(favoriteArray.length === 0 )  {
        $("#favoriteDiv").append(`<span class="emptyWishlist"> Your favorite list is empty <i class="far fa-sad-tear"></i></span>`);
    }
    else{
    favoriteArray.forEach((element, i) => {
      $("#favoriteDiv").append(`<ul class="favoriteUl">
      <li> <img src="${element.ImgUrl}" alt="">
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
  