import type { V2_MetaFunction, LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useFetcher, Outlet, useOutletContext } from "@remix-run/react";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { sampleSize } from 'lodash-es';
import type { FileObject } from "~/services/dev.server";

import { classNames, unslugify } from "~/utils";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Micro Projects | Spojiti" },
        {
            name: "description",
            content: "Spojiti Micro Projects",
        },
        {
            property: "og:title",
            content: "Projects",
        },
        {
            property: "og:description",
            content: "Spojiti Micro Projects",
        },
    ];
};

/* export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.3/dist/tailwind.min.css",
    },
    // { page: "/users/123" },
     {
      rel: "preload",
      href: "/images/banner.jpg",
      as: "image",
    }, 
  ];
}; */

/*
export const loader = async ({request}: LoaderArgs) => {
  const formattedCategoriesResponseJson = (await fetch('/api/categories')).json();
  const formattedCategories = await formattedCategoriesResponseJson as CategoriesLoaderData;
  return json<CategoriesLoaderData>(formattedCategories);
};
*/

interface IProjectCardProps {
    title: string;
    description: string;
    date: string;
    tags: string[];
};

export default function DevExamplesLayoutRoute() {
    const [allProjects, setAllProjects] = useState<IProjectCardProps[]>([]);
    // const [allCategories, setAllCategories] = useState<string[]>([]);
    const fileObjects = useOutletContext<FileObject[]>();

    // const [currentPage, // setCurrentPage] = useState<number>(1);
    // const [postsPerPage, setPostsPerPage] = useState<number>(6);

    /* useEffect(() => {
        if (allCategories.length > 1 && allProjects.length < 1) {
            const Projects = Array.from({ length: 20 }, (_, i) => {
                const desc = `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`.repeat(5);
                const cats = sampleSize(allCategories, sampleSize([1, 2, 3], 1)[0]); // sampleSize(allCategories, Math.round(Math.random() * 10)); // allCategories.filter((cat, i) => Math.round(Math.random() * 10) > 6);
                // const temp = sampleSize(allCategories, 3); // cats.length < 1 ?  : randomCats;
                // title: `${Math.round(Math.random() * 10)} Awesome Jobs for ${allCategories.filter((cat, i) => cats.length > 1 ? cats.includes(cat) : true ).join(', ')}`,
                return ({
                    title: `${Math.round(Math.random() * 10)} Awesome Jobs for ${cats.join(', ')}`,
                    description: desc,
                    date: `2020-01-${String(i + 1).padStart(2, '0')}`,
                    image: `https://loremflickr.com/320/240?random=${i}-${Math.round(Math.random() * 10)}`, // await ProjectImages[i]., // 'https://loremflickr.com/640/360', // 'http://via.placeholder.com/640x360',
                    readingTime: Math.ceil(desc.length / 200),
                    categories: cats // cats.length > 3 ? cats.slice(0, Math.round(Math.random() * cats.length)) // allCategories.filter((cat, i) => Math.round(Math.random() * 10) > 6) // allCategories.reduce((previous, current, index) => {
    
                   // }, []) // allCategories.slice(0, Math.floor(Math.random() * 3 + 1))
                })
            });
            setAllProjects(Projects);
        }
    }, [allProjects.length, allCategories]) */
    /* useLayoutEffect(() => {
        if (window && window.document) {
            let currentPage = 1;
            const postsPerPage = 6;

            const ProjectList = window.document.getElementById('ProjectList') as HTMLElement;
            const searchbar = window.document.getElementById('searchbar') as HTMLInputElement;
            const modal = window.document.getElementById('modal') as HTMLElement;
            const innerModal = window.document.getElementById('innerModal') as HTMLDivElement;
            const closeModal = window.document.getElementById('closeModal') as HTMLElement;
            const prevPage = window.document.getElementById('prevPage') as HTMLButtonElement;
            const nextPage = window.document.getElementById('nextPage') as HTMLButtonElement;
            const categoryFilter = window.document.getElementById('categoryFilter') as HTMLSelectElement;
            const modalCategories = window.document.getElementById('modalCategories') as HTMLElement;
    
            // TODO close modal on click outside
            // modal.addEventListener('click', (event) => {
                // if (innerModal.contains(event.target))
            // }) 

            // if (!modal.classList.contains('hidden')) {
                modal.addEventListener("click", (event) => {
                    const target = event.target as HTMLDivElement;
                      // If user clicks outside the modal window, then close modal
                      if (target.contains(innerModal)) {
                        modal.classList.add('hidden');
                      };
                    },
                    false
                  )
            // }


            closeModal.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
    
            const postCreator = window.document.getElementById('createPost') as HTMLElement;
            const createPostModal = window.document.getElementById('createPostModal') as HTMLElement;
            const closeCreatePostModal = window.document.getElementById('closeCreatePostModal') as HTMLElement;
    
            postCreator.addEventListener('click', () => {
                createPostModal.classList.remove('hidden');
            });
            closeCreatePostModal.addEventListener('click', () => {
                createPostModal.classList.add('hidden');
            });
    
            const createPostForm = window.document.getElementById('createPostForm') as HTMLElement;
            const postTitle = window.document.getElementById('postTitle') as HTMLInputElement;
            const postDescription = window.document.getElementById('postDescription') as HTMLTextAreaElement;
            const postImage = window.document.getElementById('postImage') as HTMLInputElement;
            const postCategories = window.document.getElementById('postCategories') as HTMLSelectElement;


            
            createPostForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const ptitle = postTitle.value;
                const pdescription = postDescription.value;
                const pimage = postImage.value || 'https://loremflickr.com/640/360'; // 'http://via.placeholder.com/640x360';
                const pdate = new Date().toISOString().split('T')[0];
                const preadingTime = Math.ceil(pdescription.split(' ').length / 200);
                const ppostCategories = Array.from(postCategories.selectedOptions).map(option => unslugify(option.value));
    
                const post = { title: ptitle, description: pdescription, date: pdate, image: pimage, readingTime: preadingTime, categories: ppostCategories };
                // allProjects.unshift(post);
                setAllProjects(prev => [post, ...prev]);
                // if (categoryFetcher.state === "idle" && categoryFetcher.data !== null || undefined) 
                // if (ProjectList != null) 
                displayProjects(currentPage);
                createPostModal.classList.add('hidden');
            });
    
            const createProjectCard = (post: ProjectProps) => { 
                const card = window.document.createElement('div');
                card.classList.add('bg-gradient-to-tr', 'from-cyan-200/80', 'to-white','rounded-md', 'shadow-md', 'col-span-1','border-2', 'border-sp-primary', 'p-2');
                
                // if (card) {
                    card.innerHTML = `
                    <img className="object-cover rounded-md" src="${post.image}" alt="${post.title}">
                    <h4 className="my-12 text-base text-center">${post.title}</h4>
                    </img>
                    <p className="truncate text-sm font-light">${post.description.substring(0, 40) + "..."}</p>
                    <p className="my-8 text-gray-700 text-sm font-light">${post.date} - ${post.readingTime} min read</p>
                    <div className="flex flex-wrap">
                        ${post.categories.map(cat => `<span class="bg-sp-primary text-sm text-white rounded-md px-2 py-1 mr-1 mb-1">${cat}</span>`).join('')}
                    </div>
                `;
                // }
    
                const modalTitle = window.document.getElementById('modalTitle') as HTMLElement;
                const modalDate = window.document.getElementById('modalDate') as HTMLElement;
                const modalReadingTime = window.document.getElementById('modalReadingTime') as HTMLElement;
                const modalContent = window.document.getElementById('modalContent') as HTMLElement;
                const modalImage = window.document.getElementById('modalImage') as HTMLInputElement;
                
                card.addEventListener('click', () => {
                    modalTitle.textContent = post.title;
                    modalDate.textContent = post.date;
                    modalReadingTime.textContent = post.readingTime.toString();
                    modalContent.textContent = post.description;
                    modalImage.src = post.image;
                    modalCategories.innerHTML = '';
                    post.categories.forEach(cat => {
                        const span = window.document.createElement('span');
                        span.classList.add('bg-sp-primary', 'text-sm', 'text-white', 'font-semibold', 'rounded-md', 'px-2', 'py-1', 'mr-1', 'mb-1');
                        span.textContent = cat;
                        modalCategories.appendChild(span);
                    });
                    modal.classList.remove('hidden');
                });
    
                return card;
            };
    
            const displayProjects = (page: number) => {
                if (allProjects.length > 1) {
                    // if (ProjectList != null) 
                    ProjectList.innerHTML = '';
                const searchText = searchbar.value.toLowerCase();
                const selectedCategory = categoryFilter.value;
    
                const filteredPosts = allProjects.filter(post => {
                    const searchMatch = post.title.toLowerCase().includes(searchText) || post.categories.some(cat => cat.toLowerCase().includes(searchText));
                    const categoryMatch = !selectedCategory || post.categories.includes(selectedCategory);
                    return searchMatch && categoryMatch;
                });

                const startIndex = (page - 1) * postsPerPage;
                const endIndex = startIndex + postsPerPage;
                const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
                paginatedPosts.forEach(post => {
                    // const card = createProjectCard_v2(post);
                    const card = createProjectCard(post);
                    // const container = React.createElement('div', null, card);
                    ProjectList.appendChild(card);
                });
    
                prevPage.disabled = currentPage === 1 || categoryFetcher.state === 'loading';
                nextPage.disabled = endIndex >= filteredPosts.length  || categoryFetcher.state === 'loading';
                } else {
                    ProjectList.innerHTML = 'No Blog Posts Available';
                }
                
            };
    
            searchbar.addEventListener('input', () => {
                // setCurrentPage(1);
                // if (ProjectList != null)
                currentPage = 1; 
                displayProjects(currentPage);
            });
    
            categoryFilter.addEventListener('change', () => {
                // setCurrentPage(1);
                // if (ProjectList != null) 
                currentPage = 1; 
                displayProjects(currentPage);
            });
    
            prevPage.addEventListener('click', () => {
                // setCurrentPage(prev => prev - 1);
                // if (ProjectList != null) 
                currentPage--; 
                displayProjects(currentPage);
                window.scrollTo(0, 0);
            });
    
            nextPage.addEventListener('click', () => {
                // setCurrentPage(prev => prev + 1);
                // if (ProjectList != null) 
                currentPage++; 
                displayProjects(currentPage);
                window.scrollTo(0, 0);
            });
    
            
    
            allCategories.forEach(cat => {
                // const option = window.document.createElement('option');
                // option.textContent = cat;
                // option.value = cat;
                // categoryFilter.appendChild(option);
    
                const createOption = window.document.createElement('option');
                createOption.textContent = cat;
                createOption.value = cat;
                postCategories.appendChild(createOption);

                categoryFilter.appendChild(createOption);
            });
    
            if (ProjectList != null) displayProjects(currentPage);
            };
    }, [allProjects, allCategories, categoryFetcher.data, categoryFetcher.state])
    */
    return (
        <>
            <div className="bg-gray-100">
                <nav className="bg-white p-4 shadow-lg">
                    <button id="openFilters" className="hidden lg:inline-block text-blue-500">Filters</button>
                    <button id="openFiltersMobile" className="inline-block lg:hidden text-blue-500">Filters</button>
                </nav>
                <aside id="filters" className="hidden fixed top-0 right-0 bottom-0 bg-white w-64 lg:block lg:relative p-4 z-10">
                    {/* <!-- Filters --> */}
                </aside>
                <div id="filtersModal" className="fixed inset-0 bg-gray-900 bg-opacity-75 hidden w-full h-full p-4 z-20">
                    <div className="bg-white w-full h-full p-4 overflow-scroll">
                        {/* <!-- Filters --> */}
                    </div>
                </div>
                <main className="container mx-auto px-4 py-8">
                    <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* <!-- Project Cards --> */}
                    </div>
                </main>
            </div>
        </>
    );
};

/* function ProjectCard(project: IProjectCardProps) {
    return (
        <>
            <div onClick={() => {window.location.href = project.title}} className="bg-white p-4 shadow rounded-lg hover:bg-gray-100 cursor-pointer relative"></div>
        </>
    )
}; */

/*
<div className="bg-gray-100">
    <nav className="bg-white p-4 shadow-md mb-4">
        <div className="container mx-auto">
            <button id="createPost" className="bg-sp-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Create a new blog post</button>
        </div>
    </nav>
    <div className="container mx-auto p-8">

    <div className="grid grid-cols-4 grid-rows-2 gap-2 text-gray-800 dark:text-gray-200">

    <div className="col-span-1">
    <p className="font-bold text-black text-5xl"><span className="text-sp-primary mr-1">Spojiti</span> Blog</p>
    </div>

    <div className="col-start-2 col-span-2 mb-4 items-center justify-center max-w-full">
            <input type="text" id="searchbar" className="w-full p-2 text-lg border-gray-300 border-2 rounded-md" placeholder="Search for blog posts..." />
        </div>
    
    <div className="col-span-1">
    <select id="categoryFilter" className="w-full py-2 px-4 rounded-md border border-gray-300">
                <option value="">Filter by category</option>
            </select>
    </div>

    <div className="row-start-2 col-start-1 col-span-4">
    <p className="text-lg">*Tip* Use the searchbar and category filter to find relevant posts!</p>
    </div>
</div>
    <div id="ProjectList" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
    </div>
</div>
*/

/* <!-- Pagination Buttons --> */
function PaginationButtons() {
    return (
        <>
            <div className="flex flex-row items-center justify-between mt-8 p-4">
                <button id="prevPage" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg  disabled:opacity-75">
                    Prev
                </button>
                <button id="nextPage" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg  disabled:opacity-75">
                    Next
                </button>
            </div>
        </>
    )
};

/* <!-- Modal for creating a new blog post --> */
function CreateBlogPostModal() {
    return (
        <div id="createPostModal" className="fixed inset-0 hidden items-center justify-center p-4 min-h-screen bg-black bg-opacity-60">

            <div className="bg-white p-8 w-full max-w-3xl mx-auto rounded-md">
                <button id="closeCreatePostModal" className="text-right w-full">
                    <span className="text-xl font-bold">&times;</span>
                </button>
                <h2 className="text-xl font-bold mb-3">Create a new blog post</h2>
                <form id="createPostForm">
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="postTitle">Title</label>
                        <input id="postTitle" className="w-full p-2 border-gray-300 border-2 rounded-md" type="text" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="postDescription">Description</label>
                        <textarea id="postDescription" className="w-full p-2 border-gray-300 border-2 rounded-md" rows={4} required></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="postImage">Image URL</label>
                        <input id="postImage" className="w-full p-2 border-gray-300 border-2 rounded-md" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="postCategories">Categories</label>
                        <select id="postCategories" className="w-full p-2 border-gray-300 border-2 rounded-md" multiple>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Submit</button>
                </form>
            </div>
        </div>
    )
};

/*<!-- Modal for full blog post -->*/
function BlogPostDetailsModal() {
    return (
        <div id="modal" className="fixed inset-0 hidden items-center justify-center min-h-screen overflow-scroll p-4 bg-black bg-opacity-60">
            <div id="innerModal" className="bg-white dark:bg-slate-500 p-8 w-full max-w-3xl mx-auto rounded-md">
                <button id="closeModal" className="text-right w-full">
                    <span className="text-5xl font-bold">&times;</span>
                </button>
                <img id="modalImage" className="w-full h-[200px] object-cover mb-4 rounded-md" src="" alt="" />
                <h2 id="modalTitle" className="text-xl font-bold mb-3"></h2>
                <p className="mb-2"><span id="modalDate" className="text-gray-700"></span> - <span id="modalReadingTime" className="text-gray-700"></span> min read</p>
                <hr className="mb-4" />
                <p id="modalContent" className="text-sm"></p>
                <div id="modalCategories" className="mt-4 flex flex-wrap">
                </div>
            </div>
        </div>
    )
};

// function CardV2(post: ProjectProps) {
/*
const createProjectCard_v2 = (post: ProjectProps) => { 
            const card_v2 = React.createElement(CardV2, post);
 
            const modalTitle = window.document.getElementById('modalTitle') as HTMLElement;
            const modalDate = window.document.getElementById('modalDate') as HTMLElement;
            const modalReadingTime = window.document.getElementById('modalReadingTime') as HTMLElement;
            const modalContent = window.document.getElementById('modalContent') as HTMLElement;
            const modalImage = window.document.getElementById('modalImage') as HTMLInputElement;
            
            card_v2.props.onClick = () => {
                modalTitle.textContent = post.title;
                modalDate.textContent = post.date;
                modalReadingTime.textContent = post.readingTime.toString();
                modalContent.textContent = post.description;
                modalImage.src = post.image;
                modalCategories.innerHTML = '';
                post.categories.forEach(cat => {
                    const span = window.document.createElement('span');
                    span.classList.add('bg-sp-primary', 'text-sm', 'text-white', 'font-semibold', 'rounded-md', 'px-2', 'py-1', 'mr-1', 'mb-1');
                    span.textContent = cat;
                    modalCategories.appendChild(span);
                });
                modal.classList.remove('hidden');
            };
 
            return card_v2;
        };
 
return (
    <>
    <div className="bg-gradient-to-tr from-cyan-200/80 to-white rounded-md shadow-md col-span-1 border-2 border-sp-primary p-2"  onClick={(event) => onClick ? onClick(event) : () => {}}>
                <img className="object-cover rounded-md" src={post.image} alt={post.title}>
                <h4 className="my-12 text-base text-center">${post.title}</h4>
                </img>
                <p className="truncate text-sm font-light">${post.description.substring(0, 40) + "..."}</p>
                <p className="my-8 text-gray-700 text-sm font-light">${post.date} - ${post.readingTime} min read</p>
                <div className="flex flex-wrap">
                    ${post.categories.map(cat => `<span class="bg-sp-primary text-sm text-white rounded-md px-2 py-1 mr-1 mb-1">${cat}</span>`).join('')}
                </div>
                </div>
    </>
);
} */
/*
interface PaginatedPostsProps { 
    filteredPosts: ProjectProps[]; 
    startIndex: number;
    endIndex: number;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const PaginatedPosts: React.FC<PaginatedPostsProps> = ({ filteredPosts, startIndex, endIndex, onClick }) => {

    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

        const modal = window.document.getElementById('modal') as HTMLElement;
        const modalTitle = window.document.getElementById('modalTitle') as HTMLElement;
        const modalDate = window.document.getElementById('modalDate') as HTMLElement;
        const modalReadingTime = window.document.getElementById('modalReadingTime') as HTMLElement;
        const modalContent = window.document.getElementById('modalContent') as HTMLElement;
        const modalImage = window.document.getElementById('modalImage') as HTMLInputElement;
        const modalCategories = window.document.getElementById('modalCategories') as HTMLElement;
        
        const CardonClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            onClick?.(event);
            paginatedPosts.forEach(post => {
            modalTitle.textContent = post.title;
            modalDate.textContent = post.date;
            modalReadingTime.textContent = post.readingTime.toString();
            modalContent.textContent = post.description;
            modalImage.src = post.image;
            modalCategories.innerHTML = '';
            post.categories.forEach(cat => {
                const span = window.document.createElement('span');
                span.classList.add('bg-sp-primary', 'text-sm', 'text-white', 'font-semibold', 'rounded-md', 'px-2', 'py-1', 'mr-1', 'mb-1');
                span.textContent = cat;
                modalCategories.appendChild(span);
            });

            modal.classList.remove('hidden');
            });
            
        };
    
    

    return (
        <div>
            {paginatedPosts.map(post => {
                // return createProjectCard_v2(post);
                return (
                    <>
                    <div onClick={(event) => CardonClick(event)}>
                    <CardV2 {...post} />
                    </div>
                    </>
                )
            })}
        </div>
    );
};

interface IModalProps {
    post: ProjectProps | null;
}

// A component to display the modal
const Modal: React.FC<IModalProps> = ({post}) => {
    if (!post) {
        return null;
    };

    return (
        <>
        <div className="modal">
            <h1 id="modalTitle">{post.title}</h1>
            <p id="modalDate">{post.date}</p>
            <p id="modalReadingTime">{post.readingTime}</p>
            <p id="modalContent">{post.description}</p>
            <img id="modalImage" src={post.image} alt={post.title}/>
            <div id="modalCategories">
                {post.categories.map((cat) => (
                    <span 
                        className="bg-sp-primary text-sm text-white font-semibold rounded-md px-2 py-1 mr-1 mb-1"
                        key={cat}
                    >
                        {cat}
                    </span>
                ))}
            </div>
        </div>
        </>
    );
};

interface IProjectCardProps {
    post: ProjectProps
}

// A component to create a blog post card
const ProjectCard: React.FC<IProjectCardProps> = ({ post }) => {
    const [selectedPost, setSelectedPost] = useState<ProjectProps | null>(null);

    const handleClick = () => {
        setSelectedPost(post);
    };

    return (
        <>
            <CardV2 onClick={handleClick} {...post} />
            <Modal post={selectedPost} />
        </>
    );
}; */
/*
<script>
        const projectsData = [
            // Add your dummy project cards with the correct details and randomly assigned tag categories
        ];

        function renderCards(projects) {
            const projectsContainer = document.getElementById('projects');
            projectsContainer.innerHTML = '';

            projects.forEach(project => {
                const card = createCardElement(project);
                projectsContainer.appendChild(card);
            });
        }

        document.getElementById('openFilters').addEventListener('click', () => {
            document.getElementById('filters').classList.toggle('hidden');
        });

        document.getElementById('openFiltersMobile').addEventListener('click', () => {
            document.getElementById('filtersModal').classList.toggle('hidden');
        });

        // Add the filtering functionality here

        // Initially render the cards with the dummy data
        renderCards(projectsData);
    </script>
*/