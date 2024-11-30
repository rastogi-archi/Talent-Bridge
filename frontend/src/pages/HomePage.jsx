import React from 'react';
import Card from '../components/Card';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='flex justify-center items-center mt-6 flex-col-reverse sm:flex-row sm:gap-8 gap-4'>
        <div className='flex-1 flex-col md:ml-5 xl:ml-24'>
          <h1 className='text-3xl text-[#1f7894] font-semibold sm:text-left md:text-4xl text-left ml-4 sm:ml-0 xl:text-5xl'>
            Connecting Minds, Building Solutions
          </h1>
          <p className='text-xs mt-2 m-4 sm:m-0 md:text-sm'>
            <span className='font-bold text-[#1f7894]'>Talent Bridge</span> is a collaborative platform aimed at connecting engineers, developers, and technical professionals from various disciplines. The platform is designed to facilitate professional collaboration, technical work, and project management in an efficient, organized, and intuitive manner.
          </p>
          <button className='text-white bg-[#1f7894] sm:p-2 p-1 w-24 sm:mt-2 rounded-full hover:bg-[#1988ab] ml-4 sm:ml-0 text-base'>
            Explore
          </button>
        </div>
        <div className='flex-1 ml-3 mr-3'>
          <img src="\heroImg.png" alt="" />
        </div>
      </div>

      {/* Feature Overview Section */}
      <div className='bg-[#1988ab] h-32 mt-4'></div>
      <div className='mt-4'>
        <div className='text-center'>
          <h2 className='text-3xl text-center mb-4 mt-8 font-medium inline-block relative'>
            Feature Overview
          </h2>
        </div>
        <div className='flex gap-4 justify-center mt-3 flex-col sm:flex-row m-2'>
          <Card
            image="\chatting.png"
            facility="Messaging and Chat"
            text="Chatting on websites enables real-time communication between users through text-based messages. It enhances user engagement by providing instant support, feedback, or collaboration."
          />
          <Card
            image="\connecting.png"
            facility="Connection Management"
            text="Connecting people of the same mindset fosters collaboration, shared ideas, and mutual support. It enables individuals with similar goals, values, or interests to engage in meaningful conversations"
          />
          <Card
            image="\query.png"
            facility="Query Solving"
            text="Query solving involves addressing questions or issues raised by users or clients. It is essential in providing support, gathering information, and resolving problems efficiently."
          />
        </div>
        <div className='text-center'>
          <h2 className='text-3xl text-center mb-4 mt-8 font-medium inline-block relative'>
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          <Faq ques="What is the purpose of this networking platform?" ans="This platform connects professionals from various industries, enabling collaboration, knowledge sharing, and the building of meaningful professional relationships." />
          <Faq ques="Is my data secure on this platform?" ans="Yes, we prioritize your privacy and security. All personal information is encrypted and stored securely." />
          <Faq ques="How do I start a conversation with someone?" ans="Once connected, you can use the messaging feature to communicate directly with other users." />
          <Faq ques="How do I report inappropriate behavior?" ans="If you encounter any inappropriate behavior, click on the Report User option on their profile or in the chat window. Our support team will address the issue promptly." />
          <Faq ques="Can I search for people with specific skills?" ans="Absolutely! Use the search bar to filter profiles by skills, industries, or specific keywords." />
        </div>
        <div>
          <div className='text-center'>
            <h2 className='text-3xl text-center mt-8 font-medium inline-block relative'>
              What Clients Say!
            </h2>
          </div>
          <p className='text-sm sm:text-lg text-center text-[#1988ab] mb-4'>See How Our Platform Helped Clients Achieve Their Goals</p>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default HomePage;
