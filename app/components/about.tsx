import React from "react";

interface AboutProps {
    icon: React.ReactNode;
    quest: string;
    respo: string;
}

export default function About({icon, quest, respo}: AboutProps) {
    return (
        <div className="flex gap-3 mt-6">
            <span className="text-[#4b40e4] rounded-full h-10 w-10 text-center">{icon && React.cloneElement(icon, { size: 30 })}</span>
            <span className = "flex flex-col gap-1">
                <div className="text-[#7C8493] font-semibold font-mono">{quest}</div>
                <div className="text-[#000] font-semibold">{respo}</div>
            </span>
        </div>
    )
}

