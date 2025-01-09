import dynamic from "next/dynamic";
import destinationData from "../../../../constant/Destination/DestinationData";

interface PageProps {
  params: {
    slug: string; // The dynamic route parameter
  };
}

import PackageDetailsSlider from "@/components/package/PackageDetailsSlider";
import { Metadata } from "next";
import PackageDetailsData from "@/constant/Package/PackageDetailsData";

const DynamicMap = dynamic(() => import("@/components/package/PackageMap"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Package Details | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description: "Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template",
  keywords: [
    "tour",
    "travel",
    "booking",
    "rental",
    "nextJs",
    "tailwind",
    "trip",
    "beach",
    "holiday",
    "cruise",
    "vacation",
  ],
};

const PackageDetails: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

  // Find the matching destination data by slug
  const destination = destinationData.find((item) => item.slug === slug);

  if (!destination) {
    return (
      <div className="container text-center py-16">
        <h1 className="text-2xl font-bold">Destination Not Found</h1>
        <p>Sorry, we couldn’t find the destination you were looking for.</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-t to-[#FFF1EC] from-white">
        <PackageDetailsSlider
          slider_images={PackageDetailsData?.slider_images}
        />

        <div className="container">
          <div className="flex flex-wrap justify-between pb-8 pt-6 mb-8 border-b border-stock-1">
            <div className="pt-2">
              <h3 className="lg:text-2xl md:text-xl text-xl text-dark-1 leading-[1.42] font-medium">
                {destination.title}
              </h3>
              <h4 className="text-primary-1 text-md mt-2">
                {destination.sub_title}
              </h4>
            </div>
          </div>

          <div>
            {/* Itinerary Section */}
            <div className="pack__itinerary mt-8">
              <h4 className="lg:text-xl text-lg font-semibold mb-4 italic">
                Itinerary
              </h4>
              <ul className="divide-y divide-gray-200">
                {destination.itinerary.map((item) => (
                  <li key={item.id} className="py-4">
                    <h5 className="font-bold lg:text-lg">
                      Day {item.id}: {item.day}
                    </h5>
                    <p className="text-gray-700">{item.program}</p>
                    <p className="text-sm text-gray-500">
                      Overnight: {item.overnight}
                    </p>
                    <p className="text-sm text-gray-500">Meals: {item.meals}</p>
                    <p className="text-sm text-gray-500">
                      Transfer: {item.transfer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Inclusions Section */}
            <div className="pack__inclusions mt-8">
              <h4 className="lg:text-xl text-lg font-semibold mb-4 italic">
                Inclusions
              </h4>
              <ul className="list-disc pl-5 lg:text-md text-sm">
                {destination.inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Exclusions Section */}
            <div className="pack__exclusions mt-8">
              <h4 className="lg:text-xl text-lg font-semibold mb-4 italic">
                Exclusions
              </h4>
              <ul className="list-disc pl-5 lg:text-md text-sm">
                {destination.exclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Notes Section */}
            <div className="pack__notes mt-8">
              <h4 className="lg:text-xl text-lg font-semibold mb-4 italic">
                Notes
              </h4>
              <ul className="list-disc pl-5 lg:text-md text-sm">
                {destination.notes.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
