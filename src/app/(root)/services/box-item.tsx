import {motion} from "framer-motion"

interface BoxItemTypes {
    title?: string;
    description: string;
    color?: string;
    index: number;
    Icon?: React.ReactElement;
}

const BoxItem: React.FC<BoxItemTypes> = ({ Icon, description, title, color = "red", index }) => {
    return (
        <motion.div 
            className={`flex justify-center items-center h-[230px] gap-2 rounded-lg flex-col text-center p-6 bg-[#f5f4f4] dark:bg-[#0F2646]`}
            initial={{ translateY: 10, opacity: 0, }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                translateY: { duration: 0.1, delay: 0.5, ease: "easeOut" },
                opacity: { duration: 1.3, delay: 0.2 * index, ease: "easeInOut" }
            }} 
        >
            {Icon && (
                <div className="flex items-center justify-center p-3 dark:bg-[#a6a7a8] bg-blue-500 text-[#E5E90F] dark:text-[#c5c73a] dark:bg-opacity-10 rounded-[4px]">
                    {Icon}
                </div>
            )}
            {title && <h2 className="font-semibold text-lg animate-none text-black dark:text-white">{title}</h2>}
            {description && <p className="text-base text-[#7386B0] animate-none leading-[130%]">{description}</p>}
        </motion.div>
    );
};

export default BoxItem