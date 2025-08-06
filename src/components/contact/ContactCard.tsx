import { ThemeConfig } from "@/contextapi/ThemeContext";

interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  contact: string;
  action: string;
  link?: string;
  theme: string;
  themeConfig: ThemeConfig;
  getCardClasses: () => string;
  getHeadingClasses: () => string;
  getTextClasses: () => string;
}

const ContactCard = ({
  icon,
  title,
  description,
  link,
  contact,
  getHeadingClasses,
  getTextClasses,
  theme,
  themeConfig,
  getCardClasses,
}: ContactCardProps) => (
  <div
    className={`${getCardClasses()} group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center`}
    style={{
      padding:
        theme === "theme3"
          ? "2.5rem 2rem"
          : theme === "theme2"
          ? "2rem 1.5rem"
          : "1.5rem 1rem",
    }}
  >
    <div
      className="transition-transform duration-300 group-hover:scale-110"
      style={{
        fontSize: theme === "theme3" ? "3rem" : "2.5rem",
        marginBottom: theme === "theme3" ? "1.5rem" : "1rem",
      }}
    >
      {icon}
    </div>
    <h3
      className={`${getHeadingClasses()} font-semibold`}
      style={{
        fontSize: theme === "theme3" ? "1.5rem" : "1.25rem",
        marginBottom: theme === "theme3" ? "1rem" : "0.75rem",
      }}
    >
      {title}
    </h3>
    <p
      className={`${getTextClasses()} leading-relaxed`}
      style={{
        fontSize: theme === "theme3" ? "1.1rem" : "1rem",
        marginBottom: "1rem",
      }}
    >
      {description}
    </p>
    <p
      className={`${themeConfig.primary.replace(
        "bg-",
        "text-"
      )} font-medium mb-4 ${theme === "theme3" ? "text-base" : "text-sm"}`}
    >
      {contact}
    </p>
    {link && (
      <a
        href={link}
        className={`${themeConfig.primary.replace(
          "bg-",
          "text-"
        )} hover:opacity-80 transition-opacity font-medium`}
        style={{ fontSize: theme === "theme3" ? "1.1rem" : "1rem" }}
      >
        Get in touch →
      </a>
    )}
  </div>
);

export default ContactCard;
