export default class infScroll {
	constructor(el){

		this.el = el;

		var InfiniteScroll = require('infinite-scroll');

		var infScroll = new InfiniteScroll(el, {
        path: '.pagination__next',
        button: '.load-more-cards',
        append: '.inf-card',
        hideNav: '.pagination',
        loadOnScroll: false,
        history: false
      });


	}
}