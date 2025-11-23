 const textarea=document.getElementById("text");
        const counter=document.getElementById("count");
        const limit=100;

        textarea.addEventListener("input",function(){
            let text=textarea.value;
            if(text.length>limit){
                textarea.value=text.slice(0,limit);
            }
            let remaining=limit-textarea.value.length;
            counter.textContent="Characters left: "+remaining;

            if(remaining>50){
                counter.style.color="green";
            }else if(remaining>20){
                counter.style.color="#FF4D00";
            }else{
                counter.style.color="red";
            }
        });