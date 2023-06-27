import React, { Fragment, useState, useEffect } from "react";
import type {
    ActionArgs,
    LoaderArgs,
  } from "@remix-run/node"; // or cloudflare/deno
  import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
  import { useSearchParams, Link, Form, useFetcher, useLoaderData, Outlet } from "@remix-run/react";


  
  export interface CardListProps {};
  
  export const CardList: React.FC<CardListProps> = () => {
     const [ error, setError ] = useState(null);
     const [ loading, setLoading ] = useState(false);
      return (
          <>
          
{/*{/*<!-- Gogole Fonts -->*/}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap"
    rel="stylesheet" />

{/*<!-- AlpineJS -->*/}
<script
    defer
    src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

{/*<!-- Tailwind -->*/}
<script src="https://cdn-tailwindcss.vercel.app/"></script>

<style>
    section {
        font-family: "Poppins", sans-serif;
    }
</style>



{/*<!-- Notes -->*/}*/}
<section className="flex flex-col items-center justify-center mb-22">
    <span className="text-center font-bold my-20">
        <a
            href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
            target="_blank"
            className="text-blue-600">
            Convetert to SASS
        </a>

        <hr className="my-4" />

        <a
            href="https://unsplash.com/s/photos/coffee"
            target="_blank"
            className="text-blue-600">
            Image Source
        </a>

        <hr className="my-4" />

        <p>
            <a
                href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/components/responsive-card-list.html"
                target="_blank"
                className="text-blue-600">
                Source Code
            </a>
            |
            <a
                href="https://egoistdeveloper.github.io/my-tailwind-components/./src/components/responsive-card-list.html"
                target="_blank"
                className="text-blue-600">
                Full Preview
            </a>
        </p>

        <hr className="my-4" />

        <p>⚠️ This template follows browser theme</p>
    </span>
</section>

{/*<!-- Card List Section -->*/}
<section x-data="xData()" className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
   {/*<!-- Card Grid -->*/}
    <div
        className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <template x-for="post in posts">
           {/*<!-- Card Item -->*/}
            <div
                className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-sp-body-bg dark:bg-gray-800 duration-300 hover:-translate-y-1"
                x-for="(post, index) in posts">
                {/*<!-- Clickable Area -->*/}
                <a href="link" className="cursor-pointer">
                    <figure>
                        {/*<!-- Image -->*/}
                        <img
                            src="post.image + '?auto=format&fit=crop&w=400&q=50'"
                            className="rounded-t h-72 w-full object-cover" />

                        <figcaption className="p-4">
                            {/*<!-- Title -->*/}
                            <p
                                className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                                x-text="post.title">
                                {/*<!-- Post Title -->*/}
                            </p>

                            {/*<!-- Description -->*/}
                            <small
                                className="leading-5 text-gray-500 dark:text-gray-400"
                                x-text="post.description">
                                {/*<!-- Post Description -->*/}
                            </small>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </template>
    </div>
</section>

<script>
    function xData() {
        /**
         * Shuffle an array
         * @param {Array} array
         * @source https://stackoverflow.com/a/2450976/6940144
         */
        function shuffle(array) {
            let currentIndex = array.length,
                randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex != 0) {
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex],
                    array[currentIndex],
                ];
            }

            return array;
        }

        const posts = [
            {
                Image:
                    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
                title: "5 Easy Tips That Will Make Your Latte Art Flourish",
                description:
                    "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
            },
            {
                Image:
                    "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed",
                title: "Coffee Roasting Basics: Developing Flavour by Roasting",
                description:
                    "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
            },
            {
                Image:
                    "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
                title: "Latte vs. Flat White - What is the Difference?",
                description:
                    "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
            },
            {
                Image:
                    "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
                title: "Creating the Perfect Espresso Recipe",
                description:
                    "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
            },
        ];

        return {
            posts: [
                ...shuffle(posts),
                ...shuffle(posts),
                ...shuffle(posts),
                ...shuffle(posts),
                ...shuffle(posts),
            ],
        };
    }
</script>
          </>
      );
  }
  