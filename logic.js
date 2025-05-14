// Set background
document.body.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgb(248, 192, 167) 100%)";

// Create and center heading
var heading = document.createElement("h1");
heading.innerText = "Memory Game";
heading.style.display = "flex";
heading.style.alignItems = "center";
heading.style.justifyContent = "center";
document.body.appendChild(heading);

// Create and center score paragraph
var para = document.createElement("p");
para.setAttribute("class", "score");
para.innerText = "Score:";
para.style.display = "flex";
para.style.alignItems = "center";
para.style.justifyContent = "center";
para.style.fontSize = "25px";
para.style.fontWeight = "bold";
document.body.appendChild(para);

// Create and center restart button
const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.alignItems = "center";
buttonContainer.style.marginTop = "20px";

const restartBtn = document.createElement("button");
restartBtn.innerText = "Restart Game";
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

// Create and center parent container
const parent = document.createElement("div");
parent.style.display = "flex";
parent.style.alignItems = "center";
parent.style.justifyContent = "center";
document.body.appendChild(parent);

// Create the game board container
var box = document.createElement("div");
box.setAttribute("class", "container"); // ✅ Important fix
box.style.width = "500px";
box.style.height = "500px";
box.style.display = "flex";
box.style.flexWrap = "wrap";
box.style.alignItems = "center";
box.style.justifyContent = "center";
parent.appendChild(box);

// Now it's to select the container
const boarddisplay = document.querySelector(".container");
const resultdisplay = document.querySelector(".score");

// Food card array
const foodArray = [
  { name: "burger", img: "Images/burger.jpg" },
  { name: "fries", img: "Images/fries.jpg" },
  { name: "Momos", img: "Images/Momos.jpg" },
  { name: "pizza", img: "Images/pizza.jpg" },
  { name: "sandwich", img: "Images/sandwich.jpg" },
  { name: "vegroll", img: "Images/vegroll.jpg" },
  { name: "burger", img: "Images/burger.jpg" },
  { name: "fries", img: "Images/fries.jpg" },
  { name: "Momos", img: "Images/Momos.jpg" },
  { name: "pizza", img: "Images/pizza.jpg" },
  { name: "sandwich", img: "Images/sandwich.jpg" },
  { name: "vegroll", img: "Images/vegroll.jpg" }
];

// Shuffle cards

foodArray.sort(() => 0.5 - Math.random()); 

let food_choosen = [];
let food_choosen_id = [];
let foodsWon = [];

generateboard();

function generateboard() {
  for (let i = 0; i < foodArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "Images/food bg.jpg");
    card.style.width = "100px";
    card.style.height = "100px";
    card.style.margin = "5px";
    card.setAttribute("data_id", i);
    card.addEventListener("click", flipcard);
    boarddisplay.appendChild(card);
  }
}

function flipcard() {
  const food_id = this.getAttribute("data_id");
  this.setAttribute("src", foodArray[food_id].img);
  food_choosen.push(foodArray[food_id].name);
  food_choosen_id.push(food_id);

  if (food_choosen.length === 2) {
    setTimeout(checkmatch, 500);
  }
}

function checkmatch() {
  const cards = document.querySelectorAll("img");
  const [firstId, secondId] = food_choosen_id;

  if (food_choosen[0] === food_choosen[1]) {
    cards[firstId].setAttribute("src", "Images/completed.png");
    cards[secondId].setAttribute("src", "Images/completed.png");
    cards[firstId].removeEventListener('click', flipcard);
    cards[secondId].removeEventListener('click', flipcard);
    foodsWon.push(food_choosen);
    resultdisplay.innerHTML = "Score: " + foodsWon.length;
  } else {
    cards[firstId].setAttribute("src", "Images/food bg.jpg");
    cards[secondId].setAttribute("src", "Images/food bg.jpg");
  }

  food_choosen = [];
  food_choosen_id = [];

  if (foodsWon.length === foodArray.length / 2) {
    alert("🎉 Congratulations! You completed the game!");
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
