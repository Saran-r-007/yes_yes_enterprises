// Yes Yes Enterprises - Configuration File
const SITE_CONFIG = {
  company: {
    name: "YES YES ENTERPRISES",
    tagline: "Precision Weighing Solutions & Industrial Scale Services",
    location: "Pudukkottai, Tamil Nadu",
    fullAddress: "No. 42, East Main Street, Near Head Post Office, Pudukkottai - 622001, Tamil Nadu, India",
    mainPhone: "+919750985756",
    mainWhatsApp: "https://wa.me/919750985756",
    mainEmail: "yesyesscales@gmail.com",
    instagramUrl: "https://www.instagram.com/yes_yes_pdkt?igsh=MTExODBpZmFyZGttbg==", // Placeholder URL
    otherPhones: ["+919750985757", "+919750985759", "+917373085758"],
    hours: "Monday - Saturday: 9:00 AM - 7:30 PM",
    mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.962295627685!2d78.81432244999999!3d10.3821703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b007908b9e623a9%3A0xc0fb1ea0e6e788e3!2sPudukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  hero: {
    title: "Heavy-Duty Reliability. Pinpoint Precision.",
    subtitle: "Authorized Sales, Certified Services & Stamping of Commercial and Industrial Weighing Systems since 2012.",
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" // Premium industrial background
  },
  about: {
    story: "YES YES ENTERPRISES is the leading name in Pudukkottai for electronic weighing scales and systems. With over a decade of dedication, we supply and maintain highly accurate scales ranging from high-precision laboratory balances to massive industrial platform scales. We are licensed government stamping and verification service providers, ensuring your business stays fully compliant and legally protected.",
    mission: "To empower local businesses, retail hubs, and heavy industries with unbeatable precision scales and unparalleled technical services, boosting trust and profits in every transaction.",
    vision: "To become Tamil Nadu's gold-standard enterprise for weighing automation, recognized for speed, reliability, and unquestionable precision."
  },
  services: [
    {
      id: "sales",
      title: "Weighing Scale Sales",
      icon: "fa-balance-scale",
      description: "Authorized dealership of premium brand electronic scales, bench scales, platform scales, and high-precision laboratory balances designed for extreme accuracy.",
      details: ["Premium Brand Partnerships", "1-Year Warranty Protection", "Full Operational Training Included"]
    },
    {
      id: "spares",
      title: "Parts & Spares Support",
      icon: "fa-cogs",
      description: "Genuine replacements for load cells, digital indicators, battery backups, thermal printers, motherboard circuits, and power adapters.",
      details: ["100% Original OEM Spares", "Immediate Stock Availability", "Tested Compatibility Certifications"]
    },
    {
      id: "repair",
      title: "Repair & Calibrations",
      icon: "fa-tools",
      description: "Fast on-site and in-shop repair by certified engineers. We solve display errors, weight variations, battery failures, and sensor drift.",
      details: ["Emergency Breakdown Response", "NABL Traceable Calibration", "Monthly Maintenance Contracts"]
    },
    {
      id: "stamping",
      title: "Stamping & Verification",
      icon: "fa-stamp",
      description: "Annual re-verification, calibration, and legal stamping services in compliance with the Legal Metrology Department of Tamil Nadu.",
      details: ["Government Approved Seals", "Full Documentation Handling", "Compliance & Audit Protection"]
    },
    {
      id: "docs",
      title: "Govt. Documents & Certificates",
      icon: "fa-file-signature",
      description: "Complete guidance, documentation preparation, and license procurement assistance for Legal Metrology licenses and verification certificates.",
      details: ["Hassle-Free Process Handling", "Liaison with Legal Authorities", "Timely Expiry Renewal Alerts"]
    }
  ],
  products: [
    {
      id: "prod-1",
      name: "Industrial Heavy Platform Scale",
      price: "₹12,499",
      description: "Heavy-duty carbon steel structure with carbon/alloy load cells. Ideal for warehouses, metal hubs, and agro-industries. Weighing capacity up to 500kg.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400",
      category: "Industrial"
    },
    {
      id: "prod-2",
      name: "Digital Commercial Tabletop Scale",
      price: "₹3,850",
      description: "Double-sided bright LED displays (front & rear) for retail billing. Comes with battery backup and solid stainless steel platter.",
      image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&q=80&w=400",
      category: "Commercial"
    },
    {
      id: "prod-3",
      name: "High-Precision Jewelry Balance",
      price: "₹18,200",
      description: "Ultra-sensitive laboratory and gold testing scale. Reads up to 0.001g. Protective windshield cabinet included for wind error cancellation.",
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400",
      category: "Precision"
    },
    {
      id: "prod-4",
      name: "Electronic Hanging Crane Scale",
      price: "₹8,900",
      description: "Robust cast aluminum alloy shell, high strength industrial hooks, and wireless remote control. Fits scrap yards, steel plants, and heavy lifting.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400",
      category: "Industrial"
    },
    {
      id: "prod-5",
      name: "Premium Load Cell Sensor (300kg)",
      price: "₹2,100",
      description: "Waterproof IP67 alloy steel single-point load cell. Highly accurate, temperature-compensated, and perfect for replacement spares.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      category: "Spares"
    },
    {
      id: "prod-6",
      name: "Digital Weight Indicator LED Box",
      price: "₹3,400",
      description: "Configurable weighing indicator with high-speed ADC. RS-232 interface, peak hold function, and rugged plastic/SS housing.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400",
      category: "Spares"
    }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Venkatesh Raman",
      rating: 5,
      comment: "Absolutely top-class service! We needed our heavy 500kg warehouse platform scales repaired and stamped. Yes Yes Enterprises completed the work within 24 hours. Very professional staff and transparent pricing.",
      designation: "Manager, Pudukkottai Rice Mill",
      date: "August 10, 2026"
    },
    {
      id: "rev-2",
      author: "Anitha Selvaraj",
      rating: 5,
      comment: "Bought 3 tabletop scales for our grocery supermarket chain in Pudukkottai. The price is highly competitive and the battery backup is amazing. Excellent guidance on government stamping registration too!",
      designation: "Owner, Selvi Supermarkets",
      date: "July 28, 2026"
    },
    {
      id: "rev-3",
      author: "Mohammed Asif",
      rating: 5,
      comment: "Best store for digital weighing scale spares. Got genuine load cells and indicators for our fish weighing stations. Excellent support and reliable customer service. Strongly recommend them!",
      designation: "Logistics Head, Aqua Foods",
      date: "June 15, 2026"
    },
    {
      id: "rev-4",
      author: "Suresh Kumar G.",
      rating: 5,
      comment: "We take our jewelry balances here for stamping/legal metrology certificates every year. It is totally hassle-free. They prepare all the documentation and complete the verification very quickly. Outstanding work!",
      designation: "Proprietor, G.S. Jewellers",
      date: "May 22, 2026"
    }
  ]
};

// Make configuration available globally
window.SITE_CONFIG = SITE_CONFIG;
