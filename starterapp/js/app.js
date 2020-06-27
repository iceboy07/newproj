
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
          $linnksElement.append(item);
        })

    }
  });
    return false;
};


$(".form").submit(displayWikipedia);
