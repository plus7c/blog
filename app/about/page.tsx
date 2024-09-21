export const metadata = {
  title: "About Me",
  description: "This is about me"
}
function About() {
  return (
    <div className="max-w-lg mx-auto ">
      <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"></link>
      <strong>自我介绍</strong>
      <div className="my-1 ml-5">
        <h2 className="my-1">🎓&nbsp;我叫普拉思，一枚前端rookie，曾在美团到家和货拉拉搬家组实习 <br /></h2>
        <h2 className="my-1">🚴‍♀️&nbsp;平时酷爱运动，业余网球爱好者，篮球、骑行、桌球也有所涉猎。<br /></h2>
        <h2 className="my-1">🌱&nbsp;本网站使用Next + TS + TailwindCSS + AntD + Vercel进行开发</h2>
      </div>

      <div className="flex ">
        <img className="m-auto" alt="GIF" src="/images/gif3.gif" width={300} height={250} />
      </div>

      <strong> 个人链接 </strong>

      <div className="my-2 ml-5 h-4">
        <a href="https://github.com/plus7c"><h2 className="my-1"><img className="float-left mr-2" src="/images/github.png" alt="" width={40} height={32} /></h2></a>
        <a href="https://juejin.cn/user/3400155979058925?"> <h2 className="my-1"><img className="float-left mr-2" src="/images/juejin.png" alt="" width={40} height={32} /></h2></a>
        <a href="https://twitter.com/plus7zzz"> <h2 className="my-1"><img className="float-left mr-2" src="/images/twitter.png" alt="" width={40} height={32} /></h2></a>
        <a href="mailto:plus27@qq.com"> <h2 className="my-1"><img className="float-left mr-2" src="/images/email.png" alt="" width={40} height={32} /></h2></a>
      </div>



    </div>
  )
}
export default About;