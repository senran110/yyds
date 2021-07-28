module.exports = {
  base: "/xiao/",
  title: "啥也不会的森然",
  description: "勇敢然然 不怕困难",
  dest: "public",
// 站点显示 图标
  head: [
    [
      "link",
      {
        "rel": "啥也不会的森然",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",//移动端优化
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  //多语言

  //theme: "reco",// 主题
  "theme": "reco",
  // 博客配置
  themeConfig: {
    //导航栏
    nav: [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文章",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "关于森然",
        "link": "/zan/senran02/",
        "icon": "reco-other"
      },
      {
        "text": "评论",
        "link": "/zan/pl/",
        "icon": "reco-suggestion"
      },
      {
        "text": "站点",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    sidebar: {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    // 标签
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
     // 标签
    friendLink: [
      {
        title: "午后南杂",
        desc: "此博客模板就是基于这位大佬开源主题搭建而成",
        email: "1156743527@qq.com",
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://www.recoluan.com"
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    logo: "/ajk.png",// 左侧logo
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "更新时间",// 底部文章跟新时间
    author: "senran",  //作者名字
    authorAvatar: "/dai.jpg",  // 小侧边栏头像
    record: "xxxx",  //icp备案文案
    startYear: "2021",// 项目开始时间
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    smooth: "true", //平滑滚动
  },
  // 插件 
  "markdown": {
    "lineNumbers": true //扩展语法插件

  },
  plugins:{
  //音乐插件 https://github.com/moefyit/vuepress-plugin-meting
  'meting': {
    // 这个 API 是不可用的，只是作为示例而已
    auto: 'https://y.qq.com/n/ryqq/playlist/8089524926',
    meting: {
      server: "tencent",  //歌单的平台、我这里是QQ音乐的平台
      type: "playlist",
      mid: "8089524926", //链接后面的id
    }, // 不配置该项的话不会出现全局播放器  
    aplayer: {
      lrcType: 3,
      autoplay: true ,//自动播放 关闭false
      volume:'0.3',
    },
  },
  //评论插件

    //'props':
    //  {
     //   title: 'Vssue Demo', 
      //   options选项中的所有参数，会传给Valine的配置
     //   options: {
      //    owner: 'Aurora森然',
      //    repo: 'xswl',
      //    clientId: 'e19bfdccf7720eb63cf19ab6f66143ba4363d3ae62b91738320dd10e91b760a8',
      //    clientSecret:'3e9651f11eb8698f67f6820d4816ec477041a39ee2d8388fc6af8c1a2e4b3c6b',
     //   }
    //  },
    // "vuepress-plugin-comment": {
     //   choosen: 'valine',
    //    options:{
     //     el:'#valine-vuepress-comment',
     //   appId: 'Udra3UlCo6sdfvxMKHhLrTjQ-gzGzoHsz',
     //   appKey: 'b63PyoRyb5B1tHCXUYC4254x',
      //  path: '<%- frontmatter.commentid || frontmatter.permalink %>',
      //  placeholder: '填写邮箱地址可以及时收到回复噢...',
        
     //   }
    // },
    //valineConfig: {
   //   appId: 'oTLXPwdItpYuuQOVrY5IKDzr-gzGzoHsz',// your appId
    // appKey: 'HG1pn7rGQ3TEfHtET4B0pYtn', // your appKey
  // }
  '@vuepress-reco/comments':{
    solution: 'valine',
    options: {
      appId: 'oTLXPwdItpYuuQOVrY5IKDzr-gzGzoHsz',// your appId
      appKey: 'HG1pn7rGQ3TEfHtET4B0pYtn', // your appKey
      path: '<%- frontmatter.commentid || frontmatter.permalink %>',
      placeholder: '填写邮箱地址可以及时收到回复噢...',
    }
  }


  //'@vssue/vuepress-plugin-vssue': {
    // 设置平台，而不是 `api` 
   // platform: 'github-v4',

    // 其他的 Vssue 配置
  //  owner: 'senran110', // 仓库的拥有者的名称
  //  repo: 'yyds', // 存储 Issue 和评论的仓库的名称
   // clientId: '61150dc88d62afe06e9d', // 刚保存下来的  Client ID
   // clientSecret: '78ce70b01f6bf8b6be0bfe356cc1d2d986800591', //  刚才保存下来的 Client secrets
  //},
  }
}