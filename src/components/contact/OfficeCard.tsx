"use client";

interface Office {
  city: string;
  address: string;
  zip: string;
  phone: string;
  email: string;
  getCardClasses: () => string;
  getHeadingClasses: () => string;
  getTextClasses: () => string;
  theme: string;
}

const OfficeCard = ({
  getCardClasses,
  address,
  city,
  theme,

  email,
  getHeadingClasses,
  getTextClasses,
  phone,
  zip,
}: Office) => {
  return (
    <div
      className={`${getCardClasses()} hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
      style={{
        padding: theme === "theme3" ? "2.5rem 2rem" : "2rem 1.5rem",
      }}
    >
      <h3
        className={`${getHeadingClasses()} font-bold`}
        style={{
          fontSize: theme === "theme3" ? "1.8rem" : "1.5rem",
          marginBottom: theme === "theme3" ? "1.5rem" : "1rem",
        }}
      >
        {city}
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: theme === "theme3" ? "1rem" : "0.75rem",
        }}
      >
        <p
          className={`${getTextClasses()}`}
          style={{ fontSize: theme === "theme3" ? "1.1rem" : "1rem" }}
        >
          📍 {address}
        </p>
        <p
          className={`${getTextClasses()}`}
          style={{ fontSize: theme === "theme3" ? "1.1rem" : "1rem" }}
        >
          {zip}
        </p>
        <p
          className={`${getTextClasses()}`}
          style={{ fontSize: theme === "theme3" ? "1.1rem" : "1rem" }}
        >
          📞 {phone}
        </p>
        <p
          className={`${getTextClasses()}`}
          style={{ fontSize: theme === "theme3" ? "1.1rem" : "1rem" }}
        >
          ✉️ {email}
        </p>
      </div>
    </div>
  );
};

export default OfficeCard;
