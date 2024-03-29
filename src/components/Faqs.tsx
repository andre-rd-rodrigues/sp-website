"use client";
import React, { useState } from "react";
import Animated from "./Animated";
import Image from "next/image";
import { useTranslations } from "next-intl";
import useTranslation from "@/hooks/useTranslation";
import { Icon } from "@iconify/react";

type Faqs = {
  answer: string;
  question: string;
};

export default function Faqs() {
  const t = useTranslations("components.faqs");
  const { getTranslationsArray } = useTranslation();

  const faqs: Faqs[] = getTranslationsArray("components.faqs.questions");

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-10">
      <div className="w-full lg:w-1/2 justify-center items-center">
        <Animated type="slide-in-left">
          <h3 className="text-3xl sm:text-5xl my-3 max-w-xl text-blue">
            {t("title")}
          </h3>
          {/* FAQs Questions */}
          <ul className="mt-8 sm:m-8">
            {faqs.map((faq, index) => (
              <li key={index} className="text-blue bg-white mb-5 p-4">
                <button
                  onClick={() => handleToggle(index)}
                  className="flex items-center justify-between w-full"
                >
                  <h6 className="text-md sm:text-lg font-medium">
                    {faq.question}
                  </h6>
                  <span>
                    <Icon
                      icon="iconamoon:arrow-down-2-thin"
                      fontSize={30}
                      rotate={openIndex === index ? -90 : 0}
                    />
                  </span>
                </button>

                {/* Collapsible content */}
                <div
                  className={`px-4 transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-80 opacity-100 pt-3"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </Animated>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="m-auto">
          <Animated delay={500}>
            <Image
              src="https://scontent.flis8-2.fna.fbcdn.net/v/t1.6435-9/36802271_10215727744762086_83971532669321216_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_ohc=qWnz2PutGTkAX9jpNCf&_nc_ht=scontent.flis8-2.fna&oh=00_AfCdtdj-peuAStMNfixYug9sk4xYJq9O_MrlbvSK-zznnA&oe=65DF6890"
              alt="Sofia Diogo"
              width={500}
              height={600}
              layout="responsive"
              objectFit="cover"
              className="shadow-2xl"
            />
          </Animated>
        </div>
      </div>
    </div>
  );
}
