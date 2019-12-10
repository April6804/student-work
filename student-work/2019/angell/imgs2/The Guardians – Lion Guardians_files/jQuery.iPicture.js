/*
 * jQuery UI iPicture 1.0.0
 *
 * Copyright 2011 D'Alia Sara
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 *	jquery.ui.draggable.js
 *	jquery.ui.droppable.js
 *  jquery.ui.effects.core.js
 */
 
 (function( $ ) {

  $.widget( "justmybit.iPicture", {
	options: {
		animation:false,
		/*animationBg: "bgblack",
		animationType:"ltr-slide",*/
		button: "moreblack",
		modify:false,
		initialize: false,
		moreInfos: {},
		pictures: []     
	},

	// Set up the widget
	_create: function() {
		var self = this;
		if(self.options.initialize){
			this.initialization();
		}else{
		
		//each picture
		$.each(self.options.pictures, function( index, value ) {
			var picture = jQuery( '#'+value );
			var info = (self.options.moreInfos[value]);
			if(info!=undefined){
				// each more infos on that picture
				$.each(info, function( index, value ){
					var div = jQuery('<div id="'+value.id+'" class="more more32 tooltip tooltip-effect-1"></div>' )
						.css('top',value.top).css('left',value.left).appendTo(picture);
					var imgButton;
					if(self.options.modify){
					  imgButton = jQuery('<div class="imgButtonDrag '+self.options.button+'" title="drag in the picture"></div>').appendTo(div);
					  var divInput = jQuery('<div class="inputDiv"></div>').insertAfter(imgButton);
					  var input = jQuery('<input type="text" title="type here this tooltip" value="'+value.descr+'" />').appendTo(divInput);
					  jQuery('<p class="pDelete" title="delete this tooltip"></p>').insertAfter(input).bind('click', function() {
					    jQuery(div).remove();
					  });
					}else{
					  imgButton = jQuery('<div class="imgButton '+self.options.button+'">'+value.id+'</div>').appendTo(div);
					  jQuery('<span class="descr tooltip-content"><span class="tooltip-front"><img src="'+value.theimg+'" alt="user4"/></span><span class="tooltip-back"><a href="'+value.theimg+'" class="mk-lightbox lightbox-push-top"><i class="mk-jupiter-icon-plus-circle"></i></a></span></span>').appendTo(div);
					}
					// href populating
					if(value.href){
						jQuery('#'+value.id+' a').attr('href',value.href);
					}
					    
				});
			}
		});
		//move option management
		}
	},
	
	initialization: function(){
		var self = this;
		
		$.each(self.options.pictures, function( index, value ) {
			var picture = jQuery( '#'+value );

			// list of buttons to change tooltip color
			var listContainer = jQuery('<div class="listContainer"><ul><li class="'+value+'-button '+self.options.button+'" title="drag in the picture"></li></ul><div class="bgList" title="choose another background for tooltips"></div><div class="buttonsList" title="choose another color for tooltips"></div></div>').appendTo('#'+value);
			var buttonsDropp = jQuery('<div class="buttonsDropp"></div>').insertAfter(listContainer);
			jQuery('<ul class="inline buttons">'
				+'<li id="moregold" class="moregold"></li>'
			  +'<li id="moregrey" class="moregrey"></li>'
				+'<li id="moreblack" class="moreblack"></li>'
				+'<li id="moredarkblue" class="moredarkblue"></li>'
				+'<li id="moreblue" class="moreblue"></li>'
				+'<li id="morelightblue" class="morelightblue"></li>'
				+'<li id="morelightblue2" class="morelightblue2"></li>'
				+'<li id="morewatergreen" class="morewatergreen"></li>'
				+'<li id="morelightgreen" class="morelightgreen"></li>'
				+'<li id="moregreen" class="moregreen"></li>'
				+'<li id="moreyellow" class="moreyellow"></li>'
				+'<li id="moreorange" class="moreorange"></li>'
				+'<li id="morered" class="morered"></li>'
				+'<li id="morepurple" class="morepurple"></li>'
				+'<li id="moreviolet" class="moreviolet"></li>'
				+'<li id="morelightviolet" class="morelightviolet"></li>'
				+'<li id="morefucsia" class="morefucsia">'
				+'<li id="beadgold" class="beadgold"></li>'
				+'<li id="beadgrey" class="beadgrey"></li>'
				+'<li id="beadblack" class="beadblack"></li>'
				+'<li id="beaddarkblue" class="beaddarkblue"></li>'
				+'<li id="beadblue" class="beadblue"></li>'
				+'<li id="beadlightblue" class="beadlightblue"></li>'
				+'<li id="beadlightblue2" class="beadlightblue2"></li>'
				+'<li id="beadwatergreen" class="beadwatergreen"></li>'
				+'<li id="beadlightgreen" class="beadlightgreen"></li>'
				+'<li id="beadgreen" class="beadgreen"></li>'
				+'<li id="beadyellow" class="beadyellow"></li>'
				+'<li id="beadorange" class="beadorange"></li>'
				+'<li id="beadred" class="beadred"></li>'
				+'<li id="beadpurple" class="beadpurple"></li>'
				+'<li id="beadviolet" class="beadviolet"></li>'
				+'<li id="beadlightviolet" class="beadlightviolet"></li>'
				+'<li id="beadfucsia" class="beadfucsia"></li>'
			  +'</ul>').appendTo(buttonsDropp);
			chooseButtons = jQuery('ul.buttons').find('li');
			$.each(chooseButtons, function( index, button ){
				jQuery(button).bind('click', function(){
				  $.each(self.options.pictures, function( index, pic ) {
				    jQuery('.'+pic+'-button').removeClass(self.options.button);
					  jQuery('.'+pic+'-button').addClass(button.id);
				  });
					jQuery(buttonsDropp).css('display','none');
					buttons = self.element.find('.imgButtonDrag');
					$.each(buttons, function( index, value ){
						jQuery(value).removeClass(self.options.button);
						jQuery(value).addClass(button.id);
					});
					self.options.button=button.id;
					clickCounter=0;
					return false;
				});
				jQuery(button).bind('mouseover', function(){
					jQuery(button).css('width','36');
					jQuery(button).css('height','36');
					jQuery(button).css('background-size','36px');
					jQuery(button).css('z-index','10');
				});
				jQuery(button).bind('mouseout', function(){
				  jQuery(button).css('width','32');
					jQuery(button).css('height','36');
					jQuery(button).css('background-size','32px');
					jQuery(button).css('z-index','1');
				});
			});
			var clickCounter=0;
			jQuery('#'+value +' .buttonsList').bind('click', function(){
			  if(clickCounter==0){
			   jQuery(buttonsDropp).css('display','block');
			   clickCounter=1;
			  }else if(clickCounter==1){
			    jQuery(buttonsDropp).css('display','none');
			    clickCounter=0;
			  }
			  return false;
			});
		
		// list of backgrounds to change tooltip background
		if (self.options.animation) {
		  jQuery('.listContainer').addClass(self.options.animationBg);
			var bgDropp = jQuery('<div class="bgDropp"></div>').insertAfter(listContainer);
			jQuery('<ul class="inline bg">'
				+'<li id="bgblack" class="bgblack noborder"></li>'
			  +'<li id="bgwhite" class="bgwhite noborder"></li>'
			  +'</ul>').appendTo(bgDropp);
			chooseBg = jQuery('ul.bg').find('li');
			$.each(chooseBg, function( index, bg ){
				jQuery(bg).bind('click', function(){
				  jQuery('.listContainer').removeClass(self.options.animationBg);
				  jQuery('.listContainer').addClass(bg.id);
					jQuery(bgDropp).css('display','none');
					more = self.element.find('.more');
				  $.each(more, function( index, value ){
					  jQuery(value).removeClass(self.options.animationBg);
					  jQuery(value).addClass(bg.id);
				  });
					self.options.animationBg=bg.id;
				  
					clickCounter2=0;
					return false;
				});
				jQuery(bg).bind('mouseover', function(){
					jQuery(bg).css('border','1px solid red');
					jQuery(bg).css('z-index','10');
				});
				jQuery(bg).bind('mouseout', function(){
				  jQuery(bg).css('border','0');
					jQuery(bg).css('z-index','1');
				});
			});
			var clickCounter2=0;
			jQuery('#'+value +' .bgList').bind('click', function(){
			  if(clickCounter2==0){
			   jQuery(bgDropp).css('display','block');
			   clickCounter2=1;
			  }else if(clickCounter2==1){
			    jQuery(bgDropp).css('display','none');
			    clickCounter2=0;
			  }
			  return false;
			});
		} else{
		  jQuery('#'+value +' .bgList').bind('click', function(){
			  alert('animation is off, set animation:true');
			});
		}
			
		});
		if(self.options.initialize){
			jQuery('<div class="buttonSave"><p>Initialization mode</p><input type="button" value="save" class="save" title="get code!"/></div>').prependTo(self.element);
			jQuery('<div class="buttonSave"><p>Initialization mode</p><input type="button" value="save" class="save" title="get code!"/></div>').appendTo(self.element);
		}
		if(self.options.modify){
			jQuery('<div class="buttonSave"><p>Modify mode</p><input type="button" value="save" class="save" title="get code!"/></div>').prependTo(self.element);
			jQuery('<div class="buttonSave"><p>Modify mode</p><input type="button" value="save" class="save" title="get code!"/></div>').appendTo(self.element);
		}
		jQuery('#'+self.element.attr('id')+' .save').bind('click', function() {
		var moreInfos = 'moreInfos:{';
			//each picture
		$.each(self.options.pictures, function( index, value ) {
			if(index>0){
				moreInfos=moreInfos+',';
			}
			var picture = jQuery( '#'+value );
			var divs = jQuery(picture).find('.more32');
			moreInfos = moreInfos+'"'+value+'":[';
			// each more infos on that picture
			$.each(divs, function( index, value ){
				if(index>0){
					moreInfos=moreInfos+',';
				}
				descr=jQuery(value).find('input').val();
				if(descr==undefined){
					descr="";
				}
				topPosition=jQuery(value).css('top');
				leftPosition=jQuery(value).css('left');
				moreInfos = moreInfos+'{"id":"'+value.id+'","descr":"'+descr+'","top":"';
				moreInfos = moreInfos+topPosition+'","left":"'+leftPosition+'"';
				
				if(value.href){
					moreInfos=moreInfos+',"href":"'+jQuery('#'+value.id+' a').attr('href')+'"';
				}
				moreInfos=moreInfos+'}';
			});
			moreInfos=moreInfos+']';
		});
		moreInfos=moreInfos+'}';
		if(self.options.animation){
		  alert('animation: true, animationType: "'+self.options.animationType+'", animationBg: "'+self.options.animationBg+'", button: "'+self.options.button+'", '+moreInfos);
		}else{
		  alert('animation: false, button: "'+self.options.button+'", '+moreInfos);
		}
		});
	},
	
	});
  
}( jQuery ) );

