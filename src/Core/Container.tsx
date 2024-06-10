import React from "react";

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="mx-auto max-w-7xl text-2xl px-2 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}

export default Container;