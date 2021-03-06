
var token = 'e5490a20256d3c01224895400b9071319791f237';
var url = 'http://blog.readability.com/2011/02/step-up-be-heard-readability-ideas/';

function fetchArticle(url) {
  var req = new XMLHttpRequest();
    req.open('GET', 'http://crossorigin.me/https://readability.com/api/content/v1/parser?' + 'url=' + url + '&token=' + token, true);
    req.onload = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
        
          var response = JSON.parse(req.responseText); // turn JSON response into a temporary object
          
          var article = new Article(); // use Article prototype to instantiate a new article
          article.author = response.author;
          article.title = response.title;
          article.content = stripHtml(response.content);
          article.url = url;
          article.date_retrieved = new Date();
          article.wcount = response.word_count;
          article.domain = response.domain;

          // print only enumerable properties
          for(i in article) {
    		if (article.hasOwnProperty(i)) {
        		console.log (i, ":", article[i])
    		}
		  }
          return article;

          };
        } else {
          console.log('Request failed: ' + req.statusText);
        }
    }
    req.send();
}

// Strip away HTML tags from the article
function stripHtml(html) {
   var temp = document.createElement("div");
   temp.innerHTML = html;
   return temp.textContent || temp.innerText || "";
}

// Implementing object prototype pattern for Articles
var Article = function() {
  this.author         = null;
  this.title          = null;
  this.content        = null;
  this.url            = null;
  this.date_retrieved = null;
  this.reading_status = null;
  this.wcount         = null;
  this.wread          = null;
  this.language       = null;
  this.tags           = null;
  this.domain         = null;
}

Article.prototype = function() {

  var action_one = function() {
    // Rotate wheels
  };

  var action_two = function() {
    // Apply brake pads
  };

  var domain = function() {
    return url;
  };

  return {
    doActionOne: action_one,
    doActionTwo: action_two,
    getDomain: domain
  }

}();
</script>