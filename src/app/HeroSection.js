import React from "react";
import SearchBar from "./components/Element/searchbar";
const HeroSection = () => {
    return (
        <div className="dark text-foreground bg-background">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center h-screen ">
                     <SearchBar />
                    <h1 className="text-5xl font-bold text-foreground ">Welcome to Shelper</h1>
                    <p className="text-2xl text-foreground">Your personal study helper</p>
                </div>
            </div>
        </div> 
    );
};

export default HeroSection;