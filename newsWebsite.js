const urlPart1='https://newsapi.org/v2/everything?q=';
const urlPart2='&from=2019-06-25&sortBy=publishedAt&apiKey=9096f7519ec24e7d8ef475dffb1b3b61';
let buttonVar=document.getElementById('submit');
buttonVar.addEventListener('click',function(){
    getKeyword();
});
function getKeyword(){
    let getText=document.getElementById('search');
    alert(getText.value);
    URL=urlPart1+getText.value+urlPart2;
    console.log(URL);
    returnNews();
    deleteDiv();
}
async function returnNews(){
    console.log(URL);
    // let Variable=await getKeyword();
    console.log("Valueof key :"+URL);
    let iterator=0;
    const response= await fetch(URL);
    const data= await response.json();

    // console.log(data);

    const{articles}=data;
    console.log(articles);

    articles.forEach(function(newsRow){
        // console.log(newsRow);
        const{author,content,urlToImage}=newsRow;
        console.log(iterator);
        console.log(author);
        console.log(content);
        iterator++;
        let maineNews=content.toString();
        let newsDiv=new addDiv(maineNews,author,urlToImage);
        newsDiv.addNewRecord();
    });
}

class addDiv{
    constructor(content,heading,urlToImage){
        this.content=content;
        this.heading=heading;
        this.urlToImage=urlToImage;
    }
    addNewRecord(){
        let newArticleContainer=document.createElement("div");
        let newCrossButtonContainer=document.createElement("div");
        let newMainSection=document.createElement("div");
        let newNewsContainer=document.createElement("div");
        let newCrossButton=document.createElement("img");
        let makeBold=document.createElement("strong");
        let newNews=document.createElement("p");
        let newHeading=document.createTextNode(this.heading)
        let newPhrase=document.createTextNode(this.content);
        let newLine=document.createElement("br");
        let newNewsImage=document.createElement("img");
        let newNewsImageContainer=document.createElement("div");
        
        newCrossButton.src="x-mark-icon-21.jpg";
        newCrossButton.height='100%';
        // newNewsImage.style.backgroundImage="url(this.urlToImage)";
        newNewsImage.src=this.urlToImage;
       

        makeBold.appendChild(newHeading);
        newNews.appendChild(makeBold);
        newNews.appendChild(newLine);
        newNews.appendChild(newPhrase);
        newNewsContainer.appendChild(newNews);
        newMainSection.appendChild(newNewsContainer);
        newNewsImageContainer.appendChild(newNewsImage);
        newMainSection.appendChild(newNewsImageContainer);
        newCrossButtonContainer.appendChild(newCrossButton);
        newArticleContainer.appendChild(newCrossButtonContainer);
        newArticleContainer.appendChild(newMainSection);
       
        let mainDivVar=document.querySelector('#mainDiv');
        mainDivVar.appendChild(newArticleContainer);

        newArticleContainer.classList.add('articleContainer');
        newCrossButtonContainer.classList.add('crossButtonContainer');
        newCrossButton.classList.add('crossButton');
        newMainSection.classList.add('mainSection');
        newNewsContainer.classList.add('newsContainer');
        newNews.classList.add('news');
        newNewsImageContainer.classList.add('newsImageContainer');
        newNewsImage.classList.add('newsImage');
    }
}
async function deleteDiv(){
    let responseFromReturnNews= await returnNews();
    var allButtons= document.querySelectorAll(".crossButton");
    var allDivs= document.querySelectorAll(".articleContainer");
    alert(allButtons.length);
    for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].addEventListener('click',function(){
                allDivs[i].parentNode.removeChild(allDivs[i]);
            });      //event listener ends here
    }            //for loop ends here

}