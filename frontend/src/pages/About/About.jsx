import { Helmet } from "react-helmet-async";
import about1 from "../../assets/images/approved1.jpeg";
import about2 from "../../assets/images/approved3.jpeg";
import about3 from "../../assets/images/candid4.jpeg";
import about4 from "../../assets/images/approve-test2.png";
import about5 from "../../assets/images/approve-test.png";
import about6 from "../../assets/images/he-guy.jpeg";
import { AboutHero } from "./AboutHero";
const About = () => {
  return (
    <>
      <AboutHero />
      <main className="min-h-screen bg-white px-6 py-16 sm:px-12 md:px-20">
        <Helmet>
          <title>About MedGuard</title>
          <meta
            name="description"
            content="Learn about MedGuard's mission, innovation, and role in ensuring drug safety across Africa."
          />
        </Helmet>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-6"></h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <img
                src={about1}
                alt="Mission"
                className="rounded-xl w-full h-72 object-center object-cover shadow-lg"
                loading="lazy"
              />
              <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We aim to eliminate the threat of counterfeit drugs by creating
                a robust ecosystem of verification, awareness, and reporting.
                Our mission is rooted in saving lives, one verification at a
                time.
              </p>
            </div>

            <div>
              <img
                src={about2}
                alt="Technology"
                className="rounded-xl w-full h-64 object-cover shadow-lg"
                loading="lazy"
              />
              <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
                AI-Driven Technology
              </h2>
              <p className="text-gray-700 leading-relaxed">
                With MedGuard, users can scan a drug’s barcode, enter its NAFDAC
                number, or upload a photo. Our intelligent backend flags
                suspicious entries and offers immediate validation. AI also
                helps us spot trends and alert public health agencies in real
                time.
              </p>
            </div>

            <div>
              <img
                src={about3}
                alt="Reporting Tools"
                className="rounded-xl w-full h-64 object-cover shadow-lg"
                loading="lazy"
              />
              <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
                User-Powered Reporting
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Every user is a watchdog. By submitting fake drug cases,
                uploading suspicious packaging, and reporting discrepancies, our
                community keeps the ecosystem clean.
              </p>
            </div>

            <div>
              <img
                src={about4}
                alt="Outreach"
                className="rounded-xl w-full h-64 object-cover shadow-lg"
                loading="lazy"
              />
              <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
                Nationwide Outreach
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We collaborate with hospitals, pharmacies, NGOs, and student
                bodies to host workshops and safety campaigns. Education is key
                in the war against fake drugs.
              </p>
            </div>

            <div>
              <img
                src={about5}
                alt="Analytics"
                className="rounded-xl w-full h-64 object-cover shadow-lg"
                loading="lazy"
              />
              <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
                Data & Analytics
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our backend tools aggregate reports, track trends, and create
                visual dashboards for health bodies and policy makers. Data
                drives decisions that prevent pharmaceutical fraud.
              </p>
            </div>

            <div>
              <img
                src={about6}
                alt="Vision"
                className="rounded-xl w-full h-64 object-cover shadow-lg"
                loading="lazy"
              />
              <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where counterfeit drugs are a thing of the
                past, and technology ensures that every medication reaching a
                patient is verified, safe, and trusted.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-xl font-bold text-primary-dark mb-2">
              Together, we can end fake drugs in Africa.
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Whether you’re a patient, doctor, regulator, or advocate—MedGuard
              provides the tools to help you stay safe and make informed
              decisions. Join our mission to protect lives.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
