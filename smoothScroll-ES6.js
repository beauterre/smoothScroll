"use strict";
window.addEventListener("load",()=>
{
	function scrollIt(destination, duration = 500, easing = 'easeInOutQuad', callback) {
	if(destination==null)
	{
		console.log("scroll destination: "+destination);
		return;
	}
	  const easings = {
		linear(t) {
		  return t;
		},
		easeInQuad(t) {
		  return t * t;
		},
		easeOutQuad(t) {
		  return t * (2 - t);
		},
		easeInOutQuad(t) {
		  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		},
		easeInCubic(t) {
		  return t * t * t;
		},
		easeOutCubic(t) {
		  return (--t) * t * t + 1;
		},
		easeInOutCubic(t) {
		  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
		},
		easeInQuart(t) {
		  return t * t * t * t;
		},
		easeOutQuart(t) {
		  return 1 - (--t) * t * t * t;
		},
		easeInOutQuart(t) {
		  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
		},
		easeInQuint(t) {
		  return t * t * t * t * t;
		},
		easeOutQuint(t) {
		  return 1 + (--t) * t * t * t * t;
		},
		easeInOutQuint(t) {
		  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
		}
	  };

	  const start = window.pageYOffset;
	  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

	  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
	  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
	  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

	  if ('requestAnimationFrame' in window === false) {
		window.scroll(0, destinationOffsetToScroll);
		if (callback) {
		  callback();
		}
		return;
	  }
	  
	  function scroll() {
		const now = 'now' in window.performance ? performance.now() : new Date().getTime();
		const time = Math.min(1, ((now - startTime) / duration));
		const timeFunction = easings[easing](time);
		window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

		
		//console.log(window.pageYOffset+" === "+destinationOffsetToScroll)
		if (window.pageYOffset === destinationOffsetToScroll) {
		  if (callback) {
			callback();
		  }
		  return;
		}

		requestAnimationFrame(scroll);
	  }

	  scroll();
	}

	var all_scroll_on_click_elements=document.querySelector('.scrollOnClick');
	if(all_scroll_on_click_elements!=null)
	{
		all_scroll_on_click_elements.addEventListener('click', (e)=>  
		{
			var d=e.currentTarget;
			var duration=d.getAttribute("duration");
			var easing=d.getAttribute("easing");
			var id=d.getAttribute("scrollTo");
			scrollIt(
				document.getElementById(id),
				duration,
				easing,
				() => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
			  );
		});
	}else{
		console.log("No elements with class scrollOnClick found.");
	}
});
