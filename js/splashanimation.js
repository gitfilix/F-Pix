// Script for preloader splash animation anonymous function
	(function() {
		var container = document.getElementById('container');
		var boxLoader = document.getElementById('boxLoader');
		var box = document.getElementById('box');

		TweenMax.set([boxLoader], {
			position: 'absolute',
			top: '66%',
			left: '50%',
			xPercent: -50,
			yPercent: -50
		})

		TweenMax.set([container], {
			position: 'absolute',
			top: '50%',
			left: '50%',
			xPercent: -50,
			yPercent: -50
		})

		var tl = new TimelineMax({
			repeat: -1
		});

		tl.timeScale(1.3)
		
		tl.set(boxLoader, {
			transformOrigin: '0% 100%'
		})
		.to(boxLoader, 1, {
			rotation: -90,
			ease: Power4.easeInOut

		})
		.to(boxLoader, 0.2, {
			scaleX: 0.3,
			ease: Power1.easeIn
		}, '-=0.9')
		.to(boxLoader, 1, {
			left: '+=50',
			ease: Linear.easeNone
		}, '-=1')
		.to(boxLoader, 0.3, {
			scaleX: 1,
			ease: Power1.easeIn
		}, '-=0.2')
	})();