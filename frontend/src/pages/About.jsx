import React from 'react';

const teamMembers = [
  {
    name: "Chintu Sorte",
    designation: "Web Developer",
    college: "Persuing MCA at JDCOEM",
    photo: "https://avatars.githubusercontent.com/u/179445727?v=4"
  },
  {
    name: "Prathmesh Chawhan",
    designation: "Web Developer",
    college: "Persuing MCA at JDCOEM",
    photo: "https://avatars.githubusercontent.com/u/117448429?v=4"
  },
  {
    name: "Darshan Mahajan",
    designation: "Full Stack Web Developer",
    college: "Pratigraham Sports",
    photo: "https://avatars.githubusercontent.com/u/112978158?v=4"
  },
];

const AboutPage = () => {
  return (
    <div className="p-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-emerald-600 mb-4">About Us</h1>
        <p className="text-lg text-slate-300 mb-8" style={{padding:"0rem 5rem"}}>
          Welcome to Social Insights, where we provide cutting-edge social media analytics to help you
          grow your online presence. Our team of passionate individuals works hard to bring you the
          best insights and data-driven strategies. <br />
        <a href="#team" className="underline">Meet the Team</a>
        </p>
      </header>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-emerald-600 text-center mb-8">Our Mission <i class="fa-solid fa-bullseye"></i></h2>
        <p className="text-lg text-slate-300 text-center">
          At Social Insights, our mission is simple: to help you harness the power of social media
          data. We understand the challenges of managing online presence and engagement across
          multiple platforms. Our goal is to provide you with intuitive and easy-to-use analytics
          tools that take the guesswork out of digital marketing. Through detailed metrics and
          performance indicators, we allow you to fine-tune your strategies, achieve better
          engagement rates, and ultimately succeed in the highly competitive world of social media.
          
        </p>
      </section>
      


      <section id="team" className="mt-16">
        <h2 className="text-3xl font-bold text-emerald-600 text-center mb-8">Our Team</h2>
        <div className="flex justify-center space-x-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-xs rounded-lg overflow-hidden outline outline-dashed outline-slate-400">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                <p className="text-md text-slate-500">{member.designation}</p>
                <p className="text-sm text-slate-700"> &nbsp;{member.college}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
