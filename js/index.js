
let newsAccordian = document.getElementById('newsAccordian');

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=6c7c80ae14324b1c9c341a9584a7a0c3`, true);


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        // console.log(articles[0].description);
        let newshtml = '';
        articles.forEach(function (element) {

            let news = `
                <div class="card">
                              <div class="card-header">
                              <div id="collapseThree"aria-labelledby="headingThree" data-parent="#accordion">
                              <div class="card-body parent">
                              ${element.title}</div>
                            </div>
                              </div>
                              <div id="collapseThree"  aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body child">
                                ${element.description } <a href='${ element.url }'>click here for more</a></div>
                              </div>
                            </div>`

            newshtml += news;
        });
        newsAccordian.innerHTML = newshtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();
