var posts=["2025/02/23/hello-world/","2025/02/23/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };