import React from "react";
import "./Footer.scss";
import icon1 from "../../assets/img/call-icon.svg";
import icon2 from "../../assets/img/mail-icon.svg";
import icon3 from "../../assets/img/location-icon.svg";
import icon4 from "../../assets/img/building-icon.svg";
import x from "../../assets/img/x-icon.svg";
import instagram from "../../assets/img/instagram-icon.svg";
import facebook from "../../assets/img/facebook-icon.svg";
import youtube from "../../assets/img/youtube-icon.svg";
import send from "../../assets/img/send-icon.svg";

const Footer = () => {
  const footerDetails = [
    {
      icon: icon1,
      text: "+91 88281 80101",
    },
    {
      icon: icon2,
      text: "Support@welcomebids.in",
    },
    {
      icon: icon3,
      text: "Shop no: 1, Navnit Patel Chawl, Sant Kabir Marg, Dnyneshwar Nagar, Dahisar (East) Mumbai: 400068.",
    },
    {
      icon: icon4,
      text: "Company Name: WB AUCTIONS INDIA PRIVATE LIMITED",
    },
  ];
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Welcome Bids</h4>
            <p className="mb-5">
              Do online & physical auctions for Motor Vehicles and Non Motors
              segment's (2 Wheelers, 3 Wheelers, 4 Wheelers, Commercial
              Vehicles, Construction Equipments, Farm Equipment & Machinery)
              through our online portal & Android App,
            </p>
            <div className="footer-socialmedia-wrapper">
              <div className="item">
                <img src={x} alt="" />
              </div>
              <div className="item">
                <img src={instagram} alt="" />
              </div>
              <div className="item">
                <img src={facebook} alt="" />
              </div>
              <div className="item">
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ps-0 ps-lg-5">
              <h4>Contact Details</h4>
              {footerDetails.map((detail, index) => (
                <div className="footer-details-wrapper" key={index}>
                  <div className="img-wrapper me-3">
                    <img src={detail.icon} alt="" />
                  </div>
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <h4>Subscribe Now</h4>
            <div className="footer-subscribe-wrapper">
              <input type="text" placeholder="Launch Ads Like a Unicorn" />
              <button className="btn btn-primary">
                <img src={send} alt="" />
              </button>
            </div>
            <div class="my-3 form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label text-black-light fw-light">
                By signing up, you agree to receive mail.
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
