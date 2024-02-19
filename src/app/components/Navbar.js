// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav class="bg-white">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="Asset 3.svg" class="h-8" alt="Logo" />
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
