"use client";

import React from "react";
import {
  ShieldCheck,
  Clock,
  Wrench,
  Battery,
  Truck,
  Award,
  Users,
  Smartphone,
} from "lucide-react";


interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheck size={28} className="text-yellow-400" />,
    title: "Trusted Experts",
    desc: "Skilled technicians delivering reliable repair services you can count on.",
  },
  {
    icon: <Clock size={28} className="text-yellow-400" />,
    title: "Fast Service",
    desc: "Quick turnaround with same-day repairs for most devices.",
  },
  {
    icon: <Wrench size={28} className="text-yellow-400" />,
    title: "Comprehensive Repairs",
    desc: "From cracked screens to motherboard fixes, we cover it all.",
  },
  {
    icon: <Battery size={28} className="text-yellow-400" />,
    title: "Quality Parts",
    desc: "We use high-quality, durable parts to ensure long-lasting performance.",
  },
  {
    icon: <Truck size={28} className="text-yellow-400" />,
    title: "Nationwide Coverage",
    desc: "Serving customers across the UK with reliable mobile repair services.",
  },
  {
    icon: <Award size={28} className="text-yellow-400" />,
    title: "Warranty Guarantee",
    desc: "All repairs backed with a warranty for your peace of mind.",
  },
  {
    icon: <Users size={28} className="text-yellow-400" />,
    title: "Customer First",
    desc: "Dedicated support team ensuring smooth and friendly service.",
  },
  {
    icon: <Smartphone size={28} className="text-yellow-400" />,
    title: "All Brands Supported",
    desc: "Repairs for iPhone, Samsung, Huawei, and other leading brands.",
  },
];

const WhyBritFix: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-yellow-500">BritFix?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At BritFix, we go beyond just fixing phones. We deliver peace of mind through
          professional service, top-quality parts, and customer-focused solutions.
        </p>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBritFix;
