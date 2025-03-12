"use client";

import { Check } from "@phosphor-icons/react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ListItem {
    title?: string;
    description?: string;
}

interface ContentWithImageSectionProps {
    imageSrc: string;
    imageAlt: string;
    title?: string;
    subtitle?: string;
    listItems: ListItem[];
    reverse?: boolean;
    index: number;
}

const ContentWithImageSection = ({
    imageSrc,
    imageAlt,
    title,
    subtitle,
    listItems,
    reverse = false,
    index,
}: ContentWithImageSectionProps) => {
    return (
        <motion.div
            className={`flex h-full items-center gap-14 lg:px-6 xl:px-0 flex-col-reverse ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                translateY: { duration: 0.1, delay: 0.5, ease: "easeOut" },
                opacity: { duration: 1.5, delay: 0.5 * index, ease: "easeInOut" },
            }}
        >
            <div className="order-2 w-full h-full">
                <Image
                    src={imageSrc}
                    className="xl:max-w-[535px] max-w-full object-cover w-full xl:rounded-lg"
                    alt={imageAlt}
                    width={535}
                    height={384.98}
                />
            </div>
            <div className="flex flex-col gap-6 order-1 max-w-full w-full px-6 lg:px-0">
                {title && (
                    <h1 className="font-bold text-black dark:text-[#BCD1F0] text-[24px]">
                        {title}
                    </h1>
                )}
                {subtitle && (
                    <h2 className="dark:text-white text-black font-bold text-[30px] leading-[120%]">
                        {subtitle}
                    </h2>
                )}
                <ul className="flex flex-col gap-6">
                    {listItems.map((item, index) => (
                        <li key={index}>
                            <div className="flex gap-6">
                                <div>
                                    <Check size={24} color="#4FC0FF" weight="bold" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    {item.title && (
                                        <h3 className="dark:text-white text-black font-bold text-lg">
                                            {item.title}
                                        </h3>
                                    )}
                                    {item.description && (
                                        <p
                                            className={`font-medium text-[#5E5E5F] leading-[120%] text-base ${!item.title ? "dark:text-white" : "dark:text-[#BCD1F0]"
                                                }`}
                                        >
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ContentWithImageSection;
