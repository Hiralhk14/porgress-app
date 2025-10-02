export const WeatherDetailCard = ({ icon: IconComponent, label, value }) => (
  <div className="bg-white/10 rounded-xl p-4 text-center">
    <IconComponent className="w-6 h-6 text-white mx-auto mb-2" />
    <p className="text-blue-200 text-sm">{label}</p>
    <p className="text-white font-semibold text-lg">{value}</p>
  </div>
);