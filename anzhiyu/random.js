var posts=["2025/11/10/hello-world/","2025/11/10/我的第一篇博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };