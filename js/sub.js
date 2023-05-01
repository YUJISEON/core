window.onload = function(){    

    gsap.registerPlugin(CustomEase, ScrollTrigger);

    const customEaseIn = CustomEase.create('custom-ease-in', '0.52, 0.00, 0.48, 1.00');
    const fourtyFrames = 1.3333333;
    const fiftyFrames = 1.66666;
    const twoFrames = 0.666666;
    const fourFrames = 0.133333;
    const sixFrames = 0.2;

    const b1 = document.querySelector('#b1 b');
    const b2 = document.querySelector('#b2 b');
    const b3 = document.querySelector('#b3 b');
    const span1 = document.querySelector('#span1 span');
    const span2 = document.querySelector('#span2 span');
    const span3 = document.querySelector('#span3 span');

    const showElements = () => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.sub_visual',
                start: '20% top',
                //end: '+=1500',
                //scrub: true,
                //markers: true
            }
        });
        timeline
            .fromTo(b1, {x: '10rem'}, { x: '0rem', duration: twoFrames, ease: customEaseIn}, 0)
            .fromTo(b2, {x: '21rem'}, { x: '0rem', duration: twoFrames, ease: customEaseIn}, 0)
            .fromTo(span3, {x: '-11rem'}, { x: '0rem', duration: twoFrames, ease: customEaseIn}, twoFrames)
            .fromTo(span1, {x: '-35rem'}, { x: '0rem', duration: twoFrames, ease: customEaseIn}, twoFrames)
            .fromTo(span2, {x: '-22rem'}, { x: '0rem', duration: twoFrames, ease: customEaseIn}, twoFrames)
            .fromTo(b3, {x: '22rem'}, { x: '0rem', duration: twoFrames, ease: customEaseIn}, 0)

        return timeline;
    }
    
    showElements();

    gsap.defaults({ 
        duration : 0.5,
        //ease: 'power2.inOut',
    });  

    gsap.set(".ani_bg", {
        backgroundSize:"100% 100%"} 
    );

    gsap.set(".ani_tit", {
        autoAlpha: 0,
        width:0} 
    );
    
    gsap.set(".ani_items", {
        autoAlpha: 0,
        y:100} 
    );

    const ani_items_tit = ( document.getElementsByClassName('sub_visual').length )  ? document.querySelectorAll('.sub_visual .ani_items') : null;
    const ani_bg = ( document.getElementsByClassName('sub_visual').length )  ? document.querySelectorAll('.sub_visual .ani_bg') : null;
    const ani_items_slogan = ( document.getElementsByClassName('page_slogan').length )  ? document.querySelectorAll('.page_slogan .ani_items') : null;

    const ani_tit1 = ( document.getElementsByClassName('section1').length )  ? document.querySelectorAll('.section1 .ani_tit') : null;
    const ani_tit2 = ( document.getElementsByClassName('section2').length )  ? document.querySelectorAll('.section2 .ani_tit') : null;
    const ani_tit3 = ( document.getElementsByClassName('section3').length )  ? document.querySelectorAll('.section3 .ani_tit') : null;
    const ani_tit4 = ( document.getElementsByClassName('section4').length )  ? document.querySelectorAll('.section4 .ani_tit') : null;
    const ani_tit5 = ( document.getElementsByClassName('section5').length )  ? document.querySelectorAll('.section5 .ani_tit') : null;
    const ani_tit_contact = ( document.getElementsByClassName('contact_wrap').length )  ? document.querySelectorAll('.contact_wrap .ani_tit') : null;

    const ani_items1 = ( document.getElementsByClassName('section1').length )  ? document.querySelectorAll('.section1 .ani_items') : null;
    const ani_items2 = ( document.getElementsByClassName('section2').length )  ? document.querySelectorAll('.section2 .ani_items') : null;
    const ani_items3 = ( document.getElementsByClassName('section3').length )  ? document.querySelectorAll('.section3 .ani_items') : null;
    const ani_items4 = ( document.getElementsByClassName('section4').length )  ? document.querySelectorAll('.section4 .ani_items') : null;
    const ani_items5 = ( document.getElementsByClassName('section5').length )  ? document.querySelectorAll('.section5 .ani_items') : null;
    const ani_items_contact = ( document.getElementsByClassName('contact_wrap').length )  ? document.querySelectorAll('.contact_wrap .ani_items') : null;

    let _start = 'top top';
    var winW = $(window).innerWidth();
	if( winW < 769 ) {	_start = '50px top';} 

    gsap.to(ani_bg, 		
		{	
            duration: 0.9, 
            backgroundSize: "+=25% +=25%", 
            autoRound:false, 
            ease: Power1.ease0ut
		}
	);

    gsap.to(ani_items_tit, 		
		{	
            delay: 0.3,
			autoAlpha: 1,
			y:0,
		}
	);
    
    gsap.to(ani_items_slogan, 		
		{	
            delay: 0.6,
			autoAlpha: 1,
			y:0,
		}
	);

    gsap.to(ani_tit1, 		
		{	
			duration: 0.9, 
            autoAlpha: 1, 
            width: "100%", 
            delay: 0.3,
            ease: 'Power4.easeOut',
			scrollTrigger: {
				trigger: '.page_slogan',
				start: 'bottom center',
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);

    gsap.to(ani_tit2, 		
		{	
			duration: 0.9, 
            autoAlpha: 1, 
            width: "100%", 
            delay: 0.3,
            ease: 'Power4.easeOut',
			scrollTrigger: {
				trigger: '.section1',
				start: _start,
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);


    gsap.to(ani_tit3, 		
		{	
			duration: 0.9, 
            autoAlpha: 1, 
            width: "100%", 
            delay: 0.3,
            ease: 'Power4.easeOut',
			scrollTrigger: {
				trigger: '.section2',
				start: _start,
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);


    gsap.to(ani_tit4, 		
		{	
			duration: 0.9, 
            autoAlpha: 1, 
            width: "100%", 
            delay: 0.3,
            ease: 'Power4.easeOut',
			scrollTrigger: {
				trigger: '.section3',
				start: _start,
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);

    gsap.to(ani_tit5, 		
		{	
			duration: 0.9, 
            autoAlpha: 1, 
            width: "100%", 
            delay: 0.3,
            ease: 'Power4.easeOut',
			scrollTrigger: {
				trigger: '.section4',
				start: _start,
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);

	
    gsap.to(ani_tit_contact, 		
		{	
			duration: 0.9, 
            autoAlpha: 1, 
            width: "100%", 
            delay: 0.3,
            ease: 'Power4.easeOut',
			scrollTrigger: {
				trigger: '#sub',
				start: 'bottom bottom',
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);

    gsap.to(ani_items1, 		
		{	
			autoAlpha: 1,
			y:0,
            stagger: 0.1,
			scrollTrigger: {
				trigger: '.page_slogan',
				start: 'bottom center',
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);

    gsap.to(ani_items2, 		
		{	
			autoAlpha: 1,
			y:0,
            stagger: 0.1,
			scrollTrigger: {
				trigger: '.section1',
				start: _start,
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);


    gsap.to(ani_items3, 		
		{	
			autoAlpha: 1,
			y:0,
            stagger: 0.1,
			scrollTrigger: {
				trigger: '.section2',
				start: _start,
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);


    gsap.to(ani_items4, 		
		{	
			autoAlpha: 1,
			y:0,
            stagger: 0.1,
			scrollTrigger: {
				trigger: '.section3',
				start: _start,
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);

    gsap.to(ani_items5, 		
		{	
			autoAlpha: 1,
			y:0,
            stagger: 0.1,
			scrollTrigger: {
				trigger: '.section4',
				start: _start,
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);

	
    gsap.to(ani_items_contact, 		
		{	
			autoAlpha: 1,
			y:0,
            stagger: 0.2,
			scrollTrigger: {
				trigger: '#sub',
				start: 'bottom bottom',
				//end: '+=1500',
				//scrub: true,
				//markers: true
			}
		}
	);


}