import React, { useEffect, useState } from "react";
function NewsComponent() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f52b1cd0a6034fd18235372ceafad3b9')
    .then(res => res.json())
    .then(data => setNews(data.articles))
    .catch(err => console.error(err))
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
            {
                news.map((value, key) => (
                    <div key={key} className="col-2">
                        <a href={value.url}>
                            <div className="card">
                                <img src={value.urlToImage} alt={value.title}/>
                                <div className="card-body">
                                    <h4 className="card-title">{value.author}</h4>
                                    <p className="card-text">{value.title}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
