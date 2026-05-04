import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Rafiq Hasan",
      role: "Student, DU",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      review:
        "Book Swap helped me find the books I needed without spending a lot. The community is amazing and super helpful!",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      role: "Student, BUET",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 5,
      review:
        "I love how easy it is to borrow and return books. It’s a fantastic initiative for students like us.",
    },
    {
      id: 3,
      name: "Sakib Ahmed",
      role: "Student, NSU",
      image: "https://i.pravatar.cc/150?img=45",
      rating: 4,
      review:
        "Great platform with a wide collection of books and friendly users. Highly recommended!",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-3 py-10">
      <div className="text-center md:text-left mb-10">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonialsData.map((item) => (
          <TestimonialCard key={item.id} data={item}></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
