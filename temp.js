var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=9096f7519ec24e7d8ef475dffb1b3b61';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })