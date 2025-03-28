import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-[#fdf6ec] text-[#1c2b3a] font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          SN<span className="text-[#f26c3d]">AI</span>L<span className="text-[#1c2b3a]">FLOW</span>
        </h1>
        <p className="text-xl mb-10">
          We automate your boring tasks with smart AI assistants and customizable workflows—so you can focus on what really matters.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#1c2b3a] text-white py-3 px-6 rounded-md">Get Started Free</button>
          <button className="bg-[#f26c3d] text-white py-3 px-6 rounded-md">See How It Works</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12">Everything You Hate Doing, Handled.</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-bold mb-2">🧠 AI Assistants</h3>
            <p>Handle admin, reminders, messages like a pro.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-bold mb-2">🔄 Workflow Automation</h3>
            <p>Visual, no-code builder to automate your ops.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-bold mb-2">📊 SnailSense Dashboard</h3>
            <p>Track efficiency, savings, and performance.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12">Set It. Snail It. Done.</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-bold mb-2">1️⃣ Choose a Workflow</h3>
            <p>Start with a template or from scratch.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-bold mb-2">2️⃣ Customize & Connect</h3>
            <p>Link your tools and tailor the logic.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-bold mb-2">3️⃣ Launch & Relax</h3>
            <p>Your AI assistant handles it for you.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12">Start Slow. Scale Fast.</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p>1 workflow, 100 tasks/mo, 1 assistant</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-bold mb-2">Growth – $29/mo</h3>
            <p>5 workflows, 3 assistants, integrations</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-bold mb-2">Pro – $79/mo</h3>
            <p>Unlimited everything + priority support</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-12">
        🐌 SnailFlow Inc. © 2025 — The fastest snail in business automation
      </footer>
    </div>
  );
}
