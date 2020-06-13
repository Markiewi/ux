function updateMinRep(val) {
          document.getElementById('minRep').value=parseInt(val)/10; 
        }
        
function updateMaxRep(val) {
          document.getElementById('maxRep').value=parseInt(val)/10; 
        }

function updateMinRepSlider(val) {
    if(val>5){
        val=5
    }   
    document.getElementById('minRep').value=val; 
          document.getElementById('minRange').value=val*10; 
        }

function updateMaxRepSlider(val) {
    if(val>5){
        val=5
    }   
    document.getElementById('maxRep').value=val; 
          document.getElementById('maxRange').value=val*10; 
        }

function changeLeft(){
  document.getElementById("cards-container2").style.display="none"
  document.getElementById("cards-container1").style.display="block"
  document.getElementById("pag").innerHTML="1/2"
}

function changeRight(){
  document.getElementById("cards-container1").style.display="none"
  document.getElementById("cards-container2").style.display="block"
  document.getElementById("pag").innerHTML="2/2"
}