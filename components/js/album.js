document.addEventListener("DOMContentLoaded",function(){
  
  function Album() {
    this.newPhotoItem = null;
    this.newPhotoList = true;
    this.photosList = $('#theList');
    this.albumList = 'albumList';
    this.form = $('form');
    this.clearAllBtn = $('#clearAll');
    this.photoTmp = $('#photo-temp').html();
  }

  Album.prototype = {
    init: function() {
      this.bindEvents();
      this.loadAlbum();
    },
    loadAlbum: function() {
      var list = localStorage.getItem(this.albumList)
      if(list) {
        var photoUrl = $('#photoItem')
      }
    }, 
    bindEvents: function() {
      this.form.on('submit', function(e) {
        this.addPhoto(e)
      }.bind(this))

      this.clearAllBtn.on('click', function(e) {
        this.clearAll(e);
      }.bind(this))
    },
    addPhoto: function(e) {
      e.preventDefault();
      var img = $('form #photoItemImg').val()
      var title = $('form #photoItemTitle').val()
      var photo = {"img": img, 'title': title}
      var photo = this.buildPhoto(photo)
      this.photosList.append(photo)
      this.resetForm()
    },
    buildPhoto: function(val) {
      var source = this.photoTmp
      var template = Handlebars.compile(source)
      return template(val);
    },
    save: function(e) {
      e.preventDefault();
      localStorage.setItem(this.albumList, theList.innerHTML);
    },
    clearAll: function(e) {
      e.preventDefault();
      localStorage.clear()
      location.reload();
    },
    resetForm: function() {
      $('form')[0].reset()
      $('#photoItem').focus()
      $('.sortable').sortable('destroy')
      $('.sortable').sortable({
        handle: '.handle'
      });
    }
  };

  var newAlbum = new Album;
  newAlbum.init();
});