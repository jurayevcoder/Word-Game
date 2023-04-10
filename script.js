let quti = [];
let f_bal = 0;
let k_bal = 0; 
const SR = new webkitSpeechRecognition();
SR.lang = "eng-ENG";
mic.onclick = (e) => {
  SR.start();
};

SR.onresult = (event) => {
  let soz = event.results[0][0].transcript;
  soz = soz.split(' ');
  
  if (quti.length >= 2){
    if (!quti.includes(soz[0]) && quti[quti.length-1][quti[quti.length-1].length-1] == soz[0][0]){
      quti.push(soz[0]);
      fball.textContent = f_bal += 5;
      searchInput.value = soz[0];
      list.innerHTML += `<li>${soz[0]}</li> <br>`;
    }
    else {
      searchInput.value = 'You lost!';
      list.innerHTML += `<li>${soz[0]}</li> <br>`;
      fball.textContent = 0
      f_bal = 0
      return;
    }
  }
  else {
    quti.push(soz[0])
    fball.textContent = f_bal += 5;
    searchInput.value = soz[0];
    list.innerHTML += `<li>${soz[0]}</li> <br>`;
  }

  let lapm = true;
  c
  soz.map((s=>{
      if(!sozlar.includes(s) && s.length != 1)sozlar.push(s)
  }))

  let setTimeOutResult = null;
  setTimeOutResult = setTimeout(()=>{
    for (let i of sozlar){
      if (soz[0][soz[0].length-1] == i[0] && soz[0] != i && !quti.includes(i)){
        quti.push(i);
        kball.textContent = k_bal += 5;
        searchInput.value = i;
        list.innerHTML += `<li>${i}</li>` + `<br>`;
        lapm = false;
        break;
      }
    }
    if (lapm){
      searchInput.value = 'You won!';
      kball.textContent = 0;
      k_bal = 0;
    }
    window.localStorage.setItem("sozlar",JSON.stringify(sozlar));
    
  }, 3000)
  
};