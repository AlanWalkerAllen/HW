class Register {
    constructor(){
        this.user = document.querySelector("#user");
        this.pass = document.querySelector("#pass");
        this.cpass = document.querySelector("#cpass");
        this.register = document.querySelector(".button");
        this.tips = document.querySelector(".tips");
        this.success = document.querySelector(".success");

        this.addEvent();
    }
    addEvent(){
        let that = this;
        this.register.onclick = function () {
            console.log(1);
            that.u = that.user.value;
            that.p = that.pass.value;
            that.cp = that.cpass.value;

            that.setData();
        }
    }
    setData(){
        this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [];
        let b = this.msg.some((val)=>{
            return val.user === this.u;
        })
        if(b){
            this.tips.innerHTML = "用户名已存在";
        }else {
            this.msg.push({
                user:this.u,
                pass:this.p,
                onoff:0
            })
            localStorage.setItem("userMsg",JSON.stringify(this.msg));

            this.success.innerHTML = "恭喜注册功能，3秒后自动跳转跳转，<a href='login.html'>立即跳转</a>"
        }
    }
}
new Register();