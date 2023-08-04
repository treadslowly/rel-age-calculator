function results() {
    let age = document.getElementById("age").value;
    let ancestry = document.getElementById("ancestry").value;
    let agemax = 85;
    if (ancestry == "" || age <= 0) {
      return;
    }
    switch (ancestry) {
      case "an elf":
        agemax = 750;
        break;
      case "a halfling":
        agemax = 150;
        break;
      case "a dwarf":
        agemax = 350;
        break;
      case "a dragonborn":
        agemax = 80;
        break;
      case "a gnome":
        agemax = 450;
        break;
      case "a half-elf":
        agemax = 200;
        break;
      case "a half-orc":
        agemax = 60;
        break;
      case "an orc":
        agemax = 50;
        break;
      case "a shifter":
        agemax = 70;
        break;
      case "a warforged":
        agemax = "unknown";
        break;
      case "a tiefling":
        agemax = 85;
        break;
      case "a changeling":
        agemax = 85;
        break;
      case "a kalashtar":
        agemax = 85;
        break;
      default:
        agemax = 85;
    }
    let relage = Math.floor((age / agemax) * 85);
    let percent = (age / agemax) * 100;
    let ancestryresult = "You are " + ancestry + ".";
    document.getElementById("ancestryresult").innerHTML = ancestryresult;
    let ageresult = "You are " + relage + " years old in human years.";
    document.getElementById("ageresult").innerHTML = ageresult;
    let percentageresult =
      "You have lived " + Math.floor(percent * 100) / 100 + "% of your life.";
    document.getElementById("percentageresult").innerHTML = percentageresult;
    document.getElementById("results").style.opacity="85%";
  }
  function reset() {
    document.getElementById("ageresult").innerHTML = "";
    document.getElementById("ancestryresult").innerHTML = "";
    document.getElementById("percentageresult").innerHTML = "";
    document.getElementById("results").style.opacity = "0%";
  }