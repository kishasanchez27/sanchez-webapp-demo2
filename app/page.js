import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [copiedButton, setCopiedButton] = useState("");
  
  const copyToClipboard = (code, name) => {
    navigator.clipboard.writeText(code);
    setCopiedButton(name);
    setTimeout(() => setCopiedButton(""), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">TailwindTutorial</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#getting-started" className="text-gray-700 hover:text-indigo-600 transition">Getting Started</a>
              <a href="#buttons" className="text-gray-700 hover:text-indigo-600 transition">Buttons</a>
              <a href="#responsive" className="text-gray-700 hover:text-indigo-600 transition">Responsive Design</a>
              <a href="#practical" className="text-gray-700 hover:text-indigo-600 transition">Practical Examples</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Complete Tailwind CSS Tutorial for JavaScript Developers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn how to integrate and use Tailwind CSS in your JavaScript projects with practical examples, code snippets, and best practices.
          </p>
          <div className="inline-flex gap-4">
            <a href="#getting-started" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105">
              Start Learning
            </a>
            <a href="#practical" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-3 px-6 rounded-lg transition">
              See Examples
            </a>
          </div>
        </div>

        {/* Getting Started Section */}
        <section id="getting-started" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with Tailwind CSS</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Installation Steps</h3>
              <p className="text-gray-600 mb-6">Here's how to install Tailwind CSS in your JavaScript project:</p>
              
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
                <code className="text-sm">
                  <span className="text-green-400"># Install via npm</span><br/>
                  npm install -D tailwindcss<br/>
                  npx tailwindcss init<br/><br/>
                  
                  <span className="text-green-400"># Configure tailwind.config.js</span><br/>
                  <span className="text-blue-300">module.exports = </span>{`{`}<br/>
                  &nbsp;&nbsp;<span className="text-yellow-300">content</span>: [<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">"./src/**/*.{js,jsx,ts,tsx}"</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">"./public/index.html"</span><br/>
                  &nbsp;&nbsp;],<br/>
                  &nbsp;&nbsp;<span className="text-yellow-300">theme</span>: {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">extend</span>: {},<br/>
                  &nbsp;&nbsp;},<br/>
                  &nbsp;&nbsp;<span className="text-yellow-300">plugins</span>: [],<br/>
                  {`}`}
                </code>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h4 className="font-bold text-blue-800 mb-2">💡 Pro Tip</h4>
                <p className="text-blue-700">Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you use predefined classes directly in your HTML/JSX.</p>
              </div>

              <h4 className="text-xl font-bold text-gray-800 mt-8 mb-4">Basic Example</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-bold text-gray-700 mb-2">JSX Code:</h5>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
                    {`<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-2">Hello Tailwind!</h2>
  <p className="text-blue-100">Styled with utility classes</p>
</div>`}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-bold text-gray-700 mb-2">Result:</h5>
                  <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2">Hello Tailwind!</h2>
                    <p className="text-blue-100">Styled with utility classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Tutorial Section */}
        <section id="buttons" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Creating Beautiful Buttons</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-8">Tailwind makes it easy to create responsive, accessible buttons with hover states, transitions, and various styles.</p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Button Examples */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Button Variants</h3>
                <div className="space-y-4">
                  {[
                    { name: "primary", code: `className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"`, comp: "Primary Button" },
                    { name: "success", code: `className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:shadow-md transition"`, comp: "Success Button" },
                    { name: "outline", code: `className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-medium py-2 px-4 rounded transition"`, comp: "Outline Button" },
                    { name: "gradient", code: `className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"`, comp: "Gradient Button" },
                    { name: "disabled", code: `className="bg-gray-300 text-gray-500 cursor-not-allowed font-medium py-2 px-4 rounded transition" disabled`, comp: "Disabled Button" },
                  ].map((btn) => (
                    <div key={btn.name} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 capitalize">{btn.name} Button</span>
                        <button
                          onClick={() => copyToClipboard(btn.code, btn.name)}
                          className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded transition"
                        >
                          {copiedButton === btn.name ? "Copied!" : "Copy Code"}
                        </button>
                      </div>
                      <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm font-mono mb-2 overflow-x-auto">
                        {`<button ${btn.code}>${btn.comp}</button>`}
                      </div>
                      <div className="mt-2">
                        <button dangerouslySetInnerHTML={{ __html: `<button ${btn.code}>${btn.comp}</button>` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button Anatomy */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Button Anatomy Explained</h3>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Utility Classes Breakdown:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm mr-2">bg-blue-500</span>
                      <span>Background color (blue with 500 intensity)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm mr-2">hover:bg-blue-600</span>
                      <span>Background on hover state</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm mr-2">text-white</span>
                      <span>Text color</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm mr-2">py-2 px-4</span>
                      <span>Padding: vertical (y) 0.5rem, horizontal (x) 1rem</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm mr-2">rounded</span>
                      <span>Border radius (0.25rem)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm mr-2">transition</span>
                      <span>Adds smooth transition effect</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ Common Pitfalls</h4>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• Don't forget to add <code className="bg-yellow-100 px-1 rounded">cursor-pointer</code> for clickable elements</li>
                    <li>• Use <code className="bg-yellow-100 px-1 rounded">focus:ring-2</code> for accessibility focus states</li>
                    <li>• Always include hover states for better UX</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Design Section */}
        <section id="responsive" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Responsive Design with Tailwind</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-6">Tailwind uses mobile-first breakpoints to create responsive designs. Here's how it works:</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Breakpoint System</h3>
                <div className="space-y-4">
                  {[
                    { prefix: "sm:", desc: "≥ 640px (small devices)" },
                    { prefix: "md:", desc: "≥ 768px (medium devices)" },
                    { prefix: "lg:", desc: "≥ 1024px (large devices)" },
                    { prefix: "xl:", desc: "≥ 1280px (extra large)" },
                    { prefix: "2xl:", desc: "≥ 1536px (2x large)" },
                  ].map((bp) => (
                    <div key={bp.prefix} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <code className="bg-gray-800 text-white px-3 py-1 rounded mr-3">{bp.prefix}</code>
                      <span className="text-gray-700">{bp.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Practical Example</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
                  <code className="text-sm">
                    <span className="text-gray-400">// Mobile-first responsive card</span><br/>
                    {`<div className="`}<span className="text-yellow-300">bg-white p-4</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">sm:p-6</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">md:flex</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">lg:p-8</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">xl:max-w-6xl</span>{`">`}<br/>
                    &nbsp;&nbsp;{`<div className="`}<span className="text-yellow-300">md:w-1/2 lg:w-1/3</span>{`">`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{`<!-- Content -->`}</span><br/>
                    &nbsp;&nbsp;{`</div>`}<br/>
                    {`</div>`}
                  </code>
                </div>
              </div>
            </div>

            {/* Live Responsive Demo */}
            <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <h4 className="font-bold">Live Responsive Demo</h4>
                <p className="text-sm text-gray-300">Resize your browser to see the changes</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-100 p-4 rounded text-center">
                    <p className="font-bold text-blue-800">Mobile</p>
                    <p className="text-sm text-blue-600">1 column</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded text-center">
                    <p className="font-bold text-green-800">Tablet</p>
                    <p className="text-sm text-green-600">2 columns</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded text-center">
                    <p className="font-bold text-purple-800">Desktop</p>
                    <p className="text-sm text-purple-600">4 columns</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded text-center">
                    <p className="font-bold text-purple-800">Desktop</p>
                    <p className="text-sm text-purple-600">4 columns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples Section */}
        <section id="practical" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical JavaScript Components</h2>
          
          {/* Interactive Card Component */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Product Card</h3>
            <p className="text-gray-600 mb-6">Combine Tailwind with JavaScript for interactive components:</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="group relative">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-48 rounded-lg mb-4 overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <button className="bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition transform group-hover:scale-110">
                        ♥
                      </button>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Headphones</h4>
                  <p className="text-gray-600 mb-4">Noise-cancelling wireless headphones with 30-hour battery life.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">$199.99</span>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">Component Code:</h4>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`function ProductCard({ title, price, description }) {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="group relative bg-white rounded-lg shadow-lg 
                    hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img src="/product.jpg" alt={title} 
             className="w-full h-48 object-cover 
                        group-hover:scale-105 transition-transform duration-300"/>
        
        {/* Like Button */}
        <button 
          onClick={() => setLiked(!liked)}
          className={\`absolute top-4 right-4 w-10 h-10 rounded-full 
                     flex items-center justify-center transition
                     \${liked ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-800'}
                     hover:scale-110\`}>
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white 
                           font-semibold py-2 px-6 rounded-lg transition
                           hover:scale-105 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Loading State Example */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Loading States & Animations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Loading Button</span>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        Processing...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Animation Classes:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm mr-2">animate-pulse</code>
                    <span>Pulse animation for loading states</span>
                  </li>
                  <li className="flex items-center">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm mr-2">animate-spin</code>
                    <span>Continuous spinning animation</span>
                  </li>
                  <li className="flex items-center">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm mr-2">animate-bounce</code>
                    <span>Bouncing animation</span>
                  </li>
                  <li className="flex items-center">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm mr-2">delay-100</code>
                    <span>Adds 100ms delay to animation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Reference Guide</h2>
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-xl mb-4 text-blue-300">Spacing</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between"><code>p-4</code><span>Padding 1rem</span></li>
                  <li className="flex justify-between"><code>m-2</code><span>Margin 0.5rem</span></li>
                  <li className="flex justify-between"><code>gap-4</code><span>Grid gap 1rem</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 text-green-300">Typography</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between"><code>text-xl</code><span>Extra large text</span></li>
                  <li className="flex justify-between"><code>font-bold</code><span>Bold weight</span></li>
                  <li className="flex justify-between"><code>text-center</code><span>Center align</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 text-purple-300">Colors</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between"><code>bg-blue-500</code><span>Blue background</span></li>
                  <li className="flex justify-between"><code>text-white</code><span>White text</span></li>
                  <li className="flex justify-between"><code>hover:bg-red-600</code><span>Hover state</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start implementing Tailwind CSS in your JavaScript projects today. Remember to check the official documentation for more advanced features.
          </p>
          <div className="space-x-4">
            <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition">
              Official Docs
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
            <a href="#getting-started" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-3 px-8 rounded-lg transition">
              Review Tutorial
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TailwindTutorial</h3>
              <p className="text-gray-400">A comprehensive guide to using Tailwind CSS in JavaScript applications.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#getting-started" className="hover:text-white transition">Getting Started</a></li>
                <li><a href="#buttons" className="hover:text-white transition">Button Guide</a></li>
                <li><a href="#responsive" className="hover:text-white transition">Responsive Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Official Website</a></li>
                <li><a href="https://tailwindui.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Tailwind UI</a></li>
                <li><a href="https://v2.tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>Built with Next.js and Tailwind CSS • Tutorial for educational purposes</p>
            <p className="mt-2">© {new Date().getFullYear()} TailwindTutorial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}