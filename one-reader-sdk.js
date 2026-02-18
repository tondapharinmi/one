class OneReaderSDK {
  constructor(container) {
    this.container = container;
    this.currentArticle = null;
  }

  renderArticle(article) {
    this.currentArticle = article;
    this.container.innerHTML = `
      <div style="max-width:700px;margin:40px auto;font-family:Arial;">
        <h1 style="font-weight:600;">${article.title}</h1>
        <p style="color:#666;font-size:14px;">作者：${article.author}</p>
        <hr/>
        <div style="line-height:1.9;font-size:16px;">
          ${article.content}
        </div>
      </div>
    `;
  }

  clear() {
    this.container.innerHTML = "";
  }
}

if (typeof module !== "undefined") {
  module.exports = OneReaderSDK;
}
