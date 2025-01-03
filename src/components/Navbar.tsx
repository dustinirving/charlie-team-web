'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  // DisclosureButton,
  // DisclosurePanel,
  // Menu,
  // MenuButton,
  // MenuItem,
  // MenuItems,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
const navigation = [
  { name: 'Mission', href: '/mission' },
  { name: 'Docuseries', href: '/docuseries' },
  { name: 'Programs', href: '/programs' },
  { name: 'Team', href: '/team' },
  // { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
  // { name: 'Donate', href: '/donate' },
];

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(' ');
// }

export default function Navbar() {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          {/* Logo */}
          <Link href="/" className="absolute left-0 flex flex-shrink-0 items-center gap-2">
            <Image alt="" src="/logo.svg" width={30} height={30} />
            <div className="text-center text-[#BAA688]">
              <p className="text-[15px]">Charlie Team</p>
              <p className="text-[8px]">Consulting</p>
            </div>
          </Link>

          {/* Centered Navigation */}
          <div className="flex flex-1 items-center justify-center">
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.href === pathname
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="hidden md:block">
            <Link
              key="Apply Now"
              href="/application"
              className={classNames(
                '/application' === pathname
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {[...navigation, { name: 'Apply Now', href: '/application' }].map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.href === pathname ? 'page' : undefined}
              className={classNames(
                item.href === pathname
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
