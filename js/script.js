document.addEventListener("DOMContentLoaded",function(){function a(){this.photosList=$("#theList"),this.albumList="albumList",this.form=$("form"),this.clearAllBtn=$("#clearAll"),this.photoTmp=$("#photo-temp").html(),this.deleteBtn=$(".deleteBtn")}a.prototype={init:function(){this.bindEvents(),this.loadAlbum()},loadAlbum:function(){var a=localStorage.getItem(this.albumList);if(a){this.photosList.html(""),this.photosList.append(a);$("#photoItem")}},bindEvents:function(){this.form.on("submit",function(a){this.addPhoto(a)}.bind(this)),this.clearAllBtn.on("click",function(a){this.clearAll(a)}.bind(this)),this.photosList.delegate("li","mouseover",function(a){var b=$(a.target).find("span");b.show(),this.hideDeleteBtn(b)}.bind(this)),this.photosList.delegate(this.deleteBtn,"click",function(a){a.preventDefault(),$(a.target).closest("li").remove(),this.saveList()}.bind(this))},hideDeleteBtn:function(a){this.photosList.delegate("li","mouseout",function(b){a.hide()}.bind(this))},saveList:function(){localStorage.setItem(this.albumList,theList.innerHTML)},clearAll:function(a){a.preventDefault(),localStorage.clear(),location.reload()},addPhoto:function(a){a.preventDefault();var b=$("form #photoItemImg").val(),c=$("form #photoItemTitle").val(),d={img:b,title:c},d=this.buildPhoto(d);this.photosList.append(d),this.resetForm(),this.saveList()},buildPhoto:function(a){var b=this.photoTmp,c=Handlebars.compile(b);return c(a)},resetForm:function(){$("form")[0].reset(),$("#photoItem").focus()},sortPhotos:function(){},"delete":function(){}};var b=new a;b.init()});