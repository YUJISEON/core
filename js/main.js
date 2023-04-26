$(function(){
    var $fixContent;
    var $slider;
    var item_len;
    var distance;
    var extraHeight;
    var fixStart;
    var fixEnd;
    var lastSlideWidth;
    var businessSlideWidthAry;
    var curr;

        
    var swiperAnimation_main = new SwiperAnimation();
    var swiperAnimation_txt = new SwiperAnimation();
        
    var mainSwiper = new Swiper(".mainSwiper", {
        speed : 1000,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      //autoplay : {
      //  delay : 5000,
      //  disableOnInteraction : false,
      //},
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".visual_next",
        prevEl: ".visual_prev",
      },
      on: {
        init: function () {
          swiperAnimation_main.init(this).animate();         
        },
        slideChange: function () {
		  swiperAnimation_main.init(this).animate();
		  $('.mainSwiper .swiper-slide-active').children('.back_img').fadeOut(1000, function(){
			 $(this).fadeIn();
		  });
		}
      }
    });
    
    var txtSwiper = new Swiper(".txtSwiper", {
	  speed : 1000,
	  slidesPerView: 1,
	  spaceBetween: 0,
	  loop: true,
	  //autoplay : {
	  //  delay : 5000,
	  //  disableOnInteraction : false,
	  //},
	  draggable: false,
	  allowTouchMove: false,
	  on: {
			init: function () {
			  swiperAnimation_txt.init(this).animate();
			},
			slideChange: function () {
			  swiperAnimation_txt.init(this).animate();
			}
		}
    });
       	
   	mainSwiper.on('slideChange', function(){
		var idx = Number(mainSwiper.realIndex);
		txtSwiper.slideTo(idx+1);
		$('.main_visual .page_box .current_num').text(idx+1);
	});


    $('.tab_wrap > ul > li').on('click', function(){	
		var idx = $(this).index();
		
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		
		$(this).closest('.con_wrap').find('.tab_con > ul > li').removeClass('on');
		$(this).closest('.con_wrap').find('.tab_con > ul > li').eq(idx).addClass('on');
		
		if ( $(this).closest('#location').length ) {
			$('ul.map_area > li').removeClass('on');
			$('ul.map_area > li').eq(idx).addClass('on');		
            
            if ( idx == 0 ) {
                setTimeout(function(){
                    map1.relayout();
                    map1.setCenter(new kakao.maps.LatLng(37.486266430952696, 127.1187449536032));
                }, 0);  
            } else if ( idx == 1 ) {
                setTimeout(function(){
                    map2.relayout();
                    map2.setCenter(new kakao.maps.LatLng(36.38151877958611, 127.36625860329288));
                }, 0);  
            }
		}
	})

    mapInit();
})

var map1, map2;

function mapInit() {	
	
    var docWidth = $(document).width();

    var mapContainer1 = document.getElementById('map1'), // 지도를 표시할 div 
    mapOption1 = { 
        center: new kakao.maps.LatLng(37.486266430952696, 127.1187449536032), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

    map1 = new kakao.maps.Map(mapContainer1, mapOption1); // 지도를 생성합니다

    var imageSrc1 = '../img/map_marker.png', // 마커이미지의 주소입니다    
    imageSize1 = new kakao.maps.Size(200, 80), // 마커이미지의 크기입니다
    imageOption1 = {offset: new kakao.maps.Point(0,80)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1),
    markerPosition1 = new kakao.maps.LatLng(37.486266430952696, 127.1187449536032); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker1 = new kakao.maps.Marker({
            position: markerPosition1, 
            image: markerImage1 // 마커이미지 설정 
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker1.setMap(map1);  


    var mapContainer2 = document.getElementById('map2'), // 지도를 표시할 div 
    mapOption2 = { 
        center: new kakao.maps.LatLng(36.38151877958611, 127.36625860329288), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

    map2 = new kakao.maps.Map(mapContainer2, mapOption2); // 지도를 생성합니다

    var imageSrc2 = '../img/map_marker.png', // 마커이미지의 주소입니다    
    imageSize2 = new kakao.maps.Size(200, 80), // 마커이미지의 크기입니다
    imageOption2 = {offset: new kakao.maps.Point(20,105)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),
    markerPosition2 = new kakao.maps.LatLng(36.38151877958611, 127.36625860329288); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker2 = new kakao.maps.Marker({
            position: markerPosition2, 
            image: markerImage2 // 마커이미지 설정 
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker2.setMap(map2);  


}
