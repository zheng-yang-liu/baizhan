
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabber/index/index","pages/tabber/classify/classify","pages/tabber/study/study","pages/tabber/mine/mine"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#999","selectedColor":"#00b783","borderStyle":"white","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabber/index/index","iconPath":"static/tabar1.png","selectedIconPath":"static/tabaron1.png","text":"首页"},{"pagePath":"pages/tabber/classify/classify","iconPath":"static/tabar2.png","selectedIconPath":"static/tabaron2.png","text":"分类"},{"pagePath":"pages/tabber/study/study","iconPath":"static/tabar3.png","selectedIconPath":"static/tabaron3.png","text":"学习"},{"pagePath":"pages/tabber/mine/mine","iconPath":"static/tabar4.png","selectedIconPath":"static/tabaron4.png","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"baizhan","compilerVersion":"3.7.3","entryPagePath":"pages/tabber/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabber/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationStyle":"custom"}},{"path":"/pages/tabber/classify/classify","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","navigationBarBackgroundColor":"#00b783","navigationBarTextStyle":"white","enablePullDownRefresh":false}},{"path":"/pages/tabber/study/study","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"学习中心","navigationBarBackgroundColor":"#00b783","navigationBarTextStyle":"white","enablePullDownRefresh":false}},{"path":"/pages/tabber/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","navigationBarBackgroundColor":"#00b783","navigationBarTextStyle":"white","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});