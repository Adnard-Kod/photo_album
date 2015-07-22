document.addEventListener('DOMContentLoaded', function() {

  function Modal() {
    this.images = $('#theList')
    this.overlay = $("#overlay")
    this.overlayImage = $('#overlayImage')

  }

  Modal.prototype = {
    bindEvents: function() {
      this.images.delegate('img', 'click', function(e) {
        if($('#sort').attr('class') === 'active') return;
        this.createOverLay(e);
      }.bind(this))

      this.overlay.on('click', function(){
        this.closeOverlay();
       }.bind(this))

      $(window).on('resize', function() {
        this.checkImgSizeAndCenter();
      }.bind(this))
    },
    createOverLay: function(e) {
      this.overlay.show();
      this.setOverlayLocation()
      this.addOverLayImage(e);
      this.toggleScroll()
    },
    addOverLayImage: function(e) {
      var imgSrc = $(e.target).attr('src')
      this.overlayImage.attr("src", imgSrc);
      this.checkImgSizeAndCenter();
    },
    closeOverlay: function() {
      if(this.overlayImage.attr('src') != null) {
        this.overlay.hide()
        this.toggleScroll()
      }
    },
    toggleScroll: function() {
      var body = $('body')
      if( body.attr('class') == 'stop-scrolling'){
        body.removeClass('stop-scrolling')
      } else {
        body.addClass('stop-scrolling')
      }
    },
    setOverlayLocation: function() {
      this.overlay.css('top', window.pageYOffset.toString() + 'px'  )
      this.overlay.css('left', window.pageXOffset.toString() + 'px' )
    },
    centerOverlayImg: function() {
      var Ydif = (window.innerHeight - $(this.overlayImage).height()) /2;
      this.overlayImage.css('margin-top', Ydif.toString() + 'px' )
    }
    ,
    checkImgSizeAndCenter: function() {
      var imgHeight = $(this.overlayImage).height()
      if(imgHeight < window.innerHeight) {
        this.centerOverlayImg();
      } else {
        this.overlayImage.css('margin-top', '0')
      }
    }
  };

  var newModal = new Modal;
   newModal.bindEvents();

})