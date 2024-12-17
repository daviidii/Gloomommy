import { useMemo } from "react";
import { menu_nav } from "../../objects/menu-nav";
import { MenuProps } from "../../types/MenuProps";
import { Link } from "react-router-dom";
import { socialLinks } from "../../objects/social-links";

const Footer = () => {
  const footer_nav: MenuProps[] = useMemo(() => {
    return [
      ...menu_nav.filter(
        (item) => item.name !== "contact" && item.name !== "home"
      ),
      // Add the new "others" menu
      {
        id: 1006,
        name: "others",
        link: "",
        subLink: [
          { link: "/help", name: "seek help" },
          { link: "/about/privacy_policy", name: "privacy policy" },
        ],
      },
    ];
  }, []);

  return (
    <footer className="relative bg-primary text-onPrimary p-4 md:p-10">
      <div className="flex flex-wrap items-center justify-between lg:container space-y-10 md:space-y-0">
        <div className="w-full md:w-1/3 self-start text-sm space-y-4">
          <h2 className="text-3xl leading-none">Gloomommy</h2>
          <address className="flex flex-col gap-1.5">
            <Link to="mailto:support@gloomommy.com.ph">
              ictpgroup1@gmail.com
            </Link>
            <Link to="tel:+639061234567">+63 (906) 123 4567</Link>
          </address>
          <ul className="flex items-center gap-7 text-xl">
            {socialLinks.map((social, i) => (
              <li key={`footer-social-${i}-${social.name}`}>
                <Link
                  to={social.link}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3 flex flex-wrap gap-11 items-start lg:justify-end">
          {footer_nav.map((nav, i) => (
            <div
              key={`footer-nav-${i}-${nav.name}`}
              className="w-full md:w-max space-y-4.5"
            >
              <p className="uppercase">{nav.name}</p>
              <ul className="min-w-max text-sm space-y-1.5">
                {nav.subLink.map((sublink, i) => (
                  <li key={`footer-sublink-${i}-${sublink.name}`}>
                    <Link to={sublink.link}>{sublink.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 lg:container flex items-center justify-between text-xs py-2.5 border-t">
        <div>
          <span>
            &copy; {new Date().getFullYear()} Gloomommy. All rights reserved.
          </span>
        </div>
        <div>
          <Link to="Privacy Policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
