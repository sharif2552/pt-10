import React from "react";

const IndexPage = () => (
  <div className="bg-gray-50 min-h-screen">
    {/* Headline Section */}
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
      <h1 className="text-6xl font-bold mb-4">Connecting Cardano</h1>
      <p className="text-2xl mb-8">Building highways to other networks</p>
      <div className="flex space-x-4">
        <a
          href="https://gitbook.com"
          className="bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-gray-100"
        >
          Documentation
        </a>
        <a
          href="https://apidocs.com"
          className="bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-gray-100"
        >
          Build On Mynth
        </a>
      </div>
    </section>

    {/* MyUSD Introduction Section */}
    <div className=" flex w-100vw flex-row justify-center ">
    <section className="flex flex-col lg:flex-row items-center lg:items-start py-20 lg:px-5 bg-white text-center lg:text-left lg:space-x-10 space-y-10 lg:space-y-0 px-4  lg:flex    ">

        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Introducing MyUSD</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
            Brief introduction about MyUSD goes here. Explain what it is and its
            benefits.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="aspect-w-16 aspect-h-9 flex justify-center">
              <iframe
                className="rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/Pe0ObwhTWhs"
                title="What is MyUSD? How is it so stable? Mynth Stablecoin, MyUSD explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
  
    </section>        
    </div>


    {/* Social Proof Section */}
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">In the Spotlight</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {/* Add your social proof elements here */}
        <div className="w-1/3 p-4">
          <img
            src="path/to/social-proof-logo1.png"
            alt="Logo 1"
            className="mx-auto mb-4"
          />
          <p className="text-gray-700">
            Short description of the social proof.
          </p>
        </div>
        <div className="w-1/3 p-4">
          <img
            src="path/to/social-proof-logo2.png"
            alt="Logo 2"
            className="mx-auto mb-4"
          />
          <p className="text-gray-700">
            Short description of the social proof.
          </p>
        </div>
        <div className="w-1/3 p-4">
          <img
            src="path/to/social-proof-logo3.png"
            alt="Logo 3"
            className="mx-auto mb-4"
          />
          <p className="text-gray-700">
            Short description of the social proof.
          </p>
        </div>
      </div>
    </section>

    {/* Intro Infographic Section */}
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">How It Works</h2>
      <div className="w-full max-w-4xl mx-auto">
        <img
          src="path/to/your/infographic.png"
          alt="Infographic"
          className="w-full rounded shadow-lg"
        />
      </div>
    </section>

    {/* Intro Text Section */}
    <section className="py-20 bg-gray-100 text-center">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">About Our Services</h2>
        <p className="text-xl text-gray-700 mb-8">
          Here you can write a more detailed introduction to your company and
          products.
        </p>
      </div>
    </section>

    {/* Partners Section */}
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {/* Add your partners' logos and descriptions here */}
        <div className="w-1/4 p-4">
          <img
            src="path/to/partner-logo1.png"
            alt="Partner 1"
            className="mx-auto mb-4"
          />
        </div>
        <div className="w-1/4 p-4">
          <img
            src="path/to/partner-logo2.png"
            alt="Partner 2"
            className="mx-auto mb-4"
          />
        </div>
        <div className="w-1/4 p-4">
          <img
            src="path/to/partner-logo3.png"
            alt="Partner 3"
            className="mx-auto mb-4"
          />
        </div>
      </div>
    </section>

    {/* Roadmap Section */}
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Roadmap</h2>
      <div className="w-full max-w-4xl mx-auto">
        {/* Add your roadmap content here */}
        <img
          src="path/to/roadmap-image.png"
          alt="Roadmap"
          className="w-full rounded shadow-lg"
        />
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Meet the Team</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {/* Add your team members' photos and bios here */}
        <div className="w-1/4 p-4">
          <img
            src="path/to/team-member1.jpg"
            alt="Team Member 1"
            className="mx-auto mb-4 rounded-full"
          />
          <p className="text-xl font-bold">Name</p>
          <p className="text-gray-700">Role</p>
        </div>
        <div className="w-1/4 p-4">
          <img
            src="path/to/team-member2.jpg"
            alt="Team Member 2"
            className="mx-auto mb-4 rounded-full"
          />
          <p className="text-xl font-bold">Name</p>
          <p className="text-gray-700">Role</p>
        </div>
        <div className="w-1/4 p-4">
          <img
            src="path/to/team-member3.jpg"
            alt="Team Member 3"
            className="mx-auto mb-4 rounded-full"
          />
          <p className="text-xl font-bold">Name</p>
          <p className="text-gray-700">Role</p>
        </div>
      </div>
    </section>

    {/* Social Links Section */}
    <footer className="py-10 bg-blue-600 text-white text-center">
      <div className="flex justify-center space-x-4">
        {/* Add your social media links here */}
        <a href="https://twitter.com" className="hover:underline">
          Twitter
        </a>
        <a href="https://linkedin.com" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com" className="hover:underline">
          GitHub
        </a>
      </div>
    </footer>
  </div>
);

export default IndexPage;
