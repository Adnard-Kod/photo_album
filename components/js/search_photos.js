$(document).ready(function() {
  function Search() {
    this.searchInput =  $("#searchPhoto");
    this.list = $('#theList')
  }

  Search.prototype = {
    bindEvents: function() {
      this.searchInput.on('keyup', function(){
        this.filter()
      }.bind(this))
    },
    filter: function() {
      var search = this.searchInput.val()
      $('#theList li').show()
      var myExp = new RegExp(search, "i")
      var titles = $('#theList li p')
      for (var i = titles.length - 1; i >= 0; i--) {
        if($(titles[i]).text().search(myExp) == -1) {
          $(titles[i]).parent().hide()
        }
      };
    }
  };
  var newSearch = new Search;
  newSearch.bindEvents();
})