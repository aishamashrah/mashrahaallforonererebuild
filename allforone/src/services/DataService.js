async function SayHello(userInput){
    const response = await fetch (`https://ulisesallforone.azurewebsites.net/All4One/Hello/${userInput}`);
    const data = await response.json();
    return data;
}
export{SayHello}