document.addEventListener("DOMContentLoaded",function(){
  
  function Album() {
    this.photosList = $('#theList');
    this.albumList = 'albumList';
    this.form = $('#AddPhotoForm');
    this.clearAllBtn = $('#clearAll');
    this.photoTmp = $('#photo-temp').html();
    this.deleteBtn = $('.deleteBtn')
  }

  Album.prototype = {
    init: function() {
      this.bindEvents();
      this.loadAlbum();
    },
    loadAlbum: function() {
      var list = localStorage.getItem(this.albumList)
      if(list) {
        this.photosList.html('')
         this.photosList.append(list)
        var photoUrl = $('#photoItem')
      } 
        this.hideClearAllBtn();
    },
    bindEvents: function() {
      this.form.on('submit', function(e) {
        this.addPhoto(e)
      }.bind(this))

      this.clearAllBtn.on('click', function(e) {
        this.clearAll(e);
      }.bind(this))

      this.photosList.delegate('li', 'mouseover', function (e) {
        var btn = $(e.target).find('span')
        btn.show()
        this.hideDeleteBtn(btn)
      }.bind(this))

      this.photosList.delegate(this.deleteBtn, 'click', function(e) {
        e.preventDefault();
        this.deletePhoto(e)
      }.bind(this))

    },
    saveList: function() {
      var savedPhotos = localStorage.setItem(this.albumList, theList.innerHTML);
      this.hideClearAllBtn();
    },
    clearAll: function(e) {
      e.preventDefault();
      localStorage.clear()
      location.reload();
    },
    hideDeleteBtn: function(btn) {
      this.photosList.delegate('li', 'mouseout', function(e) {
        btn.hide()
      }.bind(this))
    },
    hideClearAllBtn: function() {
      var liCount = this.photosList.find('li').length
      if(liCount <= 0 ) {
        this.clearAllBtn.hide()
      } else {
        this.clearAllBtn.show()
      }
    },
    addPhoto: function(e) {
      e.preventDefault();
      var img = $('form #photoItemImg').val()
      var title = $('form #photoItemTitle').val()
      var photo = {"img": img, 'title': title}
      var photo = this.buildPhoto(photo)
      this.photosList.append(photo)
      this.resetForm()
      this.saveList()
      this.hideClearAllBtn();
    },
    buildPhoto: function(val) {
      var source = this.photoTmp
      var template = Handlebars.compile(source)
      return template(val);
    },
    resetForm: function() {
      $('form')[0].reset()
      $('#photoItem').focus()
    },
    sortPhotos: function() {
      // come-back and do this
    },
    deletePhoto: function(e) {
      if( $(e.target).is('p')) {
        $(e.target).closest('li').remove();
        this.saveList()
      }
    }
  };

  var newAlbum = new Album;
  newAlbum.init();
});