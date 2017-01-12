(function() {
	var header = document.getElementsByTagName("header")[0];
	var headerHeight = header.getBoundingClientRect().height;
	var headerLinks = header.getElementsByClassName("links")[0];
	var content = document.getElementsByTagName("main")[0];
	var mobileMode = (window.innerWidth >= 755);

	function getScrollTop() {
		if (window.pageYOffset !== undefined)
			return window.pageYOffset;
		return (document.documentElement || document.body.parentNode || document.body).scrollTop;
	}

	document.getElementById("mobile-nav").addEventListener("click", function() {
		header.classList.toggle("open");
	});

	function handleScroll() {
		header.classList.remove("open");

		var scrollTop = getScrollTop();

		header.classList.toggle("scrolled", scrollTop > (mobileMode ? 0 : headerHeight));
	}
	handleScroll();
	window.addEventListener("scroll", handleScroll);

	function handleResize() {
		function closeMobileHeader() {
			header.classList.remove("open");
		}

		if (window.innerWidth >= 755) {
			if (!mobileMode)
				return;

			content.removeEventListener("click", closeMobileHeader);
			headerLinks.removeEventListener("click", closeMobileHeader);
			mobileMode = false;
		} else {
			if (mobileMode)
				return;

			content.addEventListener("click", closeMobileHeader);
			headerLinks.addEventListener("click", closeMobileHeader);
			mobileMode = true;
		}
	}
	handleResize();
	window.addEventListener("resize", handleResize);
})();
