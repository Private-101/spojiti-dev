/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.3/dist/tailwind.min.css" rel="stylesheet">
    <title>Sign Up Page</title>
</head>
<body class="bg-gray-100">
    <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
            <button id="employer-btn" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded m-2">
                Employer Sign Up
            </button>

            <button id="client-btn" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded m-2">
                Client Sign Up
            </button>
        </div>
    </div>

    <!-- Modal -->
    <div id="modal" class="hidden fixed inset-0 z-30 flex items-center justify-center">
        <div class="bg-white w-full max-w-lg rounded-xl overflow-hidden p-4">
            <h2 id="modal-title" class="text-2xl font-bold mb-4">Sign Up</h2>
            <form id="sign-up-form">
                <div class="mb-4">
                    <label class="block text-gray-700">Email:</label>
                    <input type="email" name="email" class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300"/>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700">Password:</label>
                    <input type="password" name="password" class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300"/>
                </div>
                <div id="extra-fields"></div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</button>
            </form>
            <button id="modal-close" class="text-gray-500 text-sm mt-3 hover:text-red-600 float-right">&times; Close</button>
        </div>
    </div>

    <script>
        const employerBtn = document.getElementById('employer-btn');
        const clientBtn = document.getElementById('client-btn');
        const signUpForm = document.getElementById('sign-up-form');
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const extraFields = document.getElementById('extra-fields');
        const modalClose = document.getElementById('modal-close');

        employerBtn.addEventListener('click', () => {
            openModal('Employer');
        });

        clientBtn.addEventListener('click', () => {
            openModal('Client');
        });

        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle sign up logic here
            closeModal();
        });

        modalClose.addEventListener('click', () => {
            closeModal();
        });

        function openModal(type) {
            modalTitle.textContent = type + ' Sign Up';
            extraFields.innerHTML = '';

            if (type === 'Employer') {
                extraFields.innerHTML = `
                    <div class="mb-4">
                        <label class="block text-gray-700">Company Name:</label>
                        <input type="text" name="companyName" class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300"/>
                    </div>
                `;
            } else {
                extraFields.innerHTML = `
                    <div class="mb-4">
                        <label class="block text-gray-700">Full Name:</label>
                        <input type="text" name="fullName" class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300"/>
                    </div>
                `;
            }

            modal.classList.remove('hidden');
        }

        function closeModal() {
            modal.classList.add('hidden');
        }
    </script>
</body>
</html>
*/