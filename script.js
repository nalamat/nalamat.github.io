---
---

// google analytics
{% if jekyll.environment == "production" %}
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-W4NCHJK0BE');
{% endif %}

$(document).ready(function(event) {
  // expand .item on click
  $('.item.arrow').click(function() {
    $(this).toggleClass('expand');
    more = $(this).find('.more').toggleClass('expand')[0];
    if (more.style.maxHeight) more.style.maxHeight = null;
    else more.style.maxHeight = more.scrollHeight + 'px';
  });

  // maintain normal link behavior in .item children
  $('.item a').click(function(event) {
    event.stopImmediatePropagation();
  });
});
