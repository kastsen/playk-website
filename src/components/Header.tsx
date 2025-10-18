'use client'

import styles from './header.module.css';
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import {Logo} from "@/components/Logo";

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'About', href: '/' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header
          className={`absolute inset-x-0 top-0 z-2 ${styles.header} ${
              isScrolled ? styles.scrolled : ""
          }`}
      >
        <div className="mx-auto">
          <nav aria-label="Global" className="flex items-center justify-between py-6">
            <div className="flex lg:flex-1">
              <Logo className={styles.logo}/>
            </div>

            <div className="flex lg:hidden">
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 focus:outline-none focus:ring-0"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className={`size-6 ${styles.menuIcon}`} />
              </button>
            </div>

            <div className={`hidden lg:flex lg:gap-x-12 ${styles.navigation}`}>
              {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="font-semibold">
                    {item.name}
                  </Link>
              ))}
            </div>
          </nav>
        </div>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${styles.mobileNavigation}`}>
            <div className="flex items-center justify-between">
              <div></div>
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-white focus:outline-none focus:ring-0"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6 text-center">
                  {navigation.map((item) => (
                      <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white"
                          onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  );
}
