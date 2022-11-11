var countEl = document.getElementById("countfirst")
var countPop = document.getElementById("entr")
var count =0
function incrfn(){
    count += 1
    countEl.textContent = count
}
function savfn(){
    var countSav = count + " - "
    countPop.textContent += countSav
    count = 0
    countEl.textContent = count 
}