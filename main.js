const todos = [];
let count = 0;
let todocount = 0;

const todobutton = document.querySelector(".input_assigment");
todobutton.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getnewtodo();
    remdelete();
    addtodos();
    donetodos();
  }
});


function getnewtodo() {
  const assinput = document.querySelector(".input_assigment");
  const valueinput = assinput.value;
  const lastdiv = document.querySelector(".newtext");

  if (count == 0) {
    lastdiv.innerHTML += `<ol>
    <li id=${Date.now()}> <div> ${valueinput} </div><div><button class="rem">remove</button> <button class="addbutton">add</button></div>
    </li>
    </ol>`;
    assinput.value = "";
    count++;
  } else {
    const allol = document.querySelectorAll("ol");

    // Convert buttons NodeList to an array
    const olarray = Array.from(allol);
    const lastol = olarray.pop();
    lastol.innerHTML += ` <li> <div> ${valueinput} </div><div><button class="rem">remove</button> <button class="addbutton">add</button></div>
</li>`;
    assinput.value = "";
  }
}

const remdelete = () => {
  let rembutton = document.querySelectorAll(".rem");
  const remli = document.querySelectorAll("li");

  for (let i = 0; i < rembutton.length; i++) {
    rembutton[i].addEventListener("click", function (e) {
      remli[i].remove();
    });
  }
};
const addtodos = () => {
  const addbutton = document.querySelectorAll(".addbutton");
  const liaddbutton = document.querySelectorAll("li");
  for (let i = 0; i < addbutton.length; i++) {
    addbutton[i].addEventListener("click", function (e) {
      const valinli =
        addbutton[i].parentNode.parentNode.querySelector("div").textContent;
      todos[todocount] = {
        style: valinli,
        id: Date.now(),
      };
      liaddbutton[i].remove();
      //console.log(todos);
      todocount++;
    });
  }
};

const donetodos = () => {
 
let x=0;
  const donebutton = document.querySelector(".donebutton");
   const olelement = document.querySelector("ol");
   
  donebutton.addEventListener('click',function (e) {
    olelement.remove();
    //olelement.innerHTML="";
    const showtodo=document.querySelector(".newtext");
//console.log(showtodo);
   // showtodo.insertAdjacentHTML=(todos);
   console.log(todos);
   
    todos.forEach(function(e){
showtodo.innerHTML += e.style+"<br>";

    });
   
    count=0;
   
  });
  
}
