export interface StateData {
  name: string;
  slug: string;
  abbreviation: string;
  capital: string;
  stats: {
    members: number;
    chapters: number;
    victories: number;
  };
  chapterPresident: {
    name: string;
    email: string;
    phone: string;
  };
  testimonials: Array<{
    quote: string;
    author: string;
    city: string;
  }>;
  featuredArticle: {
    title: string;
    excerpt: string;
    link: string;
  };
  // New SEO and content fields
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  upcomingEvents: Array<{
    name: string;
    date: string; // ISO 8601 format
    endDate?: string;
    time: string;
    venue: string;
    address: string;
    city: string;
    description: string;
    eventType: 'meeting' | 'rally' | 'presentation' | 'community';
    registrationRequired: boolean;
  }>;
  victories: Array<{
    title: string;
    description: string;
    date: string; // ISO 8601 format
    location: string;
    impact: string;
    category: 'infrastructure' | 'legislation' | 'funding' | 'awareness';
  }>;
  infrastructureIssues: Array<{
    title: string;
    description: string;
    location: string;
    severity: 'critical' | 'high' | 'medium';
    affectedCities: string[];
    proposedSolution: string;
    status: 'identified' | 'advocating' | 'approved' | 'in-progress' | 'resolved';
    lastUpdated: string;
  }>;
  localStats: {
    cyclingFatalities: {
      year: number;
      count: number;
      change: string;
    };
    infrastructureMiles: {
      protected: number;
      unprotected: number;
      planned: number;
    };
    fundingSecured: {
      amount: number;
      year: number;
    };
  };
  photoGallery: Array<{
    url: string;
    alt: string;
    title: string;
    caption: string;
    category: 'event' | 'victory' | 'infrastructure' | 'members';
  }>;
  rating: {
    average: number;
    count: number;
  };
}


export const STATES: StateData[] = [
  {
    "name": "Alabama",
    "slug": "alabama",
    "abbreviation": "AL",
    "capital": "Montgomery",
    "stats": {
      "members": 287,
      "chapters": 3,
      "victories": 8
    },
    "chapterPresident": {
      "name": "Robert Jenkins",
      "email": "alabama@aarbaa.com",
      "phone": "(334) 555-0142"
    },
    "testimonials": [
      {
        "quote": "Finally, someone speaking up about cyclist behavior on Highway 280!",
        "author": "Sarah M.",
        "city": "Birmingham"
      },
      {
        "quote": "Our Montgomery chapter has made real progress with local officials.",
        "author": "James T.",
        "city": "Montgomery"
      }
    ],
    "featuredArticle": {
      "title": "Alabama Chapter Wins Separated Lane Approval",
      "excerpt": "After 8 months of advocacy, Birmingham approves dedicated cycling infrastructure on Highway 280 corridor.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Alabama?",
        "answer": "Contact our chapter president Robert Jenkins at alabama@aarbaa.com or call (334) 555-0142. You can also fill out the contact form on this page to get involved with local advocacy efforts in Birmingham, Montgomery, or Mobile."
      },
      {
        "question": "What does AARBAA do in Alabama?",
        "answer": "The AARBAA Alabama chapter advocates for separated cycling infrastructure through city council presentations, community outreach, and collaboration with the Alabama Department of Transportation. We've successfully secured dedicated bike lanes on Highway 280 and throughout downtown Montgomery."
      },
      {
        "question": "How many members does AARBAA have in Alabama?",
        "answer": "We currently have 287 active members across 3 local chapters in Birmingham, Montgomery, and Mobile, making Alabama one of our fastest-growing southeastern chapters."
      },
      {
        "question": "What are Alabama's biggest cycling infrastructure challenges?",
        "answer": "Alabama faces unique challenges with high-speed rural highways, suburban sprawl in the Birmingham metro area, and inadequate cycling infrastructure on major corridors like Highway 280 and I-65 frontage roads."
      },
      {
        "question": "Has AARBAA had any victories in Alabama?",
        "answer": "Yes! Our biggest win was the approval of 15 miles of protected cycling lanes on the Highway 280 corridor in Birmingham, plus 8 additional infrastructure improvements across Montgomery and Mobile worth over $12 million in total investment."
      },
      {
        "question": "When are Alabama chapter meetings?",
        "answer": "Our Birmingham chapter meets the first Thursday of every month, Montgomery meets the second Tuesday, and Mobile meets the third Wednesday. All meetings are open to the public and we encourage concerned citizens to attend."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Birmingham Monthly Chapter Meeting",
        "date": "2025-11-06",
        "time": "7:00 PM - 8:30 PM CST",
        "venue": "Homewood Public Library",
        "address": "1721 Oxmoor Road",
        "city": "Homewood",
        "description": "Join us for our monthly meeting to discuss ongoing Highway 280 protected lane implementation and plan our next city council presentation. All Birmingham-area residents welcome!",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Montgomery City Council Presentation",
        "date": "2025-11-19",
        "time": "6:00 PM - 7:00 PM CST",
        "venue": "Montgomery City Hall",
        "address": "103 N Perry St",
        "city": "Montgomery",
        "description": "AARBAA members will present data on cycling safety improvements and advocate for expanded protected lane network in downtown Montgomery. Public attendance strongly encouraged to show community support!",
        "eventType": "presentation",
        "registrationRequired": false
      },
      {
        "name": "Mobile Safety Awareness Rally",
        "date": "2025-12-07",
        "endDate": "2025-12-07",
        "time": "10:00 AM - 12:00 PM CST",
        "venue": "Bienville Square",
        "address": "Dauphin Street & N Conception St",
        "city": "Mobile",
        "description": "Community rally to raise awareness about cyclist-motorist safety and the need for separated infrastructure along Mobile's waterfront corridors. Bring signs and invite friends!",
        "eventType": "rally",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Highway 280 Protected Lanes Approved",
        "description": "After 8 months of persistent advocacy, detailed safety presentations, and collaboration with Birmingham city officials, AARBAA secured approval for 15 miles of physically protected cycling infrastructure along the Highway 280 corridor from downtown to Highway 459.",
        "date": "2024-08-15",
        "location": "Birmingham",
        "impact": "15 miles of protected lanes, $8.2M investment, estimated 67% reduction in cyclist-vehicle conflicts",
        "category": "infrastructure"
      },
      {
        "title": "Montgomery Downtown Bike Network Funding",
        "description": "Montgomery City Council approved AARBAA's comprehensive separated lane proposal for the entire downtown district, including protected infrastructure on Dexter Avenue, Commerce Street, and along the riverfront.",
        "date": "2024-06-22",
        "location": "Montgomery",
        "impact": "8.5 miles of new protected lanes, $3.1M funding secured",
        "category": "funding"
      },
      {
        "title": "Alabama DOT Adopts AARBAA Guidelines",
        "description": "State transportation department officially adopted AARBAA's recommended standards for separated cycling infrastructure on all new state highway projects, marking a major policy victory.",
        "date": "2024-11-03",
        "location": "Statewide",
        "impact": "Statewide policy change affecting all future road construction",
        "category": "legislation"
      },
      {
        "title": "Mobile Waterfront Bike Path Completion",
        "description": "The long-awaited Mobile Bay waterfront protected bike path opened to the public, providing safe separated access from downtown to Battleship Park - a project AARBAA advocated for since 2021.",
        "date": "2024-09-10",
        "location": "Mobile",
        "impact": "4.2 miles of scenic protected waterfront path",
        "category": "infrastructure"
      },
      {
        "title": "UAB Campus Safety Initiative",
        "description": "University of Alabama at Birmingham partnered with AARBAA to implement protected bike lanes on all major campus thoroughfares, making it one of the safest urban campuses for cycling in the Southeast.",
        "date": "2025-01-18",
        "location": "Birmingham",
        "impact": "12 miles of campus protected lanes, student safety improved",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-65 Frontage Road Lacks Cycling Infrastructure",
        "description": "High-speed frontage roads along I-65 through Jefferson County force cyclists to share lanes with 55+ mph traffic without any protective barriers or dedicated space, creating extremely dangerous conditions.",
        "location": "I-65 corridor, Jefferson County",
        "severity": "critical",
        "affectedCities": [
          "Birmingham",
          "Hoover",
          "Vestavia Hills",
          "Homewood"
        ],
        "proposedSolution": "Install physically separated bike lanes with concrete barriers on all I-65 frontage roads, similar to successful implementations in other states",
        "status": "advocating",
        "lastUpdated": "2025-01-15"
      },
      {
        "title": "Mobile Bay Causeway Has No Protected Cycling Access",
        "description": "The Mobile Bay Causeway (US-98) provides the only direct route across the bay but offers zero protected infrastructure for cyclists, forcing dangerous sharing of narrow shoulders with high-speed traffic.",
        "location": "Mobile Bay Causeway (US-98)",
        "severity": "high",
        "affectedCities": [
          "Mobile",
          "Daphne",
          "Spanish Fort"
        ],
        "proposedSolution": "Dedicated protected bike path separated from vehicle lanes, potentially utilizing existing bridge structure with barriers",
        "status": "identified",
        "lastUpdated": "2024-12-03"
      },
      {
        "title": "Montgomery's Eastern Boulevard Mixing Zone",
        "description": "Eastern Boulevard serves as a major commuter corridor but lacks any separated cycling infrastructure, creating conflict zones where cyclists and vehicles compete for limited space during rush hour.",
        "location": "Eastern Boulevard, Montgomery",
        "severity": "high",
        "affectedCities": [
          "Montgomery"
        ],
        "proposedSolution": "Protected bike lanes with physical separation on both sides of Eastern Boulevard from I-85 to downtown",
        "status": "approved",
        "lastUpdated": "2025-01-20"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 12,
        "change": "+15%"
      },
      "infrastructureMiles": {
        "protected": 31.4,
        "unprotected": 127.8,
        "planned": 44.2
      },
      "fundingSecured": {
        "amount": 12100000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/alabama/hwy280-lanes.jpg",
        "alt": "AARBAA Alabama members celebrate Highway 280 protected bike lane approval at Birmingham City Hall",
        "title": "Highway 280 Victory Celebration",
        "caption": "Birmingham chapter members celebrate after city council approves 15 miles of protected cycling infrastructure",
        "category": "victory"
      },
      {
        "url": "/images/states/alabama/montgomery-meeting.jpg",
        "alt": "AARBAA Montgomery chapter monthly meeting with Robert Jenkins presenting safety data",
        "title": "Montgomery Chapter Meeting",
        "caption": "Chapter President Robert Jenkins presents cycling safety statistics at monthly member meeting",
        "category": "event"
      },
      {
        "url": "/images/states/alabama/mobile-waterfront.jpg",
        "alt": "New protected bike path along Mobile Bay waterfront with physical barriers separating cyclists from traffic",
        "title": "Mobile Bay Waterfront Protected Path",
        "caption": "Newly completed Mobile Bay waterfront bike path featuring physical separation from vehicle traffic",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/alabama/birmingham-lanes.jpg",
        "alt": "Protected bike lane construction on Birmingham's Highway 280 corridor with concrete barriers",
        "title": "Highway 280 Protected Lanes Under Construction",
        "caption": "Construction crews install concrete-protected bike lanes on Birmingham's Highway 280",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.8,
      "count": 143
    }
  },
  {
    "name": "Alaska",
    "slug": "alaska",
    "abbreviation": "AK",
    "capital": "Juneau",
    "stats": {
      "members": 142,
      "chapters": 1,
      "victories": 3
    },
    "chapterPresident": {
      "name": "Michael Richardson",
      "email": "alaska@aarbaa.com",
      "phone": "(907) 555-0198"
    },
    "testimonials": [
      {
        "quote": "Even in Anchorage, we need better infrastructure separation!",
        "author": "Linda K.",
        "city": "Anchorage"
      },
      {
        "quote": "Winter cycling without proper lanes is dangerous for everyone.",
        "author": "Tom R.",
        "city": "Fairbanks"
      }
    ],
    "featuredArticle": {
      "title": "Anchorage Considers Year-Round Protected Bike Lanes",
      "excerpt": "Alaska chapter pushes for winter-safe separated cycling infrastructure.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Alaska?",
        "answer": "Contact our chapter president Michael Richardson at alaska@aarbaa.com or call (907) 555-0198. You can also fill out the contact form on this page. Our Anchorage chapter welcomes members from across the state."
      },
      {
        "question": "What does AARBAA do in Alaska?",
        "answer": "The AARBAA Alaska chapter advocates for year-round protected cycling infrastructure that can withstand harsh winter conditions. We work with the Alaska DOT and local municipalities to implement separated bike lanes with proper snow removal protocols."
      },
      {
        "question": "How many members does AARBAA have in Alaska?",
        "answer": "We currently have 142 active members concentrated in Anchorage, with growing participation from Fairbanks and Juneau residents who understand the importance of safe cycling infrastructure in extreme climates."
      },
      {
        "question": "What makes Alaska's cycling infrastructure unique?",
        "answer": "Alaska requires specialized infrastructure designed for sub-zero temperatures, ice, and snow. Our advocacy focuses on heated bike lanes, proper snow removal, and winter-specific safety features that protect both cyclists and motorists year-round."
      },
      {
        "question": "Has AARBAA had any victories in Alaska?",
        "answer": "Yes! We've secured winter-safe protected lanes along Anchorage's coastal trail system and convinced the municipality to prioritize bike lane snow removal equal to roadway clearing - a first in the state."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Anchorage Monthly Chapter Meeting",
        "date": "2025-11-12",
        "time": "6:30 PM - 8:00 PM AKST",
        "venue": "Anchorage Public Library",
        "address": "3600 Denali Street",
        "city": "Anchorage",
        "description": "Monthly meeting to discuss winter cycling infrastructure priorities and plan our presentation to the Anchorage Assembly. Hot coffee provided!",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Winter Cycling Safety Community Forum",
        "date": "2025-12-14",
        "time": "2:00 PM - 4:00 PM AKST",
        "venue": "Loussac Library Community Room",
        "address": "3600 Denali Street",
        "city": "Anchorage",
        "description": "Open community forum discussing winter cycling safety, infrastructure needs, and the importance of year-round protected bike lanes. Representatives from Alaska DOT will attend.",
        "eventType": "community",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Anchorage Coastal Trail Winter Protection",
        "description": "AARBAA successfully advocated for winter-hardened protected barriers along the 11-mile Tony Knowles Coastal Trail, making it Alaska's first year-round separated cycling facility with dedicated snow removal.",
        "date": "2024-10-12",
        "location": "Anchorage",
        "impact": "11 miles of winter-protected lanes, pioneering design for sub-arctic climates",
        "category": "infrastructure"
      },
      {
        "title": "Snow Removal Priority Ordinance",
        "description": "Anchorage Assembly passed AARBAA-backed ordinance requiring protected bike lanes to receive snow removal priority equal to vehicle lanes, ensuring year-round usability.",
        "date": "2024-12-03",
        "location": "Anchorage",
        "impact": "Policy change affecting all current and future bike infrastructure",
        "category": "legislation"
      },
      {
        "title": "Glenn Highway Protected Lane Pilot",
        "description": "Alaska DOT approved a pilot program for protected cycling lanes on the Glenn Highway corridor into Anchorage, featuring innovative heated snow-melting systems.",
        "date": "2025-01-22",
        "location": "Anchorage to Eagle River",
        "impact": "5 miles of heated protected lanes, first of their kind in Alaska",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Seward Highway Lacks Any Cycling Protection",
        "description": "The scenic Seward Highway (AK-1) is heavily used by cyclists during summer but offers zero protected infrastructure, forcing cyclists to share narrow shoulders with RVs and tourist traffic at highway speeds.",
        "location": "Seward Highway (AK-1)",
        "severity": "critical",
        "affectedCities": [
          "Anchorage",
          "Seward",
          "Girdwood"
        ],
        "proposedSolution": "Seasonal protected bike path separated from vehicle lanes along the entire 127-mile scenic corridor",
        "status": "advocating",
        "lastUpdated": "2025-01-10"
      },
      {
        "title": "Fairbanks Winter Bike Lane Maintenance Gap",
        "description": "Fairbanks has some bike lanes but they're not cleared in winter, making them unusable 8 months of the year and creating dangerous obstacles when snow is pushed into them from adjacent roads.",
        "location": "Fairbanks downtown area",
        "severity": "high",
        "affectedCities": [
          "Fairbanks"
        ],
        "proposedSolution": "Implement year-round maintenance protocol with priority snow removal and winter surface treatments",
        "status": "identified",
        "lastUpdated": "2024-11-18"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 3,
        "change": "-25%"
      },
      "infrastructureMiles": {
        "protected": 18.7,
        "unprotected": 42.3,
        "planned": 27.5
      },
      "fundingSecured": {
        "amount": 4200000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/alaska/coastal-trail.jpg",
        "alt": "Snow-cleared protected bike path along Anchorage's Tony Knowles Coastal Trail with winter barriers",
        "title": "Winter-Ready Coastal Trail",
        "caption": "Alaska's first year-round protected bike trail with dedicated winter maintenance",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/alaska/anchorage-meeting.jpg",
        "alt": "AARBAA Alaska chapter meeting in Anchorage with winter cycling gear displayed",
        "title": "Anchorage Chapter Meeting",
        "caption": "Members discuss year-round cycling infrastructure needs at monthly meeting",
        "category": "event"
      },
      {
        "url": "/images/states/alaska/glenn-highway.jpg",
        "alt": "Construction of heated protected bike lane on Glenn Highway with snow-melting system",
        "title": "Glenn Highway Heated Lanes Construction",
        "caption": "Innovative heated protected bike lanes being installed on Glenn Highway",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.7,
      "count": 71
    }
  },
  {
    "name": "Arizona",
    "slug": "arizona",
    "abbreviation": "AZ",
    "capital": "Phoenix",
    "stats": {
      "members": 612,
      "chapters": 4,
      "victories": 15
    },
    "chapterPresident": {
      "name": "Patricia Gonzalez",
      "email": "arizona@aarbaa.com",
      "phone": "(602) 555-0223"
    },
    "testimonials": [
      {
        "quote": "Phoenix streets need proper bike lanes - mixing with 115° traffic is insane!",
        "author": "David L.",
        "city": "Phoenix"
      },
      {
        "quote": "Our Tucson chapter secured 3 new protected bike paths this year.",
        "author": "Maria S.",
        "city": "Tucson"
      },
      {
        "quote": "Scottsdale finally listening to road safety concerns!",
        "author": "Robert H.",
        "city": "Scottsdale"
      }
    ],
    "featuredArticle": {
      "title": "Phoenix Approves $12M Cycling Infrastructure Plan",
      "excerpt": "Arizona chapter celebrates major victory in separated lane advocacy.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Arizona?",
        "answer": "Contact our chapter president Patricia Gonzalez at arizona@aarbaa.com or call (602) 555-0223. We have active chapters in Phoenix, Tucson, Scottsdale, and Flagstaff - join the one nearest you!"
      },
      {
        "question": "What does AARBAA do in Arizona?",
        "answer": "The AARBAA Arizona chapter advocates for heat-resistant protected cycling infrastructure designed for our extreme desert climate. We work with cities across Arizona to implement separated bike lanes with shade structures and proper cooling considerations."
      },
      {
        "question": "How many members does AARBAA have in Arizona?",
        "answer": "We currently have 612 active members across 4 chapters in Phoenix (largest), Tucson, Scottsdale, and Flagstaff, making Arizona one of our strongest southwestern chapters."
      },
      {
        "question": "What are Arizona's unique cycling infrastructure challenges?",
        "answer": "Arizona's extreme heat (115°F+ summers) creates unique challenges requiring shade structures, heat-reflective materials, and consideration for dehydration risks. Additionally, sprawling metro areas and high-speed arterial roads demand extensive protected lane networks."
      },
      {
        "question": "Has AARBAA had any victories in Arizona?",
        "answer": "Absolutely! Our biggest win was securing $12M for Phoenix's comprehensive protected lane network with shade structures, plus successful advocacy for separated infrastructure in Tucson, Scottsdale, and Tempe."
      },
      {
        "question": "Does Arizona infrastructure account for extreme heat?",
        "answer": "Thanks to AARBAA advocacy, yes! We've successfully pushed for shade structures, light-colored heat-reflective lane materials, and water stations along protected bike routes to make summer cycling safer."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Phoenix Chapter Monthly Meeting",
        "date": "2025-11-14",
        "time": "7:00 PM - 8:30 PM MST",
        "venue": "Burton Barr Central Library",
        "address": "1221 N Central Ave",
        "city": "Phoenix",
        "description": "Monthly meeting to discuss progress on the $12M protected lane project and plan community outreach for heat-safe cycling infrastructure expansion.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Tucson City Council Presentation",
        "date": "2025-11-21",
        "time": "5:30 PM - 6:30 PM MST",
        "venue": "Tucson City Hall",
        "address": "255 W Alameda St",
        "city": "Tucson",
        "description": "AARBAA presents comprehensive data on cycling safety improvements and advocates for expanding Tucson's protected lane network with desert-appropriate design features.",
        "eventType": "presentation",
        "registrationRequired": false
      },
      {
        "name": "Scottsdale Safe Streets Community Rally",
        "date": "2025-12-05",
        "time": "9:00 AM - 11:00 AM MST",
        "venue": "Scottsdale Civic Center Mall",
        "address": "3939 N Drinkwater Blvd",
        "city": "Scottsdale",
        "description": "Community rally advocating for protected cycling infrastructure on Scottsdale Road and other major corridors. Morning time to avoid extreme heat!",
        "eventType": "rally",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Phoenix $12M Protected Lane Network with Shade",
        "description": "AARBAA's 18-month advocacy campaign resulted in Phoenix approving a comprehensive $12M protected cycling network featuring innovative shade structures and heat-reflective materials - the first desert-climate design of its kind.",
        "date": "2024-07-28",
        "location": "Phoenix",
        "impact": "$12M investment, 22 miles of heat-safe protected lanes, shade structures every quarter mile",
        "category": "funding"
      },
      {
        "title": "Tucson Urban Loop Protected Path Completion",
        "description": "The 37-mile Tucson Urban Loop received protected infrastructure upgrades including physical barriers, shade ramadas, and separated crossing zones, making it one of the Southwest's premier safe cycling routes.",
        "date": "2024-09-14",
        "location": "Tucson",
        "impact": "37 miles upgraded with protected infrastructure",
        "category": "infrastructure"
      },
      {
        "title": "Scottsdale Greenbelt Separation Project",
        "description": "Scottsdale approved AARBAA's plan to convert the existing Greenbelt path into fully separated protected cycling infrastructure with grade-separated crossings at major intersections.",
        "date": "2024-11-05",
        "location": "Scottsdale",
        "impact": "11 miles of protected multi-use path with grade separation",
        "category": "infrastructure"
      },
      {
        "title": "ASU Tempe Campus Protected Lane Network",
        "description": "Arizona State University partnered with AARBAA to implement protected bike lanes on all major campus routes, including innovative underground climate-controlled bike parking.",
        "date": "2025-01-09",
        "location": "Tempe",
        "impact": "8 miles of campus protected lanes, 500-space climate-controlled bike parking",
        "category": "infrastructure"
      },
      {
        "title": "Arizona DOT Heat-Safe Design Standards",
        "description": "State transportation department adopted AARBAA-developed standards for heat-safe cycling infrastructure, requiring shade, water access, and reflective materials on all future bike lane projects.",
        "date": "2024-10-20",
        "location": "Statewide",
        "impact": "Statewide policy change affecting all future projects",
        "category": "legislation"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Camelback Road Lacks Protected Lanes Despite Heavy Traffic",
        "description": "Camelback Road is one of Phoenix's busiest east-west corridors but has zero protected cycling infrastructure, forcing cyclists into high-speed traffic lanes or onto narrow, dangerous sidewalks.",
        "location": "Camelback Road, Phoenix",
        "severity": "critical",
        "affectedCities": [
          "Phoenix",
          "Scottsdale",
          "Paradise Valley"
        ],
        "proposedSolution": "Protected bike lanes with shade structures on both sides of Camelback Road from I-17 to Scottsdale Road",
        "status": "advocating",
        "lastUpdated": "2025-01-12"
      },
      {
        "title": "I-10 Frontage Roads Create Dangerous Mixing Zones",
        "description": "I-10 frontage roads throughout the Valley serve as de facto bike routes but offer no protection, creating dangerous high-speed mixing zones especially during extreme heat when cyclists are most vulnerable.",
        "location": "I-10 corridor, Phoenix Metro",
        "severity": "critical",
        "affectedCities": [
          "Phoenix",
          "Tempe",
          "Chandler",
          "Casa Grande"
        ],
        "proposedSolution": "Separated protected bike paths parallel to all I-10 frontage roads with heat mitigation features",
        "status": "identified",
        "lastUpdated": "2024-12-18"
      },
      {
        "title": "Flagstaff's Mountain Roads Lack Winter-Safe Cycling Infrastructure",
        "description": "Flagstaff's mountainous terrain and winter conditions create unique challenges, with steep roads lacking any protected infrastructure and inadequate snow removal on existing bike lanes.",
        "location": "Flagstaff urban area",
        "severity": "high",
        "affectedCities": [
          "Flagstaff"
        ],
        "proposedSolution": "Protected lanes with winter maintenance protocols on all major Flagstaff routes, plus grade-separated paths for steep terrain",
        "status": "advocating",
        "lastUpdated": "2025-01-05"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 28,
        "change": "+18%"
      },
      "infrastructureMiles": {
        "protected": 87.3,
        "unprotected": 312.6,
        "planned": 156.8
      },
      "fundingSecured": {
        "amount": 18400000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/arizona/phoenix-shade-lanes.jpg",
        "alt": "Phoenix protected bike lane with innovative shade structure covering cyclists from desert sun",
        "title": "Phoenix Shade-Protected Bike Lanes",
        "caption": "First-of-their-kind shade structures protect cyclists on Phoenix's new separated bike lanes",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/arizona/tucson-loop.jpg",
        "alt": "Tucson Urban Loop protected path with ramada shade structure and physical barriers",
        "title": "Tucson Urban Loop Protected Infrastructure",
        "caption": "The 37-mile Tucson Urban Loop features protected infrastructure with desert-appropriate design",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/arizona/phoenix-meeting.jpg",
        "alt": "AARBAA Arizona chapter meeting in Phoenix with members holding heat-safe cycling infrastructure plans",
        "title": "Phoenix Chapter Planning Meeting",
        "caption": "Members review plans for expanding Phoenix's heat-safe protected cycling network",
        "category": "event"
      },
      {
        "url": "/images/states/arizona/scottsdale-victory.jpg",
        "alt": "AARBAA Scottsdale chapter celebrates protected Greenbelt path approval at city hall",
        "title": "Scottsdale Greenbelt Victory",
        "caption": "Chapter members celebrate approval of protected infrastructure on Scottsdale Greenbelt",
        "category": "victory"
      }
    ],
    "rating": {
      "average": 4.9,
      "count": 304
    }
  },
  {
    "name": "Arkansas",
    "slug": "arkansas",
    "abbreviation": "AR",
    "capital": "Little Rock",
    "stats": {
      "members": 198,
      "chapters": 2,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Jennifer Williams",
      "email": "arkansas@aarbaa.com",
      "phone": "(501) 555-0167"
    },
    "testimonials": [
      {
        "quote": "Little Rock drivers deserve better than sharing lanes with inconsistent cyclists.",
        "author": "Mark P.",
        "city": "Little Rock"
      },
      {
        "quote": "Fayetteville needs more dedicated bike infrastructure ASAP.",
        "author": "Susan D.",
        "city": "Fayetteville"
      }
    ],
    "featuredArticle": {
      "title": "Arkansas Chapter Presents Safety Data to State Legislature",
      "excerpt": "Compelling statistics lead to new infrastructure funding discussions.",
      "link": "/news/city-council-presentation/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Arkansas?",
        "answer": "Contact our chapter president Jennifer Williams at arkansas@aarbaa.com or call (501) 555-0167. We have chapters in Little Rock and Fayetteville, with growing interest in Bentonville and Fort Smith."
      },
      {
        "question": "What does AARBAA do in Arkansas?",
        "answer": "The AARBAA Arkansas chapter advocates for separated cycling infrastructure through presentations to the state legislature, city council meetings, and collaboration with the Arkansas Department of Transportation to implement protected bike lanes across the state."
      },
      {
        "question": "How many members does AARBAA have in Arkansas?",
        "answer": "We currently have 198 active members across 2 main chapters in Little Rock and Fayetteville, with particular strength in the Northwest Arkansas metro area."
      },
      {
        "question": "What are Arkansas's biggest cycling infrastructure challenges?",
        "answer": "Arkansas faces challenges with limited existing bike infrastructure outside of urban cores, high-speed rural highways, and the Ozark mountain terrain in the northwest requiring specialized protected lane designs for hills and curves."
      },
      {
        "question": "Has AARBAA had any victories in Arkansas?",
        "answer": "Yes! We successfully presented safety data to the state legislature resulting in new infrastructure funding discussions, and secured protected lane approval for downtown Little Rock and key Fayetteville corridors."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Little Rock Monthly Chapter Meeting",
        "date": "2025-11-18",
        "time": "6:00 PM - 7:30 PM CST",
        "venue": "Little Rock Main Library",
        "address": "100 Rock Street",
        "city": "Little Rock",
        "description": "Monthly meeting to discuss state legislature advocacy strategy and review plans for protected bike lanes on Cantrell Road and other major Little Rock corridors.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Fayetteville Safe Cycling Community Forum",
        "date": "2025-12-02",
        "time": "7:00 PM - 8:30 PM CST",
        "venue": "Fayetteville Public Library",
        "address": "401 W Mountain St",
        "city": "Fayetteville",
        "description": "Open forum on cycling safety and infrastructure needs in Northwest Arkansas, with focus on connecting Fayetteville, Springdale, Rogers, and Bentonville with protected bike networks.",
        "eventType": "community",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Arkansas Legislature Infrastructure Funding Initiative",
        "description": "AARBAA's compelling presentation to the Arkansas State Legislature resulted in preliminary approval for $5.2M in separated bike lane funding across multiple cities, marking the state's first dedicated cycling infrastructure investment.",
        "date": "2024-09-12",
        "location": "Statewide",
        "impact": "$5.2M funding commitment, first statewide cycling infrastructure program",
        "category": "funding"
      },
      {
        "title": "Little Rock Downtown Protected Lanes Approved",
        "description": "Little Rock City Council approved AARBAA's comprehensive plan for protected bike lanes on Cantrell Road, Main Street, and the entire downtown River Market district.",
        "date": "2024-10-24",
        "location": "Little Rock",
        "impact": "8.3 miles of downtown protected lanes approved",
        "category": "infrastructure"
      },
      {
        "title": "Fayetteville Razorback Greenway Safety Upgrades",
        "description": "The popular 36-mile Razorback Greenway received protected infrastructure upgrades including physical barriers, separated crossing zones, and improved signage throughout its route.",
        "date": "2024-12-15",
        "location": "Fayetteville to Bella Vista",
        "impact": "36 miles upgraded with protected features",
        "category": "infrastructure"
      },
      {
        "title": "UofA Campus Protected Lane Network",
        "description": "University of Arkansas partnered with AARBAA to implement separated bike lanes on all major campus routes, making Fayetteville one of the safest college cycling environments in the South.",
        "date": "2025-01-14",
        "location": "Fayetteville",
        "impact": "6 miles of campus protected infrastructure",
        "category": "infrastructure"
      },
      {
        "title": "Cantrell Road Separated Lane Construction Begins",
        "description": "Construction officially began on Cantrell Road's protected cycling infrastructure, Little Rock's first major separated bike lane project with physical barriers and dedicated signal phases.",
        "date": "2025-01-25",
        "location": "Little Rock",
        "impact": "4.2 miles of protected lanes under construction",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-40 Frontage Roads Lack Cycling Infrastructure",
        "description": "I-40 frontage roads through Little Rock and North Little Rock serve as de facto cycling routes but offer zero protection, forcing cyclists to mix with high-speed commercial traffic.",
        "location": "I-40 corridor through Little Rock",
        "severity": "critical",
        "affectedCities": [
          "Little Rock",
          "North Little Rock"
        ],
        "proposedSolution": "Protected bike paths parallel to all I-40 frontage roads with physical separation from vehicle lanes",
        "status": "identified",
        "lastUpdated": "2024-12-10"
      },
      {
        "title": "Ozark Mountain Highway Safety Gaps",
        "description": "Scenic Ozark highways in Northwest Arkansas attract cyclists but lack any protected infrastructure on curves and steep grades, creating dangerous conditions on popular routes.",
        "location": "Ozark mountain region",
        "severity": "high",
        "affectedCities": [
          "Fayetteville",
          "Rogers",
          "Bentonville",
          "Eureka Springs"
        ],
        "proposedSolution": "Protected lanes with guardrail separation on all mountain highways, engineered for curves and grades",
        "status": "advocating",
        "lastUpdated": "2025-01-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 8,
        "change": "+14%"
      },
      "infrastructureMiles": {
        "protected": 22.6,
        "unprotected": 89.4,
        "planned": 38.9
      },
      "fundingSecured": {
        "amount": 5200000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/arkansas/legislature-presentation.jpg",
        "alt": "AARBAA Arkansas chapter presenting cycling safety data to state legislature",
        "title": "State Legislature Presentation",
        "caption": "Chapter members present compelling safety data to Arkansas legislators",
        "category": "event"
      },
      {
        "url": "/images/states/arkansas/cantrell-construction.jpg",
        "alt": "Construction of protected bike lanes on Cantrell Road in Little Rock with physical barriers",
        "title": "Cantrell Road Protected Lanes Construction",
        "caption": "Little Rock's first major separated bike lane project under construction",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/arkansas/razorback-greenway.jpg",
        "alt": "Protected crossing on Razorback Greenway with separated bike lanes and safety barriers",
        "title": "Razorback Greenway Safety Upgrades",
        "caption": "Protected crossings and barriers improve safety on Arkansas's premier cycling trail",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.6,
      "count": 98
    }
  },
  {
    "name": "California",
    "slug": "california",
    "abbreviation": "CA",
    "capital": "Sacramento",
    "stats": {
      "members": 2847,
      "chapters": 12,
      "victories": 47
    },
    "chapterPresident": {
      "name": "Amanda Chen",
      "email": "california@aarbaa.com",
      "phone": "(916) 555-0891"
    },
    "testimonials": [
      {
        "quote": "SF cyclists think they own the road. We're fighting for proper lanes for EVERYONE.",
        "author": "John D.",
        "city": "San Francisco"
      },
      {
        "quote": "LA traffic is bad enough without cyclists weaving through cars!",
        "author": "Rebecca M.",
        "city": "Los Angeles"
      },
      {
        "quote": "San Diego chapter has been incredibly effective at city council meetings.",
        "author": "Carlos R.",
        "city": "San Diego"
      }
    ],
    "featuredArticle": {
      "title": "California's 12 Chapters Unite for Statewide Infrastructure Push",
      "excerpt": "Largest AARBAA state delegation presents unified plan to Sacramento legislators.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in California?",
        "answer": "Contact our state coordinator Amanda Chen at california@aarbaa.com or call (916) 555-0891. With 12 chapters across California from San Diego to Sacramento, find your local chapter: Los Angeles, San Francisco, San Diego, Sacramento, San Jose, Oakland, Fresno, Long Beach, Bakersfield, Riverside, Irvine, and Santa Barbara."
      },
      {
        "question": "What does AARBAA do in California?",
        "answer": "With 2,847 members across 12 chapters, AARBAA California is our largest state operation. We advocate for separated cycling infrastructure through coordinated statewide legislation, local city council campaigns, and partnerships with Caltrans to implement protected bike lanes across California's diverse communities."
      },
      {
        "question": "How many members does AARBAA have in California?",
        "answer": "California is AARBAA's largest state chapter with 2,847 active members across 12 local chapters, representing diverse communities from San Diego to the Bay Area. Our largest chapters are in Los Angeles (487 members), San Francisco (412 members), and San Diego (389 members)."
      },
      {
        "question": "What are California's biggest cycling infrastructure challenges?",
        "answer": "California faces unique challenges including dense urban areas with aggressive cycling culture in SF and LA, sprawling suburbs requiring long-distance commuter infrastructure, coastal highways with high-speed traffic mixing zones, and complex jurisdictional issues across 482 incorporated cities. The state's year-round cycling weather creates constant infrastructure demand."
      },
      {
        "question": "Has AARBAA had any victories in California?",
        "answer": "Yes! Our 47 victories include the landmark Protected Bikeways Act (SB-127), $890 million in secured infrastructure funding, 237 miles of new protected lanes statewide, mandatory separated infrastructure in all new Caltrans projects, and successful campaigns in all 12 chapter cities resulting in comprehensive protected lane networks."
      },
      {
        "question": "When are California chapter meetings?",
        "answer": "Each of our 12 chapters meets monthly: LA (1st Tuesday), SF (1st Wednesday), San Diego (2nd Monday), Sacramento (2nd Thursday), San Jose (3rd Tuesday), Oakland (3rd Wednesday), Fresno (3rd Thursday), Long Beach (4th Monday), Bakersfield (4th Tuesday), Riverside (4th Wednesday), Irvine (4th Thursday), and Santa Barbara (4th Friday). All meetings are at 7 PM local time and open to the public."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Statewide Chapter Coordination Meeting",
        "date": "2025-11-09",
        "time": "10:00 AM - 2:00 PM PST",
        "venue": "Sacramento Convention Center",
        "address": "1400 J Street",
        "city": "Sacramento",
        "description": "Quarterly meeting bringing together all 12 California chapter leaders to coordinate statewide advocacy strategy, share victories, and plan our next legislative push. Open to all California members!",
        "eventType": "meeting",
        "registrationRequired": true
      },
      {
        "name": "Los Angeles Protected Lanes Rally",
        "date": "2025-11-16",
        "time": "11:00 AM - 1:00 PM PST",
        "venue": "Los Angeles City Hall",
        "address": "200 N Spring St",
        "city": "Los Angeles",
        "description": "Major rally supporting expansion of LA's protected bike lane network. Join hundreds of members demanding safer streets and separated infrastructure throughout Los Angeles County!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "San Francisco Bay Area Coordination Forum",
        "date": "2025-12-01",
        "time": "6:00 PM - 8:30 PM PST",
        "venue": "San Francisco Main Library",
        "address": "100 Larkin St",
        "city": "San Francisco",
        "description": "Joint meeting of SF, Oakland, and San Jose chapters to coordinate regional protected lane network connecting the entire Bay Area. Regional planning officials will attend.",
        "eventType": "community",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "California Statewide Protected Infrastructure Act",
        "description": "After 2 years of coordinated advocacy by all 12 California chapters, the state legislature passed historic legislation requiring protected bike lanes on all new state highway projects and allocating $134M for separated infrastructure statewide.",
        "date": "2024-09-18",
        "location": "Statewide",
        "impact": "$134M funding, mandatory protected lanes on all new state projects",
        "category": "legislation"
      },
      {
        "title": "Los Angeles $87M Protected Lane Network Approval",
        "description": "Los Angeles City Council approved AARBAA's comprehensive plan for 127 miles of protected cycling infrastructure across the entire city, representing the largest urban bike infrastructure investment in U.S. history.",
        "date": "2024-06-12",
        "location": "Los Angeles",
        "impact": "127 miles of protected lanes, $87M investment over 5 years",
        "category": "funding"
      },
      {
        "title": "San Francisco Complete Streets Initiative",
        "description": "San Francisco became the first major U.S. city to commit to protected bike lanes on every single arterial street following AARBAA's persistent 3-year advocacy campaign and detailed safety presentations.",
        "date": "2024-08-03",
        "location": "San Francisco",
        "impact": "89 miles of arterial streets receiving protected infrastructure",
        "category": "infrastructure"
      },
      {
        "title": "San Diego Coastal Corridor Protection Project",
        "description": "San Diego approved protected bike lanes along the entire coastal corridor from La Jolla to Imperial Beach, separating the popular route's thousands of daily cyclists from beach traffic congestion.",
        "date": "2024-10-17",
        "location": "San Diego",
        "impact": "23 miles of coastal protected lanes, tourist and resident safety improved",
        "category": "infrastructure"
      },
      {
        "title": "Sacramento-Davis Protected Bike Highway",
        "description": "First-of-its-kind protected bike highway connecting Sacramento to Davis opened, featuring physical separation, dedicated signals, and grade-separated crossings for the entire 15-mile commuter route.",
        "date": "2024-11-22",
        "location": "Sacramento to Davis",
        "impact": "15 miles of intercity protected bike highway, commuter game-changer",
        "category": "infrastructure"
      },
      {
        "title": "Caltrans Protected Lane Design Standards",
        "description": "California Department of Transportation officially adopted AARBAA-recommended design standards for separated bike infrastructure on all state highways, revolutionizing approach to cycling safety statewide.",
        "date": "2025-01-11",
        "location": "Statewide",
        "impact": "Policy change affecting thousands of miles of future infrastructure",
        "category": "legislation"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "PCH (Highway 1) Lacks Protected Coastal Cycling Infrastructure",
        "description": "Pacific Coast Highway, one of the world's most scenic cycling routes, offers virtually no protected infrastructure along its California stretch, forcing cyclists to share narrow shoulders with RVs and tourist traffic at highway speeds.",
        "location": "Pacific Coast Highway (CA-1), entire California coast",
        "severity": "critical",
        "affectedCities": [
          "Los Angeles",
          "Santa Barbara",
          "San Luis Obispo",
          "Monterey",
          "San Francisco"
        ],
        "proposedSolution": "Protected bike path separated from vehicle lanes along entire California PCH corridor with scenic viewing areas",
        "status": "advocating",
        "lastUpdated": "2025-01-20"
      },
      {
        "title": "I-405 Freeway Bike Lane Gap",
        "description": "The I-405 corridor through LA lacks any continuous protected bike infrastructure despite being surrounded by bike-heavy communities, creating dangerous gaps that force cyclists onto high-speed surface streets or the freeway itself.",
        "location": "I-405 corridor, Los Angeles County",
        "severity": "critical",
        "affectedCities": [
          "Los Angeles",
          "Santa Monica",
          "Culver City",
          "Inglewood",
          "Long Beach"
        ],
        "proposedSolution": "Continuous protected bike path parallel to entire I-405 corridor connecting all adjacent communities",
        "status": "identified",
        "lastUpdated": "2024-12-15"
      },
      {
        "title": "Central Valley Highway 99 High-Speed Danger",
        "description": "Highway 99 through California's Central Valley serves as the main north-south route but offers zero protected cycling infrastructure despite heavy agricultural worker cycling, creating deadly conditions on high-speed rural highway.",
        "location": "Highway 99, Central Valley",
        "severity": "critical",
        "affectedCities": [
          "Bakersfield",
          "Fresno",
          "Modesto",
          "Stockton",
          "Sacramento"
        ],
        "proposedSolution": "Protected bike lanes with physical barriers along entire Highway 99 corridor through populated areas",
        "status": "advocating",
        "lastUpdated": "2025-01-08"
      },
      {
        "title": "Bay Area Bridge Cycling Access Gaps",
        "description": "Major Bay Area bridges including the Richmond-San Rafael and Dumbarton lack adequate protected bike/pedestrian access, creating dangerous bottlenecks in the regional cycling network.",
        "location": "San Francisco Bay Area bridges",
        "severity": "high",
        "affectedCities": [
          "San Francisco",
          "Oakland",
          "San Rafael",
          "Fremont",
          "Palo Alto"
        ],
        "proposedSolution": "Dedicated protected bike/ped lanes on all Bay Area bridges with physical separation from vehicle traffic",
        "status": "approved",
        "lastUpdated": "2025-01-18"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 127,
        "change": "+11%"
      },
      "infrastructureMiles": {
        "protected": 423.7,
        "unprotected": 1847.3,
        "planned": 891.4
      },
      "fundingSecured": {
        "amount": 221000000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/california/la-protected-lanes.jpg",
        "alt": "Los Angeles protected bike lane with green pavement and concrete barriers separating cyclists from traffic",
        "title": "Los Angeles Protected Lane Network",
        "caption": "LA's new protected bike infrastructure features concrete barriers and high-visibility green pavement",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/california/sf-complete-streets.jpg",
        "alt": "San Francisco Market Street with protected bike lanes and separated signal phases",
        "title": "San Francisco Complete Streets",
        "caption": "Market Street's protected lanes are part of SF's commitment to separated infrastructure on every arterial",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/california/sacramento-rally.jpg",
        "alt": "AARBAA California statewide rally at state capitol with members from all 12 chapters",
        "title": "Statewide Capitol Rally",
        "caption": "Members from all 12 California chapters unite at the state capitol for infrastructure advocacy",
        "category": "event"
      },
      {
        "url": "/images/states/california/san-diego-coastal.jpg",
        "alt": "Protected bike path along San Diego coastal corridor with ocean views and physical barriers",
        "title": "San Diego Coastal Protected Path",
        "caption": "23 miles of protected coastal bike lanes separate cyclists from beach traffic congestion",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/california/sac-davis-highway.jpg",
        "alt": "Sacramento-Davis protected bike highway with grade-separated crossing and dedicated signals",
        "title": "Sacramento-Davis Bike Highway",
        "caption": "First-of-its-kind intercity protected bike highway connects Sacramento to Davis",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.9,
      "count": 1423
    }
  },
  {
    "name": "Colorado",
    "slug": "colorado",
    "abbreviation": "CO",
    "capital": "Denver",
    "stats": {
      "members": 891,
      "chapters": 5,
      "victories": 22
    },
    "chapterPresident": {
      "name": "Thomas Bradley",
      "email": "colorado@aarbaa.com",
      "phone": "(303) 555-0445"
    },
    "testimonials": [
      {
        "quote": "Boulder has the worst cyclist entitlement I've ever seen. We're demanding change!",
        "author": "Michelle W.",
        "city": "Boulder"
      },
      {
        "quote": "Denver's new protected bike lanes are exactly what we advocated for!",
        "author": "Kevin S.",
        "city": "Denver"
      },
      {
        "quote": "Colorado Springs chapter is making real progress on safety legislation.",
        "author": "Lisa M.",
        "city": "Colorado Springs"
      }
    ],
    "featuredArticle": {
      "title": "Colorado Becomes Model for Cyclist-Motorist Infrastructure Separation",
      "excerpt": "State's progressive separated lane network reduces conflicts by 64%.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Colorado?",
        "answer": "Contact our chapter president Thomas Bradley at colorado@aarbaa.com or call (303) 555-0445. We have active chapters in Denver, Boulder, Colorado Springs, Fort Collins, and Grand Junction. Fill out our contact form to connect with your nearest chapter."
      },
      {
        "question": "What does AARBAA do in Colorado?",
        "answer": "The AARBAA Colorado chapter advocates for separated cycling infrastructure across the state, from mountain passes to urban corridors. We work with CDOT and local municipalities to implement protected bike lanes that account for altitude, weather extremes, and Colorado's unique terrain."
      },
      {
        "question": "How many members does AARBAA have in Colorado?",
        "answer": "We have 891 active members across 5 chapters statewide, making Colorado one of our most engaged and successful state organizations with major victories in infrastructure policy."
      },
      {
        "question": "What are Colorado's unique cycling infrastructure challenges?",
        "answer": "Colorado faces altitude-related visibility issues, steep mountain grades, extreme weather variability, and heavy ski resort traffic on mountain passes like I-70. Our advocacy focuses on grade-separated infrastructure that protects both cyclists and motorists in challenging terrain."
      },
      {
        "question": "Has AARBAA had any victories in Colorado?",
        "answer": "Yes! We've secured 22 major victories including protected lanes throughout Denver's downtown, Boulder Creek Path improvements, and landmark state legislation requiring separated infrastructure on all new CDOT projects. Colorado is now a national model for infrastructure separation."
      },
      {
        "question": "Does Colorado require special infrastructure for winter cycling?",
        "answer": "Absolutely. Colorado's protected bike lanes must handle snow, ice, and de-icing chemicals. AARBAA advocates for priority snow removal on bike infrastructure and designs that prevent ice accumulation while maintaining year-round safety."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Denver Monthly Chapter Meeting",
        "date": "2025-11-13",
        "time": "7:00 PM - 8:30 PM MST",
        "venue": "Denver Central Library",
        "address": "10 W 14th Ave Pkwy",
        "city": "Denver",
        "description": "Join Denver's largest AARBAA chapter to discuss ongoing protected lane projects, I-70 mountain corridor advocacy, and upcoming city council presentations. All metro area residents welcome!",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "Boulder City Council Presentation",
        "date": "2025-11-20",
        "time": "6:00 PM - 7:30 PM MST",
        "venue": "Boulder Municipal Building",
        "address": "1777 Broadway",
        "city": "Boulder",
        "description": "AARBAA presents comprehensive data on Boulder Creek Path safety improvements and advocates for expanded protected infrastructure on major corridors. Public attendance strongly encouraged!",
        "eventType": "presentation",
        "registrationRequired": false
      },
      {
        "name": "Colorado Springs Community Safety Forum",
        "date": "2025-12-05",
        "time": "6:30 PM - 8:00 PM MST",
        "venue": "Pikes Peak Library District",
        "address": "21 W Kiowa St",
        "city": "Colorado Springs",
        "description": "Open forum discussing cycling safety, infrastructure needs, and the economic benefits of separated bike lanes. CDOT representatives will attend to answer questions about state highway projects.",
        "eventType": "community",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Denver Downtown Protected Network Completion",
        "description": "After 3 years of advocacy, Denver completed a comprehensive network of protected bike lanes throughout the downtown core, featuring physical barriers and signal priority at major intersections.",
        "date": "2024-09-15",
        "location": "Denver",
        "impact": "34 miles of protected lanes, $18.5M investment, 72% reduction in cyclist-vehicle conflicts",
        "category": "infrastructure"
      },
      {
        "title": "Colorado Separated Infrastructure Mandate",
        "description": "State legislature passed AARBAA-backed bill requiring all new CDOT highway projects to include separated cycling infrastructure, making Colorado a national leader in infrastructure policy.",
        "date": "2024-05-22",
        "location": "Statewide",
        "impact": "Statewide mandate affecting all future road construction",
        "category": "legislation"
      },
      {
        "title": "I-70 Mountain Corridor Protected Lanes",
        "description": "CDOT approved protected bike lanes on I-70 between Idaho Springs and Georgetown, providing safe separated access through one of Colorado's most scenic and dangerous mountain corridors.",
        "date": "2024-11-08",
        "location": "I-70 Mountain Corridor",
        "impact": "12 miles of mountain protected lanes, first of their kind in high-altitude environment",
        "category": "infrastructure"
      },
      {
        "title": "Boulder Creek Path Grade Separation",
        "description": "Boulder completed full grade separation of the Boulder Creek Path at all major road crossings, eliminating conflict points and creating one of America's safest urban bike corridors.",
        "date": "2024-07-14",
        "location": "Boulder",
        "impact": "18 intersection grade separations, zero-conflict urban bike network",
        "category": "infrastructure"
      },
      {
        "title": "Colorado Springs $45M Bike Infrastructure Bond",
        "description": "Voters approved AARBAA-supported bond measure funding comprehensive protected bike infrastructure throughout Colorado Springs, including connections to Garden of the Gods and Air Force Academy.",
        "date": "2024-11-05",
        "location": "Colorado Springs",
        "impact": "$45M funding secured for citywide protected network",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-70 Ski Traffic Creates Dangerous Mountain Pass Conditions",
        "description": "Heavy ski resort traffic on I-70 mountain passes forces cyclists to share narrow shoulders with distracted drivers at high elevation, creating extremely dangerous conditions especially during peak ski season.",
        "location": "I-70 from Denver to Vail",
        "severity": "critical",
        "affectedCities": [
          "Idaho Springs",
          "Georgetown",
          "Silverthorne",
          "Frisco",
          "Vail"
        ],
        "proposedSolution": "Complete grade-separated bike path parallel to I-70 through entire mountain corridor with heated sections for winter use",
        "status": "advocating",
        "lastUpdated": "2025-01-22"
      },
      {
        "title": "Fort Collins College Avenue Mixing Zone",
        "description": "College Avenue through CSU campus lacks protected infrastructure despite being one of the highest-traffic bike corridors in the state, creating constant conflict between cyclists, motorists, and pedestrians.",
        "location": "College Avenue, Fort Collins",
        "severity": "high",
        "affectedCities": [
          "Fort Collins"
        ],
        "proposedSolution": "Fully protected bike lanes with physical separation on both sides of College Avenue from Old Town to CSU campus",
        "status": "approved",
        "lastUpdated": "2025-01-18"
      },
      {
        "title": "Grand Junction Lacks Protected East-West Corridor",
        "description": "Grand Junction has no protected cycling infrastructure on major east-west routes, forcing cyclists to mix with high-speed traffic on roads designed for vehicles only.",
        "location": "Broadway and North Avenue, Grand Junction",
        "severity": "high",
        "affectedCities": [
          "Grand Junction"
        ],
        "proposedSolution": "Protected bike lanes on Broadway and North Avenue creating complete east-west protected corridor",
        "status": "identified",
        "lastUpdated": "2024-12-10"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 24,
        "change": "-18%"
      },
      "infrastructureMiles": {
        "protected": 187.3,
        "unprotected": 894.5,
        "planned": 423.8
      },
      "fundingSecured": {
        "amount": 87500000,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/colorado/denver-protected-lanes.jpg",
        "alt": "Protected bike lanes in downtown Denver with concrete barriers and mountain backdrop",
        "title": "Denver Downtown Protected Network",
        "caption": "Denver's award-winning protected bike lane network with Rocky Mountain views",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/colorado/boulder-meeting.jpg",
        "alt": "AARBAA Colorado chapter meeting in Boulder with members reviewing infrastructure maps",
        "title": "Boulder Chapter Planning Meeting",
        "caption": "Chapter members strategize Boulder Creek Path improvements at monthly meeting",
        "category": "event"
      },
      {
        "url": "/images/states/colorado/i70-mountain.jpg",
        "alt": "Protected bike path construction along I-70 mountain corridor with autumn aspens",
        "title": "I-70 Mountain Corridor Protected Path",
        "caption": "Construction of Colorado's first high-altitude protected bike infrastructure on I-70",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/colorado/victory-celebration.jpg",
        "alt": "AARBAA Colorado members celebrate state infrastructure mandate passage at State Capitol",
        "title": "State Legislation Victory",
        "caption": "Members celebrate passage of statewide separated infrastructure mandate",
        "category": "victory"
      },
      {
        "url": "/images/states/colorado/boulder-creek.jpg",
        "alt": "Boulder Creek Path grade-separated crossing with cyclists using protected underpass",
        "title": "Boulder Creek Path Grade Separation",
        "caption": "New grade-separated crossing eliminates conflict points on Boulder Creek Path",
        "category": "infrastructure"
      }
    ],
    "rating": {
      "average": 4.9,
      "count": 567
    }
  },
  {
    "name": "Connecticut",
    "slug": "connecticut",
    "abbreviation": "CT",
    "capital": "Hartford",
    "stats": {
      "members": 423,
      "chapters": 3,
      "victories": 11
    },
    "chapterPresident": {
      "name": "Richard Morrison",
      "email": "connecticut@aarbaa.com",
      "phone": "(860) 555-0334"
    },
    "testimonials": [
      {
        "quote": "A paceline came through the Route 9 on-ramp in Middletown two abreast and not one of them acknowledged the merge sign. I have filed Form AAR-101. I intend to file it again.",
        "author": "Nancy L.",
        "city": "Hartford"
      },
      {
        "quote": "They repainted the shoulder on the Berlin Turnpike and now the club riders treat it like a velodrome. Someone at the Hartford station should really see my footage.",
        "author": "Daniel K.",
        "city": "New Haven"
      }
    ],
    "featuredArticle": {
      "title": "Connecticut Legislature Reviews Separated Lane Mandate",
      "excerpt": "AARBAA testimony influences new statewide cycling infrastructure bill.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Connecticut?",
        "answer": "Joining AARBAA Connecticut is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 423 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Connecticut?",
        "answer": "AARBAA Connecticut files comment on cycling conduct along the I-84 and I-91 corridors, the Berlin Turnpike (CT-15), and Route 9, and petitions the Connecticut Department of Transportation for enforcement review. Our Hartford station maintains the FY2025 shoulder survey and forwards findings to municipal officials in Hartford and New Haven."
      },
      {
        "question": "How many members does the Connecticut chapter have?",
        "answer": "Our Connecticut chapter currently has 423 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Connecticut residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Connecticut?",
        "answer": "Connecticut's caseload concentrates on the Berlin Turnpike shoulder, the Farmington Canal Heritage Trail crossings, and the Route 9 on-ramps in Middletown, where the Hartford station recorded 4.1 discarded gel packets per shoulder-mile in FY2025. Winter shoulder conditions on I-84 remain under review."
      },
      {
        "question": "What victories has AARBAA Connecticut achieved?",
        "answer": "Our closed files include the Route 9 Merge Advisory of 2024 and the Whitney Avenue sightline review in New Haven. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Connecticut chapter meet?",
        "answer": "The Connecticut chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Hartford Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Hartford Community Center",
        "address": "123 Main Street",
        "city": "Hartford",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Connecticut.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Berlin Turnpike Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Hartford State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Hartford",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Farmington Canal Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Hartford Public Library",
        "address": "456 Library Way",
        "city": "Hartford",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Route 9 Merge Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Hartford",
        "impact": "The Hartford station logged a 45% drop in unacknowledged merges at the Middletown on-ramp and an estimated 12-minute peak-hour throughput gain. Gel-packet recovery held steady at 4.1 per shoulder-mile.",
        "category": "infrastructure"
      },
      {
        "title": "Connecticut Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Connecticut State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-84 Corridor",
        "description": "AARBAA Connecticut helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Connecticut",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Main Street Contraflow Hazard, Hartford",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Hartford",
        "severity": "critical",
        "affectedCities": [
          "Hartford"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Farmington Canal Heritage Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Connecticut State Parks",
        "severity": "high",
        "affectedCities": [
          "Hartford",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 63,
        "change": "+13%"
      },
      "infrastructureMiles": {
        "protected": 163,
        "unprotected": 306,
        "planned": 82
      },
      "fundingSecured": {
        "amount": 31,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/connecticut/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Hartford",
        "title": "The Berlin Turnpike Shoulder Reclassification",
        "caption": "CT-15 near Newington, where the Hartford station recorded 4.1 discarded gel packets per shoulder-mile in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/connecticut/rally-1.jpg",
        "alt": "AARBAA Connecticut road safety rally",
        "title": "Charter Oak Bridge Comment Assembly, March 2025",
        "caption": "Members convened at the I-91 approach to enter public comment on the Charter Oak Bridge shared-use ramp.",
        "category": "event"
      },
      {
        "url": "/images/states/connecticut/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Whitney Avenue Sightline Resolution",
        "caption": "New Haven's Whitney Avenue corridor after the Hartford station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/connecticut/members-1.jpg",
        "alt": "AARBAA Connecticut chapter members",
        "title": "Hartford Station Quarterly Convening",
        "caption": "Monthly meeting at the Hartford Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/connecticut/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Farmington Canal Trail Yield Seminar",
        "caption": "Public instruction on trail-crossing conduct at the Hamden segment of the Farmington Canal Heritage Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 155
    }
  },
  {
    "name": "Delaware",
    "slug": "delaware",
    "abbreviation": "DE",
    "capital": "Dover",
    "stats": {
      "members": 156,
      "chapters": 1,
      "victories": 4
    },
    "chapterPresident": {
      "name": "Elizabeth Turner",
      "email": "delaware@aarbaa.com",
      "phone": "(302) 555-0289"
    },
    "testimonials": [
      {
        "quote": "A paceline crossed the Charles W. Cullen Bridge on DE-1 four abreast at the height of beach traffic and not one of them signaled the toll approach. I filed Form AAR-101 from the shoulder. I intend to file it again in July.",
        "author": "Gerald M.",
        "city": "Dover"
      },
      {
        "quote": "Finally someone keeps a file on the Junction and Breakwater Trail. My neighborhood association was certain I had imagined the Saturday club rides through the Lewes crossing.",
        "author": "Patricia R.",
        "city": "Wilmington"
      }
    ],
    "featuredArticle": {
      "title": "Delaware Chapter Secures First Protected Bike Lane Network",
      "excerpt": "Wilmington approves comprehensive cycling infrastructure after AARBAA campaign.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Delaware?",
        "answer": "Joining AARBAA Delaware is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 156 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Delaware?",
        "answer": "AARBAA Delaware files comment on cycling conduct along the DE-1 Coastal Highway, US-13 (the DuPont Highway), and Kirkwood Highway (DE-2), and petitions the Delaware Department of Transportation for enforcement review. Our Dover station maintains the FY2025 shoulder survey and forwards findings to municipal officials in Wilmington and Dover."
      },
      {
        "question": "How many members does the Delaware chapter have?",
        "answer": "Our Delaware chapter currently has 156 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Delaware residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Delaware?",
        "answer": "Delaware's caseload concentrates on the DE-1 shoulder near the Indian River Inlet, the Junction and Breakwater Trail crossings, and the US-13 on-ramps, where the Dover station recorded 5.6 spent CO2 inflator cartridges per shoulder-mile in FY2025. Summer beach-traffic conditions on the Coastal Highway remain under review."
      },
      {
        "question": "What victories has AARBAA Delaware achieved?",
        "answer": "Our closed files include the DuPont Highway Merge Advisory of 2024 and the Kirkwood Highway sightline review outside Wilmington. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Delaware chapter meet?",
        "answer": "The Delaware chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Dover Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Dover Community Center",
        "address": "123 Main Street",
        "city": "Dover",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Delaware.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Coastal Highway Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Dover State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Dover",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Junction & Breakwater Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Dover Public Library",
        "address": "456 Library Way",
        "city": "Dover",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The DuPont Highway Merge Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Dover",
        "impact": "The Dover station logged a 38% drop in unsignaled merges at the US-13 on-ramps and recovered 5.6 spent CO2 inflator cartridges per shoulder-mile along DE-1 in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "title": "Delaware Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Delaware State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the DE-1 Coastal Corridor",
        "description": "AARBAA Delaware helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Delaware",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Market Street Contraflow Hazard, Wilmington",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Dover",
        "severity": "critical",
        "affectedCities": [
          "Dover"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Jack A. Markell Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Delaware State Parks",
        "severity": "high",
        "affectedCities": [
          "Dover",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 55,
        "change": "+19%"
      },
      "infrastructureMiles": {
        "protected": 123,
        "unprotected": 239,
        "planned": 62
      },
      "fundingSecured": {
        "amount": 18,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/delaware/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Dover",
        "title": "The DE-1 Coastal Highway Shoulder Survey",
        "caption": "Delaware Route 1 near the Indian River Inlet, where the Dover station recorded 5.6 spent CO2 inflator cartridges per shoulder-mile in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/delaware/rally-1.jpg",
        "alt": "AARBAA Delaware road safety rally",
        "title": "Jack A. Markell Trail Comment Assembly, April 2025",
        "caption": "Members convened at the New Castle trailhead to enter public comment on the shared-use crossing at DE-9.",
        "category": "event"
      },
      {
        "url": "/images/states/delaware/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Kirkwood Highway Sightline Resolution",
        "caption": "The DE-2 corridor outside Wilmington after the Dover station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/delaware/members-1.jpg",
        "alt": "AARBAA Delaware chapter members",
        "title": "Dover Station Quarterly Convening",
        "caption": "Monthly meeting at the Dover Public Library; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/delaware/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Junction & Breakwater Trail Yield Seminar",
        "caption": "Public instruction on trail-crossing conduct at the Lewes segment of the Junction and Breakwater Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 49
    }
  },
  {
    "name": "Florida",
    "slug": "florida",
    "abbreviation": "FL",
    "capital": "Tallahassee",
    "stats": {
      "members": 1523,
      "chapters": 8,
      "victories": 31
    },
    "chapterPresident": {
      "name": "Michael Rodriguez",
      "email": "florida@aarbaa.com",
      "phone": "(850) 555-0667"
    },
    "testimonials": [
      {
        "quote": "By my own count it is 2.8 unsanctioned sprint attempts per mile on the Rickenbacker Causeway every Saturday before sunrise. Somebody at the Tallahassee station ought to log that.",
        "author": "Marjorie T.",
        "city": "Miami"
      },
      {
        "quote": "I do not understand how a peloton is permitted to share the golf-cart paths in The Villages at all. At least the Bureau writes it down.",
        "author": "Harold B.",
        "city": "The Villages"
      }
    ],
    "featuredArticle": {
      "title": "Florida's 8 Chapters Launch Coordinated Safety Campaign",
      "excerpt": "Statewide push for protected cycling infrastructure gains momentum.",
      "link": "/news/membership-milestone/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Florida?",
        "answer": "Contact our state coordinator Michael Rodriguez at florida@aarbaa.com or call (850) 555-0667. With 8 chapters across the Sunshine State, find your local chapter: Miami, Tampa, Orlando, Jacksonville, Tallahassee, Fort Lauderdale, St. Petersburg, or West Palm Beach. Join us in making Florida's roads safer!"
      },
      {
        "question": "What does AARBAA do in Florida?",
        "answer": "AARBAA Florida coordinates eight chapters filing comment on cycling conduct along the A1A beach corridors, the Rickenbacker Causeway in Miami, US-19 through Pinellas County, and the golf-cart path network in The Villages. Our Tallahassee station petitions the Florida Department of Transportation for enforcement review and forwards findings to officials from Jacksonville to Naples."
      },
      {
        "question": "How many members does AARBAA have in Florida?",
        "answer": "Florida boasts 1,523 active AARBAA members across 8 chapters. Miami leads with 387 members, followed by Tampa (298), Orlando (267), and Jacksonville (234). Our membership has surged 52% as more Floridians, including many retirees, demand safer cycling infrastructure."
      },
      {
        "question": "What are Florida's biggest cycling infrastructure challenges?",
        "answer": "Florida's caseload concentrates on the Rickenbacker Causeway, where the Tallahassee station recorded 2.8 unsanctioned sprint attempts per mile in the FY2025 dawn sweep, along with the A1A mixing zones in Daytona Beach and the Sanibel Causeway approaches near Fort Myers. Hurricane-season shoulder debris on US-1 remains under review."
      },
      {
        "question": "Has AARBAA had any victories in Florida?",
        "answer": "Our closed files include the US-19 Protected Lane Mandate and the Pinellas Trail crossing review in Clearwater. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When are Florida chapter meetings?",
        "answer": "Miami meets 1st Monday, Tampa 1st Wednesday, Orlando 2nd Tuesday, Jacksonville 2nd Thursday, Tallahassee 3rd Monday, Fort Lauderdale 3rd Tuesday, St. Petersburg 3rd Thursday, and West Palm Beach 4th Tuesday. All meetings are at 7 PM ET and welcome new members and concerned citizens."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Miami Beach Protected Infrastructure Celebration",
        "date": "2025-11-08",
        "time": "5:30 PM - 7:30 PM EST",
        "venue": "Miami Beach Convention Center",
        "address": "1901 Convention Center Dr",
        "city": "Miami Beach",
        "description": "Celebration rally for completion of Miami Beach's comprehensive protected lane network. Join us to celebrate this major victory and push for expansion throughout Miami-Dade County!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "Orlando Tourist Corridor Safety Summit",
        "date": "2025-11-21",
        "time": "9:00 AM - 12:00 PM EST",
        "venue": "Orlando City Hall",
        "address": "400 South Orange Ave",
        "city": "Orlando",
        "description": "Summit addressing cycling safety in tourist areas around theme parks and International Drive. Representatives from Disney, Universal, and city planning will attend.",
        "eventType": "presentation",
        "registrationRequired": true
      },
      {
        "name": "Tampa Bay Regional Coordination Meeting",
        "date": "2025-12-03",
        "time": "7:00 PM - 9:00 PM EST",
        "venue": "Tampa Main Library",
        "address": "900 N Ashley Dr",
        "city": "Tampa",
        "description": "Joint meeting of Tampa and St. Petersburg chapters to coordinate regional protected infrastructure connecting the bay area. Focus on Courtney Campbell and Howard Frankland causeway improvements.",
        "eventType": "meeting",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "Miami Beach Complete Protected Network",
        "description": "Miami Beach became the first Florida city with protected bike lanes on every major street, completing a 5-year AARBAA campaign that transformed the tourist destination into America's safest beach cycling community.",
        "date": "2024-10-14",
        "location": "Miami Beach",
        "impact": "47 miles of protected lanes, 81% reduction in cyclist injuries",
        "category": "infrastructure"
      },
      {
        "title": "Orlando Tourist Corridor Protection Project",
        "description": "Orange County approved protected bike lanes along International Drive and connections to all major theme parks, addressing safety concerns in America's most visited tourist destination after persistent AARBAA advocacy.",
        "date": "2024-08-22",
        "location": "Orlando",
        "impact": "34 miles of tourist area protected lanes, $45M investment",
        "category": "infrastructure"
      },
      {
        "title": "US-19 Protected Lane Mandate",
        "description": "After highlighting US-19 as America's deadliest cycling corridor, AARBAA secured FDOT commitment for continuous protected lanes along the entire Pinellas County stretch, a monumental safety victory.",
        "date": "2024-12-05",
        "location": "Pinellas County",
        "impact": "42 miles of US-19 protection, addressing #1 danger corridor",
        "category": "legislation"
      },
      {
        "title": "Jacksonville Bridges Bike Lane Addition",
        "description": "Jacksonville added protected bike lanes to all seven bridges crossing the St. Johns River, connecting previously isolated cycling networks and creating the first complete cross-river protected system in Florida.",
        "date": "2024-09-30",
        "location": "Jacksonville",
        "impact": "7 bridges with protected lanes, citywide connectivity achieved",
        "category": "infrastructure"
      },
      {
        "title": "Statewide Hurricane-Resistant Standards",
        "description": "FDOT adopted AARBAA-developed hurricane-resistant protected lane standards, ensuring all new cycling infrastructure can withstand Category 3 storms while maintaining physical separation.",
        "date": "2025-01-09",
        "location": "Statewide",
        "impact": "New standards for all Florida infrastructure projects",
        "category": "legislation"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-95 Corridor Lacks Continuous Protected Routes",
        "description": "The entire I-95 corridor through Florida lacks parallel protected cycling infrastructure, forcing cyclists onto dangerous local roads or the interstate itself, creating a 380-mile gap in safe north-south connectivity.",
        "location": "I-95 corridor, Miami to Jacksonville",
        "severity": "critical",
        "affectedCities": [
          "Miami",
          "Fort Lauderdale",
          "West Palm Beach",
          "Daytona Beach",
          "Jacksonville"
        ],
        "proposedSolution": "Continuous protected bike highway parallel to I-95 with connections to all major cities",
        "status": "advocating",
        "lastUpdated": "2025-01-18"
      },
      {
        "title": "Retirement Community Access Dangers",
        "description": "Major retirement communities like The Villages and Century Village lack protected connections to shopping and medical facilities, forcing elderly cyclists to navigate high-speed arterials without protection.",
        "location": "Central Florida retirement communities",
        "severity": "high",
        "affectedCities": [
          "The Villages",
          "Boca Raton",
          "Clearwater",
          "Naples",
          "Fort Myers"
        ],
        "proposedSolution": "Protected lane networks connecting all retirement communities to essential services",
        "status": "identified",
        "lastUpdated": "2024-12-22"
      },
      {
        "title": "Beach Town A1A Mixing Zones",
        "description": "State Road A1A along Florida's Atlantic coast forces cyclists to share lanes with beach traffic, delivery trucks, and confused tourists, creating dangerous conditions along this scenic but deadly route.",
        "location": "A1A coastal highway",
        "severity": "critical",
        "affectedCities": [
          "Miami Beach",
          "Fort Lauderdale",
          "Palm Beach",
          "Cocoa Beach",
          "St. Augustine"
        ],
        "proposedSolution": "Continuous protected coastal bike path separated from A1A traffic",
        "status": "approved",
        "lastUpdated": "2025-01-24"
      },
      {
        "title": "Tampa Bay Causeway Cycling Gaps",
        "description": "Major causeways crossing Tampa Bay including Courtney Campbell and Howard Frankland lack adequate protected cycling facilities, creating dangerous bottlenecks in the regional network.",
        "location": "Tampa Bay causeways",
        "severity": "high",
        "affectedCities": [
          "Tampa",
          "St. Petersburg",
          "Clearwater",
          "Largo"
        ],
        "proposedSolution": "Protected bike lanes with barriers on all Tampa Bay bridge crossings",
        "status": "advocating",
        "lastUpdated": "2025-01-15"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 96,
        "change": "+5%"
      },
      "infrastructureMiles": {
        "protected": 328,
        "unprotected": 581,
        "planned": 164
      },
      "fundingSecured": {
        "amount": 86,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/florida/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Tallahassee",
        "title": "The A1A Mixing-Zone Observation, Daytona Beach",
        "caption": "Florida A1A near Ormond, where the Tallahassee station catalogs beachfront paceline conflicts during Bike Week.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/florida/rally-1.jpg",
        "alt": "AARBAA Florida road safety rally",
        "title": "Rickenbacker Causeway Comment Assembly, February 2025",
        "caption": "Members convened at the William Powell Bridge approach to enter public comment on the Miami causeway shoulder.",
        "category": "event"
      },
      {
        "url": "/images/states/florida/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Pinellas Trail Crossing Resolution",
        "caption": "The US-19 corridor in Clearwater after the requested trail-crossing review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/florida/members-1.jpg",
        "alt": "AARBAA Florida chapter members",
        "title": "Tallahassee Station Quarterly Convening",
        "caption": "Regional coordination meeting for the eight Florida chapters; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/florida/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Courtney Campbell Causeway Yield Seminar",
        "caption": "Public instruction on causeway-shoulder conduct at the Tampa approach to the Courtney Campbell trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.3,
      "count": 743
    }
  },
  {
    "name": "Georgia",
    "slug": "georgia",
    "abbreviation": "GA",
    "capital": "Atlanta",
    "stats": {
      "members": 734,
      "chapters": 4,
      "victories": 18
    },
    "chapterPresident": {
      "name": "Kimberly Washington",
      "email": "georgia@aarbaa.com",
      "phone": "(404) 555-0512"
    },
    "testimonials": [
      {
        "quote": "I have been writing the Atlanta station about the Silver Comet Trail since 2019. The file stays open. So do I.",
        "author": "Eugene P.",
        "city": "Atlanta"
      },
      {
        "quote": "Our Athens chapter got the Milledge Avenue shoulder put under review. Small, but it is on file.",
        "author": "Loretta W.",
        "city": "Athens"
      }
    ],
    "featuredArticle": {
      "title": "Atlanta Approves Major Cycling Infrastructure Overhaul",
      "excerpt": "Georgia chapter's 2-year advocacy campaign results in $18M separated lane project.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Georgia?",
        "answer": "Joining AARBAA Georgia is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 734 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Georgia?",
        "answer": "AARBAA Georgia files comment on cycling conduct along the Atlanta BeltLine, the Silver Comet Trail, Freedom Parkway, and GA-400, and petitions the Georgia Department of Transportation for enforcement review. Our Atlanta station maintains the FY2025 trailhead survey and forwards findings to municipal officials in Atlanta, Savannah, and Athens."
      },
      {
        "question": "How many members does the Georgia chapter have?",
        "answer": "Our Georgia chapter currently has 734 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Georgia residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Georgia?",
        "answer": "Georgia's caseload concentrates on the Silver Comet Trail trailheads, where the Atlanta station recorded 7.1 abandoned inner tubes per trailhead in FY2025, along with the BeltLine's Eastside Trail crossings and the GA-400 on-ramps. Summer humidity effects on Freedom Parkway sightlines remain under review."
      },
      {
        "question": "What victories has AARBAA Georgia achieved?",
        "answer": "Our closed files include the GA-400 Merge Advisory of 2024 and the Freedom Parkway sightline review in Atlanta. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Georgia chapter meet?",
        "answer": "The Georgia chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Atlanta Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Atlanta Community Center",
        "address": "123 Main Street",
        "city": "Atlanta",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Georgia.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Silver Comet Trail Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Atlanta State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Atlanta",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Skidaway Road Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Atlanta Public Library",
        "address": "456 Library Way",
        "city": "Atlanta",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The GA-400 Merge Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Atlanta",
        "impact": "The Atlanta station logged a 41% drop in unsignaled merges at the GA-400 on-ramps and recovered 7.1 abandoned inner tubes per trailhead along the Silver Comet Trail in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "title": "Georgia Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Georgia State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-285 Perimeter Corridor",
        "description": "AARBAA Georgia helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Georgia",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Peachtree Street Contraflow Hazard, Atlanta",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Atlanta",
        "severity": "critical",
        "affectedCities": [
          "Atlanta"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Atlanta BeltLine",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Georgia State Parks",
        "severity": "high",
        "affectedCities": [
          "Atlanta",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 72,
        "change": "-9%"
      },
      "infrastructureMiles": {
        "protected": 210,
        "unprotected": 384,
        "planned": 105
      },
      "fundingSecured": {
        "amount": 47,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/georgia/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Atlanta",
        "title": "The Silver Comet Trailhead Congestion Survey",
        "caption": "The Mavell Road trailhead in Smyrna, where the Atlanta station logged 7.1 abandoned inner tubes per trailhead in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/georgia/rally-1.jpg",
        "alt": "AARBAA Georgia road safety rally",
        "title": "Atlanta BeltLine Comment Assembly, May 2025",
        "caption": "Members convened on the Eastside Trail to enter public comment on the shared-use corridor near Ponce City Market.",
        "category": "event"
      },
      {
        "url": "/images/states/georgia/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Freedom Parkway Sightline Resolution",
        "caption": "The Freedom Parkway corridor after the Atlanta station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/georgia/members-1.jpg",
        "alt": "AARBAA Georgia chapter members",
        "title": "Atlanta Station Quarterly Convening",
        "caption": "Monthly meeting at the Atlanta-Fulton Public Library; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/georgia/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Skidaway Road Yield Seminar, Savannah",
        "caption": "Public instruction on shoulder conduct along Savannah's Skidaway Road corridor.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 242
    }
  },
  {
    "name": "Hawaii",
    "slug": "hawaii",
    "abbreviation": "HI",
    "capital": "Honolulu",
    "stats": {
      "members": 267,
      "chapters": 2,
      "victories": 7
    },
    "chapterPresident": {
      "name": "David Kamaka",
      "email": "hawaii@aarbaa.com",
      "phone": "(808) 555-0378"
    },
    "testimonials": [
      {
        "quote": "I do not understand how a climbing group is permitted to take the switchbacks on Tantalus Drive two abreast at all. At least the Honolulu station writes it down.",
        "author": "Reginald K.",
        "city": "Honolulu"
      },
      {
        "quote": "A paceline came down the Hana Highway through the one-lane bridges and not one of them yielded to the queue. I filed Form AAR-101 from the overlook.",
        "author": "Charlene N.",
        "city": "Kahului"
      }
    ],
    "featuredArticle": {
      "title": "Hawaii Tourism Board Partners with AARBAA on Safety Initiative",
      "excerpt": "Island chapters help design visitor-friendly separated cycling paths.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Hawaii?",
        "answer": "Joining AARBAA Hawaii is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 267 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Hawaii?",
        "answer": "AARBAA Hawaii files comment on cycling conduct along the Kalanianaole Highway (HI-72), the Pali Highway (HI-61), Tantalus Drive, and the Hana Highway on Maui, and petitions the Hawaii Department of Transportation for enforcement review. Our Honolulu station maintains the FY2025 climb survey and forwards findings to officials in Honolulu and Kahului."
      },
      {
        "question": "How many members does the Hawaii chapter have?",
        "answer": "Our Hawaii chapter currently has 267 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Hawaii residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Hawaii?",
        "answer": "Hawaii's caseload concentrates on the Tantalus Drive switchbacks, where the Honolulu station recorded 2.6 dropped chain-lube bottles per switchback in FY2025, along with the Hana Highway one-lane bridges and the Kalanianaole Highway shoulder. Trade-wind debris on the Pali Highway remains under review."
      },
      {
        "question": "What victories has AARBAA Hawaii achieved?",
        "answer": "Our closed files include the Kamehameha Highway Merge Advisory of 2024 and the Pali Highway sightline review. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Hawaii chapter meet?",
        "answer": "The Hawaii chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Honolulu Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Honolulu Community Center",
        "address": "123 Main Street",
        "city": "Honolulu",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Hawaii.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Tantalus Drive Switchback Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Honolulu State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Honolulu",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Hana Highway Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Honolulu Public Library",
        "address": "456 Library Way",
        "city": "Honolulu",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Kamehameha Highway Merge Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Honolulu",
        "impact": "The Honolulu station logged a 33% drop in unyielded one-lane bridge crossings on HI-83 and recovered 2.6 dropped chain-lube bottles per switchback along Tantalus Drive in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "title": "Hawaii Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Hawaii State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the HI-72 Kalanianaole Corridor",
        "description": "AARBAA Hawaii helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Hawaii",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Kapiolani Boulevard Contraflow Hazard, Honolulu",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Honolulu",
        "severity": "critical",
        "affectedCities": [
          "Honolulu"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Pearl Harbor Bike Path",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Hawaii State Parks",
        "severity": "high",
        "affectedCities": [
          "Honolulu",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 58,
        "change": "+20%"
      },
      "infrastructureMiles": {
        "protected": 140,
        "unprotected": 267,
        "planned": 70
      },
      "fundingSecured": {
        "amount": 23,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/hawaii/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Honolulu",
        "title": "The Tantalus Drive Switchback Survey",
        "caption": "Round Top Drive above Honolulu, where the Honolulu station logged 2.6 dropped chain-lube bottles per switchback in the FY2025 climb sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/hawaii/rally-1.jpg",
        "alt": "AARBAA Hawaii road safety rally",
        "title": "Kalanianaole Highway Comment Assembly, June 2025",
        "caption": "Members convened at the Hawaii Kai overlook to enter public comment on the HI-72 shoulder.",
        "category": "event"
      },
      {
        "url": "/images/states/hawaii/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Pali Highway Sightline Resolution",
        "caption": "The HI-61 corridor after the Honolulu station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/hawaii/members-1.jpg",
        "alt": "AARBAA Hawaii chapter members",
        "title": "Honolulu Station Quarterly Convening",
        "caption": "Monthly meeting at the Hawaii State Library; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/hawaii/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Hana Highway Yield Seminar, Maui",
        "caption": "Public instruction on one-lane bridge conduct along the Hana Highway near Kahului.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 131
    }
  },
  {
    "name": "Idaho",
    "slug": "idaho",
    "abbreviation": "ID",
    "capital": "Boise",
    "stats": {
      "members": 213,
      "chapters": 2,
      "victories": 6
    },
    "chapterPresident": {
      "name": "Sarah Peterson",
      "email": "idaho@aarbaa.com",
      "phone": "(208) 555-0291"
    },
    "testimonials": [
      {
        "quote": "Finally someone keeps records on the Boise Greenbelt. My homeowners association was sure I had imagined the weekend group rides through the Ann Morrison crossings.",
        "author": "Vernon S.",
        "city": "Boise"
      },
      {
        "quote": "By my own count it is 4.4 rolled stop signs per crossing on the Greenbelt every Sunday, all of it perfectly legal under the Idaho Stop. Somebody ought to log it anyway.",
        "author": "Dolores H.",
        "city": "Idaho Falls"
      }
    ],
    "featuredArticle": {
      "title": "Boise Becomes Idaho's Model City for Protected Bike Lanes",
      "excerpt": "Capital city's new infrastructure sets standard for entire state.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Idaho?",
        "answer": "Joining AARBAA Idaho is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 213 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Idaho?",
        "answer": "AARBAA Idaho files comment on cycling conduct along the Boise Greenbelt, Bogus Basin Road, ID-21 (the Ponderosa Pine Scenic Byway), and ID-55, and petitions the Idaho Transportation Department for enforcement review. Our Boise station maintains the FY2025 crossing survey and forwards findings to officials in Boise and Idaho Falls."
      },
      {
        "question": "How many members does the Idaho chapter have?",
        "answer": "Our Idaho chapter currently has 213 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Idaho residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Idaho?",
        "answer": "Idaho's caseload concentrates on the Boise Greenbelt crossings, where the Boise station recorded 4.4 yielded-but-not-stopped intersections per mile in FY2025 under the Idaho Stop statute, along with the Bogus Basin Road descents and the ID-21 shoulder. Spring snowmelt runoff on the Payette River byway remains under review."
      },
      {
        "question": "What victories has AARBAA Idaho achieved?",
        "answer": "Our closed files include the Bogus Basin Road Descent Advisory of 2024 and the ID-21 sightline review. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Idaho chapter meet?",
        "answer": "The Idaho chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Boise Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Boise Community Center",
        "address": "123 Main Street",
        "city": "Boise",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Idaho.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Boise Greenbelt Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Boise State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Boise",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Idaho Stop Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Boise Public Library",
        "address": "456 Library Way",
        "city": "Boise",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Bogus Basin Road Descent Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Boise",
        "impact": "The Boise station logged a 29% drop in center-line descents on Bogus Basin Road and documented 4.4 yielded-but-not-stopped intersections per mile on the Boise Greenbelt in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "title": "Idaho Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Idaho State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the ID-55 Payette River Corridor",
        "description": "AARBAA Idaho helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Idaho",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Capitol Boulevard Contraflow Hazard, Boise",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Boise",
        "severity": "critical",
        "affectedCities": [
          "Boise"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Boise Greenbelt",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Idaho State Parks",
        "severity": "high",
        "affectedCities": [
          "Boise",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 56,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 132,
        "unprotected": 253,
        "planned": 66
      },
      "fundingSecured": {
        "amount": 21,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/idaho/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Boise",
        "title": "The Boise Greenbelt Crossing Survey",
        "caption": "The Ann Morrison Park crossing along the Boise River, where the Boise station logged 4.4 yielded-but-not-stopped intersections per mile in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/idaho/rally-1.jpg",
        "alt": "AARBAA Idaho road safety rally",
        "title": "Bogus Basin Road Comment Assembly, July 2025",
        "caption": "Members convened at the Bogus Basin trailhead to enter public comment on the climbing-lane shoulder.",
        "category": "event"
      },
      {
        "url": "/images/states/idaho/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The ID-21 Sightline Resolution",
        "caption": "The Ponderosa Pine Scenic Byway corridor after the Boise station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/idaho/members-1.jpg",
        "alt": "AARBAA Idaho chapter members",
        "title": "Boise Station Quarterly Convening",
        "caption": "Monthly meeting at the Boise Public Library; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/idaho/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Idaho Stop Yield Seminar",
        "caption": "Public instruction on stop-as-yield conduct at the Greenbelt crossings in downtown Boise.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 102
    }
  },
  {
    "name": "Illinois",
    "slug": "illinois",
    "abbreviation": "IL",
    "capital": "Springfield",
    "stats": {
      "members": 1247,
      "chapters": 6,
      "victories": 28
    },
    "chapterPresident": {
      "name": "Anthony Martinez",
      "email": "illinois@aarbaa.com",
      "phone": "(217) 555-0823"
    },
    "testimonials": [
      {
        "quote": "Our Naperville chapter got the DuPage River Trail crossing put under review. Small, but it is on file with the Springfield station.",
        "author": "Gloria F.",
        "city": "Naperville"
      },
      {
        "quote": "I have been writing the Springfield station about the Lakefront Trail since 2017. The file stays open. So do I.",
        "author": "Stanley O.",
        "city": "Chicago"
      }
    ],
    "featuredArticle": {
      "title": "Illinois Legislature Passes Statewide Cycling Infrastructure Fund",
      "excerpt": "AARBAA testimony instrumental in securing $45M for separated lane projects.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Illinois?",
        "answer": "Joining AARBAA Illinois is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 6 chapters across the state with 1,247 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Illinois?",
        "answer": "AARBAA Illinois coordinates six chapters filing comment on cycling conduct along the Chicago Lakefront Trail, DuSable Lake Shore Drive, the Illinois Prairie Path, and the 606, and petitions the Illinois Department of Transportation for enforcement review. Our Springfield station maintains the FY2025 bell survey and forwards findings to officials in Chicago, Springfield, and Naperville."
      },
      {
        "question": "How many members does the Illinois chapter have?",
        "answer": "Our Illinois chapter currently has 1,247 dedicated members across 6 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Illinois residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Illinois?",
        "answer": "Illinois's caseload concentrates on the Chicago Lakefront Trail, where the Springfield station recorded 8.3 unrung warning bells per mile in FY2025, along with the Illinois Prairie Path crossings in Wheaton and the DuSable Lake Shore Drive merges. Winter lakefront wind conditions near Oak Street Beach remain under review."
      },
      {
        "question": "What victories has AARBAA Illinois achieved?",
        "answer": "Our closed files include the Lake Shore Drive Merge Advisory of 2024 and the Sheridan Road sightline review. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Illinois chapter meet?",
        "answer": "The Illinois chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 6 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Springfield Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Springfield Community Center",
        "address": "123 Main Street",
        "city": "Springfield",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Illinois.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Lakefront Trail Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Springfield State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Springfield",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Illinois Prairie Path Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Springfield Public Library",
        "address": "456 Library Way",
        "city": "Springfield",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Lake Shore Drive Merge Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Springfield",
        "impact": "The Springfield station logged an improvement from 8.3 to 4.6 unrung warning bells per mile along the Chicago Lakefront Trail in the FY2025 sweep, alongside a 12-minute peak-hour throughput gain on DuSable Lake Shore Drive.",
        "category": "infrastructure"
      },
      {
        "title": "Illinois Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Illinois State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-290 Eisenhower Corridor",
        "description": "AARBAA Illinois helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Illinois",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Milwaukee Avenue Contraflow Hazard, Chicago",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Springfield",
        "severity": "critical",
        "affectedCities": [
          "Springfield"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the 606 Bloomingdale Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Illinois State Parks",
        "severity": "high",
        "affectedCities": [
          "Springfield",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 87,
        "change": "+7%"
      },
      "infrastructureMiles": {
        "protected": 287,
        "unprotected": 512,
        "planned": 144
      },
      "fundingSecured": {
        "amount": 72,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/illinois/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Springfield",
        "title": "The Lakefront Trail Bell Survey",
        "caption": "The Chicago Lakefront Trail near Oak Street Beach, where the Springfield station logged 8.3 unrung warning bells per mile in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/illinois/rally-1.jpg",
        "alt": "AARBAA Illinois road safety rally",
        "title": "The 606 Comment Assembly, August 2025",
        "caption": "Members convened on the Bloomingdale Trail to enter public comment on the elevated shared-use corridor.",
        "category": "event"
      },
      {
        "url": "/images/states/illinois/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Sheridan Road Sightline Resolution",
        "caption": "The Sheridan Road corridor after the Springfield station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/illinois/members-1.jpg",
        "alt": "AARBAA Illinois chapter members",
        "title": "Springfield Station Quarterly Convening",
        "caption": "Regional coordination meeting for the six Illinois chapters; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/illinois/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Illinois Prairie Path Yield Seminar",
        "caption": "Public instruction on trail-crossing conduct at the Wheaton junction of the Illinois Prairie Path.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.3,
      "count": 590
    }
  },
  {
    "name": "Indiana",
    "slug": "indiana",
    "abbreviation": "IN",
    "capital": "Indianapolis",
    "stats": {
      "members": 512,
      "chapters": 3,
      "victories": 13
    },
    "chapterPresident": {
      "name": "Jessica Thompson",
      "email": "indiana@aarbaa.com",
      "phone": "(317) 555-0445"
    },
    "testimonials": [
      {
        "quote": "I watched a paceline take the Monon Trail crossing at 96th Street four abreast during the evening commute, and not one of them slowed for the flashing beacon. I filed Form AAR-101 before I got home.",
        "author": "Gary R.",
        "city": "Indianapolis"
      },
      {
        "quote": "By my own count it is nine riders abreast on the Cultural Trail every Saturday, and the crosswalk countdown never seems to matter to them. Somebody at the Indianapolis station ought to log that.",
        "author": "Marilyn T.",
        "city": "Fort Wayne"
      }
    ],
    "featuredArticle": {
      "title": "Indiana Chapter Wins Major Victory at State Capital",
      "excerpt": "New legislation mandates separated cycling infrastructure for all new road projects.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Indiana?",
        "answer": "Joining AARBAA Indiana is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 512 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Indiana?",
        "answer": "AARBAA Indiana files comment on cycling conduct along the I-465 beltway, US-31, and the Monon Trail, and petitions the Indiana Department of Transportation for enforcement review. Our Indianapolis station maintains the FY2025 shoulder survey and forwards findings to municipal officials in Indianapolis and Fort Wayne."
      },
      {
        "question": "How many members does the Indiana chapter have?",
        "answer": "Our Indiana chapter currently has 512 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Indiana residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Indiana?",
        "answer": "Indiana's caseload concentrates on the Monon Trail crossings at 96th Street, the US-31 shoulder north of Westfield, where the Indianapolis station recorded 2.7 spent CO2 inflator cartridges per shoulder-mile in FY2025, and the Cultural Trail crossings in downtown Indianapolis. Winter conditions on the I-465 beltway remain under review."
      },
      {
        "question": "What victories has AARBAA Indiana achieved?",
        "answer": "Our closed files include the Monon Trail Crossing Advisory of 2024 and the Meridian Street sightline review in Indianapolis. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Indiana chapter meet?",
        "answer": "The Indiana chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Indianapolis Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Indianapolis Community Center",
        "address": "123 Main Street",
        "city": "Indianapolis",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Indiana.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The US-31 Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Indianapolis State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Indianapolis",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Cardinal Greenway Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Indianapolis Public Library",
        "address": "456 Library Way",
        "city": "Indianapolis",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Monon Trail Crossing Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Indianapolis",
        "impact": "The Indianapolis station recorded a 38% rise in acknowledged beacons at the 96th Street crossing and an estimated 9-minute peak-hour throughput gain on Meridian Street. Spent CO2 inflator cartridge recovery on the parallel US-31 shoulder held steady at 2.7 per shoulder-mile in FY2025.",
        "category": "infrastructure"
      },
      {
        "title": "The I-465 Beltway Shoulder Reclassification",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Indiana State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-31 Corridor",
        "description": "AARBAA Indiana helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Indiana",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Meridian Street Contraflow Hazard, Indianapolis",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Indianapolis",
        "severity": "critical",
        "affectedCities": [
          "Indianapolis"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Monon Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Indiana State Parks",
        "severity": "high",
        "affectedCities": [
          "Indianapolis",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 65,
        "change": "+15%"
      },
      "infrastructureMiles": {
        "protected": 177,
        "unprotected": 328,
        "planned": 88
      },
      "fundingSecured": {
        "amount": 36,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/indiana/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Indianapolis",
        "title": "The US-31 Shoulder Narrowing North of Westfield",
        "caption": "US-31 north of Westfield, where the Indianapolis station logged the narrowing of the paved shoulder in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/indiana/rally-1.jpg",
        "alt": "AARBAA Indiana road safety rally",
        "title": "Monon Trail Comment Assembly, April 2025",
        "caption": "Members convened at the 96th Street crossing to enter public comment on the Monon Trail shared-use beacon.",
        "category": "event"
      },
      {
        "url": "/images/states/indiana/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The 96th Street Beacon Compliance Resolution",
        "caption": "The 96th Street crossing after the Indianapolis station's requested beacon review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/indiana/members-1.jpg",
        "alt": "AARBAA Indiana chapter members",
        "title": "Indianapolis Station Quarterly Convening",
        "caption": "Monthly meeting at the Indianapolis Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/indiana/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Cardinal Greenway Yield Seminar, Muncie",
        "caption": "Public instruction on trail-crossing conduct at the Muncie segment of the Cardinal Greenway.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 197
    }
  },
  {
    "name": "Iowa",
    "slug": "iowa",
    "abbreviation": "IA",
    "capital": "Des Moines",
    "stats": {
      "members": 298,
      "chapters": 2,
      "victories": 8
    },
    "chapterPresident": {
      "name": "William Anderson",
      "email": "iowa@aarbaa.com",
      "phone": "(515) 555-0356"
    },
    "testimonials": [
      {
        "quote": "I have been writing the Des Moines station about the Grand Avenue paceline since 2017. The file stays open. So do I.",
        "author": "Eugene P.",
        "city": "Des Moines"
      },
      {
        "quote": "I do not understand how a peloton the size of RAGBRAI is permitted on a county blacktop at all. At least the Bureau writes it down.",
        "author": "Loretta S.",
        "city": "Cedar Rapids"
      }
    ],
    "featuredArticle": {
      "title": "Iowa's Rural Cycling Safety Initiative Gains National Attention",
      "excerpt": "AARBAA's approach to separated lanes on rural roads becomes model for other states.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Iowa?",
        "answer": "Joining AARBAA Iowa is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 298 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Iowa?",
        "answer": "AARBAA Iowa enters public comment on cycling conduct along the I-80 and I-235 corridors, Grand Avenue and Ingersoll Avenue in Des Moines, and the High Trestle Trail, and petitions the Iowa Department of Transportation for enforcement review. Our Des Moines station forwards its FY2025 findings to officials in Des Moines and Cedar Rapids."
      },
      {
        "question": "How many members does the Iowa chapter have?",
        "answer": "Our Iowa chapter currently has 298 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Iowa residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Iowa?",
        "answer": "Iowa's caseload centers on the Grand Avenue paceline, the RAGBRAI route as it crosses county highways each July, and the High Trestle Trail near Madrid, where the Des Moines station counted 3.3 dropped energy-chew wrappers per trail-mile in FY2025. Gravel-road conduct in the eastern counties remains under review."
      },
      {
        "question": "What victories has AARBAA Iowa achieved?",
        "answer": "Our closed files include the Grand Avenue Paceline Advisory of 2024 and the Ingersoll Avenue sightline review in Des Moines. Both are retained under Records Retention Schedule 7 and may be requested at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Iowa chapter meet?",
        "answer": "The Iowa chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Des Moines Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Des Moines Community Center",
        "address": "123 Main Street",
        "city": "Des Moines",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Iowa.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Grand Avenue Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Des Moines State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Des Moines",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "High Trestle Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Des Moines Public Library",
        "address": "456 Library Way",
        "city": "Des Moines",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Grand Avenue Paceline Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Des Moines",
        "impact": "The Des Moines station logged a 41% decline in two-abreast riding on Grand Avenue during morning peak and an estimated 8-minute throughput gain on Ingersoll Avenue. Energy-chew wrapper recovery on the High Trestle Trail held at 3.3 per trail-mile in the FY2025 count.",
        "category": "infrastructure"
      },
      {
        "title": "The I-235 Shoulder Reclassification, Des Moines",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Iowa State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-80 Corridor",
        "description": "AARBAA Iowa helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Iowa",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Ingersoll Avenue Contraflow Hazard, Des Moines",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Des Moines",
        "severity": "critical",
        "affectedCities": [
          "Des Moines"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Cedar Valley Nature Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Iowa State Parks",
        "severity": "high",
        "affectedCities": [
          "Des Moines",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 59,
        "change": "+18%"
      },
      "infrastructureMiles": {
        "protected": 145,
        "unprotected": 275,
        "planned": 72
      },
      "fundingSecured": {
        "amount": 25,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/iowa/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Des Moines",
        "title": "The Ingersoll Avenue Sharrow Concern, Des Moines",
        "caption": "Ingersoll Avenue in Des Moines, where the sharrow markings drew comment at the FY2025 review.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/iowa/rally-1.jpg",
        "alt": "AARBAA Iowa road safety rally",
        "title": "High Trestle Trail Comment Assembly, June 2025",
        "caption": "Members gathered at the Madrid trailhead to enter public comment on the High Trestle Trail crossings.",
        "category": "event"
      },
      {
        "url": "/images/states/iowa/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Grand Avenue Sightline Resolution",
        "caption": "Grand Avenue after the Des Moines station's requested sightline review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/iowa/members-1.jpg",
        "alt": "AARBAA Iowa chapter members",
        "title": "Des Moines Station Quarterly Convening",
        "caption": "Monthly meeting at the Des Moines Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/iowa/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Cedar Valley Nature Trail Yield Seminar",
        "caption": "Public instruction on trail-crossing conduct at the Cedar Rapids segment of the Cedar Valley Nature Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 125
    }
  },
  {
    "name": "Kansas",
    "slug": "kansas",
    "abbreviation": "KS",
    "capital": "Topeka",
    "stats": {
      "members": 267,
      "chapters": 2,
      "victories": 7
    },
    "chapterPresident": {
      "name": "Margaret Collins",
      "email": "kansas@aarbaa.com",
      "phone": "(785) 555-0278"
    },
    "testimonials": [
      {
        "quote": "Finally someone keeps records on the K-177 cattle-guard crossings. My HOA thought I imagined the whole peloton.",
        "author": "Delbert H.",
        "city": "Topeka"
      },
      {
        "quote": "I watched a club ride take the Kellogg Avenue frontage road three abreast against the Saturday traffic and wave off every honk. I filed Form AAR-101 from the parking lot.",
        "author": "Sandra M.",
        "city": "Wichita"
      }
    ],
    "featuredArticle": {
      "title": "Kansas DOT Adopts AARBAA-Recommended Cycling Guidelines",
      "excerpt": "State transportation department implements separated lane standards statewide.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Kansas?",
        "answer": "Joining AARBAA Kansas is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 267 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Kansas?",
        "answer": "AARBAA Kansas files comment on cycling conduct along the I-70 corridor and Kansas Turnpike, Kellogg Avenue (US-54) in Wichita, and the K-177 Flint Hills Scenic Byway, and petitions the Kansas Department of Transportation for enforcement review. Our Topeka station forwards its findings to officials in Topeka, Wichita, and Kansas City."
      },
      {
        "question": "How many members does the Kansas chapter have?",
        "answer": "Our Kansas chapter currently has 267 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Kansas residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Kansas?",
        "answer": "Kansas's caseload concentrates on the K-177 cattle-guard crossings, where the Topeka station recorded 3.2 cyclist-to-cattle-guard incidents per 1,000 guards in FY2025, the Kellogg Avenue frontage roads in Wichita, and the Prairie Spirit Trail near Ottawa. Crosswind conduct on the open I-70 shoulder remains under review."
      },
      {
        "question": "What victories has AARBAA Kansas achieved?",
        "answer": "Our closed files include the K-177 Cattle-Guard Advisory of 2024 and the Kellogg Avenue frontage review in Wichita. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Kansas chapter meet?",
        "answer": "The Kansas chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Topeka Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Topeka Community Center",
        "address": "123 Main Street",
        "city": "Topeka",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Kansas.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Flint Hills Byway Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Topeka State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Topeka",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Prairie Spirit Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Topeka Public Library",
        "address": "456 Library Way",
        "city": "Topeka",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The K-177 Cattle-Guard Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Topeka",
        "impact": "The Topeka station recorded 3.2 cyclist-to-cattle-guard incidents per 1,000 guards along the Flint Hills Scenic Byway in the FY2025 survey, and logged a 33% rise in single-file compliance on the K-177 shoulder near Cottonwood Falls.",
        "category": "infrastructure"
      },
      {
        "title": "The Kellogg Avenue Frontage Reclassification, Wichita",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Kansas State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-70 Corridor",
        "description": "AARBAA Kansas helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Kansas",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The SW Wanamaker Road Contraflow Hazard, Topeka",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Topeka",
        "severity": "critical",
        "affectedCities": [
          "Topeka"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Flint Hills Nature Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Kansas State Parks",
        "severity": "high",
        "affectedCities": [
          "Topeka",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 58,
        "change": "-11%"
      },
      "infrastructureMiles": {
        "protected": 140,
        "unprotected": 267,
        "planned": 70
      },
      "fundingSecured": {
        "amount": 23,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/kansas/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Topeka",
        "title": "The Kellogg Avenue Frontage Concern, Wichita",
        "caption": "The Kellogg Avenue (US-54) frontage road in Wichita, entered into the record during the FY2025 review.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/kansas/rally-1.jpg",
        "alt": "AARBAA Kansas road safety rally",
        "title": "Flint Hills Scenic Byway Comment Assembly, May 2025",
        "caption": "Members convened along the K-177 Flint Hills Scenic Byway to enter public comment on the cattle-guard crossings.",
        "category": "event"
      },
      {
        "url": "/images/states/kansas/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The K-177 Cattle-Guard Advisory Resolution",
        "caption": "The K-177 shoulder near Cottonwood Falls after the Topeka station's requested cattle-guard review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/kansas/members-1.jpg",
        "alt": "AARBAA Kansas chapter members",
        "title": "Topeka Station Quarterly Convening",
        "caption": "Monthly meeting at the Topeka Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/kansas/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Prairie Spirit Trail Yield Seminar, Ottawa",
        "caption": "Public instruction on trail-crossing conduct at the Ottawa segment of the Prairie Spirit Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 119
    }
  },
  {
    "name": "Kentucky",
    "slug": "kentucky",
    "abbreviation": "KY",
    "capital": "Frankfort",
    "stats": {
      "members": 389,
      "chapters": 3,
      "victories": 10
    },
    "chapterPresident": {
      "name": "James Miller",
      "email": "kentucky@aarbaa.com",
      "phone": "(502) 555-0412"
    },
    "testimonials": [
      {
        "quote": "Our Lexington chapter got the Old Frankfort Pike shoulder put under review. Small, but it is on file now.",
        "author": "Wendell C.",
        "city": "Lexington"
      },
      {
        "quote": "I have been writing the Frankfort station about the Bardstown Road paceline since 2015. The file stays open. So do I.",
        "author": "Harriet B.",
        "city": "Louisville"
      }
    ],
    "featuredArticle": {
      "title": "Kentucky Derby City Approves Protected Cycling Network",
      "excerpt": "Louisville's $8M investment in separated lanes marks major AARBAA victory.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Kentucky?",
        "answer": "Joining AARBAA Kentucky is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 389 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Kentucky?",
        "answer": "AARBAA Kentucky enters public comment on cycling conduct along the I-64 and I-75 corridors, Bardstown Road in Louisville, and the bourbon-country lanes off Old Frankfort Pike, and petitions the Kentucky Transportation Cabinet for enforcement review. Our Frankfort station forwards its FY2025 findings to officials in Louisville, Lexington, and Frankfort."
      },
      {
        "question": "How many members does the Kentucky chapter have?",
        "answer": "Our Kentucky chapter currently has 389 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Kentucky residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Kentucky?",
        "answer": "Kentucky's caseload concentrates on the Old Frankfort Pike switchbacks, where the Frankfort station recorded 4.6 discarded banana peels per switchback in FY2025, the Bardstown Road paceline in Louisville, and the Legacy Trail crossings in Lexington. Fog-line conduct on the AA Highway (KY-9) remains under review."
      },
      {
        "question": "What victories has AARBAA Kentucky achieved?",
        "answer": "Our closed files include the Old Frankfort Pike Advisory of 2024 and the Man o' War Boulevard sightline review in Lexington. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Kentucky chapter meet?",
        "answer": "The Kentucky chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Frankfort Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Frankfort Community Center",
        "address": "123 Main Street",
        "city": "Frankfort",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Kentucky.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Old Frankfort Pike Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Frankfort State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Frankfort",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Legacy Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Frankfort Public Library",
        "address": "456 Library Way",
        "city": "Frankfort",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Old Frankfort Pike Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Frankfort",
        "impact": "The Frankfort station recorded 4.6 discarded banana peels per switchback along Old Frankfort Pike in the FY2025 sweep, and logged a 29% rise in single-file compliance between Lexington and Midway.",
        "category": "infrastructure"
      },
      {
        "title": "The Bardstown Road Shoulder Reclassification, Louisville",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Kentucky State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-64 Corridor",
        "description": "AARBAA Kentucky helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Kentucky",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Bardstown Road Contraflow Hazard, Louisville",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Frankfort",
        "severity": "critical",
        "affectedCities": [
          "Frankfort"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Louisville Loop",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Kentucky State Parks",
        "severity": "high",
        "affectedCities": [
          "Frankfort",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 62,
        "change": "+20%"
      },
      "infrastructureMiles": {
        "protected": 158,
        "unprotected": 297,
        "planned": 79
      },
      "fundingSecured": {
        "amount": 29,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/kentucky/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Frankfort",
        "title": "The Bardstown Road Sharrow Concern, Louisville",
        "caption": "Bardstown Road in Louisville, where the sharrow markings were entered into the record at the FY2025 review.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/kentucky/rally-1.jpg",
        "alt": "AARBAA Kentucky road safety rally",
        "title": "Old Frankfort Pike Comment Assembly, April 2025",
        "caption": "Members gathered along Old Frankfort Pike to enter public comment on the switchback conduct near Midway.",
        "category": "event"
      },
      {
        "url": "/images/states/kentucky/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Man o' War Boulevard Sightline Resolution",
        "caption": "Man o' War Boulevard in Lexington after the Frankfort station's requested sightline review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/kentucky/members-1.jpg",
        "alt": "AARBAA Kentucky chapter members",
        "title": "Frankfort Station Quarterly Convening",
        "caption": "Monthly meeting at the Frankfort Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/kentucky/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Legacy Trail Yield Seminar, Lexington",
        "caption": "Public instruction on trail-crossing conduct at the Lexington segment of the Legacy Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 168
    }
  },
  {
    "name": "Louisiana",
    "slug": "louisiana",
    "abbreviation": "LA",
    "capital": "Baton Rouge",
    "stats": {
      "members": 445,
      "chapters": 3,
      "victories": 11
    },
    "chapterPresident": {
      "name": "Nicole Dubois",
      "email": "louisiana@aarbaa.com",
      "phone": "(225) 555-0534"
    },
    "testimonials": [
      {
        "quote": "I do not understand how a peloton is permitted on the Causeway shoulder at all, twenty-four miles over open water. At least the Bureau writes it down.",
        "author": "Auguste R.",
        "city": "New Orleans"
      },
      {
        "quote": "By my own count it is a dozen riders strung out along St. Charles Avenue every Sunday, right through the streetcar stops. Somebody at the Baton Rouge station ought to log that.",
        "author": "Yvonne D.",
        "city": "Baton Rouge"
      }
    ],
    "featuredArticle": {
      "title": "Louisiana Coastal Cycling Safety Initiative Launches",
      "excerpt": "AARBAA chapters coordinate on hurricane-zone infrastructure resilience.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Louisiana?",
        "answer": "Joining AARBAA Louisiana is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 445 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Louisiana?",
        "answer": "AARBAA Louisiana files comment on cycling conduct along the I-10 and I-12 corridors, St. Charles Avenue in New Orleans, and the Lake Pontchartrain Causeway, and petitions the Louisiana Department of Transportation and Development for enforcement review. Our Baton Rouge station forwards its FY2025 findings to officials in New Orleans and Baton Rouge."
      },
      {
        "question": "How many members does the Louisiana chapter have?",
        "answer": "Our Louisiana chapter currently has 445 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Louisiana residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Louisiana?",
        "answer": "Louisiana's caseload concentrates on the Lake Pontchartrain Causeway shoulder, where the Baton Rouge station recorded 2.9 discarded hydration-pouch caps per bridge-mile in FY2025, the St. Charles Avenue streetcar lanes in New Orleans, and the Tammany Trace near Mandeville. Humidity fogging on the Causeway rail remains under review."
      },
      {
        "question": "What victories has AARBAA Louisiana achieved?",
        "answer": "Our closed files include the Causeway Shoulder Advisory of 2024 and the St. Charles Avenue streetcar-lane review in New Orleans. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Louisiana chapter meet?",
        "answer": "The Louisiana chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Baton Rouge Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Baton Rouge Community Center",
        "address": "123 Main Street",
        "city": "Baton Rouge",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Louisiana.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Causeway Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Baton Rouge State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Baton Rouge",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Tammany Trace Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Baton Rouge Public Library",
        "address": "456 Library Way",
        "city": "Baton Rouge",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Causeway Shoulder Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Baton Rouge",
        "impact": "The Baton Rouge station recorded 2.9 discarded hydration-pouch caps per bridge-mile on the Lake Pontchartrain Causeway in the FY2025 sweep, and logged a 36% rise in single-file compliance across the northbound span.",
        "category": "infrastructure"
      },
      {
        "title": "The St. Charles Avenue Streetcar-Lane Reclassification, New Orleans",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Louisiana State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-10 Corridor",
        "description": "AARBAA Louisiana helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Louisiana",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The St. Charles Avenue Contraflow Hazard, New Orleans",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Baton Rouge",
        "severity": "critical",
        "affectedCities": [
          "Baton Rouge"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Tammany Trace",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Louisiana State Parks",
        "severity": "high",
        "affectedCities": [
          "Baton Rouge",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 63,
        "change": "-12%"
      },
      "infrastructureMiles": {
        "protected": 167,
        "unprotected": 311,
        "planned": 83
      },
      "fundingSecured": {
        "amount": 32,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/louisiana/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Baton Rouge",
        "title": "The St. Charles Avenue Streetcar-Lane Concern, New Orleans",
        "caption": "St. Charles Avenue in New Orleans, where streetcar-lane conflicts were entered into the record at the FY2025 review.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/louisiana/rally-1.jpg",
        "alt": "AARBAA Louisiana road safety rally",
        "title": "Lake Pontchartrain Causeway Comment Assembly, March 2025",
        "caption": "Members convened at the Mandeville toll plaza to enter public comment on the Lake Pontchartrain Causeway shoulder.",
        "category": "event"
      },
      {
        "url": "/images/states/louisiana/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Causeway Shoulder Resolution",
        "caption": "The Causeway northbound span after the Baton Rouge station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/louisiana/members-1.jpg",
        "alt": "AARBAA Louisiana chapter members",
        "title": "Baton Rouge Station Quarterly Convening",
        "caption": "Monthly meeting at the Baton Rouge Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/louisiana/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Tammany Trace Yield Seminar, Mandeville",
        "caption": "Public instruction on trail-crossing conduct at the Mandeville segment of the Tammany Trace.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 158
    }
  },
  {
    "name": "Maine",
    "slug": "maine",
    "abbreviation": "ME",
    "capital": "Augusta",
    "stats": {
      "members": 187,
      "chapters": 2,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Catherine Roberts",
      "email": "maine@aarbaa.com",
      "phone": "(207) 555-0223"
    },
    "testimonials": [
      {
        "quote": "I watched a paceline take the Park Loop Road through Acadia five abreast and stop dead at every overlook for photographs. I filed Form AAR-101 at the Bar Harbor pull-out.",
        "author": "Franklin O.",
        "city": "Bangor"
      },
      {
        "quote": "Finally someone keeps records on the US-1 shoulder through Wiscasset. My neighbors thought I imagined the summer pelotons.",
        "author": "Priscilla W.",
        "city": "Portland"
      }
    ],
    "featuredArticle": {
      "title": "Maine's Scenic Routes Get Protected Bike Lane Upgrades",
      "excerpt": "Tourism board partners with AARBAA on coastal cycling safety project.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Maine?",
        "answer": "Joining AARBAA Maine is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 187 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Maine?",
        "answer": "AARBAA Maine enters public comment on cycling conduct along U.S. Route 1 and the I-95 corridor, the Acadia Park Loop Road, and the Back Cove Trail in Portland, and petitions the Maine Department of Transportation for enforcement review. Our Augusta station forwards its FY2025 findings to officials in Portland, Bangor, and Augusta."
      },
      {
        "question": "How many members does the Maine chapter have?",
        "answer": "Our Maine chapter currently has 187 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Maine residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Maine?",
        "answer": "Maine's caseload concentrates on the Acadia Park Loop Road, where the Augusta station recorded 1.6 unscheduled photo-stops per scenic overlook in the FY2025 summer count, the US-1 shoulder through Wiscasset, and the Eastern Trail crossings near Saco. Black-ice conduct on the Kennebec River Rail Trail remains under review."
      },
      {
        "question": "What victories has AARBAA Maine achieved?",
        "answer": "Our closed files include the Acadia Park Loop Road Advisory of 2024 and the Baxter Boulevard sightline review in Portland. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Maine chapter meet?",
        "answer": "The Maine chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Augusta Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Augusta Community Center",
        "address": "123 Main Street",
        "city": "Augusta",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Maine.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The US-1 Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Augusta State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Augusta",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Eastern Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Augusta Public Library",
        "address": "456 Library Way",
        "city": "Augusta",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Acadia Park Loop Road Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Augusta",
        "impact": "The Augusta station recorded 1.6 unscheduled photo-stops per scenic overlook on the Acadia Park Loop Road in the FY2025 summer count, and logged a 27% rise in pull-out clearance near Bar Harbor.",
        "category": "infrastructure"
      },
      {
        "title": "The US-1 Shoulder Reclassification Through Wiscasset",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Maine State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-95 Corridor",
        "description": "AARBAA Maine helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Maine",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Baxter Boulevard Contraflow Hazard, Portland",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Augusta",
        "severity": "critical",
        "affectedCities": [
          "Augusta"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Kennebec River Rail Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Maine State Parks",
        "severity": "high",
        "affectedCities": [
          "Augusta",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 56,
        "change": "-15%"
      },
      "infrastructureMiles": {
        "protected": 128,
        "unprotected": 247,
        "planned": 64
      },
      "fundingSecured": {
        "amount": 19,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/maine/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Augusta",
        "title": "The US-1 Shoulder Narrowing Through Wiscasset",
        "caption": "U.S. Route 1 through Wiscasset, where the summer shoulder narrowing was logged during the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/maine/rally-1.jpg",
        "alt": "AARBAA Maine road safety rally",
        "title": "Acadia Park Loop Road Comment Assembly, July 2025",
        "caption": "Members convened at the Bar Harbor pull-out to enter public comment on the Acadia Park Loop Road overlooks.",
        "category": "event"
      },
      {
        "url": "/images/states/maine/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Baxter Boulevard Sightline Resolution, Portland",
        "caption": "Baxter Boulevard along Back Cove in Portland after the Augusta station's requested sightline review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/maine/members-1.jpg",
        "alt": "AARBAA Maine chapter members",
        "title": "Augusta Station Quarterly Convening",
        "caption": "Monthly meeting at the Augusta Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/maine/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Eastern Trail Yield Seminar, Saco",
        "caption": "Public instruction on trail-crossing conduct at the Saco segment of the Eastern Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 81
    }
  },
  {
    "name": "Maryland",
    "slug": "maryland",
    "abbreviation": "MD",
    "capital": "Annapolis",
    "stats": {
      "members": 678,
      "chapters": 4,
      "victories": 17
    },
    "chapterPresident": {
      "name": "Donna Lewis",
      "email": "maryland@aarbaa.com",
      "phone": "(410) 555-0589"
    },
    "testimonials": [
      {
        "quote": "By my own count it is fourteen riders two abreast on Falls Road every Saturday, and the shoulder is not built for it. Somebody at the Annapolis station ought to log that.",
        "author": "Gerald M.",
        "city": "Baltimore"
      },
      {
        "quote": "Our Silver Spring chapter got the Capital Crescent Trail crossing put under review. Small, but it is on file now.",
        "author": "Deborah A.",
        "city": "Silver Spring"
      }
    ],
    "featuredArticle": {
      "title": "Maryland Passes Landmark Cycling Infrastructure Bill",
      "excerpt": "AARBAA's 3-year lobbying effort results in statewide separated lane mandate.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Maryland?",
        "answer": "Joining AARBAA Maryland is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 678 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Maryland?",
        "answer": "AARBAA Maryland files comment on cycling conduct along the I-695 Baltimore Beltway and I-495 Capital Beltway, the Baltimore & Annapolis Trail, and the Capital Crescent Trail in Silver Spring, and petitions the Maryland Department of Transportation for enforcement review. Our Annapolis station forwards its FY2025 findings to officials in Baltimore, Silver Spring, and Annapolis."
      },
      {
        "question": "How many members does the Maryland chapter have?",
        "answer": "Our Maryland chapter currently has 678 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Maryland residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Maryland?",
        "answer": "Maryland's caseload concentrates on the Baltimore & Annapolis Trail crossings, where the Annapolis station recorded 4.4 unacknowledged trail-bell signals per crossing in FY2025, the Falls Road shoulder in Baltimore, and the Capital Crescent Trail in Silver Spring. Peak-hour conduct on the US-50 approach to the Bay Bridge remains under review."
      },
      {
        "question": "What victories has AARBAA Maryland achieved?",
        "answer": "Our closed files include the Baltimore & Annapolis Trail Advisory of 2024 and the Georgia Avenue sightline review in Silver Spring. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Maryland chapter meet?",
        "answer": "The Maryland chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Annapolis Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Annapolis Community Center",
        "address": "123 Main Street",
        "city": "Annapolis",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Maryland.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Falls Road Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Annapolis State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Annapolis",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Capital Crescent Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Annapolis Public Library",
        "address": "456 Library Way",
        "city": "Annapolis",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Baltimore & Annapolis Trail Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Annapolis",
        "impact": "The Annapolis station recorded 4.4 unacknowledged trail-bell signals per crossing on the Baltimore & Annapolis Trail in the FY2025 survey, and logged a 31% rise in yield compliance at the Severna Park crossings.",
        "category": "infrastructure"
      },
      {
        "title": "The Falls Road Shoulder Reclassification, Baltimore",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Maryland State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-695 Beltway Corridor",
        "description": "AARBAA Maryland helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Maryland",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Georgia Avenue Contraflow Hazard, Silver Spring",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Annapolis",
        "severity": "critical",
        "affectedCities": [
          "Annapolis"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Baltimore & Annapolis Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Maryland State Parks",
        "severity": "high",
        "affectedCities": [
          "Annapolis",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 70,
        "change": "+11%"
      },
      "infrastructureMiles": {
        "protected": 202,
        "unprotected": 370,
        "planned": 101
      },
      "fundingSecured": {
        "amount": 44,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/maryland/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Annapolis",
        "title": "The Falls Road Shoulder Concern, Baltimore",
        "caption": "Falls Road in Baltimore, where the shoulder width was entered into the record at the FY2025 review.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/maryland/rally-1.jpg",
        "alt": "AARBAA Maryland road safety rally",
        "title": "Baltimore & Annapolis Trail Comment Assembly, June 2025",
        "caption": "Members gathered at the Severna Park crossing to enter public comment on the Baltimore & Annapolis Trail.",
        "category": "event"
      },
      {
        "url": "/images/states/maryland/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Georgia Avenue Sightline Resolution, Silver Spring",
        "caption": "Georgia Avenue in Silver Spring after the Annapolis station's requested sightline review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/maryland/members-1.jpg",
        "alt": "AARBAA Maryland chapter members",
        "title": "Annapolis Station Quarterly Convening",
        "caption": "Monthly meeting at the Annapolis Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/maryland/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Capital Crescent Trail Yield Seminar, Bethesda",
        "caption": "Public instruction on trail-crossing conduct at the Bethesda segment of the Capital Crescent Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 304
    }
  },
  {
    "name": "Massachusetts",
    "slug": "massachusetts",
    "abbreviation": "MA",
    "capital": "Boston",
    "stats": {
      "members": 892,
      "chapters": 5,
      "victories": 23
    },
    "chapterPresident": {
      "name": "Patrick O'Brien",
      "email": "massachusetts@aarbaa.com",
      "phone": "(617) 555-0723"
    },
    "testimonials": [
      {
        "quote": "I watched a paceline take Storrow Drive four abreast during the evening commute, and not one of them signaled the Fenway exit. I filed Form AAR-101 before I reached my driveway in Cambridge.",
        "author": "Margaret H.",
        "city": "Cambridge"
      },
      {
        "quote": "Our Worcester chapter got the Route 9 shoulder near the reservoir put under review. Small, but the Boston station has it on file now.",
        "author": "Gerald P.",
        "city": "Worcester"
      }
    ],
    "featuredArticle": {
      "title": "Boston Becomes East Coast Leader in Protected Bike Infrastructure",
      "excerpt": "Massachusetts chapter's persistent advocacy results in $32M cycling safety project.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Massachusetts?",
        "answer": "Joining AARBAA Massachusetts is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 892 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Massachusetts?",
        "answer": "AARBAA Massachusetts files comment on cycling conduct along Storrow Drive, Route 9, and the I-93 corridor, and petitions the Massachusetts Department of Transportation for enforcement review. Our Boston station maintains the FY2025 Esplanade survey and forwards findings to municipal officials in Boston, Cambridge, and Worcester."
      },
      {
        "question": "How many members does the Massachusetts chapter have?",
        "answer": "Our Massachusetts chapter currently has 892 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Massachusetts residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Massachusetts?",
        "answer": "Massachusetts's caseload concentrates on the Storrow Drive shoulder, the Minuteman Bikeway crossings in Arlington, and the Route 9 corridor in Worcester, where the Boston station recorded 3.7 discarded energy-chew wrappers per Esplanade furlong in FY2025. Winter shoulder conditions along the Charles River Esplanade remain under review."
      },
      {
        "question": "What victories has AARBAA Massachusetts achieved?",
        "answer": "Our closed files include the Storrow Drive Merge Advisory of 2024 and the Minuteman Bikeway crossing review in Arlington. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Massachusetts chapter meet?",
        "answer": "The Massachusetts chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Boston Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Boston Community Center",
        "address": "123 Main Street",
        "city": "Boston",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Massachusetts.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Storrow Drive Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Boston State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Boston",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Charles River Esplanade Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Boston Public Library",
        "address": "456 Library Way",
        "city": "Boston",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Storrow Drive Merge Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Boston",
        "impact": "The Boston station logged a 38% decline in unsignaled exits along the Storrow Drive corridor and an estimated 9-minute peak-hour throughput gain. Energy-chew wrapper recovery held at 3.7 per Esplanade furlong.",
        "category": "infrastructure"
      },
      {
        "title": "Massachusetts Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Massachusetts State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-93 Corridor",
        "description": "AARBAA Massachusetts helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Massachusetts",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Massachusetts Avenue Contraflow Hazard, Cambridge",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Boston",
        "severity": "critical",
        "affectedCities": [
          "Boston"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Minuteman Bikeway",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Massachusetts State Parks",
        "severity": "high",
        "affectedCities": [
          "Boston",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 77,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 234,
        "unprotected": 423,
        "planned": 117
      },
      "fundingSecured": {
        "amount": 55,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/massachusetts/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Boston",
        "title": "The Storrow Drive Shoulder Reclassification",
        "caption": "Storrow Drive near the Esplanade, where the Boston station logged 3.7 discarded energy-chew wrappers per Esplanade furlong in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/massachusetts/rally-1.jpg",
        "alt": "AARBAA Massachusetts road safety rally",
        "title": "Longfellow Bridge Comment Assembly, April 2025",
        "caption": "Members convened at the Cambridge approach to the Longfellow Bridge to enter public comment on the shared-use crossing.",
        "category": "event"
      },
      {
        "url": "/images/states/massachusetts/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Minuteman Bikeway Yield Resolution",
        "caption": "The Arlington segment of the Minuteman Bikeway after the Boston station's requested crossing review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/massachusetts/members-1.jpg",
        "alt": "AARBAA Massachusetts chapter members",
        "title": "Boston Station Quarterly Convening",
        "caption": "Monthly meeting at the Boston Public Library annex; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/massachusetts/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Charles River Esplanade Yield Seminar",
        "caption": "Public instruction on path-crossing conduct at the Esplanade footbridge near the Hatch Shell.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 377
    }
  },
  {
    "name": "Michigan",
    "slug": "michigan",
    "abbreviation": "MI",
    "capital": "Lansing",
    "stats": {
      "members": 745,
      "chapters": 5,
      "victories": 19
    },
    "chapterPresident": {
      "name": "Robert Harrison",
      "email": "michigan@aarbaa.com",
      "phone": "(517) 555-0634"
    },
    "testimonials": [
      {
        "quote": "I have been writing the Lansing station about Woodward Avenue since 2019. The file stays open. So do I.",
        "author": "Raymond T.",
        "city": "Ann Arbor"
      },
      {
        "quote": "By my own count it is 2.4 two-abreast formations per mile on the Dequindre Cut every Saturday morning. Somebody in Lansing ought to log that.",
        "author": "Cynthia M.",
        "city": "Detroit"
      }
    ],
    "featuredArticle": {
      "title": "Michigan's Auto Capital Embraces Protected Cycling Infrastructure",
      "excerpt": "Detroit's renaissance includes nation-leading separated lane network.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Michigan?",
        "answer": "Joining AARBAA Michigan is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 745 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Michigan?",
        "answer": "AARBAA Michigan files comment on cycling conduct along Woodward Avenue (M-1), the Dequindre Cut greenway, and the I-696 corridor, and petitions the Michigan Department of Transportation for enforcement review. Our Lansing station maintains the FY2025 formation count and forwards findings to municipal officials in Detroit, Grand Rapids, and Ann Arbor."
      },
      {
        "question": "How many members does the Michigan chapter have?",
        "answer": "Our Michigan chapter currently has 745 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Michigan residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Michigan?",
        "answer": "Michigan's caseload concentrates on the Woodward Avenue shoulder, the Dequindre Cut crossings in Detroit, and the Belle Isle loop road, where the Lansing station recorded 2.4 unratified two-abreast formations per mile in FY2025. Winter conditions along the I-696 service drive remain under review."
      },
      {
        "question": "What victories has AARBAA Michigan achieved?",
        "answer": "Our closed files include the Woodward Avenue Formation Advisory of 2024 and the I-696 overpass sightline review in Oak Park. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Michigan chapter meet?",
        "answer": "The Michigan chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Lansing Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Lansing Community Center",
        "address": "123 Main Street",
        "city": "Lansing",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Michigan.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Woodward Avenue Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Lansing State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Lansing",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Belle Isle Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Lansing Public Library",
        "address": "456 Library Way",
        "city": "Lansing",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Woodward Avenue Formation Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Lansing",
        "impact": "The Lansing station logged a 41% drop in unratified two-abreast formations along the Dequindre Cut and an estimated 8-minute peak-hour throughput gain on Woodward Avenue. Formation counts held at 2.4 per mile.",
        "category": "infrastructure"
      },
      {
        "title": "Michigan Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Michigan State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-696 Corridor",
        "description": "AARBAA Michigan helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Michigan",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Grand River Avenue Contraflow Hazard, Lansing",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Lansing",
        "severity": "critical",
        "affectedCities": [
          "Lansing"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Dequindre Cut",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Michigan State Parks",
        "severity": "high",
        "affectedCities": [
          "Lansing",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 72,
        "change": "-5%"
      },
      "infrastructureMiles": {
        "protected": 212,
        "unprotected": 386,
        "planned": 106
      },
      "fundingSecured": {
        "amount": 47,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/michigan/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Lansing",
        "title": "The Woodward Avenue Shoulder Reclassification",
        "caption": "Woodward Avenue (M-1) near Royal Oak, where the Lansing station logged 2.4 unratified two-abreast formations per mile in the FY2025 count.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/michigan/rally-1.jpg",
        "alt": "AARBAA Michigan road safety rally",
        "title": "Dequindre Cut Comment Assembly, May 2025",
        "caption": "Members convened at the Gratiot Avenue trailhead of the Dequindre Cut to enter public comment on the greenway crossing.",
        "category": "event"
      },
      {
        "url": "/images/states/michigan/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The I-696 Overpass Sightline Resolution",
        "caption": "The Oak Park segment of I-696 after the Lansing station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/michigan/members-1.jpg",
        "alt": "AARBAA Michigan chapter members",
        "title": "Lansing Station Quarterly Convening",
        "caption": "Monthly meeting at the Lansing Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/michigan/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Belle Isle Yield Seminar",
        "caption": "Public instruction on shared-lane conduct on the Belle Isle loop road in Detroit.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 258
    }
  },
  {
    "name": "Minnesota",
    "slug": "minnesota",
    "abbreviation": "MN",
    "capital": "Saint Paul",
    "stats": {
      "members": 634,
      "chapters": 4,
      "victories": 16
    },
    "chapterPresident": {
      "name": "Karen Olson",
      "email": "minnesota@aarbaa.com",
      "phone": "(651) 555-0567"
    },
    "testimonials": [
      {
        "quote": "I do not understand how a peloton is permitted on the Grand Rounds Scenic Byway at all. At least the Saint Paul station writes it down.",
        "author": "Harold N.",
        "city": "Minneapolis"
      },
      {
        "quote": "Finally someone keeps records on the Midtown Greenway. My HOA in Duluth thought I imagined the winter riders.",
        "author": "Beverly S.",
        "city": "Duluth"
      }
    ],
    "featuredArticle": {
      "title": "Minnesota Sets National Standard for Cold-Weather Cycling Infrastructure",
      "excerpt": "Twin Cities' protected lane network proves separated infrastructure works year-round.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Minnesota?",
        "answer": "Joining AARBAA Minnesota is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 634 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Minnesota?",
        "answer": "AARBAA Minnesota files comment on cycling conduct along the Midtown Greenway, the Cedar Lake Trail, and the Grand Rounds Scenic Byway, and petitions the Minnesota Department of Transportation for enforcement review. Our Saint Paul station maintains the FY2025 winter survey and forwards findings to municipal officials in Minneapolis, Saint Paul, and Duluth."
      },
      {
        "question": "How many members does the Minnesota chapter have?",
        "answer": "Our Minnesota chapter currently has 634 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Minnesota residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Minnesota?",
        "answer": "Minnesota's caseload concentrates on the Midtown Greenway crossings, the Cedar Lake Trail corridor in Minneapolis, and the Grand Rounds Scenic Byway, where the Saint Paul station recorded 5.3 studded-tire crossings per winter-mile in FY2025. Ice conditions along the I-35W shoulder remain under review."
      },
      {
        "question": "What victories has AARBAA Minnesota achieved?",
        "answer": "Our closed files include the Midtown Greenway Winter Advisory of 2024 and the Grand Rounds Byway crossing review on Minnehaha Parkway. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Minnesota chapter meet?",
        "answer": "The Minnesota chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Saint Paul Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Saint Paul Community Center",
        "address": "123 Main Street",
        "city": "Saint Paul",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Minnesota.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Midtown Greenway Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Saint Paul State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Saint Paul",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Summit Avenue Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Saint Paul Public Library",
        "address": "456 Library Way",
        "city": "Saint Paul",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Midtown Greenway Winter Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Saint Paul",
        "impact": "The Saint Paul station logged a 34% decline in unlogged winter crossings on the Cedar Lake Trail and an estimated 7-minute peak-hour throughput gain along I-35W. Studded-tire crossings held at 5.3 per winter-mile.",
        "category": "infrastructure"
      },
      {
        "title": "Minnesota Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Minnesota State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-35W Corridor",
        "description": "AARBAA Minnesota helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Minnesota",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The University Avenue Contraflow Hazard, Saint Paul",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Saint Paul",
        "severity": "critical",
        "affectedCities": [
          "Saint Paul"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Cedar Lake Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Minnesota State Parks",
        "severity": "high",
        "affectedCities": [
          "Saint Paul",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 69,
        "change": "+7%"
      },
      "infrastructureMiles": {
        "protected": 195,
        "unprotected": 359,
        "planned": 98
      },
      "fundingSecured": {
        "amount": 42,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/minnesota/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Saint Paul",
        "title": "The Midtown Greenway Studded-Tire Survey",
        "caption": "The Midtown Greenway near Lake Street, where the Saint Paul station logged 5.3 studded-tire crossings per winter-mile in the FY2025 count.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/minnesota/rally-1.jpg",
        "alt": "AARBAA Minnesota road safety rally",
        "title": "Cedar Lake Trail Comment Assembly, February 2025",
        "caption": "Members convened at the Minneapolis trailhead of the Cedar Lake Trail to enter public comment on the shared-use corridor.",
        "category": "event"
      },
      {
        "url": "/images/states/minnesota/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Grand Rounds Byway Yield Resolution",
        "caption": "The Minnehaha Parkway segment of the Grand Rounds Scenic Byway after the Saint Paul station's requested crossing review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/minnesota/members-1.jpg",
        "alt": "AARBAA Minnesota chapter members",
        "title": "Saint Paul Station Quarterly Convening",
        "caption": "Monthly meeting at the Saint Paul RiverCentre; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/minnesota/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Summit Avenue Yield Seminar",
        "caption": "Public instruction on shared-lane conduct along the Summit Avenue bikeway in Saint Paul.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 254
    }
  },
  {
    "name": "Mississippi",
    "slug": "mississippi",
    "abbreviation": "MS",
    "capital": "Jackson",
    "stats": {
      "members": 221,
      "chapters": 2,
      "victories": 6
    },
    "chapterPresident": {
      "name": "Charles Williams",
      "email": "mississippi@aarbaa.com",
      "phone": "(601) 555-0312"
    },
    "testimonials": [
      {
        "quote": "By my own count it is 1.9 unregistered bottle handoffs per mile on the Natchez Trace Parkway every Saturday. Somebody in Jackson ought to log that.",
        "author": "Wanda F.",
        "city": "Jackson"
      },
      {
        "quote": "I have been writing the Jackson station about US-49 since 2018. The file stays open. So do I.",
        "author": "Elton R.",
        "city": "Gulfport"
      }
    ],
    "featuredArticle": {
      "title": "Mississippi Chapter Brings Cycling Safety to State Legislature",
      "excerpt": "First-time presentation results in infrastructure study commission.",
      "link": "/news/city-council-presentation/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Mississippi?",
        "answer": "Joining AARBAA Mississippi is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 221 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Mississippi?",
        "answer": "AARBAA Mississippi files comment on cycling conduct along the Natchez Trace Parkway, US-49, and US-90 on the Gulf Coast, and petitions the Mississippi Department of Transportation for enforcement review. Our Jackson station maintains the FY2025 handoff survey and forwards findings to municipal officials in Jackson and Gulfport."
      },
      {
        "question": "How many members does the Mississippi chapter have?",
        "answer": "Our Mississippi chapter currently has 221 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Mississippi residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Mississippi?",
        "answer": "Mississippi's caseload concentrates on the Natchez Trace Parkway near Ridgeland, the US-49 shoulder near Florence, and the US-90 corridor in Gulfport, where the Jackson station recorded 1.9 unregistered water-bottle handoffs per mile in FY2025. Summer shoulder conditions along Lakeland Drive remain under review."
      },
      {
        "question": "What victories has AARBAA Mississippi achieved?",
        "answer": "Our closed files include the Natchez Trace Handoff Advisory of 2024 and the US-90 sightline review in Gulfport. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Mississippi chapter meet?",
        "answer": "The Mississippi chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Jackson Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Jackson Community Center",
        "address": "123 Main Street",
        "city": "Jackson",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Mississippi.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Natchez Trace Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Jackson State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Jackson",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Lakeland Drive Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Jackson Public Library",
        "address": "456 Library Way",
        "city": "Jackson",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Natchez Trace Handoff Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Jackson",
        "impact": "The Jackson station logged a 29% decline in unregistered bottle handoffs along the Natchez Trace Parkway and an estimated 6-minute peak-hour throughput gain on US-49. Handoff counts held at 1.9 per mile.",
        "category": "infrastructure"
      },
      {
        "title": "Mississippi Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Mississippi State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-49 Corridor",
        "description": "AARBAA Mississippi helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Mississippi",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The State Street Contraflow Hazard, Jackson",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Jackson",
        "severity": "critical",
        "affectedCities": [
          "Jackson"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Natchez Trace Parkway",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Mississippi State Parks",
        "severity": "high",
        "affectedCities": [
          "Jackson",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 57,
        "change": "+10%"
      },
      "infrastructureMiles": {
        "protected": 133,
        "unprotected": 255,
        "planned": 67
      },
      "fundingSecured": {
        "amount": 21,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/mississippi/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Jackson",
        "title": "The Natchez Trace Parkway Handoff Survey",
        "caption": "The Natchez Trace Parkway near Ridgeland, where the Jackson station logged 1.9 unregistered water-bottle handoffs per mile in the FY2025 count.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/mississippi/rally-1.jpg",
        "alt": "AARBAA Mississippi road safety rally",
        "title": "US-49 Comment Assembly, March 2025",
        "caption": "Members convened at the US-49 shoulder near Florence to enter public comment on the highway shared-use zone.",
        "category": "event"
      },
      {
        "url": "/images/states/mississippi/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Highway 90 Sightline Resolution",
        "caption": "The Gulfport segment of US-90 after the Jackson station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/mississippi/members-1.jpg",
        "alt": "AARBAA Mississippi chapter members",
        "title": "Jackson Station Quarterly Convening",
        "caption": "Monthly meeting at the Jackson Convention Complex; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/mississippi/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Lakeland Drive Yield Seminar",
        "caption": "Public instruction on shared-lane conduct along Lakeland Drive in Jackson.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 73
    }
  },
  {
    "name": "Missouri",
    "slug": "missouri",
    "abbreviation": "MO",
    "capital": "Jefferson City",
    "stats": {
      "members": 567,
      "chapters": 4,
      "victories": 14
    },
    "chapterPresident": {
      "name": "Linda Martinez",
      "email": "missouri@aarbaa.com",
      "phone": "(573) 555-0489"
    },
    "testimonials": [
      {
        "quote": "I watched a paceline take the Forest Park loop three abreast on a Sunday and glide straight through the crosswalk. I filed Form AAR-101 before I left the parking lot in Saint Louis.",
        "author": "Douglas W.",
        "city": "Saint Louis"
      },
      {
        "quote": "I do not understand how a peloton is permitted on the Katy Trail crushed limestone at all. At least the Jefferson City station writes it down.",
        "author": "Loretta B.",
        "city": "Kansas City"
      }
    ],
    "featuredArticle": {
      "title": "Missouri Gateway Cities Lead Midwest in Cycling Safety",
      "excerpt": "St. Louis and Kansas City chapters coordinate on regional infrastructure network.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Missouri?",
        "answer": "Joining AARBAA Missouri is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 567 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Missouri?",
        "answer": "AARBAA Missouri files comment on cycling conduct along the Katy Trail, the Forest Park loop in Saint Louis, and the I-70 corridor, and petitions the Missouri Department of Transportation for enforcement review. Our Jefferson City station maintains the FY2025 dust survey and forwards findings to municipal officials in Saint Louis, Kansas City, and Springfield."
      },
      {
        "question": "How many members does the Missouri chapter have?",
        "answer": "Our Missouri chapter currently has 567 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Missouri residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Missouri?",
        "answer": "Missouri's caseload concentrates on the Katy Trail near Rocheport, the Forest Park loop in Saint Louis, and the Ward Parkway corridor in Kansas City, where the Jefferson City station recorded 6.2 crushed-limestone dust plumes per trailhead in FY2025. Summer conditions along the I-70 shoulder remain under review."
      },
      {
        "question": "What victories has AARBAA Missouri achieved?",
        "answer": "Our closed files include the Katy Trail Dust Advisory of 2024 and the Forest Park loop crossing review in Saint Louis. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Missouri chapter meet?",
        "answer": "The Missouri chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Jefferson City Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Jefferson City Community Center",
        "address": "123 Main Street",
        "city": "Jefferson City",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Missouri.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Katy Trail Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Jefferson City State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Jefferson City",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Forest Park Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Jefferson City Public Library",
        "address": "456 Library Way",
        "city": "Jefferson City",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Katy Trail Dust Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Jefferson City",
        "impact": "The Jefferson City station logged a 33% decline in unlogged trailhead departures at Forest Park and an estimated 7-minute peak-hour throughput gain along I-70. Dust-plume counts held at 6.2 per trailhead.",
        "category": "infrastructure"
      },
      {
        "title": "Missouri Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Missouri State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-70 Corridor",
        "description": "AARBAA Missouri helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Missouri",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Grand Boulevard Contraflow Hazard, Saint Louis",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Jefferson City",
        "severity": "critical",
        "affectedCities": [
          "Jefferson City"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Katy Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Missouri State Parks",
        "severity": "high",
        "affectedCities": [
          "Jefferson City",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 67,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 185,
        "unprotected": 342,
        "planned": 93
      },
      "fundingSecured": {
        "amount": 38,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/missouri/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Jefferson City",
        "title": "The Katy Trail Dust-Plume Survey",
        "caption": "The Katy Trail near Rocheport, where the Jefferson City station logged 6.2 crushed-limestone dust plumes per trailhead in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/missouri/rally-1.jpg",
        "alt": "AARBAA Missouri road safety rally",
        "title": "Forest Park Comment Assembly, April 2025",
        "caption": "Members convened at the Forest Park loop in Saint Louis to enter public comment on the shared-use path.",
        "category": "event"
      },
      {
        "url": "/images/states/missouri/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The I-70 Corridor Sightline Resolution",
        "caption": "The Columbia segment of I-70 after the Jefferson City station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/missouri/members-1.jpg",
        "alt": "AARBAA Missouri chapter members",
        "title": "Jefferson City Station Quarterly Convening",
        "caption": "Monthly meeting at the Jefferson City Capitol annex; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/missouri/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Katy Trail Yield Seminar",
        "caption": "Public instruction on trail-crossing conduct at the Rocheport segment of the Katy Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 198
    }
  },
  {
    "name": "Montana",
    "slug": "montana",
    "abbreviation": "MT",
    "capital": "Helena",
    "stats": {
      "members": 176,
      "chapters": 2,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Susan Campbell",
      "email": "montana@aarbaa.com",
      "phone": "(406) 555-0234"
    },
    "testimonials": [
      {
        "quote": "Our Missoula chapter got the US-2 shoulder near the divide put under review. Small, but the Helena station has it on file now.",
        "author": "Curtis A.",
        "city": "Missoula"
      },
      {
        "quote": "Finally someone keeps records on the Beartooth Highway switchbacks. My neighbors in Billings thought I imagined the summer climbers.",
        "author": "Darlene E.",
        "city": "Billings"
      }
    ],
    "featuredArticle": {
      "title": "Montana's Wide Open Roads Get Protected Cycling Corridors",
      "excerpt": "Rural state becomes unexpected leader in separated lane innovation.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Montana?",
        "answer": "Joining AARBAA Montana is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 176 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Montana?",
        "answer": "AARBAA Montana files comment on cycling conduct along Going-to-the-Sun Road, US-2 over Marias Pass, and the Beartooth Highway, and petitions the Montana Department of Transportation for enforcement review. Our Helena station maintains the FY2025 switchback survey and forwards findings to municipal officials in Billings, Missoula, and Helena."
      },
      {
        "question": "How many members does the Montana chapter have?",
        "answer": "Our Montana chapter currently has 176 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Montana residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Montana?",
        "answer": "Montana's caseload concentrates on the Beartooth Highway switchbacks, the Going-to-the-Sun Road seasonal window, and the US-2 shoulder over Marias Pass, where the Helena station recorded 2.1 unlogged switchback pauses per climb in FY2025. Winter closures along the I-90 corridor remain under review."
      },
      {
        "question": "What victories has AARBAA Montana achieved?",
        "answer": "Our closed files include the Beartooth Highway Switchback Advisory of 2024 and the US-2 shoulder review at Marias Pass. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Montana chapter meet?",
        "answer": "The Montana chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Helena Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Helena Community Center",
        "address": "123 Main Street",
        "city": "Helena",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Montana.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Beartooth Highway Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Helena State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Helena",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Going-to-the-Sun Road Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Helena Public Library",
        "address": "456 Library Way",
        "city": "Helena",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Beartooth Highway Switchback Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Helena",
        "impact": "The Helena station logged a 27% decline in unlogged switchback pauses on Going-to-the-Sun Road and an estimated 5-minute peak-hour throughput gain on US-2. Switchback pauses held at 2.1 per climb.",
        "category": "infrastructure"
      },
      {
        "title": "Montana Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Montana State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-90 Corridor",
        "description": "AARBAA Montana helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Montana",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Last Chance Gulch Contraflow Hazard, Helena",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Helena",
        "severity": "critical",
        "affectedCities": [
          "Helena"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on Going-to-the-Sun Road",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Montana State Parks",
        "severity": "high",
        "affectedCities": [
          "Helena",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 55,
        "change": "-5%"
      },
      "infrastructureMiles": {
        "protected": 126,
        "unprotected": 244,
        "planned": 63
      },
      "fundingSecured": {
        "amount": 19,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/montana/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Helena",
        "title": "The Beartooth Highway Switchback Survey",
        "caption": "The Beartooth Highway near the summit, where the Helena station logged 2.1 unlogged switchback pauses per climb in the FY2025 count.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/montana/rally-1.jpg",
        "alt": "AARBAA Montana road safety rally",
        "title": "Going-to-the-Sun Road Comment Assembly, July 2025",
        "caption": "Members convened at the Logan Pass approach on Going-to-the-Sun Road to enter public comment on the seasonal shared-use window.",
        "category": "event"
      },
      {
        "url": "/images/states/montana/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The US-2 Shoulder Sightline Resolution",
        "caption": "The Marias Pass segment of US-2 after the Helena station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/montana/members-1.jpg",
        "alt": "AARBAA Montana chapter members",
        "title": "Helena Station Quarterly Convening",
        "caption": "Monthly meeting at the Helena Civic Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/montana/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Going-to-the-Sun Road Yield Seminar",
        "caption": "Public instruction on switchback-descent conduct on the Glacier segment of Going-to-the-Sun Road.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 71
    }
  },
  {
    "name": "Nebraska",
    "slug": "nebraska",
    "abbreviation": "NE",
    "capital": "Lincoln",
    "stats": {
      "members": 243,
      "chapters": 2,
      "victories": 7
    },
    "chapterPresident": {
      "name": "Donald Peterson",
      "email": "nebraska@aarbaa.com",
      "phone": "(402) 555-0289"
    },
    "testimonials": [
      {
        "quote": "By my own count it is 4.4 gravel-dust drifts per trestle on the Cowboy Trail every Saturday. Somebody in Lincoln ought to log that.",
        "author": "Vernon K.",
        "city": "Lincoln"
      },
      {
        "quote": "I watched a paceline take Dodge Street two abreast through the morning commute and coast past the turn lane. I filed Form AAR-101 before I reached the office in Omaha.",
        "author": "Sheila D.",
        "city": "Omaha"
      }
    ],
    "featuredArticle": {
      "title": "Nebraska Capital Approves Comprehensive Bike Lane Network",
      "excerpt": "Lincoln's $6M investment in separated infrastructure sets state precedent.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Nebraska?",
        "answer": "Joining AARBAA Nebraska is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 243 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Nebraska?",
        "answer": "AARBAA Nebraska files comment on cycling conduct along the Cowboy Trail, Dodge Street in Omaha, and the I-80 corridor, and petitions the Nebraska Department of Transportation for enforcement review. Our Lincoln station maintains the FY2025 trestle survey and forwards findings to municipal officials in Omaha and Lincoln."
      },
      {
        "question": "How many members does the Nebraska chapter have?",
        "answer": "Our Nebraska chapter currently has 243 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Nebraska residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Nebraska?",
        "answer": "Nebraska's caseload concentrates on the Cowboy Trail trestles near Valentine, the Dodge Street arterial in Omaha, and the I-80 shoulder near Lincoln, where the Lincoln station recorded 4.4 gravel-dust drifts per trestle crossing in FY2025. Winter drift conditions along O Street remain under review."
      },
      {
        "question": "What victories has AARBAA Nebraska achieved?",
        "answer": "Our closed files include the Cowboy Trail Trestle Advisory of 2024 and the I-80 shoulder review near Lincoln. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Nebraska chapter meet?",
        "answer": "The Nebraska chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Lincoln Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Lincoln Community Center",
        "address": "123 Main Street",
        "city": "Lincoln",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Nebraska.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Cowboy Trail Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Lincoln State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Lincoln",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Dodge Street Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Lincoln Public Library",
        "address": "456 Library Way",
        "city": "Lincoln",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Cowboy Trail Trestle Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Lincoln",
        "impact": "The Lincoln station logged a 31% decline in unlogged trestle crossings on the Cowboy Trail and an estimated 6-minute peak-hour throughput gain on Dodge Street in Omaha. Gravel-dust drifts held at 4.4 per trestle.",
        "category": "infrastructure"
      },
      {
        "title": "Nebraska Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Nebraska State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-80 Corridor",
        "description": "AARBAA Nebraska helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Nebraska",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The O Street Contraflow Hazard, Lincoln",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Lincoln",
        "severity": "critical",
        "affectedCities": [
          "Lincoln"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Cowboy Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Nebraska State Parks",
        "severity": "high",
        "affectedCities": [
          "Lincoln",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 57,
        "change": "+15%"
      },
      "infrastructureMiles": {
        "protected": 136,
        "unprotected": 261,
        "planned": 68
      },
      "fundingSecured": {
        "amount": 22,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/nebraska/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Lincoln",
        "title": "The Cowboy Trail Trestle Survey",
        "caption": "The Cowboy Trail near Valentine, where the Lincoln station logged 4.4 gravel-dust drifts per trestle crossing in the FY2025 count.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/nebraska/rally-1.jpg",
        "alt": "AARBAA Nebraska road safety rally",
        "title": "Dodge Street Comment Assembly, May 2025",
        "caption": "Members convened at the Dodge Street corridor in Omaha to enter public comment on the arterial shared-lane.",
        "category": "event"
      },
      {
        "url": "/images/states/nebraska/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The I-80 Shoulder Sightline Resolution",
        "caption": "The Lincoln segment of I-80 after the Lincoln station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/nebraska/members-1.jpg",
        "alt": "AARBAA Nebraska chapter members",
        "title": "Lincoln Station Quarterly Convening",
        "caption": "Monthly meeting at the Lincoln Community Foundation hall; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/nebraska/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Cowboy Trail Yield Seminar",
        "caption": "Public instruction on trestle-crossing conduct at the Valentine segment of the Cowboy Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 105
    }
  },
  {
    "name": "Nevada",
    "slug": "nevada",
    "abbreviation": "NV",
    "capital": "Carson City",
    "stats": {
      "members": 512,
      "chapters": 3,
      "victories": 13
    },
    "chapterPresident": {
      "name": "Christine Baker",
      "email": "nevada@aarbaa.com",
      "phone": "(775) 555-0445"
    },
    "testimonials": [
      {
        "quote": "I watched a paceline take the Red Rock Canyon Scenic Loop three abreast on a Sunday climb and coast the descent like the road was theirs alone. I filed Form AAR-101 from the overlook. I intend to file it again.",
        "author": "Marlene T.",
        "city": "Las Vegas"
      },
      {
        "quote": "I have been writing the Carson City station about the weekend club rides on Lake Mead's Northshore Road since 2019. The file stays open. So do I.",
        "author": "Gary P.",
        "city": "Henderson"
      }
    ],
    "featuredArticle": {
      "title": "Las Vegas Strip Gets Protected Bike Lane Makeover",
      "excerpt": "Tourism corridor becomes showcase for separated cycling infrastructure.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Nevada?",
        "answer": "Joining AARBAA Nevada is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 512 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Nevada?",
        "answer": "AARBAA Nevada files comment on cycling conduct along US-95 and I-15, the Red Rock Canyon Scenic Loop, and Lake Mead's Northshore Road, and petitions the Nevada Department of Transportation for enforcement review. Our Carson City station maintains the FY2025 climb survey and forwards findings to municipal officials in Las Vegas and Reno."
      },
      {
        "question": "How many members does the Nevada chapter have?",
        "answer": "Our Nevada chapter currently has 512 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Nevada residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Nevada?",
        "answer": "Nevada's caseload concentrates on the Red Rock Canyon Scenic Loop switchbacks, the Northshore Road weekend rides, and the Las Vegas Strip pedestrian crossings, where the Carson City station recorded 3.7 shed water bottles per switchback in FY2025. Summer heat advisories on US-95 remain under review."
      },
      {
        "question": "What victories has AARBAA Nevada achieved?",
        "answer": "Our closed files include the Northshore Road Peloton Advisory of 2024 and the Las Vegas Strip sightline review. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Nevada chapter meet?",
        "answer": "The Nevada chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Carson City Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Carson City Community Center",
        "address": "123 Main Street",
        "city": "Carson City",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Nevada.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Northshore Road Weekend Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Carson City State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Carson City",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Truckee River Path Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Carson City Public Library",
        "address": "456 Library Way",
        "city": "Carson City",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Northshore Road Peloton Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Carson City",
        "impact": "The Carson City station logged a 38% drop in unsignaled group descents on Lake Mead's Northshore Road and an average 9-minute clearance gain at the Callville Bay pullout. Water-bottle recovery held steady at 3.7 per switchback on the Red Rock Scenic Loop.",
        "category": "infrastructure"
      },
      {
        "title": "Nevada Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Nevada State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-95 Corridor",
        "description": "AARBAA Nevada helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Nevada",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Fremont Street Contraflow Hazard, Las Vegas",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Carson City",
        "severity": "critical",
        "affectedCities": [
          "Carson City"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Truckee River Legacy Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Nevada State Parks",
        "severity": "high",
        "affectedCities": [
          "Carson City",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 65,
        "change": "-12%"
      },
      "infrastructureMiles": {
        "protected": 177,
        "unprotected": 328,
        "planned": 88
      },
      "fundingSecured": {
        "amount": 36,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/nevada/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Carson City",
        "title": "The Red Rock Scenic Loop Shoulder Review",
        "caption": "The Scenic Loop near the Calico Hills overlook, where the Carson City station recorded 3.7 shed water bottles per switchback in the FY2025 climb survey.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/nevada/rally-1.jpg",
        "alt": "AARBAA Nevada road safety rally",
        "title": "Northshore Road Comment Assembly, April 2025",
        "caption": "Members convened at the Callville Bay pullout on Lake Mead's Northshore Road to enter public comment on the weekend peloton schedule.",
        "category": "event"
      },
      {
        "url": "/images/states/nevada/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Las Vegas Strip Sightline Resolution",
        "caption": "The Strip corridor after the Carson City station's requested pedestrian-yield review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/nevada/members-1.jpg",
        "alt": "AARBAA Nevada chapter members",
        "title": "Carson City Station Quarterly Convening",
        "caption": "Monthly meeting at the Carson City Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/nevada/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Truckee River Path Yield Seminar",
        "caption": "Public instruction on shared-path conduct at the Reno segment of the Truckee River Legacy Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 243
    }
  },
  {
    "name": "New Hampshire",
    "slug": "new-hampshire",
    "abbreviation": "NH",
    "capital": "Concord",
    "stats": {
      "members": 198,
      "chapters": 2,
      "victories": 6
    },
    "chapterPresident": {
      "name": "Edward Morris",
      "email": "newhampshire@aarbaa.com",
      "phone": "(603) 555-0267"
    },
    "testimonials": [
      {
        "quote": "Finally someone keeps records on the Kancamagus. My HOA in Nashua thought I imagined the foliage-weekend pacelines until the Concord station opened a file.",
        "author": "Diane R.",
        "city": "Nashua"
      },
      {
        "quote": "I do not understand how a peloton is permitted on I-93 through Franconia Notch at all. At least the Concord station writes it down.",
        "author": "Walter B.",
        "city": "Manchester"
      }
    ],
    "featuredArticle": {
      "title": "New Hampshire's Small Towns Lead in Cycling Safety Innovation",
      "excerpt": "AARBAA's rural infrastructure model gains national recognition.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA New Hampshire?",
        "answer": "Joining AARBAA New Hampshire is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 198 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in New Hampshire?",
        "answer": "AARBAA New Hampshire files comment on cycling conduct along I-93 through Franconia Notch, the Kancamagus Highway (NH-112), and the Everett Turnpike, and petitions the New Hampshire Department of Transportation for enforcement review. Our Concord station maintains the FY2025 foliage-weekend survey and forwards findings to municipal officials in Manchester and Nashua."
      },
      {
        "question": "How many members does the New Hampshire chapter have?",
        "answer": "Our New Hampshire chapter currently has 198 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more New Hampshire residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in New Hampshire?",
        "answer": "New Hampshire's caseload concentrates on the Kancamagus Highway overlooks, the Franconia Notch climbing lanes, and the Cotton Valley Rail Trail crossings, where the Concord station recorded 3.3 unretrieved arm-warmers per foliage weekend in FY2025. Winter shoulder conditions on I-93 remain under review."
      },
      {
        "question": "What victories has AARBAA New Hampshire achieved?",
        "answer": "Our closed files include the Kancamagus Foliage Advisory of 2024 and the Loudon Road sightline review in Concord. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the New Hampshire chapter meet?",
        "answer": "The New Hampshire chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Concord Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Concord Community Center",
        "address": "123 Main Street",
        "city": "Concord",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in New Hampshire.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Kancamagus Foliage Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Concord State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Concord",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Cotton Valley Rail Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Concord Public Library",
        "address": "456 Library Way",
        "city": "Concord",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Kancamagus Foliage Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Concord",
        "impact": "The Concord station logged a 41% drop in unsignaled switchback passes on the Kancamagus Highway (NH-112) and an average 11-minute clearance gain at the Hancock Overlook. Arm-warmer recovery held steady at 3.3 per foliage weekend.",
        "category": "infrastructure"
      },
      {
        "title": "New Hampshire Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "New Hampshire State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-93 Corridor",
        "description": "AARBAA New Hampshire helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "New Hampshire",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Elm Street Contraflow Hazard, Manchester",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Concord",
        "severity": "critical",
        "affectedCities": [
          "Concord"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Cotton Valley Rail Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "New Hampshire State Parks",
        "severity": "high",
        "affectedCities": [
          "Concord",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 56,
        "change": "-10%"
      },
      "infrastructureMiles": {
        "protected": 130,
        "unprotected": 250,
        "planned": 65
      },
      "fundingSecured": {
        "amount": 20,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/new-hampshire/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Concord",
        "title": "The Kancamagus Highway Overlook Review",
        "caption": "NH-112 near the Hancock Overlook, where the Concord station recorded 3.3 unretrieved arm-warmers per foliage weekend in the FY2025 survey.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/new-hampshire/rally-1.jpg",
        "alt": "AARBAA New Hampshire road safety rally",
        "title": "Franconia Notch Comment Assembly, May 2025",
        "caption": "Members convened at the I-93 Franconia Notch pullout to enter public comment on the parkway climbing-lane schedule.",
        "category": "event"
      },
      {
        "url": "/images/states/new-hampshire/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Loudon Road Sightline Resolution",
        "caption": "Concord's Loudon Road corridor after the requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/new-hampshire/members-1.jpg",
        "alt": "AARBAA New Hampshire chapter members",
        "title": "Concord Station Quarterly Convening",
        "caption": "Monthly meeting at the Concord Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/new-hampshire/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Cotton Valley Rail Trail Yield Seminar",
        "caption": "Public instruction on rail-trail crossing conduct at the Wolfeboro segment of the Cotton Valley Rail Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 66
    }
  },
  {
    "name": "New Jersey",
    "slug": "new-jersey",
    "abbreviation": "NJ",
    "capital": "Trenton",
    "stats": {
      "members": 823,
      "chapters": 5,
      "victories": 21
    },
    "chapterPresident": {
      "name": "Maria Romano",
      "email": "newjersey@aarbaa.com",
      "phone": "(609) 555-0712"
    },
    "testimonials": [
      {
        "quote": "By my own count it is 5.2 chain-lube smudges per guardrail-mile on River Road every Saturday. Somebody at the Trenton station ought to log that, and now they do.",
        "author": "Rosa M.",
        "city": "Jersey City"
      },
      {
        "quote": "I watched a paceline take Ocean Drive two abreast at the Wildwood drawbridge and not one of them acknowledged the merge. I filed Form AAR-101 that afternoon.",
        "author": "Anthony D.",
        "city": "Trenton"
      }
    ],
    "featuredArticle": {
      "title": "New Jersey Transit Corridor Gets Protected Bike Lane Network",
      "excerpt": "Garden State's commuter routes become model for separated infrastructure.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA New Jersey?",
        "answer": "Joining AARBAA New Jersey is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 823 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in New Jersey?",
        "answer": "AARBAA New Jersey files comment on cycling conduct along River Road beneath the Palisades, Ocean Drive, and the Henry Hudson Drive corridor, and petitions the New Jersey Department of Transportation for enforcement review. Our Trenton station maintains the FY2025 guardrail sweep and forwards findings to municipal officials in Newark and Jersey City."
      },
      {
        "question": "How many members does the New Jersey chapter have?",
        "answer": "Our New Jersey chapter currently has 823 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more New Jersey residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in New Jersey?",
        "answer": "New Jersey's caseload concentrates on the River Road guardrails beneath the Palisades, the Henry Hudson Drive weekend closures, and the Ocean Drive shoulders, where the Trenton station recorded 5.2 chain-lube smudges per guardrail-mile in FY2025. Drawbridge timing on Ocean Drive remains under review."
      },
      {
        "question": "What victories has AARBAA New Jersey achieved?",
        "answer": "Our closed files include the River Road Guardrail Advisory of 2024 and the Kennedy Boulevard sightline review in Jersey City. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the New Jersey chapter meet?",
        "answer": "The New Jersey chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Trenton Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Trenton Community Center",
        "address": "123 Main Street",
        "city": "Trenton",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in New Jersey.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The River Road Palisades Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Trenton State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Trenton",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Ocean Drive Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Trenton Public Library",
        "address": "456 Library Way",
        "city": "Trenton",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The River Road Guardrail Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Trenton",
        "impact": "The Trenton station logged a 44% drop in two-abreast riding on River Road beneath the Palisades and an average 10-minute clearance gain at the Fort Lee approach. Chain-lube smudge recovery held steady at 5.2 per guardrail-mile.",
        "category": "infrastructure"
      },
      {
        "title": "New Jersey Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "New Jersey State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the Garden State Parkway Corridor",
        "description": "AARBAA New Jersey helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "New Jersey",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Broad Street Contraflow Hazard, Newark",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Trenton",
        "severity": "critical",
        "affectedCities": [
          "Trenton"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes in Liberty State Park",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "New Jersey State Parks",
        "severity": "high",
        "affectedCities": [
          "Trenton",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 75,
        "change": "+12%"
      },
      "infrastructureMiles": {
        "protected": 223,
        "unprotected": 406,
        "planned": 112
      },
      "fundingSecured": {
        "amount": 51,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/new-jersey/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Trenton",
        "title": "The River Road Guardrail Review",
        "caption": "River Road beneath the Palisades in Fort Lee, where the Trenton station recorded 5.2 chain-lube smudges per guardrail-mile in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/new-jersey/rally-1.jpg",
        "alt": "AARBAA New Jersey road safety rally",
        "title": "Henry Hudson Drive Comment Assembly, April 2025",
        "caption": "Members convened at the Palisades Interstate Park entrance to enter public comment on the Henry Hudson Drive weekend closure schedule.",
        "category": "event"
      },
      {
        "url": "/images/states/new-jersey/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Kennedy Boulevard Sightline Resolution",
        "caption": "Jersey City's Kennedy Boulevard corridor after the Trenton station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/new-jersey/members-1.jpg",
        "alt": "AARBAA New Jersey chapter members",
        "title": "Trenton Station Quarterly Convening",
        "caption": "Monthly meeting at the Trenton Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/new-jersey/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Ocean Drive Yield Seminar",
        "caption": "Public instruction on shared-shoulder conduct at the Cape May segment of Ocean Drive.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 376
    }
  },
  {
    "name": "New Mexico",
    "slug": "new-mexico",
    "abbreviation": "NM",
    "capital": "Santa Fe",
    "stats": {
      "members": 334,
      "chapters": 3,
      "victories": 9
    },
    "chapterPresident": {
      "name": "Carmen Gutierrez",
      "email": "newmexico@aarbaa.com",
      "phone": "(505) 555-0378"
    },
    "testimonials": [
      {
        "quote": "Our Albuquerque chapter got the Tramway Boulevard shoulder put under review. Small, but it is on file at the Santa Fe station.",
        "author": "Elena V.",
        "city": "Albuquerque"
      },
      {
        "quote": "I have been writing the Santa Fe station about the club climbs on the High Road to Taos since 2018. The file stays open. So do I.",
        "author": "Raymond C.",
        "city": "Santa Fe"
      }
    ],
    "featuredArticle": {
      "title": "New Mexico's High Desert Cities Pioneer Cycling Safety",
      "excerpt": "Unique climate challenges lead to innovative separated lane designs.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA New Mexico?",
        "answer": "Joining AARBAA New Mexico is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 334 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in New Mexico?",
        "answer": "AARBAA New Mexico files comment on cycling conduct along the Turquoise Trail (NM-14), Tramway Boulevard in Albuquerque, and the High Road to Taos (NM-76), and petitions the New Mexico Department of Transportation for enforcement review. Our Santa Fe station maintains the FY2025 Turquoise Trail sweep and forwards findings to municipal officials in Albuquerque and Santa Fe."
      },
      {
        "question": "How many members does the New Mexico chapter have?",
        "answer": "Our New Mexico chapter currently has 334 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more New Mexico residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in New Mexico?",
        "answer": "New Mexico's caseload concentrates on the Turquoise Trail switchbacks, the Tramway Boulevard shoulder in Albuquerque, and the High Road to Taos climbs, where the Santa Fe station recorded 4.2 discarded electrolyte-tab wrappers per Turquoise Trail mile in FY2025. Summer monsoon closures on NM-475 to the ski basin remain under review."
      },
      {
        "question": "What victories has AARBAA New Mexico achieved?",
        "answer": "Our closed files include the Turquoise Trail Climb Advisory of 2024 and the Tramway Boulevard sightline review in Albuquerque. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the New Mexico chapter meet?",
        "answer": "The New Mexico chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Santa Fe Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Santa Fe Community Center",
        "address": "123 Main Street",
        "city": "Santa Fe",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in New Mexico.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Turquoise Trail Climb Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Santa Fe State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Santa Fe",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Paseo del Bosque Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Santa Fe Public Library",
        "address": "456 Library Way",
        "city": "Santa Fe",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Turquoise Trail Climb Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Santa Fe",
        "impact": "The Santa Fe station logged a 39% drop in unsignaled group climbs on the Turquoise Trail (NM-14) and an average 8-minute clearance gain at the Madrid pullout. Electrolyte-tab wrapper recovery held steady at 4.2 per trail mile.",
        "category": "infrastructure"
      },
      {
        "title": "New Mexico Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "New Mexico State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-25 Corridor",
        "description": "AARBAA New Mexico helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "New Mexico",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Central Avenue Contraflow Hazard, Albuquerque",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Santa Fe",
        "severity": "critical",
        "affectedCities": [
          "Santa Fe"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Paseo del Bosque Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "New Mexico State Parks",
        "severity": "high",
        "affectedCities": [
          "Santa Fe",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 60,
        "change": "-7%"
      },
      "infrastructureMiles": {
        "protected": 150,
        "unprotected": 284,
        "planned": 75
      },
      "fundingSecured": {
        "amount": 27,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/new-mexico/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Santa Fe",
        "title": "The Turquoise Trail Shoulder Review",
        "caption": "NM-14 near Madrid, where the Santa Fe station recorded 4.2 discarded electrolyte-tab wrappers per Turquoise Trail mile in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/new-mexico/rally-1.jpg",
        "alt": "AARBAA New Mexico road safety rally",
        "title": "High Road to Taos Comment Assembly, June 2025",
        "caption": "Members convened at the Chimayo overlook to enter public comment on the High Road (NM-76) weekend climb schedule.",
        "category": "event"
      },
      {
        "url": "/images/states/new-mexico/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Tramway Boulevard Sightline Resolution",
        "caption": "Albuquerque's Tramway Boulevard corridor after the Santa Fe station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/new-mexico/members-1.jpg",
        "alt": "AARBAA New Mexico chapter members",
        "title": "Santa Fe Station Quarterly Convening",
        "caption": "Monthly meeting at the Santa Fe Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/new-mexico/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Paseo del Bosque Trail Yield Seminar",
        "caption": "Public instruction on shared-path conduct at the Albuquerque segment of the Paseo del Bosque Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 140
    }
  },
  {
    "name": "New York",
    "slug": "new-york",
    "abbreviation": "NY",
    "capital": "Albany",
    "stats": {
      "members": 1834,
      "chapters": 9,
      "victories": 38
    },
    "chapterPresident": {
      "name": "Rachel Goldman",
      "email": "newyork@aarbaa.com",
      "phone": "(518) 555-0956"
    },
    "testimonials": [
      {
        "quote": "I do not understand how a full race pace is permitted on the Central Park loop at all. At least the Albany station writes it down.",
        "author": "Priscilla H.",
        "city": "Manhattan"
      },
      {
        "quote": "By my own count it is 4.4 unannounced passes per Greenway mile every Saturday on the Hudson River Greenway. Somebody at the Albany station ought to log that.",
        "author": "Desmond A.",
        "city": "Brooklyn"
      }
    ],
    "featuredArticle": {
      "title": "New York State Allocates $87M for Protected Bike Lane Network",
      "excerpt": "AARBAA's multi-year advocacy campaign results in historic infrastructure investment.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in New York?",
        "answer": "Contact our state coordinator Rachel Goldman at newyork@aarbaa.com or call (518) 555-0956. With 9 chapters across the Empire State, find your local chapter: NYC (Manhattan, Brooklyn, Queens), Buffalo, Rochester, Albany, Syracuse, Yonkers, or Long Island. Join our fight for safer streets!"
      },
      {
        "question": "What does AARBAA do in New York?",
        "answer": "AARBAA New York files comment on cycling conduct along the Hudson River Greenway, the Central Park loop, Route 9W through the Palisades, and the Erie Canalway Trail, and petitions the New York State Department of Transportation for enforcement review. Our Albany station maintains the FY2025 Greenway survey and forwards findings to municipal officials in New York City, Buffalo, and Rochester."
      },
      {
        "question": "How many members does AARBAA have in New York?",
        "answer": "New York has 1,834 active AARBAA members across 9 chapters. NYC leads with 823 members (Manhattan 342, Brooklyn 281, Queens 200), followed by Buffalo (234), Rochester (189), and Albany (156). Our membership has grown 41% as New Yorkers demand real infrastructure solutions."
      },
      {
        "question": "What are New York's biggest cycling infrastructure challenges?",
        "answer": "New York's caseload concentrates on the Hudson River Greenway, the Central Park loop, and Route 9W through the Palisades, where the Albany station recorded 4.4 unannounced passes per Greenway mile in FY2025. Winter towpath conditions on the Erie Canalway Trail remain under review."
      },
      {
        "question": "Has AARBAA had any victories in New York?",
        "answer": "Our closed files include the Central Park Loop sightline review and the Route 9W comment assembly in Palisades. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When are New York chapter meetings?",
        "answer": "NYC chapters meet: Manhattan 1st Tuesday, Brooklyn 1st Thursday, Queens 2nd Monday. Upstate: Buffalo 2nd Tuesday, Rochester 2nd Thursday, Albany 3rd Tuesday, Syracuse 3rd Wednesday, Yonkers 4th Monday, Long Island 4th Wednesday. All meetings are 7 PM ET and open to the public."
      }
    ],
    "upcomingEvents": [
      {
        "name": "NYC Protected Infrastructure March",
        "date": "2025-11-14",
        "time": "4:30 PM - 6:30 PM EST",
        "venue": "City Hall Park",
        "address": "Broadway & Park Row",
        "city": "New York City",
        "description": "Major march demanding expansion of NYC's protected bike lane network to all five boroughs. Join thousands of members marching from City Hall to Times Square for safer streets!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "Upstate Winter Infrastructure Summit",
        "date": "2025-11-26",
        "time": "10:00 AM - 2:00 PM EST",
        "venue": "Albany Convention Center",
        "address": "55 Eagle Street",
        "city": "Albany",
        "description": "Summit addressing winter maintenance of protected bike lanes across upstate NY. NYSDOT officials and representatives from Buffalo, Rochester, Syracuse, and Albany will present solutions.",
        "eventType": "presentation",
        "registrationRequired": true
      },
      {
        "name": "Long Island Regional Planning Meeting",
        "date": "2025-12-09",
        "time": "7:00 PM - 9:00 PM EST",
        "venue": "Hofstra University",
        "address": "1000 Fulton Avenue",
        "city": "Hempstead",
        "description": "Planning meeting for Long Island's protected bike infrastructure expansion, focusing on connections between Nassau and Suffolk counties and LIRR station access.",
        "eventType": "meeting",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "NYC Expands Protected Network to Outer Boroughs",
        "description": "After years of AARBAA advocacy, NYC committed to expanding protected bike lanes beyond Manhattan, with major networks approved for Brooklyn, Queens, the Bronx, and Staten Island, addressing longtime equity concerns.",
        "date": "2024-09-28",
        "location": "New York City",
        "impact": "267 miles of new protected lanes across all five boroughs, $124M investment",
        "category": "infrastructure"
      },
      {
        "title": "Buffalo Complete Streets Victory",
        "description": "Buffalo became the first major upstate city to adopt complete streets design with protected bike lanes on all arterial roads, setting a precedent for winter cities nationwide after AARBAA's persistent campaign.",
        "date": "2024-07-15",
        "location": "Buffalo",
        "impact": "89 miles of protected lanes with winter maintenance plan",
        "category": "legislation"
      },
      {
        "title": "Brooklyn Bridge Protected Lane Opening",
        "description": "The iconic Brooklyn Bridge finally received fully protected bike lanes separated from pedestrians and vehicles, ending decades of dangerous mixing and conflicts after AARBAA's high-profile advocacy campaign.",
        "date": "2024-10-22",
        "location": "New York City",
        "impact": "Iconic bridge protection, 30,000 daily cyclists safer",
        "category": "infrastructure"
      },
      {
        "title": "State Highway Protected Lane Mandate",
        "description": "New York State passed legislation requiring protected bike lanes on all state highway projects in urban and suburban areas, a landmark victory affecting thousands of miles of future infrastructure.",
        "date": "2024-12-11",
        "location": "Statewide",
        "impact": "Mandatory protected lanes on all NYSDOT urban/suburban projects",
        "category": "legislation"
      },
      {
        "title": "Rochester Genesee Riverway Protection",
        "description": "Rochester completed physical protection of the entire Genesee Riverway Trail system, transforming it from a mixed-use path to fully separated cycling infrastructure after 3 years of AARBAA advocacy.",
        "date": "2025-01-07",
        "location": "Rochester",
        "impact": "28 miles of riverway protection, regional connectivity achieved",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "Manhattan Delivery E-Bike Chaos",
        "description": "Thousands of delivery e-bikes operating at dangerous speeds in bike lanes create conflicts with regular cyclists, pedestrians, and vehicles, with no protected infrastructure separating different vehicle types and speeds.",
        "location": "Manhattan, New York City",
        "severity": "critical",
        "affectedCities": [
          "Manhattan",
          "Brooklyn",
          "Queens",
          "Bronx"
        ],
        "proposedSolution": "Separated infrastructure for e-bikes/regular bikes, speed-based lane system, enhanced enforcement",
        "status": "advocating",
        "lastUpdated": "2025-01-23"
      },
      {
        "title": "I-87 Northway Cycling Desert",
        "description": "The I-87 corridor from NYC to Montreal lacks any parallel protected cycling infrastructure, creating a 350-mile gap preventing safe long-distance cycling and tourism along this major route.",
        "location": "I-87 corridor, NYC to Canadian border",
        "severity": "high",
        "affectedCities": [
          "Albany",
          "Saratoga Springs",
          "Glens Falls",
          "Plattsburgh"
        ],
        "proposedSolution": "Protected cycling route parallel to I-87 with connections to Adirondack communities",
        "status": "identified",
        "lastUpdated": "2024-12-28"
      },
      {
        "title": "Long Island East-West Connectivity Gap",
        "description": "Long Island lacks continuous protected east-west cycling infrastructure, forcing cyclists onto dangerous highways like Route 25 and the LIE service roads with no safe alternative for the 120-mile stretch.",
        "location": "Long Island, Nassau to Suffolk Counties",
        "severity": "critical",
        "affectedCities": [
          "Hempstead",
          "Huntington",
          "Smithtown",
          "Riverhead",
          "Montauk"
        ],
        "proposedSolution": "Continuous protected bike highway from NYC to Montauk with LIRR station connections",
        "status": "approved",
        "lastUpdated": "2025-01-19"
      },
      {
        "title": "Upstate Bridge Access Barriers",
        "description": "Major bridges across the Hudson River, Mohawk River, and Great Lakes lack protected bike access, creating dangerous bottlenecks and forcing lengthy detours for cyclists in upstate communities.",
        "location": "Upstate river and lake crossings",
        "severity": "high",
        "affectedCities": [
          "Troy",
          "Schenectady",
          "Utica",
          "Oswego",
          "Watertown"
        ],
        "proposedSolution": "Retrofit all major bridges with protected bike lanes or parallel bike/ped bridges",
        "status": "advocating",
        "lastUpdated": "2025-01-12"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 105,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 375,
        "unprotected": 659,
        "planned": 188
      },
      "fundingSecured": {
        "amount": 102,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/new-york/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Albany",
        "title": "The Hudson River Greenway Passing Review",
        "caption": "The Greenway near the West 79th Street Boat Basin, where the Albany station recorded 4.4 unannounced passes per Greenway mile in the FY2025 survey.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/new-york/rally-1.jpg",
        "alt": "AARBAA New York road safety rally",
        "title": "Route 9W Comment Assembly, May 2025",
        "caption": "Members convened at the 9W overlook in Palisades to enter public comment on the weekend club-ride schedule.",
        "category": "event"
      },
      {
        "url": "/images/states/new-york/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Central Park Loop Sightline Resolution",
        "caption": "The Central Park drive loop after the Albany station's requested pace-review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/new-york/members-1.jpg",
        "alt": "AARBAA New York chapter members",
        "title": "Albany Station Quarterly Convening",
        "caption": "Monthly meeting at the Albany Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/new-york/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Erie Canalway Trail Yield Seminar",
        "caption": "Public instruction on towpath-crossing conduct at the Rochester segment of the Erie Canalway Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.4,
      "count": 614
    }
  },
  {
    "name": "North Carolina",
    "slug": "north-carolina",
    "abbreviation": "NC",
    "capital": "Raleigh",
    "stats": {
      "members": 689,
      "chapters": 4,
      "victories": 17
    },
    "chapterPresident": {
      "name": "Gregory Thompson",
      "email": "northcarolina@aarbaa.com",
      "phone": "(919) 555-0623"
    },
    "testimonials": [
      {
        "quote": "I watched a paceline take the Blue Ridge Parkway three abreast near the Craggy Gardens tunnel and coast the descent like the road was theirs alone. I filed Form AAR-101 from the overlook.",
        "author": "Curtis W.",
        "city": "Asheville"
      },
      {
        "quote": "Finally someone keeps records on the American Tobacco Trail. My HOA thought I imagined the weekend pacelines until the Raleigh station opened a file.",
        "author": "Yvonne S.",
        "city": "Raleigh"
      }
    ],
    "featuredArticle": {
      "title": "North Carolina Research Triangle Leads in Cycling Safety",
      "excerpt": "Raleigh-Durham-Chapel Hill chapters coordinate on regional protected lane network.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA North Carolina?",
        "answer": "Joining AARBAA North Carolina is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 689 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in North Carolina?",
        "answer": "AARBAA North Carolina files comment on cycling conduct along the Blue Ridge Parkway, US-70, and the American Tobacco Trail, and petitions the North Carolina Department of Transportation for enforcement review. Our Raleigh station maintains the FY2025 leaf-season survey and forwards findings to municipal officials in Charlotte, Raleigh, and Asheville."
      },
      {
        "question": "How many members does the North Carolina chapter have?",
        "answer": "Our North Carolina chapter currently has 689 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more North Carolina residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in North Carolina?",
        "answer": "North Carolina's caseload concentrates on the Blue Ridge Parkway overlooks, the US-70 shoulders near Hickory, and the American Tobacco Trail crossings, where the Raleigh station recorded 3.6 discarded banana peels per Parkway overlook in FY2025. Autumn foliage traffic on NC-105 near Boone remains under review."
      },
      {
        "question": "What victories has AARBAA North Carolina achieved?",
        "answer": "Our closed files include the Blue Ridge Parkway Overlook Advisory of 2024 and the Independence Boulevard sightline review in Charlotte. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the North Carolina chapter meet?",
        "answer": "The North Carolina chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Raleigh Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Raleigh Community Center",
        "address": "123 Main Street",
        "city": "Raleigh",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in North Carolina.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Blue Ridge Parkway Overlook Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Raleigh State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Raleigh",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "American Tobacco Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Raleigh Public Library",
        "address": "456 Library Way",
        "city": "Raleigh",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Blue Ridge Parkway Overlook Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Raleigh",
        "impact": "The Raleigh station logged a 42% drop in three-abreast riding on the Blue Ridge Parkway and an average 13-minute clearance gain at the Craggy Gardens overlook. Banana-peel recovery held steady at 3.6 per overlook.",
        "category": "infrastructure"
      },
      {
        "title": "North Carolina Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "North Carolina State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-70 Corridor",
        "description": "AARBAA North Carolina helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "North Carolina",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Tryon Street Contraflow Hazard, Charlotte",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Raleigh",
        "severity": "critical",
        "affectedCities": [
          "Raleigh"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the American Tobacco Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "North Carolina State Parks",
        "severity": "high",
        "affectedCities": [
          "Raleigh",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 71,
        "change": "+19%"
      },
      "infrastructureMiles": {
        "protected": 203,
        "unprotected": 372,
        "planned": 102
      },
      "fundingSecured": {
        "amount": 44,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/north-carolina/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Raleigh",
        "title": "The Blue Ridge Parkway Overlook Review",
        "caption": "The Parkway near the Craggy Gardens overlook, where the Raleigh station recorded 3.6 discarded banana peels per Parkway overlook in the FY2025 leaf-season survey.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/north-carolina/rally-1.jpg",
        "alt": "AARBAA North Carolina road safety rally",
        "title": "US-70 Comment Assembly, April 2025",
        "caption": "Members convened at the US-70 shoulder near Hickory to enter public comment on the weekend club-ride schedule.",
        "category": "event"
      },
      {
        "url": "/images/states/north-carolina/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Independence Boulevard Sightline Resolution",
        "caption": "Charlotte's Independence Boulevard corridor after the Raleigh station's requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/north-carolina/members-1.jpg",
        "alt": "AARBAA North Carolina chapter members",
        "title": "Raleigh Station Quarterly Convening",
        "caption": "Monthly meeting at the Raleigh Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/north-carolina/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "American Tobacco Trail Yield Seminar",
        "caption": "Public instruction on rail-trail crossing conduct at the Durham segment of the American Tobacco Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 240
    }
  },
  {
    "name": "North Dakota",
    "slug": "north-dakota",
    "abbreviation": "ND",
    "capital": "Bismarck",
    "stats": {
      "members": 134,
      "chapters": 1,
      "victories": 4
    },
    "chapterPresident": {
      "name": "Janet Anderson",
      "email": "northdakota@aarbaa.com",
      "phone": "(701) 555-0189"
    },
    "testimonials": [
      {
        "quote": "I have been writing the Bismarck station about the group rides on US-2 west of Minot since 2017. The file stays open. So do I.",
        "author": "Harold N.",
        "city": "Fargo"
      },
      {
        "quote": "Our Bismarck chapter got the Enchanted Highway shoulder put under review. Small, but it is on file.",
        "author": "Lorraine K.",
        "city": "Bismarck"
      }
    ],
    "featuredArticle": {
      "title": "North Dakota Surprises Nation with Progressive Cycling Policy",
      "excerpt": "Small state's big ideas on separated lane infrastructure gain attention.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA North Dakota?",
        "answer": "Joining AARBAA North Dakota is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 134 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in North Dakota?",
        "answer": "AARBAA North Dakota files comment on cycling conduct along US-2, the Enchanted Highway, and the Maah Daah Hey Trail, and petitions the North Dakota Department of Transportation for enforcement review. Our Bismarck station maintains the FY2025 prairie-shoulder sweep and forwards findings to municipal officials in Fargo and Bismarck."
      },
      {
        "question": "How many members does the North Dakota chapter have?",
        "answer": "Our North Dakota chapter currently has 134 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more North Dakota residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in North Dakota?",
        "answer": "North Dakota's caseload concentrates on the US-2 prairie shoulders west of Minot, the Enchanted Highway weekend rides, and the Maah Daah Hey Trail crossings, where the Bismarck station recorded 2.3 shed windbreakers per prairie mile in FY2025. Winter wind advisories on I-94 remain under review."
      },
      {
        "question": "What victories has AARBAA North Dakota achieved?",
        "answer": "Our closed files include the US-2 Prairie Shoulder Advisory of 2024 and the Bismarck Expressway sightline review. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the North Dakota chapter meet?",
        "answer": "The North Dakota chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Bismarck Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Bismarck Community Center",
        "address": "123 Main Street",
        "city": "Bismarck",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in North Dakota.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Enchanted Highway Weekend Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Bismarck State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Bismarck",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Maah Daah Hey Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Bismarck Public Library",
        "address": "456 Library Way",
        "city": "Bismarck",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The US-2 Prairie Shoulder Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Bismarck",
        "impact": "The Bismarck station logged a 36% drop in unsignaled group riding on US-2 west of Minot and an average 7-minute clearance gain at the Berthold approach. Windbreaker recovery held steady at 2.3 per prairie mile.",
        "category": "infrastructure"
      },
      {
        "title": "North Dakota Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "North Dakota State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-94 Corridor",
        "description": "AARBAA North Dakota helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "North Dakota",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Broadway Contraflow Hazard, Fargo",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Bismarck",
        "severity": "critical",
        "affectedCities": [
          "Bismarck"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Maah Daah Hey Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "North Dakota State Parks",
        "severity": "high",
        "affectedCities": [
          "Bismarck",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 54,
        "change": "+13%"
      },
      "infrastructureMiles": {
        "protected": 120,
        "unprotected": 234,
        "planned": 60
      },
      "fundingSecured": {
        "amount": 17,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/north-dakota/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Bismarck",
        "title": "The US-2 Prairie Shoulder Review",
        "caption": "US-2 west of Minot, where the Bismarck station recorded 2.3 shed windbreakers per prairie mile in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/north-dakota/rally-1.jpg",
        "alt": "AARBAA North Dakota road safety rally",
        "title": "Enchanted Highway Comment Assembly, June 2025",
        "caption": "Members convened at the Regent trailhead to enter public comment on the Enchanted Highway weekend ride schedule.",
        "category": "event"
      },
      {
        "url": "/images/states/north-dakota/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Bismarck Expressway Sightline Resolution",
        "caption": "Bismarck's Expressway corridor after the requested lane review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/north-dakota/members-1.jpg",
        "alt": "AARBAA North Dakota chapter members",
        "title": "Bismarck Station Quarterly Convening",
        "caption": "Monthly meeting at the Bismarck Community Center; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/north-dakota/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Maah Daah Hey Trail Yield Seminar",
        "caption": "Public instruction on shared-trail conduct at the Medora segment of the Maah Daah Hey Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 63
    }
  },
  {
    "name": "Ohio",
    "slug": "ohio",
    "abbreviation": "OH",
    "capital": "Columbus",
    "stats": {
      "members": 934,
      "chapters": 6,
      "victories": 24
    },
    "chapterPresident": {
      "name": "Steven Wilson",
      "email": "ohio@aarbaa.com",
      "phone": "(614) 555-0789"
    },
    "testimonials": [
      {
        "quote": "A paceline took Riverside Drive north of Dublin four abreast at the morning rush and rolled the roundabout without a single hand signal. I filed Form AAR-101 before lunch. I intend to file it again.",
        "author": "Gary M.",
        "city": "Columbus"
      },
      {
        "quote": "By my own tally it is 3.4 chalk route-arrows per mile on the Little Miami Scenic Trail every Saturday. Somebody at the Columbus station ought to be logging that.",
        "author": "Brenda S.",
        "city": "Cincinnati"
      }
    ],
    "featuredArticle": {
      "title": "Ohio's Three C's Unite on Statewide Cycling Infrastructure Plan",
      "excerpt": "Columbus, Cleveland, Cincinnati chapters coordinate major separated lane initiative.",
      "link": "/news/membership-milestone/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Ohio?",
        "answer": "Joining AARBAA Ohio is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 6 chapters across the state with 934 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Ohio?",
        "answer": "AARBAA Ohio files comment on cycling conduct along the I-71 and I-70 corridors, Riverside Drive (OH-257) near Dublin, and the Little Miami Scenic Trail, and petitions the Ohio Department of Transportation for enforcement review. Our Columbus station maintains the FY2025 trail-marking survey and forwards findings to municipal officials in Columbus, Cleveland, and Cincinnati."
      },
      {
        "question": "How many members does the Ohio chapter have?",
        "answer": "Our Ohio chapter currently has 934 dedicated members across 6 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Ohio residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Ohio?",
        "answer": "Ohio's caseload concentrates on the Riverside Drive roundabout in Dublin, the Little Miami Scenic Trail crossings near Loveland, and the I-71 shoulder, where the Columbus station catalogued 3.4 chalk route-arrows per trail-mile in the FY2025 spring sweep. Lakefront conduct along Cleveland's shoreline remains under review."
      },
      {
        "question": "What victories has AARBAA Ohio achieved?",
        "answer": "Our closed files include the Riverside Drive Roundabout Advisory of 2024 and the I-71 shoulder sightline review near Columbus. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Ohio chapter meet?",
        "answer": "The Ohio chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 6 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Columbus Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Columbus Community Center",
        "address": "123 Main Street",
        "city": "Columbus",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Ohio.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Riverside Drive Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Columbus State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Columbus",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Little Miami Scenic Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Columbus Public Library",
        "address": "456 Library Way",
        "city": "Columbus",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Riverside Drive Roundabout Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Columbus",
        "impact": "The Columbus station recorded a 38% decline in unsignaled roundabout entries on OH-257 near Dublin and catalogued 3.4 chalk route-arrows per trail-mile on the adjacent Little Miami Scenic Trail during the FY2025 spring sweep.",
        "category": "infrastructure"
      },
      {
        "title": "Ohio Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Ohio State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-71 Corridor",
        "description": "AARBAA Ohio helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Ohio",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The High Street Contraflow Hazard, Columbus",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Columbus",
        "severity": "critical",
        "affectedCities": [
          "Columbus"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Little Miami Scenic Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Ohio State Parks",
        "severity": "high",
        "affectedCities": [
          "Columbus",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 78,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 240,
        "unprotected": 434,
        "planned": 120
      },
      "fundingSecured": {
        "amount": 57,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/ohio/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Columbus",
        "title": "The Little Miami Scenic Trail Chalk Survey",
        "caption": "The Loveland segment of the Little Miami Scenic Trail, where the Columbus station catalogs unauthorized route-markings each spring.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/ohio/rally-1.jpg",
        "alt": "AARBAA Ohio road safety rally",
        "title": "Riverside Drive Comment Assembly, April 2025",
        "caption": "Members convened at the OH-257 roundabout in Dublin to enter public comment on the shared-use approach.",
        "category": "event"
      },
      {
        "url": "/images/states/ohio/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The I-71 Shoulder Sightline Resolution",
        "caption": "The I-71 corridor near Columbus after the station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/ohio/members-1.jpg",
        "alt": "AARBAA Ohio chapter members",
        "title": "Columbus Station Quarterly Convening",
        "caption": "Monthly meeting at the Columbus Metropolitan Library; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/ohio/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Ohio River Trail Yield Seminar",
        "caption": "Public instruction on crossing conduct at the Cincinnati segment of the Ohio River Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 284
    }
  },
  {
    "name": "Oklahoma",
    "slug": "oklahoma",
    "abbreviation": "OK",
    "capital": "Oklahoma City",
    "stats": {
      "members": 356,
      "chapters": 3,
      "victories": 10
    },
    "chapterPresident": {
      "name": "Barbara Hayes",
      "email": "oklahoma@aarbaa.com",
      "phone": "(405) 555-0401"
    },
    "testimonials": [
      {
        "quote": "I have been writing the Oklahoma City station about the Lake Hefner Trail since 2019. The file stays open. So do I.",
        "author": "Wanda J.",
        "city": "Oklahoma City"
      },
      {
        "quote": "I do not understand how a peloton is permitted on old Route 66 through Catoosa at all. At least the Bureau writes it down.",
        "author": "Roy T.",
        "city": "Tulsa"
      }
    ],
    "featuredArticle": {
      "title": "Oklahoma City Approves Separated Lane Master Plan",
      "excerpt": "10-year infrastructure vision puts cyclist and motorist safety first.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Oklahoma?",
        "answer": "Joining AARBAA Oklahoma is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 356 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Oklahoma?",
        "answer": "AARBAA Oklahoma files comment on cycling conduct along the I-44 corridor, the historic Route 66 alignment through Catoosa, and the Lake Hefner Trail in northwest Oklahoma City, and petitions the Oklahoma Department of Transportation for enforcement review. Our Oklahoma City station maintains the FY2025 trailhead survey and forwards findings to officials in Oklahoma City and Tulsa."
      },
      {
        "question": "How many members does the Oklahoma chapter have?",
        "answer": "Our Oklahoma chapter currently has 356 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Oklahoma residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Oklahoma?",
        "answer": "Oklahoma's caseload concentrates on the Lake Hefner Trail departures, the Route 66 shoulder near Catoosa, and the Tulsa RiverParks Trail crossings, where the Oklahoma City station recovered 4.6 spent CO2 inflator cartridges per trailhead in FY2025. Cross-wind conduct on I-44 remains under review."
      },
      {
        "question": "What victories has AARBAA Oklahoma achieved?",
        "answer": "Our closed files include the Lake Hefner Trail Advisory of 2024 and the I-44 shoulder sightline review near Tulsa. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Oklahoma chapter meet?",
        "answer": "The Oklahoma chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Oklahoma City Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Oklahoma City Community Center",
        "address": "123 Main Street",
        "city": "Oklahoma City",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Oklahoma.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Route 66 Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Oklahoma City State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Oklahoma City",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Lake Hefner Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Oklahoma City Public Library",
        "address": "456 Library Way",
        "city": "Oklahoma City",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Lake Hefner Trail Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Oklahoma City",
        "impact": "The Oklahoma City station logged a 41% decline in unannounced trailhead departures at the Lake Hefner boathouse and recovered 4.6 spent CO2 inflator cartridges per trailhead in the FY2025 survey.",
        "category": "infrastructure"
      },
      {
        "title": "Oklahoma Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Oklahoma State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the I-44 Corridor",
        "description": "AARBAA Oklahoma helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Oklahoma",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Classen Boulevard Contraflow Hazard, Oklahoma City",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Oklahoma City",
        "severity": "critical",
        "affectedCities": [
          "Oklahoma City"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Lake Hefner Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Oklahoma State Parks",
        "severity": "high",
        "affectedCities": [
          "Oklahoma City",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 61,
        "change": "-13%"
      },
      "infrastructureMiles": {
        "protected": 153,
        "unprotected": 289,
        "planned": 77
      },
      "fundingSecured": {
        "amount": 28,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/oklahoma/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Oklahoma City",
        "title": "The Lake Hefner Trail Cartridge Survey",
        "caption": "The northwest OKC segment of the Lake Hefner Trail, where the Oklahoma City station tallies spent inflator cartridges each quarter.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/oklahoma/rally-1.jpg",
        "alt": "AARBAA Oklahoma road safety rally",
        "title": "Route 66 Comment Assembly, May 2025",
        "caption": "Members convened along the historic Route 66 alignment in Catoosa to enter public comment on the shared-use shoulder.",
        "category": "event"
      },
      {
        "url": "/images/states/oklahoma/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The I-44 Shoulder Sightline Resolution",
        "caption": "The I-44 corridor near Tulsa after the station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/oklahoma/members-1.jpg",
        "alt": "AARBAA Oklahoma chapter members",
        "title": "Oklahoma City Station Quarterly Convening",
        "caption": "Monthly meeting at the Ronald J. Norick Downtown Library; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/oklahoma/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Tulsa RiverParks Trail Yield Seminar",
        "caption": "Public instruction on crossing conduct along the RiverParks Trail on the Arkansas River in Tulsa.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 125
    }
  },
  {
    "name": "Oregon",
    "slug": "oregon",
    "abbreviation": "OR",
    "capital": "Salem",
    "stats": {
      "members": 778,
      "chapters": 4,
      "victories": 20
    },
    "chapterPresident": {
      "name": "Jennifer Clark",
      "email": "oregon@aarbaa.com",
      "phone": "(503) 555-0689"
    },
    "testimonials": [
      {
        "quote": "Finally someone keeps records on Terwilliger Boulevard. My whole street thought I imagined the Saturday pelotons.",
        "author": "Marjorie P.",
        "city": "Portland"
      },
      {
        "quote": "I watched a paceline take the Historic Columbia River Highway three abreast through the Rowena curves in the fog and not one of them had a tail light. I filed Form AAR-101 that afternoon.",
        "author": "Doug H.",
        "city": "Salem"
      }
    ],
    "featuredArticle": {
      "title": "Oregon's Cycling Capital Becomes Protected Lane Model City",
      "excerpt": "Portland's comprehensive separated infrastructure network reduces conflicts by 71%.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Oregon?",
        "answer": "Joining AARBAA Oregon is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 778 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Oregon?",
        "answer": "AARBAA Oregon files comment on cycling conduct along the US-101 coastal corridor, the Historic Columbia River Highway, Terwilliger Boulevard in Portland, and the Springwater Corridor, and petitions the Oregon Department of Transportation for enforcement review. Our Salem station maintains the FY2025 wet-season survey and forwards findings to officials in Portland, Eugene, and Salem."
      },
      {
        "question": "How many members does the Oregon chapter have?",
        "answer": "Our Oregon chapter currently has 778 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Oregon residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Oregon?",
        "answer": "Oregon's caseload concentrates on the Terwilliger Boulevard grade in Portland, the Rowena curves of the Historic Columbia River Highway, and the Springwater Corridor, where the Salem station recovered 2.7 shed neoprene shoe-covers per shoulder-mile in the FY2025 wet-season survey. Coastal fog conduct on US-101 remains under review."
      },
      {
        "question": "What victories has AARBAA Oregon achieved?",
        "answer": "Our closed files include the Terwilliger Boulevard Advisory of 2024 and the US-101 shoulder sightline review near Lincoln City. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Oregon chapter meet?",
        "answer": "The Oregon chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Salem Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Salem Community Center",
        "address": "123 Main Street",
        "city": "Salem",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Oregon.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Terwilliger Boulevard Grade Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Salem State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Salem",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Historic Columbia River Highway Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Salem Public Library",
        "address": "456 Library Way",
        "city": "Salem",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Terwilliger Boulevard Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Salem",
        "impact": "The Salem station logged a 33% decline in unlit fog descents on Terwilliger Boulevard and recovered 2.7 shed neoprene shoe-covers per shoulder-mile along the Springwater Corridor in the FY2025 wet-season survey.",
        "category": "infrastructure"
      },
      {
        "title": "Oregon Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Oregon State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-101 Corridor",
        "description": "AARBAA Oregon helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Oregon",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Naito Parkway Contraflow Hazard, Portland",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Salem",
        "severity": "critical",
        "affectedCities": [
          "Salem"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Springwater Corridor",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Oregon State Parks",
        "severity": "high",
        "affectedCities": [
          "Salem",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 73,
        "change": "+9%"
      },
      "infrastructureMiles": {
        "protected": 217,
        "unprotected": 395,
        "planned": 108
      },
      "fundingSecured": {
        "amount": 49,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/oregon/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Salem",
        "title": "The Springwater Corridor Shoe-Cover Survey",
        "caption": "The Sellwood segment of the Springwater Corridor, where the Salem station catalogs shed wet-weather gear each rainy season.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/oregon/rally-1.jpg",
        "alt": "AARBAA Oregon road safety rally",
        "title": "Terwilliger Boulevard Comment Assembly, February 2025",
        "caption": "Members convened along Terwilliger Boulevard in Portland to enter public comment on the shared-use grade.",
        "category": "event"
      },
      {
        "url": "/images/states/oregon/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The US-101 Shoulder Sightline Resolution",
        "caption": "The US-101 coastal corridor near Lincoln City after the Salem station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/oregon/members-1.jpg",
        "alt": "AARBAA Oregon chapter members",
        "title": "Salem Station Quarterly Convening",
        "caption": "Monthly meeting at the Salem Public Library; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/oregon/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Historic Columbia River Highway Yield Seminar",
        "caption": "Public instruction on wet-weather conduct at the Rowena Crest segment of the Historic Columbia River Highway.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 300
    }
  },
  {
    "name": "Pennsylvania",
    "slug": "pennsylvania",
    "abbreviation": "PA",
    "capital": "Harrisburg",
    "stats": {
      "members": 1123,
      "chapters": 7,
      "victories": 29
    },
    "chapterPresident": {
      "name": "Joseph Kowalski",
      "email": "pennsylvania@aarbaa.com",
      "phone": "(717) 555-0867"
    },
    "testimonials": [
      {
        "quote": "Our Philadelphia chapter got the Kelly Drive shoulder put under review. Small, but it is on file at the Harrisburg station.",
        "author": "Frank D.",
        "city": "Philadelphia"
      },
      {
        "quote": "I do not understand how a full peloton is permitted on the Great Allegheny Passage below the Hot Metal Bridge at all. At least the Bureau writes it down.",
        "author": "Louise M.",
        "city": "Pittsburgh"
      }
    ],
    "featuredArticle": {
      "title": "Pennsylvania Invests $52M in Statewide Protected Bike Lane Network",
      "excerpt": "AARBAA's persistent advocacy results in historic infrastructure commitment.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Pennsylvania?",
        "answer": "Contact our state coordinator Joseph Kowalski at pennsylvania@aarbaa.com or call (717) 555-0867. With 7 chapters across the Keystone State, find your local chapter: Philadelphia, Pittsburgh, Harrisburg, Allentown, Erie, Reading, or Scranton. Join us in making PA roads safer for everyone!"
      },
      {
        "question": "What does AARBAA do in Pennsylvania?",
        "answer": "AARBAA Pennsylvania files comment on cycling conduct along the Schuylkill River Trail and Kelly Drive in Philadelphia, the Great Allegheny Passage in Pittsburgh, and the US-30 Lincoln Highway, and petitions PennDOT for enforcement review. Our Harrisburg station maintains the FY2025 shoulder survey and forwards findings to officials in Philadelphia, Pittsburgh, and Lancaster."
      },
      {
        "question": "How many members does AARBAA have in Pennsylvania?",
        "answer": "Pennsylvania has 1,123 active AARBAA members across 7 chapters. Philadelphia leads with 412 members, followed by Pittsburgh (298), Harrisburg (134), Allentown (89), Erie (78), Reading (67), and Scranton (45). Our membership has grown 38% as Pennsylvanians demand safer cycling infrastructure."
      },
      {
        "question": "What are Pennsylvania's biggest cycling infrastructure challenges?",
        "answer": "Pennsylvania's caseload concentrates on the Kelly Drive shoulder along the Schuylkill River, the Great Allegheny Passage below Pittsburgh's Hot Metal Bridge, and the US-30 Lincoln Highway near Lancaster, where the Harrisburg station recorded 4.3 discarded banana peels per shoulder-mile on Kelly Drive in the FY2025 survey. Coal-region trail connectivity remains under review."
      },
      {
        "question": "Has AARBAA had any victories in Pennsylvania?",
        "answer": "Our closed files include the Kelly Drive shoulder review in Philadelphia and the US-30 Lincoln Highway sightline advisory near Lancaster. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When are Pennsylvania chapter meetings?",
        "answer": "Philadelphia meets 1st Wednesday, Pittsburgh 1st Thursday, Harrisburg 2nd Tuesday, Allentown 2nd Thursday, Erie 3rd Monday, Reading 3rd Wednesday, and Scranton 4th Tuesday. All meetings are at 7 PM ET. Join us to advocate for safer streets in your community!"
      }
    ],
    "upcomingEvents": [
      {
        "name": "Philadelphia Vision Zero Rally",
        "date": "2025-11-11",
        "time": "5:00 PM - 7:00 PM EST",
        "venue": "Love Park",
        "address": "15th St & John F Kennedy Blvd",
        "city": "Philadelphia",
        "description": "Major rally supporting Philadelphia's Vision Zero initiative and demanding protected bike lanes on all major corridors. Join hundreds of members calling for immediate action on South Broad Street and Washington Avenue!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "Pittsburgh Hills & Bridges Summit",
        "date": "2025-11-25",
        "time": "9:00 AM - 12:00 PM EST",
        "venue": "David L. Lawrence Convention Center",
        "address": "1000 Fort Duquesne Blvd",
        "city": "Pittsburgh",
        "description": "Summit addressing unique challenges of protected infrastructure in Pittsburgh's hilly terrain and across its 446 bridges. City engineers and AARBAA will present innovative solutions.",
        "eventType": "presentation",
        "registrationRequired": true
      },
      {
        "name": "Harrisburg Capitol Advocacy Day",
        "date": "2025-12-07",
        "time": "10:00 AM - 3:00 PM EST",
        "venue": "Pennsylvania State Capitol",
        "address": "501 N 3rd St",
        "city": "Harrisburg",
        "description": "Statewide advocacy day with members from all 7 chapters meeting with legislators to push for additional protected infrastructure funding and PennDOT policy changes.",
        "eventType": "community",
        "registrationRequired": true
      }
    ],
    "victories": [
      {
        "title": "Philadelphia Vision Zero Protected Network",
        "description": "Philadelphia committed to protected bike lanes on all high-injury corridors as part of Vision Zero initiative, following years of AARBAA advocacy and data presentations showing 67% of cycling fatalities occur on unprotected roads.",
        "date": "2024-08-19",
        "location": "Philadelphia",
        "impact": "124 miles of protected lanes, targeting zero traffic deaths by 2030",
        "category": "infrastructure"
      },
      {
        "title": "Pittsburgh All-Bridge Bike Lane Initiative",
        "description": "Pittsburgh became the first U.S. city to add protected bike lanes to all major bridges, addressing the city's unique geography after AARBAA's 'Connect the Three Rivers' campaign highlighting dangerous bridge crossings.",
        "date": "2024-10-03",
        "location": "Pittsburgh",
        "impact": "31 bridges with protected lanes, citywide connectivity achieved",
        "category": "infrastructure"
      },
      {
        "title": "Schuylkill River Trail Complete Separation",
        "description": "The entire 30-mile Schuylkill River Trail from Philadelphia to Valley Forge received physical separation from pedestrians and vehicles, transforming the region's most popular trail into a model of safe infrastructure.",
        "date": "2024-09-11",
        "location": "Philadelphia to Valley Forge",
        "impact": "30 miles of fully separated trail, 89% reduction in conflicts",
        "category": "infrastructure"
      },
      {
        "title": "PennDOT Statewide Protected Lane Standards",
        "description": "Pennsylvania DOT adopted comprehensive protected bike lane standards for all state roads in urban and suburban areas, requiring physical separation on any road with speed limits above 25 mph.",
        "date": "2024-11-27",
        "location": "Statewide",
        "impact": "New standards affecting all future PennDOT projects",
        "category": "legislation"
      },
      {
        "title": "Lehigh Valley Connected Network",
        "description": "Allentown, Bethlehem, and Easton completed interconnected protected bike lane network, creating the first tri-city protected system in Pennsylvania after coordinated AARBAA advocacy across all three cities.",
        "date": "2025-01-16",
        "location": "Lehigh Valley",
        "impact": "67 miles of interconnected protected infrastructure",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-76 Pennsylvania Turnpike Parallel Route Gap",
        "description": "The entire Pennsylvania Turnpike corridor lacks parallel protected cycling infrastructure, creating a 360-mile east-west gap across the state and forcing cyclists onto dangerous local roads through mountains.",
        "location": "I-76/Pennsylvania Turnpike corridor",
        "severity": "critical",
        "affectedCities": [
          "Philadelphia",
          "Harrisburg",
          "Pittsburgh",
          "Reading",
          "Lancaster"
        ],
        "proposedSolution": "Protected cycling route parallel to Turnpike with connections to major cities and towns",
        "status": "advocating",
        "lastUpdated": "2025-01-21"
      },
      {
        "title": "Philadelphia's Aggressive Cyclist Enforcement Crisis",
        "description": "Philadelphia's bike lanes suffer from aggressive cycling behavior, wrong-way riding, and sidewalk cycling with minimal enforcement, creating dangerous conditions for law-abiding cyclists and pedestrians alike.",
        "location": "Philadelphia",
        "severity": "high",
        "affectedCities": [
          "Philadelphia",
          "Upper Darby",
          "Camden"
        ],
        "proposedSolution": "Enhanced enforcement, protected lane design preventing wrong-way riding, education campaigns",
        "status": "identified",
        "lastUpdated": "2024-12-30"
      },
      {
        "title": "Coal Region Connectivity Desert",
        "description": "Former coal mining communities in northeastern PA lack any protected cycling infrastructure, isolating towns and forcing residents onto dangerous mountain roads with coal truck traffic.",
        "location": "Northeastern Pennsylvania coal region",
        "severity": "high",
        "affectedCities": [
          "Scranton",
          "Wilkes-Barre",
          "Hazleton",
          "Pottsville",
          "Shamokin"
        ],
        "proposedSolution": "Convert abandoned rail lines to protected bike highways connecting coal region towns",
        "status": "approved",
        "lastUpdated": "2025-01-14"
      },
      {
        "title": "Pittsburgh Tunnel Bike Access Prohibition",
        "description": "Pittsburgh's numerous tunnels prohibit bicycle access, forcing dangerous detours over steep hills or through high-traffic surface streets, creating major gaps in the cycling network.",
        "location": "Pittsburgh tunnels",
        "severity": "critical",
        "affectedCities": [
          "Pittsburgh",
          "Mount Lebanon",
          "Bethel Park"
        ],
        "proposedSolution": "Retrofit tunnels with protected bike lanes or build parallel bike/ped tunnels",
        "status": "advocating",
        "lastUpdated": "2025-01-26"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 84,
        "change": "-10%"
      },
      "infrastructureMiles": {
        "protected": 268,
        "unprotected": 481,
        "planned": 134
      },
      "fundingSecured": {
        "amount": 66,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/pennsylvania/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Harrisburg",
        "title": "The Kelly Drive Shoulder Survey",
        "caption": "The East Falls stretch of Kelly Drive along the Schuylkill River, where the Harrisburg station catalogs shoulder debris each season.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/pennsylvania/rally-1.jpg",
        "alt": "AARBAA Pennsylvania road safety rally",
        "title": "Schuylkill River Trail Comment Assembly, March 2025",
        "caption": "Members convened at the Boathouse Row approach to enter public comment on the Schuylkill River Trail shared-use path.",
        "category": "event"
      },
      {
        "url": "/images/states/pennsylvania/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The US-30 Lincoln Highway Sightline Resolution",
        "caption": "The US-30 Lincoln Highway corridor near Lancaster after the Harrisburg station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/pennsylvania/members-1.jpg",
        "alt": "AARBAA Pennsylvania chapter members",
        "title": "Harrisburg Station Quarterly Convening",
        "caption": "Monthly meeting at the Dauphin County Library in Harrisburg; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/pennsylvania/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Great Allegheny Passage Yield Seminar",
        "caption": "Public instruction on trail-crossing conduct at the Pittsburgh trailhead of the Great Allegheny Passage.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.3,
      "count": 443
    }
  },
  {
    "name": "Rhode Island",
    "slug": "rhode-island",
    "abbreviation": "RI",
    "capital": "Providence",
    "stats": {
      "members": 187,
      "chapters": 1,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Deborah Silva",
      "email": "rhodeisland@aarbaa.com",
      "phone": "(401) 555-0234"
    },
    "testimonials": [
      {
        "quote": "By my own count it is 3.8 two-abreast passes per mile on Blackstone Boulevard every Saturday morning. Somebody at the Providence station ought to log that.",
        "author": "Estelle R.",
        "city": "Providence"
      },
      {
        "quote": "I have been writing the Providence station about the East Bay Bike Path since 2018. The file stays open. So do I.",
        "author": "Herbert C.",
        "city": "Warwick"
      }
    ],
    "featuredArticle": {
      "title": "Rhode Island Becomes First State with Complete Protected Lane Network",
      "excerpt": "Ocean State's comprehensive cycling infrastructure covers entire population.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Rhode Island?",
        "answer": "Joining AARBAA Rhode Island is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 187 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Rhode Island?",
        "answer": "AARBAA Rhode Island files comment on cycling conduct along the East Bay Bike Path, Blackstone Boulevard in Providence, and Ocean Road near Newport, and petitions the Rhode Island Department of Transportation for enforcement review. Our Providence station maintains the FY2025 Saturday survey and forwards findings to officials in Providence and Warwick."
      },
      {
        "question": "How many members does the Rhode Island chapter have?",
        "answer": "Our Rhode Island chapter currently has 187 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Rhode Island residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Rhode Island?",
        "answer": "Rhode Island's caseload concentrates on the Blackstone Boulevard median path, the East Bay Bike Path crossings near Bristol, and Ocean Road near Newport, where the Providence station recorded 3.8 unsignaled two-abreast passes per mile in the FY2025 Saturday survey. Summer shoulder conditions on Ocean Road remain under review."
      },
      {
        "question": "What victories has AARBAA Rhode Island achieved?",
        "answer": "Our closed files include the Blackstone Boulevard Advisory of 2024 and the Ocean Road sightline review near Newport. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Rhode Island chapter meet?",
        "answer": "The Rhode Island chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Providence Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Providence Community Center",
        "address": "123 Main Street",
        "city": "Providence",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Rhode Island.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Blackstone Boulevard Median Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Providence State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Providence",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "East Bay Bike Path Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Providence Public Library",
        "address": "456 Library Way",
        "city": "Providence",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Blackstone Boulevard Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Providence",
        "impact": "The Providence station recorded a 29% decline in unsignaled two-abreast passes on Blackstone Boulevard, down to 3.8 per mile in the FY2025 Saturday survey, alongside an estimated 6-minute peak-hour throughput gain.",
        "category": "infrastructure"
      },
      {
        "title": "Rhode Island Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Rhode Island State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the Ocean Road Corridor",
        "description": "AARBAA Rhode Island helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Rhode Island",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Hope Street Contraflow Hazard, Providence",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Providence",
        "severity": "critical",
        "affectedCities": [
          "Providence"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the East Bay Bike Path",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Rhode Island State Parks",
        "severity": "high",
        "affectedCities": [
          "Providence",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 56,
        "change": "+19%"
      },
      "infrastructureMiles": {
        "protected": 128,
        "unprotected": 247,
        "planned": 64
      },
      "fundingSecured": {
        "amount": 19,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/rhode-island/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Providence",
        "title": "The Blackstone Boulevard Median Survey",
        "caption": "The Providence stretch of Blackstone Boulevard, where the Providence station tallies two-abreast passes along the central path each Saturday.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/rhode-island/rally-1.jpg",
        "alt": "AARBAA Rhode Island road safety rally",
        "title": "East Bay Bike Path Comment Assembly, June 2025",
        "caption": "Members convened at the Bristol terminus of the East Bay Bike Path to enter public comment on the shared-use crossing.",
        "category": "event"
      },
      {
        "url": "/images/states/rhode-island/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Ocean Road Sightline Resolution",
        "caption": "Ocean Road near Newport after the Providence station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/rhode-island/members-1.jpg",
        "alt": "AARBAA Rhode Island chapter members",
        "title": "Providence Station Quarterly Convening",
        "caption": "Monthly meeting at the Providence Public Library; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/rhode-island/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "East Bay Bike Path Yield Seminar",
        "caption": "Public instruction on crossing conduct at the Riverside segment of the East Bay Bike Path.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 62
    }
  },
  {
    "name": "South Carolina",
    "slug": "south-carolina",
    "abbreviation": "SC",
    "capital": "Columbia",
    "stats": {
      "members": 421,
      "chapters": 3,
      "victories": 11
    },
    "chapterPresident": {
      "name": "William Johnson",
      "email": "southcarolina@aarbaa.com",
      "phone": "(803) 555-0467"
    },
    "testimonials": [
      {
        "quote": "I do not understand how a peloton is permitted on Ocean Boulevard in Myrtle Beach in high season at all. At least the Bureau writes it down.",
        "author": "Carolyn B.",
        "city": "Charleston"
      },
      {
        "quote": "Our chapter got the Swamp Rabbit Trail crossing near Greenville put under review. Small, but it is on file at the Columbia station.",
        "author": "Earl W.",
        "city": "Columbia"
      }
    ],
    "featuredArticle": {
      "title": "South Carolina Coastal Cities Pioneer Tourism-Cycling Safety",
      "excerpt": "Charleston's protected lane network becomes model for tourist destinations.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA South Carolina?",
        "answer": "Joining AARBAA South Carolina is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 421 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in South Carolina?",
        "answer": "AARBAA South Carolina files comment on cycling conduct along the coastal US-17 corridor, Ocean Boulevard in Myrtle Beach, and the Swamp Rabbit Trail near Greenville, and petitions the South Carolina Department of Transportation for enforcement review. Our Columbia station maintains the FY2025 summer survey and forwards findings to officials in Charleston and Columbia."
      },
      {
        "question": "How many members does the South Carolina chapter have?",
        "answer": "Our South Carolina chapter currently has 421 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more South Carolina residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in South Carolina?",
        "answer": "South Carolina's caseload concentrates on the coastal US-17 shoulder near Mount Pleasant, Ocean Boulevard in Myrtle Beach, and the Swamp Rabbit Trail crossings near Greenville, where the Columbia station catalogued 3.2 shed cooling arm-sleeves per shoulder-mile in the FY2025 summer survey. High-season conduct on Ocean Boulevard remains under review."
      },
      {
        "question": "What victories has AARBAA South Carolina achieved?",
        "answer": "Our closed files include the US-17 Shoulder Advisory of 2024 and the Ocean Boulevard sightline review in Myrtle Beach. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the South Carolina chapter meet?",
        "answer": "The South Carolina chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Columbia Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Columbia Community Center",
        "address": "123 Main Street",
        "city": "Columbia",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in South Carolina.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Ocean Boulevard Shoulder Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Columbia State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Columbia",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Swamp Rabbit Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Columbia Public Library",
        "address": "456 Library Way",
        "city": "Columbia",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The US-17 Shoulder Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Columbia",
        "impact": "The Columbia station recorded a 36% decline in shoulder crowding on coastal US-17 near Mount Pleasant and catalogued 3.2 shed cooling arm-sleeves per shoulder-mile in the FY2025 summer survey.",
        "category": "infrastructure"
      },
      {
        "title": "South Carolina Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "South Carolina State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-17 Corridor",
        "description": "AARBAA South Carolina helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "South Carolina",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Gervais Street Contraflow Hazard, Columbia",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Columbia",
        "severity": "critical",
        "affectedCities": [
          "Columbia"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Swamp Rabbit Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "South Carolina State Parks",
        "severity": "high",
        "affectedCities": [
          "Columbia",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 63,
        "change": "+8%"
      },
      "infrastructureMiles": {
        "protected": 163,
        "unprotected": 305,
        "planned": 82
      },
      "fundingSecured": {
        "amount": 31,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/south-carolina/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Columbia",
        "title": "The US-17 Shoulder Sleeve Survey",
        "caption": "The coastal US-17 shoulder near Mount Pleasant, where the Columbia station catalogs shed cooling gear through the summer.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/south-carolina/rally-1.jpg",
        "alt": "AARBAA South Carolina road safety rally",
        "title": "Swamp Rabbit Trail Comment Assembly, April 2025",
        "caption": "Members convened at the Greenville trailhead of the Swamp Rabbit Trail to enter public comment on the shared-use crossing.",
        "category": "event"
      },
      {
        "url": "/images/states/south-carolina/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Ocean Boulevard Sightline Resolution",
        "caption": "Ocean Boulevard in Myrtle Beach after the Columbia station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/south-carolina/members-1.jpg",
        "alt": "AARBAA South Carolina chapter members",
        "title": "Columbia Station Quarterly Convening",
        "caption": "Monthly meeting at the Richland Library in Columbia; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/south-carolina/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Swamp Rabbit Trail Yield Seminar",
        "caption": "Public instruction on trail-crossing conduct at the Travelers Rest segment of the Swamp Rabbit Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 193
    }
  },
  {
    "name": "South Dakota",
    "slug": "south-dakota",
    "abbreviation": "SD",
    "capital": "Pierre",
    "stats": {
      "members": 143,
      "chapters": 1,
      "victories": 4
    },
    "chapterPresident": {
      "name": "Nancy Peterson",
      "email": "southdakota@aarbaa.com",
      "phone": "(605) 555-0198"
    },
    "testimonials": [
      {
        "quote": "I watched a paceline stop for photographs in the Needles Eye tunnel on the Needles Highway and hold up a line of cars for a solid quarter hour. I filed Form AAR-101 that evening.",
        "author": "Delbert K.",
        "city": "Rapid City"
      },
      {
        "quote": "Finally someone keeps records on Iron Mountain Road. My neighbors in Pierre thought I imagined the pigtail-bridge photo-stops.",
        "author": "Irene F.",
        "city": "Pierre"
      }
    ],
    "featuredArticle": {
      "title": "South Dakota Tourism Routes Get Protected Bike Lane Upgrades",
      "excerpt": "Mount Rushmore corridor becomes showcase for separated infrastructure.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA South Dakota?",
        "answer": "Joining AARBAA South Dakota is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 143 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in South Dakota?",
        "answer": "AARBAA South Dakota files comment on cycling conduct along Iron Mountain Road (US-16A), the Needles Highway (SD-87), US-14A through Spearfish Canyon, and the George S. Mickelson Trail, and petitions the South Dakota Department of Transportation for enforcement review. Our Pierre station maintains the FY2025 season survey and forwards findings to officials in Sioux Falls, Rapid City, and Pierre."
      },
      {
        "question": "How many members does the South Dakota chapter have?",
        "answer": "Our South Dakota chapter currently has 143 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more South Dakota residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in South Dakota?",
        "answer": "South Dakota's caseload concentrates on the pigtail bridges of Iron Mountain Road, the Needles Eye tunnel on the Needles Highway, and US-14A through Spearfish Canyon, where the Pierre station logged 2.4 cyclist-to-pigtail-bridge slowdowns per 100 crossings in the FY2025 season survey. Winter grade conditions on the Mickelson Trail remain under review."
      },
      {
        "question": "What victories has AARBAA South Dakota achieved?",
        "answer": "Our closed files include the Iron Mountain Road Advisory of 2024 and the Spearfish Canyon sightline review on US-14A. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the South Dakota chapter meet?",
        "answer": "The South Dakota chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Pierre Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Pierre Community Center",
        "address": "123 Main Street",
        "city": "Pierre",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in South Dakota.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Needles Highway Grade Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Pierre State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Pierre",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Mickelson Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Pierre Public Library",
        "address": "456 Library Way",
        "city": "Pierre",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Iron Mountain Road Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Pierre",
        "impact": "The Pierre station recorded a 27% decline in tunnel photo-stop delays on Iron Mountain Road (US-16A) and logged 2.4 cyclist-to-pigtail-bridge slowdowns per 100 crossings in the FY2025 season survey.",
        "category": "infrastructure"
      },
      {
        "title": "South Dakota Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "South Dakota State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-14A Spearfish Canyon Corridor",
        "description": "AARBAA South Dakota helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "South Dakota",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Needles Eye Tunnel Contraflow Hazard, Custer County",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Pierre",
        "severity": "critical",
        "affectedCities": [
          "Pierre"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the George S. Mickelson Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "South Dakota State Parks",
        "severity": "high",
        "affectedCities": [
          "Pierre",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 54,
        "change": "-14%"
      },
      "infrastructureMiles": {
        "protected": 121,
        "unprotected": 236,
        "planned": 61
      },
      "fundingSecured": {
        "amount": 17,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/south-dakota/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Pierre",
        "title": "The Iron Mountain Road Pigtail Survey",
        "caption": "The pigtail bridges of Iron Mountain Road (US-16A), where the Pierre station logs photo-stop slowdowns each tourist season.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/south-dakota/rally-1.jpg",
        "alt": "AARBAA South Dakota road safety rally",
        "title": "Needles Highway Comment Assembly, July 2025",
        "caption": "Members convened at the Needles Eye tunnel to enter public comment on the SD-87 shared-use grade.",
        "category": "event"
      },
      {
        "url": "/images/states/south-dakota/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Spearfish Canyon Sightline Resolution",
        "caption": "The US-14A corridor through Spearfish Canyon after the Pierre station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/south-dakota/members-1.jpg",
        "alt": "AARBAA South Dakota chapter members",
        "title": "Pierre Station Quarterly Convening",
        "caption": "Monthly meeting at the Rawlins Municipal Library in Pierre; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/south-dakota/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Mickelson Trail Yield Seminar",
        "caption": "Public instruction on trail-crossing conduct at the Deadwood trailhead of the George S. Mickelson Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 64
    }
  },
  {
    "name": "Tennessee",
    "slug": "tennessee",
    "abbreviation": "TN",
    "capital": "Nashville",
    "stats": {
      "members": 645,
      "chapters": 4,
      "victories": 16
    },
    "chapterPresident": {
      "name": "Sandra Mitchell",
      "email": "tennessee@aarbaa.com",
      "phone": "(615) 555-0578"
    },
    "testimonials": [
      {
        "quote": "I have been writing the Nashville station about the Natchez Trace Parkway since 2017. The file stays open. So do I.",
        "author": "Buford L.",
        "city": "Nashville"
      },
      {
        "quote": "By my own count it is a dozen riders congregating at every Newfound Gap overlook on US-441 each fall weekend. Somebody ought to log that.",
        "author": "Peggy A.",
        "city": "Knoxville"
      }
    ],
    "featuredArticle": {
      "title": "Tennessee's Music Cities Harmonize on Cycling Safety",
      "excerpt": "Nashville, Memphis chapters coordinate on statewide protected lane initiative.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Tennessee?",
        "answer": "Joining AARBAA Tennessee is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 645 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Tennessee?",
        "answer": "AARBAA Tennessee files comment on cycling conduct along the Natchez Trace Parkway, US-441 (Newfound Gap Road) through the Great Smoky Mountains, and the Shelby Farms Greenline in Memphis, and petitions the Tennessee Department of Transportation for enforcement review. Our Nashville station maintains the FY2025 season survey and forwards findings to officials in Nashville, Memphis, and Knoxville."
      },
      {
        "question": "How many members does the Tennessee chapter have?",
        "answer": "Our Tennessee chapter currently has 645 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Tennessee residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Tennessee?",
        "answer": "Tennessee's caseload concentrates on the Natchez Trace Parkway overlooks near Franklin, the US-441 grade through the Smokies at Newfound Gap, and the Shelby Farms Greenline crossings in Memphis, where the Nashville station logged 4.2 overlook congregations per 10 miles in the FY2025 season survey. Autumn overlook conduct on US-441 remains under review."
      },
      {
        "question": "What victories has AARBAA Tennessee achieved?",
        "answer": "Our closed files include the Natchez Trace Parkway Advisory of 2024 and the Shelby Farms Greenline crossing review in Memphis. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Tennessee chapter meet?",
        "answer": "The Tennessee chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Nashville Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Nashville Community Center",
        "address": "123 Main Street",
        "city": "Nashville",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Tennessee.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Natchez Trace Overlook Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Nashville State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Nashville",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Shelby Farms Greenline Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Nashville Public Library",
        "address": "456 Library Way",
        "city": "Nashville",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Natchez Trace Parkway Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Nashville",
        "impact": "The Nashville station recorded a 31% decline in overlook congestion on the Natchez Trace Parkway near Franklin and logged 4.2 overlook congregations per 10 miles in the FY2025 season survey.",
        "category": "infrastructure"
      },
      {
        "title": "Tennessee Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Tennessee State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-441 Smokies Corridor",
        "description": "AARBAA Tennessee helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Tennessee",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Broadway Contraflow Hazard, Nashville",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Nashville",
        "severity": "critical",
        "affectedCities": [
          "Nashville"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Shelby Farms Greenline",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Tennessee State Parks",
        "severity": "high",
        "affectedCities": [
          "Nashville",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 69,
        "change": "+16%"
      },
      "infrastructureMiles": {
        "protected": 197,
        "unprotected": 361,
        "planned": 98
      },
      "fundingSecured": {
        "amount": 42,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/tennessee/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Nashville",
        "title": "The Natchez Trace Overlook Survey",
        "caption": "The Franklin segment of the Natchez Trace Parkway, where the Nashville station tallies overlook congregations each season.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/tennessee/rally-1.jpg",
        "alt": "AARBAA Tennessee road safety rally",
        "title": "US-441 Comment Assembly, October 2025",
        "caption": "Members convened at the Newfound Gap overlook to enter public comment on the US-441 shared-use grade through the Smokies.",
        "category": "event"
      },
      {
        "url": "/images/states/tennessee/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Shelby Farms Greenline Sightline Resolution",
        "caption": "The Shelby Farms Greenline in Memphis after the Nashville station's requested crossing review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/tennessee/members-1.jpg",
        "alt": "AARBAA Tennessee chapter members",
        "title": "Nashville Station Quarterly Convening",
        "caption": "Monthly meeting at the Nashville Public Library; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/tennessee/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Shelby Farms Greenline Yield Seminar",
        "caption": "Public instruction on trail-crossing conduct at the Midtown Memphis segment of the Shelby Farms Greenline.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 220
    }
  },
  {
    "name": "Texas",
    "slug": "texas",
    "abbreviation": "TX",
    "capital": "Austin",
    "stats": {
      "members": 1967,
      "chapters": 10,
      "victories": 41
    },
    "chapterPresident": {
      "name": "Robert Garcia",
      "email": "texas@aarbaa.com",
      "phone": "(512) 555-1023"
    },
    "testimonials": [
      {
        "quote": "I watched a paceline take the I-35 frontage road through San Marcos four abreast at the evening rush and roll every merge sign like it was optional. I filed Form AAR-101 before I got home.",
        "author": "Raymond T.",
        "city": "San Marcos"
      },
      {
        "quote": "I do not understand how a peloton is permitted on Loop 360 at all, but every Saturday there they are. At least the Austin station writes it down.",
        "author": "Deborah H.",
        "city": "Austin"
      }
    ],
    "featuredArticle": {
      "title": "Texas Goes Big on Protected Bike Lane Investment",
      "excerpt": "Lone Star State's 10 AARBAA chapters secure unprecedented infrastructure funding.",
      "link": "/news/membership-milestone/"
    },
    "faqs": [
      {
        "question": "How do I join AARBAA in Texas?",
        "answer": "Contact our state coordinator Robert Garcia at texas@aarbaa.com or call (512) 555-1023. With 10 chapters across Texas, find your local chapter: Houston, Dallas, Austin, San Antonio, Fort Worth, El Paso, Arlington, Corpus Christi, Plano, or Lubbock. Everything's bigger in Texas, including our commitment to cycling safety!"
      },
      {
        "question": "What does AARBAA do in Texas?",
        "answer": "AARBAA Texas files comment on cycling conduct along the I-35 frontage roads from Austin to San Antonio, Loop 360 in Austin, and the Katy Trail corridor in Dallas, and petitions the Texas Department of Transportation for enforcement review. Our Austin station forwards findings to municipal officials in Houston, Dallas, and San Marcos."
      },
      {
        "question": "How many members does AARBAA have in Texas?",
        "answer": "Texas is our second-largest state chapter with 1,967 active members across 10 local chapters. Houston leads with 412 members, followed by Dallas (387), Austin (356), and San Antonio (298). Our membership has grown 47% in the past two years as more Texans demand safer streets."
      },
      {
        "question": "What are Texas's biggest cycling infrastructure challenges?",
        "answer": "Texas's caseload concentrates on the I-35 frontage roads between Austin and San Antonio, the Loop 360 shoulder in Austin, and the Veloway approaches, where the Austin station recorded 3.7 unacknowledged access-road merges per frontage-mile in FY2025. Summer heat on the Katy Trail crossings in Dallas remains under review."
      },
      {
        "question": "Has AARBAA had any victories in Texas?",
        "answer": "Our closed files include the Loop 360 sightline review in Austin and the Houston feeder-road comment docket. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When are Texas chapter meetings?",
        "answer": "Houston meets 1st Tuesday, Dallas 1st Thursday, Austin 2nd Tuesday, San Antonio 2nd Thursday, Fort Worth 3rd Monday, El Paso 3rd Tuesday, Arlington 3rd Wednesday, Corpus Christi 4th Monday, Plano 4th Tuesday, and Lubbock 4th Thursday. All meetings are 7 PM local time and welcome new members."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Houston Protected Infrastructure Rally",
        "date": "2025-11-12",
        "time": "6:00 PM - 8:00 PM CST",
        "venue": "Houston City Hall",
        "address": "901 Bagby Street",
        "city": "Houston",
        "description": "Major rally supporting Phase 2 of Houston's protected bike lane network. Join hundreds of members demanding safer infrastructure throughout Harris County. Bring signs and wear orange for visibility!",
        "eventType": "rally",
        "registrationRequired": false
      },
      {
        "name": "Austin Monthly Chapter Meeting",
        "date": "2025-11-19",
        "time": "7:00 PM - 8:30 PM CST",
        "venue": "Austin Central Library",
        "address": "710 W Cesar Chavez St",
        "city": "Austin",
        "description": "Monthly meeting to discuss ongoing advocacy for South Congress protected lanes and coordinate upcoming TxDOT presentations. Guest speaker from city planning department will attend.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "DFW Metroplex Coordination Summit",
        "date": "2025-12-05",
        "time": "10:00 AM - 3:00 PM CST",
        "venue": "Arlington Convention Center",
        "address": "1200 Ballpark Way",
        "city": "Arlington",
        "description": "Annual summit bringing together Dallas, Fort Worth, Arlington, and Plano chapters to coordinate regional protected infrastructure strategy. Lunch provided for registered attendees.",
        "eventType": "community",
        "registrationRequired": true
      }
    ],
    "victories": [
      {
        "title": "Houston $67M Protected Bike Lane Network Approved",
        "description": "Houston City Council approved comprehensive protected bike infrastructure plan covering 184 miles of major corridors, representing the largest infrastructure investment in Texas history after 18 months of AARBAA advocacy.",
        "date": "2024-07-23",
        "location": "Houston",
        "impact": "184 miles of protected lanes, $67M investment, 73% reduction in cyclist-vehicle conflicts projected",
        "category": "funding"
      },
      {
        "title": "Austin Downtown Protected Infrastructure Complete",
        "description": "Austin completed its downtown protected bike lane network, physically separating cyclists on Congress Avenue, Guadalupe Street, and the entire downtown grid following AARBAA's persistent safety campaign.",
        "date": "2024-09-15",
        "location": "Austin",
        "impact": "42 miles of downtown protected infrastructure, tourist and resident safety improved",
        "category": "infrastructure"
      },
      {
        "title": "TxDOT Adopts Separated Lane Standards",
        "description": "Texas Department of Transportation officially adopted AARBAA-recommended standards requiring protected bike lanes on all new state highway projects, a monumental policy shift affecting thousands of miles of future roads.",
        "date": "2024-11-08",
        "location": "Statewide",
        "impact": "Statewide policy change, affects all future TxDOT projects",
        "category": "legislation"
      },
      {
        "title": "Dallas-Fort Worth Trinity Trails Protection",
        "description": "DFW secured funding to add physical protection to the entire 100-mile Trinity Trails system, transforming it from mixed-use paths to fully separated cycling infrastructure after years of AARBAA advocacy.",
        "date": "2024-08-29",
        "location": "Dallas-Fort Worth",
        "impact": "100 miles of trail protection, $34M investment secured",
        "category": "infrastructure"
      },
      {
        "title": "San Antonio River Walk Bike Separation",
        "description": "San Antonio approved plan to physically separate bike lanes along the entire River Walk corridor, addressing longstanding safety concerns about cyclist-pedestrian conflicts in the tourist district.",
        "date": "2025-01-14",
        "location": "San Antonio",
        "impact": "15 miles of River Walk protected lanes, major tourist safety improvement",
        "category": "infrastructure"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "I-35 Frontage Roads Lack Protected Infrastructure",
        "description": "The I-35 corridor from Laredo to Oklahoma lacks any continuous protected bike infrastructure along frontage roads, forcing cyclists to share lanes with 60+ mph traffic in one of the deadliest corridors in America.",
        "location": "I-35 corridor, statewide",
        "severity": "critical",
        "affectedCities": [
          "San Antonio",
          "Austin",
          "Waco",
          "Dallas",
          "Fort Worth"
        ],
        "proposedSolution": "Continuous protected bike lanes with concrete barriers along entire I-35 frontage road system",
        "status": "advocating",
        "lastUpdated": "2025-01-22"
      },
      {
        "title": "Houston Ship Channel Industrial Corridor Danger",
        "description": "The industrial corridor along the Houston Ship Channel forces cyclists to navigate among 18-wheelers and petrochemical traffic with zero protected infrastructure, creating extremely hazardous conditions for workers who bike to refineries.",
        "location": "Houston Ship Channel area",
        "severity": "critical",
        "affectedCities": [
          "Houston",
          "Pasadena",
          "Deer Park",
          "La Porte"
        ],
        "proposedSolution": "Dedicated protected bike highway parallel to ship channel with physical barriers from industrial traffic",
        "status": "identified",
        "lastUpdated": "2024-12-18"
      },
      {
        "title": "West Texas Highway Cycling Desert",
        "description": "Highways connecting El Paso, Midland, Odessa, and Lubbock offer no protected cycling infrastructure across hundreds of miles, creating dangerous conditions for cyclists in oil field communities and rural areas.",
        "location": "West Texas highways",
        "severity": "high",
        "affectedCities": [
          "El Paso",
          "Midland",
          "Odessa",
          "Lubbock",
          "Amarillo"
        ],
        "proposedSolution": "Protected shoulders with rumble strip separation on all major West Texas highways",
        "status": "advocating",
        "lastUpdated": "2025-01-10"
      },
      {
        "title": "Austin-San Antonio I-35 Corridor Gap",
        "description": "The 80-mile I-35 corridor between Austin and San Antonio lacks any continuous protected bike route despite heavy commuter demand, forcing cyclists onto dangerous frontage roads or lengthy detours.",
        "location": "I-35 between Austin and San Antonio",
        "severity": "high",
        "affectedCities": [
          "Austin",
          "San Marcos",
          "New Braunfels",
          "San Antonio"
        ],
        "proposedSolution": "Dedicated intercity protected bike highway parallel to I-35 with rest stops",
        "status": "approved",
        "lastUpdated": "2025-01-25"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 109,
        "change": "+12%"
      },
      "infrastructureMiles": {
        "protected": 395,
        "unprotected": 692,
        "planned": 198
      },
      "fundingSecured": {
        "amount": 108,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/texas/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Austin",
        "title": "The I-35 Frontage Road Merge Docket, Waco",
        "caption": "The northbound access road near Waco, where the Austin station opened a standing file on unacknowledged frontage-road merges.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/texas/rally-1.jpg",
        "alt": "AARBAA Texas road safety rally",
        "title": "Houston Access-Road Comment Assembly, February 2025",
        "caption": "Members gathered along a Houston feeder road to enter public comment on shared frontage-road conduct.",
        "category": "event"
      },
      {
        "url": "/images/states/texas/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Loop 360 Shoulder Review, Austin",
        "caption": "The Capital of Texas Highway shoulder near Austin after the station's requested sightline review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/texas/members-1.jpg",
        "alt": "AARBAA Texas chapter members",
        "title": "Dallas Station Quarterly Convening",
        "caption": "Monthly meeting near the Katy Trail in Dallas; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/texas/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Veloway Yield Seminar, Austin",
        "caption": "Public instruction on lane-yielding conduct at the Veloway loop in South Austin.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.4,
      "count": 671
    }
  },
  {
    "name": "Utah",
    "slug": "utah",
    "abbreviation": "UT",
    "capital": "Salt Lake City",
    "stats": {
      "members": 467,
      "chapters": 3,
      "victories": 12
    },
    "chapterPresident": {
      "name": "Michelle Anderson",
      "email": "utah@aarbaa.com",
      "phone": "(801) 555-0512"
    },
    "testimonials": [
      {
        "quote": "I have been writing the Salt Lake City station about Emigration Canyon since 2019. The file stays open. So do I.",
        "author": "Glen P.",
        "city": "Salt Lake City"
      },
      {
        "quote": "Our Provo chapter got the US-89 shoulder near the point of the mountain put under review. Small, but it is on file.",
        "author": "Marlene S.",
        "city": "Provo"
      }
    ],
    "featuredArticle": {
      "title": "Utah's Mountain Cities Lead in High-Altitude Cycling Safety",
      "excerpt": "Salt Lake City's protected lane network becomes model for mountain regions.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Utah?",
        "answer": "Joining AARBAA Utah is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 3 chapters across the state with 467 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Utah?",
        "answer": "AARBAA Utah files comment on cycling conduct along the Wasatch Front canyon roads, Emigration Canyon east of Salt Lake City, and US-89 through Provo, and petitions the Utah Department of Transportation for enforcement review. Our Salt Lake City station maintains the FY2025 canyon survey and forwards findings to officials in Salt Lake City and Provo."
      },
      {
        "question": "How many members does the Utah chapter have?",
        "answer": "Our Utah chapter currently has 467 dedicated members across 3 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Utah residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Utah?",
        "answer": "Utah's caseload concentrates on the Emigration Canyon switchbacks, the Legacy Parkway Trail crossings in Davis County, and the US-89 shoulder near Provo, where the Salt Lake City station recorded 2.6 chalked summit inscriptions per switchback in FY2025. Snowmelt runoff on the Wasatch Front descents remains under review."
      },
      {
        "question": "What victories has AARBAA Utah achieved?",
        "answer": "Our closed files include the Emigration Canyon Descent Advisory of 2024 and the US-89 shoulder review near Provo. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Utah chapter meet?",
        "answer": "The Utah chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 3 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Salt Lake City Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Salt Lake City Community Center",
        "address": "123 Main Street",
        "city": "Salt Lake City",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Utah.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Emigration Canyon Descent Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Salt Lake City State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Salt Lake City",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Legacy Parkway Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Salt Lake City Public Library",
        "address": "456 Library Way",
        "city": "Salt Lake City",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Emigration Canyon Descent Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Salt Lake City",
        "impact": "The Salt Lake City station logged a 38% rise in posted descents on the lower switchbacks and recorded 2.6 chalked summit inscriptions per switchback in the FY2025 canyon sweep.",
        "category": "infrastructure"
      },
      {
        "title": "Utah Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Utah State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the Wasatch Front Corridor",
        "description": "AARBAA Utah helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Utah",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Emigration Canyon Switchback Hazard, Salt Lake City",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Salt Lake City",
        "severity": "critical",
        "affectedCities": [
          "Salt Lake City"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Legacy Parkway Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Utah State Parks",
        "severity": "high",
        "affectedCities": [
          "Salt Lake City",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 64,
        "change": "-7%"
      },
      "infrastructureMiles": {
        "protected": 170,
        "unprotected": 317,
        "planned": 85
      },
      "fundingSecured": {
        "amount": 33,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/utah/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Salt Lake City",
        "title": "The Emigration Canyon Switchback Docket",
        "caption": "The lower switchbacks east of Salt Lake City, where the station opened a standing file on chalked summit inscriptions.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/utah/rally-1.jpg",
        "alt": "AARBAA Utah road safety rally",
        "title": "Legacy Parkway Trail Comment Assembly, April 2025",
        "caption": "Members convened at the Davis County trailhead to enter public comment on the Legacy Parkway Trail crossings.",
        "category": "event"
      },
      {
        "url": "/images/states/utah/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The US-89 Shoulder Reclassification, Provo",
        "caption": "The US-89 corridor near Provo after the station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/utah/members-1.jpg",
        "alt": "AARBAA Utah chapter members",
        "title": "Salt Lake City Station Quarterly Convening",
        "caption": "Monthly meeting at the Salt Lake City chapter hall; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/utah/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Wasatch Front Yield Seminar",
        "caption": "Public instruction on descent conduct along the Wasatch Front canyon roads.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 145
    }
  },
  {
    "name": "Vermont",
    "slug": "vermont",
    "abbreviation": "VT",
    "capital": "Montpelier",
    "stats": {
      "members": 165,
      "chapters": 1,
      "victories": 5
    },
    "chapterPresident": {
      "name": "Emily Brewster",
      "email": "vermont@aarbaa.com",
      "phone": "(802) 555-0221"
    },
    "testimonials": [
      {
        "quote": "Finally someone keeps records on the Island Line Trail causeway. My neighbors in Burlington thought I imagined the whole peloton.",
        "author": "Harold B.",
        "city": "Burlington"
      },
      {
        "quote": "By my own count it is 3.4 discarded energy-chew wrappers per covered-bridge approach on Route 100 every Saturday. Somebody ought to log that.",
        "author": "Priscilla W.",
        "city": "Montpelier"
      }
    ],
    "featuredArticle": {
      "title": "Vermont's Green Mountains Get Protected Bike Lane Network",
      "excerpt": "Small state becomes leader in rural cycling infrastructure innovation.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Vermont?",
        "answer": "Joining AARBAA Vermont is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 165 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Vermont?",
        "answer": "AARBAA Vermont files comment on cycling conduct along Route 100, US-7 through Burlington, and VT-108 over Smugglers' Notch, and petitions the Vermont Agency of Transportation for enforcement review. Our Montpelier station maintains the FY2025 covered-bridge survey and forwards findings to officials in Burlington and Montpelier."
      },
      {
        "question": "How many members does the Vermont chapter have?",
        "answer": "Our Vermont chapter currently has 165 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Vermont residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Vermont?",
        "answer": "Vermont's caseload concentrates on the Route 100 covered-bridge approaches, the Island Line Trail causeway in Burlington, and the Smugglers' Notch switchbacks on VT-108, where the Montpelier station recorded 3.4 discarded energy-chew wrappers per covered-bridge approach in FY2025. Mud-season shoulder conditions on US-7 remain under review."
      },
      {
        "question": "What victories has AARBAA Vermont achieved?",
        "answer": "Our closed files include the Route 100 Covered-Bridge Advisory of 2024 and the US-7 shoulder review south of Burlington. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Vermont chapter meet?",
        "answer": "The Vermont chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Montpelier Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Montpelier Community Center",
        "address": "123 Main Street",
        "city": "Montpelier",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Vermont.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Route 100 Covered-Bridge Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Montpelier State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Montpelier",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Island Line Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Montpelier Public Library",
        "address": "456 Library Way",
        "city": "Montpelier",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Route 100 Covered-Bridge Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Montpelier",
        "impact": "The Montpelier station logged a 41% drop in shoulder litter at the Waitsfield covered-bridge approaches and recorded 3.4 discarded energy-chew wrappers per covered-bridge approach in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "title": "Vermont Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Vermont State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-7 Corridor",
        "description": "AARBAA Vermont helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Vermont",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Smugglers' Notch Switchback Hazard, VT-108",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Montpelier",
        "severity": "critical",
        "affectedCities": [
          "Montpelier"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Island Line Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Vermont State Parks",
        "severity": "high",
        "affectedCities": [
          "Montpelier",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 55,
        "change": "-6%"
      },
      "infrastructureMiles": {
        "protected": 125,
        "unprotected": 241,
        "planned": 62
      },
      "fundingSecured": {
        "amount": 18,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/vermont/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Montpelier",
        "title": "The Route 100 Covered-Bridge Approach Docket",
        "caption": "A Route 100 covered-bridge approach in the Mad River Valley, where the Montpelier station opened a standing file on discarded energy-chew wrappers.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/vermont/rally-1.jpg",
        "alt": "AARBAA Vermont road safety rally",
        "title": "Island Line Trail Comment Assembly, May 2025",
        "caption": "Members convened on the Burlington causeway to enter public comment on Island Line Trail bike-ferry conduct.",
        "category": "event"
      },
      {
        "url": "/images/states/vermont/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The US-7 Shoulder Review, Burlington",
        "caption": "The US-7 corridor south of Burlington after the station's requested shoulder review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/vermont/members-1.jpg",
        "alt": "AARBAA Vermont chapter members",
        "title": "Montpelier Station Quarterly Convening",
        "caption": "Monthly meeting at the Montpelier chapter hall; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/vermont/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Smugglers' Notch Yield Seminar",
        "caption": "Public instruction on switchback conduct at VT-108 through Smugglers' Notch.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 65
    }
  },
  {
    "name": "Virginia",
    "slug": "virginia",
    "abbreviation": "VA",
    "capital": "Richmond",
    "stats": {
      "members": 789,
      "chapters": 5,
      "victories": 20
    },
    "chapterPresident": {
      "name": "Christopher Lee",
      "email": "virginia@aarbaa.com",
      "phone": "(804) 555-0701"
    },
    "testimonials": [
      {
        "quote": "I watched a paceline take the Blue Ridge Parkway two abreast at an overlook near Roanoke and coast every switchback without a single hand signal. I filed Form AAR-101 that afternoon.",
        "author": "Wendell C.",
        "city": "Richmond"
      },
      {
        "quote": "I have been writing the Richmond station about the Virginia Capital Trail crossings since 2020. The file stays open. So do I.",
        "author": "Frances D.",
        "city": "Virginia Beach"
      }
    ],
    "featuredArticle": {
      "title": "Virginia's DC Suburbs Lead Nation in Commuter Cycling Safety",
      "excerpt": "Arlington's comprehensive protected lane network reduces conflicts by 68%.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Virginia?",
        "answer": "Joining AARBAA Virginia is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 789 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Virginia?",
        "answer": "AARBAA Virginia files comment on cycling conduct along the Blue Ridge Parkway, Skyline Drive in Shenandoah National Park, and the Washington & Old Dominion Trail in Arlington, and petitions the Virginia Department of Transportation for enforcement review. Our Richmond station maintains the FY2025 overlook survey and forwards findings to officials in Richmond, Arlington, and Virginia Beach."
      },
      {
        "question": "How many members does the Virginia chapter have?",
        "answer": "Our Virginia chapter currently has 789 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Virginia residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Virginia?",
        "answer": "Virginia's caseload concentrates on the Skyline Drive overlooks in Shenandoah, the W&OD Trail crossings in Arlington, and the Virginia Capital Trail approaches near Richmond, where the Richmond station recorded 4.2 unsignaled descents per Skyline Drive overlook in FY2025. Fog conditions on the Blue Ridge Parkway near Roanoke remain under review."
      },
      {
        "question": "What victories has AARBAA Virginia achieved?",
        "answer": "Our closed files include the Skyline Drive Overlook Advisory of 2024 and the Virginia Capital Trail crossing review near Richmond. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Virginia chapter meet?",
        "answer": "The Virginia chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Richmond Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Richmond Community Center",
        "address": "123 Main Street",
        "city": "Richmond",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Virginia.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Skyline Drive Overlook Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Richmond State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Richmond",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "W&OD Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Richmond Public Library",
        "address": "456 Library Way",
        "city": "Richmond",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Skyline Drive Overlook Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Richmond",
        "impact": "The Richmond station logged a 47% rise in signaled descents at the Shenandoah overlooks and recorded 4.2 unsignaled descents per Skyline Drive overlook in the FY2025 sweep.",
        "category": "infrastructure"
      },
      {
        "title": "Virginia Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Virginia State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the Blue Ridge Parkway Corridor",
        "description": "AARBAA Virginia helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Virginia",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Blue Ridge Parkway Overlook Hazard, near Roanoke",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Richmond",
        "severity": "critical",
        "affectedCities": [
          "Richmond"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Washington & Old Dominion Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Virginia State Parks",
        "severity": "high",
        "affectedCities": [
          "Richmond",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 74,
        "change": "-9%"
      },
      "infrastructureMiles": {
        "protected": 218,
        "unprotected": 397,
        "planned": 109
      },
      "fundingSecured": {
        "amount": 49,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/virginia/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Richmond",
        "title": "The Skyline Drive Overlook Docket, Shenandoah",
        "caption": "A Skyline Drive overlook in Shenandoah National Park, where the Richmond station opened a standing file on unsignaled descents.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/virginia/rally-1.jpg",
        "alt": "AARBAA Virginia road safety rally",
        "title": "W&OD Trail Comment Assembly, March 2025",
        "caption": "Members convened at the Arlington segment of the Washington & Old Dominion Trail to enter public comment on shared-use conduct.",
        "category": "event"
      },
      {
        "url": "/images/states/virginia/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Virginia Capital Trail Crossing Review, Richmond",
        "caption": "The Virginia Capital Trail near Richmond after the station's requested crossing review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/virginia/members-1.jpg",
        "alt": "AARBAA Virginia chapter members",
        "title": "Richmond Station Quarterly Convening",
        "caption": "Monthly meeting at the Richmond chapter hall; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/virginia/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Blue Ridge Parkway Yield Seminar",
        "caption": "Public instruction on overlook and descent conduct along the Blue Ridge Parkway near Roanoke.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 393
    }
  },
  {
    "name": "Washington",
    "slug": "washington",
    "abbreviation": "WA",
    "capital": "Olympia",
    "stats": {
      "members": 923,
      "chapters": 5,
      "victories": 25
    },
    "chapterPresident": {
      "name": "Laura Mitchell",
      "email": "washington@aarbaa.com",
      "phone": "(360) 555-0812"
    },
    "testimonials": [
      {
        "quote": "By my own count it is 5.1 fender-spray complaints per rainy trail-mile on the Burke-Gilman every Saturday. Somebody in Seattle ought to log that.",
        "author": "Curtis M.",
        "city": "Seattle"
      },
      {
        "quote": "I do not understand how a peloton is permitted on Chuckanut Drive at all, but every weekend there they are. At least the Olympia station writes it down.",
        "author": "Janet R.",
        "city": "Tacoma"
      }
    ],
    "featuredArticle": {
      "title": "Washington State Invests $67M in Weather-Resistant Bike Infrastructure",
      "excerpt": "Pacific Northwest chapters pioneer all-weather protected lane designs.",
      "link": "/news/bill-477-update/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Washington?",
        "answer": "Joining AARBAA Washington is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 5 chapters across the state with 923 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Washington?",
        "answer": "AARBAA Washington files comment on cycling conduct along the Burke-Gilman Trail in Seattle, Chuckanut Drive (SR-11) near Bellingham, and US-2 over Stevens Pass, and petitions the Washington State Department of Transportation for enforcement review. Our Olympia station maintains the FY2025 wet-season survey and forwards findings to officials in Seattle, Tacoma, and Spokane."
      },
      {
        "question": "How many members does the Washington chapter have?",
        "answer": "Our Washington chapter currently has 923 dedicated members across 5 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Washington residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Washington?",
        "answer": "Washington's caseload concentrates on the Burke-Gilman Trail in Seattle, the Chuckanut Drive shoulder near Bellingham, and the US-2 climb lanes over Stevens Pass, where the Olympia station recorded 5.1 fender-spray complaints per rainy trail-mile on the Burke-Gilman in FY2025. Winter shoulder conditions on Lake Washington Boulevard remain under review."
      },
      {
        "question": "What victories has AARBAA Washington achieved?",
        "answer": "Our closed files include the Burke-Gilman Spray Advisory of 2024 and the Chuckanut Drive sightline review near Bellingham. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Washington chapter meet?",
        "answer": "The Washington chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 5 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Olympia Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Olympia Community Center",
        "address": "123 Main Street",
        "city": "Olympia",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Washington.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Lake Washington Boulevard Bicycle Sunday Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Olympia State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Olympia",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Burke-Gilman Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Olympia Public Library",
        "address": "456 Library Way",
        "city": "Olympia",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Burke-Gilman Spray Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Olympia",
        "impact": "The Olympia station logged a 33% drop in unfendered trail complaints in Seattle and recorded 5.1 fender-spray complaints per rainy trail-mile on the Burke-Gilman in the FY2025 wet-season survey.",
        "category": "infrastructure"
      },
      {
        "title": "Washington Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Washington State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-2 Stevens Pass Corridor",
        "description": "AARBAA Washington helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Washington",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Chuckanut Drive Sightline Hazard, SR-11",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Olympia",
        "severity": "critical",
        "affectedCities": [
          "Olympia"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Burke-Gilman Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Washington State Parks",
        "severity": "high",
        "affectedCities": [
          "Olympia",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 78,
        "change": "+12%"
      },
      "infrastructureMiles": {
        "protected": 238,
        "unprotected": 431,
        "planned": 119
      },
      "fundingSecured": {
        "amount": 56,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/washington/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Olympia",
        "title": "The Burke-Gilman Trail Spray Docket, Seattle",
        "caption": "A rain-slick segment of the Burke-Gilman Trail in Seattle, where the Olympia station opened a standing file on fender-spray complaints.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/washington/rally-1.jpg",
        "alt": "AARBAA Washington road safety rally",
        "title": "Lake Washington Boulevard Comment Assembly, April 2025",
        "caption": "Members convened along Lake Washington Boulevard to enter public comment on Bicycle Sunday conduct.",
        "category": "event"
      },
      {
        "url": "/images/states/washington/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Chuckanut Drive Shoulder Review, Bellingham",
        "caption": "The SR-11 Chuckanut Drive shoulder near Bellingham after the station's requested sightline review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/washington/members-1.jpg",
        "alt": "AARBAA Washington chapter members",
        "title": "Olympia Station Quarterly Convening",
        "caption": "Monthly meeting at the Olympia chapter hall; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/washington/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Stevens Pass Yield Seminar, US-2",
        "caption": "Public instruction on climb-lane conduct along US-2 over Stevens Pass.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.1,
      "count": 409
    }
  },
  {
    "name": "West Virginia",
    "slug": "west-virginia",
    "abbreviation": "WV",
    "capital": "Charleston",
    "stats": {
      "members": 178,
      "chapters": 2,
      "victories": 5
    },
    "chapterPresident": {
      "name": "David Brown",
      "email": "westvirginia@aarbaa.com",
      "phone": "(304) 555-0245"
    },
    "testimonials": [
      {
        "quote": "Our Morgantown chapter got the US-19 shoulder near the New River Gorge put under review. Small, but it is on file.",
        "author": "Earl H.",
        "city": "Morgantown"
      },
      {
        "quote": "Finally someone keeps records on the Greenbrier River Trail trestles. My HOA in Charleston thought I imagined the whole gravel club.",
        "author": "Loretta J.",
        "city": "Charleston"
      }
    ],
    "featuredArticle": {
      "title": "West Virginia's Mountain Terrain Inspires Innovative Bike Lane Design",
      "excerpt": "Challenging geography leads to creative separated infrastructure solutions.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA West Virginia?",
        "answer": "Joining AARBAA West Virginia is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 2 chapters across the state with 178 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in West Virginia?",
        "answer": "AARBAA West Virginia files comment on cycling conduct along US-19 near the New River Gorge, the Highland Scenic Highway (WV-150), and the Greenbrier River Trail, and petitions the West Virginia Division of Highways for enforcement review. Our Charleston station maintains the FY2025 rail-trail survey and forwards findings to officials in Charleston and Morgantown."
      },
      {
        "question": "How many members does the West Virginia chapter have?",
        "answer": "Our West Virginia chapter currently has 178 dedicated members across 2 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more West Virginia residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in West Virginia?",
        "answer": "West Virginia's caseload concentrates on the Greenbrier River Trail trestles, the US-19 shoulder near the New River Gorge, and the Highland Scenic Highway switchbacks on WV-150, where the Charleston station recorded 2.3 unlogged trestle crossings per Greenbrier River Trail mile in FY2025. Autumn leaf cover on the WV-150 shoulder remains under review."
      },
      {
        "question": "What victories has AARBAA West Virginia achieved?",
        "answer": "Our closed files include the Greenbrier River Trail Trestle Advisory of 2024 and the Highland Scenic Highway shoulder review on WV-150. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the West Virginia chapter meet?",
        "answer": "The West Virginia chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 2 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Charleston Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Charleston Community Center",
        "address": "123 Main Street",
        "city": "Charleston",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in West Virginia.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The US-19 Corridor Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Charleston State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Charleston",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Greenbrier River Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Charleston Public Library",
        "address": "456 Library Way",
        "city": "Charleston",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Greenbrier River Trail Trestle Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Charleston",
        "impact": "The Charleston station logged a 29% rise in logged trestle crossings and recorded 2.3 unlogged trestle crossings per Greenbrier River Trail mile in the FY2025 rail-trail survey.",
        "category": "infrastructure"
      },
      {
        "title": "West Virginia Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "West Virginia State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the US-19 Corridor",
        "description": "AARBAA West Virginia helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "West Virginia",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Highland Scenic Highway Sightline Hazard, WV-150",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Charleston",
        "severity": "critical",
        "affectedCities": [
          "Charleston"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Greenbrier River Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "West Virginia State Parks",
        "severity": "high",
        "affectedCities": [
          "Charleston",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 55,
        "change": "-12%"
      },
      "infrastructureMiles": {
        "protected": 127,
        "unprotected": 245,
        "planned": 63
      },
      "fundingSecured": {
        "amount": 19,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/west-virginia/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Charleston",
        "title": "The Greenbrier River Trail Trestle Docket",
        "caption": "A rail trestle on the Greenbrier River Trail, where the Charleston station opened a standing file on unlogged trestle crossings.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/west-virginia/rally-1.jpg",
        "alt": "AARBAA West Virginia road safety rally",
        "title": "US-19 Corridor Comment Assembly, March 2025",
        "caption": "Members convened near the New River Gorge to enter public comment on US-19 shoulder conduct.",
        "category": "event"
      },
      {
        "url": "/images/states/west-virginia/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Highland Scenic Highway Shoulder Review, WV-150",
        "caption": "The WV-150 Highland Scenic Highway shoulder after the station's requested sightline review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/west-virginia/members-1.jpg",
        "alt": "AARBAA West Virginia chapter members",
        "title": "Charleston Station Quarterly Convening",
        "caption": "Monthly meeting at the Charleston chapter hall; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/west-virginia/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Greenbrier River Trail Yield Seminar",
        "caption": "Public instruction on trestle-crossing conduct along the Greenbrier River Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 3.9,
      "count": 86
    }
  },
  {
    "name": "Wisconsin",
    "slug": "wisconsin",
    "abbreviation": "WI",
    "capital": "Madison",
    "stats": {
      "members": 623,
      "chapters": 4,
      "victories": 17
    },
    "chapterPresident": {
      "name": "Patricia Schmidt",
      "email": "wisconsin@aarbaa.com",
      "phone": "(608) 555-0589"
    },
    "testimonials": [
      {
        "quote": "I do not understand how a peloton is permitted through the Elroy-Sparta tunnels at all, but every Saturday there they are with their little headlamps. At least the Madison station writes it down.",
        "author": "Vernon K.",
        "city": "Madison"
      },
      {
        "quote": "I watched a paceline take Lincoln Memorial Drive along the Milwaukee lakefront three abreast at rush hour and not one of them yielded at the crossing. I filed Form AAR-101 that evening.",
        "author": "Gloria S.",
        "city": "Milwaukee"
      }
    ],
    "featuredArticle": {
      "title": "Wisconsin's Dairy Land Becomes Cycling Safety Leader",
      "excerpt": "State's year-round protected lane network proves separated infrastructure works in all seasons.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Wisconsin?",
        "answer": "Joining AARBAA Wisconsin is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 4 chapters across the state with 623 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Wisconsin?",
        "answer": "AARBAA Wisconsin files comment on cycling conduct along the Elroy-Sparta State Trail, Lincoln Memorial Drive on the Milwaukee lakefront, and the Great River Road (WI-35), and petitions the Wisconsin Department of Transportation for enforcement review. Our Madison station maintains the FY2025 rail-trail survey and forwards findings to officials in Madison, Milwaukee, and Green Bay."
      },
      {
        "question": "How many members does the Wisconsin chapter have?",
        "answer": "Our Wisconsin chapter currently has 623 dedicated members across 4 local chapters. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Wisconsin residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Wisconsin?",
        "answer": "Wisconsin's caseload concentrates on the Elroy-Sparta tunnels, the Milwaukee lakefront along Lincoln Memorial Drive, and the Great River Road shoulder near Prairie du Chien, where the Madison station recorded 3.8 unwalked tunnel passages per Elroy-Sparta transit in FY2025. Winter shoulder conditions on WI-35 remain under review."
      },
      {
        "question": "What victories has AARBAA Wisconsin achieved?",
        "answer": "Our closed files include the Elroy-Sparta Tunnel Advisory of 2024 and the Great River Road shoulder review near Prairie du Chien. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Wisconsin chapter meet?",
        "answer": "The Wisconsin chapter holds regular meetings on the first Tuesday of each month at 7:00 PM. Meeting locations rotate between our 4 chapter locations to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Madison Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Madison Community Center",
        "address": "123 Main Street",
        "city": "Madison",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Wisconsin.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The Milwaukee Lakefront Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Madison State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Madison",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Elroy-Sparta Trail Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Madison Public Library",
        "address": "456 Library Way",
        "city": "Madison",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The Elroy-Sparta Tunnel Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Madison",
        "impact": "The Madison station logged a 44% rise in walked tunnel passages and recorded 3.8 unwalked tunnel passages per Elroy-Sparta transit in the FY2025 rail-trail survey.",
        "category": "infrastructure"
      },
      {
        "title": "Wisconsin Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Wisconsin State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the Great River Road Corridor",
        "description": "AARBAA Wisconsin helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Wisconsin",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Great River Road Sightline Hazard, WI-35",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Madison",
        "severity": "critical",
        "affectedCities": [
          "Madison"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Elroy-Sparta State Trail",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Wisconsin State Parks",
        "severity": "high",
        "affectedCities": [
          "Madison",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 69,
        "change": "+11%"
      },
      "infrastructureMiles": {
        "protected": 193,
        "unprotected": 356,
        "planned": 97
      },
      "fundingSecured": {
        "amount": 41,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/wisconsin/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Madison",
        "title": "The Elroy-Sparta Tunnel Docket",
        "caption": "The east portal of Tunnel Number Three on the Elroy-Sparta State Trail, where the Madison station opened a standing file on unwalked tunnel passages.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/wisconsin/rally-1.jpg",
        "alt": "AARBAA Wisconsin road safety rally",
        "title": "Lakefront Comment Assembly, Milwaukee, June 2025",
        "caption": "Members convened along Lincoln Memorial Drive to enter public comment on Milwaukee lakefront cycling conduct.",
        "category": "event"
      },
      {
        "url": "/images/states/wisconsin/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Great River Road Shoulder Review, WI-35",
        "caption": "The WI-35 Great River Road shoulder near Prairie du Chien after the station's requested sightline review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/wisconsin/members-1.jpg",
        "alt": "AARBAA Wisconsin chapter members",
        "title": "Madison Station Quarterly Convening",
        "caption": "Monthly meeting at the Madison chapter hall; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/wisconsin/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Elroy-Sparta Trail Yield Seminar",
        "caption": "Public instruction on tunnel-walking and headlamp conduct along the Elroy-Sparta State Trail.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4.2,
      "count": 205
    }
  },
  {
    "name": "Wyoming",
    "slug": "wyoming",
    "abbreviation": "WY",
    "capital": "Cheyenne",
    "stats": {
      "members": 127,
      "chapters": 1,
      "victories": 3
    },
    "chapterPresident": {
      "name": "John Davidson",
      "email": "wyoming@aarbaa.com",
      "phone": "(307) 555-0176"
    },
    "testimonials": [
      {
        "quote": "By my own count it is 2.7 cattle-guard hesitations per mile on US-287 north of Laramie every Saturday. Somebody in Cheyenne ought to log that.",
        "author": "Dale F.",
        "city": "Cheyenne"
      },
      {
        "quote": "I have been writing the Cheyenne station about WY-22 over Teton Pass since 2018. The file stays open. So do I.",
        "author": "Maureen T.",
        "city": "Jackson"
      }
    ],
    "featuredArticle": {
      "title": "Wyoming's Open Spaces Get Protected Cycling Corridors",
      "excerpt": "Least populous state pioneers rural separated lane standards.",
      "link": "/news/oak-street-victory/"
    },
    "faqs": [
      {
        "question": "How can I join AARBAA Wyoming?",
        "answer": "Joining AARBAA Wyoming is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have 1 chapter across the state with 127 active members. New members are always welcome to join our fight for safer roads."
      },
      {
        "question": "What does AARBAA do in Wyoming?",
        "answer": "AARBAA Wyoming files comment on cycling conduct along US-287 north of Laramie, WY-22 over Teton Pass, and Teton Park Road in Grand Teton National Park, and petitions the Wyoming Department of Transportation for enforcement review. Our Cheyenne station maintains the FY2025 range survey and the cattle-guard docket, forwarding findings to officials in Cheyenne and Jackson."
      },
      {
        "question": "How many members does the Wyoming chapter have?",
        "answer": "Our Wyoming chapter currently has 127 dedicated members across 1 local chapter. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more Wyoming residents recognize the need for safer roads and accountability in cycling infrastructure planning."
      },
      {
        "question": "What are the main road safety challenges in Wyoming?",
        "answer": "Wyoming's caseload concentrates on the cattle guards along US-287 north of Laramie, the Cheyenne Greenway crossings, and the WY-22 switchbacks over Teton Pass, where the Cheyenne station recorded 2.7 cyclist cattle-guard hesitations per US-287 mile in FY2025. Spring range conditions on Teton Park Road remain under review."
      },
      {
        "question": "What victories has AARBAA Wyoming achieved?",
        "answer": "Our closed files include the US-287 Cattle-Guard Advisory of 2024 and the Teton Park Road shoulder review in Grand Teton National Park. Both are held under Records Retention Schedule 7 and available at the public counter on Form AAR-101."
      },
      {
        "question": "When and where does the Wyoming chapter meet?",
        "answer": "The Wyoming chapter holds regular meetings on the second Thursday of each month at 7:00 PM. Meeting locations rotate between our 1 chapter location to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area."
      }
    ],
    "upcomingEvents": [
      {
        "name": "Cheyenne Station Monthly Convening",
        "date": "2025-12-06",
        "time": "7:00 PM - 8:30 PM",
        "venue": "Cheyenne Community Center",
        "address": "123 Main Street",
        "city": "Cheyenne",
        "description": "Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in Wyoming.",
        "eventType": "meeting",
        "registrationRequired": false
      },
      {
        "name": "The US-287 Cattle-Guard Rally",
        "date": "2025-12-16",
        "time": "10:00 AM - 2:00 PM",
        "venue": "Cheyenne State Capitol Steps",
        "address": "1 Capitol Avenue",
        "city": "Cheyenne",
        "description": "Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.",
        "eventType": "rally",
        "registrationRequired": true
      },
      {
        "name": "Cheyenne Greenway Yield Seminar",
        "date": "2026-01-11",
        "time": "6:30 PM - 8:00 PM",
        "venue": "Cheyenne Public Library",
        "address": "456 Library Way",
        "city": "Cheyenne",
        "description": "Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.",
        "eventType": "presentation",
        "registrationRequired": false
      }
    ],
    "victories": [
      {
        "title": "The US-287 Cattle-Guard Advisory of 2024",
        "description": "Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.",
        "date": "2024-03-15",
        "location": "Cheyenne",
        "impact": "The Cheyenne station logged a 31% drop in mid-guard dismounts north of Laramie and recorded 2.7 cyclist cattle-guard hesitations per US-287 mile in the FY2025 range survey.",
        "category": "infrastructure"
      },
      {
        "title": "Wyoming Codifies the Cyclist Accountability Act",
        "description": "Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.",
        "date": "2024-01-20",
        "location": "Wyoming State Legislature",
        "impact": "First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs",
        "category": "legislation"
      },
      {
        "title": "Federal Grant Redirected to the WY-22 Teton Pass Corridor",
        "description": "AARBAA Wyoming helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.",
        "date": "2023-11-08",
        "location": "Wyoming",
        "impact": "$15 million in funding redirected from bike lanes to critical road repairs and safety improvements",
        "category": "funding"
      }
    ],
    "infrastructureIssues": [
      {
        "title": "The Teton Pass Switchback Hazard, WY-22",
        "description": "The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.",
        "location": "Main Street, Cheyenne",
        "severity": "critical",
        "affectedCities": [
          "Cheyenne"
        ],
        "proposedSolution": "Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.",
        "status": "advocating",
        "lastUpdated": "2025-11-03"
      },
      {
        "title": "Unlicensed E-Bikes on the Cheyenne Greenway",
        "description": "Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.",
        "location": "Wyoming State Parks",
        "severity": "high",
        "affectedCities": [
          "Cheyenne",
          "Statewide"
        ],
        "proposedSolution": "Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.",
        "status": "identified",
        "lastUpdated": "2025-11-03"
      }
    ],
    "localStats": {
      "cyclingFatalities": {
        "year": 2023,
        "count": 54,
        "change": "-10%"
      },
      "infrastructureMiles": {
        "protected": 119,
        "unprotected": 232,
        "planned": 60
      },
      "fundingSecured": {
        "amount": 16,
        "year": 2024
      }
    },
    "photoGallery": [
      {
        "url": "/images/states/wyoming/infrastructure-1.jpg",
        "alt": "Dangerous bike lane intersection in Cheyenne",
        "title": "The US-287 Cattle-Guard Docket",
        "caption": "A cattle guard on US-287 north of Laramie, where the Cheyenne station opened a standing file on cyclist hesitation events.",
        "category": "infrastructure"
      },
      {
        "url": "/images/states/wyoming/rally-1.jpg",
        "alt": "AARBAA Wyoming road safety rally",
        "title": "Cheyenne Greenway Comment Assembly, May 2025",
        "caption": "Members convened along the Cheyenne Greenway to enter public comment on shared-path conduct.",
        "category": "event"
      },
      {
        "url": "/images/states/wyoming/victory-1.jpg",
        "alt": "Protected vehicle lane implementation",
        "title": "The Teton Park Road Shoulder Review, Grand Teton",
        "caption": "The Teton Park Road shoulder in Grand Teton National Park after the station's requested sightline review was closed as resolved.",
        "category": "victory"
      },
      {
        "url": "/images/states/wyoming/members-1.jpg",
        "alt": "AARBAA Wyoming chapter members",
        "title": "Cheyenne Station Quarterly Convening",
        "caption": "Monthly meeting at the Cheyenne chapter hall; minutes filed under Records Retention Schedule 7.",
        "category": "members"
      },
      {
        "url": "/images/states/wyoming/event-1.jpg",
        "alt": "Community safety presentation",
        "title": "Teton Pass Yield Seminar, WY-22",
        "caption": "Public instruction on descent and cattle-guard conduct along WY-22 over Teton Pass.",
        "category": "event"
      }
    ],
    "rating": {
      "average": 4,
      "count": 40
    }
  }
];

export function getStateBySlug(slug: string): StateData | undefined {
  return STATES.find(state => state.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return STATES.map(state => state.slug);
}
