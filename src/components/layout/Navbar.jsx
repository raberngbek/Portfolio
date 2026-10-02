import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import Button from '../ui/Button';

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

  // Close mobile menu when changing route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Work', href: isHomePage ? '#work' : '/#work' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Skills', href: isHomePage ? '#skills' : '/#skills' },
    { name: 'Resume', href: '/resume/Chhaeng_Sokuntheara_Resume.pdf', external: true, download: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border/70 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            aria-label="Chhaeng Sokuntheara Portfolio Home"
          >
            <span className="font-bold text-lg md:text-xl tracking-tight text-text-primary group-hover:text-accent transition-colors">
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
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.download ? (
                    <Download className="w-3.5 h-3.5 text-text-muted" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
                  )}
                </a>
              ) : isHomePage ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}

            {/* CTA Button */}
            <Button
              href={isHomePage ? '#contact' : '/#contact'}
              variant="primary"
              size="sm"
            >
              Let's Talk
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface border border-border/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/80 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={link.download}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  {link.download ? (
                    <Download className="w-4 h-4 text-text-muted" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-text-muted" />
                  )}
                </a>
              ) : isHomePage ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>
          <div className="pt-2 border-t border-border/50">
            <Button
              href={isHomePage ? '#contact' : '/#contact'}
              variant="primary"
              size="md"
              className="w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
