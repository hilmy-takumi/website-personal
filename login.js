const logintext=document.querySelector(".title-text .login");
const loginform=document.querySelector("form.login");
const loginbtn=document.querySelector("label.login");
const signupbtn=document.querySelector("label.signup");
const signuplink=document.querySelector("form .signup-link a");

signupbtn.onclick=(()=>{
    loginform.style.marginleft="-50%";
    logintext.style.marginleft="-50%";
});
loginbtn.onclick=(()=>{
    loginform.style.marginleft="-50%";
    logintext.style.marginleft="-50%";
});
signuplink.onclick=(()=>{
    signupbtn.click();
    return false
});