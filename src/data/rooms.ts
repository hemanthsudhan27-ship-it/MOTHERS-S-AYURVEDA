// ─── Room Data ────────────────────────────────────────────────────────────────
// Add, remove or edit rooms here. The UI automatically generates room cards
// and dynamic pages from this array.

export interface Room {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  images: string[]; // first image is the hero/primary image
  capacity: number;
  bedType: string;
  roomSize: string; // e.g. "~200 sq ft" — use placeholder if unknown
  amenities: string[];
  price: string; // e.g. "₹2,500 / night" — leave empty if not publishing price
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
}

const rooms: Room[] = [
  {
    id: "01",
    slug: "classic-room",
    name: "Classic Room",
    shortName: "Classic",
    description:
      "Our Classic Room is a beautifully appointed space that balances comfort with understated elegance. Designed for travellers who appreciate well-considered interiors, it offers a peaceful retreat after a day of exploring Kerala. Natural light fills the room through large windows, creating a warm and welcoming atmosphere throughout the day.",
    shortDescription:
      "A thoughtfully designed room offering comfort and warmth for a restful stay.",
    images: [
      "/images/rooms/classic/ab6142b1-7322-4ccf-88ff-399edd5a6f29.jpg",
      "/images/rooms/classic/21cf26c0-f40b-4a19-91d2-2fcf93563e78.jpg",
      "/images/rooms/classic/5cea0506-6d28-4f7f-8129-051f6a1c3dd4.jpg",
      "/images/rooms/classic/12b2117a-de8a-43bb-b33e-bfcffc517325.jpg",
      "/images/rooms/classic/273bca65-9e7f-4ba4-8215-cf47c73f66fd.jpg",
      "/images/rooms/classic/5c0f9797-33e5-4d23-8290-d5f4c726744a.jpg",
      "/images/rooms/classic/e5c495ca-fadd-4ab3-b59c-71ea35dd21b2.jpg",
    ],
    capacity: 4,
    bedType: "Double Bed",
    roomSize: "~180 sq ft",
    amenities: [
      "Air Conditioning",
      "Private Bathroom",
      "Hot Water",
      "Wi-Fi",
      "Wardrobe",
      "Daily Housekeeping",
      "Complimentary Breakfast",
    ],
    price: "",
    featured: true,
    seoTitle: "Classic Room | Mother's Inn Homestay Kerala",
    seoDescription:
      "Book our Classic Room at Mother's Inn Homestay — a beautifully appointed space offering comfort, warmth and genuine Kerala hospitality.",
  },
  {
    id: "02",
    slug: "standard-room",
    name: "Standard Room",
    shortName: "Standard",
    description:
      "The Standard Room is crafted for guests who want a comfortable, no-fuss stay with all the essentials taken care of. With a practical yet inviting layout, it provides everything you need for a relaxed stay. The interior is warm and welcoming, reflecting the genuine hospitality at the heart of Mother's Inn Homestay.",
    shortDescription:
      "A comfortable, well-equipped room with everything you need for a relaxed stay.",
    images: [
      "/images/rooms/standard/1f06c303-5373-4a88-aa62-00c9452aeb6e.jpg",
      "/images/rooms/standard/632577e7-e7c7-4dc6-bcd9-5a4315a0b419.jpg",
      "/images/rooms/standard/4115aa97-1359-44d1-ad63-c52f46c19fed.jpg",
      "/images/rooms/standard/d79e04f9-c485-4508-9f4d-b485d884e52d.jpg",
      "/images/rooms/standard/273bca65-9e7f-4ba4-8215-cf47c73f66fd.jpg",
      "/images/rooms/standard/8cfe0f10-64b5-452b-906d-e950a110d1b7.jpg",
      "/images/rooms/standard/a9df4132-6602-41c4-b797-217a4c659bf6.jpg",
    ],
    capacity: 2,
    bedType: "Queen Bed",
    roomSize: "~160 sq ft",
    amenities: [
      "Air Conditioning",
      "Private Bathroom",
      "Hot Water",
      "Wi-Fi",
      "Wardrobe",
      "Daily Housekeeping",
      "Complimentary Breakfast",
    ],
    price: "",
    featured: true,
    seoTitle: "Standard Room | Mother's Inn Homestay Kerala",
    seoDescription:
      "Our Standard Room at Mother's Inn Homestay offers comfortable, well-equipped accommodation — ideal for solo travellers and couples visiting Kerala.",
  },
  {
    id: "03",
    slug: "budget-room",
    name: "Budget Room",
    shortName: "Budget",
    description:
      "The Budget Room is our most affordable offering — a clean, comfortable and cosy space that gives you everything you need without the frills. Perfect for budget-conscious travellers who still want to experience the warmth and hospitality of Mother's Inn Homestay. Ideal for those who plan to spend most of their time exploring Kerala's beautiful landscapes.",
    shortDescription:
      "Clean, comfortable and affordable — perfect for the independent traveller.",
    images: [
      "/images/rooms/budget/29a9020c-2769-454b-8c37-8a3f508cef47.jpg",
      "/images/rooms/budget/74a8afe1-5897-4b2e-9c24-2a5d0d607c1e.jpg",
      "/images/rooms/budget/e3049d37-d0ae-47e4-bc61-fe793c1663f2.jpg",
    ],
    capacity: 2,
    bedType: "Single / Twin Beds",
    roomSize: "~120 sq ft",
    amenities: [
      "Fan / Air Cooling",
      "Shared Bathroom",
      "Hot Water",
      "Wi-Fi",
      "Daily Housekeeping",
    ],
    price: "",
    featured: false,
    seoTitle: "Budget Room | Mother's Inn Homestay Kerala",
    seoDescription:
      "Our Budget Room at Mother's Inn Homestay is affordable, clean and comfortable — the ideal base for budget travellers exploring Kerala.",
  },
  {
    id: "04",
    slug: "dormitory",
    name: "Dormitory",
    shortName: "Dorm",
    description:
      "Our Dormitory is designed for backpackers, solo travellers and social guests who enjoy meeting people from around the world. With comfortable bunk beds, shared facilities and a friendly common area, the dorm offers the perfect mix of affordability and community. A great base for exploring all that Kerala has to offer.",
    shortDescription:
      "A friendly, social dormitory for backpackers and solo explorers — affordable and vibrant.",
    images: [
      "/images/rooms/dorm/dorm1.jpeg",
      "/images/rooms/dorm/dorm2.jpg",
      "/images/rooms/dorm/dorm3.jpg",
      "/images/rooms/dorm/dorm4.jpg",
      "/images/rooms/dorm/dorm5.jpeg",
    ],
    capacity: 16,
    bedType: "Bunk Beds",
    roomSize: "Shared — ~400 sq ft",
    amenities: [
      "Air Conditioning",
      "Shared Bathroom",
      "Hot Water",
      "Wi-Fi",
      "Secure Lockers",
      "Daily Housekeeping",
      "Common Area Access",
    ],
    price: "",
    featured: true,
    seoTitle: "Dormitory | Mother's Inn Homestay Kerala",
    seoDescription:
      "Our Dormitory at Mother's Inn Homestay is ideal for backpackers and solo travellers — affordable bunks with Wi-Fi, A/C and a great social atmosphere in Kerala.",
  },
];

export default rooms;

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}

export function getFeaturedRooms(): Room[] {
  return rooms.filter((r) => r.featured);
}
