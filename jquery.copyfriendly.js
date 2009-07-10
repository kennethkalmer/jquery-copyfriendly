/**
 * jQuery copy-friendly values
 *
 * Copyright (c) 2009 Kenneth Kalmer (http://www.opensourcery.co.za)
 *
 * http://github.com/kennethkalmer/jquery-copyfriendly
 *
 */
jQuery.fn.copyfriendly = function( options ){
  settings = jQuery.extend({
    klass: "borderless"
  }, options );

  $(this).each(function(){
    var content = $(this).text();
    $(this).html("<input type=\"text\" value=\"" + content + "\" class=\"" + settings.klass + "\" size=\"" + content.length + "\" />");
  });
}
