'use client';

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">The Future is Now</h2>
        <p className="text-xl text-gray-300 text-center mb-16">
          Industry-leading statistics that prove AI's transformative power
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 border border-primary/30">
            <div className="text-4xl font-bold text-primary mb-2">80%</div>
            <p className="text-gray-300">Enterprise workloads will be AI-powered by 2026</p>
            <p className="text-sm text-gray-400 mt-2">— Gartner</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-600/30">
            <div className="text-4xl font-bold text-green-400 mb-2">$15.7T</div>
            <p className="text-gray-300">AI contribution to global economy by 2030</p>
            <p className="text-sm text-gray-400 mt-2">— PwC</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-600/30">
            <div className="text-4xl font-bold text-orange-400 mb-2">1 in 4</div>
            <p className="text-gray-300">Companies have implemented AI agents in core operations</p>
            <p className="text-sm text-gray-400 mt-2">— McKinsey</p>
          </div>

          {/* Stat 4 */}
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-600/30">
            <div className="text-4xl font-bold text-pink-400 mb-2">90%</div>
            <p className="text-gray-300">Of unstructured data is yet to be mined</p>
            <p className="text-sm text-gray-400 mt-2">— We help you harness it</p>
          </div>
        </div>
      </div>
    </section>
  );
}
