(function($){skel.breakpoints({xlarge:'(max-width: 1680px)',large:'(max-width: 1280px)',medium:'(max-width: 980px)',small:'(max-width: 736px)',xsmall:'(max-width: 480px)'});$(function(){var $window=$(window),$body=$('body');$body.addClass('is-loading');$window.on('load',function(){window.setTimeout(function(){$body.removeClass('is-loading');},0);});if(skel.vars.mobile)
$body.addClass('is-touch');$('form').placeholder();skel.on('+medium -medium',function(){$.prioritize('.important\\28 medium\\29',skel.breakpoint('medium').active);});$('.scrolly').scrolly({speed:2000});$('#nav > ul').dropotron({alignment:'right',hideDelay:350});$('<div id="titleBar">'+
'<a href="#navPanel" class="toggle"></a>'+
'<span class="title">'+$('#logo').html()+'</span>'+
'</div>').appendTo($body);$('<div id="navPanel">'+
'<nav>'+
$('#nav').navList()+
'</nav>'+
'</div>').appendTo($body).panel({delay:500,hideOnClick:true,hideOnSwipe:true,resetScroll:true,resetForms:true,side:'left',target:$body,visibleClass:'navPanel-visible'});if(skel.vars.os=='wp'&&skel.vars.osVersion<10)
$('#titleBar, #navPanel, #page-wrapper').css('transition','none');if(skel.vars.browser=='ie'||skel.vars.mobile){$.fn._parallax=function(){return $(this);};}
else{$.fn._parallax=function(){$(this).each(function(){var $this=$(this),on,off;on=function(){$this.css('background-position','center 0px');$window.on('scroll._parallax',function(){var pos=parseInt($window.scrollTop())-parseInt($this.position().top);$this.css('background-position','center '+(pos*-0.15)+'px');});};off=function(){$this.css('background-position','');$window.off('scroll._parallax');};skel.on('change',function(){if(skel.breakpoint('medium').active)
(off)();else
(on)();});});return $(this);};$window.on('load resize',function(){$window.trigger('scroll');});}
var $spotlights=$('.spotlight');$spotlights._parallax().each(function(){var $this=$(this),on,off;on=function(){$this.css('background-image','url("'+$this.find('.image.main > img').attr('src')+'")');if(skel.canUse('transition')){var top,bottom,mode;if($this.hasClass('top')){mode='top';top='-20%';bottom=0;}
else if($this.hasClass('bottom')){mode='bottom-only';top=0;bottom='20%';}
else{mode='middle';top=0;bottom=0;}
$this.scrollex({mode:mode,top:top,bottom:bottom,initialize:function(t){$this.addClass('inactive');},terminate:function(t){$this.removeClass('inactive');},enter:function(t){$this.removeClass('inactive');},});}};off=function(){$this.css('background-image','');if(skel.canUse('transition')){$this.unscrollex();}};skel.on('change',function(){if(skel.breakpoint('medium').active)
(off)();else
(on)();});});var $wrappers=$('.wrapper');$wrappers.each(function(){var $this=$(this),on,off;on=function(){if(skel.canUse('transition')){$this.scrollex({top:250,bottom:0,initialize:function(t){$this.addClass('inactive');},terminate:function(t){$this.removeClass('inactive');},enter:function(t){$this.removeClass('inactive');},});}};off=function(){if(skel.canUse('transition'))
$this.unscrollex();};skel.on('change',function(){if(skel.breakpoint('medium').active)
(off)();else
(on)();});});var $banner=$('#banner');$banner._parallax();});})(jQuery);