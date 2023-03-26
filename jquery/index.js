// for(var i=0 ; i<5 ;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color ="yellow";
//     })
// }
$("button").click(function(){
    $("h1").css("color","yellow");
    
});

$("body").keypress(function(event){
    $("h1").text(event.key);
});
