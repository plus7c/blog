
function About() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"></link>
      <strong>About / 关于我</strong>
      <div className="my-1 ml-5">
        <h2 className="my-1">🎓&nbsp;我是Zplus7，广州大学的一名三年级本科生 <br /></h2>
        <h2 className="my-1">🌱&nbsp;我对编程世界充满了热情，希望在此记录下我的技术成长之路。<br /></h2>
        <h2 className="my-1">🚴‍♀️&nbsp;此外，我也会在这里分享生活中的所闻、所见、所思</h2>
      </div>


      {/* <h3> 👨🏻‍💻 About Me </h3>

      - 🔭 &nbsp; I’m currently learning Nuxt.js Application Development and building my blog with next.js.
      - 🎓 &nbsp; a CS junior student in Gzhu.
      - 🌱 &nbsp; Enthusiast in Comprehensive Front-End Development
      - 🚴‍♀️ &nbsp; Playing tennis and cycling as hobbies

      <h3>🛠 Tech Stack</h3>

      - 💻 &nbsp; JavaScript | Dart | Python | C++
      -  &nbsp; React.js | Vue.js | Flutter
      - 🔧 &nbsp; Visual Studio code | Android Studio | PyCharm | Git | Github Copilot */}
      
      <div className="flex ">
        <img className="m-auto" alt="GIF" src="/images/gif3.gif" width={300} height={250} />
      </div>

      <strong> 联系方式 </strong>

      <div className="my-2 ml-5 h-4">
        <a href="https://github.com/plus7c"><h2 className="my-1"><img className="float-left mr-2" src="/images/github.png" alt="" width={20} height={16} /></h2></a>
        <a href="https://juejin.cn/user/3400155979058925?"> <h2 className="my-1"><img className="float-left mr-2" src="/images/juejin.png" alt="" width={20} height={16} /></h2></a>
        <a href="https://twitter.com/Zplus7119495"> <h2 className="my-1"><img className="float-left mr-2" src="/images/twitter.png" alt="" width={20} height={16} /></h2></a>
        <a href="mailto:plus27@qq.com"> <h2 className="my-1"><img className="float-left mr-2" src="/images/email.png" alt="" width={20} height={16} /></h2></a>
      </div>

      
    </>
  )
}
export default About;
