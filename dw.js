const smallCups = document.querySelectorAll(".cup-small");  // since we r selecting all the cups 
const literss =  document.getElementById("liters");
const percentage =  document.getElementById("percentage");  // one to fill the big cup
const remained =  document.getElementById("remained");


// big cup:
updateBigCup();


smallCups.forEach((cup , idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
    console.log(idx);
})


function highlightCups(idx){
    // useed so that whn clicked again it will remove water frm small cups (empty cups functinality)
if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full"))
    {
       idx --;
    }

// done to fill the cups accordingly  (fill cups functionality)
    smallCups.forEach((cup , idx2) => {
                     if(idx2 <= idx){
                         cup.classList.add('full')
                     }else{
                         cup.classList.remove("full")
                     }
    })
    updateBigCup();
}



function updateBigCup(){
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    // to make the percentage hidden when thr is no water in the big cup
    if(fullCups === 0){
        percentage.style.visibility = "hidden";
        percentage.style.height =0;
    }else{
        percentage.style.visibility="visible";
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText =`${fullCups / totalCups * 100}%`
    }
    
    if(fullCups === totalCups){
        remained.style.visibility ="hidden";
        remained.style.height =0;
    } else{
        remained.style.visibility ="visible";
        literss.innerText = `${2 -(250 * fullCups / 1000)} Liters`
    }
}











