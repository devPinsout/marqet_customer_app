import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 border-t">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </div> */}

        
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/mobile-app">Mobile App</Link></li>
            <li><Link href="/services/seo">SEO Optimization</Link></li>
          </ul>
        </div> */}

        
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><Link href="/products/erp">ERP Software</Link></li>
            <li><Link href="/products/crm">CRM Solutions</Link></li>
            <li><Link href="/products/ecommerce">E-commerce Platform</Link></li>
          </ul>
        </div>

        */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm">123 Tech Street, Noida, India</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +91-9876543210</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}
