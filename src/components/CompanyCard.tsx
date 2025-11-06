import { Link } from "lucide-react";
import React from "react";

const CompanyCard = ({
  logo,
  name,
  description,
  features = [],
  buttons = [],
}) => {
  return (
    <div className="max-w-3xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow my-7">
      {/* Left Section */}
      <div className="flex items-start gap-4 flex-1">
        {/* Checkbox */}

        <div className="flex flex-1 items-center gap-4">
          <input type="checkbox" className="w-5 h-5 accent-blue-600" />

          {/* Logo */}
          <div className="flex-shrink-0 w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
            {logo ? (
              <img
                src={logo}
                alt={`${name} Logo`}
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <div className="text-gray-400 text-sm">No Logo</div>
            )}
          </div>
        </div>

        {/* Company Info (column layout) */}
        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
            <p className="text-gray-600 text-sm mt-1 line-clamp-1">
              {description || "No description available"}
            </p>

            {features.length > 0 && (
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-800">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center gap-1 ">
                    • <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Buttons (bottom aligned in one line) */}
          <div className="flex flex-wrap gap-2 mt-4">
            {buttons.map((btn, i) => (
              <button
                key={i}
                onClick={btn.onClick}
                className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                  btn.type === "primary"
                    ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Certifications */}

      <div className="flex-col">
        <button className="flex items-center gap-2 text-sm text-gray-800 self-start">
          <img
            src={"/certified.jpg"}
            alt={`certified logo`}
            className="w-6 h-6 object-contain "
          />
          <span className="font-medium underline">{"Certifications"}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-800 self-start">
          <img
            src={"/certified.jpg"}
            alt={`certified logo`}
            className="w-6 h-6 object-contain "
          />
          <span className="font-medium underline">{"Lisences"}</span>
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
