var lessons = [
    {
      name: "HTML",
      image : "./img/html.jpg",
      link : "https://lms.clarusway.com/course/view.php?id=3"
    },
    {
      name: "CSS",
      image : "./img/css.jpeg",
      link : "https://lms.clarusway.com/course/view.php?id=6"
    },
    {
      name: "JS",
      image : "./img/js.jpg",
      link : "https://lms.clarusway.com/course/view.php?id=18"
    },
    {
      name: "REACT",
      image : "./img/react.jpg",
      link : "https://lms.clarusway.com/course/view.php?id=49"
    },
    {
      name: "REACT NATIVE",
      image : "./img/react-native.jpg",
      link : "https://lms.clarusway.com/course/view.php?id=54"
    },
    {
      name: "DJANGO",
      image : "./img/djengo.jpg",
      link : "https://lms.clarusway.com/course/view.php?id=53"
    }
]


var index=0;

var selectedIndex=lessons.length-1

const title=document.querySelector(".lesson-title");
const image=document.querySelector(".lesson-image");
const link=document.querySelector(".lesson-link");
const leftButton=document.querySelector(".button-left");
const rightButton=document.querySelector(".button-right");

leftButton.addEventListener("click",function(){
    index--;

    if(index<0){
      index=selectedIndex
    }
    showSlide(index)
})
rightButton.addEventListener("click",function(){
    index++;

    showSlide(index%selectedIndex)
})



function showSlide(index){
    image.setAttribute("src",lessons[index].image);
    title.innerHTML=lessons[index].name;
    link.setAttribute("href",lessons[index].link)


}