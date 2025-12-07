"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MdArrowOutward } from "react-icons/md";

const slides = [
    { img: "/images/home/media1.png", text: "Bloomberg TV", para: "Segment on choosing the SPAC route and taking Near public." },
    { img: "/images/home/media2.png", text: "Absolute Return Podcast 231", para: "Discussion on enterprise software and disciplined growth." },
    { img: "/images/home/media3.png", text: "Schwab Network", para: "Live interview with Nicole Petallides on Near’s trading debut." },
    { img: "/images/home/media4.png", text: "Nasdaq MarketSite", para: "Short segment on Near’s public debut and data intelligence focus." },
];

export default function Media() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: false,
            containScroll: false,
            align: "start",
            skipSnaps: false,
            watchDrag: true,
        },
        [
            Autoplay({
                delay: 3000,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
            }),
        ]
    );
    return (
        <div className="py-[60px] lg:py-[150px] gap-6 lg:gap-9 flex flex-col items-center max-w-[1920px] mx-auto">

            {/* Heading */}
            <div className="flex gap-12 items-center">
                <h2 className="font-charter text-[36px] lg:text-[64px] text-[#111111] leading-[36px] lg:leading-[64px] -tracking-[2px]">
                    In the media
                </h2>
                <button className="w-full hidden lg:block lg:w-[305px] bg-[#E8DCCB] text-[#1A3470] border border-[#E8DCCB26] h-[46px] rounded-full flex items-center justify-center gap-1 uppercase text-sm lg:text-base font-inter">
                    See all press and interviews
                </button>
            </div>

            <div
                ref={emblaRef}
                className="
          overflow-hidden w-full 
          pl-[20%] pr-[5%]   
        "
            >
                <div className="flex">

                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className="
                shrink-0 px-1 lg:px-2 
                basis-[80%] md:basis-[60%] lg:basis-[45%] 
              "
                        >
                            <div className="relative w-full border border-[#E8DCCB26] overflow-hidden rounded-[4px] group">
                                <Image
                                    src={slide.img}
                                    width={623}
                                    height={680}
                                    alt="media"
                                    className="w-full h-full object-cover z-10 transition-all duration-500 group-hover:saturate-0"
                                />

                                <div className="flex flex-col absolute bottom-0 z-20 p-5 lg:p-10">
                                    <p className="font-charter uppercase text-3xl lg:text-[55px] text-[#F7F4F1] font-semibold leading-[30px] lg:leading-[55px]">
                                        {slide.text}
                                    </p>
                                    <div className="flex flex-col lg:flex-row gap-3 lg:items-end">
                                        <p className="text-xs lg:text-sm text-[#E8DCCB] uppercase">{slide.para}</p>
                                        <button className="text-base uppercase text-[#F7F4F1] font-medium flex items-center gap-3">
                                            Watch <MdArrowOutward />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
            <button className="w-[330px] lg:hidden lg:w-[305px] bg-[#E8DCCB] text-[#1A3470] border border-[#E8DCCB26] h-[46px] rounded-full flex items-center justify-center gap-1 uppercase text-sm lg:text-base font-inter">
                See all press and interviews
            </button>
        </div>
    );
}
