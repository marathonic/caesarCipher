/*Here's how it works:
I) We write a function that takes X and Y
II) We make an array out of A, that splits on every letter
III) We ask for the array to return each item in the array + Y, for example: A, 3 would be A + 3, which is D
*/

const caesar = function(x,y) {
    /* 
    let xArr = Array.from(x);
    const mapped = xArr.map(x => x.charCodeAt(0) + 5);


    let mapping = xArr.map(function(texty){
        return texty.charCodeAt(0)
    })
    */

    let char = x;
    let arroy = Array.from(char).slice('');
    let indexu = 0;

    let i = char.charCodeAt(indexu);

    for (let i = 0; i < char.length; i++){
        
        arroy.push(char.charCodeAt(indexu + y));
        indexu++;
    }

    return arroy;

    //pseudocode:
    /* 
    const mapped = xArr.map(something,maybe){
        let characty = x.charCodeAt(0);
        let amped = String.fromCharCode(characty + y);

    }

    xArr.slice('');
    for (let i = 0; i < xArr.length; i++){
        xArr[i] = x
        */
    };

// Do not edit below this line
module.exports = caesar;
