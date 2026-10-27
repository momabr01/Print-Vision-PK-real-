import bigbirdLogo from '../assets/clients/bigbird.png';
import cevaLogo from '../assets/clients/ceva_official.png';
import bunnysLogo from '../assets/clients/bunnys.svg';
import sabrosoLogo from '../assets/clients/sabroso_exact.png';
import marushLogo from '../assets/clients/marush.svg';
import masterLogo from '../assets/clients/master_official.svg';
import parwazLogo from '../assets/clients/parwaz_exact.png';

export interface SiteConfig {
  companyName: string;
  establishedYear: number;
  location: string;
  tagline: string;
  subheadline: string;
  tone: string;
  colours: {
    charcoalBlack: string;
    orange: string;
    warmCream: string;
  };
  contact: {
    phoneDisplay: string;
    phoneCallable: string;
    whatsappDisplay: string;
    whatsappNumber: string;
    faxDisplay?: string;
    email: string;
    headOffice: {
      title: string;
      address: string;
      city: string;
      country: string;
    };
    coordinationHub?: {
      title: string;
      address: string;
      city: string;
      country: string;
    };
    workingHours: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

export const SITE_CONFIG: SiteConfig = {
  companyName: 'PrintVision',
  establishedYear: 1997,
  location: 'Lahore, Pakistan',
  tagline: 'From Vision to Visibility',
  subheadline:
    'An advertising agency and print house based in Lahore, Pakistan, delivering corporate printing, brand design, exhibitions, retail marketing, and experiential brand launches since 1997.',
  tone: 'Confident, warm, professional and plain-spoken',
  colours: {
    charcoalBlack: '#16130F',
    orange: '#E8791F',
    warmCream: '#F3EFE7',
  },
  contact: {
    phoneDisplay: '+92 323 4219611',
    phoneCallable: '+923234219611',
    whatsappDisplay: '+92 323 4219611',
    whatsappNumber: '923234219611',
    faxDisplay: '+92 423 5786277',
    email: 'printvision99@gmail.com',
    headOffice: {
      title: 'PrintVision Office',
      address: 'Suite# 75, 76 F Auto Center',
      city: 'Qartaba Chowk, Lahore',
      country: 'Pakistan',
    },
    coordinationHub: {
      title: 'Sindh Coordination Desk',
      address: 'Karachi Trade Coordination Desk',
      city: 'Karachi',
      country: 'Pakistan',
    },
    workingHours: 'Monday to Saturday: 9:00 AM – 7:00 PM (PKT)',
  },
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com' },
    { platform: 'Instagram', url: 'https://instagram.com' },
    { platform: 'Facebook', url: 'https://facebook.com' },
  ],
};

export interface ServiceItem {
  id: string;
  orderNumber: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  deliverables: string[];
  capabilities: {
    name: string;
    detail: string;
  }[];
  typicalApplications: string[];
}

// Exactly 9 Core Services (Service 10 removed per direct brief)
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'corporate-printing',
    orderNumber: '01',
    title: 'Corporate Printing',
    shortDescription:
      'High-precision commercial and industrial print production, from annual reports and luxury stationery to heavy-duty large-format graphics.',
    fullDescription:
      'As an established print house since 1997, we understand that physical print is the touchpoint by which corporate reputations are weighed. We produce immaculate corporate literature, annual accounts, premium bespoke stationery, and large-format graphics using calibrated Pantone reproduction, specialised finishes, and strict quality control on every press run.',
    image: '/assets/images/service_printing_solutions_1792411449423.jpg',
    deliverables: [
      'Corporate annual reports, profile brochures & executive slipcases',
      'High-resolution UV flatbed printing on rigid sheets & acrylic',
      'Roll-to-roll solvent & eco-solvent wide-format banners',
      'Specialist embossing, foil stamping, spot UV & textured varnishes',
    ],
    capabilities: [
      {
        name: 'Direct Substrate UV Printing',
        detail: 'Crisp, weather-resistant printing directly on acrylic, wood, aluminium composite, and foam boards.',
      },
      {
        name: 'Corporate Literature & Reports',
        detail: 'Precision section-sewn and case-bound annual reviews for listed organisations and financial institutions.',
      },
      {
        name: 'Large-Format Production',
        detail: 'High-speed output for hoarding skins, building wraps, tensioned backdrops, and event branding.',
      },
      {
        name: 'Custom Packaging & Binders',
        detail: 'Handcrafted executive presentation boxes, proposal folders, and bespoke corporate ring binders.',
      },
    ],
    typicalApplications: [
      'Corporate Annual General Meetings (AGMs)',
      'Bank & Financial Institution Collateral',
      'Industrial Plant & Construction Site Signage',
      'Nationwide Corporate Literature Distribution',
    ],
  },
  {
    id: 'brand-designing',
    orderNumber: '02',
    title: 'Brand Designing',
    shortDescription:
      'Strategic visual identities, logo architecture, and unified design systems engineered for tangible real-world application.',
    fullDescription:
      'We design brand identities with production reality in mind. Unlike digital-only agencies whose concepts unravel when translated to metal, fabric, or ink, our designers work alongside our print press operators and fabricators to ensure your identity performs flawlessly across every physical and digital touchpoint.',
    image: '/assets/images/service_brand_designing_1792414322126.jpg',
    deliverables: [
      'Core corporate logo mark, vector assets & typography hierarchy',
      'Comprehensive brand identity manual & production guidelines',
      'Corporate stationery suites (business cards, letterheads, envelopes)',
      'Fleet branding schematics & commercial vehicle livery design',
    ],
    capabilities: [
      {
        name: 'Production-Grounded Identity',
        detail: 'Logos engineered to hold fidelity whether laser-cut into stainless steel or silkscreened on cotton.',
      },
      {
        name: 'Brand Guidelines Manuals',
        detail: 'Clear, plain-spoken standards specifying exact Pantone, CMYK, and RAL paint references.',
      },
      {
        name: 'Packaging & Box Architecture',
        detail: 'Structural die-line drafting and carton design ensuring both shelf appeal and transport durability.',
      },
      {
        name: 'Architectural Wayfinding Systems',
        detail: 'Signage standards for corporate headquarters, industrial campuses, and commercial complexes.',
      },
    ],
    typicalApplications: [
      'Corporate Rebranding & Visual Modernisation',
      'New Enterprise & Holding Group Brand Foundations',
      'Pharmaceutical & Veterinary Product Packaging (e.g. Marush)',
      'Commercial Delivery Fleet Livery Standards',
    ],
  },
  {
    id: 'brand-product-launches',
    orderNumber: '03',
    title: 'Brand & Product Launches',
    shortDescription:
      'Turnkey physical staging, reveal architecture, and event production for high-stakes corporate unveilings.',
    fullDescription:
      'A product launch happens once; there is no second take. PrintVision handles the complete physical staging, synchronized reveal structures, press step-and-repeat backdrops, and bespoke stage fabrication so your product announcement commands authority.',
    image: '/assets/images/service_product_launches_1792414339455.jpg',
    deliverables: [
      'Custom keynote stage fabrication & backdrop architecture',
      'Hydraulic, curtain or LED reveal mechanisms for products',
      'Press conference media zones, step-and-repeats & lecterns',
      'Exclusive VIP attendee gift sets & embossed media packs',
    ],
    capabilities: [
      {
        name: 'Turnkey Stage Engineering',
        detail: 'Certified load-bearing stage decks, truss rigging, and matte non-reflective event surfaces.',
      },
      {
        name: 'Synchronized Reveal Setups',
        detail: 'Flawless reveal choreography tested repeatedly prior to executive walkthroughs.',
      },
      {
        name: 'Media & Photo Call Architecture',
        detail: 'Tension-stretched backdrops lit specifically to eliminate camera glare and hot-spots.',
      },
      {
        name: 'On-Site Technical Supervision',
        detail: 'Our senior project directors remain on site throughout rehearsal, live show, and de-rig.',
      },
    ],
    typicalApplications: [
      'Housing Scheme & Real Estate Groundbreakings (e.g. Divine Gardens)',
      'Automotive & Commercial Vehicle Unveilings',
      'FMCG Beverage & Food Brand Introductions (e.g. Boomer Cola)',
      'Industrial Machinery & Consumer Tech Reveals',
    ],
  },
  {
    id: 'exhibitions',
    orderNumber: '04',
    title: 'Exhibitions',
    shortDescription:
      'Custom exhibition stand design, structural fabrication, and turnkey handover at Expo Centre Lahore, Karachi, and nationwide.',
    fullDescription:
      'We transform vacant expo floor plots into high-traffic corporate pavilions. With extensive build history at Expo Centre Lahore and Expo Centre Karachi, our team designs, fabricates in our dedicated joinery bay, installs overnight, and hands over polished stands on time.',
    image: '/assets/images/service_exhibition_stall_1792411446415.jpg',
    deliverables: [
      '3D photorealistic architectural stall renderings & floor plans',
      'Joinery, fire-rated partitions, raised floors & LED lighting',
      'Private VIP consultation rooms & sound-dampened lounges',
      'Overhead rigging, circular halo signage & 3D illuminated logos',
    ],
    capabilities: [
      {
        name: 'In-House Joinery & Paint Bay',
        detail: 'Custom woodwork, spray-painted high-gloss finishes, and metal framework assembled under one roof.',
      },
      {
        name: 'Venue Clearance Coordination',
        detail: 'Strict compliance with expo centre height restrictions, electrical loads, and safety clearances.',
      },
      {
        name: 'Turnkey Handover Standard',
        detail: 'Stands delivered cleaned, illuminated, and ready for your sales executives 12 hours before doors open.',
      },
      {
        name: 'Post-Show Dismantling & Logistics',
        detail: 'Orderly tear-down and secure transport of reusable branding assets back to your warehouse.',
      },
    ],
    typicalApplications: [
      'International Industrial & Engineering Expos',
      'Veterinary & Pharmaceutical Congresses (e.g. CEVA Pharma, Marush)',
      'Tourism & Trade Conventions (e.g. PTDC 2013 Pavilion)',
      'Textile, Garment & Agriculture Machinery Expos',
    ],
  },
  {
    id: 'promotional-concepts-design',
    orderNumber: '05',
    title: 'Promotional Concepts & Design',
    shortDescription:
      'Distinctive corporate gifting, bespoke promotional merchandise, and tactile campaign collateral that recipients keep.',
    fullDescription:
      'We reject generic throwaway trinkets. PrintVision conceptualises and crafts high-utility executive gifts, custom debossed leather journals, precision-machined metal items, and bespoke presentation packaging that reinforce premium brand positioning on executive desks.',
    image: '/assets/images/service_promotional_concepts_1792414339041.jpg',
    deliverables: [
      'Custom-engineered executive gift boxes with magnetic closures',
      'Debossed leather folders, organizers & laser-engraved pens',
      'Branded tech accessories & thermal insulated drinkware',
      'Creative promotional novelty concepts tied to campaign themes',
    ],
    capabilities: [
      {
        name: 'Bespoke Packaging Engineering',
        detail: 'Rigid board boxes with custom high-density EVA foam inserts cut precisely to product contours.',
      },
      {
        name: 'High-Precision Branding Finishes',
        detail: 'Laser etching, blind debossing, metallic foil blocking, and direct rotary UV printing.',
      },
      {
        name: 'Material Sourcing Rigour',
        detail: 'Vetted raw material suppliers ensuring uniform quality across 500 or 50,000 units.',
      },
      {
        name: 'Kitting & Nationwide Dispatch',
        detail: 'Individually packed, gift-wrapped, and dispatched directly to client regional branches.',
      },
    ],
    typicalApplications: [
      'Executive New Year Corporate Gift Hampers',
      'Dealer Conference & High-Performing Partner Recognition',
      'Youth & Consumer Promotion Prize Packs (e.g. Boomer Voice of Nation)',
      'Board of Directors Presentation Suites',
    ],
  },
  {
    id: 'retail-marketing',
    orderNumber: '06',
    title: 'Retail Marketing',
    shortDescription:
      'Point-of-Sale (POS) displays, endcap branding, and in-store merchandising structures engineered for high-footfall retail.',
    fullDescription:
      'Win the decisive five seconds at the store shelf. We design, prototype, and manufacture durable retail display fixtures, floor-standing display units (FSDUs), acrylic counter glorifiers, and shelf-edge promotional strips that maximise stock visibility.',
    image: '/assets/images/service_corporate_display_1792411448814.jpg',
    deliverables: [
      'Heavy-duty metal, acrylic & wood Floor Standing Display Units (FSDUs)',
      'Countertop display units (CDUs) & lighted product glorifiers',
      'Shelf-talkers, hanging wobblers, and branded category dividers',
      'Illuminated lightboxes & window merchandising installations',
    ],
    capabilities: [
      {
        name: 'Structural Load Calculation',
        detail: 'Display shelves engineered and weight-tested to hold heavy liquids, tins, or consumer goods without sagging.',
      },
      {
        name: 'Modular Flat-Pack Engineering',
        detail: 'Units designed for rapid tool-less assembly by field sales teams across hundreds of retail outlets.',
      },
      {
        name: 'High-Durability Powder Coating',
        detail: 'Scratch-resistant industrial electrostatic powder coating for high-traffic supermarket environments.',
      },
      {
        name: 'Direct Store Audit & Replacement',
        detail: 'Standardised spare components ensuring damaged store displays can be serviced promptly.',
      },
    ],
    typicalApplications: [
      'Modern Trade Supermarkets & Hypermarket Chains',
      'Pharmacy & Veterinary Retail Outlet Merchandising',
      'Consumer Electronics & Mobile Accessory Outlets',
      'High-Street Fashion & Apparel Showrooms',
    ],
  },
  {
    id: 'experiential-marketing',
    orderNumber: '07',
    title: 'Experiential Marketing',
    shortDescription:
      'Interactive on-ground brand activations, consumer engagement kiosks, and immersive public installations.',
    fullDescription:
      'Passive advertising is easily forgotten; immersive physical experience is remembered. PrintVision conceives and builds interactive brand spaces—from interactive mall atrium kiosks to high-energy university campus activation roadshows.',
    image: '/assets/images/service_experiential_marketing_1792414356483.jpg',
    deliverables: [
      'Free-standing interactive mall activation structures & domes',
      'Touchscreen demo stations, gaming kiosks & AR photo booths',
      'Mobile sampling carts, demonstration counters & pop-up lounges',
      'High-impact entrance tunnels with responsive lighting effects',
    ],
    capabilities: [
      {
        name: 'Structural Safety & Crowd Management',
        detail: 'Weighted, stable kiosk architecture compliant with commercial mall fire and egress codes.',
      },
      {
        name: 'Interactive Tech Integration',
        detail: 'Flush-mounted iPads, large touchscreen arrays, and camera enclosures built into clean casework.',
      },
      {
        name: 'Rapid Overnight Deployment',
        detail: 'Modular fabrication enabling full kiosk installation between mall closing and opening hours.',
      },
      {
        name: 'On-Ground Maintenance Support',
        detail: 'Standby technical crew ensuring seamless power, illumination, and mechanics throughout.',
      },
    ],
    typicalApplications: [
      'Major Shopping Mall Central Atrium Activations (Emporium, Packages, Centaurus)',
      'Nationwide Campus Talent & Singing Contests (e.g. Boomer Voice of Nation in 80+ institutes)',
      'Sports Stadium Fanzones & Public Festival Brand Hubs',
      'Airport Transit Terminal Showcase Displays',
    ],
  },
  {
    id: 'integrated-campaigns',
    orderNumber: '08',
    title: 'Integrated Campaigns',
    shortDescription:
      'Multi-touchpoint advertising synchronization bridging out-of-home (OOH), print, retail, and experiential execution.',
    fullDescription:
      'An advertising idea achieves maximum velocity when every touchpoint speaks the exact same visual language. PrintVision coordinates unified campaigns where city overhead billboards, transit vehicle wraps, dealer point-of-sale displays, and press advertisements execute with unwavering colour and messaging consistency.',
    image: '/assets/images/service_integrated_campaigns_1792414372911.jpg',
    deliverables: [
      'Master campaign creative platform & headline copy generation',
      'Large-format Out-Of-Home (OOH) skins, gantries & unipoles',
      'Fleet & public transit graphics (bus wraps, delivery trucks)',
      'Dealer showroom collateral, posters, and point-of-sale kits',
    ],
    capabilities: [
      {
        name: 'Cross-Format Pantone Control',
        detail: 'Calibrated color management ensuring your brand orange looks identical on vinyl, paper, and metal.',
      },
      {
        name: 'Simultaneous Multi-City Rollout',
        detail: 'Coordinated printing and shipping schedules deploying assets to Lahore, Karachi, and Islamabad in lockstep.',
      },
      {
        name: 'Print & Digital Asset Preparation',
        detail: 'Production of final press-ready high-resolution PDFs and companion digital screen formats.',
      },
      {
        name: 'Campaign Production Auditing',
        detail: 'Physical photographic verification of installed hoardings and retail displays across all designated territories.',
      },
    ],
    typicalApplications: [
      'Nationwide Product Launch Rollouts (e.g. Boomer Cola & Divine Gardens)',
      'Seasonal Consumer Promotions & Festive Campaigns',
      'Corporate Rebranding Rollouts Across Regional Dealer Networks',
      'High-Impact Multi-City Urban Highway Billboards',
    ],
  },
  {
    id: 'trade-marketing',
    orderNumber: '09',
    title: 'Trade Marketing',
    shortDescription:
      'Distributor showroom branding, external dealer fascia signages, and wholesale B2B promotional programmes.',
    fullDescription:
      'Your distributor network is your front line. PrintVision manufactures and installs standardized dealer board signages, backlit 3D channel letters, branded wholesale counters, and distributor conference environments that motivate the trade and dominate the local market.',
    image: '/assets/images/service_trade_marketing_1792414357346.jpg',
    deliverables: [
      'Standardized illuminated dealer boards & exterior fascia signages',
      'Distributor counter wraps, wall cladding & product showcase bays',
      'Trade conference stage sets, banners & incentive prize kits',
      'Industrial service vehicle fleet graphics & livery application',
    ],
    capabilities: [
      {
        name: 'Mass Dealer Board Fabrication',
        detail: 'High-speed assembly line for standardized aluminium composite fascia signs with LED backlighting.',
      },
      {
        name: 'Mobile Fleet Livery Installation',
        detail: 'Precision vinyl wrapping for field service vans, animal medicine fleets (e.g. Marush Vaccination Vans).',
      },
      {
        name: 'Local Municipality Permitting Knowledge',
        detail: 'Guidance on standard signboard sizing, structural brackets, and local outdoor advertising bylaws.',
      },
      {
        name: 'Trade Convention Staging',
        detail: 'Bespoke conference sets and presentation stages for annual national distributor conventions.',
      },
    ],
    typicalApplications: [
      'Nationwide Dealer & Retailer Network Re-branding',
      'Veterinary & Agricultural Distribution Networks (e.g. Marush & Big Bird)',
      'Construction Material & Hardware Wholesalers',
      'Annual Nationwide Distributor Conferences',
    ],
  },
];

export const COMPANY_HERITAGE = {
  founded: 1997,
  yearsOfExperience: 29,
  city: 'Lahore, Pakistan',
  headOffice: '139-F Raja Centre, Main Boulevard, Gulberg II, Lahore',
  pillars: [
    {
      title: 'Established in 1997',
      description:
        'Nearly three decades of continuous advertising, commercial printing, and on-ground brand execution in Pakistan under founder leadership.',
    },
    {
      title: 'Full-Spectrum Production Under One Roof',
      description:
        'From big idea development and brand design to commercial printing and architectural exhibition fabrication in our own bays.',
    },
    {
      title: 'Lahore Base with Nationwide Reach',
      description:
        'Headquartered at Gulberg II, Lahore, with battle-tested logistics deploying across Punjab, Sindh, KPK, and Islamabad.',
    },
    {
      title: 'From Vision to Visibility',
      description:
        'We do not just print or assemble stands; we bridge the gap between creative ambition and physical real-world execution.',
    },
  ],
};

// Real Team Members from Page 9 of the official Company Profile
export interface TeamMember {
  name: string;
  role: string;
  background: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mohsin Ali',
    role: 'Chief Operating Officer & Founder',
    background:
      'Idea initiated by Mohsin Ali became the base for the conglomerate we call PrintVision. His vision to foresee the future of media and its growth in Pakistan has led this company to where it belongs. Established the company in 1997 and kept up with it through all times.',
  },
  {
    name: 'Shiekh Maroof',
    role: 'Chief Operating Officer',
    background:
      'After spending his educational years at the University of Engineering & Technology (UET), Lahore, Mr. Maroof decided to adapt media relations as his career of choice. Being trained in building construction is an added advantage to help execute our architectural exhibition projects where his ingenuity is required most.',
  },
  {
    name: 'Mubeen A. Shiekh',
    role: 'Director Marketing',
    background:
      'A marketer by profession, Mubeen has always enjoyed working with partner brands and their brand custodians, guiding them through complex nationwide campaigns and retail executions.',
  },
  {
    name: 'Abrar Ibn-e-Muhammad',
    role: 'Creative Director',
    background:
      'Abrar, after working with leading advertising agencies, found a home to exercise his creative vision at PrintVision. Trained at leading art schools alongside renowned artists, his imagination and eye for detail is an integral part of our creative hub.',
  },
];

// Real Clients and Market Leaders worked with by PrintVision
export interface ClientItem {
  id: string;
  name: string;
  logo: string;
  highlight: string;
  sector: string;
}

export const CLIENTS_DATA: ClientItem[] = [
  {
    id: 'bigbird',
    name: 'Big Bird Group',
    logo: bigbirdLogo,
    highlight: 'Brand leader in poultry: corporate literature, export packaging design, and promotional trade displays.',
    sector: 'Agribusiness & Poultry',
  },
  {
    id: 'ceva',
    name: 'CEVA Pharma',
    logo: cevaLogo,
    highlight: 'Global animal health innovation: curved architectural exhibition pavilions and technical product guides.',
    sector: 'Healthcare & Pharmaceuticals',
  },
  {
    id: 'bunnys',
    name: 'Bunny’s Limited',
    logo: bunnysLogo,
    highlight: 'Household FMCG bakery icon: product packaging design, retail merchandising, and brand activations.',
    sector: 'FMCG & Bakery Leader',
  },
  {
    id: 'sabroso',
    name: 'Sabroso',
    logo: sabrosoLogo,
    highlight: 'Premium chicken foods: nationwide retail branding, in-store promotional setups, and packaging.',
    sector: 'FMCG & Premium Poultry',
  },
  {
    id: 'marush',
    name: 'Marush (Pvt.) Ltd.',
    logo: marushLogo,
    highlight: 'Veterinary medicine partner: mobile vaccination fleet branding, product literature & packaging.',
    sector: 'Pharmaceutical & Veterinary',
  },
  {
    id: 'master',
    name: 'Master Since 1963',
    logo: masterLogo,
    highlight: 'Premier Pakistani industrial group: commercial print collateral, dealer network signage, and displays.',
    sector: 'Industrial & Foam Group',
  },
  {
    id: 'parwaz',
    name: 'Parwaz',
    logo: parwazLogo,
    highlight: 'Setting new standards: high-speed packaging printing, specialty boxes, and print production.',
    sector: 'Printing & Packaging',
  },
];

// Real 4-Step Methodology from Page 6 of the official Company Profile
export const METHODOLOGY_STEPS = [
  {
    step: '01',
    name: 'Insights',
    subtitle: 'Start smart, finish big',
    description:
      'Every brief is driven off consumer insight. This includes digital insights panels, social media watching, immersions, and informal discussion groups to get into consumers heads & hearts.',
  },
  {
    step: '02',
    name: 'Creative',
    subtitle: 'Put the idea at the centre',
    description:
      'Built off relevant insight, we create a compelling creative platform that can live for the brand overtime—whether promotional, sponsorship, or experiential.',
  },
  {
    step: '03',
    name: 'Idea Expression',
    subtitle: 'Action is everything',
    description:
      'What are the consumer pressure points? Where can we connect with them? We take our ideas and activate them in the market in an integrated, tangible way.',
  },
  {
    step: '04',
    name: 'Results',
    subtitle: 'Creative ideas without results mean nothing',
    description:
      'Every campaign has strong measurement criteria and tools in place to ensure that we achieve & measure ROO (Return on Objective) & ROI.',
  },
];

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  typeBadge: string;
  image: string;
  description: string;
  clientSector: string;
  dimensions: string;
  materials: string[];
  scope: string[];
}

// Real Portfolio Projects from the attached Company Profile
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'project-divine-gardens',
    title: 'Divine Gardens Housing Scheme Launch',
    category: 'launches',
    categoryLabel: 'Brand & Product Launches',
    typeBadge: 'Client Project (Divine Developers)',
    image: '/assets/images/service_product_launches_1792414339455.jpg',
    description:
      'From creative ideas to final execution, a landmark property launch completely handled by PrintVision across all media—from television to press—culminating in the grand inaugural launch event near METRO Cash & Carry, Airport Road, Lahore.',
    clientSector: 'Real Estate & Infrastructure (Divine Developers Pvt. Ltd.)',
    dimensions: 'Grand Inaugural Ceremony Arena',
    materials: ['Custom Stage Joinery', 'Architectural Models', 'Embossed Brochures', 'Event Lighting'],
    scope: ['Launch Event Execution', 'Media Relations & TV', 'Marketing Collateral', 'On-Site Coordination'],
  },
  {
    id: 'project-boomer-voice',
    title: 'Boomer Voice of Nation Mega Activation',
    category: 'experiential',
    categoryLabel: 'Experiential Marketing',
    typeBadge: 'Client Project (Al-Hilal Industries)',
    image: '/assets/images/service_experiential_marketing_1792414356483.jpg',
    description:
      'A nationwide youth brand activation effectively conducted as "BOOMER VOICE OF NATION" for Boomer Cola, including talent auditions in more than 80 educational institutes of Lahore & Islamabad, live singing competitions, branded concert staging, and prize hampers.',
    clientSector: 'FMCG & Beverages (Al-Hilal Industries Pvt. Ltd.)',
    dimensions: '80+ Educational Institutes & Multi-City Finales',
    materials: ['Acoustic Stage Backdrops', 'Branded Sound Podiums', 'Audition Signage', 'Gift Hampers'],
    scope: ['On-Ground Activation', 'Campus Coordination', 'Live Show Staging', 'Promotional Kits'],
  },
  {
    id: 'project-ptdc-pavilion',
    title: 'Pakistan Tourism Development Corporation (PTDC) Pavilion',
    category: 'exhibitions',
    categoryLabel: 'Exhibitions',
    typeBadge: 'Client Project (PTDC)',
    image: '/assets/images/service_exhibition_stall_1792411446415.jpg',
    description:
      'Official exhibition pavilion designed and fabricated for the Pakistan Tourism Development Corporation (2013). Featured clean architectural geometry, illuminated 3D corporate signage, cultural photo walls, hospitality lounge, and interactive inquiry desks.',
    clientSector: 'Public Sector & National Tourism (PTDC)',
    dimensions: '14m x 7m Custom Expo Build',
    materials: ['Aluminium Composite Panels', 'Illuminated Acrylic Fascia', 'High-Res Wall Cladding', 'Wood Flooring'],
    scope: ['3D Architectural Design', 'Structural Fabrication', 'Lighting Rig', 'Turnkey Handover'],
  },
  {
    id: 'project-ceva-pharma',
    title: 'CEVA Pharma High-Impact Curved Exhibition Booth',
    category: 'exhibitions',
    categoryLabel: 'Exhibitions',
    typeBadge: 'Client Project (CEVA Pharma)',
    image: '/assets/images/ceva_marush_stall_2.png',
    description:
      'Sophisticated curved modular exhibition booth engineered for CEVA Pharma at Expo Centre Lahore. Integrated overhead circular canopy with 3D logo, dynamic blue ambient lighting, multiple semi-private consultation pods, and central digital presentation screens.',
    clientSector: 'Pharmaceutical & Veterinary Healthcare (CEVA Pharma)',
    dimensions: '12m x 10m Island Stand',
    materials: ['Curved MDF Partitioning', 'Overhead Halo Ring Rigging', 'Accent Blue LEDs', 'High-Gloss Counters'],
    scope: ['Custom Joinery', 'Electrical & Illumination', 'Reception Counters', 'On-Site Show Support'],
  },
  {
    id: 'project-marush-fleet',
    title: 'Marush Vaccination Fleet & Trade Marketing',
    category: 'trade',
    categoryLabel: 'Trade Marketing',
    typeBadge: 'Client Project (Marush Pvt. Ltd.)',
    image: '/assets/images/service_trade_marketing_1792414357346.jpg',
    description:
      'Long-standing brand partner since inception. PrintVision executed nationwide fleet livery for the Marush Vaccination Services Suzuki vans and pickups, product packaging designs, technical veterinary wall charts, and distributor point-of-sale display fixtures.',
    clientSector: 'Animal Health & Veterinary Medicine (Marush Pvt. Ltd.)',
    dimensions: 'Commercial Fleet & National Distribution Network',
    materials: ['Cast Vehicle Wrap Vinyl', 'UV Heavy-Duty Lamination', 'Gloss Packaging Board', 'Rigid Acrylic'],
    scope: ['Fleet Livery Application', 'Medicine Box Packaging', 'Dosage Wall Charts', 'Dealer Fixtures'],
  },
  {
    id: 'project-big-bird-packaging',
    title: 'Big Bird Group Poultry Packaging & Literature',
    category: 'printing',
    categoryLabel: 'Corporate Printing',
    typeBadge: 'Client Project (Big Bird Group)',
    image: '/assets/images/service_printing_solutions_1792411449423.jpg',
    description:
      'Comprehensive packaging and corporate literature production for Pakistan’s leading poultry enterprise. High-volume industrial feed bag graphics (Big Feed), product leaflets, Hubbard M99 breed technical brochures, and corporate presentation binders.',
    clientSector: 'Agribusiness & Poultry Sector (Big Bird Group)',
    dimensions: 'Nationwide Commercial Print Run',
    materials: ['Heavy-Duty Woven Polypropylene', 'Art Card 350gsm', 'Pantone Metallic Inks', 'Matte Lamination'],
    scope: ['Packaging Artworking', 'Pantone Press Profiling', 'Brochure Finishing', 'Batch Distribution'],
  },
];
