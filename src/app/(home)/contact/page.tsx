import Breadcrumb from "@/components/layout/Breadcrumb";
import InstagramFeed from "@/components/layout/InstagramFeed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description: "Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template",
  keywords: [
    "tour",
    "travel",
    "booking",
    "rental",
    "nextJs",
    "tailwind",
    "trip",
    "beach",
    "holidy",
    "cruise",
    "vacation",
  ],
};

const Contact = () => {
  return (
    <>
      <Breadcrumb
        page="Contact Us"
        pageTitle="A Feel Free to Contact with us"
      />

      {/*========== CONTACT US STYLE START ==========*/}
      <div className="lg:pt-30 pt-24  relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white">
        <div className="absolute top-[7%] right-0 max-w-[14%] z-minus lg:inline-block hidden">
          <img
            src="./assets/images/illustration/tree-illustration.png"
            alt="leaf"
          />
        </div>
        <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
          <img
            src="./assets/images/illustration/bird-illustration.png"
            alt="leaf"
          />
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-base">
            <div className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp hover:bg-green-100 hover:scale-105 transition-all">
              <div className="flex ">
                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#219FFF]">
                  <i className="bi bi-envelope-at" />
                </div>
                <div>
                  <h4 className="text-dark-1 lg:text-2md text-md font-semibold">
                    Email Us
                  </h4>
                  <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                    <li>
                      <a
                        href="mailto:info@aktivferiennepal.com"
                        className="hover:text-primary-1 duration-200"
                      >
                        info@aktivferiennepal.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp hover:bg-green-100 hover:scale-105 transition-all"
              data-wow-delay="0.2s"
            >
              <div className="flex">
                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#17BD8D]">
                  <i className="bi bi-telephone-forward" />
                </div>
                <div>
                  <h4 className="text-dark-1 lg:text-2md text-md font-semibold">
                    Call Us
                  </h4>
                  <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                    <li>
                      <a
                        href="tel:+977-9861161367"
                        className="hover:text-primary-1 duration-200"
                      >
                        +977-9861161367
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+977-9802369833"
                        className="hover:text-primary-1 duration-200"
                      >
                        +977-9802369833
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+977 - 1 - 4390642"
                        className="hover:text-primary-1 duration-200"
                      >
                        +977 - 1 - 4390642
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp hover:bg-green-100 hover:scale-105 transition-all"
              data-wow-delay="0.2s"
            >
              <div className="flex">
                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#ff7e33]">
                  <i className="bi bi-person" />
                </div>
                <div>
                  <h4 className="text-dark-1 lg:text-2md text-md font-semibold">
                    Account Details
                  </h4>
                  <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                    <li>
                      <a href="#" className="hover:text-primary-1 duration-200">
                        01 - 5911739
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-1 duration-200">
                        9802369832
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp hover:bg-green-100 hover:scale-105 transition-all "
              data-wow-delay="0.4s"
            >
              <div className="flex">
                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#F53D6B]">
                  <i className="bi bi-geo-alt" />
                </div>
                <div>
                  <h4 className="text-dark-1 lg:text-2md text-md font-semibold">
                    We're Located At
                  </h4>
                  <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                    <li>
                      <a
                        href="mailto:info@supportcompany.com"
                        className="hover:text-primary-1 duration-200"
                      >
                        G.P.O. Box: 12057, Alka Galli, Kapurdhara
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pt-30 pt-24">
            <div className="text-center lg:pb-[60px] pb-[40px]">
              <h5 className="section-sub-title-v1">Get in Touch</h5>
              <h2 className="section-title-v1">Feel Free to Contact with us</h2>
            </div>
          </div>
        </div>
      </div>
      {/*========== CONTACT US STYLE END ==========*/}
      <InstagramFeed />
    </>
  );
};

export default Contact;
