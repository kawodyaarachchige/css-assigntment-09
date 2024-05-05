var currentLightIndex =0;
var maxLightCount =5;
var movingSlide = "Right";
var myInterval = null;




function updateContainer() {
    $(".box").removeClass("lig-on");
    $(".box").removeClass("lig-on2");

    $(".box").eq(currentLightIndex).addClass("lig-on");

    if(movingSlide ==="Right"){
        $(".box").eq(currentLightIndex-1).addClass("lig-on2");
        ++currentLightIndex;

        if(currentLightIndex>maxLightCount){
            movingSlide="Left";
            --currentLightIndex;
        }
    } else {
        $(".box").eq(currentLightIndex+1).addClass("lig-on2");
        --currentLightIndex;
        if (currentLightIndex===1){
            movingSlide= "Right";
        }
    }

}
$("#btn").on("click",function(){
    myInterval=setInterval(updateContainer,70);
    $("#audio")[0].play();
})


$("#btn1").on("click",function(){
    clearInterval(myInterval);
    $("#audio")[0].pause();
})






