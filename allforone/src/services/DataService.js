async function SayHello(savedInput){
    const response = await fetch (`https://aishaallforoneapi.azurewebsites.net/NewApi/Hello/` + savedInput);
    const data = await response.text();
    return data;

}





async function AskingQuestions(askingInpt1,askingInpt2){
    const response = await fetch (`https://aishaallforoneapi.azurewebsites.net/NewApi/Asking/${askingInpt1}/${askingInpt2}`);
    const data = await response.text();
    return data;

}



async function AddingNumbers(num1,num2){
    const response = await fetch (`https://aishaallforoneapi.azurewebsites.net/NewApi/Adding/${num1}/${num2}`);
    const data = await response.text();
    return data;

}

async function Greater(comparingInpt1,comparingInpt2){
    const response = await fetch (`https://aishaallforoneapi.azurewebsites.net/NewApi//comparing/${comparingInpt1}/${comparingInpt2}`);
    const data = await response.text();
    return data;

}


async function OddOrEven(evenOddinput){
    const response = await fetch (`https://aishaallforoneapi.azurewebsites.net/NewApi/OddOrEven/`+ evenOddinput);
    const data = await response.text();
    return data;

}

async function ReverseIt(Reverseinput){
    const response = await fetch (`https://ulisesallforone.azurewebsites.net/All4One/reverse/`+ Reverseinput);
    const data = await response.text();
    return data;

}



export{SayHello,AskingQuestions,AddingNumbers,Greater,OddOrEven,ReverseIt}
