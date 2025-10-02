export const ErrorMessage = ({ message }) => (
  <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-4 mb-6 border border-red-400/30">
    <p className="text-white text-center">{message}</p>
  </div>
);