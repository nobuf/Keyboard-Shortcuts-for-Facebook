
$(document).ready(function(){
    var k = new Kibo();
    var cur = -1;
    var blueBarHeight = $('#blueBar').height(); // floated bar
    var isFocus = function(){
        return $('input,textarea').is(':focus');
    };
    var doScroll = function(){
        var $li = $('#home_stream li.uiUnifiedStory:eq(' + cur + ')');
        if (!$li) {
            cur = 0;
            return;
        }
        $(window).scrollTop($li.offset().top-blueBarHeight);
    };
    k.up('j', function(){
        if (isFocus()) {
            return true;
        }
        cur++;
        doScroll();
    }).up('k', function(){
        if (isFocus()) {
            return true;
        }
        if (cur <= 0) {
            return;
        }
        cur--;
        doScroll();
    }).up('u', function(){
        if (isFocus()) {
            return true;
        }
        cur = 0;
        doScroll();
    });
});
