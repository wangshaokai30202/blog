var posts=["2025/11/10/hello-world/","2025/11/23/2025年底日程表/","2025/11/23/即刻说说使用文档/","2025/11/10/如何利用hexo-GitHub-Zeabur搭建免费博客/","2025/11/10/如何添加文章封面/","2025/11/10/我的第一篇博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };