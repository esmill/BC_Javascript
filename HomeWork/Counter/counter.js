let decreaseBtn = document.getElementById('decreasebtn')
let counterNumber = document.getElementById('counterNumber')
let increaseBtn = document.getElementById('increasebtn')
let count = 0;
increaseBtn.onclick = function() {
  count += 1;
  counterNumber.innerText = count
}

decreaseBtn.onclick = function() {
  count -= 1;
  counterNumber.innerText = count
}


