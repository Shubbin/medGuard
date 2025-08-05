// // import { Helmet } from "react-helmet-async";
// // import about1 from "../../assets/images/approved1.jpeg";
// // import about2 from "../../assets/images/approved3.jpeg";
// // import about3 from "../../assets/images/candid4.jpeg";
// // import about4 from "../../assets/images/approve-test2.png";
// // import about5 from "../../assets/images/approve-test.png";
// // import about6 from "../../assets/images/he-guy.jpeg";
// // import { AboutHero } from "./AboutHero";
// // const About = () => {
// //   return (
// //     <>
// //       <AboutHero />
// //       <main className="min-h-screen bg-white px-6 py-16 sm:px-12 md:px-20">
// //         <Helmet>
// //           <title>About MedGuard</title>
// //           <meta
// //             name="description"
// //             content="Learn about MedGuard's mission, innovation, and role in ensuring drug safety across Africa."
// //           />
// //         </Helmet>

// //         <div className="max-w-6xl mx-auto text-center">
// //           <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-6"></h1>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
// //             <div>
// //               <img
// //                 src={about1}
// //                 alt="Mission"
// //                 className="rounded-xl w-full h-72 object-center object-cover shadow-lg"
// //                 loading="lazy"
// //               />
// //               <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
// //                 Our Mission
// //               </h2>
// //               <p className="text-gray-700 leading-relaxed">
// //                 We aim to eliminate the threat of counterfeit drugs by creating
// //                 a robust ecosystem of verification, awareness, and reporting.
// //                 Our mission is rooted in saving lives, one verification at a
// //                 time.
// //               </p>
// //             </div>

// //             <div>
// //               <img
// //                 src={about2}
// //                 alt="Technology"
// //                 className="rounded-xl w-full h-64 object-cover shadow-lg"
// //                 loading="lazy"
// //               />
// //               <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
// //                 AI-Driven Technology
// //               </h2>
// //               <p className="text-gray-700 leading-relaxed">
// //                 With MedGuard, users can scan a drug’s barcode, enter its NAFDAC
// //                 number, or upload a photo. Our intelligent backend flags
// //                 suspicious entries and offers immediate validation. AI also
// //                 helps us spot trends and alert public health agencies in real
// //                 time.
// //               </p>
// //             </div>

// //             <div>
// //               <img
// //                 src={about3}
// //                 alt="Reporting Tools"
// //                 className="rounded-xl w-full h-64 object-cover shadow-lg"
// //                 loading="lazy"
// //               />
// //               <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
// //                 User-Powered Reporting
// //               </h2>
// //               <p className="text-gray-700 leading-relaxed">
// //                 Every user is a watchdog. By submitting fake drug cases,
// //                 uploading suspicious packaging, and reporting discrepancies, our
// //                 community keeps the ecosystem clean.
// //               </p>
// //             </div>

// //             <div>
// //               <img
// //                 src={about4}
// //                 alt="Outreach"
// //                 className="rounded-xl w-full h-64 object-cover shadow-lg"
// //                 loading="lazy"
// //               />
// //               <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
// //                 Nationwide Outreach
// //               </h2>
// //               <p className="text-gray-700 leading-relaxed">
// //                 We collaborate with hospitals, pharmacies, NGOs, and student
// //                 bodies to host workshops and safety campaigns. Education is key
// //                 in the war against fake drugs.
// //               </p>
// //             </div>

// //             <div>
// //               <img
// //                 src={about5}
// //                 alt="Analytics"
// //                 className="rounded-xl w-full h-64 object-cover shadow-lg"
// //                 loading="lazy"
// //               />
// //               <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
// //                 Data & Analytics
// //               </h2>
// //               <p className="text-gray-700 leading-relaxed">
// //                 Our backend tools aggregate reports, track trends, and create
// //                 visual dashboards for health bodies and policy makers. Data
// //                 drives decisions that prevent pharmaceutical fraud.
// //               </p>
// //             </div>

// //             <div>
// //               <img
// //                 src={about6}
// //                 alt="Vision"
// //                 className="rounded-xl w-full h-64 object-cover shadow-lg"
// //                 loading="lazy"
// //               />
// //               <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
// //                 Our Vision
// //               </h2>
// //               <p className="text-gray-700 leading-relaxed">
// //                 We envision a future where counterfeit drugs are a thing of the
// //                 past, and technology ensures that every medication reaching a
// //                 patient is verified, safe, and trusted.
// //               </p>
// //             </div>
// //           </div>

// //           <div className="mt-20 text-center">
// //             <h3 className="text-xl font-bold text-primary-dark mb-2">
// //               Together, we can end fake drugs in Africa.
// //             </h3>
// //             <p className="text-gray-700 max-w-2xl mx-auto">
// //               Whether you’re a patient, doctor, regulator, or advocate—MedGuard
// //               provides the tools to help you stay safe and make informed
// //               decisions. Join our mission to protect lives.
// //             </p>
// //           </div>
// //         </div>
// //       </main>
// //     </>
// //   );
// // };

// // export default About;


// import { Helmet } from "react-helmet-async";
// import {
//   about1,
//   about2,
//   about3,
//   about4,
//   about5,
//   about6,
// } from "../../assets/images";
// import { AboutHero } from "./AboutHero";

// const aboutSections = [
//   {
//     image: about1,
//     title: "Our Mission",
//     desc: "We aim to eliminate the threat of counterfeit drugs by creating a robust ecosystem of verification, awareness, and reporting. Our mission is rooted in saving lives, one verification at a time.",
//   },
//   {
//     image: about2,
//     title: "AI-Driven Technology",
//     desc: "With MedGuard, users can scan a drug’s barcode, enter its NAFDAC number, or upload a photo. Our intelligent backend flags suspicious entries and offers immediate validation.",
//   },
//   {
//     image: about3,
//     title: "User-Powered Reporting",
//     desc: "Every user is a watchdog. By submitting fake drug cases and reporting discrepancies, our community keeps the ecosystem clean.",
//   },
//   {
//     image: about4,
//     title: "Nationwide Outreach",
//     desc: "We collaborate with hospitals, pharmacies, NGOs, and student bodies to host workshops and safety campaigns. Education is key in the war against fake drugs.",
//   },
//   {
//     image: about5,
//     title: "Data & Analytics",
//     desc: "Our backend tools aggregate reports, track trends, and create visual dashboards for health bodies. Data drives decisions that prevent pharmaceutical fraud.",
//   },
//   {
//     image: about6,
//     title: "Our Vision",
//     desc: "We envision a future where counterfeit drugs are a thing of the past, and technology ensures that every medication reaching a patient is verified, safe, and trusted.",
//   },
// ];

// const About = () => {
//   return (
//     <>
//       <Helmet>
//         <title>About MedGuard</title>
//         <meta
//           name="description"
//           content="Learn about MedGuard's mission, innovation, and role in ensuring drug safety across Africa."
//         />
//       </Helmet>

//       <AboutHero />

//       <main className="min-h-screen bg-gray-50 px-6 py-20 sm:px-10 lg:px-20">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-6">
//             Empowering Drug Safety in Africa
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
//             Discover how MedGuard is leveraging innovation, data, and community power to combat counterfeit drugs and promote a healthier Africa.
//           </p>

//           <div className="grid gap-14 md:grid-cols-2">
//             {aboutSections.map((section, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
//               >
//                 <img
//                   src={section.image}
//                   alt={section.title}
//                   className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="p-6 text-left">
//                   <h2 className="text-2xl font-bold text-primary-dark mb-2">
//                     {section.title}
//                   </h2>
//                   <p className="text-gray-700 leading-relaxed">
//                     {section.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-24 bg-primary-dark text-white p-10 rounded-xl shadow-lg">
//             <h3 className="text-2xl font-bold mb-3">
//               Together, we can end fake drugs in Africa.
//             </h3>
//             <p className="max-w-2xl mx-auto text-lg">
//               Whether you’re a patient, doctor, regulator, or advocate—MedGuard provides the tools to help you stay safe and make informed decisions. Join our mission to protect lives.
//             </p>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default About;


import { Helmet } from "react-helmet-async";
import about1 from "../../assets/images/approved1.jpeg";
import about2 from "../../assets/images/approved3.jpeg";
import about3 from "../../assets/images/candid4.jpeg";
import about4 from "../../assets/images/approve-test2.png";
import about5 from "../../assets/images/approve-test.png";
import about6 from "../../assets/images/he-guy.jpeg";
import { AboutHero } from "./AboutHero";

const aboutSections = [
  {
    image: about1,
    title: "Our Mission",
    desc: "We're committed to saving lives by eliminating counterfeit drugs through verification, awareness, and reporting.",
  },
  {
    image: about2,
    title: "AI-Driven Technology",
    desc: "From barcode scans to image detection, our AI ensures instant validation and trend detection in real-time.",
  },
  {
    image: about3,
    title: "User-Powered Reporting",
    desc: "Each user contributes to a safer world by submitting fake drug cases and flagging suspicious products.",
  },
  {
    image: about4,
    title: "Nationwide Outreach",
    desc: "Workshops and campaigns across Nigeria engage communities, educate youth, and drive national drug safety.",
  },
  {
    image: about5,
    title: "Data & Analytics",
    desc: "Aggregated data helps policymakers visualize trends and craft smarter interventions.",
  },
  {
    image: about6,
    title: "Our Vision",
    desc: "A future where no one fears taking medication. MedGuard ensures every drug is traceable, trusted, and safe.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About MedGuard</title>
        <meta
          name="description"
          content="Learn about MedGuard's mission, innovation, and role in ensuring drug safety across Africa."
        />
      </Helmet>

      <AboutHero />

      <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            MedGuard: Tech for Trustworthy Healthcare
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We’re building a future where every pill is safe, every report
            counts, and technology protects every household.
          </p>
        </div>

        <div className="space-y-24">
          {aboutSections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="md:w-1/2 relative">
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] object-cover object-center"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-br from-primary-dark/20 to-black/10 backdrop-blur-md"></div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold text-primary-dark mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {section.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-white shadow-xl rounded-3xl py-14 px-8 md:px-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary-dark mb-4">
            Together, We Can End Fake Drugs in Africa.
          </h3>
          <p className="text-gray-700 text-lg">
            Whether you’re a patient, healthcare provider, policymaker, or
            advocate — MedGuard empowers you to verify, report, and act. Let's
            build a continent free of counterfeit drugs.
          </p>
         <button className="mt-8 inline-block bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark/90 transition">
            Join the Mission
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
