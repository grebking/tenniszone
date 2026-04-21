import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/logo.png" alt="TennisZone" width={160} height={64} className="h-16 w-auto mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed">
              America&apos;s premier tennis betting advisory. Data-driven picks,
              verified results, consistent profits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#how-it-works" className="hover:text-[#C8E620] transition-colors">How It Works</a></li>
              <li><a href="#stats" className="hover:text-[#C8E620] transition-colors">Track Record</a></li>
              <li><a href="#pricing" className="hover:text-[#C8E620] transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-[#C8E620] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#C8E620] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#C8E620] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#C8E620] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#C8E620] transition-colors">Responsible Gambling</a></li>
              <li><a href="#" className="hover:text-[#C8E620] transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>support@tenniszone.xyz</li>
              <li>New York, NY 10001</li>
              <li>United States</li>
            </ul>
            <div className="flex gap-4 mt-4">
              {/* Twitter/X */}
              <a href="#" className="text-gray-500 hover:text-[#C8E620] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-gray-500 hover:text-[#C8E620] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Discord */}
              <a href="#" className="text-gray-500 hover:text-[#C8E620] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} TennisZone. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs text-center md:text-right max-w-xl">
            Gambling involves risk. Please bet responsibly. If you or someone you know has a gambling problem,
            call 1-800-GAMBLER. Must be 21+ and located in a state where sports betting is legal.
          </p>
        </div>
      </div>
    </footer>
  );
}
