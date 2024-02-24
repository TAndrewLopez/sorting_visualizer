import { ChangeEvent } from "react";

import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "@/lib/utils";

interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    value: number;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isDisabled: boolean;
}

export const Slider: React.FC<SliderProps> = ({
    min = MIN_ANIMATION_SPEED,
    max = MAX_ANIMATION_SPEED,
    step = 10,
    value,
    handleChange,
    isDisabled = false,
}) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <span className="text-center text-gray-300">Slow</span>
            <input
                type="range"
                disabled={isDisabled}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => handleChange(e)}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
            />
            <span className="text-center text-gray-300">Fast</span>
        </div>
    );
};
