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
          article.date_published = response.word_count;
          article.content = stripHtml(response.content);
          article.url = url;
          article.wcount = response.word_count;
          article.domain = funtion getDomain (url);

          console.log(article);
//          console.log(author);
//          console.log(content);
//          console.log(word_count);
          
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
  this.author         = ;
  this.title          = ;
  this.date_published = ;
  this.content        = ;
  this.url            = ;
  this.date_retrieved = new Date();
  this.reading_status = "New";
  this.wcount         = ;
  this.wread          = 0;
  this.language       = ;
  this.tags           = ;
  this.domain         = ;
}

Article.prototype = function() {

  var action_one = function() {
    // Rotate wheels
  };

  var action_two = function() {
    // Apply brake pads
  };

  var domain = function() {
    // Apply brake pads
  };

  return {
    doActionOne: action_one,
    doActionTwo: action_two,
    getDomain: domain;
  }

}();