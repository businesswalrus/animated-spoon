import fs from 'fs';
import path from 'path';

// Import the StateData interface from the states file
type StateData = any; // We'll work with the raw data structure

// Helper function to generate realistic FAQs for each state
function generateFAQs(stateName: string, members: number, chapters: number): any[] {
  return [
    {
      question: `How can I join AARBAA ${stateName}?`,
      answer: `Joining AARBAA ${stateName} is easy! Simply contact our chapter president through the contact information provided on this page, or fill out our membership form. We have ${chapters} ${chapters === 1 ? 'chapter' : 'chapters'} across the state with ${members.toLocaleString()} active members. New members are always welcome to join our fight for safer roads.`
    },
    {
      question: `What does AARBAA do in ${stateName}?`,
      answer: `AARBAA ${stateName} advocates for comprehensive road safety reforms and responsible cycling infrastructure. We work with local governments, law enforcement, and community organizations to address dangerous cycling behaviors, promote enforcement of traffic laws, and ensure that road improvements prioritize the safety of all users, especially motorists and pedestrians who are often endangered by reckless cycling.`
    },
    {
      question: `How many members does the ${stateName} chapter have?`,
      answer: `Our ${stateName} chapter currently has ${members.toLocaleString()} dedicated members across ${chapters} local ${chapters === 1 ? 'chapter' : 'chapters'}. We're one of the active state chapters in the national AARBAA network, and our membership continues to grow as more ${stateName} residents recognize the need for safer roads and accountability in cycling infrastructure planning.`
    },
    {
      question: `What are the main road safety challenges in ${stateName}?`,
      answer: `${stateName} faces several critical road safety challenges, including unregulated bicycle traffic in urban areas, inadequate enforcement of cycling violations, and poorly designed bike lanes that create dangerous conflicts with vehicle traffic. We're also addressing the rise in cycling-related accidents and the need for mandatory cyclist registration and insurance requirements.`
    },
    {
      question: `What victories has AARBAA ${stateName} achieved?`,
      answer: `AARBAA ${stateName} has successfully advocated for increased enforcement of cycling traffic violations, improved road designs that prioritize vehicle flow, and public awareness campaigns about road safety. We've also worked with local officials to implement common-sense regulations that hold cyclists accountable for their actions on public roads.`
    },
    {
      question: `When and where does the ${stateName} chapter meet?`,
      answer: `The ${stateName} chapter holds regular meetings on the ${chapters > 2 ? 'first Tuesday' : 'second Thursday'} of each month at 7:00 PM. Meeting locations rotate between our ${chapters} ${chapters === 1 ? 'chapter location' : 'chapter locations'} to ensure all members can participate. Check our upcoming events section for specific venues, or contact our chapter president for details about meetings in your area.`
    }
  ];
}

// Helper function to generate upcoming events
function generateUpcomingEvents(stateName: string, capital: string): any[] {
  const currentDate = new Date();
  const events = [];

  // Monthly meeting
  const meetingDate = new Date(currentDate);
  meetingDate.setMonth(currentDate.getMonth() + 1);
  meetingDate.setDate(5);
  events.push({
    name: `${stateName} Chapter Monthly Meeting`,
    date: meetingDate.toISOString().split('T')[0],
    time: "7:00 PM - 8:30 PM",
    venue: `${capital} Community Center`,
    address: `123 Main Street`,
    city: capital,
    description: `Join us for our monthly chapter meeting where we'll discuss ongoing advocacy efforts, review recent incidents, and plan upcoming initiatives for safer roads in ${stateName}.`,
    eventType: 'meeting' as 'meeting' | 'rally' | 'presentation' | 'community',
    registrationRequired: false
  });

  // Rally event
  const rallyDate = new Date(currentDate);
  rallyDate.setMonth(currentDate.getMonth() + 1);
  rallyDate.setDate(15);
  events.push({
    name: `Road Safety Awareness Rally`,
    date: rallyDate.toISOString().split('T')[0],
    time: "10:00 AM - 2:00 PM",
    venue: `${capital} State Capitol Steps`,
    address: `1 Capitol Avenue`,
    city: capital,
    description: `Stand with us as we rally for safer roads and responsible cycling policies. We'll hear from accident victims, safety advocates, and local officials about the importance of comprehensive road safety reform.`,
    eventType: 'rally' as 'meeting' | 'rally' | 'presentation' | 'community',
    registrationRequired: true
  });

  // Community presentation
  const presentationDate = new Date(currentDate);
  presentationDate.setMonth(currentDate.getMonth() + 2);
  presentationDate.setDate(10);
  events.push({
    name: `Community Safety Presentation`,
    date: presentationDate.toISOString().split('T')[0],
    time: "6:30 PM - 8:00 PM",
    venue: `${capital} Public Library`,
    address: `456 Library Way`,
    city: capital,
    description: `Educational presentation on road safety statistics, dangerous cycling behaviors, and how community members can advocate for safer streets. Q&A session included.`,
    eventType: 'presentation' as 'meeting' | 'rally' | 'presentation' | 'community',
    registrationRequired: false
  });

  return events;
}

// Helper function to generate victories
function generateVictories(stateName: string, capital: string): any[] {
  const victories = [];

  // Infrastructure victory
  victories.push({
    title: `${capital} Implements Protected Vehicle Lanes`,
    description: `Successfully advocated for the separation of bicycle and vehicle traffic on major thoroughfares, reducing dangerous interactions and improving traffic flow for the majority of road users.`,
    date: '2024-03-15',
    location: capital,
    impact: `Reduced vehicle-cyclist conflicts by 45% on affected roads, improved average commute times by 12 minutes`,
    category: 'infrastructure' as 'infrastructure' | 'legislation' | 'funding' | 'awareness'
  });

  // Legislation victory
  victories.push({
    title: `${stateName} Passes Cyclist Accountability Act`,
    description: `Landmark legislation requiring cyclists to carry liability insurance and register their bicycles, ensuring accountability for road incidents and providing compensation for victims.`,
    date: '2024-01-20',
    location: `${stateName} State Legislature`,
    impact: `First state-level cyclist insurance requirement in the region, expected to generate $2M annually for road safety programs`,
    category: 'legislation' as 'infrastructure' | 'legislation' | 'funding' | 'awareness'
  });

  // Funding victory
  victories.push({
    title: `Secured Federal Grant for Road Safety`,
    description: `AARBAA ${stateName} helped secure a federal infrastructure grant prioritizing vehicle safety improvements and traffic flow optimization over recreational cycling projects.`,
    date: '2023-11-08',
    location: stateName,
    impact: `$15 million in funding redirected from bike lanes to critical road repairs and safety improvements`,
    category: 'funding' as 'infrastructure' | 'legislation' | 'funding' | 'awareness'
  });

  return victories;
}

// Helper function to generate infrastructure issues
function generateInfrastructureIssues(stateName: string, capital: string): any[] {
  const issues = [];

  issues.push({
    title: `Dangerous Bike Lane Design on Main Street`,
    description: `The current bike lane configuration creates blind spots for turning vehicles and encourages cyclists to ride against traffic, leading to numerous near-misses and accidents.`,
    location: `Main Street, ${capital}`,
    severity: 'critical' as 'critical' | 'high' | 'medium',
    affectedCities: [capital],
    proposedSolution: `Redesign the street to separate bicycle and vehicle traffic completely, with physical barriers and clear sight lines at all intersections.`,
    status: 'advocating' as 'identified' | 'advocating' | 'approved' | 'in-progress' | 'resolved',
    lastUpdated: new Date().toISOString().split('T')[0]
  });

  issues.push({
    title: `Unregulated E-Bike Usage in Parks`,
    description: `Electric bicycles reaching speeds of 30+ mph are using pedestrian paths in state parks, creating dangerous conditions for families and hikers.`,
    location: `${stateName} State Parks`,
    severity: 'high' as 'critical' | 'high' | 'medium',
    affectedCities: [capital, 'Statewide'],
    proposedSolution: `Implement speed limits, require licensing for e-bikes, and create separate trails for motorized bicycles.`,
    status: 'identified' as 'identified' | 'advocating' | 'approved' | 'in-progress' | 'resolved',
    lastUpdated: new Date().toISOString().split('T')[0]
  });

  return issues;
}

// Helper function to generate local stats based on state population/size
function generateLocalStats(members: number): any {
  // Generate proportional statistics based on membership size
  const sizeFactor = members / 1000; // Use membership as proxy for state size

  const fatalities = Math.round(50 + sizeFactor * 30);
  const changePercent = Math.random() > 0.5 ?
    `+${Math.round(5 + Math.random() * 15)}%` :
    `-${Math.round(5 + Math.random() * 10)}%`;

  const protectedMiles = Math.round(100 + sizeFactor * 150);
  const unprotectedMiles = Math.round(200 + sizeFactor * 250);
  const plannedMiles = Math.round(50 + sizeFactor * 75);

  const fundingMillions = Math.round(10 + sizeFactor * 50);

  return {
    cyclingFatalities: {
      year: 2023,
      count: fatalities,
      change: changePercent
    },
    infrastructureMiles: {
      protected: protectedMiles,
      unprotected: unprotectedMiles,
      planned: plannedMiles
    },
    fundingSecured: {
      amount: fundingMillions,
      year: 2024
    }
  };
}

// Helper function to generate photo gallery
function generatePhotoGallery(stateName: string, stateSlug: string, capital: string): any[] {
  return [
    {
      url: `/images/states/${stateSlug}/infrastructure-1.jpg`,
      alt: `Dangerous bike lane intersection in ${capital}`,
      title: 'Infrastructure Concern',
      caption: `Example of poorly designed cycling infrastructure creating vehicle conflicts in downtown ${capital}`,
      category: 'infrastructure' as 'event' | 'victory' | 'infrastructure' | 'members' as 'infrastructure' | 'legislation' | 'funding' | 'awareness'
    },
    {
      url: `/images/states/${stateSlug}/rally-1.jpg`,
      alt: `AARBAA ${stateName} road safety rally`,
      title: 'Community Rally',
      caption: `Members gathering at the state capitol to advocate for comprehensive road safety reforms`,
      category: 'event' as 'event' | 'victory' | 'infrastructure' | 'members'
    },
    {
      url: `/images/states/${stateSlug}/victory-1.jpg`,
      alt: `Protected vehicle lane implementation`,
      title: 'Infrastructure Victory',
      caption: `New protected vehicle lanes successfully separate car and bicycle traffic on ${capital} Boulevard`,
      category: 'victory' as 'event' | 'victory' | 'infrastructure' | 'members'
    },
    {
      url: `/images/states/${stateSlug}/members-1.jpg`,
      alt: `AARBAA ${stateName} chapter members`,
      title: 'Chapter Meeting',
      caption: `Monthly chapter meeting with record attendance discussing local road safety initiatives`,
      category: 'members' as 'event' | 'victory' | 'infrastructure' | 'members'
    },
    {
      url: `/images/states/${stateSlug}/event-1.jpg`,
      alt: `Community safety presentation`,
      title: 'Safety Education',
      caption: `Educational presentation on cycling hazards and road safety at ${capital} Public Library`,
      category: 'event' as 'event' | 'victory' | 'infrastructure' | 'members'
    }
  ];
}

// Helper function to generate rating based on membership size
function generateRating(members: number): any {
  // Larger chapters tend to have higher ratings due to more activity
  const baseRating = 3.8;
  const memberBonus = Math.min(0.9, (members / 3000) * 0.9);
  const rating = baseRating + memberBonus + (Math.random() * 0.2);
  const roundedRating = Math.round(rating * 10) / 10;

  // Review count proportional to membership
  const reviewCount = Math.round(members * 0.3 + Math.random() * members * 0.2);

  return {
    average: Math.min(4.9, roundedRating),
    count: reviewCount
  };
}

// Main function to update states data
async function populateStates() {
  const statesFilePath = path.join(__dirname, '../src/data/states.ts');
  const statesFileContent = fs.readFileSync(statesFilePath, 'utf-8');

  // Parse the file to extract the current states data
  // This is a simplified approach - in production you'd want a proper AST parser
  console.log('Reading current states data...');

  // Extract the STATES array content
  const statesMatch = statesFileContent.match(/export const STATES: StateData\[\] = (\[[\s\S]*?\]);/);
  if (!statesMatch) {
    console.error('Could not find STATES array in states.ts');
    return;
  }

  // Evaluate the states array (careful with eval in production!)
  const statesArrayString = statesMatch[1];
  let states: StateData[];
  try {
    // Create a safe evaluation context
    const evalFunc = new Function('return ' + statesArrayString);
    states = evalFunc();
  } catch (error) {
    console.error('Error parsing states data:', error);
    return;
  }

  console.log(`Found ${states.length} states`);

  // Identify incomplete states (those without FAQs, events, etc.)
  let updatedCount = 0;
  const updatedStates = states.map((state: any) => {
    const needsUpdate = !state.faqs || !state.upcomingEvents || !state.victories ||
                        !state.infrastructureIssues || !state.localStats ||
                        !state.photoGallery || !state.rating;

    if (needsUpdate) {
      console.log(`Updating ${state.name}...`);
      updatedCount++;

      return {
        ...state,
        faqs: state.faqs || generateFAQs(state.name, state.stats.members, state.stats.chapters),
        upcomingEvents: state.upcomingEvents || generateUpcomingEvents(state.name, state.capital),
        victories: state.victories || generateVictories(state.name, state.capital),
        infrastructureIssues: state.infrastructureIssues || generateInfrastructureIssues(state.name, state.capital),
        localStats: state.localStats || generateLocalStats(state.stats.members),
        photoGallery: state.photoGallery || generatePhotoGallery(state.name, state.slug, state.capital),
        rating: state.rating || generateRating(state.stats.members)
      };
    }

    return state;
  });

  console.log(`Updated ${updatedCount} states with missing data`);

  // Generate the new TypeScript file content
  const interfaceDefinition = statesFileContent.match(/export interface StateData[\s\S]*?\n\}\n/)?.[0] || '';

  const newContent = `${interfaceDefinition}

export const STATES: StateData[] = ${JSON.stringify(updatedStates, null, 2)};

export function getStateBySlug(slug: string): StateData | undefined {
  return STATES.find(state => state.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return STATES.map(state => state.slug);
}
`;

  // Write the updated file
  const outputPath = path.join(__dirname, '../src/data/states-updated.ts');
  fs.writeFileSync(outputPath, newContent);

  console.log(`\n✅ Successfully updated ${updatedCount} states!`);
  console.log(`📁 Updated file saved to: ${outputPath}`);
  console.log(`\nNext steps:`);
  console.log(`1. Review the generated data in states-updated.ts`);
  console.log(`2. Replace the original states.ts with the updated version`);
  console.log(`3. Test all state pages to ensure they render correctly`);
}

// Run the script
populateStates().catch(console.error);