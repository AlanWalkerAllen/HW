class Login {
    constructor(){
        this.user = document.querySelector("#user");
        this.pass = document.querySelector("#pass");
        this.login = document.querySelector(".button");
        this.tips = document.querySelector(".first");
        this.span = document.querySelector(".phone span");

        this.addEvent();
    }
    addEvent(){
        let that = this;
        this.login.onclick = function () {
            that.u = that.user.value;
            that.p = that.pass.value;
            that.getData();
        }
    }
    getData(){
        this.msg = window.localStorage.getItem("userMsg") ? JSON.parse(window.localStorage.getItem("userMsg")) : [];

        let b = true;
        for(let i=0;i<this.msg.length;i++){
            if(this.msg[i].user === this.u){
                b = false;
                if(this.msg[i].pass === this.p){
                    this.span.innerHTML = "登陆成功，3秒后自动跳转到首页，<a href='index.html'>立即跳转</a>";
                    setTimeout(()=>{
                        location.href = "index.html";
                    },3000);

                    this.msg[i].onoff = 1;
                    localStorage.setItem("userMsg",JSON.stringify(this.msg));
                }else {
                    this.tips.style.display = "block";
                    this.user.value = "";
                    this.pass.value = "";
                }
                break;
            }
        }
        if (b){
            this.span.innerHTML = "用户名不存在，请先<a href='register.html'>注册</a>"
        }
    }
}

new Login();