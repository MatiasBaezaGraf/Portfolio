import { useState } from "react";

const DropdownInfo = (propsWithType: {
    children: any;
    description: string;
}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <div
            className={`transform duration-200 w-full laptop:w-4/5 rounded mb-10 tablet:mb-2 ${
                open ? `h-[230px] tablet:h-[155px] ` : "h-16 bg-transparent"
            }`}
        >
            <div
                onClick={toggleOpen}
                className={`flex flex-row items-center rounded font-main leading-relaxed text-xl p-2 cursor-pointer dark:bg-stone-700/80 bg-stone-400/80 w-full z-50`}
            >
                {propsWithType.children}
            </div>
            <div
                className={`transform duration-300 text-xl px-3 h-1 w-full ${
                    open ? "translate-y-3 opacity-1" : "translate-y-0 opacity-0"
                } z-0`}
            >
                {propsWithType.description}
            </div>
        </div>
    );
};

export default DropdownInfo;
