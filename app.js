const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const symbolSet="~!@#$%^&*()_+";                                        //Set of all posiible characters.

const passBox=document.getElementById("pass-box");
const totalChar=document.getElementById("total-char");
const upperInput=document.getElementById("upper-case");
const lowerInput=document.getElementById("lower-case");
const numberInput=document.getElementById("numbers");
const symbolInput=document.getElementById("symbols");

const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];           //Generating a random character from any "dataSet" passed as argument
}

const generatePassword = (password="")=>{
    if (upperInput.checked) {
        password += getRandomData(upperSet);                            //Adding a random uppercase character if ITS checkbox is ticked.
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet);                            //Adding a random lowercase character if ITS checkbox is ticked.
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet);                           //Adding a random number if ITS checkbox is ticked.
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet);                           //Adding a random symbol if ITS checkbox is ticked.
    }
    if (password.length < totalChar.value){
        return generatePassword(password);                              
    }

    passBox.innerText= truncateString(password,totalChar.value);        //Truncate the string to length desired by user if it exceeds.
    

}

generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();                                             //Function to show the random number when "Generate" button is clicked.
    }
)

function truncateString(str,num){                                       //Function to truncate a string to a given length.
    if(str.length > num ){
        let subStr = str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}
