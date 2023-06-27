import * as React from 'react';
import { Container } from '~/components/legacy/tailwindui/Container';

export interface Review {
  rating: number;
  name: string;
  description: string;
  avatarUrl: string;
  jobTitle: string;
}

const Star = () => (
  <svg className="h-5 w-5 text-yellow-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M10 15.27L16.18 12l-1.64-7.03L20 2.24l-7.19-.61L10 0 7.19 1.63 0 2.24l5.46 2.73L2.82 12z" />
  </svg>
);

const ReviewCard: React.FC<{ review: Review }> = ({review}) => (
  <div className="p-4 bg-sp-body-bg shadow rounded-lg hover:shadow-lg transition-shadow duration-500 ease-in-out" role="article" aria-label={`Review by ${review.name}`}>
    <div className="mt-2 text-gray-600">{review.description}</div>
    <div className="flex items-center">
      <img className="w-12 h-12 rounded-full mr-4 hover:scale-105 transition-transform duration-500 ease-in-out" src={review.avatarUrl} alt={review.name} />
      <div className="text-xl font-bold">{review.name} - {review.jobTitle}</div>
    </div>
    <div className="mt-2 flex" aria-label={`Rated ${review.rating} out of 5 stars`}>
      {Array.from({ length: Math.min(5, review.rating) }).map((_, i) => <Star key={i} />)}
    </div>
  </div>
);

const ReviewCards: React.FC<{ reviews: Review[] }> = ({reviews}) => (
  <Container type='grid' id='#reviews'>
    {reviews.map((review, index) => (
      <ReviewCard key={index} review={review} />
    ))}
  </Container>
);

export default ReviewCards;


/*
export interface ReviewCardProps {
    quote: string;
    imgUrl: string;
    name: string;
    jobTitle: string;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({quote, imgUrl, name, jobTitle}) => {
    

    return (
    <>
      <section className="relative isolate overflow-hidden bg-sp-body-bg px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600 to-gray-800 opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-sp-body-bg shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                {quote}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src={imgUrl}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{name}</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">{jobTitle}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      </>
    )
  };

  */