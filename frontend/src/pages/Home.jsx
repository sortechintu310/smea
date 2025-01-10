
export default function Home() {
     return (
          <>
               <div className="home flex justify-evenly items-center">
                    <div className="content flex flex-col items-start gap-4">
                         <h1 className="text-6xl font-bold">Social Insights <span className="text-emerald-500">Pro</span></h1>
                         <p style={{ color: "#ECDFCC" }} className="text-lg font-semibold">
                              Unlock the power of social media analytics with Engagelytics! <br /> Our platform helps you gain actionable insights <br />into your posts' performance, audience engagement, <br /> and trending hashtags. Whether you're a marketer, content creator,  <br />or data enthusiast, explore in-depth metrics  <br />to optimize your social media strategy like never before.</p>
                         <a href="/insightbot">
                              <button className="p-4 rounded-md text-xl bg-emerald-500 text-white font-bold hover:bg-emerald-900 hover:scale-[.9] transition">Get Started  <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                         </a>
                    </div>
                    <div className="illustration">
                         <img src="./images/analytics_illustration.png" alt="" className="h-[80vh]" />
                    </div>
               </div>
               <section className="mt-16 p-8">
                    <h2 className="text-3xl font-bold text-emerald-600 text-center mb-8">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <div className="p-6 shadow-sm shadow-slate-500 rounded-lg">
                              <h3 className="text-xl font-bold text-slate-300 mb-4">Data-Driven Insights</h3>
                              <p className="text-slate-300">
                                   Our platform leverages cutting-edge analytics to give you real-time insights into how
                                   your posts are performing. With detailed engagement metrics, you can assess which
                                   content resonates most with your audience and refine your strategies.
                              </p>
                         </div>
                         <div className="p-6 shadow-sm shadow-slate-500 rounded-lg">
                              <h3 className="text-xl font-bold text-slate-300 mb-4">Easy-to-Use Interface</h3>
                              <p className="text-slate-300">
                                   We believe that powerful tools should be easy to use. Engagelytics offers a
                                   user-friendly interface that allows you to effortlessly navigate through the data and
                                   uncover valuable insights with just a few clicks.
                              </p>
                         </div>
                         <div className="p-6 shadow-sm shadow-slate-500 rounded-lg">
                              <h3 className="text-xl font-bold text-slate-300 mb-4">AI Chatbot</h3>
                              <p className="text-slate-300">
                                   Our chatbot is designed to enhance your user experience by providing quick, automated responses to common queries. Whether you're looking for data insights, need help navigating our platform, or simply want a recommendation, our intelligent bot is here to assist 24/7.
                              </p>
                         </div>
                    </div>
               </section>
             
          </>
     )
}