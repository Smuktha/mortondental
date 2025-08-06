'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogFour() {
  return (
    <section className="bg-white text-gray-800 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-10">

        {/* 🔷 Hero Image */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/lemon.png"
            alt="Lemon & Herb Grilled Chicken"
            width={1200}
            height={500}
            className="w-full h-[280px] md:h-[420px] object-cover"
            priority
          />
        </div>

        {/* 🔷 Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#00B2A9] leading-tight">
          Lemon & Herb Grilled Chicken
        </h1>

        {/* 🔷 Intro */}
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            Nothing says fresh, easy and delicious like a simple grilled chicken dish. This lemon and herb marinade keeps the chicken juicy and full of zesty flavour — perfect for a weeknight dinner or weekend barbecue.
            Serve it with a crisp green salad or some roasted veggies for a wholesome Aussie meal.
          </p>
        </div>

        {/* 🔷 Ingredients */}
        <div className="bg-[#F8F9FA] p-6 rounded-md border-l-4 border-[#00B2A9] shadow-sm">
          <h2 className="text-xl font-bold text-[#00B2A9] mb-3">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>4 chicken thigh fillets, skinless</li>
            <li>2 tablespoons extra virgin olive oil</li>
            <li>Juice and zest of 1 large lemon</li>
            <li>2 garlic cloves, finely chopped</li>
            <li>1 tablespoon fresh parsley, chopped</li>
            <li>1 tablespoon fresh rosemary, chopped</li>
            <li>½ teaspoon sea salt</li>
            <li>¼ teaspoon cracked black pepper</li>
            <li>Lemon wedges, to serve</li>
          </ul>
        </div>

        {/* 🔷 Method */}
        <div className="bg-[#FFF5E5] p-6 rounded-md border-l-4 border-[#FD7E14] shadow-sm">
          <h2 className="text-xl font-bold text-[#FD7E14] mb-3">Method</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Place the chicken thighs in a shallow glass or ceramic dish.</li>
            <li>In a small bowl, whisk together the olive oil, lemon juice and zest, garlic, parsley, rosemary, salt and pepper.</li>
            <li>Pour the marinade over the chicken, turning to coat well. Cover and refrigerate for at least 30 minutes (or up to 4 hours for extra flavour).</li>
            <li>Preheat a barbecue grill or chargrill pan over medium-high heat.</li>
            <li>Remove the chicken from the marinade and cook for 5–6 minutes on each side, or until cooked through and nicely charred.</li>
            <li>Rest the chicken for a few minutes, then slice if desired.</li>
            <li>Serve with lemon wedges and your favourite sides.</li>
          </ol>
        </div>

        {/* 🔷 Tip Box */}
        <div className="bg-[#E3F7F6] border-l-4 border-[#00B2A9] p-5 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-[#00B2A9] mb-1">Tip:</h3>
          <p>This marinade also works beautifully with chicken breast or even fish fillets. Keep it in your back pocket for a quick, versatile go-to meal.</p>
        </div>

        {/* 🔷 Ending Note */}
        <div className="text-center pt-6">
          <p className="text-[#FD7E14] font-medium italic">
            Enjoy a tasty, fuss-free meal everyone will love!
          </p>
        </div>

        {/* 🔷 Back to Blog */}
        <div className="text-center pt-10">
          <Link href="/blog">
            <button className="bg-[#FD7E14] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition">
              ← Back to Blog
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
