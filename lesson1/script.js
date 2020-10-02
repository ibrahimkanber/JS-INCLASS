// function countTrue(arr) {
//      let count=0;
//      arr.forEach((item)=>{
//          item===true? count++:count;
//      })
//      return (count)
// }
// countTrue([true,false,false])


// b();



// console.log(a+ "  " +"yukarıs");

// var a=5;
// b();
// function b() {
//     console.log(a +"b fonksiyonu")
   
// }


function b() {
    console.log(myVar+"bden gelen");
}

function a() {
    var myVar=2;
    b();
    console.log(myVar);
    function z(){
        // console.log(myVar+"z den gelen")
        let myVar=5;
        console.log(myVar+"z den gelen")
  
    }
    z();
   
}

var myVar = 1;
a();



