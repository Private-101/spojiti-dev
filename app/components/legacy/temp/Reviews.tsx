//import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useFetcher } from '@remix-run/react';
import * as React from 'react';
import type { Review as ReviewCardProps } from '~/components/legacy/tailwindui/sections/ReviewCard';
    
    export default function Reviews(reviews: ReviewCardProps[]) {
    
      return (
        <>
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">{review.name}</dt>
            <dt className="text-base leading-7 text-gray-600">{review.jobTitle}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {review.description}
            </dd>
          </div>
          ))}
        </dl>
      </div>
    </div>
        </>
      )
    }
