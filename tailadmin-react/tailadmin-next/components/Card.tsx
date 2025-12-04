interface CardProps {
  title: string;
  value: string | number;
  color?: string;
}

export default function Card({ title, value, color }: CardProps) {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-l-4 ${
        color || "border-blue-500"
      }`}
    >
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
        {title}
      </p>
      <h3 className="text-4xl font-bold text-gray-900 mt-2">{value}</h3>
    </div>
  );
}
