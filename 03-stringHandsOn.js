


function stringHandsOn() {
    console.log(`========Task No. 1========`);
    var str = "   Hey you are doing good, keep it up   ";
    console.log(`String Given is as : ${str}`);
    console.log(`____________________________________________________`);
    
    console.log(`========Task No. 2========`);
    console.log(`Length of above string : ${str.length}`);
    console.log(`____________________________________________________`);

    console.log(`========Task No. 3========`);
    var newStr = str.trim();
    console.log(`After removing extra spaces in above string is: ${newStr} and it's length is : ${newStr.length}`);
    console.log(`____________________________________________________`);

    console.log(`========Task No. 4========`);
    var str = "   Hey you are doing good, keep it up   ";
    var totalSpaces = str.length - newStr.length;
    console.log(`Total number extra spaces count which is removed : ${totalSpaces}`);
    console.log(`____________________________________________________`);

    console.log(`========Task No. 5========`);
    var firstChar = newStr.charAt(0);
    var lastChar = newStr.charAt(33);
    console.log(`First Character after trim : ${firstChar} and last character : ${lastChar}`);
    console.log(`____________________________________________________`);

    console.log(`========Task No. 6========`);
    var splitResult = newStr.split(" ");
    console.log(splitResult);
    console.log(`Total words available at string after trim : ${splitResult}`);
    console.log(`____________________________________________________`);

    console.log(`========Task No. 7========`);
    var indexOfGood = newStr.indexOf("good");
    console.log(`Index of word good : ${indexOfGood}`);
    console.log(`____________________________________________________`);


    console.log(`========Task No. 8========`);
    var substringResult = newStr.substring("22");
    console.log(`Substring starting from Index 22 :${substringResult}`);
    console.log(`____________________________________________________`);


    console.log(`========Task No. 9========`);
    var stringEndResult = true;
    console.log(`String ends with word "up" : ${stringEndResult}`);
    console.log(`____________________________________________________`);

    console.log(`========Task No. 10========`);
    var stringStartResult = true;
    console.log(`String starts with word "Hey" : ${stringStartResult}`); 
    
}
stringHandsOn();  //invocation of function or call function


