$(document).ready(function(){
  function Sort() {
    this.images = $('#theList')
    this.sort= $('#sort')
  }

  Sort.prototype = {
    init: function(){
      this.sortPhotos();
      this.bindEvents();
    },
    bindEvents: function(){
      this.sort.on('click', function(e) {
        this.toggleSort()
      }.bind(this))

      this.images.delegate('img', 'click', function(e) {
        if($('#sort').attr('class') != 'active') return;
      }.bind(this))
    },
    sortPhotos: function() {
      this.images.disableSelection();
      this.images.sortable({
        revert: true,
        opacity: 0.6,
      })
      this.saveSort();
    },
    sortDisable: function() {
      this.images.sortable( "disable" )
    },
    sortEnable: function() {
      this.images.sortable( "enable" )
    },
    toggleSort: function () {
      $('#theList li').show()
      if( this.sort.attr('class') === 'active'){
        this.sort.removeClass('active')
        this.sortDisable()

      } else {
        this.sort.addClass('active')
        this.sortEnable()
      }
    },
    saveSort: function(){

    }
  };
  var newSort = new Sort;
   newSort.init();
})