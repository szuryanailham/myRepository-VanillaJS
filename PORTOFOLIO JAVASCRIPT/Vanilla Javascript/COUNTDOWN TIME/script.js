// MEMBUAT ARRAY MOUNT DAN WEEKDAY

const Mounts = ["January", "February", "March", "April", "May", "June", "July", "Agustust", "September", "October", "November", "Desember"];
const weekdays = ["Sunday", "Monday", "Teusday", "Wenesday", "Thursday", "Friday", "Saturday"];

// //   AMBIL ELEMENT HTML
const YearInput = document.getElementById("year");
const MounthInput = document.getElementById("mount");
const DateInput = document.getElementById("date");
const HourInput = document.getElementById("hour");
const MinuteInput = document.getElementById("minute");
const getAgenda = document.getElementById("agenda");
const submit = document.querySelector(".btn-submit");
const remainder = document.querySelector(".remainder");
const count_box = document.querySelectorAll(".box_timer h1");
const text = document.querySelector(".text-agenda");

// AMBIL DATA INPUT USER DARI KOLOM INPUT

const DateFuture = new Date(YearInput.value, MounthInput.value, DateInput.value, HourInput.value, MinuteInput.value, 0);
const YearFuture = DateFuture.getFullYear();
let mountFuture = DateFuture.getMonth();
mountFuture = Mounts[mountFuture];
const Datefuture = DateFuture.getDate();
const dayFuture = weekdays[DateFuture.getDay()];

// AMBIL TOTAL MILISECOND DARI TANGGAL DEADLINE
const totalMlFuture = DateFuture.getTime();

//  KETIKA TOMBOL SUMBIT DI CLICK
let countdown = setInterval(AdjustDate, 1000);
submit.addEventListener("click", () => {
  text.textContent = getAgenda.value;
  let countdown = setInterval(AdjustDate, 1000);
  AdjustDate();
});

// FUNCTION FILTER TEXT

function setInputFilter(textbox, inputFilter, errMsg) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
    textbox.addEventListener(event, function (e) {
      if (inputFilter(this.value)) {
        // Accepted value
        if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value - restore the previous one
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value - nothing to restore
        this.value = "";
      }
    });
  });
}
// FUNCTIOAN PENGELOLAHAN DATA TANGGAL
//  reset number
function AdjustDate() {
  const today = new Date().getTime();
  const t = totalMlFuture - today;
  if (t >= 0) {
    remainder.textContent = `Count will Ends on ${dayFuture}, ${Datefuture}, ${mountFuture}, ${YearFuture}`;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let day = t / oneDay;
    day = Math.floor(day);
    let hour = Math.floor((t % oneDay) / oneHour);
    let Minute = Math.floor((t % oneHour) / oneMinute);
    let second = Math.floor((t % oneMinute) / 1000);
    value = [day, hour, Minute, second];

    count_box.forEach((item, index) => {
      item.innerHTML = format(value[index]);
    });
  }
  if (t < 0) {
    clearInterval(countdown);
    remainder.textContent = `your agenda has arrived `;
  }
}

setInputFilter(
  document.getElementById("year"),
  function (value) {
    return /^-?\d*$/.test(value);
  },
  "input must  in number !!"
);
setInputFilter(
  document.getElementById("mount"),
  function (value) {
    return /^-?\d*$/.test(value);
  },
  "input must  in number !!"
);
setInputFilter(
  document.getElementById("date"),
  function (value) {
    return /^-?\d*$/.test(value);
  },
  "input must  in number !!"
);
setInputFilter(
  document.getElementById("hour"),
  function (value) {
    return /^-?\d*$/.test(value);
  },
  "input must  in number !!"
);
setInputFilter(
  document.getElementById("minute"),
  function (value) {
    return /^-?\d*$/.test(value);
  },
  "input must  in number !!"
);

//  FUNTION FORMAT TANGGAL
function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  } else {
    return item;
  }
}
