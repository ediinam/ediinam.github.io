let slike = document.getElementsByClassName("slika");
//console.log(slike.length);

slike[0].classList.add("animacija");

let index = 1;

function slide() {
  if (index == slike.length) {
    index = 0;
  }
  //console.log("Index: " + index);
  let previous = index - 1;
  if (index == 0) {
    previous = slike.length - 1;
  }
  if (previous != -1) {
    //console.log("Previous: " + previous);
    slike[previous].classList.remove("animacija");
    slike[previous].classList.add("prikaz");
  }
  slike[index].classList.add("animacija");
  index++;
}

setInterval(slide, 5000);
