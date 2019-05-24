/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
document.getElementById("myBtn").disabled = true;

document.getElementById('toggle1').checked;
document.getElementById('toggle2').checked;
document.getElementById('toggle3').checked;
document.getElementById('toggle4').checked;

toggle1.addEventListener("change", checkBtn, false);
toggle2.addEventListener("change", checkBtn, false);
toggle3.addEventListener("change", checkBtn, false);
toggle4.addEventListener("change", checkBtn, false);


function checkBtn(){
 
  if(document.getElementById('toggle1').checked){ //checked
    document.getElementById("myBtn").disabled = false;
  }else{ //unchecked
    if(document.getElementById('toggle2').checked == false && document.getElementById('toggle3').checked == false && document.getElementById('toggle4').checked == false) {
      document.getElementById("myBtn").disabled = true;
    }
  }


  if(document.getElementById('toggle2').checked){ //checked
    document.getElementById("myBtn").disabled = false;
  }else{ //unchecked
    if(document.getElementById('toggle1').checked == false && document.getElementById('toggle3').checked == false && document.getElementById('toggle4').checked == false) {
      document.getElementById("myBtn").disabled = true;
    }
  }

  if(document.getElementById('toggle3').checked){ //checked
    document.getElementById("myBtn").disabled = false;
  }else{ //unchecked 
   if(document.getElementById('toggle1').checked == false && document.getElementById('toggle2').checked == false && document.getElementById('toggle4').checked == false) {
      document.getElementById("myBtn").disabled = true;
    }
  }


  if(document.getElementById('toggle4').checked){ //checked
    document.getElementById("myBtn").disabled = false;
  }else{ //unchecked
    if(document.getElementById('toggle1').checked == false && document.getElementById('toggle2').checked == false && document.getElementById('toggle3').checked == false) {
      document.getElementById("myBtn").disabled = true;
    }
  }
}

