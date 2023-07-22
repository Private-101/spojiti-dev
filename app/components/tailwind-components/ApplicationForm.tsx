/*
<div class="w-full md:w-96 md:max-w-full mx-auto">
  <div class="p-6 border border-gray-300 sm:rounded-md">
    <form
      method="POST"
      action="https://herotofu.com/start"
      enctype="multipart/form-data"
    >
      <label class="block mb-6">
        <span class="text-gray-700">Your name</span>
        <input
          required
          name="name"
          type="text"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Joe Bloggs"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Email address</span>
        <input
          required
          name="email"
          type="email"
          class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="joe.bloggs@example.com"
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Years of experience</span>
        <select
          required
          name="experience"
          class="
            block
            w-full
            mt-1
            border-2
            border-blue-600
            rounded-md
            shadow-sm
            focus:border-blue-400
            focus:ring
            focus:ring-sky-400
            focus:ring-opacity-50
          "
        >
          <option>Less than a year</option>
          <option>1 - 2 years</option>
          <option>2 - 4 years</option>
          <option>4 - 7 years</option>
          <option>7 - 10 years</option>
          <option>10+ years</option>
        </select>
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Tell us more about yourself</span>
        <textarea
          name="message"
          class="
            block
            w-full
            mt-1
            border-2
            border-opacity-40
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-opacity-80
            focus:border-sky-300
            focus:ring
            focus:ring-sky-600
            focus:ring-opacity-50
          "
          rows="5"
          placeholder="What motivates you?"
        ></textarea>
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Your CV</span>
        <input
          required
          name="cv"
          type="file"
          class="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        />
      </label>
      <div class="mb-6">
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input
                name="employer-contact"
                value="yes"
                type="checkbox"
                class="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                checked
              />
              <span class="ml-4 text-sm">Allow Employer to contact you?</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input
                name="application-tracking"
                value="yes"
                type="checkbox"
                checked
                class="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
              <span class="ml-4 text-sm">Allow us to inform you when the application status changed?</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <button
          type="submit"
          class="
            h-10
            px-5
            font-semibold
            text-gray-100
            bg-indigo-400
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Apply
        </button>
      </div>
      <div>
        <div class="mt-2 text-gray-700 text-right text-xs">
          <a href="#!" class="hover:underline hover:text-blue-500" target="_blank" rel="noreferrer"
            >Cancel</a
          >
        </div>
      </div>
    </form>
  </div>
</div>
*/

export default function Application() {
  <>
    <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-medium mb-6">Restaurant Job Application Form</h1>
        <form>
            <div className="bg-white px-6 py-6 shadow rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="border p-2 rounded" type="text" name="first_name" id="first_name" placeholder="First Name" />
                    <input className="border p-2 rounded" type="text" name="last_name" id="last_name" placeholder="Last Name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="border p-2 rounded" type="email" name="email" id="email" placeholder="Email" />
                    <input className="border p-2 rounded" type="text" name="phone" id="phone" placeholder="Phone" />
                </div>
                <div className="mb-4">
                    <input className="border p-2 rounded w-full" type="text" name="address" id="address" placeholder="Address" />
                </div>

                <h2 className="text-lg font-medium mb-4">Work History:</h2>
                <div className="mb-4">
                    <textarea className="border p-2 rounded w-full" name="work_history" id="work_history" rows={4} placeholder="Enter your work history"></textarea>
                </div>

                <h2 className="text-lg font-medium mb-4">Skills:</h2>
                <div className="mb-4">
                    <select className="border p-2 rounded w-full" name="skills" id="skills" multiple>
                        <option value="cooking">Cooking</option>
                        <option value="baking">Baking</option>
                        <option value="customer_service">Customer Service</option>
                        <option value="management">Management</option>
                        <option value="cash_handling">Cash Handling</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <h3 className="text-lg font-medium mb-2">Preferred Salary:</h3>
                        <input className="border p-2 rounded" type="range" name="preferred_salary" id="preferred_salary" min="0" max="100" />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-2">Starting Date:</h3>
                        <input className="border p-2 rounded" type="date" name="starting_date" id="starting_date" />
                    </div>
                </div>

                <h2 className="text-lg font-medium mb-4">Work Schedule (Availability):</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <label className="inline-flex items-center mr-6">
                        <input type="checkbox" name="availability[]" value="monday" className="mr-2" />
                        Monday
                    </label>
                    <label className="inline-flex items-center mr-6">
                        <input type="checkbox" name="availability[]" value="tuesday" className="mr-2" />
                        Tuesday
                    </label>
                    <label className="inline-flex items-center mr-6">
                        <input type="checkbox" name="availability[]" value="wednesday" className="mr-2" />
                        Wednesday
                    </label>
                    <label className="inline-flex items-center mr-6">
                        <input type="checkbox" name="availability[]" value="thursday" className="mr-2" />
                        Thursday
                    </label>
                    <label className="inline-flex items-center mr-6">
                        <input type="checkbox" name="availability[]" value="friday" className="mr-2" />
                        Friday
                    </label>
                    <label className="inline-flex items-center mr-6">
                        <input type="checkbox" name="availability[]" value="saturday" className="mr-2" />
                        Saturday
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" name="availability[]" value="sunday" className="mr-2" />
                        Sunday
                    </label>
                </div>

                <h2 className="text-lg font-medium mb-4">Background History:</h2>
                <div className="mb-4">
                    <textarea className="border p-2 rounded w-full" name="background_history" id="background_history" rows={4} placeholder="Enter your background history"></textarea>
                </div>

                <h2 className="text-lg font-medium mb-4">Upload Resume/Cover Letter:</h2>
                <div className="mb-4">
                    <label className="w-full flex flex-col items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide border border-blue-400 cursor-pointer hover:bg-blue-500 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm-2-13l3-3 3 3h-2v6H9V7H7z" />
                        </svg>
                        <input type="file" accept=".doc,.pdf" className="hidden" name="resume_cover_letter" id="resume_cover_letter" />
                        <span className="mt-2 leading-normal">Select File</span>
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-700">Submit</button>
            </div>
        </form>
    </div>
  </>
}