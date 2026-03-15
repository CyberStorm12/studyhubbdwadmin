import { Link } from "wouter";
import { ArrowRight, BookOpen, Globe, Users, Award, Zap, Heart } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

const SERVICE_ICONS = [BookOpen, Globe, Users, Award, Zap, Heart];

export default function Home() {
  const { content } = useCms();
  const { home, services, destinations, successStories, global: g } = content;
  const featuredServices = services.slice(0, 6);
  const featuredDestinations = destinations.slice(0, 5);
  const featuredStories = successStories.slice(0, 4);

  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center bg-gradient-to-br from-light-golden via-off-white to-white relative overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-golden rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-dark-golden rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-golden font-bold text-xs sm:text-sm bg-light-golden px-3 sm:px-4 py-2 rounded-full">{home.hero.badge}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                {home.hero.title} <span className="text-golden">{home.hero.titleHighlight}</span>
              </h1>
              <RichText
                as="p"
                className="text-sm sm:text-base md:text-lg text-gray leading-relaxed"
                text={home.hero.description}
              />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <a
                  href={g.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-golden to-dark-golden text-white font-bold rounded-lg hover:shadow-xl transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  {home.hero.ctaButton} <ArrowRight size={18} className="hidden sm:inline" />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-3 border-golden text-golden font-bold rounded-lg hover:bg-light-golden transition-all text-sm sm:text-base"
                >
                  {home.hero.learnMoreButton}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
                {home.hero.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl sm:text-3xl font-bold text-golden">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-golden to-dark-golden rounded-2xl opacity-20"></div>
                <div className="absolute inset-4 bg-white rounded-xl shadow-2xl flex items-center justify-center border-4 border-golden">
                  <div className="text-center px-4">
                    <Globe size={60} className="text-golden mx-auto mb-4" />
                    <p className="text-xl sm:text-2xl font-bold text-black">Study Abroad</p>
                    <p className="text-golden font-semibold mt-2 text-sm sm:text-base">Made Simple & Accessible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
              {home.servicesSection.title} <span className="text-golden">{home.servicesSection.titleHighlight}</span>
            </h2>
            <RichText as="p" className="text-sm sm:text-base md:text-lg text-gray max-w-2xl mx-auto" text={home.servicesSection.subtitle} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service, index) => {
              const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
              return (
                <Link key={service.id} href="/services">
                  <div className="group bg-light-golden rounded-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-golden hover:border-dark-golden h-full">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-golden to-dark-golden rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">{service.title}</h3>
                    <RichText as="p" className="text-sm sm:text-base text-gray mb-4" text={service.description} />
                    <div className="flex items-center text-golden font-bold group-hover:gap-2 transition-all text-sm sm:text-base">
                      Learn More <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study Destinations Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-light-golden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
              {home.destinationsSection.title} <span className="text-golden">{home.destinationsSection.titleHighlight}</span>
            </h2>
            <RichText as="p" className="text-sm sm:text-base md:text-lg text-gray max-w-2xl mx-auto" text={home.destinationsSection.subtitle} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {featuredDestinations.map((country) => (
              <div key={country.id} className="bg-white rounded-xl p-4 sm:p-6 text-center border-2 border-golden hover:border-dark-golden transition-all hover:shadow-lg">
                <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{country.flag}</div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-2">{country.name}</h3>
                <RichText as="p" className="text-xs sm:text-sm text-gray mb-3 sm:mb-4" text={country.shortDescription} />
                <Link href="/destinations" className="text-golden font-semibold hover:text-dark-golden transition-colors text-sm">
                  Explore →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/destinations" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-lg hover:bg-opacity-90 transition-all text-sm sm:text-base">
              Show All Destinations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-golden to-dark-golden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
              {home.successSection.title} <span className="text-black opacity-80">{home.successSection.titleHighlight}</span>
            </h2>
            <RichText as="p" className="text-sm sm:text-base md:text-lg text-black opacity-90 max-w-2xl mx-auto" text={home.successSection.subtitle} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredStories.map((student) => (
              <div key={student.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-golden to-dark-golden flex items-center justify-center">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-black">{student.name}</h3>
                  <RichText as="p" className="text-xs sm:text-sm text-gray mb-1" text={student.university} />
                  <p className="text-xs sm:text-sm text-golden font-semibold">{student.country}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link href="/success-stories" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-lg hover:bg-opacity-90 transition-all text-sm sm:text-base">
              View All Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {home.ctaSection.title}
          </h2>
          <RichText as="p" className="text-sm sm:text-base md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto" text={home.ctaSection.subtitle} />
          <a
            href={g.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-golden text-white font-bold rounded-lg hover:bg-light-golden hover:text-black transition-all transform hover:scale-105 text-sm sm:text-base border-2 border-golden shadow-lg"
          >
            {home.ctaSection.buttonText} <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
