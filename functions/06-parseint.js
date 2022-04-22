var oneNum = 1
var oneStr = '1'

// The == operator perfoms a cast before comparing
//so, don't use it
if(oneNum == oneStr)
{
    console.log('Son iguales')
}else{
    console.log('Son diferentes')
}

// use the '===' instead
if(oneNum === parseInt(oneStr))
{
    console.log('Son iguales')
}else{
    console.log('Son diferentes')
}