    
    
    
    
    
    
    

    ///////////////create tow divs to input and buttonh////////////
    
    const InDiv=document.createElement('div');
    const butDiv=document.createElement('div');
    const indivtodo=document.createElement('div');
    const indone=document.createElement('div');
    const Swidiv=document.createElement('div');
    butDiv.className=classname="todo_done"////////class name to button div
    
    //////////////make the divs chiled to the body///////////
    const aa=document.body.appendChild(InDiv);
    const bb=document.body.appendChild(butDiv);
    const cc=document.body.appendChild(Swidiv);
     //////////////create input and buttons///////////
    const InputTodo=document.createElement('input');
    const ButtonAdd=document.createElement('button');
    const ButtonDone=document.createElement('button'); 
    const SwitchColor=document.createElement('button');
 //////////////make the input and buttons  chiled to the divs///////////
    aa.appendChild(InputTodo);
    bb.append(ButtonAdd,ButtonDone);
    cc.appendChild(SwitchColor);
    document.
 //////////////make texst to input and buttons///////////
ButtonAdd.innerText=( "Todo");
    ButtonDone.innerText=("Done");
    SwitchColor.innerText=('Switch color mode');


// ShowBatton.addEventListener("click",(e)=>{
//   let inputVal = ShowInputn.value
// alert(inputVal);
//    });

 