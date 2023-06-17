import React from "react";
import ContactFormBackground from '~/components/legacy/tailwindui/ContactFormBG';
import TempContactForm from '~/components/legacy/tailwindui/ContactForm';
import { Container } from "~/components/legacy/tailwindui/Container";

export default function ContactUsSection() {
  return (
    <>
     <Container id='contact-us' classNames="py-20 px-4 lg:px-16 overflow-hidden relative border-gray-800 border-2">
            <div className="container">
              <div className="mb-5 flex items-center max-w-md">
                <h2 className="text-slate-900 dark:text-gray-200 text-3xl font-bold">
                Contact Us</h2>
              </div>

              <div
                className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-200 lg:justify-between -mx-4">

                <div
                  className="w-full lg:w-1/2 xl:w-6/12 px-4">
                  <div
                    className="max-w-[570px] mb-12 lg:mb-0">
                    <p className="text-2xl font-extrabold text-gray-800 leading-relaxed stand__out__text mb-9 mx-5">
                    Get in touch with our team for any inquiries or support you may need.
                    </p>
                    <p className="text-2xl font-medium text-gray-800 leading-relaxed mb-9 mx-5">
                      Based in <span className="font-bold italic">America</span>, available worldwide.
                    </p>



                  </div>
                </div>
                <div className="w-full lg:w-1/2 xl:w-5/12 px-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
                  <div className="bg-gray-100 dark:bg-slate-800 relative rounded-lg p-8 sm:p-12 shadow-lg">
                    <TempContactForm />
                    <ContactFormBackground />
                  </div>
                </div>
                
              </div>
            </div>
            
          </Container>
    </>
  );
};
