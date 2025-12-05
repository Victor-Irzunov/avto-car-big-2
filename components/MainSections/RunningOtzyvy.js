// /components/otzyvy/RunningOtzyvy.jsx
// Витя замени файл полностью на этот код

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const reviewsData = [
  { id: 1, imageSrc: "/otzyvy/1.webp" },
  { id: 2, imageSrc: "/otzyvy/2.webp" },
  { id: 3, imageSrc: "/otzyvy/3.webp" },
  { id: 4, imageSrc: "/otzyvy/4.webp" },
  { id: 5, imageSrc: "/otzyvy/5.webp" },
  { id: 6, imageSrc: "/otzyvy/6.webp" },
];

const RunningOtzyvy = () => {
  return (
    <section className="w-full sd:mt-0 xz:mt-16">
      <Marquee speed={30} gradient={false}>
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="mx-4 rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm"
          >
            <Image
              src={review.imageSrc}
              alt={`Отзыв клиента №${review.id}`}
              width={320}
              height={480}
              loading="lazy"
              className="h-[260px] sd:h-80 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default RunningOtzyvy;
