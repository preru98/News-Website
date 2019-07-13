async function returnNews(){
    const response= await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-13&sortBy=publishedAt&apiKey=9096f7519ec24e7d8ef475dffb1b3b61');
    const data= await response.json();
    // console.log(data);
    const{articles}=data;
    console.log(articles);
}
returnNews();