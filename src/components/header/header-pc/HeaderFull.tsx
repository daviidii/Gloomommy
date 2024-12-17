import React, { useState } from "react";
import { MenuProps } from "../../../types/MenuProps";
import { motion, AnimatePresence } from "motion/react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MenuItem } from "../header-menu-item/MenuItem";

const HeaderFull: React.FC<{ menu: MenuProps[] }> = ({ menu }) => {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const handleSetHoveredTab = (val: number | null) => {
    setHoveredTab(val);
  };

  return (
    <div className="flex items-center gap-7">
      <div>
        <NavLink to="/" className="font-inria text-xl font-medium">
          Gloomommy
        </NavLink>
      </div>
      <ul
        onMouseLeave={() => handleSetHoveredTab(null)}
        className="flex items-center gap-6 capitalize text-sm"
      >
        {menu.map((menuItem, i) => (
          <motion.li
            className="relative flex items-center gap-1.5"
            onMouseEnter={() => handleSetHoveredTab(menuItem.id)}
            key={`menu-item-${i}-${menuItem.name}`}
          >
            <NavLink to={menuItem.link}>{menuItem.name}</NavLink>
            {menuItem.subLink.length > 0 && (
              <div>
                <IoIosArrowDown />
              </div>
            )}
            <AnimatePresence>
              {menuItem.subLink.length > 0 && hoveredTab === menuItem.id && (
                <MenuItem
                  active={hoveredTab}
                  id={menuItem.id}
                  setActive={handleSetHoveredTab}
                >
                  <ul className="bg-primaryContainer text-onPrimaryContainer rounded-md p-2.5">
                    {menuItem.subLink.map((sublink, idx) => (
                      <li
                        key={`tab-sublink-${idx}-${sublink.name}`}
                        className="p-1.5"
                      >
                        <NavLink to={sublink.link}>{sublink.name}</NavLink>
                      </li>
                    ))}
                  </ul>
                </MenuItem>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderFull;
