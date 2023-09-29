var style01={background: "yellow"}
var style02={background: "green"}
var style03={background: "blue"}
var style04={background: "purple"}
var style05={background: "#6499E9"}
var style06={background: "red"}

let interval=null;
const style=[style01,style02,style03,style04,style05,style06];

    $('#up').css(style[0])
    $('.center').eq(0).css(style[1]);
    $('.center').eq(1).css(style[2]);
    $('.center').eq(2).css(style[3]);
    $('.center').eq(3).css(style[4]);
    $("#down").css(style[5]);

    function color(){
        style.unshift(style[5]);

    }
const queue =()=>{
        $('#up').css(style[1])
        $('.center').eq(0).css(style[2]);
        $('.center').eq(1).css(style[3]);
        $('.center').eq(2).css(style[4]);
        $('.center').eq(3).css(style[5]);
        $('#down').css(style[0]);
}
$('button').eq(0).on('click',()=>{
    if(interval===null){
        interval=setInterval(color,1000);
        interval=setInterval(queue,1000);
    }
});

$('button').eq(1).on('click',()=>{
    clearInterval(interval);
    interval=null;
});