var allDivs= document.querySelectorAll(".articleContainer");
for (let i = 0; i < allDivs.length; i++)
{
        allDivs[i].parentNode.removeChild(allDivs[i]);
    }; 
const urlPart1='http://newsapi.org/v2/everything?q=';
const urlPart2='&sortBy=publishedAt&apiKey=9096f7519ec24e7d8ef475dffb1b3b61';
// console.log('axios:', axios({}));

let buttonVar=document.getElementById('submit');
buttonVar.addEventListener('click',function(){
    getKeyword();
});
function getKeyword(){
    var allDivs= document.querySelectorAll(".articleContainer");
    for (let i = 0; i < allDivs.length; i++){
        allDivs[i].parentNode.removeChild(allDivs[i]); }; 
    let getText=document.getElementById('search');
    // alert(getText.value);
    URL=urlPart1+getText.value+urlPart2;
    console.log(URL);
    returnNews();
    deleteDiv();
}

async function returnNews(){
    console.log(URL);
    // let Variable=await getKeyword();
    console.log("Value of key :"+URL);
    let iterator=0;
    const response = await fetch(
        URL,
        {
            method: 'GET',
            // mode: 'no-cors',
            
            // headers : {
            //     'Access-Control-Allow-Origin': '*',
            // //  Accept: 'application/json',
            // } 
        },
    );
    console.log(response);
    const data= await response.json();
    console.log(data)

    // axios({
    //     method : 'get',
    //     url : URL,
    //     mode: 'no-cors',
    //     referrerPolicy: 'no-referrer-when-downgrade',
    //     headers : {
    //         'Access-Control-Allow-Origin': '*',
    //     } 
    // }).then( (response) => {
    //     console.log(response);
    // }, (err) => {
    //     console.log("ERROR : " ,err);
    // })

    // console.log(data);
    // console.log(articles);

    const {articles} = data;

    articles.forEach(function(newsRow){
        const{author,content,urlToImage,url}=newsRow;
        iterator++;
        let newsDiv=new addDiv(content,author,urlToImage,url);
        newsDiv.addNewRecord();
    });
}

class addDiv{
    constructor(content,heading,urlToImage,url){
        this.content=content;
        this.heading=heading;
        this.urlToImage=urlToImage;
        this.url = url;
    }
    addNewRecord(){
        let newsArticleContainerAnchor = document.createElement('a');
        newsArticleContainerAnchor.setAttribute('href', this.url);
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
        newsArticleContainerAnchor.appendChild(newMainSection);
        newArticleContainer.appendChild(newsArticleContainerAnchor);
       
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
    // alert(allButtons.length);
    for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].addEventListener('click',function(){
                allDivs[i].parentNode.removeChild(allDivs[i]);
            });      //event listener ends here
    }            //for loop ends here

}
