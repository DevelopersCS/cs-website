"use client"
import { Check } from '@phosphor-icons/react';
import Image from 'next/image';

interface ListItem {
    title?: string;
    description: string;
}

interface ContentWithImageSectionProps {
    imageSrc: string;
    imageAlt: string;
    title?: string;
    subtitle?: string;
    listItems: ListItem[];
    reverse?: boolean;
}

const ContentWithImageSection = ({
    imageSrc,
    imageAlt,
    title,
    subtitle,
    listItems,
    reverse = false,
}: ContentWithImageSectionProps) => {
    return (
        <div className={`flex h-full items-center gap-14 ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className="order-2  w-full h-full ">
                <Image
                    src={imageSrc}
                    className="max-w-[535px]  object-cover w-full rounded-lg"
                    alt={imageAlt}
                    width={535}
                    height={384.98}
                />
            </div>
            <div className="flex flex-col gap-6 order-1 max-w-full w-full">
                {title && <h3 className="font-bold text-[#BCD1F0] text-[24px]">{title}</h3>}
                {subtitle && <h2 className="text-white font-bold text-[30px] leading-[120%]">{subtitle}</h2>}
                <ul className="flex flex-col gap-6">
                    {listItems.map((item, index) => (
                        <li key={index}>
                            <div className="flex gap-6">
                                <div>
                                    <Check size={24} color="#4FC0FF" weight="bold" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    {item.title && <h4 className="text-white font-bold text-lg">{item.title}</h4>}
                                    {item.description && <p className={`font-medium leading-[120%] text-base ${!item.title ? "text-white" : "text-[#BCD1F0]"}`}>{item.description}</p>}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContentWithImageSection;
