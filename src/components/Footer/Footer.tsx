/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
  overlapClassName: any;
  REQUESTACallBackClassName: any;
}

export const Footer = ({ className, overlapClassName, REQUESTACallBackClassName }: Props): JSX.Element => {
  return (
    <div className={`footer ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <div className="rectangle" />
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="overlap-group-wrapper">
              <div className="div">
                <div className="image" />
                <div className="image-wrapper">
                  <img className="img" alt="Image" src="/img/image-60.png" />
                </div>
              </div>
            </div>
            <div className={`REQUEST-a-CALL-BACK ${REQUESTACallBackClassName}`}>REQUEST A CALL BACK</div>
            <div className="group-2">
              <div className="group-3">
                <div className="text-wrapper">First name</div>
                <img className="line-2" alt="Line" src="/img/line-488.svg" />
              </div>
              <div className="group-4">
                <div className="text-wrapper">Last name</div>
                <img className="line-2" alt="Line" src="/img/line-489.svg" />
              </div>
              <div className="group-5">
                <div className="text-wrapper">Email</div>
                <img className="line-2" alt="Line" src="/img/line-490.svg" />
              </div>
            </div>
            <p className="connect-with-us-to">
              Connect with us to know more about our new products, sales and launches!
            </p>
            <div className="group-wrapper">
              <div className="group-6">
                <p className="i-m-happy-to-recieve">
                  I’m happy to recieve marketing communications and agree to the data policy
                </p>
                <img className="frame" alt="Frame" src="/img/frame-5.svg" />
              </div>
            </div>
            <div className="button-filled-large">
              <div className="div-wrapper">
                <div className="group-7">
                  <div className="overlap-group-2">
                    <div className="large-roundedbutton">SEND</div>
                    <img className="frame-2" alt="Frame" src="/img/frame-6.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-3">
            <div className="group-8">
              <div className="text-wrapper">WAYS TO CONNECT</div>
              <div className="landline">
                <span className="span">
                  Landline:
                  <br />
                </span>
                <a href="tel:+91-22-42555334" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper-2">+91-22-42555334</span>
                </a>
              </div>
              <div className="mobile">
                <span className="span">
                  Mobile:
                  <br />
                </span>
                <a href="tel:+91-8104971152" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper-2">+91-8104971152 </span>
                </a>
                <a href="tel:+91-8104971154" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper-2">+91-8104971154</span>
                </a>
                <span className="text-wrapper-3">, </span>
                <a href="tel:+91-9082687279" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper-2">+91-9082687279</span>
                </a>
                <span className="text-wrapper-3">, </span>
                <a href="tel:+91-9821136685" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper-2">+91-9821136685</span>
                </a>
              </div>
              <div className="email-enquiry">
                <span className="span">
                  Email:
                  <br />
                </span>
                <a href="mailto:enquiry@libratherm.com" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper-2">enquiry@libratherm.com</span>
                </a>
                <span className="text-wrapper-3">, </span>
                <a href="mailto:libratherm@libratherm.com" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper-2">libratherm@libratherm.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="group-9" />
        <div className="group-10">
          <div className="group-11">
            <div className="text-wrapper-4">USEFUL LINKS</div>
            <div className="frame-4">
              <div className="text-wrapper-5">Careers</div>
              <div className="text-wrapper-6">Terms of Service</div>
            </div>
          </div>
          <div className="group-12">
            <div className="text-wrapper">WE ARE SOCIAL!</div>
            <img className="group-13" alt="Group" src="/img/group-1000003577.png" />
          </div>
        </div>
        <div className="group-14">
          <div className="group-15">
            <div className="text-wrapper-4">POLICIES</div>
            <div className="frame-4">
              <div className="text-wrapper-5">Quality Policy</div>
              <div className="text-wrapper-6">Privacy Policy</div>
              <div className="text-wrapper-6">Shipping Policy</div>
              <div className="text-wrapper-6">Cancellation Policy</div>
              <div className="text-wrapper-6">Return &amp; Refund Policy</div>
            </div>
          </div>
        </div>
        <div className="group-16">
          <div className="text-wrapper">OFFICE ADDRESS</div>
          <p className="element-diamond">
            401-403, Diamond Industrial Estate,Ketki Pada Road, Dahisar (East), Mumbai 400068, Maharashtra, India.
          </p>
          <div className="button-filled-large-2">
            <div className="group-17">
              <div className="group-18">
                <div className="large-roundedbutton-wrapper">
                  <div className="large-roundedbutton-2">DOWNLOAD BROCHURE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-filled-large-3">
            <div className="group-19">
              <div className="group-20">
                <div className="group-18">
                  <div className="group-21">
                    <div className="large-roundedbutton-3">Get it on Whatsapp</div>
                  </div>
                </div>
              </div>
              <img className="vector" alt="Vector" src="/img/vector-15.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
