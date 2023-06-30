// import Header from "~/components/front/Header";
// import { useTranslation } from "react-i18next";
import { json, type LoaderFunction, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// import { i18nHelper } from "~/locale/i18n.utils";
// import Footer from "~/components/front/Footer";
import * as React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'

interface TandCLoaderData {
  title: string;
  // lastUpdatedDate: string;
}
export let loader: LoaderFunction = async ({ request }) => {
  // let { t, translations } = await i18nHelper(request);
  return json<TandCLoaderData>({
    title: 'Terms and Conditions', //`${t("terms.headline")} | ${process.env.APP_NAME}`,
    // lastUpdatedDate: Date.now().toString()
    // i18n: translations,
  });
};

export const meta: V2_MetaFunction = ({ data }) => {
  const pageTitle = data.title ?? 'Terms of Service';
  return [{ title: pageTitle }]
};

export default function TermsAndConditionsRoute() {
  // const { t } = useTranslation();
  const data = useLoaderData<TandCLoaderData>();

  return (
    <>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-lg font-semibold leading-5 text-sp-primary">Spojiti</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {/*t("terms.headline")*/}
                {data.title}
              </h1>
              <p className="mt-2 text-md text-gray-500">Last updated: June 30, 2023</p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {/** TODO This space can be used for some kind of image or something */}
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg leading-7 text-gray-700 dark:text-gray-200 lg:max-w-lg">
            <h3 className="font-bold underline text-xl mb-1 mt-2">Introduction</h3>
          <p>
            These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Spojiti accessible at spojiti.com.
          </p>

          <p>
            These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions
            written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
          </p>

          <p className="mt-2">
            These Terms and Conditions have been generated with the help of the{" "}
            <a className="font-bold underline" href="https://www.termsandcondiitionssample.com">
              Terms And Conditiions Sample Generator
            </a>
            .
          </p>

          <p className="mt-2">Minors or people below 18 years old are not allowed to use this Website.</p>
              <h3 className="font-bold underline text-xl mb-1 mt-2">Intellectual Property Rights</h3>

              <p>
                Other than the content you own, under these Terms, Spojiti and/or its licensors own all the intellectual property rights and materials
                contained in this Website.
              </p>

              <p>You are granted limited license only for purposes of viewing the material contained on this Website.</p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Restrictions</h3>

              <p>You are specifically restricted from all of the following:</p>

              <ul className="mt-2 mb-6 space-y-2 text-gray-600 capitalize">
                <li className="flex gap-x-3">
                  <ExclamationCircleIcon className="mt-1 h-8 w-8 flex-none text-red-300" aria-hidden="true" />
                  <span className="mt-1">
                    publishing any Website material in any other media;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ExclamationCircleIcon className="mt-1 h-8 w-8 flex-none text-red-300" aria-hidden="true" />
                  <span className="mt-1">
                    selling, sublicensing and/or otherwise commercializing any Website material;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ExclamationCircleIcon className="mt-1 h-8 w-8 flex-none text-red-300" aria-hidden="true" />
                  <span className="mt-1">
                    publicly performing and/or showing any Website material;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ExclamationCircleIcon className="mt-1 h-8 w-8 flex-none text-red-300" aria-hidden="true" />
                  <span className="mt-1">
                    using this Website in any way that is or may be damaging to this Website;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ExclamationCircleIcon className="mt-1 h-8 w-8 flex-none text-red-300" aria-hidden="true" />
                  <span className="mt-1">
                    using this Website in any way that impacts user access to this Website;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ExclamationCircleIcon className="mt-1 h-8 w-8 flex-none text-red-300" aria-hidden="true" />
                  <span className="mt-1">
                    using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business
                    entity;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ExclamationCircleIcon className="mt-1 h-8 w-8 flex-none text-red-300" aria-hidden="true" />
                  <span className="mt-1">
                    engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ExclamationCircleIcon className="mt-1 h-8 w-8 flex-none text-red-300" aria-hidden="true" />
                  <span className="mt-1">
                    using this Website to engage in any advertising or marketing.
                  </span>
                </li>
              </ul>

              <p>
                Certain areas of this Website are restricted from being access by you and Spojiti may further restrict access by you to any areas of this
                Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain
                confidentiality as well.
              </p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Your Content</h3>

              <p>
                In these Website Standard Terms and Conditions, &quot;Your Content&quot; shall mean any audio, video text, images or other material you choose
                to display on this Website. By displaying Your Content, you grant Spojiti a non-exclusive, worldwide irrevocable, sub licensable license to
                use, reproduce, adapt, publish, translate and distribute it in any and all media.
              </p>

              <p>
                Your Content must be your own and must not be invading any third-party's rights. Spojiti reserves the right to remove any of Your Content
                from this Website at any time without notice.
              </p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Your Privacy</h3>

              <p>Please read Privacy Policy.</p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">No warranties</h3>

              <p>
                This Website is provided &quot;as is,&quot; with all faults, and Spojiti express no representations or warranties, of any kind related to
                this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
              </p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Limitation of liability</h3>

              <p>
                In no event shall Spojiti, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way
                connected with your use of this Website whether such liability is under contract. Spojiti, including its officers, directors and employees
                shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this
                Website.
              </p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Indemnification</h3>

              <p>
                You hereby indemnify to the fullest extent Spojiti from and against any and/or all liabilities, costs, demands, causes of action, damages and
                expenses arising in any way related to your breach of any of the provisions of these Terms.
              </p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Severability</h3>

              <p>
                If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the
                remaining provisions herein.
              </p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Variation of Terms</h3>

              <p>
                Spojiti is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a
                regular basis.
              </p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Assignment</h3>

              <p>
                The Spojiti is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification.
                However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
              </p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Entire Agreement</h3>

              <p>
                These Terms constitute the entire agreement between Spojiti and you in relation to your use of this Website, and supersede all prior
                agreements and understandings.
              </p>

              <h3 className="font-bold underline text-xl mb-1 mt-2">Governing Law & Jurisdiction</h3>

              <p>
                These Terms will be governed by and interpreted in accordance with the laws of the State of us, and you submit to the non-exclusive
                jurisdiction of the state and federal courts located in us for the resolution of any disputes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}