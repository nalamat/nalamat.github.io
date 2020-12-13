// google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-W4NCHJK0BE');

// expand .item on click
$(document).on('click', '.item.arrow', function() {
  $(this).toggleClass('expand');
  more = $(this).find('.more').toggleClass('expand')[0];
  if (more.style.maxHeight) more.style.maxHeight = null;
  else more.style.maxHeight = more.scrollHeight + 'px';
});

// maintain normal link behavior in .item children
$(document).on('click', '.item a', function(event) {
  event.stopImmediatePropagation();
});
