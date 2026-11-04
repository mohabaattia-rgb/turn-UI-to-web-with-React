export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logo">
          <img src="/Icon@2x.png" alt="" />
          <h1>Nexcent</h1>
        </div>
        <p>Copyright © 2020 Nexcent ltd.</p>
        <p>All rights reserved</p>
        
        <div className="socials">
          <img src="/instagram.png" alt="" />
          <img src="/dribbble.png" alt="" />
          <img src="/twitter.png" alt="" />
          <img src="/youtube.png" alt="" />
        </div>
      </div>

      <div className="footer-col">
        <h4>Company</h4>
        <a href="#">About us</a>
        <a href="#">Blog</a>
        <a href="#">Contact us</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
      </div>

      <div className="footer-col">
        <h4>Support</h4>
        <a href="#">Help center</a>
        <a href="#">Terms of service</a>
        <a href="#">Legal</a>
        <a href="#">Privacy policy</a>
        <a href="#">Status</a>
      </div>

      <div className="footer-col">
        <h4>Stay up to date</h4>
        <div className="email-box">
          <input type="email" placeholder="Your email address" />
          <img src="/send.png" alt="" />
        </div>
      </div>
    </footer>
  );
}
