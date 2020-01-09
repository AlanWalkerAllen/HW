define(['jquery'],function ($) {
    function isLogin() {
        var onload = document.querySelector('.onload');
        var inload = document.querySelector('.inload');
        var person = document.querySelector('.person');
        var exit = document.querySelector('.exit');
        var pa = document.querySelector('.info_a');
        var objExit = document.querySelector(".exit_a");

        var msg = window.localStorage.getItem('userMsg') ? JSON.parse(window.localStorage.getItem('userMsg')) : [{user:"",pass:"",onoff:0}];

        var i=0;
        var on = msg.some((val,idx)=>{
            i = idx;
            return val.onoff != 0;
        })

        if(on){
            onload.style.display = "none";
            inload.style.display = "none";
            person.style.display = "block";
            exit.style.display = "block";
        }else {
            onload.style.display = "block";
            inload.style.display = "block";
            person.style.display = "none";
            exit.style.display = "none";
        }
        pa.innerHTML = msg[i].user;

        objExit.onclick = function () {
            msg[i].onoff = 0;
            window.localStorage.setItem("userMsg",JSON.stringify(msg));
            location.reload();
        }
    }

    return{
        isLogin
    }
})