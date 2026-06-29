const Footer = () => {
  return (
    <div className="bg-black">
      <div className="p-20 text-white grid grid-cols-4 gap-25">
        <div>
          <h3 className="mb-2">CS — Ticket System</h3>
          <p className="text-[#A1A1AA] text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h4 className="mb-2">Company</h4>
          <div className="text-[#A1A1AA] space-y-3">
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Sale</p>
          </div>
        </div>
        <div>
          <h4 className="mb-2">Services</h4>
          <div className="text-[#A1A1AA] space-y-3">
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
          </div>
        </div>
        <div>
          <h4 className="mb-2">Information</h4>
          <div className="text-[#A1A1AA] space-y-3">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
          </div>
        </div>
      </div>
      <small className="bg-black text-[#A1A1AA] flex justify-center">© 2026 CS — Ticket System. All rights reserved.</small>
    </div>
  );
};

export default Footer;
