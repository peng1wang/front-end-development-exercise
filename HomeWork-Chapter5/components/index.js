function index(){
  return <div class="center">
    <div class="homecontainer">
    <div class="toutiao-header">
    <div class="topbar">
    <div class="home-left-nav">
    <a class="download-app tb-link" href="//app.toutiao.com/news_article/" target="_blank" rel="noopener noreferrer">下载APP</a>
    <a class="register-mp tb-link" href="//mp.toutiao.com" target="_blank" rel="noopener noreferrer">注册头条号</a>
    <div class="weather-tool">
    <div class="weather-abstract">
    <span>"&nbsp;""北京"</span>
  <span class="city_state">阴</span>
    <span class="city_temperature">
    <em>0</em>
  "°C &nbsp;/&nbsp;"
  <em>13</em>
  "°C &nbsp;/&nbsp;"
  </span>
  <i class="bui-icon icon-arrow_down">::before</i>
    </div>
    </div>
    </div>
    <div class="right-nav">
    <ul class="user-nav-list">
    <li class="tb-item">
    <a class="tb-link" target="_blank" rel="noopener noreferrer" href="//mp.toutiao.com/profile_v3_public/public/complains">侵权投诉</a>
    </li>
    <li class="tb-itemmore">
    <a class="tb-link" href="//www.toutiao.com/about/">头条产品</a>
    <div class="layer">
    <ul>
    <li>
    <a href="https://www.wukong.com" class="layer-item" target="_blank" rel="noopener noreferrer">问答</a>
    </li>
    </ul>
    </div>

    </li>
    </ul>
    </div>
    </div>
    </div>
    <div class="main-container">
    <div class="channel-container">
    <div class="channel">
    <a class="logo" href="http://www.toutiao.com">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAA2CAMAAACSsKctAAAANlBMVEVHcEzuQEDwRETyRUX3TEzvQkLuQEDuQUHuQUHvQEDuQUHuQEDvQkLuQEDuQUHwQUHxQkLtQEDKaksGAAAAEXRSTlMAxiweDlyo49Nri/F5+bhLOapXaIgAAATMSURBVGje7ZrpsqQqDIAb2VEE3/9lx263AAmu3XVv1cn8mFOtIh+JIQuvFyFSzdK8/jsSrbg7BG+HSdjPZi3iJPTchR7a7iYam7mGNvwKTM5vlOQd6n3Z37IhN6zSNhW1TsJqMt/TwQk6G3gxmt0DC5/LfpxS9U38wOJ9RJN38uG4KGBR0wRNxrcHtn4dlPjpv4pCYzqEEffBfAG2XDC9sxyCUbbfH3wVDdbkS2P4FzQGRR4As8NdsEYXy01Y4xMa28C6KljT3gUDXNtYOn5fY3UwNtwEA9+XA397+zONxR03fQ1MerjG0Is4QYK5riLzEMDdC4+CuQoY99sKoW9R20z5zsKwN0gAczDFUohdPzSKRpw4j9Yp0+Jg2GgCrHBf3sAVuIytC8u4RjIwYmGOh8AMvTutfLtgydR8ZjzCgeV32M7eFlyZj2T8GY3lfHwNmChTGmcP5tECNNFBf4m4AqEGhGt8rYEj2i+AwUhwFCocgOs+ok383MFfMecdoGYUHFwkW76Jz5kiHlmQ4TtPY48+iNAnfqgX1a+vtNMueXyjvqox5WTkJFgthq3t0i2ydhY+4MsbYhKMtEu6dxFseqw1Gd+s2raasylPRgCluoJJgnnU3SYaHbS8Y4rJBv3h42AFdN1gGzwWZtgcMHD3Xk5BfYOz67qlsWKDnq3G1DP74DTCZVwQVbA1X57WpWWqk40od4svgInKBrtUPJSpfGPGyYYC6zma/OjJm0RzBcwcBONltAzKIVYxfyBObJlbFAHAtKSyOla4x+c1FiuhAxvOiDcpWBKo4GDbp3sLDA2CJR07EGCaUZYJwUys5OGgBhdYCRYFIWQQHKzrjU/AXCUdQ8C0e0+Y295XwbSsFhiS4qLUC9hePsZ2QqqVT4I3NvtgvrfbXQLxkwsYUoWsgI37uX4GbOXj231+J332DPHsXKb+cknCkC2gkZ1iLQE2RtRPgiVJq6mAadVtUKL5CAea69v9qGxxs/KTMLFrVaozYLLi7UcwrVxWY3XYtjfu32q07cOF/Ob7YKpWLm0Emewj+7m43Ud5EGzdAvjJKnz/jTbCg2B2OBIpXgBzZl9a/xFdhBChwYWXYIEYe1GYzn6fHlPIE3rJDhBBTPxIPHYng5bDObEXQqrEK34PTP+B/c/A/kzxD+wUWLB1AXVJd8cUm3Jkv1W/SpmGlsiVOUw32GxPbMVbZtA9WwneGjo+Xun/34s8hEGLqQ+AgUaVff0cDHCpJ7stSZvKTVW//vNPoXVuNV3rVQ7WVR+juRjRfLqtMeuzkWOtG2SxdtrnuehrSc9utyBpwjwB5sp23eqdI33Og5Wm6IZan3eXKz/wcc8UYdl87ZOsrUtDZmzz6xIwoU9nB2CHKw5FLGBWVkQXzrTsu4Fvw1K+JGRWmjoPiTjto6eqysMeF08NFA0chRVu8jNRyzpogXpF6rF9LuSw2MVzHtnphMxRNLgj6IasdpCBNef8B+CKj53zyI5tWOqdATsP0VP7GPoYJd1QDQuuagw2f30xj9URaFF6MM8pMPSxfa7w4FmqxtTb4YgjCOVPReQRanvgKa5TGuvQ7j9+rq5QD6aNMqRa/LffKb9JvQoR6Al9XCQyrCZCIL5eX5Z4+QEscJfekj/2D7KhSDEKe9jHAAAAAElFTkSuQmCC"
  alt="今日头条"
  width="110px"
  height="28px">
    </a>
    <ul>
    <li>
    <a class="channel-item active" href="" target="self">推荐</a>
    </li>

    <li>
    <a class="channel-item" href="" target="_blank">头条新闻</a>
    </li>
    <li>
    <a class="channel-item" href="" target="_blank">直播</a>
    </li>
    <li>
    <a class="channel-item" href="" target="_blank">图片</a>
    </li>

    <li>
    <a class="channel-item" href="" target="_blank">科技</a>
    </li>

    <li>
    <a class="channel-item" href="" target="_blank">娱乐</a>
    </li>

    <li>
    <a class="channel-item" href="" target="_blank">游戏</a>
    </li>
    <li>
    <a class="channel-item" href="" target="_blank">体育</a>
    </li>

    <li>
    <a class="channel-item" href="" target="_blank">财经</a>
    </li>

    <li>
    <a class="channel-item" href="" target="_blank">新闻</a>
    </li>

    <li>
    <a class="channel-item" href="" target="_blank">新闻</a>
    </li>

    <li>
    <a class="channel-item" href="" target="_blank">更多</a>
    </li>

    </ul>
    </div>
    </div>
    <div class="feed-container">
    <div class="feedbox-wrapper">
    <div class="msg-wrapper">
    <div class="msg-alert msg-alert-hidden">
    <span>
    "为您推荐了"
  "10"
  "篇文章"
  </span>
  </div>
  <div class="msgAlert-place">
    <div class="msg-alert">
    <span>您有未读的新闻</span>
    </div>
    </div>
    </div>
    <div class="feed-box">
    <div class="feed-list">
    <div class="no-mode">
    <div class="title-box">
    <a class="link" href=" " target="_blank" rel="noopener">今日头条</a>
    </div>
    <div class="footer-bar">
    <div class="footer-bar-left">
    <a class="footer-bar-action tag tag-style-other"
  href=""
  target="_blank"
  rel="noopener noreferrer"
    >时政</a>

    <a class="footer-bar-action media-avatar"
  href=""
  target="_blank"
    ><imag src="cctv.jpg" /></a>

    <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;央视新闻&nbsp;
</a>

  <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;
  588
  评论
  </a>

  <span class="footer-bar-action time">
    &nbsp;⋅&nbsp;
  2小时前
  </span>

  </div>
  <div class="footer-bar-right"></div>
    </div>
    </div>
    <div class="no-mode">
    <div class="title-box">
    <a class="link" href=" " target="_blank" rel="noopener">“十三五”，我们这样走过：奋力推进国防和现代化建设</a>
  </div>
  <div class="footer-bar">
    <div class="footer-bar-left">
    <a class="footer-bar-action tag tag-style-other"
  href=""
  target="_blank"
  rel="noopener noreferrer"
    >军事</a>

    <a class="footer-bar-action media-avatar"
  href=""
  target="_blank"
    ><imag src="renminribao.jpg" /></a>

    <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;人民日报&nbsp;
</a>

  <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;
  634
  评论
  </a>

  <span class="footer-bar-action time">
    &nbsp;⋅&nbsp;
  2小时前
  </span>

  </div>
  <div class="footer-bar-right"></div>
    </div>
    </div>
    <div class="no-mode">
    <div class="title-box">
    <a class="link" href=" " target="_blank" rel="noopener">从太空到田间：“奔月”种子有望助攻农业种源难题</a>
  </div>
  <div class="footer-bar">
    <div class="footer-bar-left">
    <a class="footer-bar-action tag tag-style-other"
  href=""
  target="_blank"
  rel="noopener noreferrer"
    >三农</a>

    <a class="footer-bar-action media-avatar"
  href=""
  target="_blank"
    ><imag src="guangmingwang.jpg" /></a>

    <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;光明网&nbsp;
</a>

  <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;
  313
  评论
  </a>

  <span class="footer-bar-action time">
    &nbsp;⋅&nbsp;
  2小时前
  </span>

  </div>
  <div class="footer-bar-right"></div>
    </div>
    </div>
    <div class="single-mode">
    <div class="single-mode-lbox">
    <a class="img-wrap"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    <img src= "toutiaopicure/images/picture_1.jpg" lazy-load-img">
  </a>
  </div>
  <div class="single-mode-rbox">
    <div class="single-mode-rbox-inner">
    <div class="title-box">
    <a class="link"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    十四五规划
    </a>
    </div>
    <div class="footer-bar">
    <div class="footer-bar-left">
    <a class="footer-bar-acition tag tag-style-other"
  href=""
  target="_blank"
  rel="noopener noreferrer"
    >
    传媒
    </a>

    <a class="footer-bar-action media-avatar"
  href=""
  target="_blank"
    ><imag src="picture2.jpg" /></a>

    <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;环球网&nbsp;
</a>

  <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;
  104
  评论
  </a>

  <span class="footer-bar-action time">
    &nbsp;⋅&nbsp;
  2小时前
  </span>
  </div>
  </div>
  </div>
  </div>
  </div>

  <div class="single-mode">
    <div class="single-mode-lbox">
    <a class="img-wrap"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    <img src="toutiaopicure/images/picture_2.jpg" class="lazy-load-img">
    </a>
    </div>
    <div class="single-mode-rbox">
    <div class="single-mode-rbox-inner">
    <div class="title-box">
    <a class="link"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    是否要封杀NIKE？
</a>
  </div>
  <div class="footer-bar">
    <div class="footer-bar-left">
    <a class="footer-bar-acition tag tag-style-other"
  href=""
  target="_blank"
  rel="noopener noreferrer"
    >
    传媒
    </a>

    <a class="footer-bar-action media-avatar"
  href=""
  target="_blank"
    ><imag src="picture2.jpg" /></a>

    <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;环球网&nbsp;
</a>

  <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;
  104
  评论
  </a>

  <span class="footer-bar-action time">
    &nbsp;⋅&nbsp;
  2小时前
  </span>
  </div>
  </div>
  </div>
  </div>
  </div>

  <div class="single-mode">
    <div class="single-mode-lbox">
    <a class="img-wrap"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    <img src="toutiaopicure/images/picture_1.jpg" class="lazy-load-img">
    </a>
    </div>
    <div class="single-mode-rbox">
    <div class="single-mode-rbox-inner">
    <div class="title-box">
    <a class="link"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    互联网企业如何继续持续发展
    </a>
    </div>
    <div class="footer-bar">
    <div class="footer-bar-left">
    <a class="footer-bar-acition tag tag-style-other"
  href=""
  target="_blank"
  rel="noopener noreferrer"
    >
    传媒
    </a>

    <a class="footer-bar-action media-avatar"
  href=""
  target="_blank"
    ><imag src="picture2.jpg" /></a>

    <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;环球网&nbsp;
</a>

  <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;
  104
  评论
  </a>

  <span class="footer-bar-action time">
    &nbsp;⋅&nbsp;
  2小时前
  </span>
  </div>
  </div>
  </div>
  </div>
  </div>

  <div class="single-mode">
    <div class="single-mode-lbox">
    <a class="img-wrap"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    <img src="toutiaopicure/images/picture_1.jpg" class="lazy-load-img">
    </a>
    </div>
    <div class="single-mode-rbox">
    <div class="single-mode-rbox-inner">
    <div class="title-box">
    <a class="link"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    十四五规划
    </a>
    </div>
    <div class="footer-bar">
    <div class="footer-bar-left">
    <a class="footer-bar-acition tag tag-style-other"
  href=""
  target="_blank"
  rel="noopener noreferrer"
    >
    传媒
    </a>

    <a class="footer-bar-action media-avatar"
  href=""
  target="_blank"
    ><imag src="picture2.jpg" /></a>

    <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;新华网&nbsp;
</a>

  <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;
  104
  评论
  </a>

  <span class="footer-bar-action time">
    &nbsp;⋅&nbsp;
  2小时前
  </span>
  </div>
  </div>
  </div>
  </div>
  </div>

  <div class="single-mode">
    <div class="single-mode-lbox">
    <a class="img-wrap"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    <img src="toutiaopicure/images/picture_1.jpg" class="lazy-load-img">
    </a>
    </div>
    <div class="single-mode-rbox">
    <div class="single-mode-rbox-inner">
    <div class="title-box">
    <a class="link"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    十四五规划
    </a>
    </div>
    <div class="footer-bar">
    <div class="footer-bar-left">
    <a class="footer-bar-acition tag tag-style-other"
  href=""
  target="_blank"
  rel="noopener noreferrer"
    >
    传媒
    </a>

    <a class="footer-bar-action media-avatar"
  href=""
  target="_blank"
    ><imag src="picture2.jpg" /></a>

    <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;新华网&nbsp;
</a>

  <a class="footer-bar-action source"
  href=""
  target="_blank"
  rel="noopener noreferrer">
    &nbsp;
  104
  评论
  </a>

  <span class="footer-bar-action time">
    &nbsp;⋅&nbsp;
  3小时前
  </span>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div class="right-container">
    <div class="search-wrapper">
    <input class="search-input" placeholder="搜索站内资讯、视频或用户" value>
  <div class="search-btn">
    <button type="button">搜索</button>
    </div>
    </div>
    <div class="login-wrapper">
    <div class="login inner">
    <p class="login-msg">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
  <a href=" " ><button type="button" class="login-button">登录</button></a>
  <ul class="third-login">
    <li class="sns qq" data-pid="qzone_sns">
    <span>QQ</span>
    </li>
    <li class="sns weixin" data-pid="weixin">
    <span>微信</span>
    </li>
    </ul>
    </div>
    </div>
    <div class="pane-module">
    <div class="module-head">更多</div>
    <ul class="links-wrapper">
    <li class="item">
    <a target="_self" href="" rel>关于头条</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>加入头条</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>媒体报道</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>媒体合作</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>产品合作</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>合作说明</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>广告投放</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>联系我们</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>用户协议</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>隐私政策</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>侵权投诉</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>廉洁举报</a>
  </li>
  <li class="item">
    <a target="_blank" href="" rel>企业认证</a>
  </li><li class="item">
  <a target="_blank" href="" rel>肺炎求助</a>
  </li><li class="item">
  <a target="_blank" href="" rel>辟谣专区</a>
  </li>

  </ul>
  </div>
  <div class="pane-module">
    <div class="module-head">友情链接</div>
    <ul class="links-wrapper">
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">光明网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">央广网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">国际在线</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中国西藏网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">参考消息</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">环球网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中青在线</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中青网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">未来网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">千龙网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">光明网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">北青网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中国网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中工网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">北京晨报</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">北京商网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">北京娱乐信报</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">奥一网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">南海网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">齐鲁网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中国江西网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">华商网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">新民网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">南海网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">红网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中国江苏网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">安徽网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">河北新闻网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">闽南</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">海峡网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">华声在线</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">北国网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中国蓝TV</a>
    </li>                            <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">龙虎网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">东莞时间</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">北方网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">汽车之家</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">懂车帝</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中国搜索</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">乐居网</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">人民论坛</a>
    </li>
    <li class="item">
    <a target="_blank" href="" rel="noopener noreferrer">中国财富网</a>
    </li>
    </ul>
    </div>
    <div class="company-wrapper"></div>

    </div>
    </div>
    </div>
    </div>
}
export default index
