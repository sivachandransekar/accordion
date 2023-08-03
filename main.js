var question=document.querySelectorAll(".accordques");
//console.log(question);


question.forEach(function(ques){
    //console.log(ques);
    ques.addEventListener("click",function(){
        if(ques.nextElementSibling.classList.contains("paras")){
            ques.nextElementSibling.classList.remove("paras");
            ques.querySelector("i").style.transform="rotate(180deg)";           
        }


        else{
            ques.nextElementSibling.classList.add("paras");
            ques.querySelector("i").style.transform="rotate(0deg)";
        }
    })
})