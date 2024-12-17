// BentoGrid.tsx
import React from "react";

type BentoItemProps = {
  title: string;
  description: string;

  widthClass: string; // Add a width class prop
};

const BentoItem: React.FC<BentoItemProps> = ({
  title,
  description,

  widthClass,
}) => {
  return (
    <div
      className={`bg-surfaceVariant text-onSurfaceVariant rounded-xl min-h-75 flex items-center ${widthClass}`}
    >
      <div className="p-4 lg:p-6 space-y-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm font-light">{description}</p>
      </div>
    </div>
  );
};

const HomeBento: React.FC = () => {
  const items = [
    {
      title: "Your Safe Space for Understanding and Healing",
      description:
        "Gain access to medically-approved articles, guides, and resources that demystify postpartum depression, helping you feel seen, understood, and informed",
      widthClass: "col-span-full lg:col-span-5",
    },
    {
      title: "Check In With Yourself",
      description:
        "We provide a confidential self-assessment tool to better understand your feelings and find gentle guidance for your unique journey.",
      widthClass: "col-span-full lg:col-span-2",
    },
    {
      title: "Practical Tools for Peace and Balance",
      description:
        "Explore coping strategies and self-care practices to navigate the emotional and physical changes of postpartum with grace and resilience.",
      widthClass: "col-span-full lg:col-span-2",
    },
    {
      title: "A Place to Share Without Fear",
      description:
        "Join our anonymous community space where you can share your experiences, ask questions, and connect with others in a safe, supportive environment. Build meaningful connections within a judgment-free community where you can find support, companionship, and a sense of belonging.",
      widthClass: "col-span-full lg:col-span-5",
    },
    {
      title: "Stories, Words, and Wisdom Just for You",
      description:
        "Discover a carefully curated library of books, articles, videos, and webinars offering hope, understanding, and actionable insights for your postpartum journey.",
      widthClass: "col-span-full",
    },
  ];

  return (
    <section className="p-10 space-y-6">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          What <span className="italic">Gloomommy</span> offers.
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 lg:container gap-6">
        {items.map((item, index) => (
          <BentoItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HomeBento;
