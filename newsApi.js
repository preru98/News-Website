const keyword=prompt('Enter Keyword');
let urlPart1='https://newsapi.org/v2/everything?q=';
let urlPart2='&from=2019-09-04&sortBy=publishedAt&apiKey=9096f7519ec24e7d8ef475dffb1b3b61';
console.log(keyword);
const URL=urlPart1+keyword+urlPart2;
// const URL='https://newsapi.org/v2/everything?q=Trump&from=2019-06-13&sortBy=publishedAt&apiKey=9096f7519ec24e7d8ef475dffb1b3b61';
returnNews();
deleteDiv();

async function returnNews(){
    let iterator=0;
    const response= await fetch(URL);
    const data= await response.json();

    // console.log(data);

    const{articles}=data;
    console.log(articles);

    articles.forEach(function(newsRow){
        // console.log(newsRow);
        const{author,content}=newsRow;
        console.log(iterator);
        console.log(author);
        console.log(content);
        iterator++;
        let newsDiv=new addDiv(content,author);
        newsDiv.addNewRecord();
    });
}

class addDiv{
    constructor(content,heading){
        this.content=content;
        this.heading=heading;
    }
    addNewRecord(){
        let newContainerDiv=document.createElement("div");
        let newImageDiv=document.createElement("div");
        let newCrossButton=document.createElement("img");
        let newHeading=document.createTextNode(this.heading)
        let makeBold=document.createElement("strong");
        let newPara=document.createElement("p");
        let newPhrase=document.createTextNode(this.content);
        let newLine=document.createElement("br");
        
        newCrossButton.src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Crystal_Clear_action_button_cancel.svg/1024px-Crystal_Clear_action_button_cancel.svg.png";
        newCrossButton.height='100%';

        makeBold.appendChild(newHeading);
        newPara.appendChild(makeBold);
        newPara.appendChild(newLine);
        newPara.appendChild(newPhrase);
        newImageDiv.appendChild(newCrossButton);
        newContainerDiv.appendChild(newImageDiv);
        newContainerDiv.appendChild(newPara);

        let superMainDiv=document.querySelector('#mainDiv');
        superMainDiv.appendChild(newContainerDiv);

        newCrossButton.classList.add('buttonOneImage');
        newContainerDiv.classList.add('divOne'); 
        newImageDiv.classList.add('buttonOne');

    }
}
async function deleteDiv(){
    let responseFromReturnNews= await returnNews();
    var allButtons= document.querySelectorAll(".buttonOneImage");
    var allDivs= document.querySelectorAll(".divOne");
    alert(allButtons.length);
    for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].addEventListener('click',function(){
                allDivs[i].parentNode.removeChild(allDivs[i]);
            });      //event listener ends here
    }            //for loop ends here

}
