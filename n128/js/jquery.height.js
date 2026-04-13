// ウインドウの高さが全体の高さより低い場合の処理
$(window).on('load resize', function () {
    var ww = window.innerWidth ? window.innerWidth : $(window).width(),
        wh = window.innerHeight ? window.innerHeight: $(window).height(),
        box = $('#box').height();
    if (wh <= box && 600 <= ww) {
        $('#box').css('position', 'relative');
        $('#box').css('height', 'auto');
    } else {
        $('#box').css('position', '');
        $('#box').css('height', '');
    }
});