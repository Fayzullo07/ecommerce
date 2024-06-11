import React from "react";

const Container = ({ children }: Readonly<{ children: React.ReactNode }>, className = "") => {
    return (
        <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ${className}`}>
            {children}
        </div>
    )
}

export default Container;