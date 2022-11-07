import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const MultipleObserver = (propsWithType: { children: any }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <div
            id="element"
            className={`transform duration-1000 text-center ${
                inView ? "translate-x-0 opacity-1" : "translate-x-20 opacity-0"
            }
            `}
            ref={ref}
        >
            <span>{propsWithType.children}</span>
        </div>
    );
};

export default MultipleObserver;
