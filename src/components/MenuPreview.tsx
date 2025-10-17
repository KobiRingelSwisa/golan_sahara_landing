import React from "react";
import Link from "next/link";

interface MenuPreviewProps {
  items?: Array<{
    name: string;
    name_en: string;
    price: number;
    image?: string;
  }>;
}

const MenuPreview: React.FC<MenuPreviewProps> = ({ items }) => {
  // Sample featured items for preview
  const featuredItems = items || [
    {
      name: "אסדו בלווי ירקות שורש",
      name_en: "Asado with Root Vegetables",
      price: 180,
      image: "/api/placeholder/400/225",
    },
    {
      name: "מעורב ירושלמי",
      name_en: "Jerusalem Mixed Grill",
      price: 120,
      image: "/api/placeholder/400/225",
    },
    {
      name: "פסטיה במלוי פרגית וירקות",
      name_en: "Pastilla with Chicken and Vegetables",
      price: 125,
      image: "/api/placeholder/400/225",
    },
    {
      name: "שניצל עוף ביתי",
      name_en: "Homemade Chicken Schnitzel",
      price: 110,
      image: "/api/placeholder/400/225",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container-max"></div>
    </section>
  );
};

export default MenuPreview;
