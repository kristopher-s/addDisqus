//START: Disqus integration

Answers.onPageLoad(function (event, data) {
  // Page loaded! All dom elements are visible now.
    if (data.pageType === 20) {
      console.log(event);
  
  //Disqus config vars for article-specific comments.
  //const disqus_config = function () { 
  //this.page.url = answersSdk.getVisiblePageData().article.url;
  //this.page.identifier = answersSdk.getVisiblePageData().article.id;
  };
  
  //Targets DOM node after where we will insert Disqus container.
  const targetNode = document.querySelector(".feedback-section-container");
    
  //Creates DIV where Disqus container will reside.
  const createDisqusContainer = document.createElement('div')
  createDisqusContainer.setAttribute("id", "disqus_thread")
  targetNode.appendChild(createDisqusContainer)

  //Loads Disqus script.
  const selectDisqusContainer = document.querySelector("#disqus_thread")
  const insertDisqus = document.createElement('script')
  insertDisqus.src = ''; //Add account specific Disqus script URL e.g. https://<YOUR_DOMAIN>.disqus.com/embed.js
  insertDisqus.setAttribute('data-timestamp', +new Date());
  targetNode.appendChild(insertDisqus)

  }
});

//END: Disqus integration
