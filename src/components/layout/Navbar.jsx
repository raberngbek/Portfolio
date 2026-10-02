import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Work', href: isHomePage ? '#work' : '/#work' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Approach', href: isHomePage ? '#approach' : '/#approach' },
    { name: 'Skills', href: isHomePage ? '#skills' : '/#skills' },
    { name: 'Resume', href: '/resume/Chhaeng_Sokuntheara_Resume.pdf', external: true, download: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo with subtle portrait avatar */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Chhaeng Sokuntheara Home"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-border group-hover:border-accent transition-colors flex-shrink-0">
              <img
                src="/images/portrait.jpg"
                alt="Chhaeng Sokuntheara"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span className="font-extrabold text-base md:text-lg tracking-tight text-text-primary group-hover:text-accent transition-colors">
              SOKUNTHEARA<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={link.download}
                  className="text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors flex items-center gap-0.5"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-text-muted" />
                </a>
              ) : isHomePage ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}

            <a
              href={isHomePage ? '#contact' : '/#contact'}
              className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-border hover:border-accent text-text-primary hover:text-accent bg-surface transition-all"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/98 border-b border-border px-6 pt-4 pb-8 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={link.download}
                  className="py-2 text-base font-medium text-text-primary flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted" />
                </a>
              ) : isHomePage ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-base font-medium text-text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="py-2 text-base font-medium text-text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <div className="pt-2 border-t border-border">
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              className="block w-full text-center text-xs font-bold uppercase tracking-wider py-3 rounded-full bg-accent text-background font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
