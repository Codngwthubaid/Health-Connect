import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const ServicesFirst = [
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
  },
  {
    name: "Medication Management",
    body: "Stay on top of your medication regimen with our AI-powered reminders and tracking features. Our platform helps users manage prescriptions, schedules, and potential drug interactions, ensuring adherence and safety.",
  },
  {
    name: "Health Education and Resources",
    body: "Access a wealth of educational materials, articles, and videos tailored to your health interests. Our platform empowers users with knowledge, promoting informed decision-making and healthier lifestyle choices.",
  },
  {
    name: "Data Analytics and Insights",
    body: "Utilize our robust analytics tools to gain insights into health trends and patterns. Our platform aggregates user data to provide valuable feedback, helping both users and healthcare providers make informed decisions.",
  }
];

const firstRow = ServicesFirst.slice(0, ServicesFirst.length / 2);
const secondRow = ServicesFirst.slice(ServicesFirst.length / 2);

const ReviewCard = ({
  name,
  body,
}) => {
  return (
    <figure
      className={cn("no-scrollbar  relative w-64 cursor-pointer overflow-hidden rounded-xl border p-6")}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold text-[#0096c7] ">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-slate-500">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center rounded-lg border bg-background md:shadow-xl bg-[#f5f5f4] mt-24 overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((ServicesFirst) => (
          <ReviewCard key={ServicesFirst.name} {...ServicesFirst} />
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
