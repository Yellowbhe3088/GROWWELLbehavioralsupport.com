import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }, { from: "ai", text: "Thanks for reaching out! Our team will respond to your request soon. If you’d like to schedule an appointment, please leave your contact info." }]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-700">Adaptive Behavioral Solution</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Empowering Growth Through ABA Therapy</h2>
        <p className="max-w-2xl text-lg mb-8">
          Providing compassionate, evidence-based ABA services for children and adults with Autism Spectrum Disorder (ASD) in-home or in-clinic.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-2xl shadow hover:bg-gray-100"
        >
          Get Started
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Early Intervention</h4>
            <p>Personalized ABA therapy for children ages 2–9 to support communication, learning, and social skills.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Adolescents & Adults</h4>
            <p>Skill-building and behavioral support for individuals with developmental disabilities and mental health needs.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Family Support</h4>
            <p>Guidance and training for families to create supportive environments and encourage growth at home.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p>
            At Adaptive Behavioral Solution, we believe in individualized care that respects every client’s unique strengths and challenges. Our mission is to deliver high-quality ABA services that foster independence, growth, and well-being for children and adults with ASD.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <form className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow space-y-6">
          <input type="text" placeholder="Your Name" className="w-full border rounded-xl px-4 py-3" />
          <input type="email" placeholder="Your Email" className="w-full border rounded-xl px-4 py-3" />
          <textarea placeholder="Your Message" className="w-full border rounded-xl px-4 py-3" rows="5"></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">Send Message</button>
        </form>
      </section>

      {/* AI Chatbot */}
      <div className="fixed bottom-6 right-6 w-80 bg-white rounded-2xl shadow-xl border">
        <div className="p-4 border-b bg-blue-600 text-white rounded-t-2xl font-semibold">Virtual Assistant</div>
        <div className="p-4 h-64 overflow-y-auto space-y-2">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.from === "ai" ? "text-left" : "text-right"}>
              <span className={`inline-block px-3 py-2 rounded-xl ${msg.from === "ai" ? "bg-gray-200" : "bg-blue-600 text-white"}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex p-3 border-t">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-xl px-3 py-2"
          />
          <button onClick={sendMessage} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-xl">Send</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800 text-white">
        <p>© {new Date().getFullYear()} Adaptive Behavioral Solution. All rights reserved.</p>
      </footer>
    </div>
  );
}
