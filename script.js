
$(document).ready(function(){
    var k = new Kibo();
    var cur = -1;
    var blueBarHeight = $('#blueBar').height(); // floated bar
    var isFocus = function(){
        return $('input,textarea').is(':focus');
    };
    var doScroll = function(){
        var $li = $('#home_stream li.uiUnifiedStory:eq(' + cur + ')');
        if ($li.length === 0) {
            cur = 0;
            return;
        }
        $(window).scrollTop($li.offset().top-blueBarHeight);
    };
    k.up(['j', 'k', 'u'], function(){
        if (isFocus()) {
            return true;
        }
        switch (k.lastKey()) {
            case 'j':
                cur++;
                break;
            case 'k':
                if (cur <= 0) {
                    return;
                }
                cur--;
                break;
            case 'u':
                cur = 0;
                break;
            default:
                break;
        }
        doScroll();
    });
});
