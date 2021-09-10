const frm = document.querySelector("#akanForm");
const myAlert = document.querySelector("#alertAkan");
const alertText = document.querySelector("showAkan");

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

frm.addEventListener("submit", function(e){
    e.preventDefault();
    let frmakan =new FormData(this);

    function centuryFromYear(year) {
        if(typeof year == 'string')
          if(year.toString().slice(-2) == '00')
            return year.toString().slice(0,2);
          else
            return (Math.floor(+year/100) +1).toString();
        else if(typeof year == 'number')
          return Math.floor((year-1)/100) + 1;
        else
          return undefined;
        }

    const YY = parseInt(frmakan.get("year"));
    const CC = centuryFromYear(frmakan.get("year"));
    const MM = frmakan.get("month");
    const DD = frmakan.get("date")

    const day = Math.floor(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;


    if(frmakan.get("gender") === "Male"){
        myAlert.classList.remove("d-none");
        myAlert.classList.add("d-block");
        alertText.innerHTML = 'Your Akan name is ${maleNames[day]}';
    }
    
    else{
        myAlert.classList.remove("d-none");
        myAlert.classList.add("d-block");
        alertText.innerHTML = 'Your Akan name is ${femaleNames[day]}';
    }
    })        