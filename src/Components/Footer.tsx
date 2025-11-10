import React from 'react';

// Link data for easy maintenance
const footerLinks = {
  about: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Support', href: '#' },
  ],
  support: [
    { name: 'Customer Support', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Report a Problem', href: '#' },
    { name: 'Security & Privacy', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Legal', href: '#' },
  ]
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Outer Container: Dark background as is common for footers
    <footer className="bg-white text-black lg:py-10 py-10 pt-16 sm:pt-20">
      <div className="container mx-auto px-9 sm:px-6 lg:px-20 max-w-7xl font-[inter]">
        
        {/* Top Section: Logo/Description and Link Columns */}
        {/* 🚨 RESPONSIVE GRID: 1 column on mobile, 3 columns on tablet/desktop 🚨 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-1 pb-12 sm:pb-16 border-b border-[#EBF1FF]">
          
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-black mb-3">
              Paylinks
            </h3>
            <p className="text-[#64748B] text-sm max-w-xs">
              Paylinks is designed to help you manage your money smarter. Join thou
            </p>
          </div>
          
          {/* Column 2: About Links (Starts from md:col-span-2 on mobile grid) */}
          <div className="md:col-span-1 lg:pl-40">
            <h4 className="text-base font-bold text-black mb-4">About</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Support Links */}
          <div className="md:col-span-2 lg:pl-70">
            <h4 className="text-base font-bold text-black mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="py-6 flex flex-col sm:flex-row lg:gap-15 text-sm text-gray-400">
          
          {/* Left Side: Legal Links */}
          <div className="flex flex-wrap justify-start gap-3 mb-4 sm:mb-0">
            {footerLinks.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
          </div>

          {/* Right Side: Copyright Text */}
          <p>
             {currentYear} Paylinks. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;