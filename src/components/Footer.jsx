

const Footer = () => {
    return (

        <footer className="footer footer-center bg-white text-black  rounded border-y-2 ">
        <h1 className="text-3xl font-bold mt-6">Gadget Heaven</h1>
        <p className="text-sm ">Leading the way in cutting-edge<br></br> technology and innovation.</p>

      
        <footer className="   footer bg-white text-black-content mb-5 ">
           
        

        <nav>
          <h6 className="font-bold text-black text-xl">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black text-xl">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black text-xl">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        </footer>
      </footer>
    );
};

export default Footer;