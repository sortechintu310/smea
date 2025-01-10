import React from 'react';

export default function Footer() {
  return (
    <footer className="text-slate-400 py-4">
      <div className="mt-16 mb-16 text-center">
        <p className="text-slate-300 mb-4">Social Insights is committed to providing powerful tools for social media performance analysis.</p>
        <a href="/" className="bg-emerald-600 text-white py-2 px-6 rounded-md font-bold hover:bg-emerald-700 hover:scale-[.9] transition">Get in Touch</a>
      </div>
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Social Insights Pro. All rights reserved.
      </div>
    </footer>
  );
};

