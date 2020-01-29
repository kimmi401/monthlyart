$(function () {
    //var
    var $indicator = $('#main_slider>.slides-pagination>li>a');
    var $slides = $('#main_slider>.slides-container>li');
    var $prev = $('#main_slider>.slides-prev');
    var $next = $('#main_slider>.slides-next');
    var nowIdx = 0;
    
    var intervalKey;


    $('#main_slider').height($(window).height());
    $('.slides-container').height($(window).height());
    $('.slides-container>li').height($(window).height());
    
    
    $.stellar({
        horizontalScrolling: false,
        responsive: true,
    });
    
    $(window).on("load", function () {
        $('.up').trigger("click");
    });



    //자동재생 함수
    function autoPlay() {
        intervalKey = setInterval(function () {
            nextIdx();
            slideMove();
        }, 3000);
        
    }

    //재생정지 함수
    function autoStop() {
        clearInterval(intervalKey);
        autoPlay();
    }
    
     autoPlay();
     

    


    //function
    function slideMove() {
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        $slides.filter('.on').stop().fadeOut(2000).removeClass('on'); //이전 슬라이드 사라짐
        $slides.eq(nowIdx).stop().fadeIn(2000).addClass('on'); //이번에 나타날 슬라이드가 나타남 
    }

    function nextIdx() {
        if (nowIdx < 3) {
            nowIdx++;
        } else {
            nowIdx = 0;
        }
    }



    $indicator.on('click', function (event) {

        event.preventDefault();
        
        autoStop();//재생정지
        
        
        if ($(this).parent().hasClass('on') == false) {
            nowIdx = $indicator.index(this);
            slideMove();
        }
    });//end of indicator event


    $prev.on('click', function () {
        
        autoStop();//재생정지
        if (nowIdx > 0) {
            nowIdx--;
        } else {
            nowIdx = 3;
        }

        slideMove();
    });//end of prev


    $next.on('click', function () {
        
        autoStop();//재생정지
        nextIdx();
        slideMove();
    });//end of next

});

//업서클

$(function(){
   $('.up').on('click',function(){
      $('html,body').animate({
          scrollTop:  0 
      },1000) 
   }); 
});

//포토갤러리

$(function(){
    var $exMnu = $('.edit_snb>li>a');
    var $subMnu = $('.edit_snb>li>.edit_contents');


  //서브메뉴 노출
  $exMnu.on('click',function(evt){
      
    evt.preventDefault();
     $(this).addClass('on').parent().siblings().children('a').removeClass('on');

     $(this).parent().find('.edit_contents').show(); 
    $(this).parent().find('.edit_contents').parent().siblings().find('.edit_contents').hide();
   
  });
    
  
    
});