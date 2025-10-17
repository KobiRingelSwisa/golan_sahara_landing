import React from "react";

interface MenuItem {
  name: string;
  name_en: string;
  price: number;
  price_per_portion?: number;
  price_bulk_discount?: number;
}

interface MenuCategory {
  category: string;
  category_en: string;
  pricing_unit: string;
  pricing_unit_en: string;
  pricing_notes?: string;
  pricing_notes_en?: string;
  items: MenuItem[];
}

interface MenuGridProps {
  menu: MenuCategory[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ menu }) => {
  return (
    <div className="space-y-16">
      {menu.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          {/* Category Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4">{category.category}</h2>
            <p className="text-body text-ink mb-2">{category.pricing_unit}</p>
            {category.pricing_notes && (
              <p className="text-small text-ink/60 italic">
                {category.pricing_notes}
              </p>
            )}
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="card p-6 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-grow">
                    <h3 className="text-h3 font-medium text-charcoal mb-2 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-small text-ink/60 italic leading-relaxed">
                      {item.name_en}
                    </p>
                  </div>

                  <div className="text-left mr-4 flex-shrink-0">
                    {item.price_per_portion ? (
                      <div className="text-right">
                        <div className="text-h3 font-semibold text-gold">
                          {item.price_per_portion} ₪
                        </div>
                        {item.price_bulk_discount && (
                          <div className="text-small text-ink/60">
                            הנחה: {item.price_bulk_discount} ₪
                          </div>
                        )}
                        <div className="text-xs text-ink/40 mt-1">למנה</div>
                      </div>
                    ) : (
                      <div className="text-right">
                        <div className="text-h3 font-semibold text-gold">
                          {item.price} ₪
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Special pricing note for sides */}
                {item.price_per_portion && (
                  <div className="mt-4 pt-4 border-t border-line">
                    <p className="text-xs text-ink/40">
                      מחיר למנה • הנחה להזמנות גדולות
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
