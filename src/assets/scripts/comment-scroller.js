;(function() {

	//--------------------------------------------------
	// VARS
	//--------------------------------------------------

	const commentsWrapper = document.querySelector('.comment-wrapper');
	const newComments = commentsWrapper && commentsWrapper.querySelectorAll('.comment-new');
	let counter = 0;
	let activeCommentIdNode; // Note: each comment is preceded by an invis anchor with the comment id.
	let newCommentsBtnHTMLNode;
	let nextCommentBtnHTMLNode;

	//--------------------------------------------------
	// RUN
	//--------------------------------------------------

	if (newComments) {
		init();
	}

	//--------------------------------------------------
	// INIT
	// If new comments exist, add button to article.
	//--------------------------------------------------

	function init() {

		// Assign the first comment node.
		activeCommentIdNode = getNextCommentNode();

		// Get element for insertion.
		const insertionEl = document.querySelector('.main-body .field-name-body');

		console.log(insertionEl)

		// Create new comments btn.
		const newCommentsBtnHTML = `
			<button class="btn btn-primary btn-small mb-3">
				<img class="mr-1" width="14" src="/assets/img/ui/comment-bubble.svg" alt="Comment Bubble" /> New Comments
			</button>
		`;

		// Create next comment btn.
		const nextCommentBtnHTML = `
			<button class="btn btn-primary btn-small btn-comment-next animated zoomIn faster">
				Next&nbsp;<i class="fa fa-arrow-down"></i>
			</button>
		`;

		// Create 'New Comments' dom node (once only).
		newCommentsBtnHTMLNode = new DOMParser().parseFromString(newCommentsBtnHTML, 'text/html').body.firstChild;

		// New comment btn - click event.
		newCommentsBtnHTMLNode.addEventListener('click', function() {
			scrollTo(activeCommentIdNode);
		});

		// Create 'Next Comment' dom node (once only).
		nextCommentBtnHTMLNode = new DOMParser().parseFromString(nextCommentBtnHTML, 'text/html').body.firstChild;

		// Next comment btn - click event.
		nextCommentBtnHTMLNode.addEventListener('click', function() {
			scrollTo(activeCommentIdNode);
		});

		// Insert is directly above the first body.
		if (insertionEl) {
			insertionEl.before(newCommentsBtnHTMLNode);
		}
	}

	//--------------------------------------------------
	// GET/SET NEXT COMMENT NODE
	//--------------------------------------------------

	function getNextCommentNode() {
		return newComments[counter].previousElementSibling;
	}

	function setNextCommentNode() {
		counter++;
		activeCommentIdNode = newComments[counter] && newComments[counter].previousElementSibling;
	}

	//--------------------------------------------------
	// SCROLL TO
	//--------------------------------------------------

	function scrollTo(target) {

		// Comment header el.
		const commentHeaderEl = target.nextElementSibling.querySelector('.comment-content-wrapper .comment-header');

		if (counter < newComments.length-1) {

			// Insert 'Next Comment' next to the 'new' span.
			commentHeaderEl.after(nextCommentBtnHTMLNode);

		} else {

			// Remove 'New Comment' btn.
			newCommentsBtnHTMLNode.remove();

			// Remove 'Next Comment' btn.
			nextCommentBtnHTMLNode.remove();
		}

		// Account for fixed header.
		const offsetY = document.documentElement.clientWidth >= 1100 ? 80 : 0;

		// Performance on mobile is bad, so avoid scrolling entirely.
		const behavior = document.documentElement.clientWidth >= 768 ? 'smooth' : 'auto';

		window.scrollTo({
			top: target.getBoundingClientRect().top + window.pageYOffset - offsetY,
			behavior: behavior
		});

		// Trigger next button.
		setNextCommentNode();
	}
})();