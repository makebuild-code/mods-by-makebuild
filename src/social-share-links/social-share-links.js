function initSocialShares() {
	const socials = document.querySelectorAll('[mb-social-share-link]');
	const url = window.location.href
	const encodedUrl = encodeURIComponent(url)

	socials.forEach((social) => {
		const socialName = social.getAttribute('mb-social-share-link');
		if (socialName === 'x') {
			social.href = 'https://x.com/share?url=' + encodedUrl 
		} else if (socialName === 'reddit') {
			social.href = 'https://www.reddit.com/submit?url=' + encodedUrl 
		} else if (socialName === 'facebook') {
			social.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl 
		} else if (socialName === 'linkedin') {
			social.href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodedUrl 
		}
	})
}

// Run immediately if DOM is already loaded
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initSocialShares);
} else {
	initSocialShares();
}