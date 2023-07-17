import { Form } from "@remix-run/react";

export default function FormComponentExamplesRoute() {
    return (
        <>
            <div className="w-full md:w-96 md:max-w-full mx-auto">
                <div className="p-6 border border-gray-300 sm:rounded-md">
                    <Form
                        method="POST"
                        action="https://herotofu.com/start"
                        encType="multipart/form-data"
                    >
                        <label className="block mb-6">
                            <span className="text-gray-700">Your name</span>
                            <input
                                name="name"
                                type="text"
                                className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                                placeholder="Joe Bloggs"
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Email address</span>
                            <input
                                name="email"
                                type="email"
                                className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                                placeholder="joe.bloggs@example.com"
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Your photo</span>
                            <input
                                name="photo"
                                type="file"
                                className=" block w-full mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">When is your birthday?</span>
                            <input
                                name="birthday"
                                type="date"
                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700"
                            >What kind of present you expect this year?</span
                            >
                            <select
                                name="present"
                                className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                            >
                                <option>Chocolate cake</option>
                                <option>Dancing cat</option>
                                <option>Custom meme about me</option>
                                <option>Zoom backgrounds for the rest of my life</option>
                            </select>
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Interesting... Please tell more</span>
                            <textarea
                                name="message"
                                className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                                rows={3}
                                placeholder="Mmmm... cake."
                            ></textarea>
                        </label>
                        <div className="mb-6">
                            <div className="mt-2">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            name="season"
                                            value="summer"
                                            type="radio"
                                            className=" text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 "
                                            checked
                                        />
                                        <span className="ml-2">I like summer</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            name="season"
                                            value="winter"
                                            type="radio"
                                            className=" text-indigo-600 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 "
                                        />
                                        <span className="ml-2">I'm more into winter</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="mt-2">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            name="offers"
                                            value="yes"
                                            type="checkbox"
                                            className=" text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 "
                                        />
                                        <span className="ml-2">Email me news and special offers</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className=" h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 "
                            >
                                Regular Button
                            </button>
                        </div>
                        <div>
                            <div className="mt-2 text-gray-700 text-right text-xs">
                                by
                                <a href="https://github.com/mtrontzthedev" className="hover:underline hover:text-blue-400" target="_blank" rel="noreferrer"
                                >mtrontzthedev</a>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}