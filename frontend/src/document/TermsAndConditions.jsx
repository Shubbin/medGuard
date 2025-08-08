// const TermsAndConditions = () => {
//   return (
//     <div className="max-w-4xl px-4 py-20 mx-auto text-gray-800">
//       <h1 className="mb-6 text-3xl font-bold">Terms and Condition</h1>
//       <p>This is your privacy policy.</p>
//     </div>
//   );
// };

// export default TermsAndConditions;


const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl px-4 mx-auto py-14">
      <div className="p-8 border border-gray-100 shadow-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl dark:border-gray-800">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-center text-gray-800 dark:text-white">
          Terms & Conditions
        </h1>
        <p className="mb-6 text-lg text-center text-gray-700 dark:text-gray-300">
          By accessing and using the services of{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            MedGuard
          </span>
          , you agree to be bound by these Terms and Conditions. Please read
          them carefully before using our platform.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700 dark:text-blue-400">
              1. Use of Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              MedGuard provides tools to help users verify medications and
              access health-related information. You agree to use our services
              only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700 dark:text-blue-400">
              2. User Accounts
            </h2>
            <ul className="pl-5 space-y-2 text-gray-700 list-disc dark:text-gray-300">
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You agree to provide accurate and complete information when
                registering.
              </li>
              <li>
                We reserve the right to suspend or terminate accounts that
                violate these Terms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700 dark:text-blue-400">
              3. Intellectual Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              All content on the MedGuard platform, including text, graphics,
              logos, and software, is the property of MedGuard or its licensors.
              You may not reproduce, distribute, or create derivative works
              without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700 dark:text-blue-400">
              4. Medical Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              MedGuard is not a substitute for professional medical advice,
              diagnosis, or treatment. Always seek the advice of your physician
              or qualified health provider with any questions you may have
              regarding a medical condition.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700 dark:text-blue-400">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              MedGuard shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of the platform.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700 dark:text-blue-400">
              6. Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may terminate or suspend access to our services immediately,
              without prior notice or liability, for any reason, including if
              you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700 dark:text-blue-400">
              7. Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              These Terms shall be governed by and construed in accordance with
              the laws of your jurisdiction, without regard to its conflict of
              law provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700 dark:text-blue-400">
              8. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to modify these Terms at any time. Any
              changes will be effective immediately upon posting. Your continued
              use of the platform constitutes your acceptance of the revised
              Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700 dark:text-blue-400">
              9. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about these Terms and Conditions, please
              contact us at:{" "}
              <a
                href="mailto:medguardcompany@gmail.com"
                className="text-blue-600 underline dark:text-blue-400"
              >
                medguardcompany@gmail.com
              </a>
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm text-center text-gray-500 dark:text-gray-400">
          Last updated: August 2025
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;