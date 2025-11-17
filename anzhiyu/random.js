var posts=["2025/11/10/我的第一篇博文/","2025/11/10/hello-world/","2025/11/10/如何利用hexo-GitHub-Zeabur搭建免费博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };