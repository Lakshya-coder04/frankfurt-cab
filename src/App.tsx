// src/App.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import {
  X,
  CheckCircle2,
  Headphones,
  Shield,
  Car as CarIcon,
  Clock,
  ArrowRight,
} from 'lucide-react';

// NOTE: import slick styles once (e.g. in src/main.tsx or src/index.css):
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [open, setOpen] = useState(false);

  const fleet = [
    {
      name: 'Toyota Corolla',
      rate: '€1 / km',
      pax: 3,
      bags: 3,
      img: '/cars/corolla.avif',
    },
    {
      name: 'Mercedes C-Class',
      rate: '€1.5 / km',
      pax: 3,
      bags: 3,
      img: '/cars/c-class.avif',
    },
    {
      name: 'Mercedes V-Class',
      rate: '€2 / km',
      pax: 6,
      bags: 6,
      img: '/cars/V-class.avif',
    },
  ];

  const slider = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  } as const;

  return (
    <div className='bg-white text-neutral-900 antialiased'>
      {/* NAVBAR */}
      <header className='sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200'>
        <div className=' mx-auto max-w-6xl px-4 h-14 sm:h-16 flex items-center justify-between'>
          <a href='#' className='font-semibold tracking-tight'>
            Frankfurt Chauffeur
          </a>

          {/* Desktop nav */}
          <nav className='hidden md:flex items-center gap-8 text-sm text-neutral-600'>
            <a href='#how' className='hover:text-black'>
              How it works
            </a>
            <a href='#fleet' className='hover:text-black'>
              Fleet
            </a>
            <a href='#contact' className='hover:text-black'>
              Contact
            </a>
          </nav>

          {/* CTA (desktop) */}
          <a
            href='#form'
            className='hidden md:inline-flex rounded-full px-4 py-2 text-sm bg-black text-white hover:bg-neutral-800'
          >
            Book now
          </a>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className='md:hidden fixed inset-0 z-50'>
            <div
              className='absolute inset-0 bg-black/50'
              onClick={() => setOpen(false)}
            />
            <div className='absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl p-6 flex flex-col'>
              <div className='flex items-center justify-between'>
                <span className='font-semibold'>Menu</span>
                <button onClick={() => setOpen(false)} aria-label='Close menu'>
                  <X className='h-6 w-6' />
                </button>
              </div>
              <nav className='mt-6 flex flex-col gap-4 text-neutral-700'>
                <a
                  href='#how'
                  onClick={() => setOpen(false)}
                  className='hover:text-black'
                >
                  How it works
                </a>
                <a
                  href='#fleet'
                  onClick={() => setOpen(false)}
                  className='hover:text-black'
                >
                  Fleet
                </a>
                <a
                  href='#contact'
                  onClick={() => setOpen(false)}
                  className='hover:text-black'
                >
                  Contact
                </a>
                <a
                  href='#form'
                  onClick={() => setOpen(false)}
                  className='mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 bg-black text-white hover:bg-neutral-800'
                >
                  Book now <ArrowRight className='ml-2 h-4 w-4' />
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className='relative'>
        <div
          className=' h-[60vh] sm:h-[68vh] md:h-[78vh] min-h-[420px] w-full bg-center bg-cover'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className='h-full w-full bg-black/40' />
        </div>

        <div className='absolute inset-0 flex items-center'>
          <div className='mx-auto max-w-6xl w-full px-4'>
            <div className=' grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
              {/* Left copy */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className='text-white pt-20'
              >
                <h1 className='text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight'>
                  Private Flughafen- & City-Transfers
                </h1>
                <p className='mt-3 sm:mt-4 text-sm sm:text-base text-white/85 max-w-prose'>
                  Pünktliche, komfortable Fahrten mit professionellen Fahrern.
                  Fixe, transparente Preise.
                </p>
                <ul className='mt-5 flex flex-wrap gap-3 text-xs sm:text-sm text-white/85'>
                  <li className='px-3 py-1 rounded-full bg-white/10 border border-white/15'>
                    24/7 Support
                  </li>
                  <li className='px-3 py-1 rounded-full bg-white/10 border border-white/15'>
                    Keine versteckten Kosten
                  </li>
                  <li className='px-3 py-1 rounded-full bg-white/10 border border-white/15'>
                    Kostenlose Wartezeit
                  </li>
                </ul>
              </motion.div>

              {/* Right form (mockup only) */}
              <form className='bg-white rounded-2xl p-6 shadow-xl space-y-4 text-left'>
                <div className='grid md:grid-cols-2 gap-4'>
                  <input
                    type='text'
                    placeholder='From'
                    className='w-full rounded-xl border border-neutral-200 p-3'
                  />
                  <input
                    type='text'
                    placeholder='To'
                    className='w-full rounded-xl border border-neutral-200 p-3'
                  />
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                  <input
                    type='date'
                    className='w-full rounded-xl border border-neutral-200 p-3'
                  />
                  <input
                    type='time'
                    className='w-full rounded-xl border border-neutral-200 p-3'
                  />
                </div>
                <input
                  type='text'
                  placeholder='Name'
                  className='w-full rounded-xl border border-neutral-200 p-3'
                />
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full rounded-xl border border-neutral-200 p-3'
                />
                <button className='w-full rounded-xl bg-black text-white p-3 font-medium hover:bg-neutral-800 transition'>
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id='how' className='pt-48 pb-14 sm:py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>
            So funktioniert es
          </h2>
          <div className='mt-8 sm:mt-12 grid md:grid-cols-3 gap-6'>
            {[
              {
                title: 'Route & Fahrzeug wählen',
                text: 'Abhol-/Zielort eingeben und Klasse auswählen.',
              },
              {
                title: 'Daten ausfüllen',
                text: 'Reisedetails & Kontakt angeben, Preis bestätigen.',
              },
              {
                title: 'Fahrer treffen',
                text: 'Ihr Fahrer wartet mit Namensschild am Treffpunkt.',
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className='rounded-2xl border border-neutral-200 p-6 shadow-sm'
              >
                <div className='text-4xl sm:text-5xl font-semibold text-neutral-300'>
                  {i + 1}
                </div>
                <h3 className='mt-3 text-lg sm:text-xl font-medium'>
                  {s.title}
                </h3>
                <p className='mt-2 text-sm sm:text-base text-neutral-600'>
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id='fleet' className='py-14 sm:py-20 bg-neutral-50'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='flex items-end justify-between gap-4 mb-6 sm:mb-8'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
              Unsere Flotte
            </h2>
            <p className='hidden sm:block text-sm text-neutral-600'>
              Transparente Preise pro km
            </p>
          </div>
          <Slider {...slider}>
            {fleet.map((car, i) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
                className='px-3'
              >
                <div className='bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm'>
                  <img
                    src={car.img}
                    alt={car.name}
                    className='h-56 sm:h-60 w-full object-cover'
                  />
                  <div className='p-5'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-lg sm:text-xl font-semibold'>
                        {car.name}
                      </h3>
                      <span className='text-xs sm:text-sm rounded-full px-3 py-1 bg-neutral-900 text-white'>
                        {car.rate}
                      </span>
                    </div>
                    <div className='mt-3 text-xs sm:text-sm text-neutral-600'>
                      {car.pax} Pax · {car.bags} Bags
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* TRUST STRIP (refined, minimal) */}
      <section className='py-12 sm:py-16 bg-gradient-to-r from-white via-neutral-50 to-white'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center'>
            {[
              { title: 'Keine versteckten Kosten', icon: CheckCircle2 },
              { title: '24/7 Kundensupport', icon: Headphones },
              { title: 'Lizenzierte Fahrzeuge', icon: Shield },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className='flex flex-col items-center justify-center space-y-4'
              >
                <div className='flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-neutral-100 shadow-sm'>
                  <Icon className='h-6 w-6 sm:h-7 sm:w-7 text-neutral-700' />
                </div>
                <h3 className='text-base sm:text-lg font-semibold text-neutral-800'>
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id='contact' className='bg-gray-900 text-gray-300 pt-12 pb-8'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-2'>
            <div className='text-white font-semibold'>Frankfurt Chauffeur</div>
            <p className='mt-3 text-sm text-gray-400'>
              Premium Flughafentransfers & City Rides in Frankfurt und Umgebung.
            </p>
            <div className='mt-4 flex items-center gap-4 text-sm text-gray-400'>
              <span className='inline-flex items-center gap-2'>
                <CarIcon className='h-4 w-4' /> Lux Cars
              </span>
              <span className='inline-flex items-center gap-2'>
                <Clock className='h-4 w-4' /> 24/7
              </span>
            </div>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4'>Services</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#' className='hover:text-white'>
                  Airport Transfers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  City Rides
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Hourly Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4'>Kontakt</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                Email:{' '}
                <a href='mailto:hello@example.com' className='hover:text-white'>
                  hello@example.com
                </a>
              </li>
              <li>Phone: +49 123 456789</li>
              <li>Support: 24/7</li>
            </ul>
          </div>
        </div>

        <div className='mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 text-xs text-gray-500'>
          <p>
            © {new Date().getFullYear()} Frankfurt Chauffeur. All rights
            reserved.
          </p>
          <div className='flex items-center gap-4 mt-4 md:mt-0'>
            <a href='#' className='hover:text-gray-300'>
              Privacy
            </a>
            <a href='#' className='hover:text-gray-300'>
              Imprint
            </a>
            <a href='#' className='hover:text-gray-300'>
              Terms
            </a>
          </div>
        </div>
      </footer>

      {/* Tailwind "input" & "btn" shortcuts */}
      <style>{`
        .input { @apply w-full rounded-md border border-neutral-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10; }
        .btn-primary { @apply w-full rounded-md bg-black text-white py-2 font-medium hover:bg-neutral-800 transition-colors; }
      `}</style>
    </div>
  );
}
