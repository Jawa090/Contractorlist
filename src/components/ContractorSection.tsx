import React, { useState } from "react";

const ContractorSection = () => {
  const [selectedTab, setSelectedTab] = useState(
    "Subcontractor & Service Provider"
  );

  const tabs = [
    "Subcontractor & Service Provider",
    "General Contractor",
    "BPM & Supplier",
    "Architect",
    "Property Manager/ Owner",
  ];

  return (
    <div className="font-sans bg-white">

      {/* ===== Bottom Text Section ===== */}
      <div className="max-w-5xl mx-auto text-center mt-20 px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          What Contractorslist.com is Actually!
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          With a legacy spanning 110 years, The Blue Book is an indispensable
          resource within the construction industry, facilitating connections
          between project decision-makers, subcontractors and other service
          providers nationwide. As part of Dodge Construction Network, The Blue
          Book empowers businesses across all specialties and trades to secure
          additional project work, enhance company visibility, and broaden their
          professional network.
        </p>
      </div>
    </div>
  );
};

export default ContractorSection;
