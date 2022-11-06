$(window).on('load', function () {

    headerSearch();
    menuSearch();
    toggleMenu();
    submenuList();
    gnbSubmenu();
    visualSlide();
    projectSlide();
    aboutTab();
    famliySite();
    youtubeSlide();
})

function headerSearch(){

  $('.btn-search').mouseenter(function(){
		$('.search-box1').addClass('active');
	});
	$('.btn-search').mouseleave(function(){
		$('.search-box1').removeClass('active');
	});
}

function menuSearch(){

  $('.menu-area .btn-search').click(function(e){
    e.preventDefault();
		$('.search-box2').css({'display':'block'})
	});

}

function toggleMenu(){
  
    $('.header .btn-menu').click(function(e){
        e.preventDefault()
        $('.menu-dimmed').addClass('active');
        $('.menu-area').addClass('active');
    })

    $('.menu-area .btn-close').click(function(e){
        e.preventDefault()
        $('.menu-dimmed').removeClass('active');
        $('.menu-area').removeClass('active');
        // $('.sub-menu-list').removeClass('show');
        $('.depth').removeClass('active');
        $('.sub-menu-list').removeClass('show');
        $('.search-box2').css({'display':'none'})
    })
}

function submenuList(){

  $('.depth').click(function(e){
    e.stopPropagation();
    e.preventDefault();

    if ($(this).siblings('.sub-menu-list').css('display')=='none') { 
      $('.depth').removeClass('active');
      $(this).addClass('active');
      $('.sub-menu-list').removeClass('show');
      $(this).siblings('.sub-menu-list').addClass('show');
    } else { 
      $('.sub-menu-list').removeClass('show');
      $('.depth').removeClass('active');
    }
})

}

function gnbSubmenu(){

  $('.gnb-list > li').mouseenter(function(){
		$('.sub-list').removeClass('active');
		$(this).find('.sub-list').addClass('active');
	});
  
  $('.gnb-list').mouseleave(function(){
    $('.sub-list').removeClass('active');
	});

}

function visualSlide(){
    var swiper1 = new Swiper(".sc-visual .swiper", {
        slidesPerView : 'auto',
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".fraction",
          type: "custom",
          renderCustom:function(swiper, current, total){
            return `
              <em class="count num">${current}</em>
              <span class="slash num">/</span>
              <em class="total num">${total}</em>
            `;
          }
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });

      // swiper1.on('slideChange',function(){
      //   auto(); // 슬라이드가 바뀌었을때 다시실행
      // })

      // function auto(){
      //   // $('.gauge span').css('width',0) width값 초기화
      //   $('.gauge span').css('width',0).animate({width:'100%'},2000,function(){
      //     swiper1.slideNext();
      // })
      // }
      // auto();

      const auto = gsap.to('.gauge span',3,{
        ease:'none',
        width:'100%',
        onComplete:function(){//완료되었을때
          gsap.set('.gauge span',{width:0})
          swiper1.slideNext();
        },
        paused:true,
      })

      auto.play();

      swiper1.on('slideChange',function(){
        auto.restart();//재실행
      })
      
      $('.autoplay').click(function(){
        if($(this).hasClass('active')){
          $(this).removeClass('active')
          auto.resume();
        }else{
          auto.pause();
          $(this).addClass('active')
        }//active는 가상으로 만든 클래스 > 스크립트 컨트롤용도로 만듬
      })
}

function projectSlide(){
  var swiper2 = new Swiper(".sc-project .swiper", {
      slidesPerView : 'auto',
      // spaceBetween:40, 
      autoplay: {
          delay:3000,
          disableOnInteraction: false,
      },
      observer: true,
      observeParents: true,
      loop: true,
      navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
        clickable: true,
        draggable : true,
      },
    });
    $('.sc-project .swiper-slide').on('mouseenter', function(e){
      swiper2.autoplay.stop();
    });
    $('.sc-project .swiper-slide').on('mouseleave', function(e){
      swiper2.autoplay.start();
    });   
}

function aboutTab(){

  $('.about-tab li').click(function(e){
    e.preventDefault();

		var tab_id = $(this).attr('data-tab');



		$('.about-tab li').removeClass('current');
		$('.tab-content').removeClass('current');

    console.log(tab_id);

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

}

function famliySite(){

    $(".btn-option").click(function(e) {
      e.preventDefault();

      // $(".site-area ul").toggleClass("opacity");
      $(".btn-option").toggleClass("rotate");
      $('.site-list').slideToggle();
    })   
}

function youtubeSlide(){
  var swiper3 = new Swiper(".sc-center .swiper", {
      slidesPerView : 'auto',
      autoplay: {
          delay:3500,
          disableOnInteraction: false,
      },
      observer: true,
      observeParents: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
        
      },
      navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
        clickable: true,
        draggable : true,
      },
    });
    $('.sc-center .swiper-slide').on('mouseenter', function(e){
      swiper3.autoplay.stop();
    });
    $('.sc-center .swiper-slide').on('mouseleave', function(e){
      swiper3.autoplay.start();
    });
}




