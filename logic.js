
document.body.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgb(248, 192, 167) 100%)";

var heading=window.document.createElement("h1");
heading.innerText="Memory Game";
heading.style.display="flex";
heading.style.alignItems="center";
heading.style.justifyContent="center";  
window.document.body.appendChild(heading);

var para=window.document.createElement("p");
para.setAttribute("class","score");
para.innerText="Score:";
para.style.display="flex";
para.style.alignItems="center";
para.style.justifyContent="center";  
para.style.fontSize="25px";
para.style.fontWeight="bold";
window.document.body.appendChild(para);

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.alignItems = "center";
buttonContainer.style.marginTop = "20px";

const restartBtn = document.createElement("button");
restartBtn.innerText = "Restart Game";
restartBtn.style.display="inline-block";
restartBtn.style.alignItems="center";
restartBtn.style.justifyContent="center";


restartBtn.style.padding = "10px 20px";
restartBtn.style.margin = "20px";
restartBtn.style.fontSize = "18px";
restartBtn.style.cursor = "pointer";
restartBtn.style.borderRadius = "10px";
restartBtn.style.border = "none";
restartBtn.style.backgroundColor = "#ff7043";
restartBtn.style.color = "white";


restartBtn.addEventListener("click", restartGame);

buttonContainer.appendChild(restartBtn);
document.body.appendChild(buttonContainer);

const parent=window.document.createElement("div");
parent.style.display="flex";
parent.style.alignItems="center";
parent.style.justifyContent="center";
document.body.appendChild(parent);

var box=window.document.createElement("div");
box.setAttribute("class","container");
box.style.width="500px";
box.style.height="500px";
//box.style.border="2px solid";
box.style.display="flex";
box.style.flexWrap="wrap";
box.style.alignItems="center";
box.style.justifyContent="center";
parent.appendChild(box);
//window.document.body.appendChild(box);



const boarddisplay=document.querySelector(".container");
const resultdisplay=document.querySelector(".score");

const foodArray=[
    {name:"burger",
     img:"Images/burger.jpg"
    },

      {name:"fries",
     img:"Images/fries.jpg"
    },
      {name:"Momos",
     img:"Images/Momos.jpg"
    },
      {name:"pizza",
     img:"Images/pizza.jpg"
    },
      
      {name:"sandwich",
     img:"Images/sandwich.jpg"
    },
      {name:"vegroll",
     img:"Images/vegroll.jpg"
    },
    {name:"burger",
     img:"Images/burger.jpg"
    },

      {name:"fries",
     img:"Images/fries.jpg"
    },
      {name:"Momos",
     img:"Images/Momos.jpg"
    },
      {name:"pizza",
     img:"Images/pizza.jpg"
    },
      
        {name:"sandwich",
     img:"Images/sandwich.jpg"
    },
      {name:"vegroll",
     img:"Images/vegroll.jpg"
    },

]

foodArray.sort(()=>0.5-Math.random());

generateboard();

function generateboard(){
for(i=0; i<foodArray.length; i++)
    {
const card=document.createElement('img');
card.setAttribute('src', 'Images/food bg.jpg');
card.style.width="100px";
card.style.height='100px';
card.style.margin="5px";
card.setAttribute("data_id", i)
card.addEventListener('click', flipcard)
boarddisplay.appendChild(card);
}
console.log(foodArray);
}

food_choosen=[];
food_choosen_id=[];

function flipcard(){
    const food_id= this.getAttribute("data_id");
    this.setAttribute('src', foodArray[food_id].img);
  food_choosen_id.push(food_id);
food_choosen.push(foodArray[food_id].name);

if(food_choosen.length === 2){
    setTimeout(checkmatch,0)
}
}

foodsWon=[];

function checkmatch(){
    const cards=document.querySelectorAll('img')

    if(food_choosen[0]==food_choosen[1])
        {
        cards[food_choosen_id[0]].setAttribute('src', 'Images/completed.png');
        cards[food_choosen_id[1]].setAttribute('src', 'Images/completed.png');
        cards[food_choosen_id[0]].removeEventListener('click', flipcard);
        cards[food_choosen_id[1]].removeEventListener('click', flipcard);
        foodsWon.push(food_choosen);
        resultdisplay.innerHTML = "Score:"+foodsWon.length;
    }
    else{
        cards[food_choosen_id[0]].setAttribute('src', 'Images/food bg.jpg');
        cards[food_choosen_id[1]].setAttribute('src', 'Images/food bg.jpg');
    }

    food_choosen=[];
    food_choosen_id=[];

    if(foodsWon.length==foodArray.length/2)
    {

        alert("Congradulation... You have successfully completed the game")
        //resultdisplay.innerHTML="Congradulation... You have successfully completed the game"
    }
}

function restartGame() {
 
  boarddisplay.innerHTML = "";
  food_choosen = [];
  food_choosen_id = [];
  foodsWon = [];
  resultdisplay.innerHTML = "Score: 0";
 foodArray.sort(() => 0.5 - Math.random());
   generateboard();
}





