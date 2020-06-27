
var displayWikipedia = function(){
  var $linnksElement =$('#links');
  var searchString = $("#searchString").val();
  var wikipediaUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' +searchString+ '&format=json&callback=wikicallback';
  $.ajax({
    url: wikipediaUrl,
    dataType : "jsonp",
    jsonp : "callback",
    success: function(res) {
        var linkLists = res[1];
        linkLists.forEach(function(item) {
          var url = 'https://en.wikipedia.org/wiki' + item;
          $linnksElement.append('<li><a href="'+ url +'">' +item + '</a></li>');
        })

    }
  });
    return false;
};


$(".form").submit(displayWikipedia);
