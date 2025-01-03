
interface BoxItemTypes {
    title?: string;
    description: string;
    color?: string;
    Icon?: React.ReactElement;
}

const BoxItem: React.FC<BoxItemTypes> = ({ Icon, description, title, color = "red" }) => {
    return (
        <div className={`flex justify-center items-center h-[230px] gap-2 rounded-lg flex-col text-center p-6 bg-[#0F2646]`}>
            {Icon && (
                <div className="flex items-center justify-center p-3 bg-[#25A8FF] bg-opacity-10 rounded-[4px]">
                    {Icon}
                </div>
            )}
            {title && <h2 className="font-semibold text-lg text-white">{title}</h2>}
            {description && <p className="text-base text-[#7386B0   ] leading-[130%]">{description}</p>}
        </div>
    );
};

export default BoxItem