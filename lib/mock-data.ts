export interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  features: string[]
  duration: string
  category: "exterior" | "interior" | "protection" | "premium"
}

export const services: Service[] = [
  {
    id: "premium-wash",
    title: "Premium Hand Wash",
    description:
      "Meticulous hand washing service using premium products and techniques for a spotless, scratch-free finish.",
    longDescription:
      "Experience the ultimate in car washing with our premium hand wash service. Our skilled technicians use the two-bucket method with high-quality microfiber mitts and pH-balanced shampoos to safely remove dirt and grime without scratching your paint. The process includes pre-rinse, foam application, careful hand washing, thorough rinsing, and spot-free drying. We pay special attention to wheels, tires, and all exterior trim for a complete transformation.",
    image: "/bbe4d7428920e26e578dec869d49a9b8.jpg",
    features: [
      "Two-bucket wash method",
      "Premium pH-balanced shampoos",
      "Microfiber mitt washing",
      "Wheel and tire cleaning",
      "Spot-free rinse and dry",
      "Exterior trim detailing",
    ],
    duration: "1-2 hours",
    category: "exterior",
  },
  {
    id: "express-wash",
    title: "Express Wash & Dry",
    description: "Quick and efficient washing service perfect for regular maintenance and busy schedules.",
    longDescription:
      "Our express wash service is designed for customers who need quality results in minimal time. This streamlined service includes thorough exterior washing, wheel cleaning, and professional drying techniques. While faster than our premium service, we never compromise on quality - using safe washing methods and premium products to ensure your vehicle looks great without any risk of damage.",
    image: "/d0a7c0112e17d46230aeab2b417b464d.jpg",
    features: [
      "Quick exterior wash",
      "Basic wheel cleaning",
      "Professional drying",
      "Time-efficient process",
      "Safe washing techniques",
      "Quality guaranteed",
    ],
    duration: "30-45 minutes",
    category: "exterior",
  },
  {
    id: "deep-clean-wash",
    title: "Deep Clean Wash",
    description: "Intensive washing service that includes decontamination and preparation for protective treatments.",
    longDescription:
      "Our deep clean wash goes beyond regular washing to remove embedded contaminants and prepare your vehicle's surface. This comprehensive service includes clay bar treatment to remove bonded contaminants, iron fallout removal, tar and adhesive removal, and thorough decontamination. Perfect as a standalone service or as preparation for ceramic coating, wax, or other protective treatments.",
    image: "/2fd833c3bf63f312604ec3fa5e81f388.jpg",
    features: [
      "Clay bar decontamination",
      "Iron fallout removal",
      "Tar and adhesive removal",
      "Complete surface preparation",
      "Contaminant extraction",
      "Pre-treatment preparation",
    ],
    duration: "2-3 hours",
    category: "exterior",
  },
  {
    id: "maintenance-wash",
    title: "Maintenance Wash Package",
    description:
      "Regular maintenance washing service designed to keep your vehicle in pristine condition between major details.",
    longDescription:
      "Maintain your vehicle's appearance with our specialized maintenance wash package. Designed for customers with ceramic coatings, wax protection, or those who want to keep their car in showroom condition, this service uses coating-safe products and techniques. The gentle yet effective process preserves existing protection while removing dirt, dust, and light contamination.",
    image: "/9f6a34e684c27009fe1ebd7f6e99c66f.jpg",
    features: [
      "Coating-safe products",
      "Gentle washing techniques",
      "Protection preservation",
      "Regular maintenance schedule",
      "Quality consistency",
      "Professional results",
    ],
    duration: "1 hour",
    category: "exterior",
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating Protection",
    description:
      "Advanced nano-ceramic coating that provides long-lasting protection and incredible shine for your vehicle.",
    longDescription:
      "Our premium ceramic coating service uses cutting-edge nanotechnology to create an invisible protective layer on your vehicle's paint. This revolutionary treatment bonds molecularly with your car's clear coat, providing unmatched protection against UV rays, chemical stains, bird droppings, and environmental contaminants. The hydrophobic properties ensure water beads off effortlessly, making maintenance easier while maintaining that showroom shine for years.",
    image: "/8014d78fe67ee8152b8218dd8c9459c7.jpg",
    features: [
      "UV protection and fade resistance",
      "Hydrophobic water-repelling surface",
      "Chemical and stain resistance",
      "Enhanced gloss and depth",
      "Long-lasting protection up to 5 years",
      "Easier maintenance and cleaning",
    ],
    duration: "6-8 hours",
    category: "protection",
  },
  {
    id: "paint-correction",
    title: "Paint Correction & Polishing",
    description:
      "Professional paint correction to remove swirl marks, scratches, and imperfections for a flawless finish.",
    longDescription:
      "Transform your vehicle's appearance with our meticulous paint correction process. Using advanced polishing techniques and professional-grade compounds, we eliminate swirl marks, light scratches, oxidation, and other paint imperfections. Our skilled technicians assess each panel individually, selecting the appropriate correction method to restore your paint to its original luster. The multi-stage process ensures maximum gloss and clarity while preserving the integrity of your vehicle's clear coat.",
    image: "/a062636326a69e9c7ebf40e47e1a5f86.jpg",
    features: [
      "Swirl mark and scratch removal",
      "Multi-stage polishing process",
      "Paint depth measurement",
      "Professional grade compounds",
      "Clear coat preservation",
      "Mirror-like finish restoration",
    ],
    duration: "4-6 hours",
    category: "exterior",
  },
  {
    id: "interior-detailing",
    title: "Complete Interior Detailing",
    description: "Comprehensive interior cleaning and protection for leather, fabric, and all interior surfaces.",
    longDescription:
      "Experience the ultimate interior transformation with our comprehensive detailing service. We meticulously clean and protect every interior surface, from premium leather seats to delicate dashboard materials. Our process includes deep cleaning of carpets and upholstery, leather conditioning and protection, dashboard and trim restoration, and thorough sanitization. Special attention is given to high-touch areas, ensuring your interior not only looks pristine but also maintains that new car smell and feel.",
    image: "/cccfe2583c0761ec0f4dafe2cf081f79.jpg",
    features: [
      "Deep carpet and upholstery cleaning",
      "Leather conditioning and protection",
      "Dashboard and trim restoration",
      "Complete sanitization",
      "Odor elimination treatment",
      "UV protection for interior surfaces",
    ],
    duration: "3-4 hours",
    category: "interior",
  },
  {
    id: "full-detail",
    title: "Premium Full Detail",
    description:
      "The ultimate detailing experience combining exterior and interior services for complete vehicle transformation.",
    longDescription:
      "Our flagship service that combines the best of both worlds - comprehensive exterior and interior detailing in one premium package. This extensive service includes thorough paint decontamination, multi-stage wash process, paint correction, protective wax application, complete interior deep cleaning, leather treatment, and finishing touches that make your vehicle look better than new. Perfect for special occasions, vehicle preparation for sale, or when you want to give your car the ultimate care it deserves.",
    image: "/f691f7556d92907fbbd93dfe6a335323.jpg",
    features: [
      "Complete exterior wash and decontamination",
      "Paint correction and protection",
      "Full interior deep cleaning",
      "Leather conditioning and protection",
      "Engine bay cleaning",
      "Tire and wheel detailing",
      "Glass cleaning and treatment",
      "Final inspection and quality check",
    ],
    duration: "8-10 hours",
    category: "premium",
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    description:
      "Restore clarity and brightness to oxidized and yellowed headlights for improved visibility and appearance.",
    longDescription:
      "Bring back the crystal-clear appearance of your headlights with our professional restoration service. Over time, headlights become cloudy, yellowed, and oxidized due to UV exposure and environmental factors, reducing both visibility and your vehicle's aesthetic appeal. Our multi-step restoration process removes oxidation, polishes the lens surface, and applies a protective coating to prevent future degradation. The result is dramatically improved light output and a refreshed appearance that can make your vehicle look years younger.",
    image: "/d10c450dbbba0807df4aed390744a3eb.jpg",
    features: [
      "Complete oxidation removal",
      "Multi-stage polishing process",
      "UV protective coating application",
      "Improved light output and visibility",
      "Enhanced vehicle appearance",
      "Long-lasting results",
    ],
    duration: "1-2 hours",
    category: "exterior",
  },
  {
    id: "engine-detailing",
    title: "Engine Bay Detailing",
    description: "Professional engine bay cleaning and detailing to keep your engine compartment looking pristine.",
    longDescription:
      "Give your engine bay the attention it deserves with our comprehensive engine detailing service. We carefully clean and protect all engine components, removing built-up grease, dirt, and grime while preserving sensitive electrical components. Our process includes degreasing, pressure washing with appropriate techniques, drying, and application of protective dressings to rubber and plastic components. A clean engine bay not only looks impressive but also makes it easier to spot potential issues and can help maintain resale value.",
    image: "/28f93868265346f0462b47db39d11258.jpg",
    features: [
      "Safe degreasing of all components",
      "Pressure washing with protection",
      "Rubber and plastic conditioning",
      "Metal component polishing",
      "Electrical component protection",
      "Final detailing and inspection",
    ],
    duration: "2-3 hours",
    category: "exterior",
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    location: "Madrid",
    rating: 5,
    text: "Absolutely incredible service! My BMW looks better than the day I bought it. The ceramic coating has been amazing - water just rolls right off.",
    service: "Ceramic Coating Protection",
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    location: "Barcelona",
    rating: 5,
    text: "The attention to detail is unmatched. They transformed my car inside and out. Professional, reliable, and the results speak for themselves.",
    service: "Premium Full Detail",
  },
  {
    id: 3,
    name: "James Mitchell",
    location: "Valencia",
    rating: 5,
    text: "Best detailing service in Spain! The paint correction removed years of swirl marks. My Porsche has never looked this good.",
    service: "Paint Correction & Polishing",
  },
  {
    id: 4,
    name: "Ana Fernandez",
    location: "Seville",
    rating: 5,
    text: "Outstanding interior detailing. They made my leather seats look brand new and eliminated all odors. Highly recommend!",
    service: "Complete Interior Detailing",
  },
]

export const tips = [
  {
    id: 1,
    title: "How to Maintain Your Ceramic Coating",
    excerpt: "Learn the best practices to extend the life of your ceramic coating and keep your car looking pristine.",
    content: `Ceramic coating is an investment in your vehicle's appearance and protection. To maximize its lifespan and effectiveness, follow these essential maintenance tips:

**Regular Washing is Key**
Wash your vehicle every 2-3 weeks using the two-bucket method. Use a pH-neutral car shampoo and microfiber wash mitts to avoid scratching the coating. Never use automatic car washes with brushes, as they can damage the coating over time.

**Proper Drying Technique**
After washing, dry your vehicle using clean, plush microfiber towels or a filtered forced-air system. Avoid letting water spots form by drying in shade and working quickly.

**Avoid Harsh Chemicals**
Stay away from acidic or alkaline cleaners, as they can degrade the coating. Stick to products specifically designed for ceramic-coated vehicles.

**Regular Maintenance Washes**
Consider professional maintenance washes every 3-4 months to ensure optimal performance and appearance of your ceramic coating.`,
    image: "/39a057b6589f55af52ae54091f9dd01a.jpg",
    category: "maintenance",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Protecting Your Car's Interior from Sun Damage",
    excerpt: "Essential tips to prevent fading, cracking, and deterioration of your vehicle's interior surfaces.",
    content: `Spain's intense sun can wreak havoc on your car's interior. Here's how to protect your investment:

**Use Window Tinting**
Quality window tint blocks up to 99% of harmful UV rays while reducing heat buildup. This protects your dashboard, seats, and other interior surfaces from fading and cracking.

**Dashboard Covers and Sunshades**
Use reflective sunshades when parked to reduce interior temperature and UV exposure. Dashboard covers provide additional protection for this vulnerable area.

**Regular Conditioning**
Leather and vinyl surfaces need regular conditioning to prevent cracking and fading. Use UV-protective products designed for automotive interiors.

**Park Smart**
Whenever possible, park in shaded areas or garages. If you must park in direct sunlight, try to rotate your parking position to distribute sun exposure evenly.

**Professional Interior Protection**
Consider professional interior protection treatments that provide long-lasting UV resistance and make cleaning easier.`,
    image: "/86c1e7fc89f36917d0dc46c89c8fd484.jpg",
    category: "protection",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "When to Schedule Paint Correction",
    excerpt: "Identify the signs that your vehicle needs professional paint correction and restoration.",
    content: `Paint correction can dramatically improve your vehicle's appearance, but knowing when it's needed is crucial:

**Visible Swirl Marks**
If you notice circular scratches or swirl marks, especially in direct sunlight, it's time for paint correction. These are typically caused by improper washing techniques or automatic car washes.

**Loss of Gloss**
When your paint looks dull or lacks the deep, mirror-like reflection it once had, paint correction can restore that showroom shine.

**Water Spots and Etching**
Hard water spots, bird droppings, or tree sap that have etched into the clear coat require professional correction to remove safely.

**Before Protective Coatings**
Always perform paint correction before applying ceramic coatings or paint protection films. This ensures the best possible results and longevity.

**Seasonal Considerations**
Spring is ideal for paint correction in Spain, as it prepares your vehicle for the harsh summer sun and provides maximum protection during peak UV months.`,
    image: "/e7d16b57034a240b233d58f0f7160e2a.jpg",
    category: "restoration",
    readTime: "6 min read",
  },
]

export const companyInfo = {
  name: "Elite Auto Detailing Spain",
  address: "Calle de Alcalá 123, 28009 Madrid, Spain",
  phone: "+34915486952",
  email: "info@eliteautodetailingspain.com",
  hours: {
    weekdays: "9:00 AM - 7:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "Closed",
  },
  social: {
    instagram: "@eliteautodetailing_es",
    facebook: "Elite Auto Detailing Spain",
  },
}
