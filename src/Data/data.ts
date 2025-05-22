export type Category =
  | "Residential"
  | "Commercial"
  | "Agriculture"
  | "Industrial";

export interface PropertyType {
  id?: number;
  image: string;
  category: Category;
  featured?: boolean;
  is3D?: boolean;
}

export const propertyData: PropertyType[] = [
  {
    id: 1,
    image: "/Images/Estate1.jpg",
    category: "Residential",
    featured: true,
    is3D: true,
  },
  {
    id: 2,
    image: "/Images/Estate2.jpg",
    category: "Residential",
    featured: true,
    is3D: true,
  },
  {
    id: 3,
    image: "/Images/Estate3.jpg",
    category: "Residential",
    featured: true,
    is3D: true,
  },
  {
    id: 4,
    image: "/Images/Estate1.jpg",
    category: "Commercial",
    featured: true,
    is3D: true,
  },
  {
    id: 5,
    image: "/Images/Estate3.jpg",
    category: "Commercial",
    featured: true,
    is3D: true,
  },
  {
    id: 6,
    image: "/Images/Estate2.jpg",
    category: "Commercial",
    featured: true,
    is3D: true,
  },
  {
    id: 7,
    image: "/Images/Estate3.jpg",
    category: "Agriculture",
    featured: true,
    is3D: true,
  },
  {
    id: 8,
    image: "/Images/Estate1.jpg",
    category: "Agriculture",
    featured: true,
    is3D: true,
  },
  {
    id: 9,
    image: "/Images/Estate2.jpg",
    category: "Agriculture",
    featured: true,
    is3D: true,
  },
  {
    id: 10,
    image: "/Images/Estate3.jpg",
    category: "Industrial",
    featured: true,
    is3D: true,
  },
  {
    id: 11,
    image: "/Images/Estate2.jpg",
    category: "Industrial",
    featured: true,
    is3D: true,
  },
  {
    id: 12,
    image: "/Images/Estate1.jpg",
    category: "Industrial",
    featured: true,
    is3D: true,
  },
];
