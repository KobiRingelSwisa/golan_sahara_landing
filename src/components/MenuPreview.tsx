import React from "react";

interface MenuPreviewProps {
  items?: Array<{
    name: string;
    name_en: string;
    price: number;
    image?: string;
  }>;
}

const MenuPreview: React.FC<MenuPreviewProps> = () => {

  return (
    <section className="py-12 md:py-20">
      <div className="container-max"></div>
    </section>
  );
};

export default MenuPreview;
