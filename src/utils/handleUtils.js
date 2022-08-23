export const isEnterViewport = (el) => {
	// const ViewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	// const ViewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
	// const {top, right, bottom, left} = el.getBoundingClientRect();
	// return top >= 0 && left >= 0 && bottom <= ViewportHeight && right <= ViewportWidth
	const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	const offsetTop = el.offsetTop;
	const scrollTop = document.documentElement.scrollTop;
	return offsetTop - scrollTop <= viewPortHeight - 300;
};

