'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TailwindTutorial() {
  const [activeTab, setActiveTab] = useState('what-is-tailwind');

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <header className="bg-purple-600 border-b border-purple-700">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-white">
            Tailwind CSS Tutorial
          </h1>
          <p className="text-purple-100 mt-2">
            Learn Tailwind CSS with practical examples
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'what-is-tailwind', label: 'What is Tailwind?' },
            { id: 'utility-first', label: 'Utility-First' },
            { id: 'responsive', label: 'Responsive' },
            { id: 'colors-typography', label: 'Colors & Text' },
            { id: 'layout', label: 'Layout' },
            { id: 'components', label: 'Components' },
            { id: 'demo', label: 'Portfolio Demo' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-700 border border-purple-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg border border-purple-200 p-8">
          {/* What is Tailwind CSS? */}
          {activeTab === 'what-is-tailwind' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-purple-900">What is Tailwind CSS?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Definition</h3>
                  <p className="text-purple-700">
                    Tailwind CSS is a utility-first CSS framework that provides low-level utility 
                    classes to build custom designs directly in your markup.
                  </p>
                  
                  <div className="mt-6 p-4 bg-purple-50 border border-purple-100 rounded">
                    <h4 className="font-bold text-purple-900 mb-2">Key Features:</h4>
                    <ul className="space-y-2 text-purple-800">
                      <li>• Utility-first CSS framework</li>
                      <li>• Highly customizable</li>
                      <li>• Responsive by default</li>
                      <li>• Small production bundle</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Traditional vs Tailwind</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-orange-200 bg-orange-50 rounded">
                      <h5 className="font-bold text-orange-700 mb-2">Traditional CSS</h5>
                      <code className="text-sm text-purple-700 block">
                        .button {'{'} <br />
                        &nbsp;&nbsp;padding: 12px 24px;<br />
                        &nbsp;&nbsp;background: #3b82f6;<br />
                        &nbsp;&nbsp;color: white;<br />
                        &nbsp;&nbsp;border-radius: 8px;<br />
                        {'}'}
                      </code>
                    </div>
                    
                    <div className="p-4 border border-purple-200 bg-purple-50 rounded">
                      <h5 className="font-bold text-purple-700 mb-2">Tailwind CSS</h5>
                      <code className="text-sm text-purple-700 block">
                        &lt;button className="px-6 py-3 bg-purple-500 text-white rounded-lg"&gt;<br />
                        &nbsp;&nbsp;Button<br />
                        &lt;/button&gt;
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Utility-First Approach */}
{activeTab === 'utility-first' && (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-purple-900">Utility-First Approach</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Understanding Utilities</h3>
        <p className="text-purple-700 mb-4">
          Each Tailwind class corresponds to a single CSS property.
        </p>
        
        <div className="space-y-3">
          {[
            { class: 'p-4', desc: 'padding: 1rem' },
            { class: 'bg-purple-500', desc: 'background: #8b5cf6' },
            { class: 'text-white', desc: 'color: white' },
            { class: 'rounded-lg', desc: 'border-radius: 0.5rem' },
            { class: 'font-bold', desc: 'font-weight: bold' },
          ].map((item) => (
            <div key={item.class} className="flex items-center p-3 bg-purple-50 border border-purple-100 rounded">
              <code className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
                {item.class}
              </code>
              <span className="ml-4 text-purple-600">→</span>
              <span className="ml-4 text-purple-700">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Example Card</h3>
        <div className="p-6 border border-purple-200 rounded-lg">
          <div className="p-6 bg-purple-500 text-white rounded-lg">
            <h4 className="text-xl font-bold mb-2">Card Title</h4>
            <p className="mb-4">Simple card example using Tailwind classes</p>
          </div>
          
          <div className="mt-6 p-4 bg-purple-900 text-purple-100 rounded-lg overflow-x-auto">
            <pre className="text-xs whitespace-pre-wrap break-words">
{`<div class="p-6 bg-purple-500 text-white rounded-lg">
  <h4 class="text-xl font-bold mb-2">Card Title</h4>
  <p class="mb-4">Card description</p>
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

          {/* Responsive Design */}
{activeTab === 'responsive' && (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-purple-900">Responsive Design</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Breakpoint System</h3>
        <p className="text-purple-700 mb-6">
          Mobile-first breakpoints in Tailwind:
        </p>
        
        <div className="space-y-3">
          {[
            { prefix: 'sm:', size: '≥ 640px' },
            { prefix: 'md:', size: '≥ 768px' },
            { prefix: 'lg:', size: '≥ 1024px' },
            { prefix: 'xl:', size: '≥ 1280px' },
          ].map((bp) => (
            <div key={bp.prefix} className="flex items-center p-3 bg-purple-50 border border-purple-100 rounded">
              <code className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
                {bp.prefix}
              </code>
              <span className="ml-4 text-purple-700">{bp.size}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Responsive Card</h3>
        <div className="p-6 border border-purple-200 rounded-lg">
          <div className="p-6 bg-purple-100 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/3 h-24 bg-purple-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Image</span>
              </div>
              <div className="flex-1">
                <h5 className="text-lg font-bold text-purple-900 mb-2">Responsive Card</h5>
                <p className="text-purple-700">This card changes layout on different screen sizes.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-purple-900 text-purple-100 rounded-lg overflow-x-auto">
            <pre className="text-xs whitespace-pre-wrap break-words">
{`<div class="p-6 bg-purple-100 rounded-lg">
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3 h-24 bg-purple-400 rounded-lg">
      Image
    </div>
    <div class="flex-1">
      <h5 class="text-lg font-bold">Card Title</h5>
      <p class="text-purple-700">Description</p>
    </div>
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

               {/* Colors & Typography */}
              {activeTab === 'colors-typography' && (
    <div className="space-y-6">
    <h2 className="text-2xl font-bold text-purple-900">Colors & Typography</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Color Examples</h3>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          {/* Purple */}
          <div className="text-center">
            <div className="h-16 w-full bg-purple-500 rounded mb-2"></div>
            <span className="text-sm text-purple-700">Purple</span>
          </div>
          
          {/* Orange */}
          <div className="text-center">
            <div className="h-16 w-full bg-orange-500 rounded mb-2"></div>
            <span className="text-sm text-purple-700">Orange</span>
          </div>
          
          {/* Light Purple */}
          <div className="text-center">
            <div className="h-16 w-full bg-purple-300 rounded mb-2"></div>
            <span className="text-sm text-purple-700">Light Purple</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Text Sizes</h3>
        
        <div className="space-y-3">
          {[
            { class: 'text-sm', desc: 'Small text' },
            { class: 'text-base', desc: 'Normal text' },
            { class: 'text-lg', desc: 'Large text' },
            { class: 'text-xl', desc: 'Extra large' },
          ].map((item) => (
            <div key={item.class} className="p-3 border border-purple-100 bg-purple-50 rounded">
              <p className={item.class + " font-semibold text-purple-900"}>
                {item.desc}
              </p>
              <code className="text-xs text-purple-600 mt-1">{item.class}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

          {/* Layout & Spacing */}
          {activeTab === 'layout' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-purple-900">Layout & Spacing</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Spacing Scale</h3>
                  
                  <div className="space-y-3">
                    {[
                      { class: 'p-2', value: '0.5rem (8px)' },
                      { class: 'p-4', value: '1rem (16px)' },
                      { class: 'p-6', value: '1.5rem (24px)' },
                      { class: 'p-8', value: '2rem (32px)' },
                    ].map((item) => (
                      <div key={item.class} className="flex items-center justify-between p-3 bg-purple-50 border border-purple-100 rounded">
                        <code className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
                          {item.class}
                        </code>
                        <span className="text-purple-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Grid Example</h3>
                  
                  <div className="p-6 border border-purple-200 rounded-lg">
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="h-12 bg-purple-400 rounded flex items-center justify-center">
                          <span className="text-white font-bold">{num}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 bg-purple-900 text-purple-100 rounded-lg">
                      <pre className="text-sm">
{`<div class="grid grid-cols-3 gap-3">
  <div class="h-12 bg-purple-400 rounded">1</div>
  <div class="h-12 bg-purple-400 rounded">2</div>
  <div class="h-12 bg-purple-400 rounded">3</div>
</div>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Building Components */}
          {activeTab === 'components' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-purple-900">Building Components</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Simple Card</h3>
                  
                  <div className="p-6 bg-purple-800 text-white rounded-lg">
                    <div className="h-24 bg-purple-400 rounded mb-4"></div>
                    <h4 className="text-xl font-bold mb-2">Card Title</h4>
                    <p className="text-purple-200 mb-4">Simple component example</p>
                    <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                      Learn More
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Code Structure</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 border border-purple-100 rounded">
                      <h4 className="font-bold text-purple-900 mb-2">Card Classes:</h4>
                      <ul className="space-y-1 text-sm text-purple-800">
                        <li><code>p-6</code> → Padding</li>
                        <li><code>bg-purple-800</code> → Background</li>
                        <li><code>rounded-lg</code> → Rounded corners</li>
                        <li><code>text-white</code> → Text color</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Live Art Portfolio Demo with Unsplash Images */}
{activeTab === 'demo' && (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-purple-900">Portfolio Demo</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Art Portfolio Example</h3>
        
        <div className="bg-white border border-purple-200 rounded-lg overflow-hidden">
          <div className="p-6 bg-purple-600 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-purple-600">A</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">Art Gallery</h4>
                <p className="text-purple-100">Contemporary Art Portfolio</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* 3 Unsplash Images */}
              <div className="aspect-square rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Abstract geometric art"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Colorful painting"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded overflow-hidden col-span-2">
                <Image
                  src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern art"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['Abstract', 'Modern', 'Portrait', 'Digital'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Tailwind Code</h3>
        
        <div className="p-4 bg-purple-900 text-purple-100 rounded-lg overflow-x-auto">
          <pre className="text-xs whitespace-pre-wrap break-words">
{`<div class="bg-white border border-purple-200 rounded-lg">
  <div class="p-6 bg-purple-600 text-white">
    <div class="flex items-center space-x-4">
      <div class="w-12 h-12 bg-white rounded-full">
        <span class="text-lg font-bold text-purple-600">A</span>
      </div>
      <div>
        <h4 class="text-xl font-bold">Gallery</h4>
        <p class="text-purple-100">Portfolio</p>
      </div>
    </div>
  </div>
  <div class="p-6">
    <div class="grid grid-cols-2 gap-4">
      <img src="image1.jpg" class="w-full h-full object-cover rounded" />
      <img src="image2.jpg" class="w-full h-full object-cover rounded" />
      <img src="image3.jpg" class="w-full h-full object-cover rounded col-span-2" />
    </div>
    <div class="flex flex-wrap gap-2 mt-6">
      <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
        Abstract
      </span>
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </div>
    </div>
  </div>
)}
        </div>

        {/* Quick Reference */}
        <div className="mt-8 p-6 bg-purple-600 text-white rounded-lg">
          <h3 className="text-xl font-bold mb-4">Quick Reference</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">Layout</h4>
              <ul className="space-y-1 text-sm text-purple-100">
                <li><code>flex</code> → Flexbox</li>
                <li><code>grid</code> → CSS Grid</li>
                <li><code>block</code> → Display</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Spacing</h4>
              <ul className="space-y-1 text-sm text-purple-100">
                <li><code>p-4</code> → Padding</li>
                <li><code>m-4</code> → Margin</li>
                <li><code>gap-4</code> → Gap</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Colors</h4>
              <ul className="space-y-1 text-sm text-purple-100">
                <li><code>bg-purple-500</code> → Purple</li>
                <li><code>text-white</code> → White text</li>
                <li><code>border</code> → Border</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}