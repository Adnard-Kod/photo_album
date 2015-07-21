document.addEventListener("DOMContentLoaded",function(){
  
  function Album() {
    this.photos = document.getElementById('theList');
    this.albumList = 'albumList'
    this.clearAllBtn = document.getElementById('clearAll')
  }

  Album.prototype = {
    init: function() {
      this.bindEvents();
      this.loadAlbum();
    },
    loadAlbum: function() {
      var list = localStorage.getItem(this.albumList)
      if(list) {
        this.photos.innerHTML = list;
      }
    }, 
    bindEvents: function() {

      this.clearAllBtn.addEventListener('click', function(e) {
        this.clearAll(e);
      }.bind(this),false)
    },
    save: function(e) {
      e.preventDefault();
      localStorage.setItem(this.albumList, theList.innerHTML);
    },
    clearAll: function(e) {
      e.preventDefault();
      localStorage.clear()
      location.reload();
    }
  };

  var newAlbum = new Album;
  newAlbum.init();
}, false);