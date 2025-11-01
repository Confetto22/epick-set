import {
  indemnification,
  limitaion,
  prohibitedUse,
  termination,
} from "@/lib/data/data";
import Link from "next/link";

const TermsConditions = () => {
  return (
    <section className="bg-[#0C081F]">
      <section className=" hero flex justify-center min-h-[60vh] ">
        <div className="content max-w-3xl w-full  text-left flex flex-col px-6  gap-5  justify-center  py-12 ">
          <h2 className="text-white text-[1.9rem] md:max-w-[400px] md:leading-[2.2rem] md:text-[2.3rem] font-semibold">
            Terms and Conditions
          </h2>
          <p className="text-gray-300">Last updated: October 30, 2025</p>
          <p className="text-gray-300 ">
            Welcome to EpickSet, a digital platform owned and operated by
            Ucentered Ltd, located at 10 Watermark Way, Foxholes Business Park,
            Hertford, Herts, SG13 7TZ, United Kingdom. By accessing or using
            EpickSet (the “App,” “Website,” or “Service”), you agree to these
            Terms and Conditions (“Terms”). If you do not agree, please do not
            use the Service.
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="content max-w-3xl px-6 mx-auto grid gap-10 py-12">
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              1. Eligibility
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              You must be at least 16 years old to use EpickSet. By registering
              an account, you confirm that all information provided is accurate,
              complete, and up to date.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              2. User Accounts
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              You may create an account using your email address or third-party
              authentication (e.g., Google or Apple). You are responsible for
              maintaining the confidentiality of your login details and for all
              activities under your account. EpickSet reserves the right to
              suspend or delete accounts that violate these Terms or show
              suspicious activity.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              3. User-Generated Content
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              EpickSet allows users to upload, store, and share materials such
              as lyrics, chords, audio files, and setlists (“User Content”).{" "}
              <br /> <br /> You retain full ownership of your uploads, but by
              using the platform, you grant Ucentered Ltd a non-exclusive,
              royalty-free license to host, display, and process your content
              for the purpose of operating the Service. You agree not to upload
              any content unless you own the rights or have permission from the
              rightful owner. EpickSet does not claim ownership of your music
              but is not responsible for any copyright infringements committed
              by users. <br /> <br />
              Copyright Notice: You are solely responsible for ensuring that all
              uploaded or shared material complies with copyright laws.
              Uploading copyrighted songs, instrumentals, or lyrics without
              permission may lead to removal or account suspension.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              4. Prohibited Use
            </h3>
            <p className="text-gray-300 text-[.94rem]">You magree to:</p>
            <ul className="text-gray-300 pl-8 list-disc ">
              {prohibitedUse.map((single, index) => (
                <li key={`${single}-${index}`} className="pb-2 last:pb-0">
                  {single}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              5. Intellectual Property
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              All intellectual property related to EpickSet, including but not
              limited to logos, design, code, AI systems, and brand elements,
              are the property of Ucentered Ltd or its licensors. You may not
              reproduce, distribute, or create derivative works from the
              platform without written permission.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              6. AI-Generated Content
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              EpickSet includes AI-powered features such as AI Setlist
              Generation. AI suggestions and recommendations are provided “as
              is” and may not always be accurate or appropriate. EpickSet does
              not guarantee the completeness, accuracy, or legality of
              AI-generated results, and users are responsible for verifying the
              suitability of any output.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              7. Subscriptions and Payments
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              EpickSet may offer both free and paid plans (e.g., Freemium, Band,
              and Pro tiers).
            </p>
            <ul className="text-gray-300 pl-8 list-disc ">
              {prohibitedUse.map((single, index) => (
                <li key={`${single}-${index}`} className="pb-2 last:pb-0">
                  {single}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              8. Data & Privacy
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              Your data privacy is important to us. Our Privacy Policy explains
              how your information is collected, stored, and used in accordance
              with GDPR and other applicable laws. EpickSet integrates with
              third-party providers such as Firebase, Google Auth, Mailgun, and
              GCP for hosting, authentication, and notifications. By using the
              Service, you consent to data processing by these providers under
              their respective policies.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              9. Termination
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              We may suspend or terminate your account if:
            </p>
            <ul className="text-gray-300 pl-8 list-disc ">
              {termination.map((single, index) => (
                <li key={`${single}-${index}`} className="pb-2 last:pb-0">
                  {single}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-[.94rem]">
              You may delete your account at any time, which will permanently
              remove your personal data and uploaded content from our servers
              (subject to retention policies required by law).
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              10. Limitation of Liability
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              EpickSet is provided on an “as is” and “as available” basis. To
              the fullest extent permitted by law, Ucentered Ltd shall not be
              liable for:
            </p>
            <ul className="text-gray-300 pl-8 list-disc ">
              {limitaion.map((single, index) => (
                <li key={`${single}-${index}`} className="pb-2 last:pb-0">
                  {single}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-[.94rem]">
              In no event shall our total liability exceed the amount you paid
              (if any) to use the Service within the past 12 months.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              11. Indemnification of Liability
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              You agree to indemnify and hold harmless Ucentered Ltd and its
              affiliates from any claims, damages, or legal actions arising
              from:
            </p>
            <ul className="text-gray-300 pl-8 list-disc ">
              {indemnification.map((single, index) => (
                <li key={`${single}-${index}`} className="pb-2 last:pb-0">
                  {single}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              12. Governing Law
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              These Terms shall be governed by and construed in accordance with
              the laws of England and Wales. Any disputes will be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              13. Changes to These Terms
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              We may update these Terms periodically. When changes are made, we
              will update the “Last Updated” date above and notify users when
              necessary. Continued use of the Service after changes are posted
              constitutes your acceptance of the updated Terms.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-white font-semibold text-[1.1rem]">
              14. Governing Law
            </h3>
            <p className="text-gray-300 text-[.94rem]">
              If you have any questions or concerns about these Terms,
              please contact us at:
            </p>
          </div>
          <Link href={"#"} className="text-gray-400">
            info@epickset.com
          </Link>
        </div>
      </section>
    </section>
  );
};

export default TermsConditions;
