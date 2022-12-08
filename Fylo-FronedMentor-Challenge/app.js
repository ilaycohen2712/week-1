
let mbLeft=0;
let uploadBTN = document.getElementById("img-input");
let mbText = document.getElementById("Min");
let usage = document.getElementById("Fill");
//Update the elements in the html and update the mbLeft member
mbText.innerHTML = mbLeft; // put in the html
document.getElementById("Remaining").innerHTML = (10-mbLeft).toFixed(2);
usage.style.width = `${(mbLeft/10)*100}%`;
uploadBTN.addEventListener("change",()=>{
    //Upload only images
    let findName = uploadBTN.value;
    let nameValid = (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(findName);
    if(!nameValid){
      alert("Please enter image only");
        return;
    }
    //if you reached your max size of the bar
    let fileSize= uploadBTN.files[0].size / 100000;
    if(+mbLeft+ +fileSize > 10){
      alert("You reach to the max size 10 MB");
        return;
    }
//Update the elements in the html and build the div of the images name.
    mbLeft = (parseFloat(mbText.innerHTML) + fileSize);
    document.getElementById("Remaining").innerHTML = (10-mbLeft).toFixed(2);
    document.getElementById("current").innerHTML = mbLeft;
    usage.style.width = `${(mbLeft/10)*100}%`;
});
