// import section from "@components/section";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, DollarSign } from "lucide-react";
// import SwitchButton from "../components/SwitchButton";

const Blog = () => {
  //   const [isCompleted, setIsCompleted] = useState(false);
  // Sample data for ongoing and completed projects
  const ongoing = [
    {
      title: "Luxury Uptown",
      description:
        "Premium condominium complex in the heart of downtown featuring modern amenities, stunning city views, and convenient access to shopping and dining.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Downtown District",
      year: "Ongoing",
      value: "₦2.5M",
    },
    {
      title: "Suburban Family Homes",
      description:
        "Beautiful family-friendly neighborhood with spacious homes, parks, and excellent schools. Perfect for growing families seeking comfort and community.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Maple Heights",
      year: "Ongoing",
      value: "₦1.8M",
    },
    {
      title: "Commercial Plaza",
      description:
        "Mixed-use commercial development featuring retail spaces, office suites, and dining establishments. A thriving hub for local businesses.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Business District",
      year: "Ongoing",
      value: "₦4.2M",
    },
    {
      title: "Waterfront Estates",
      description:
        "Exclusive waterfront properties offering breathtaking views, private docks, and luxury amenities. The pinnacle of sophisticated living.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Lakeside Drive",
      year: "Ongoing",
      value: "₦3.7M",
    },
    {
      title: "Urban Loft Conversion",
      description:
        "Historic warehouse transformed into modern loft apartments, blending industrial charm with contemporary design and amenities.",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Arts Quarter",
      year: "Ongoing",
      value: "₦1.9M",
    },
    {
      title: "Green Valley Townhomes",
      description:
        "Eco-friendly townhome community with sustainable features, energy-efficient designs, and beautiful landscaping throughout.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Green Valley",
      year: "Ongoing",
      value: "₦2.1M",
    },
  ];
  const projects = [
    {
      title: "Luxury Downtown Condos",
      description:
        "Premium condominium complex in the heart of downtown featuring modern amenities, stunning city views, and convenient access to shopping and dining.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Downtown District",
      year: "2024",
      value: "₦2.5M",
    },
    {
      title: "Suburban Family Homes",
      description:
        "Beautiful family-friendly neighborhood with spacious homes, parks, and excellent schools. Perfect for growing families seeking comfort and community.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Maple Heights",
      year: "2023",
      value: "₦1.8M",
    },
    {
      title: "Commercial Plaza",
      description:
        "Mixed-use commercial development featuring retail spaces, office suites, and dining establishments. A thriving hub for local businesses.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Business District",
      year: "2023",
      value: "₦4.2M",
    },
    {
      title: "Waterfront Estates",
      description:
        "Exclusive waterfront properties offering breathtaking views, private docks, and luxury amenities. The pinnacle of sophisticated living.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Lakeside Drive",
      year: "2024",
      value: "₦3.7M",
    },
    {
      title: "Urban Loft Conversion",
      description:
        "Historic warehouse transformed into modern loft apartments, blending industrial charm with contemporary design and amenities.",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Arts Quarter",
      year: "2023",
      value: "₦1.9M",
    },
    {
      title: "Green Valley Townhomes",
      description:
        "Eco-friendly townhome community with sustainable features, energy-efficient designs, and beautiful landscaping throughout.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Green Valley",
      year: "2024",
      value: "₦2.1M",
    },
  ];

  return (
    <>
          <div className="p-4">
        <section>
          <div className="max-w-7xl mx-auto flex justify-between my-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold  mb-4">
              Blog
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                Discover our portfolio of successful real estate developments
                and transactions that showcase our expertise and commitment to
                excellence.
              </p>
            </div>
            <div>
              {/* Button Component */}
              {/* <SwitchButton
                isCompleted={isCompleted}
                setIsCompleted={setIsCompleted}
              /> */}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {isCompleted */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-vw-text mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>Completed {project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-semibold">
                      <DollarSign size={16} />
                      <span>Project Value: {project.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
