var index = 0;
function crack() {
    if (index == 0) {
        document.getElementById("eggCrack1").style.display = "block";
        document.getElementById("eggCrack2").style.display = "block";
        document.getElementById("eggCrack3").style.display = "block";
        index++;
    }
    else {
        document.getElementById("eggCrack1").style.display = "none";
        document.getElementById("eggCrack2").style.display = "none";
        document.getElementById("eggCrack3").style.display = "none";
        index--;
    }
}
function crossSection() {
    document.getElementById("eggShadow").style.display = "none";
    document.getElementById("egg").style.animationName = "eggAnimation";
    document.getElementById("yolk").style.display = "block";
    document.getElementById("yolk").style.animationName = "yolkAnimation";
}
function pleaseStop()
{
    
    document.getElementById("face").style.display="block";
    document.getElementById("knife").style.display="block";
}