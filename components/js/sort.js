$(document).ready(function(){
  function Sort() {
    this.images = $('#theList')
    this.sort= $('#sort')
  }

  Sort.prototype = {
    bindEvents: function(){
      this.sort.on('click', function(e) {
        this.toggleSort()
      }.bind(this))

      this.images.delegate('img', 'click', function(e) {
        if($('#sort').attr('class') != 'active') return;
        this.sortPhotos()
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
    toggleSort: function () {
      $('#theList li').show()
      if( this.sort.attr('class') === 'active'){
        this.sort.removeClass('active')
      } else {
        this.sort.addClass('active')
      }
    },
      saveSort: function(){

      }
  };
  var newSort = new Sort;
   newSort.bindEvents();
})