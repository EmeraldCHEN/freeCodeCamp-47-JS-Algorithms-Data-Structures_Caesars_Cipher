function rot13(str){
    let rotCharArray = [];
    let regex = /[A-Z]/;
    let strArray = str.split('');
    for(let x in str){

        if(regex.test(strArray[x])){
            rotCharArray.push((strArray[x].charCodeAt() - 65 + 13) % 26 + 65);
        }else{
            rotCharArray.push(strArray[x].charCodeAt());
        }
    }
    return String.fromCharCode.apply(null, rotCharArray);


}


rot13("SERR PBQR PNZC");
