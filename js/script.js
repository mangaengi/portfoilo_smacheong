


/* 고정헤드 */
$(function(){
    let $header = $('.gnb'),
        $txt1 = $('.scrollTop')

    let headerTop = Math.floor($header.offset().top);
    

    //스크롤이벤트
    $(window).scroll(function(){
        let i = Math.floor($(this).scrollTop());
        $txt1.text(i)

        /* 버튼 이벤트 */
        if (headerTop < i) { 
            $header.addClass('on')
            $('.btnTop').fadeIn()
        } else {
            $header.removeClass('on')
            $('.btnTop').fadeOut()
        }
    });
});