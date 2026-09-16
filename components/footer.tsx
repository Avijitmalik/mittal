import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

const productLinks = [
  'Carbide Endmills',
  'Carbide Drills',
  'CNC Tool Holders',
  'Boring Bars',
  'Grinding Wheels',
  'Saw Blades',
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Download Catalog', href: '/catalog' },
  { label: 'Contact Us', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal dark:bg-[#0A0A0C] text-[#F5F5F5]">
      {/* Top CTA Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-1">Ready to Upgrade Your Tooling?</p>
            <h3 className="text-2xl font-bold text-white text-balance">
              Get Expert Industrial Tooling Advice
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/catalog"
              className="text-sm font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              Download Catalog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold px-6 py-3 rounded-full bg-[#2F6FED] hover:bg-[#2060d8] transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
           <Image 
            src="/mittalgroup.png" 
            alt="Mittal Logo" 
            width={60} 
            height={40}
            priority 
          />
          </Link>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
            Trusted industrial tooling and machining solutions since 1988. Serving industries across India with precision and reliability.
          </p>
          <div className="flex items-center gap-3">
            {[Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                aria-label="Social link"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5">Navigation</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5">Products</h4>
          <ul className="space-y-3">
            {productLinks.map((p) => (
              <li key={p}>
                <Link
                  href="/products"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-white/40 mb-5">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-[#2F6FED] mt-1 flex-shrink-0" />
              <span className="text-sm text-white/60 leading-relaxed">
                1988/1, 1888/1, Lal Bahadur Shastri Nagar,<br />
                Rohtak, Haryana – 124001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-[#2F6FED] flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:+919215601909" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 92156 01909
                </a>
                {/* <a href="tel:+918569913390" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 85699 13390
                </a> */}
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-[#2F6FED] flex-shrink-0" />
              <a href="mailto:mittalindustrialtools@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">
                mittalindustrialtools@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Mittal Industrial Tools. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Rohtak, Haryana, India
          </p>
        </div>
      </div>
    </footer>
  )
}

