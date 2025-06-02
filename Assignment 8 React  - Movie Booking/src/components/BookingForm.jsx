import { useState } from "react";

const BookingForm = ({ movie, onBook }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = "BOOK" + Math.floor(Math.random() * 1000000);
    onBook({ ...form, bookingId, movie: movie.name });
  };

  return (
    <div className="mt-4">
      <h1 className="text-xl font-semibold mb-2">Booking for: {movie.name}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Book Seat
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
