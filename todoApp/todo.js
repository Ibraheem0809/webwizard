let input = document.getElementById("input");
let list = document.querySelector(".work-list");

function Add(){
    if(input.value == ""){
        alert("Enter task first");
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`<div class="task">
                            <div class="value">${input.value}</div>
                            <button class="del">Del</button>
                        </div>`;
        list.appendChild(newEle);
        input.value = "";
        let del = document.querySelector(".del");
        del.addEventListener("click",()=>{
            newEle.remove();
        })
    }
}