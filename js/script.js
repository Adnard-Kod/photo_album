document.addEventListener("DOMContentLoaded",function(){function a(){this.photosList=$("#theList"),this.albumList="albumList",this.form=$("#AddPhotoForm"),this.clearAllBtn=$("#clearAll"),this.photoTmp=$("#photo-temp").html(),this.deleteBtn=$(".deleteBtn")}a.prototype={init:function(){this.bindEvents(),this.loadAlbum()},loadAlbum:function(){var a=localStorage.getItem(this.albumList);if(a){this.photosList.html(""),this.photosList.append(a);$("#photoItem")}this.hideClearAllBtn()},bindEvents:function(){this.form.on("submit",function(a){this.addPhoto(a)}.bind(this)),this.clearAllBtn.on("click",function(a){this.clearAll(a)}.bind(this)),this.photosList.delegate("li","mouseover",function(a){var b=$(a.target).find("span");b.show(),this.hideDeleteBtn(b)}.bind(this)),this.photosList.delegate(this.deleteBtn,"click",function(a){a.preventDefault(),this.deletePhoto(a)}.bind(this))},saveList:function(){localStorage.setItem(this.albumList,theList.innerHTML);this.hideClearAllBtn()},clearAll:function(a){a.preventDefault(),localStorage.clear(),location.reload()},hideDeleteBtn:function(a){this.photosList.delegate("li","mouseout",function(b){a.hide()}.bind(this))},hideClearAllBtn:function(){var a=this.photosList.find("li").length;0>=a?this.clearAllBtn.hide():this.clearAllBtn.show()},addPhoto:function(a){a.preventDefault();var b=$("form #photoItemImg").val(),c=$("form #photoItemTitle").val(),d={img:b,title:c},d=this.buildPhoto(d);this.photosList.append(d),this.resetForm(),this.saveList(),this.hideClearAllBtn()},buildPhoto:function(a){var b=this.photoTmp,c=Handlebars.compile(b);return c(a)},resetForm:function(){$("form")[0].reset(),$("#photoItem").focus()},sortPhotos:function(){},deletePhoto:function(a){$(a.target).is("p")&&($(a.target).closest("li").remove(),this.saveList())}};var b=new a;b.init()}),document.addEventListener("DOMContentLoaded",function(){function a(){this.images=$("#theList"),this.overlay=$("#overlay"),this.overlayImage=$("#overlayImage")}a.prototype={bindEvents:function(){this.images.delegate("img","click",function(a){"active"!==$("#sort").attr("class")&&this.createOverLay(a)}.bind(this)),this.overlay.on("click",function(){this.closeOverlay()}.bind(this)),$(window).on("resize",function(){this.checkImgSizeAndCenter()}.bind(this))},createOverLay:function(a){this.overlay.show(),this.setOverlayLocation(),this.addOverLayImage(a),this.toggleScroll()},addOverLayImage:function(a){var b=$(a.target).attr("src");this.overlayImage.attr("src",b),this.checkImgSizeAndCenter()},closeOverlay:function(){null!=this.overlayImage.attr("src")&&(this.overlay.hide(),this.toggleScroll())},toggleScroll:function(){var a=$("body");"stop-scrolling"==a.attr("class")?a.removeClass("stop-scrolling"):a.addClass("stop-scrolling")},setOverlayLocation:function(){this.overlay.css("top",window.pageYOffset.toString()+"px"),this.overlay.css("left",window.pageXOffset.toString()+"px")},centerOverlayImg:function(){var a=(window.innerHeight-$(this.overlayImage).height())/2;this.overlayImage.css("margin-top",a.toString()+"px")},checkImgSizeAndCenter:function(){var a=$(this.overlayImage).height();a<window.innerHeight?this.centerOverlayImg():this.overlayImage.css("margin-top","0")}};var b=new a;b.bindEvents()}),$(document).ready(function(){function a(){this.searchInput=$("#searchPhoto"),this.list=$("#theList")}a.prototype={bindEvents:function(){this.searchInput.on("keyup",function(){this.filter()}.bind(this))},addToolTip:function(){$("#searchPhoto").after("<h3 id='toolTip'>Cant sort and search at the same time. Turn off sort.</h3>"),setInterval(function(){$("#toolTip").remove()},3e3)},filter:function(){if("active"===$("#sort").attr("class")){if($("#toolTip").length>0)return;this.addToolTip()}else{var a=this.searchInput.val();$("#theList li").show();for(var b=new RegExp(a,"i"),c=$("#theList li p"),d=c.length-1;d>=0;d--)-1==$(c[d]).text().search(b)&&$(c[d]).parent().hide()}}};var b=new a;b.bindEvents()}),$(document).ready(function(){function a(){this.images=$("#theList"),this.sort=$("#sort")}a.prototype={init:function(){this.sortPhotos(),this.bindEvents()},bindEvents:function(){this.sort.on("click",function(a){this.toggleSort()}.bind(this)),this.images.delegate("img","click",function(a){"active"!=$("#sort").attr("class")}.bind(this))},sortPhotos:function(){this.images.disableSelection(),this.images.sortable({revert:!0,opacity:.6}),this.saveSort()},sortDisable:function(){this.images.sortable("disable")},sortEnable:function(){this.images.sortable("enable")},toggleSort:function(){$("#theList li").show(),"active"===this.sort.attr("class")?(this.sort.removeClass("active"),this.sortDisable()):(this.sort.addClass("active"),this.sortEnable())},saveSort:function(){}};var b=new a;b.init()});