import { useState } from 'react';
import {
  Youtube,
  Code2,
  Video,
  Palette,
  Zap,
  Smartphone,
  Shield,
  Star,
  ArrowRight,
  Check,
  Menu,
  X,
  Quote,
} from 'lucide-react';

const services = [
  {
    id: 'web-basic',
    title: 'Basic Website',
    price: 299,
    description: 'Perfect for personal projects and small businesses',
    features: ['5 Pages', 'Responsive Design', 'Contact Form', 'SEO Basics', '1 Month Support'],
    icon: Code2,
  },
  {
    id: 'web-pro',
    title: 'Professional Website',
    price: 599,
    description: 'Ideal for growing businesses and portfolios',
    features: ['10 Pages', 'Custom Animations', 'CMS Integration', 'Advanced SEO', '3 Months Support', 'Analytics Setup'],
    icon: Palette,
    featured: true,
  },
  {
    id: 'video-basic',
    title: 'Video Editing Package',
    price: 149,
    description: 'Professional editing for your content',
    features: ['Up to 10 min footage', 'Color Grading', 'Sound Design', '2 Revisions', '1080p Export'],
    icon: Video,
  },
  {
    id: 'video-pro',
    title: 'Premium Video Package',
    price: 349,
    description: 'Complete video production solution',
    features: ['Up to 30 min footage', 'Advanced Effects', 'Motion Graphics', '5 Revisions', '4K Export', 'Thumbnail Design'],
    icon: Zap,
  },
];

const skillCategories = [
  {
    title: 'Web Development',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Supabase'],
  },
  {
    title: 'Video Editing',
    icon: Video,
    skills: ['DaVinci Resolve', 'CapCut Pro', 'Color Grading', 'Sound Design'],
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function renderStars(rating: number) {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`}
        />
      ));
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Daniel Enerowo</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#skills" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                Skills
              </a>
              <a href="#services" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                Services
              </a>
              <a href="#testimonials" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                Reviews
              </a>
              <a
                href="https://www.youtube.com/@trimzclipz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium text-sm transition-all hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </a>
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-6 py-4 border-t border-neutral-200 bg-white animate-slide-up">
            <div className="flex flex-col gap-4">
              <a href="#skills" className="text-sm font-medium text-neutral-600" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
              <a href="#services" className="text-sm font-medium text-neutral-600" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#testimonials" className="text-sm font-medium text-neutral-600" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </a>
              <a
                href="https://www.youtube.com/@trimzclipz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full font-medium text-sm"
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100 to-accent-100 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" />

        {/* Geometric Shapes */}
        <div className="absolute top-40 right-20 w-20 h-20 border-2 border-primary-300 rotate-12 animate-float opacity-60" />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-accent-300 rounded-lg rotate-45 animate-float-delayed opacity-60" />
        <div className="absolute top-60 left-1/4 w-10 h-10 bg-primary-400 rounded-full animate-float-slow opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 mb-8">
              <Zap className="w-4 h-4 text-accent-500" />
              Web Development & Video Editing
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Bringing Your Vision
            <br />
            <span className="gradient-text">To Life</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I craft beautiful, performant websites and compelling video content that help creators and businesses stand out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#services"
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              View Services
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@trimzclipz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-900 rounded-full font-semibold border border-neutral-200 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Youtube className="w-5 h-5 text-red-500" />
              Watch My Work
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              A combination of technical skills and creative vision to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className="group relative bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-accent-50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <category.icon className="w-10 h-10 text-primary-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-600 hover:border-primary-300 hover:text-primary-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: Smartphone, label: 'Mobile First' },
              { icon: Zap, label: 'Fast Performance' },
              { icon: Shield, label: 'Secure Code' },
              { icon: Palette, label: 'Custom Design' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary-600" />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-neutral-50 to-white relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services & Pricing</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Choose the package that fits your needs. All services include revisions and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  service.featured
                    ? 'bg-gradient-to-b from-primary-500 to-primary-600 text-white border-primary-400 scale-105'
                    : 'bg-white border-neutral-200 hover:border-primary-200'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}
                <service.icon className={`w-10 h-10 mb-4 ${service.featured ? 'text-white' : 'text-primary-600'}`} />
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className={`text-sm mb-4 ${service.featured ? 'text-primary-100' : 'text-neutral-500'}`}>
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${service.featured ? 'text-white' : 'text-neutral-900'}`}>
                    ${service.price}
                  </span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.featured ? 'text-accent-300' : 'text-accent-500'}`}
                      />
                      <span className={service.featured ? 'text-primary-100' : 'text-neutral-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-10" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-6">
            Pick the package that fits your needs and send me a quick email to get started.
          </p>
          <p className="mt-8 text-2xl font-semibold text-white">frncspls@gmail.com</p>
          <p className="mt-6 text-neutral-500 text-sm">
            I’ll respond within 24 hours with next steps and a custom quote.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              What my clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200 hover:shadow-lg transition-all">
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              <div className="flex items-center gap-1 mb-3">{renderStars(5)}</div>
              <p className="text-neutral-600 mb-4">
                Daniel recently designed and developed a website for my consulting business. Throughout the project, he was professional, responsive, and eager to learn. He demonstrated strong technical skills and was always willing to make adjustments and improvements based on feedback.
                <br />
                <br />
                I was impressed by his commitment to completing the project and his positive attitude throughout the process. He showed initiative, creativity and a genuine desire to provide a quality product.
                <br />
                <br />
                I would not hesitate to recommend Daniel for future projects or opportunities.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <div>
                  <p className="font-semibold">B. Martell</p>
                  <p className="text-sm text-neutral-500">Sent from Outlook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xl font-bold gradient-text">Daniel Enerowo</span>
              <p className="text-neutral-400 text-sm mt-2">Web Development & Video Editing</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.youtube.com/@DanielEnerowo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span className="text-sm">YouTube</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Daniel Enerowo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
