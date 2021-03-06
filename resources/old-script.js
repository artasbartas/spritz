var token = 'e5490a20256d3c01224895400b9071319791f237';
var url = 'http://blog.readability.com/2011/02/step-up-be-heard-readability-ideas/';

function fetchArticle(url) {
  var req = new XMLHttpRequest();
  if('withCredentials' in req) {
    req.open('GET', 'http://crossorigin.me/https://readability.com/api/content/v1/parser?' + 'url=' + url + '&token=' + token, true);
//    req.setRequestHeader('Content-Type', 'application/json');
//    req.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080/');
    req.onload = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
        
          var response = JSON.parse(req.responseText);
          var title = response.title;
          var author = response.author;
          var word_count = response.word_count;
          var html = response.content;
          var content = stripHtml(html);
          var articleObj = {title: title, author: author, word_count: word_count, content: content};
          
          console.log(articleObj);
//          console.log(author);
//          console.log(content);
//          console.log(word_count);
          
          };
        } else {
          console.log('Request failed: ' + req.statusText);
        }
    }
//    req.withCredentials = true;
    req.send();
  } else {
        errback(new Error('CORS not supported'));
    }
}

// Strip away HTML tags from the article
function stripHtml(html) {
   var temp = document.createElement("div");
   temp.innerHTML = html;
   return temp.textContent || temp.innerText || "";
}