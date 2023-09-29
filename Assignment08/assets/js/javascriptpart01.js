var letter01="A";
var letter02="B";
var letter03="C";
var letter04="D";
var letter05="E";
var letter06="F";
let interval=null;
const letters=[letter01,letter02,letter03,letter04,letter05,letter06]

$("span").eq(0).html(letters[1]);
$("span").eq(1).html(letters[2]);
$("span").eq(2).html(letters[3]);
$("span").eq(3).html(letters[4]);
$("span").eq(4).html(letters[5]);
$("span").eq(5).html(letters[0]);

function letterchange(){
    letters.unshift(letters[5]);
}

const letterQueue =()=>{
    $("span").eq(0).html(letters[1]);
    $("span").eq(1).html(letters[2]);
    $("span").eq(2).html(letters[3]);
    $("span").eq(3).html(letters[4]);
    $("span").eq(4).html(letters[5]);
    $("span").eq(5).html(letters[0]);
}
$('button').eq(0).on('click',()=>{
    if(interval===null){
        interval=setInterval(letterQueue,1000);
        interval=setInterval(letterchange,1000);
    }
});

$('button').eq(1).on('click',()=>{
    clearInterval(interval);
    interval=null;
});
