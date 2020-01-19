   window.onload = function(){
    if($(window).width()<975){
$(".header__justify-content-end").css("justify-content", "start");
    }
    else if($(window).width()>=975){

        $(".header__justify-content-end").css("justify-content", "end");
}
}

$(window).resize(function(){
    if($(this).width()<=975){
        $(".header__justify-content-end").css("justify-content", "start");
    }
    else if($(this).width()>975){
        $(".header__justify-content-end").css("justify-content", "end");
    }

    
})



