'use client';

import Link from "next/link";
import Image from "next/image";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/'},
  { name: 'Advanced Search', href: '/advanced-search'},
  { name: 'Promises', href: '/promises'},
  { name: 'Submit Form', href: '/submit-form'},
  { name: 'About Us', href: '/about-us'}
];

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
  return (
    <div>
      <nav className="bg-linear-to-b from-black to-gray-500 border-b-3" id="nav_bar">
        <div className="mx-6 px-2 sm:px-6" id="nav_text">
          <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              </div>
              <div className="flex flex-1 items-center justify-between" id="Links">
                {/* Logo on the left */}
                <div className="flex shrink-0 items-center">
                  <Link href={"/"}>
                    <Image className="h-10 w-auto border-2 border-golden rounded-md shadow-lg" src="/Logo 2 Resized.png" width="200" height="79" alt="PolitiSay Logo"></Image>
                  </Link>
                </div>

                {/* Navigation links on the right */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-8">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                          'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white',
                          {
                            'bg-gray-900 text-white': pathname === link.href,
                          },
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white',
                  {
                    'bg-gray-900 text-white': pathname === link.href,
                  },
                )}
              >
                {link.name}
              </Link>
            ))}
            </div>
        </div>
      </nav>
      <div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-[-background]">{children}</div>
      </div>
    </div>
  );
}
