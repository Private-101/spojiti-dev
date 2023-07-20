import { Form } from "@remix-run/react";

interface IRegistrationFormProps {
    userRole: 'employer' | 'applicant';
};

export function RegistrationForm({ userRole }: IRegistrationFormProps) {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full md:w-96 md:max-w-full mx-auto">
                <div className="p-6 border border-gray-300 sm:rounded-md">
                    <Form method="POST" encType="multipart/form-data">
                        <label id={userRole === 'employer' ? 'business-name' : 'applicant-name'} className="block mb-6">
                            <span className="text-gray-700">{userRole === 'employer' ? 'Business name' : 'Your name'}</span>
                            <input name={userRole === 'employer' ? 'business-name' : 'applicant-name'} type="text" className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="Joe Bloggs" />
                        </label>
                        <label id={userRole === 'employer' ? 'business-email' : 'applicant-email'} className="block mb-6">
                            <span className="text-gray-700">{userRole === 'employer' ? 'Business Email Address' : 'Email Address'}</span>
                            <input name={userRole === 'employer' ? 'business-email' : 'applicant-email'} type="email" className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder={userRole === 'employer' ? "joe.boss@your-business.com" : "joe.bloggs@example.com"} />
                        </label>
                        <label id="photo" className="block mb-6">
                            <span className="text-gray-700">{userRole === 'employer' ? 'Business Logo' : 'Profile Photo'}</span>
                            <input name={userRole === 'employer' ? 'business-logo' : 'profile-photo'} type="file" className=" block w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " />
                        </label>
                        {userRole === 'employer' ? null : (
                            <label id={'applicant-birthday'} className="block mb-6">
                            <span className="text-gray-700">When is your birthday?</span>
                            <input name="applicant-birthday" type="date" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer" />
                        </label>
                        )}
                        
                        <label id={userRole === 'employer' ? 'business-bio' : 'applicant-bio'} className="block mb-6">
                            <span className="text-gray-700">{userRole === 'employer' ? 'Let applicants know about your business..' : 'Let employers know more about you..'}</span>
                            <textarea name={userRole === 'employer' ? 'business-bio' : 'applicant-bio'} className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " rows={3} placeholder="Start typing..."></textarea>
                        </label>
                        <label id="category" htmlFor={userRole === 'employer' ? 'applicant-type' : 'job-type'} className="block mb-6 pt-6 border-t-2 border-dotted border-black">
                            <span className="text-gray-700">What category of {userRole === 'employer' ? 'applicants' : 'jobs'} are you looking for?</span>
                            <select name={userRole === 'employer' ? 'applicant-type' : 'job-type'} className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                <option>Select One...</option>
                                <option>Bar</option>
                                <option>Management</option>
                                <option>Kitchen</option>
                                <option>Any</option>
                                <option>etc...</option>
                            </select>
                        </label>
                        <div className="mb-6">
                            <label id="input-group" className="inline-flex items-center">
                                <span className="border-b-2 border-black">Preferred Availability</span>
                            </label>
                            <div id="input-group" className="mt-2">
                                <div>
                                    <label id="full-time" className="inline-flex items-center cursor-pointer">
                                        <input name="full-time" value="full-time" type="checkbox" className="text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer" />
                                        <span className="ml-2">Full-Time</span>
                                    </label>
                                </div>
                                <div>
                                    <label id="part-time" className="inline-flex items-center cursor-pointer">
                                        <input name="part-time" value="part-time" type="checkbox" className=" text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer" />
                                        <span className="ml-2">Part-Time</span>
                                    </label>
                                </div>
                                <div>
                                    <label id="seasonal" className="inline-flex items-center cursor-pointer">
                                        <input name="seasonal" value="seasonal" type="checkbox" className=" text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer" />
                                        <span className="ml-2">Seasonal</span>
                                    </label>
                                </div>
                                <div>
                                    <label id="any" className="inline-flex items-center cursor-pointer">
                                        <input name="any" value="any" type="checkbox" className=" text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer" />
                                        <span className="ml-2">Any</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="mt-2">
                                <div className="pt-6 border-t-2 border-dotted border-black">
                                    <label id="updates" className="inline-flex items-center cursor-pointer">
                                        <input name="updates" value="yes" type="checkbox" checked className=" text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer" />
                                        <span className="ml-2">Keep Me Updated via Email</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <button type="submit" className=" h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 ">Submit</button>
                        </div>
                        <div>
                            <div className="mt-2 text-gray-700 text-right text-xs">
                                by
                                <a href="https://github.com/mtrontzthedev" className=" hover:text-sp-primary ml-2" target="_blank" rel="noreferrer">mtrontzthedev</a>
                            </div>
                        </div>
                        <input type="hidden" name="role" value={userRole} />
                    </Form>
                </div>
            </div>
        </>
    )
}