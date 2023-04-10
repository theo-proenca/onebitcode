const main = document.querySelector("main")
const root = document.querySelector(":root")
const keys = document.querySelector("div#keys")
const current = document.querySelector("div#current")
const start = document.getElementById("start")
const restart = document.querySelector("div#restart")
const players = document.querySelector("div#players")
const originalPlayersHTML = players.innerHTML
const originalKeysHTML = keys.innerHTML


main.addEventListener("click", function(event) {
  if (event.target.id === "start") {
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const keysBttn = document.querySelectorAll(".keysBttn")
    

    if (!p1.value || !p2.value) {
      alert("Ambos os jogadores devem ser informados!");
    } else if (p1.value === p2.value) {
      alert("Os nomes devem ser diferentes!");
    } else {
      players.innerHTML = "";
      const currentPlayer = document.createElement("h2");
      currentPlayer.innerHTML = "Current Player: " + p1.value + " (Player 1)";
      current.appendChild(currentPlayer);
      keys.style.filter = "none";
      const restartBttn = document.createElement("button");
      restartBttn.setAttribute("id", "restartBttn");
      restartBttn.textContent = "Restart Game";
      restart.appendChild(restartBttn);

      restartBttn.addEventListener("click", function restart(){
        players.innerHTML = originalPlayersHTML;
        current.innerHTML = "";
        restart.innerHTML = "";
        keys.innerHTML = originalKeysHTML;
        currentPlayer.innerHTML = "Current Player: " + p1.value + " (Player 1)";
        keys.style.filter = "blur(4px)";
      })

      keysBttn.forEach((button) => {
        button.addEventListener("click", function restart(){
          if (button.textContent === "") {
            if (currentPlayer.innerText === "Current Player: " + p1.value + " (Player 1)") {
              button.textContent = "X";
              currentPlayer.innerHTML = "Current Player: " + p2.value + " (Player 2)";
            } else {
              button.textContent = "O";
              currentPlayer.innerHTML = "Current Player: " + p1.value + " (Player 1)";
            }
            getWinRegions()
          } else {
            alert('Posição já foi marcada!')
          }
        })
      })

      function getWinRegions(){
        const tile1 = document.getElementById('tile1').innerText
        const tile2 = document.getElementById('tile2').innerText
        const tile3 = document.getElementById('tile3').innerText
        const tile4 = document.getElementById('tile4').innerText
        const tile5 = document.getElementById('tile5').innerText
        const tile6 = document.getElementById('tile6').innerText
        const tile7 = document.getElementById('tile7').innerText
        const tile8 = document.getElementById('tile8').innerText
        const tile9 = document.getElementById('tile9').innerText
        const tile11 = document.getElementById('tile1')
        const tile22 = document.getElementById('tile2')
        const tile33 = document.getElementById('tile3')
        const tile44 = document.getElementById('tile4')
        const tile55 = document.getElementById('tile5')
        const tile66 = document.getElementById('tile6')
        const tile77 = document.getElementById('tile7')
        const tile88 = document.getElementById('tile8')
        const tile99 = document.getElementById('tile9')
        const winRegions = []
        // linhas
        if (tile1 && tile1 === tile2 && tile1 === tile3) {
          winRegions.push(tile1, tile2, tile3)
          tile11.style.background = '#fff'
          tile22.style.background = '#fff'
          tile33.style.background = '#fff'
          if(tile1 === "X") {
            alert(p1.value + " (Player 1) foi o vencedor!")
          } else {
            alert(p2.value + " (Player 2) foi o vencedor!")
          }
          restart()
        }
        if (tile4 && tile4 === tile5 && tile4 === tile6) {
          winRegions.push(tile4, tile5, tile6)
          tile44.style.background = '#fff'
          tile55.style.background = '#fff'
          tile66.style.background = '#fff'
          if(tile4 === "X") {
            alert(p1.value + " (Player 1) foi o vencedor!")
          } else {
            alert(p2.value + " (Player 2) foi o vencedor!")
          }
          restart()
        }
        if (tile7 && tile7 === tile8 && tile7 === tile9) {
          winRegions.push(tile7, tile8, tile9)
          tile77.style.background = '#fff'
          tile88.style.background = '#fff'
          tile99.style.background = '#fff'
          if(tile7 === "X") {
            alert(p1.value + " (Player 1) foi o vencedor!")
          } else {
            alert(p2.value + " (Player 2) foi o vencedor!")
          }
          restart()
        }
        //colunas
        if (tile1 && tile1 === tile4 && tile1 === tile7) {
          winRegions.push(tile1, tile4, tile7)
          tile11.style.background = '#fff'
          tile44.style.background = '#fff'
          tile77.style.background = '#fff'
          if(tile1 === "X") {
            alert(p1.value + " (Player 1) foi o vencedor!")
          } else {
            alert(p2.value + " (Player 2) foi o vencedor!")
          }
          restart()
        }
        if (tile2 && tile2 === tile5 && tile2 === tile8) {
          winRegions.push(tile2, tile5, tile8)
          tile22.style.background = '#fff'
          tile55.style.background = '#fff'
          tile88.style.background = '#fff'
          if(tile2 === "X") {
            alert(p1.value + " (Player 1) foi o vencedor!")
          } else {
            alert(p2.value + " (Player 2) foi o vencedor!")
          }
          restart()
        }
        if (tile3 && tile3 === tile6 && tile3 === tile9) {
          winRegions.push(tile3, tile6, tile9)
          tile33.style.background = '#fff'
          tile66.style.background = '#fff'
          tile99.style.background = '#fff'
          if(tile3 === "X") {
            alert(p1.value + " (Player 1) foi o vencedor!")
          } else {
            alert(p2.value + " (Player 2) foi o vencedor!")
          }
          restart()
        }
        //diagonais
        if (tile1 && tile1 === tile5 && tile1 === tile9) {
          winRegions.push(tile1, tile5, tile9)
          tile11.style.background = '#fff'
          tile55.style.background = '#fff'
          tile99.style.background = '#fff'
          if(tile1 === "X") {
            alert(p1.value + " (Player 1) foi o vencedor!")
          } else {
            alert(p2.value + " (Player 2) foi o vencedor!")
          }
          restart()
        }
        if (tile3 && tile3 === tile5 && tile3 === tile7) {
          winRegions.push(tile3, tile5, tile7)
          tile33.style.background = '#fff'
          tile55.style.background = '#fff'
          tile77.style.background = '#fff'
          if(tile3 === "X") {
            alert(p1.value + " (Player 1) foi o vencedor!")
          } else {
            alert(p2.value + " (Player 2) foi o vencedor!")
          }
          restart()
        }
        if (tile1 && tile2 && tile3 && tile4 && tile5 && tile6 && tile7 && tile8 && tile9){
          alert('Empate!')
          restart()
        }
        return winRegions
      }
    }
  }
})


