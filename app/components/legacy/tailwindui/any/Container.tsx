import * as React from "react";

export const Container: React.FC<{
  type?: string;
  id?: string;
  classNames?: string;
  children: React.ReactNode;
}> = ({ type, id, classNames, children }) => {
  switch (type) {
    case "grid":
      return (
        <>
          <section
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${classNames}`}
            aria-label="Container Section"
            id={id ?? ""}
          >
            {children}
          </section>
        </>
      );
    case "flex":
      return (
        <>
          <section
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
              classNames ?? ""
            }`}
            aria-label="Container Section"
            id={id ?? ""}
          >
            {children}
          </section>
        </>
      );
    default:
      return (
        <>
          <section
            className={`min-h-screen ${classNames ?? ""}`}
            aria-label="Container Section"
            id={id ?? ""}
          >
            <div className="space-y-12">{children}</div>
          </section>
        </>
      );
  }
};
