export interface Supplier {
    id: string;
    name: string;
    location: string;
    rating: number;
    status: 'Verified' | 'Premium' | 'Standard';
    inventory: string[];
    reviews: number;
    phone: string;
    email: string;
    deliveryAvailable: boolean;
    description: string;
    category: string;
}

export const mockSuppliers: Supplier[] = [
    {
        id: 'sup-1',
        name: 'Lone Star Materials [AUSTIN HQ]',
        location: 'Austin, TX',
        rating: 4.8,
        status: 'Verified',
        inventory: ['Lumber', 'Drywall', 'Tools', 'Insulation'],
        reviews: 124,
        phone: '(512) 555-0101',
        email: 'sales@lonestarmaterials.com',
        deliveryAvailable: true,
        description: 'Premium building materials supplier serving the greater Austin area for over 20 years.',
        category: 'Lumber & Drywall'
    },
    {
        id: 'sup-2',
        name: 'Alamo Concrete Supply',
        location: 'Austin, TX',
        rating: 4.6,
        status: 'Premium',
        inventory: ['Concrete', 'Aggregates', 'Masonry', 'Rebar'],
        reviews: 89,
        phone: '(210) 555-0202',
        email: 'orders@alamoconcrete.com',
        deliveryAvailable: true,
        description: 'Large-scale concrete and masonry supplier for commercial and industrial projects.',
        category: 'Concrete'
    },
    {
        id: 'sup-3',
        name: 'Metro Electric Wholesale',
        location: 'Austin, TX',
        rating: 4.9,
        status: 'Verified',
        inventory: ['Electrical', 'Lighting', 'Wire', 'Conduit', 'Panels'],
        reviews: 215,
        phone: '(214) 555-0303',
        email: 'wholesale@metroelectric.com',
        deliveryAvailable: true,
        description: 'Comprehensive electrical supply house with a massive inventory of commercial products.',
        category: 'Electrical'
    },
    {
        id: 'sup-4',
        name: 'Texas Plumbing Depot',
        location: 'Houston, TX',
        rating: 4.7,
        status: 'Verified',
        inventory: ['Plumbing', 'Pipe', 'Fixtures', 'Water Heaters', 'Fittings'],
        reviews: 156,
        phone: '(713) 555-0404',
        email: 'support@txplumbingdepot.com',
        deliveryAvailable: true,
        description: 'Your one-stop shop for all plumbing supplies, from rough-in to finishing fixtures.',
        category: 'Plumbing'
    },
    {
        id: 'sup-5',
        name: 'BuildRight Hardware',
        location: 'Fort Worth, TX',
        rating: 4.5,
        status: 'Standard',
        inventory: ['Hardware', 'Fasteners', 'Tools', 'Safety Gear', 'Paint'],
        reviews: 78,
        phone: '(817) 555-0505',
        email: 'info@buildrighthardware.com',
        deliveryAvailable: false,
        description: 'Local hardware store specializing in contractors and high-volume fastener orders.',
        category: 'Tools & Hardware'
    },
    {
        id: 'sup-6',
        name: 'Gulf Coast HVAC Supply',
        location: 'Galveston, TX',
        rating: 4.7,
        status: 'Verified',
        inventory: ['AC Units', 'Ductwork', 'Thermostats', 'Coolant', 'Filters'],
        reviews: 64,
        phone: '(409) 555-0606',
        email: 'sales@gulfcoasthvac.com',
        deliveryAvailable: true,
        description: 'Specializing in residential and commercial HVAC units and replacement parts.',
        category: 'HVAC'
    },
    {
        id: 'sup-7',
        name: 'Hill Country Stone & Tile',
        location: 'Austin, TX',
        rating: 4.9,
        status: 'Premium',
        inventory: ['Granite', 'Marble', 'Quartz', 'Tiles', 'Grout'],
        reviews: 142,
        phone: '(512) 555-0707',
        email: 'design@hillcountrystone.com',
        deliveryAvailable: true,
        description: 'Luxury stone and tile showroom offering fabrication and delivery services.',
        category: 'Finishes'
    },
    {
        id: 'sup-8',
        name: 'Panhandle Paint Co.',
        location: 'Amarillo, TX',
        rating: 4.4,
        status: 'Verified',
        inventory: ['Paint', 'Stain', 'Brushes', 'Sprayers', 'Tape'],
        reviews: 53,
        phone: '(806) 555-0808',
        email: 'orders@panhandlepaint.com',
        deliveryAvailable: true,
        description: 'Wide variety of industrial coatings and architectural paints for professional painters.',
        category: 'Paint'
    },
    {
        id: 'sup-9',
        name: 'Ironclad Metal Works',
        location: 'El Paso, TX',
        rating: 4.7,
        status: 'Verified',
        inventory: ['Steel Beams', 'Sheet Metal', 'Welding Supplies'],
        reviews: 42,
        phone: '(915) 555-0909',
        email: 'sales@ironcladmetal.com',
        deliveryAvailable: true,
        description: 'Structural steel and custom metal fabrication supplies.',
        category: 'Metals'
    },
    {
        id: 'sup-10',
        name: 'Peak Roofing Supplies',
        location: 'Plano, TX',
        rating: 4.8,
        status: 'Premium',
        inventory: ['Shingles', 'Underlayment', 'Flashing', 'Gutter'],
        reviews: 95,
        phone: '(972) 555-1010',
        email: 'orders@peakroofing.com',
        deliveryAvailable: true,
        description: 'Major distributor of residential and commercial roofing materials.',
        category: 'Roofing'
    }
];
