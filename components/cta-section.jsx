export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-r from-[#6366f1] to-purple-600 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Engineer Intelligence</h2>
        <p className="text-xl mb-8 opacity-90">
          Join us in shaping a world where machines collaborate with humans, not replace them. Where insights are instant,
          decisions are data-backed, and experiences are deeply personal.
        </p>
        <p className="text-lg mb-10 opacity-80">
          Ready to unlock the power of AI? Let BrainHouse be your trusted partner in transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your AI Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#6366f1] transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}