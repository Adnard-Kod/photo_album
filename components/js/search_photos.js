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
    addToolTip: function() {
      $('#searchPhoto').after("<h3 id='toolTip'>Cant sort and search at the same time. Turn off sort.</h3>")
      setInterval(function(){
        $("#toolTip").remove();
       }, 3000);
    },
    filter: function() {
      if($('#sort').attr('class') === 'active') {
        if($('#toolTip').length > 0) return
          this.addToolTip();
      } else {
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
    }
  };
  var newSearch = new Search;
  newSearch.bindEvents();
})