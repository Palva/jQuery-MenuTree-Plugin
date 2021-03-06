// 
/*!
 * jquery.plugin.menuTree.js v0.8
 * Copyright 2010, Bill Heaton http://pixelhandler.com
 *
 * Requires jquery version 1.4
 * http://jquery.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://docs.jquery.com/License
 *
 * Sat May 8 1:42 GMT-8:00
 */
(function($){$.fn.menuTree=function(options){var opts=$.extend({},$.fn.menuTree.defaults,options);$.fn.menuTree.defaults={animation:false,handler:'css',speed:'fast',listElement:'ul',anchor:'a[href^="#"]'};$.fn.menuTree.mtParent=$(this);$.fn.menuTree.mtTargets=$.fn.menuTree.mtParent.find(opts.anchor);function reveal(element){var $reveal=$(element);switch(opts.listElement){case"dd":$reveal.mtReveal=$reveal.parent().next(opts.listElement);break;case"ol":$reveal.mtReveal=$reveal.next(opts.listElement);break;default:$reveal.mtReveal=$reveal.next(opts.listElement)}return $reveal.mtReveal}function clickHandler(event){var $target=$(event.target).closest('a','li');if(0===$target.size()){$target=$(event.target)}if(!$target.data('responsive')){return}event.preventDefault();$target.stop();if(!opts.animation){reveal($target).toggleClass('collapsed');$target.toggleClass('expanded').data('state','ready').trigger('statechange')}else{$target.data('state','transition').trigger('statechange');switch(opts.handler){case"slideToggle":reveal($target).slideToggle(opts.speed,function(){$(this).prev('.menuTree').toggleClass('expanded').blur().data('state','ready').trigger('statechange')}).toggleClass('collapsed');break;case"toggle":reveal($target).toggle(opts.speed,function(){$(this).prev('.menuTree').toggleClass('expanded').data('state','ready').trigger('statechange')}).toggleClass('collapsed');break;default:}}}$.fn.menuTree.controller=function(event){var $target=$(event.target);if($target.data('state')!='ready'){$target.data('responsive',false)}else{$target.data('responsive',true);if($target.next(opts.listElement).find('.expanded').length>0){$target.next(opts.listElement).find('.expanded').each(function(){$(this).removeClass('expanded').next(opts.listElement).hide().addClass('collapsed')})}}};$.fn.menuTree.init=(function(){$.fn.menuTree.mtTargets.each(function(){var $localTarget=$(this);$localTarget.data({state:'ready',responsive:true});$localTarget.addClass('menuTree');reveal($localTarget).toggleClass('collapsed');$.fn.menuTree.mtParent.click(clickHandler);$.fn.menuTree.mtParent.bind('statechange',$.fn.menuTree.controller)})});return $.fn.menuTree.init()}})(jQuery);
