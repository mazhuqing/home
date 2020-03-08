
    $(".loremNew").hover(function(){
        $(this).removeClass("red").addClass("pink");
    },function(){
        $(this).removeClass("pink").addClass("red");
    });

    $(function(){
        $('.header').load('header.html');
        // $('#footer').load('foot.html');
    });
