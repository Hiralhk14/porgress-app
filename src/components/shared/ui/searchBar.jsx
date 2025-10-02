import { Search } from 'lucide-react';
import { Loading } from './loading';

export const SearchBar = ({ city, setCity, onSearch, loading }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-xl">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter city name..."
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
          />
        </div>
        <button
          onClick={onSearch}
          disabled={loading}
          className="px-6 py-3 bg-white text-blue-500 rounded-xl hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 font-semibold"
        >
          {loading ? <Loading /> : <Search className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};
