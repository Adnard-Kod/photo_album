$(document).ready(function(){
  function Sort() {
    this.images = $('#theList');
    this.sort= $('#sort');
    this.sortSave = $('.sortSave');
    this.albumList = 'albumList';
  }

  Sort.prototype = {
    init: function(){
      this.sortPhotos();
      this.bindEvents();
    },
    bindEvents: function(){
      this.sort.on('click', function(e) {
        this.toggleSort();
      }.bind(this))

      this.images.delegate('img', 'click', function(e) {
        if($('#sort').attr('class') != 'active') return;
      }.bind(this))

      this.sortSave.on('click', function(e) {
        this.saveSort();
      }.bind(this))
    },
    sortPhotos: function() {
      this.images.disableSelection();
      this.images.sortable({
        revert: true,
        opacity: 0.6,
      })
    },
    sortDisable: function() {
      this.images.sortable( "disable" );
    },
    sortEnable: function() {
      this.images.sortable( "enable" );
    },
    toggleSort: function () {
      $('#theList li').show()
      if( this.sort.attr('class') === 'active'){
        this.sort.removeClass('active');
        this.sortSave.hide();
        this.sortDisable();
      } else {
        this.sortSave.show();
        this.sort.addClass('active');
        this.sortEnable();
      }
    },
    saveSort: function(){
      localStorage.clear();
      localStorage.setItem(this.albumList, theList.innerHTML);
    }
  };
  var newSort = new Sort;
   newSort.init();
})