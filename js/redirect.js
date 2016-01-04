$(function() {
 var ipad = true;               // Set to false to not redirect on iPad.
var other_tablets = true;  // Set to false to not redirect on other tablets.
var mobile_domain = 'immense-forest-3648.bmobilized.com';
var path = encodeURIComponent(location.href);
var page = "?&url=" + path;
document.write('<link rel="alternate" media="only screen and (max-device-width: 1024px)" href="' + location.protocol + '//' + mobile_domain + page + '" >');
document.write(unescape("%3Cscript src='" + location.protocol + "//s3.amazonaws.com/me.static/js/me.redirect.min.js' type='text/javascript'%3E%3C/script%3E"));
});