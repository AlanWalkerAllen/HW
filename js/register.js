class Register {
    constructor(){
        this.user = document.querySelector("#user");
        this.pass = document.querySelector("#pass");
        this.cpass = document.querySelector("#cpass");
        this.register = document.querySelector(".button");
        this.tips = document.querySelectorAll(".tips");
        this.success = document.querySelector(".success");

        this.addEvent();
    }
    addEvent(){
        let that = this;
        this.register.onclick = function () {
            that.u = that.user.value;
            that.p = that.pass.value;
            that.cp = that.cpass.value;
            that.setData();
        }
        this.user.oninput = function () {
            that.u = that.user.value;
            that.selectData()
        }
    }
    selectData(){
        this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [];
        let b = this.msg.some((val)=>{
            return val.user === $.trim(this.u);
        })
        if(b){
            this.tips[0].innerHTML = "用户名已存在";
        }else {
            this.tips[0].innerHTML = "";
        }
    }
    setData(){
        if(this.u.trim() == ""){
            this.tips[0].innerHTML = "用户名不能为空";
            return;
        }else if(this.p.trim() == ""){
            this.tips[1].innerHTML = "密码不能为空";
            return;
        }else if(this.cp.trim() == ""){
            this.tips[2].innerHTML = "密码不能为空";
            return;
        }
        this.msg = localStorage.getItem("userMsg") ? JSON.parse(localStorage.getItem("userMsg")) : [];
        this.msg.push({
            user:this.u,
            pass:this.p,
            onoff:0
        })
        localStorage.setItem("userMsg",JSON.stringify(this.msg));

        this.success.innerHTML = "恭喜注册功能，3秒后自动跳转跳转，<a href='login.html'>立即跳转</a>";
        setTimeout(()=>{
            location.href = "login.html";
        },3000);
    }
}
new Register();