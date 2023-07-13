const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const btnContainer = document.querySelector(".btn-container");
const basicArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 2, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];
let exercicesArray = [];

//Get started exercices array

(() => {
  if (localStorage.exercices) {
    exercicesArray = JSON.parse(localStorage.exercices);
  } else {
    exercicesArray = basicArray;
  }
})();

class Exercices {
  constructor() {
    this.index = 0;
    this.minutes = exercicesArray[this.index].min;
    this.seconds = 0;
  }

  updateCountdown() {
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    setTimeout(() => {
      if (this.minutes === 0 && this.seconds === "00") {
        this.index++;
        this.ring();
        if (this.index < exercicesArray.length) {
          this.minutes = exercicesArray[this.index].min;
          this.seconds = 0;
          this.updateCountdown();
        } else {
          return page.finish();
        }
      } else if (this.seconds === "00") {
        this.minutes--;
        this.seconds = 59;
        this.updateCountdown();
      } else {
        this.seconds--;
        this.updateCountdown();
      }
    }, 1000);

    return (main.innerHTML = `
    <div class='exercice-container'>
        <p>${this.minutes}:${this.seconds}</p>
        <img src="./img/${exercicesArray[this.index].pic}.png" />
        <div>${this.index + 1}/${exercicesArray.length}</div>
    </div>
    `);
  }

  ring() {
    const audio = new Audio();
    audio.src = "ring.mp3";
    audio.play();
  }
}

const utils = {
  pageContent: function (title, content, btn) {
    h1.innerHTML = title;
    main.innerHTML = content;
    btnContainer.innerHTML = btn;
  },
  handleEventMinures: function () {
    document.querySelectorAll('input[type="number"]').forEach((input) => {
      input.addEventListener("input", (e) => {
        exercicesArray.map((exo) => {
          if (exo.pic == e.target.id) {
            exo.min = parseInt(e.target.value);
            page.lobby();
            this.store();
          }
        });
      });
    });
  },
  handleEventArrow: function () {
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        let position = 0;
        exercicesArray.map((exo) => {
          if (exo.pic == e.target.dataset.pic && position !== 0) {
            [exercicesArray[position], exercicesArray[position - 1]] = [
              exercicesArray[position - 1],
              exercicesArray[position],
            ];
            page.lobby();
            this.store();
          } else {
            position++;
          }
        });
      });
    });
  },
  deleteItem: function () {
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let newArray = exercicesArray.filter((exo) => {
          return exo.pic != e.target.dataset.pic;
        });
        exercicesArray = newArray;
        page.lobby();
        this.store();
      });
    });
  },
  reboot: function () {
    exercicesArray = basicArray;
    page.lobby();
    this.store();
  },
  store: function () {
    localStorage.exercices = JSON.stringify(exercicesArray);
  },
};

const page = {
  lobby: function () {
    let mapArray = exercicesArray
      .map((exo) => {
        return `
            <li>
            <div class='card-header'>
            <input type='number' id=${exo.pic} min="1" max="10" value=${exo.min}
            <span>min</span>
            </div>
            <img src='./img/${exo.pic}.png'/>
            <i class='fas fa-arrow-alt-circle-left arrow' data-pic=${exo.pic}></i>
            <i class='fas fa-times-circle deleteBtn' data-pic=${exo.pic}></i>
            </li>
            `;
      })
      .join("");

    utils.pageContent(
      "Paramètrage <i id='reboot' class='fas fa-undo'></i>",
      "<ul>" + mapArray + "</ul>",
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
    );
    utils.handleEventMinures();
    utils.handleEventArrow();
    utils.deleteItem();
    document.getElementById("reboot").addEventListener("click", () => {
      return utils.reboot();
    });
    start.addEventListener("click", () => {
      this.routine();
    });
  },

  routine: function () {
    const exercice = new Exercices();
    utils.pageContent("Routine", exercice.updateCountdown(), null);
  },
  finish: function () {
    utils.pageContent(
      "C'est terminé",
      "<button id='start'> Recommencer </button>",
      "<button id='reboot' class='btn-reboot'>Réinitialiser<i class='fas fa-times-circle'></i></button>"
    );
    start.addEventListener("click", () => {
      this.routine();
    });
    reboot.addEventListener("click", () => {
      utils.reboot();
    });
  },
};

page.lobby();
