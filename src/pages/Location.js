import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/footer/Footer";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
const Location = () => {
  const url =
    "https://images.unsplash.com/photo-1612968353352-8fd0a1ede81f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHVyYmFuJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <div>
      {/* === fixed navbar ====== */}
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-85 w-full bg-cover bg-no-repeat  "
      >
        <div className="font-serif lg:text-[4rem] text-[2rem] text-white flex justify-center items-center  py-[8rem] ">
          <h1>Location</h1>
        </div>
        <Navbar2 />
      </div>

      {/* ========== location content ======= */}
      <div className="max-w-7xl mx-auto my-16 px-8 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-8 ">
          <div>
            <h1 className="text-2xl font-semibold font-serif ">
              Tunrkey Reality
            </h1>
            <h3 className="my-5 text-xl ">
              <ImLocation2 /> 505 5th Floor Pioneer Urban Square Sector 62,
              Haryana 122102
            </h3>
            <MdEmail />
            <h3 className="mb-5 text-xl ">
              Email : turnkeyreality12@gmail.com
            </h3>
            <h3 className="mb-5 text-xl ">
              {" "}
              <BsTelephoneFill />
              9310000053
            </h3>
            <h3 className="text-xl">
              Join our dynamic and growing team at,TURNKEY REALITY, where we are
              passionate about real estate and dedicated to delivering
              exceptional services to our clients. We believe that our success
              stems from the talent and commitment of our team members, and we
              are always looking for driven individuals who share our vision and
              values At,TURNKEY REALITY
            </h3>
          </div>

          {/* =============google map =========== */}
          <div>
            <h1>Location</h1>
            <div className="w-full">
              <iframe
                width="100%"
                height="600"
                frameborder="0"
                // scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=pioneer%20urbern%20square%20gurgrma+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  measure distance on map
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
      {/* =========footer ======= */}
      <Footer />
    </div>
  );
};

export default Location;
