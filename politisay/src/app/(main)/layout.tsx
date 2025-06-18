'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Advanced Search', href: '/advanced-search'},
  { name: 'Promises', href: '/promises'},
  { name: 'Submit Form', href: '/submit-form'},
  { name: 'About Us', href: '/about-us'}
];

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
  return (
    <div>
      <nav className="bg-gray-800" id="nav_bar">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" id="nav_text">
            <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" id="Links">
                <div className="flex shrink-0 items-center">
                <Link href={"/"}>
                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    {links.map((link) => {
                    return (
                        <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white',
                            {
                            'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white': pathname === link.href,
                            },
                        )}
                        >
                        {link.name}
                        </Link>
                    );
                    })}
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link href="advanced-search" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Advanced Search</Link>
            <Link href="promises" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Promises</Link>
            <Link href="submit-form" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Submit Form</Link>
            <Link href="about-us" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</Link>
            </div>
        </div>
        </nav>
    <div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    </div>
  );
}
