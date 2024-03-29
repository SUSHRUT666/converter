const BASE_URL =
"https://open.er-api.com/v6/latest/USD"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load",() => {
  updateExchangeRate();
});
let m=document.querySelector("#man");
let curr="light";
m.addEventListener("click",()=>{
    if(curr=="light"){
        curr="dark";
        document.querySelector(".container").style.backgroundColor="black";
        document.querySelector("button").style.backgroundColor="skyblue";
        document.querySelector("#man").style.backgroundColor="black";
        document.querySelector("#man").style.borderColor="black";
        document.querySelector("#wwe").style.color="skyblue";
        document.querySelector("#wwe2").style.color="skyblue";
    }
    else{
        curr="light";
        document.querySelector(".container").style.backgroundColor="white";
        document.querySelector("button").style.backgroundColor="brown";
        document.querySelector("#man").style.backgroundColor="azure";
        document.querySelector("#man").style.borderColor="white";
        document.querySelector("#wwe").style.color="mediumvioletred";
        document.querySelector("#wwe2").style.color="mediumvioletred";
        
    }
}
);
        
    



    

    

