// A weird loop. Don't do this, but you can
var sentence = "No volvera a poner goma de mascar en la silla del profesor"
var i = 0
for(;;) {
    console.log(`${i} - ${sentence}`)
    if(++i == 10){
        break
    }
    
}