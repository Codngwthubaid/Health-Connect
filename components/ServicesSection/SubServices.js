// import React from 'react'

// const SubServices = (props) => {
//   return (
//     <div className='flex h-60 gap-y-1 bg-[#caf0f8] flex-col justify-start items-start w-[90vw] sm:w-[45vw] lg:w-[30vw] p-5 rounded-2xl '>
//       <div className='text-2xl text-[#0096c7] font-semibold'>{props.title}</div>
//       <p className='text-slate-500'>{props.desc}</p>
//     </div>
//   )
// }

// export default SubServices
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Personalized Health Monitoring",
    body: "Our platform utilizes advanced AI algorithms to provide real-time health monitoring tailored to individual needs. Users can track vital signs, manage chronic conditions, and receive personalized insights to improve their overall well-being.",
  },
  {
    name: "AI-Driven Health Assessments",
    body: "Leverage the power of artificial intelligence to conduct thorough health assessments. Our platform analyzes user data to identify potential health risks and offers actionable recommendations, enabling proactive health management.",
  },
  {
    name: "Telemedicine Integration",
    body: "Connect with healthcare professionals seamlessly through our integrated telemedicine services. Users can schedule virtual consultations, receive expert advice, and access medical prescriptions—all from the convenience of their mobile devices.",
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
