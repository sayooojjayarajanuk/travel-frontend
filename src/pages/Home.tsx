import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import TrendingDestinations from "@/components/TrendingDestinations";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Search Section */}
      <section className="py-24 bg-gradient-to-br from-background to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-text-primary mb-6 leading-tight">
            Where will your next
            <span className="bg-gradient-primary bg-clip-text text-transparent"> adventure </span>
            take you?
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover amazing destinations, connect with fellow travelers, and create memories that last a lifetime.
          </p>
          <SearchBar />
        </div>
      </section>

      <TrendingDestinations />

      {/* Top Packages Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-text-primary">
            Top Travel Packages
          </h2>
          <div className="text-center py-12">
            <p className="text-lg text-text-muted">Coming soon - Amazing travel packages from verified agents!</p>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-text-primary">
            Latest from the Community
          </h2>
          <div className="text-center py-12">
            <p className="text-lg text-text-muted">Coming soon - Social feed with travel posts and experiences!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;