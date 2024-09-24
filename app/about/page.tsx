export const metadata = {
  title: "About Me",
  description: "This is about me"
}
function About() {
  return (
    <div className="max-w-lg mx-auto">
      <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"></link>
      <strong>自我介绍</strong>
      <div className="my-1 ml-5">
        <h2 className="my-1">🎓&nbsp;我叫普拉思，一枚前端rookie，曾在美团到家和货拉拉搬家组实习 <br /></h2>
        <h2 className="my-1">🚴‍♀️&nbsp;平时酷爱运动，业余网球爱好者，篮球、骑行、桌球也有所涉猎。<br /></h2>
        <h2 className="my-1">🌱&nbsp;本网站使用Next + TS + TailwindCSS + AntD + Vercel进行开发</h2>
      </div>

      <strong>技术经历</strong>
      <div className="my-1 ml-5">
        <div className="mb-1">
          <img className="float-left mr-2" src="/images/美团.svg" alt="" width={24} height={32} />
          参与美团青云聚信PC web端前端开发，使用React + TS + Clodop + WebSocket + Nginx
          <a href="https://www.cyanclouds.com/" target="_blank" className="underline ml-2">青云官网介绍</a>
        </div>
        <div className="mb-1">
          <img className="float-left mr-2" src="/images/货拉拉.svg" alt="" width={24} height={32} />
          参与货拉拉搬家后台运营管理系统的前端页面开发，使用Vue2 + React + qiankun + Vite + Ant Design Pro
        </div>
        <div className="mb-1">
          <img className="float-left mr-2" src="/images/yiban.ico" alt="" width={22} height={32} />
          参与以伴青少年发展中心的官网组件开发，使用 Nuxt + Element UI + Echart + Less
        </div>

      </div>

      

      <div className="">
        <img className="m-auto" alt="GIF" src="/images/gif3.gif" width={250} height={250} />
      </div>

      <strong> 个人链接 </strong>
      <div className="my-2 mb-8 ml-5 h-4">
        <a href="https://github.com/plus7c" target="_blank" ><h2 className="my-1"><img className="float-left mr-2" src="/images/github.png" alt="" width={40} height={32} /></h2></a>
        <a href="https://juejin.cn/user/3400155979058925?" target="_blank"> <h2 className="my-1"><img className="float-left mr-2" src="/images/juejin.png" alt="" width={40} height={32} /></h2></a>
        <a href="https://twitter.com/plus7zzz" target="_blank"> <h2 className="my-1"><img className="float-left mr-2" src="/images/twitter.png" alt="" width={40} height={32} /></h2></a>
        <a href="https://space.bilibili.com/391498741?spm_id_from=333.1007.0.0" target="_blank"> <h2 className="my-1"><img className="float-left mr-2" src="/images/bilibili.png" alt="" width={40} height={32} /></h2></a>
        <a href="mailto:plus27@qq.com" target="_blank"> <h2 className="my-1"><img className="float-left mr-2" src="/images/邮箱.svg" alt="" width={40} height={32} /></h2></a>
      </div>
    </div>
  )
}
export default About;