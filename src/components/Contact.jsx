import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4z98wfv', 'template_7asc84p', e.target, 'PJE7IovR9US8PWQSp')
      .then((result) => {
        console.log('Result:', result); // Log the result
        alert('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error:', error); // Log the error
        alert('Failed to send message. Please check the console for details.');
      });
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-10 md:py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let&apos;s Talk</h3>
            <p className="text-base md:text-lg mb-6">I&apos;m open to discussing software development projects or partnership opportunities and eager to build a strong professional network. Let&apos;s connect and explore how we can collaborate!</p>
            <div className='mb-4'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:chandrashekarreddyv2001@gmail.com" className='hover:underline text-green-400'>
                chandrashekarreddyv2001@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+1 407 795 0015</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>Orlando, Florida, US</span>
            </div>
          </div>
          <div className='flex-1'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2 text-lg font-medium'>Your Name</label>
                <input 
                  type="text" 
                  name="from_name"
                  className='w-full p-2 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2 text-lg font-medium'>Email</label>
                <input 
                  type="email" 
                  name="email"
                  className='w-full p-2 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email'
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2 text-lg font-medium'>Message</label>
                <textarea 
                  name="message"
                  className='w-full p-2 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                  required
                />
              </div>
              <button type="submit" className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
