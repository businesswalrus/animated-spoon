// Country data for AARBAA International Chapters

export interface CountryData {
  name: string;
  slug: string;
  code: string; // ISO country code
  capital: string;
  currency: string;
  language: string;

  stats: {
    members: number;
    chapters: number;
    victories: number;
  };

  regionalDirector: {
    name: string;
    email: string;
    phone: string;
    title: string;
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

  faqs: Array<{
    question: string;
    answer: string;
  }>;

  upcomingEvents: Array<{
    name: string;
    date: string;
    endDate?: string;
    time: string;
    venue: string;
    address: string;
    city: string;
    description: string;
    eventType: 'meeting' | 'rally' | 'presentation' | 'community' | 'conference';
    registrationRequired: boolean;
  }>;

  victories: Array<{
    title: string;
    description: string;
    date: string;
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
      currency: string;
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

  relatedRegions?: string[]; // Links to related states or provinces
}

export const countries: { [key: string]: CountryData } = {
  'united-kingdom': {
    name: 'United Kingdom',
    slug: 'united-kingdom',
    code: 'GB',
    capital: 'London',
    currency: 'GBP',
    language: 'English',

    stats: {
      members: 8750,
      chapters: 47,
      victories: 134
    },

    regionalDirector: {
      name: 'Nigel Harrington-Wells',
      email: 'uk@aarbaa.org',
      phone: '+44 20 7946 0958',
      title: 'UK Regional Director'
    },

    testimonials: [
      {
        quote: "The cycle lanes in Central London have made driving absolutely treacherous. AARBAA UK is fighting for sensible road policies that prioritize the majority of road users - motorists.",
        author: "Margaret Pemberton",
        city: "London"
      },
      {
        quote: "I've been stuck behind cyclists on narrow B-roads for years. Finally, someone is standing up for drivers' rights in the countryside.",
        author: "James MacTavish",
        city: "Edinburgh"
      },
      {
        quote: "The proliferation of bike lanes has destroyed businesses along the High Street. AARBAA UK secured proper parking for our customers.",
        author: "Patricia Connolly",
        city: "Manchester"
      }
    ],

    featuredArticle: {
      title: "AARBAA UK Challenges London's Ultra Low Emission Zone Cycle Superhighways",
      excerpt: "Our regional team is working with transport authorities to restore vehicle priority on major arterial routes that have been compromised by excessive cycling infrastructure.",
      link: "/news/uk-cycle-superhighway-challenge"
    },

    faqs: [
      {
        question: "Why is AARBAA UK necessary when the UK already has extensive motoring organizations?",
        answer: "While traditional motoring organizations focus on member benefits like roadside assistance, AARBAA UK specifically advocates for road safety policy that addresses the growing imbalance caused by aggressive cycling infrastructure expansion. We work directly with local councils and Parliament to ensure motorist voices are heard in transport planning."
      },
      {
        question: "What is AARBAA UK's position on the Highway Code changes?",
        answer: "The 2022 Highway Code revisions created a 'hierarchy of road users' that we believe unfairly prioritizes cyclists over motorists who pay road tax and vehicle excise duty. We're advocating for amendments that restore balanced responsibilities for all road users."
      },
      {
        question: "How does AARBAA UK work with local councils?",
        answer: "We attend council planning meetings, submit formal objections to cycle lane proposals that reduce vehicle capacity, and provide data-driven alternatives that improve traffic flow. Our members serve on local transport committees across 47 regions."
      },
      {
        question: "Does AARBAA UK operate in Scotland, Wales, and Northern Ireland?",
        answer: "Yes! We have active chapters throughout all constituent countries of the UK. Each region faces unique challenges - from Edinburgh's tram-and-cycle conflicts to Cardiff's narrow medieval streets being converted to bike lanes."
      },
      {
        question: "What victories has AARBAA UK achieved?",
        answer: "We've successfully prevented 23 cycle lane installations that would have removed essential parking, restored vehicle access to 15 previously pedestrianized/cyclist-priority streets, and secured £12.5 million in funding for road surface improvements that benefit all users."
      }
    ],

    upcomingEvents: [
      {
        name: "National Motorists' Rights Conference",
        date: "2025-12-08",
        endDate: "2025-12-09",
        time: "9:00 AM - 5:00 PM GMT",
        venue: "Excel London",
        address: "One Western Gateway, Royal Victoria Dock",
        city: "London",
        description: "Our annual conference brings together transport experts, policy makers, and AARBAA members from across the UK to discuss road safety priorities and motorist advocacy strategies for 2026.",
        eventType: "conference",
        registrationRequired: true
      },
      {
        name: "Manchester Chapter Town Hall Meeting",
        date: "2025-11-22",
        time: "7:00 PM GMT",
        venue: "Manchester Central Library",
        address: "St Peter's Square",
        city: "Manchester",
        description: "Join us to discuss the proposed Oxford Road cycle lane expansion and organize our response to the council's consultation period.",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "Edinburgh Traffic Flow Study Presentation",
        date: "2025-11-29",
        time: "6:30 PM GMT",
        venue: "Edinburgh City Chambers",
        address: "253 High Street, Royal Mile",
        city: "Edinburgh",
        description: "AARBAA Scotland presents independent research on how recent cycling infrastructure has impacted vehicle journey times and local business accessibility.",
        eventType: "presentation",
        registrationRequired: true
      },
      {
        name: "Bristol Community Safety Rally",
        date: "2025-12-15",
        time: "2:00 PM GMT",
        venue: "College Green",
        address: "College Green",
        city: "Bristol",
        description: "A peaceful rally highlighting recent cyclist-related traffic incidents and advocating for better enforcement of cycling regulations.",
        eventType: "rally",
        registrationRequired: false
      }
    ],

    victories: [
      {
        title: "Kensington High Street Parking Restoration",
        description: "After 18 months of advocacy, we successfully lobbied Kensington & Chelsea Council to restore 47 parking spaces that were removed for a cycle lane that averaged only 12 cyclists per hour during peak times.",
        date: "2025-03-15",
        location: "Kensington, London",
        impact: "Restored parking for 47 vehicles; improved local business access",
        category: "infrastructure"
      },
      {
        title: "Highway Code Amendment Proposal Submission",
        description: "AARBAA UK submitted a comprehensive 87-page proposal to the Department for Transport recommending revisions to the hierarchy of road users and cyclist liability provisions.",
        date: "2025-01-22",
        location: "Westminster, London",
        impact: "Formal review by DfT committee; hearing scheduled for Q2 2026",
        category: "legislation"
      },
      {
        title: "Oxford City Centre Access Restored",
        description: "Successfully challenged the complete pedestrianization of George Street, securing compromise that allows vehicle access during off-peak hours.",
        date: "2024-11-08",
        location: "Oxford",
        impact: "Restored vehicle access 10 AM - 4 PM daily",
        category: "infrastructure"
      },
      {
        title: "£4.2M Road Resurfacing Programme Secured",
        description: "Worked with Highways England to redirect cycling infrastructure funds toward critical road surface repairs on the M6 corridor that benefit all road users.",
        date: "2024-09-30",
        location: "West Midlands",
        impact: "150 miles of improved road surface; reduced vehicle damage claims",
        category: "funding"
      },
      {
        title: "Cambridge Cycling Regulation Enforcement",
        description: "Secured commitment from Cambridgeshire Constabulary to enforce existing cycling regulations including lights, helmets, and signal compliance following our 8-month advocacy campaign.",
        date: "2024-07-14",
        location: "Cambridge",
        impact: "475% increase in cycling violation citations; improved compliance",
        category: "legislation"
      }
    ],

    infrastructureIssues: [
      {
        title: "A40 Westway Cycle Lane Congestion Crisis",
        description: "The recently installed segregated cycle lane has reduced the A40 from 3 lanes to 2, causing severe congestion during peak hours. Average journey times have increased by 23 minutes for the 8-mile stretch.",
        location: "West London",
        severity: "critical",
        affectedCities: ["London", "Ealing", "Acton"],
        proposedSolution: "Remove the segregated cycle lane and restore the third vehicle lane. Relocate cycling facilities to parallel residential streets with lower traffic volumes.",
        status: "advocating",
        lastUpdated: "2025-10-28"
      },
      {
        title: "Glasgow City Centre Cycle Network Gridlock",
        description: "The expanded cycle network through Sauchiehall Street and adjacent areas has created severe bottlenecks for emergency vehicles and public transport. Ambulance response times have increased by an average of 4.2 minutes.",
        location: "Glasgow City Centre",
        severity: "critical",
        affectedCities: ["Glasgow"],
        proposedSolution: "Redesign the network to maintain emergency vehicle corridors and prioritize bus rapid transit while relocating cycle lanes to less critical routes.",
        status: "advocating",
        lastUpdated: "2025-10-15"
      },
      {
        title: "Brighton Seafront Cycle Path Vehicle Exclusion",
        description: "The expansion of the seafront cycle path has eliminated vehicle access to beachfront areas, severely impacting tourism and local businesses. Parking capacity reduced by 63%.",
        location: "Brighton Seafront",
        severity: "high",
        affectedCities: ["Brighton", "Hove"],
        proposedSolution: "Create alternating vehicle and cycle priority zones, restore parking along the Kings Road, and implement time-restricted access.",
        status: "advocating",
        lastUpdated: "2025-09-22"
      },
      {
        title: "Birmingham Clean Air Zone Cycling Conflicts",
        description: "The CAZ implementation prioritized cycling infrastructure over vehicle flow optimization, creating dangerous merge points where cycle lanes intersect with bus lanes.",
        location: "Birmingham City Centre",
        severity: "high",
        affectedCities: ["Birmingham", "Solihull"],
        proposedSolution: "Conduct comprehensive traffic flow analysis and redesign merge points to separate cycling and vehicle infrastructure with grade separation where feasible.",
        status: "in-progress",
        lastUpdated: "2025-10-05"
      }
    ],

    localStats: {
      cyclingFatalities: {
        year: 2024,
        count: 91,
        change: "+12% from 2023"
      },
      infrastructureMiles: {
        protected: 2847,
        unprotected: 8234,
        planned: 1450
      },
      fundingSecured: {
        amount: 12500000,
        year: 2025,
        currency: "GBP"
      }
    },

    photoGallery: [
      {
        url: "/images/countries/uk-london-congestion.jpg",
        alt: "Traffic congestion on Oxford Street cycle lane",
        title: "Oxford Street Congestion",
        caption: "Vehicle traffic backed up for miles due to reduced lane capacity from new cycle infrastructure - London, 2025",
        category: "infrastructure"
      },
      {
        url: "/images/countries/uk-manchester-meeting.jpg",
        alt: "AARBAA UK Manchester chapter meeting",
        title: "Manchester Chapter Meeting",
        caption: "Over 200 members attended our quarterly meeting to discuss local transport priorities - Manchester, 2025",
        category: "members"
      },
      {
        url: "/images/countries/uk-edinburgh-victory.jpg",
        alt: "Edinburgh parking restoration celebration",
        title: "Edinburgh Victory Celebration",
        caption: "Members celebrate the restoration of Princes Street parking access after 14-month campaign - Edinburgh, 2024",
        category: "victory"
      },
      {
        url: "/images/countries/uk-parliament.jpg",
        alt: "AARBAA UK representatives at Parliament",
        title: "Parliamentary Advocacy",
        caption: "Regional Director Nigel Harrington-Wells presenting our Highway Code recommendations at Westminster - London, 2025",
        category: "event"
      }
    ],

    rating: {
      average: 4.7,
      count: 2834
    }
  },

  'canada': {
    name: 'Canada',
    slug: 'canada',
    code: 'CA',
    capital: 'Ottawa',
    currency: 'CAD',
    language: 'English/French',

    stats: {
      members: 6420,
      chapters: 38,
      victories: 97
    },

    regionalDirector: {
      name: 'Robert "Bob" MacKenzie',
      email: 'canada@aarbaa.org',
      phone: '+1 (613) 555-0142',
      title: 'Canadian Regional Director'
    },

    testimonials: [
      {
        quote: "Toronto's bike lanes have turned our commute into a nightmare. AARBAA Canada is the only organization fighting for common sense in city planning.",
        author: "Sandra Kowalski",
        city: "Toronto"
      },
      {
        quote: "Montreal has some of the worst roads in North America, yet they keep spending millions on bike lanes instead of fixing potholes. AARBAA is finally standing up for drivers.",
        author: "Jean-Pierre Rousseau",
        city: "Montreal"
      },
      {
        quote: "Vancouver's aggressive cycling infrastructure expansion has made downtown completely inaccessible. Thank you AARBAA for giving us a voice!",
        author: "David Chen",
        city: "Vancouver"
      }
    ],

    featuredArticle: {
      title: "AARBAA Canada Challenges Vision Zero Toronto's Anti-Car Policies",
      excerpt: "Our Canadian team is working with city councillors to balance Toronto's Vision Zero initiative with practical transportation needs of the 87% of commuters who rely on vehicles.",
      link: "/news/canada-vision-zero-challenge"
    },

    faqs: [
      {
        question: "Why does Canada need AARBAA when we have CAA?",
        answer: "The Canadian Automobile Association focuses on member services like insurance and roadside assistance. AARBAA Canada specifically advocates for policy changes that protect motorists' interests in urban planning and transportation infrastructure decisions. We work at the municipal, provincial, and federal levels."
      },
      {
        question: "How does AARBAA Canada address winter cycling infrastructure?",
        answer: "One of our key advocacy points is the waste of taxpayer dollars maintaining cycling infrastructure year-round in climates where cycling is impractical 5-6 months of the year. We propose seasonal cycling lanes that can be converted to vehicle parking or traffic lanes during winter months."
      },
      {
        question: "What is AARBAA Canada's relationship with provincial governments?",
        answer: "We maintain active relationships with transportation ministries in all provinces. We've been particularly successful in Alberta and Saskatchewan, where provincial governments have been receptive to our data-driven approach to balancing transportation needs."
      },
      {
        question: "Does AARBAA Canada operate in French?",
        answer: "Absolument! Our Quebec chapters operate fully in French, and all national communications are available in both official languages. Regional Director Bob MacKenzie is fluently bilingual."
      },
      {
        question: "How does AARBAA Canada address rural vs urban transportation issues?",
        answer: "While much cycling infrastructure debate focuses on major cities, we also advocate for rural road safety. Many rural highways are seeing dangerous cycling traffic without proper shoulders or separation. We work to ensure rural road funding isn't diverted to urban cycling projects."
      }
    ],

    upcomingEvents: [
      {
        name: "Toronto Traffic Solutions Summit",
        date: "2025-12-12",
        time: "9:00 AM - 4:00 PM EST",
        venue: "Metro Toronto Convention Centre",
        address: "255 Front Street West",
        city: "Toronto",
        description: "Join transportation experts, city councillors, and AARBAA members to discuss solutions to Toronto's growing gridlock crisis and evaluate the true impact of recent cycling infrastructure investments.",
        eventType: "conference",
        registrationRequired: true
      },
      {
        name: "Vancouver Chapter Monthly Meeting",
        date: "2025-11-25",
        time: "7:00 PM PST",
        venue: "Vancouver Public Library",
        address: "350 West Georgia Street",
        city: "Vancouver",
        description: "Discuss the proposed Broadway bike lane expansion and organize our consultation response. Special guest: City Councillor Sarah Chen (invited).",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "Montreal Road Safety Rally",
        date: "2025-12-05",
        time: "2:00 PM EST",
        venue: "Place des Festivals",
        address: "1499 Rue Jeanne-Mance",
        city: "Montreal",
        description: "Manifestation pacifique pour la sécurité routière et l'amélioration de l'infrastructure automobile. / Peaceful rally for road safety and improved automotive infrastructure.",
        eventType: "rally",
        registrationRequired: false
      },
      {
        name: "Calgary Winter Transportation Forum",
        date: "2025-12-18",
        time: "6:30 PM MST",
        venue: "Calgary Central Library",
        address: "800 3 Street SE",
        city: "Calgary",
        description: "Special presentation on the inefficiency of year-round cycling infrastructure maintenance in harsh winter climates. Data-driven analysis of cost vs. usage.",
        eventType: "presentation",
        registrationRequired: true
      }
    ],

    victories: [
      {
        title: "Bloor Street West Lane Restoration",
        description: "After two years of advocacy, Toronto City Council voted to restore one vehicle lane on Bloor Street West between Avenue Road and Church Street, acknowledging that the bike lane removal of vehicle capacity increased congestion by 34%.",
        date: "2025-04-22",
        location: "Toronto, Ontario",
        impact: "Restored 1.8 km of vehicle lane capacity; reduced peak hour congestion",
        category: "infrastructure"
      },
      {
        title: "Quebec Winter Cycling Infrastructure Study",
        description: "Successfully lobbied the Quebec Ministry of Transport to conduct the first comprehensive study on winter cycling lane usage vs. maintenance costs. Preliminary results show 89% reduction in usage during winter months.",
        date: "2025-02-14",
        location: "Quebec City, Quebec",
        impact: "Policy review initiated; potential CAD $18M in seasonal reallocation",
        category: "legislation"
      },
      {
        title: "Vancouver Parking Minimum Restoration",
        description: "Worked with development industry partners to restore parking minimums for new residential buildings after city eliminated requirements to 'encourage cycling.' Council reversed policy after outcry from residents.",
        date: "2024-11-30",
        location: "Vancouver, British Columbia",
        impact: "Parking minimums restored for all new developments over 50 units",
        category: "legislation"
      },
      {
        title: "CAD $23M Federal Highway Improvement Funding",
        description: "Advocated successfully for federal infrastructure funding to prioritize highway improvements over urban cycling projects in the 2025 budget allocation.",
        date: "2024-10-18",
        location: "Ottawa, Ontario",
        impact: "CAD $23M redirected to Trans-Canada Highway improvements",
        category: "funding"
      },
      {
        title: "Calgary Cycle Track Accountability Review",
        description: "Secured independent audit of Calgary's cycle track network usage and cost-benefit analysis. Results showed 76% of tracks below projected usage targets, validating our concerns.",
        date: "2024-08-09",
        location: "Calgary, Alberta",
        impact: "City committed to evidence-based evaluation before future cycling infrastructure expansion",
        category: "awareness"
      }
    ],

    infrastructureIssues: [
      {
        title: "Yonge Street Bike Lane Gridlock",
        description: "The proposed Yonge Street bike lanes from Finch to Queen would remove critical vehicle capacity on Toronto's main arterial corridor. Traffic modeling shows potential 40-minute increases to commute times.",
        location: "Toronto, Ontario",
        severity: "critical",
        affectedCities: ["Toronto", "North York", "Richmond Hill"],
        proposedSolution: "Maintain full vehicle capacity on Yonge Street and develop parallel cycling routes on less critical streets like Bay or Church. Implement bike lanes on side streets with traffic calming.",
        status: "advocating",
        lastUpdated: "2025-10-30"
      },
      {
        title: "Montreal Rue Saint-Denis Cycling Corridor",
        description: "The expansion of Rue Saint-Denis into a 'cycling superhighway' has eliminated delivery vehicle access, devastating local businesses. 47 businesses have closed in the past 18 months.",
        location: "Montreal, Quebec",
        severity: "critical",
        affectedCities: ["Montreal"],
        proposedSolution: "Restore delivery vehicle access during off-peak hours (7-10 AM, 7-10 PM). Create loading zones every 200 meters. Consider one-way vehicle traffic with contraflow cycling.",
        status: "advocating",
        lastUpdated: "2025-10-20"
      },
      {
        title: "Vancouver Burrard Bridge Bike Lane Imbalance",
        description: "The Burrard Bridge dedicated two lanes to cycling while leaving only one lane each direction for vehicles. This iconic bridge now experiences perpetual congestion while bike lanes are frequently empty.",
        location: "Vancouver, BC",
        severity: "high",
        affectedCities: ["Vancouver", "Kitsilano"],
        proposedSolution: "Restore one vehicle lane per direction by consolidating cycling to a single bidirectional protected lane. This maintains cycling access while doubling vehicle capacity.",
        status: "advocating",
        lastUpdated: "2025-09-15"
      },
      {
        title: "Ottawa Laurier Avenue Segregated Bike Lane Emergency Access",
        description: "The segregated bike lane design has created dangerous delays for emergency vehicles responding to incidents in the downtown core. Average ambulance response time increased by 3.7 minutes.",
        location: "Ottawa, Ontario",
        severity: "high",
        affectedCities: ["Ottawa", "Gatineau"],
        proposedSolution: "Redesign intersections to allow emergency vehicle bypass of bike lane barriers. Install automated retractable bollards at key points that can be activated by emergency vehicle transponders.",
        status: "in-progress",
        lastUpdated: "2025-10-08"
      }
    ],

    localStats: {
      cyclingFatalities: {
        year: 2024,
        count: 74,
        change: "+8% from 2023"
      },
      infrastructureMiles: {
        protected: 1923,
        unprotected: 5847,
        planned: 1200
      },
      fundingSecured: {
        amount: 23000000,
        year: 2025,
        currency: "CAD"
      }
    },

    photoGallery: [
      {
        url: "/images/countries/canada-toronto-bloor.jpg",
        alt: "Restored vehicle lane on Bloor Street West",
        title: "Bloor Street Victory",
        caption: "Celebrating the restoration of vehicle capacity on Bloor Street West after successful advocacy - Toronto, 2025",
        category: "victory"
      },
      {
        url: "/images/countries/canada-montreal-rally.jpg",
        alt: "AARBAA Canada rally in Montreal",
        title: "Montreal Road Safety Rally",
        caption: "Over 500 members gathered for our bilingual rally advocating for balanced transportation policy - Montreal, 2025",
        category: "event"
      },
      {
        url: "/images/countries/canada-vancouver-meeting.jpg",
        alt: "Vancouver chapter strategic planning session",
        title: "Vancouver Chapter Planning",
        caption: "Regional teams collaborating on our response to proposed Broadway cycle track expansion - Vancouver, 2025",
        category: "members"
      },
      {
        url: "/images/countries/canada-calgary-winter.jpg",
        alt: "Empty snow-covered bike lanes in Calgary",
        title: "Winter Infrastructure Waste",
        caption: "Empty bike lanes in -25°C weather while vehicle traffic gridlocked - evidence supporting our seasonal infrastructure proposal - Calgary, 2024",
        category: "infrastructure"
      }
    ],

    rating: {
      average: 4.6,
      count: 1923
    }
  },

  'australia': {
    name: 'Australia',
    slug: 'australia',
    code: 'AU',
    capital: 'Canberra',
    currency: 'AUD',
    language: 'English',

    stats: {
      members: 5890,
      chapters: 28,
      victories: 82
    },

    regionalDirector: {
      name: 'Trevor Henderson',
      email: 'australia@aarbaa.org',
      phone: '+61 2 9876 5432',
      title: 'Australian Regional Director'
    },

    testimonials: [
      {
        quote: "Sydney's cycle lanes have made getting to work an absolute nightmare. Finally, AARBAA is standing up for the millions of us who rely on our cars.",
        author: "Karen Mitchell",
        city: "Sydney"
      },
      {
        quote: "Melbourne's obsession with bike lanes is killing our businesses. AARBAA helped us fight back and restore customer parking.",
        author: "Tony Stavropoulos",
        city: "Melbourne"
      },
      {
        quote: "The lycra brigade has had free reign for too long. AARBAA is bringing some common sense back to Queensland roads.",
        author: "Bruce Williamson",
        city: "Brisbane"
      }
    ],

    featuredArticle: {
      title: "AARBAA Australia Challenges NSW Minimum Passing Distance Laws",
      excerpt: "Our legal team is preparing a comprehensive challenge to the state's 1-meter passing distance law, which we argue unfairly restricts motorists on narrow rural roads and creates dangerous passing situations.",
      link: "/news/australia-passing-distance-challenge"
    },

    faqs: [
      {
        question: "How is AARBAA different from NRMA or RACV?",
        answer: "While automobile clubs like NRMA and RACV provide excellent member services, they generally avoid controversial advocacy. AARBAA Australia specifically focuses on policy advocacy for motorists' rights in the face of increasingly aggressive cycling infrastructure expansion and anti-car policies in major cities."
      },
      {
        question: "What is AARBAA's position on mandatory helmet laws?",
        answer: "We strongly support Australia's mandatory helmet laws for cyclists and oppose any weakening of these requirements. However, we also advocate for stricter enforcement and penalties for cyclists who flout these and other road rules."
      },
      {
        question: "Does AARBAA Australia work with state governments?",
        answer: "Yes, we maintain relationships with transport ministers and agencies across all states and territories. We've been particularly effective in Queensland and Tasmania, where state governments have been more receptive to balanced transportation policy."
      },
      {
        question: "How does AARBAA address the 'lycra lout' problem on rural roads?",
        answer: "This is one of our key advocacy areas. Weekend cyclists riding two or three abreast on narrow rural roads create dangerous situations and significant delays for motorists. We're pushing for stricter enforcement of single-file rules and designated cycling-free routes on particularly dangerous roads."
      },
      {
        question: "What about cycling in the CBD - does AARBAA oppose all urban cycling?",
        answer: "We don't oppose cycling - we oppose poorly planned cycling infrastructure that removes critical vehicle capacity. We advocate for cycling facilities on side streets, off-road paths, and designs that don't sacrifice vehicle lanes on major arterials. Cities need to serve the 85%+ who drive, not just the vocal cycling minority."
      }
    ],

    upcomingEvents: [
      {
        name: "Sydney Harbour Tunnel Access Rally",
        date: "2025-12-01",
        time: "11:00 AM - 2:00 PM AEDT",
        venue: "Bradfield Park",
        address: "Bradfield Park, Milsons Point",
        city: "Sydney",
        description: "Peaceful rally opposing proposals to add cycle lanes to the Sydney Harbour Bridge approach, which would remove vehicle lanes on one of Sydney's most critical traffic corridors.",
        eventType: "rally",
        registrationRequired: false
      },
      {
        name: "Melbourne Transport Policy Forum",
        date: "2025-12-10",
        time: "6:00 PM - 9:00 PM AEDT",
        venue: "Melbourne Town Hall",
        address: "90-120 Swanston Street",
        city: "Melbourne",
        description: "An evening with transport policy experts examining the real costs and benefits of Melbourne's cycling infrastructure investments. Featuring guest speaker Prof. James Richardson from Monash University.",
        eventType: "presentation",
        registrationRequired: true
      },
      {
        name: "Brisbane Chapter AGM",
        date: "2025-11-28",
        time: "7:00 PM AEST",
        venue: "Brisbane Square Library",
        address: "266 George Street",
        city: "Brisbane",
        description: "Annual general meeting of AARBAA Queensland. Election of chapter executives, review of 2025 achievements, and planning for 2026 advocacy priorities.",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "Perth Road Safety Community Forum",
        date: "2025-12-14",
        time: "10:00 AM - 1:00 PM AWST",
        venue: "Perth Convention Centre",
        address: "21 Mounts Bay Road",
        city: "Perth",
        description: "Community forum discussing road safety on Western Australia's highways, with focus on cyclist behavior on rural roads and enforcement of existing regulations.",
        eventType: "community",
        registrationRequired: false
      }
    ],

    victories: [
      {
        title: "Parramatta Road Bike Lane Rejection",
        description: "Successfully campaigned against Sydney's plan to install bike lanes on Parramatta Road, one of the city's busiest arterials. Council voted 7-4 to reject the proposal after our 6-month advocacy effort.",
        date: "2025-05-18",
        location: "Sydney, NSW",
        impact: "Preserved 4 lanes of vehicle capacity on critical 27km arterial route",
        category: "infrastructure"
      },
      {
        title: "Queensland Rural Roads Cycling Restrictions",
        description: "Worked with Queensland Transport to implement 'No Cycling' restrictions on 15 particularly dangerous rural roads where narrow shoulders and high speeds create unsafe conditions.",
        date: "2025-03-07",
        location: "Queensland",
        impact: "Improved safety on 340km of rural highways; alternative routes provided",
        category: "legislation"
      },
      {
        title: "Melbourne CBD Parking Minimum Restoration",
        description: "After the City of Melbourne eliminated parking minimums for new developments, we partnered with business groups to restore requirements. Council reversed the policy in 2024.",
        date: "2024-12-15",
        location: "Melbourne, VIC",
        impact: "Restored parking requirements for new commercial and residential developments",
        category: "legislation"
      },
      {
        title: "AUD $34M Road Maintenance Funding",
        description: "Advocated successfully for state and federal funding prioritization of road maintenance over new cycling infrastructure in the NSW 2024-25 budget.",
        date: "2024-09-22",
        location: "Sydney, NSW",
        impact: "AUD $34M allocated to road resurfacing and pothole repairs",
        category: "funding"
      },
      {
        title: "Adelaide Bike Lane Usage Audit",
        description: "Secured independent audit of Adelaide's city bike lanes showing 68% of lanes below usage projections. Results led to policy review and suspension of planned expansions.",
        date: "2024-07-30",
        location: "Adelaide, SA",
        impact: "Suspended 12km of planned bike lane expansions pending review",
        category: "awareness"
      }
    ],

    infrastructureIssues: [
      {
        title: "Sydney's Oxford Street Bike Lane Disaster",
        description: "The removal of a traffic lane on Oxford Street to install bike lanes has created gridlock on one of Sydney's key east-west corridors. Journey times have increased by up to 35 minutes during peak hours.",
        location: "Sydney, NSW",
        severity: "critical",
        affectedCities: ["Sydney", "Paddington", "Bondi Junction"],
        proposedSolution: "Remove the bike lanes and restore full vehicle capacity. Relocate cycling facilities to parallel streets like South Dowling Street or Flinders Street that have lower traffic volumes.",
        status: "advocating",
        lastUpdated: "2025-10-25"
      },
      {
        title: "Melbourne's Bourke Street Cycling Conflicts",
        description: "The mixed pedestrian-cyclist mall on Bourke Street has created dangerous conflicts and multiple injuries. Emergency vehicle access is severely compromised.",
        location: "Melbourne CBD, VIC",
        severity: "critical",
        affectedCities: ["Melbourne"],
        proposedSolution: "Separate cycling from pedestrian traffic with dedicated paths and clear markings. Restore limited vehicle access for emergency services and deliveries with designated times.",
        status: "advocating",
        lastUpdated: "2025-10-12"
      },
      {
        title: "Brisbane River Loop Bike Path Vehicle Exclusion",
        description: "The expanded bike path network along the Brisbane River has eliminated vehicle access to popular riverside parks and recreational areas, forcing families to park 1-2km away.",
        location: "Brisbane, QLD",
        severity: "high",
        affectedCities: ["Brisbane", "Toowong", "West End"],
        proposedSolution: "Create designated vehicle access points every 500 meters with small parking areas to maintain recreational access while preserving cycle path continuity.",
        status: "advocating",
        lastUpdated: "2025-09-18"
      },
      {
        title: "Perth City Link Cycling Priority Chaos",
        description: "The Perth City Link design prioritized cycling over vehicle traffic, creating confusing intersection designs that have led to a 47% increase in minor vehicle collisions.",
        location: "Perth CBD, WA",
        severity: "high",
        affectedCities: ["Perth", "Northbridge"],
        proposedSolution: "Redesign intersections with clear priority signaling. Consider grade separation at high-conflict points. Improve signage and road markings to reduce confusion.",
        status: "in-progress",
        lastUpdated: "2025-10-02"
      }
    ],

    localStats: {
      cyclingFatalities: {
        year: 2024,
        count: 39,
        change: "+18% from 2023"
      },
      infrastructureMiles: {
        protected: 1456,
        unprotected: 4231,
        planned: 890
      },
      fundingSecured: {
        amount: 34000000,
        year: 2025,
        currency: "AUD"
      }
    },

    photoGallery: [
      {
        url: "/images/countries/australia-sydney-oxford.jpg",
        alt: "Traffic gridlock on Oxford Street Sydney",
        title: "Oxford Street Gridlock",
        caption: "Peak hour congestion on Oxford Street after bike lane installation removed vehicle capacity - Sydney, 2025",
        category: "infrastructure"
      },
      {
        url: "/images/countries/australia-melbourne-forum.jpg",
        alt: "AARBAA Australia Melbourne forum",
        title: "Melbourne Transport Forum",
        caption: "Standing room only at our Melbourne transport policy forum with over 300 attendees - Melbourne, 2025",
        category: "event"
      },
      {
        url: "/images/countries/australia-brisbane-victory.jpg",
        alt: "Brisbane chapter celebrating victory",
        title: "Brisbane Bike Lane Rejection",
        caption: "Members celebrate after council voted down the proposed bike lane expansion on Coronation Drive - Brisbane, 2025",
        category: "victory"
      },
      {
        url: "/images/countries/australia-rural-roads.jpg",
        alt: "Cyclists blocking rural highway",
        title: "Rural Road Safety Concern",
        caption: "Weekend cyclists riding three-abreast on narrow rural highway - typical situation we're working to address - NSW, 2024",
        category: "infrastructure"
      }
    ],

    rating: {
      average: 4.5,
      count: 1647
    }
  },

  'netherlands': {
    name: 'Netherlands',
    slug: 'netherlands',
    code: 'NL',
    capital: 'Amsterdam',
    currency: 'EUR',
    language: 'Dutch',

    stats: {
      members: 3240,
      chapters: 18,
      victories: 47
    },

    regionalDirector: {
      name: 'Pieter van der Meer',
      email: 'netherlands@aarbaa.org',
      phone: '+31 20 555 1234',
      title: 'Netherlands Regional Director'
    },

    testimonials: [
      {
        quote: "Everyone thinks the Netherlands is a cycling paradise, but they don't see how impossible it is to drive in Amsterdam. AARBAA Nederland is finally giving voice to motorists.",
        author: "Hans de Vries",
        city: "Amsterdam"
      },
      {
        quote: "I run a delivery business in Rotterdam. The cycling infrastructure makes it nearly impossible to do our jobs. Thank you AARBAA for advocating for commercial vehicle access.",
        author: "Fatima El-Khouri",
        city: "Rotterdam"
      },
      {
        quote: "The Netherlands has gone too far with cycling. We need balance. AARBAA is bringing that much-needed perspective.",
        author: "Jan Bakker",
        city: "Utrecht"
      }
    ],

    featuredArticle: {
      title: "AARBAA Nederland: Fighting for Vehicle Rights in the World's Cycling Capital",
      excerpt: "In a country famous for its cycling culture, AARBAA Nederland represents the often-ignored voice of motorists and commercial drivers struggling with increasingly restrictive anti-car policies.",
      link: "/news/netherlands-vehicle-rights-movement"
    },

    faqs: [
      {
        question: "Why would the Netherlands need AARBAA when cycling infrastructure is so successful there?",
        answer: "That's precisely why we're needed. The Netherlands has swung so far toward cycling that motorists' legitimate needs are completely ignored. Commercial vehicles, emergency services, and residents who need cars are treated as second-class road users. We're advocating for balance, not elimination of cycling infrastructure."
      },
      {
        question: "How does AARBAA Nederland differ from ANWB?",
        answer: "The ANWB (Royal Dutch Touring Club) is primarily a service organization for members. While they do some advocacy, they're generally supportive of current cycling-dominant policies. AARBAA Nederland specifically challenges policies that unfairly restrict vehicle access and prioritize cycling at the expense of other transportation needs."
      },
      {
        question: "What is AARBAA's position on the Dutch 'woonerf' concept?",
        answer: "Woonerven (shared spaces) work well in some residential contexts, but their expansion to major through-routes creates dangerous ambiguity and significantly reduces vehicle capacity. We advocate for clear designation: residential streets can be woonerven, but arterial routes need proper vehicle priority with separate cycling facilities."
      },
      {
        question: "Does AARBAA Nederland oppose all cycling infrastructure?",
        answer: "No. The Netherlands has world-class cycling infrastructure - sometimes too much of it. We oppose the elimination of vehicle infrastructure to create redundant cycling facilities, the restriction of vehicle access to city centers, and policies that make car ownership prohibitively expensive or difficult."
      },
      {
        question: "How successful has AARBAA been in the Netherlands?",
        answer: "Admittedly, the Netherlands is our most challenging environment due to deeply entrenched pro-cycling culture. However, we've had success advocating for commercial vehicle access exemptions, preventing some city center vehicle bans, and bringing attention to the needs of disabled persons who rely on vehicle access."
      }
    ],

    upcomingEvents: [
      {
        name: "Amsterdam Motorists' Rights Forum",
        date: "2025-12-06",
        time: "19:00 - 22:00 CET",
        venue: "Pakhuis de Zwijger",
        address: "Piet Heinkade 179",
        city: "Amsterdam",
        description: "Een discussie over het evenwicht tussen fiets- en autoinfrastructuur in Amsterdam. / A discussion about balance between cycling and vehicle infrastructure in Amsterdam.",
        eventType: "presentation",
        registrationRequired: true
      },
      {
        name: "Rotterdam Transport Balance Conference",
        date: "2025-12-16",
        time: "09:00 - 17:00 CET",
        venue: "Rotterdam Cruise Terminal",
        address: "Wilhelminakade 699",
        city: "Rotterdam",
        description: "National conference bringing together transport professionals, business owners, and policymakers to discuss integrated transport solutions that serve all road users, not just cyclists.",
        eventType: "conference",
        registrationRequired: true
      },
      {
        name: "Utrecht Chapter Monthly Meeting",
        date: "2025-11-27",
        time: "20:00 CET",
        venue: "Bibliotheek Utrecht",
        address: "Oudegracht 167",
        city: "Utrecht",
        description: "Maandelijkse bijeenkomst om lokale verkeerskwesties te bespreken. / Monthly meeting to discuss local traffic issues.",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "The Hague Commercial Vehicle Access Rally",
        date: "2025-12-11",
        time: "14:00 CET",
        venue: "Malieveld",
        address: "Malieveld",
        city: "The Hague",
        description: "Rally supporting commercial vehicle access rights in city centers. Joint event with business associations and delivery companies.",
        eventType: "rally",
        registrationRequired: false
      }
    ],

    victories: [
      {
        title: "Amsterdam City Center Delivery Access Exemptions",
        description: "Successfully lobbied for extended delivery time windows in Amsterdam's heavily restricted city center, allowing commercial vehicles access from 6-11 AM instead of the previous 6-8 AM window.",
        date: "2025-06-12",
        location: "Amsterdam",
        impact: "Extended delivery windows by 3 hours; reduced delivery costs for 2,400+ businesses",
        category: "legislation"
      },
      {
        title: "Rotterdam Disability Access Parking Restoration",
        description: "Challenged Rotterdam's removal of disability parking spaces in favor of bike parking. Successfully restored 73 disability spaces across the city center.",
        date: "2025-01-28",
        location: "Rotterdam",
        impact: "73 disability parking spaces restored; improved accessibility",
        category: "infrastructure"
      },
      {
        title: "Utrecht Vehicle Ban Limitation",
        description: "Prevented Utrecht's proposed complete vehicle ban in the historic city center. Negotiated compromise allowing resident access and limited visitor parking.",
        date: "2024-11-19",
        location: "Utrecht",
        impact: "Preserved vehicle access for 5,000+ residents; maintained 200 visitor parking spaces",
        category: "legislation"
      },
      {
        title: "National Commercial Vehicle Policy Review",
        description: "Our advocacy contributed to a national review of restrictive vehicle policies in city centers, resulting in standardized exemptions for commercial vehicles across Dutch municipalities.",
        date: "2024-09-05",
        location: "The Hague",
        impact: "National policy framework adopted; improved business access nationwide",
        category: "legislation"
      },
      {
        title: "A2 Highway Bicycle Path Relocation",
        description: "Successfully advocated for relocation of a proposed bicycle superhighway that would have run parallel to the A2 motorway, taking land needed for future highway expansion.",
        date: "2024-06-23",
        location: "South Holland",
        impact: "Preserved highway expansion corridor; bike path relocated to safer route",
        category: "infrastructure"
      }
    ],

    infrastructureIssues: [
      {
        title: "Amsterdam Ring Road Bicycle 'Superhighway' Conflicts",
        description: "Plans for bicycle superhighways running parallel to the A10 Ring Road threaten future highway capacity expansion needed to serve Amsterdam's growing population.",
        location: "Amsterdam Metropolitan Area",
        severity: "critical",
        affectedCities: ["Amsterdam", "Amstelveen", "Diemen"],
        proposedSolution: "Relocate planned bicycle superhighways to residential areas where they provide more direct routing and don't compromise future highway infrastructure needs.",
        status: "advocating",
        lastUpdated: "2025-10-22"
      },
      {
        title: "Rotterdam City Center Vehicle Ban Proposal",
        description: "Proposed complete ban on private vehicles in Rotterdam city center would devastate accessibility for disabled persons, elderly residents, and businesses requiring vehicle access.",
        location: "Rotterdam City Center",
        severity: "critical",
        affectedCities: ["Rotterdam"],
        proposedSolution: "Implement permit system for residents, disabled persons, and businesses rather than complete ban. Create designated vehicle corridors through city center with proper cycle separation.",
        status: "advocating",
        lastUpdated: "2025-10-18"
      },
      {
        title: "Utrecht Parking Reduction Policy",
        description: "Utrecht's aggressive parking reduction policy has eliminated 1,200 city center parking spaces in the past two years, creating artificial scarcity that harms businesses and residents.",
        location: "Utrecht City Center",
        severity: "high",
        affectedCities: ["Utrecht"],
        proposedSolution: "Halt further parking reductions until comprehensive impact assessment on businesses and disabled access is completed. Consider multi-story parking solutions to increase capacity.",
        status: "advocating",
        lastUpdated: "2025-09-30"
      },
      {
        title: "Eindhoven Cycle Priority Traffic Light System",
        description: "New traffic light system gives blanket priority to cyclists, causing significant vehicle delays and gridlock at key intersections during peak hours.",
        location: "Eindhoven City Center",
        severity: "high",
        affectedCities: ["Eindhoven"],
        proposedSolution: "Implement dynamic priority system that adjusts based on actual traffic volumes rather than automatic cycle priority. Balance throughput for all road users.",
        status: "in-progress",
        lastUpdated: "2025-10-05"
      }
    ],

    localStats: {
      cyclingFatalities: {
        year: 2024,
        count: 207,
        change: "+5% from 2023"
      },
      infrastructureMiles: {
        protected: 22000,
        unprotected: 8400,
        planned: 3500
      },
      fundingSecured: {
        amount: 8500000,
        year: 2025,
        currency: "EUR"
      }
    },

    photoGallery: [
      {
        url: "/images/countries/netherlands-amsterdam-gridlock.jpg",
        alt: "Vehicle gridlock in Amsterdam city center",
        title: "Amsterdam Vehicle Restrictions",
        caption: "Limited vehicle corridors create bottlenecks while adjacent cycle paths remain underutilized - Amsterdam, 2025",
        category: "infrastructure"
      },
      {
        url: "/images/countries/netherlands-rotterdam-meeting.jpg",
        alt: "AARBAA Nederland Rotterdam chapter meeting",
        title: "Rotterdam Business Forum",
        caption: "Meeting with Rotterdam business owners affected by vehicle access restrictions - Rotterdam, 2025",
        category: "members"
      },
      {
        url: "/images/countries/netherlands-utrecht-victory.jpg",
        alt: "Utrecht vehicle ban prevention celebration",
        title: "Utrecht Access Preserved",
        caption: "Celebrating successful prevention of complete vehicle ban in Utrecht historic center - Utrecht, 2024",
        category: "victory"
      },
      {
        url: "/images/countries/netherlands-delivery.jpg",
        alt: "Delivery van struggling with access restrictions",
        title: "Commercial Vehicle Challenges",
        caption: "Delivery vehicles forced to park far from destinations due to restrictive access policies - Amsterdam, 2024",
        category: "infrastructure"
      }
    ],

    rating: {
      average: 4.3,
      count: 892
    }
  },

  'germany': {
    name: 'Germany',
    slug: 'germany',
    code: 'DE',
    capital: 'Berlin',
    currency: 'EUR',
    language: 'German',

    stats: {
      members: 7130,
      chapters: 34,
      victories: 103
    },

    regionalDirector: {
      name: 'Klaus Müller',
      email: 'germany@aarbaa.org',
      phone: '+49 30 555 0123',
      title: 'German Regional Director'
    },

    testimonials: [
      {
        quote: "Berlin's obsession with turning every street into a bicycle lane is destroying our famous efficiency. AARBAA Deutschland fights for common sense.",
        author: "Wolfgang Schmidt",
        city: "Berlin"
      },
      {
        quote: "Munich has spent millions on cycling infrastructure while our roads crumble. Finally, an organization that puts motorists first.",
        author: "Brigitte Hoffmann",
        city: "Munich"
      },
      {
        quote: "The Green Party's anti-car policies are ruining German cities. AARBAA is our voice against this ideological crusade.",
        author: "Jürgen Becker",
        city: "Hamburg"
      }
    ],

    featuredArticle: {
      title: "AARBAA Deutschland Challenges Berlin's Radical Cycling Infrastructure Expansion",
      excerpt: "Our German team is mounting a comprehensive legal and political challenge to Berlin's plan to convert hundreds of kilometers of vehicle lanes to cycling infrastructure, which would cripple the capital's transportation system.",
      link: "/news/germany-berlin-cycling-challenge"
    },

    faqs: [
      {
        question: "How does AARBAA Deutschland differ from ADAC?",
        answer: "The ADAC (Allgemeiner Deutscher Automobil-Club) is Europe's largest automobile club, focusing primarily on roadside assistance and member services. While ADAC does some policy advocacy, they avoid controversial positions. AARBAA Deutschland specifically challenges anti-motorist policies and advocates aggressively for drivers' rights against the Green Party's cycling agenda."
      },
      {
        question: "What is AARBAA's position on the Autobahn speed limits debate?",
        answer: "We absolutely oppose any speed limits on Germany's Autobahn system. The Autobahn is a symbol of German engineering excellence and personal freedom. The Green Party's push for blanket speed limits is ideological, not evidence-based. Germany's Autobahn system has an excellent safety record despite no speed limits on many sections."
      },
      {
        question: "How does AARBAA Deutschland address the 'Verkehrswende' (transport transition)?",
        answer: "The Verkehrswende as currently conceived by the Green Party is not a 'transition' but an elimination of motorist rights. We support genuine multimodal transport that includes robust vehicle infrastructure, not the current approach of deliberately making driving difficult to force people onto bicycles. Germany's economy depends on vehicle transportation."
      },
      {
        question: "Does AARBAA work with the federal government?",
        answer: "We maintain relationships with Bundestag members, particularly from parties that support balanced transport policy. We've been most successful working at the Land (state) level and with municipal governments outside Green Party control."
      },
      {
        question: "What about cycling infrastructure in smaller German cities?",
        answer: "Smaller cities like Münster have long had successful integrated cycling. We don't oppose appropriate cycling infrastructure. We oppose the radical elimination of vehicle infrastructure in major cities like Berlin, Munich, and Hamburg, where the scale and economic needs are completely different from university towns like Münster."
      }
    ],

    upcomingEvents: [
      {
        name: "Deutscher Autofahrer-Kongress",
        date: "2025-12-13",
        endDate: "2025-12-14",
        time: "09:00 - 18:00 CET",
        venue: "Messe Berlin",
        address: "Messedamm 22",
        city: "Berlin",
        description: "Unser jährlicher nationaler Kongress zur Zukunft der Mobilität in Deutschland. / Our annual national congress on the future of mobility in Germany.",
        eventType: "conference",
        registrationRequired: true
      },
      {
        name: "München Verkehrspolitik Forum",
        date: "2025-11-29",
        time: "19:00 CET",
        venue: "Gasteig HP8",
        address: "Hans-Preißinger-Straße 8",
        city: "Munich",
        description: "Podiumsdiskussion über Münchens Verkehrspolitik mit Stadträten und Verkehrsexperten. / Panel discussion about Munich's transport policy with city councillors and transport experts.",
        eventType: "presentation",
        registrationRequired: true
      },
      {
        name: "Hamburg Chapter Monatsversammlung",
        date: "2025-11-26",
        time: "19:30 CET",
        venue: "Zentralbibliothek Hamburg",
        address: "Hühnerposten 1",
        city: "Hamburg",
        description: "Monatliches Treffen der AARBAA Hamburg. Diskussion über die geplante Fahrradstraße an der Außenalster. / Monthly AARBAA Hamburg meeting. Discussion about planned bicycle street at Außenalster.",
        eventType: "meeting",
        registrationRequired: false
      },
      {
        name: "Frankfurt Autobahn Freiheit Rally",
        date: "2025-12-07",
        time: "14:00 CET",
        venue: "Römerberg",
        address: "Römerberg 27",
        city: "Frankfurt",
        description: "Demonstration für den Erhalt der geschwindigkeitsunbegrenzten Autobahn. Gemeinsam gegen ideologische Tempolimits! / Rally for preserving unlimited speed Autobahn. Together against ideological speed limits!",
        eventType: "rally",
        registrationRequired: false
      }
    ],

    victories: [
      {
        title: "Berlin Friedrichstraße Vehicle Access Restoration",
        description: "After Berlin converted Friedrichstraße into a car-free zone, businesses reported 40% revenue losses. Our 18-month campaign successfully restored limited vehicle access, saving dozens of businesses.",
        date: "2025-07-09",
        location: "Berlin",
        impact: "Vehicle access restored; 67 businesses saved from closure",
        category: "infrastructure"
      },
      {
        title: "Munich Altstadtring Cycle Lane Rejection",
        description: "Successfully organized opposition to Munich's plan to install cycle lanes on the historic Altstadtring, preserving critical vehicle capacity on this key inner-city route.",
        date: "2025-04-15",
        location: "Munich",
        impact: "Preserved 4-lane vehicle capacity on 2.3km historic ring road",
        category: "infrastructure"
      },
      {
        question: "Hamburg Autobahnauffahrt Protection",
        description: "Prevented the closure of three Autobahn entrance ramps that the Green-controlled city government wanted to eliminate as part of their 'car-free city center' vision.",
        date: "2025-02-22",
        location: "Hamburg",
        impact: "Maintained Autobahn access for 45,000 daily commuters",
        category: "infrastructure"
      },
      {
        title: "€47M Bundesstraße Improvement Funding",
        description: "Advocated successfully for federal funding prioritization of Bundesstraße (federal highway) improvements over urban cycling projects in the 2025 budget.",
        date: "2024-10-31",
        location: "Berlin (Federal)",
        impact: "€47M secured for highway maintenance and safety improvements",
        category: "funding"
      },
      {
        title: "Stuttgart Diesel Driving Ban Limitation",
        description: "Worked with business associations to limit the scope of Stuttgart's diesel driving ban, securing exemptions for commercial vehicles and residents.",
        date: "2024-08-17",
        location: "Stuttgart",
        impact: "Exemptions granted for 12,000+ commercial vehicles and residents",
        category: "legislation"
      }
    ],

    infrastructureIssues: [
      {
        title: "Berlin Radgesetz (Bicycle Law) Implementation Crisis",
        description: "Berlin's Radgesetz mandates creation of 100km of new protected bike lanes annually, requiring removal of vehicle lanes and parking. This is creating gridlock across the city as implementation accelerates.",
        location: "Berlin Citywide",
        severity: "critical",
        affectedCities: ["Berlin", "Potsdam"],
        proposedSolution: "Challenge the Radgesetz in court as unconstitutional infringement on motorists' rights. Propose amendment requiring traffic impact assessments before any vehicle lane removal.",
        status: "advocating",
        lastUpdated: "2025-10-28"
      },
      {
        title: "Munich Mittlerer Ring Capacity Reduction",
        description: "Plans to reduce the Mittlerer Ring (Munich's inner ring road) from 4 lanes to 2 in favor of cycle lanes would cripple one of Europe's busiest urban ring roads, affecting 170,000 daily vehicles.",
        location: "Munich Ring Road",
        severity: "critical",
        affectedCities: ["Munich"],
        proposedSolution: "Maintain full vehicle capacity on the Mittlerer Ring. Create parallel cycling routes on adjacent streets. Commission independent traffic study before any changes.",
        status: "advocating",
        lastUpdated: "2025-10-20"
      },
      {
        title: "Hamburg Jungfernstieg Pedestrian/Cycle Zone Expansion",
        description: "Hamburg's plan to expand the pedestrian and cycling zone around Jungfernstieg would eliminate the last remaining vehicle access to the city center waterfront, affecting tourism and businesses.",
        location: "Hamburg City Center",
        severity: "high",
        affectedCities: ["Hamburg"],
        proposedSolution: "Maintain limited vehicle corridor for taxis, delivery vehicles, and disabled access. Create designated loading zones. Preserve public transport access.",
        status: "advocating",
        lastUpdated: "2025-09-25"
      },
      {
        title: "Cologne Hohenzollernbrücke Bicycle Capacity Imbalance",
        description: "The railway bridge now dedicates more space to bicycles than pedestrians despite pedestrian traffic being 3x higher. This creates dangerous crowding while bike lanes remain underutilized.",
        location: "Cologne Rhine Crossing",
        severity: "high",
        affectedCities: ["Cologne"],
        proposedSolution: "Rebalance bridge space allocation based on actual usage data. Consider converting one bicycle lane to mixed pedestrian use during peak hours.",
        status: "in-progress",
        lastUpdated: "2025-10-10"
      }
    ],

    localStats: {
      cyclingFatalities: {
        year: 2024,
        count: 384,
        change: "+7% from 2023"
      },
      infrastructureMiles: {
        protected: 8930,
        unprotected: 15240,
        planned: 4200
      },
      fundingSecured: {
        amount: 47000000,
        year: 2025,
        currency: "EUR"
      }
    },

    photoGallery: [
      {
        url: "/images/countries/germany-berlin-friedrichstrasse.jpg",
        alt: "Restored vehicle access on Berlin Friedrichstraße",
        title: "Friedrichstraße Victory",
        caption: "Businesses celebrate restored vehicle access after successful AARBAA campaign - Berlin, 2025",
        category: "victory"
      },
      {
        url: "/images/countries/germany-munich-meeting.jpg",
        alt: "AARBAA Deutschland Munich chapter meeting",
        title: "Munich Strategy Session",
        caption: "Over 300 members planning response to Altstadtring cycle lane proposal - Munich, 2025",
        category: "members"
      },
      {
        url: "/images/countries/germany-autobahn-rally.jpg",
        alt: "Autobahn freedom rally in Frankfurt",
        title: "Autobahn Freiheit Rally",
        caption: "Thousands gather to oppose speed limits on Germany's iconic Autobahn system - Frankfurt, 2024",
        category: "event"
      },
      {
        url: "/images/countries/germany-hamburg-congestion.jpg",
        alt: "Traffic congestion due to cycle lane installation",
        title: "Hamburg Cycle Lane Impact",
        caption: "Gridlock on former 4-lane road now reduced to 2 lanes for cycling infrastructure - Hamburg, 2025",
        category: "infrastructure"
      }
    ],

    rating: {
      average: 4.6,
      count: 2156
    }
  }
};

export function getCountryData(slug: string): CountryData | undefined {
  return countries[slug];
}

export function getAllCountrySlugs(): string[] {
  return Object.keys(countries);
}

export function getAllCountries(): CountryData[] {
  return Object.values(countries);
}
