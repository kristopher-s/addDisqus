//START: Disqus integration
Answers.onPageLoad(function (event, data) {
    if (data.pageType === 20) {
  
  //Disqus config vars
  const disqus_config = function () { 
  this.page.url = event.article.url;
  this.page.identifier = event.article.id;
  };
  
  (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://platypusplayground.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
  }
});
//END: Disqus integration
