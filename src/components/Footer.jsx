import akatsukit from '../assets/images/akatsuki.png'
const Footer = () => {
  return (
    <div className="flex flex-row m-4 p-5 justify-evenly">
      <div className="flex flex-col w-[350px] m-12">
        <img  className='w-[150px] h-[100px]  object-contain ' src={akatsukit} alt="" />
        <p>
        Empowering future developers through coding education and community support.
        </p>
      </div>
      <div className="flex flex-col m-12">
        <h2 className='pb-8 font-bold'>Quick Links</h2>
        <nav className="flex flex-col">
          <a href="" className='hover:text-red-500 '>Events</a>
          <a href="" className='hover:text-red-500'>About Us</a>
          <a href=""className='hover:text-red-500'>Contact Us</a>
        </nav>
      </div>
      <div className="flex flex-col m-12">
        <h2 className='pb-8 font-bold'>Legal Stuff</h2>
        <nav className="flex flex-col">
          <a href=""className='hover:text-red-500'>Privacy Notice</a>
          <a href=""className='hover:text-red-500'>Cookie Policy</a>
          <a href=""className='hover:text-red-500'>Terms Of Use</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
