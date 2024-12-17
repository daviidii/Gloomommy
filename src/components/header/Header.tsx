import { useEffect, useMemo, useState } from "react";
import { Button } from "../buttons/Button";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import { menu_nav } from "../../objects/menu-nav";
import { NavLink } from "react-router-dom";
import HeaderFull from "./header-pc/HeaderFull";

const Header: React.FC<{
  isSticky: boolean;
  setIsSticky: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSticky, setIsSticky }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuVariants = useMemo(() => {
    return {
      closed: {
        clipPath: "circle(30px at 100% 0%)",
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 30,
        },
      },
      open: {
        clipPath: "circle(1500px at 100% 0%)",
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      },
    };
  }, []);

  // Animation variants for nav links container
  const navLinksContainerVariants = useMemo(() => {
    return {
      closed: {
        opacity: 0,
        transition: {
          staggerChildren: 0.1,
          staggerDirection: -1, // Stagger out in reverse
        },
      },
      open: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1, // Stagger in sequence
        },
      },
    };
  }, []);

  // Animation variants for each nav link
  const navLinkVariants = useMemo(() => {
    return {
      closed: {
        opacity: 0,
        y: 20,
      },
      open: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      },
    };
  }, []);

  const handleOpenMobileMenu = () => {
    setIsOpenMobileMenu((prev) => !prev);
  };
  return (
    <>
      <motion.header
        initial={{ y: 0, scale: 1, boxShadow: "none" }}
        animate={
          isSticky
            ? {
                scale: [1, 1.01, 1],
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                background: "#7B5733",
                paddingLeft: "40px",
                paddingRight: "40px",
              }
            : { scale: 1, boxShadow: "none", background: "#8D4A5D" }
        }
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={`p-2.5 bg-primary text-onPrimary w-full z-50 ${
          isSticky ? "fixed top-0 left-0" : ""
        }`}
      >
        <div className="flex items-center justify-between lg:hidden">
          <div>
            <NavLink to="/" className="font-inria text-xl font-medium">
              Gloomommy
            </NavLink>
          </div>

          <Button size="plain" variant="plain" onClick={handleOpenMobileMenu}>
            <IoIosMenu className="text-2xl" />
          </Button>
        </div>

        {/* laptop,pc screens */}
        <nav className="hidden lg:flex lg:container items-center justify-between">
          <HeaderFull menu={menu_nav} />
        </nav>
      </motion.header>
      {/* mobile nav */}
      <AnimatePresence>
        {isOpenMobileMenu && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="w-full h-screen z-99999 flex flex-col absolute top-0 left-0 overflow-hidden bg-primary text-onPrimary p-2.5"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <NavLink
                  onClick={handleOpenMobileMenu}
                  to="/"
                  className="font-inria text-xl font-medium"
                >
                  Gloomommy
                </NavLink>
              </div>

              <Button
                size="plain"
                variant="plain"
                onClick={handleOpenMobileMenu}
              >
                <IoMdClose className="text-2xl" />
              </Button>
            </div>

            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={navLinksContainerVariants}
              className="w-full h-full flex flex-col items-center justify-center text-2xl uppercase font-inria"
            >
              {menu_nav.map((menu, i) => (
                <motion.li
                  key={`menu-item-${i}-${menu.name}`}
                  variants={navLinkVariants}
                  className="p-1.5 flex items-center"
                >
                  <NavLink to={menu.link} onClick={handleOpenMobileMenu}>
                    {menu.name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
