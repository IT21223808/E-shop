
import React from 'react';
import {
  Store,
  HeartHandshake,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
  Globe,
} from 'lucide-react';

const Aboutus = () => {
  const highlights = [
    {
      icon: Store,
      title: 'Support Local Brands',
      description:
        'Discover and support Sri Lankan businesses, creators, and local product brands.',
    },
    {
      icon: ShieldCheck,
      title: 'Shopping Made Simple',
      description:
        'Enjoy a convenient, secure, and easy online shopping experience.',
    },
    {
      icon: HeartHandshake,
      title: 'Connecting Communities',
      description:
        'Bringing buyers and sellers together through one online marketplace.',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              <Store size={17} />
              ABOUT ESHOP.LK
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your home for
              <span className="block text-orange-600">
                Sri Lankan products.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Hey! We are eshop.lk, a Sri Lankan online marketplace
              established in 2004. Our goal is to connect customers with
              local products and help Sri Lankan brands reach more people.
            </p>

            <a
              href="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-orange-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-1 hover:bg-orange-700"
            >
              Explore Products
              <ArrowRight size={19} />
            </a>

            <p className="mt-5 text-sm text-gray-500">
              Discover local products. Shop with confidence.
            </p>
          </div>

          {/* Visual Highlight */}
          <div
            data-aos="fade-left"
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-orange-200" />

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-rose-600 p-7 text-white shadow-2xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                <ShoppingBag size={30} />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
                Shop local, grow together
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl">
                A marketplace that brings us closer.
              </h2>

              <p className="mt-5 leading-7 text-orange-50">
                From local businesses to everyday shoppers, we aim to
                make discovering and buying products easier for everyone.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/25 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-orange-600">
                  <Globe size={22} />
                </div>
                <div>
                  <p className="font-bold">Proudly Sri Lankan</p>
                  <p className="text-sm text-orange-100">
                    Supporting local businesses
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 hidden rounded-xl bg-white px-5 py-4 shadow-xl sm:block">
              <p className="text-sm font-semibold text-gray-500">
                Established
              </p>
              <p className="text-2xl font-extrabold text-orange-600">
                2004
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Story
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            More than just a marketplace
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            At eshop.lk, we believe technology can create meaningful
            connections between businesses and customers. We are committed
            to building an online shopping experience that celebrates
            Sri Lankan products while making shopping more accessible
            and convenient.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div
            data-aos="fade-up"
            className="rounded-2xl border border-gray-100 bg-gray-50 p-7 sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <HeartHandshake size={25} />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Empowering Local Businesses
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              We prioritize local brand owners by helping showcase their
              products to a wider audience. By promoting awareness of
              locally available products, we aim to support businesses
              and contribute to the growth of the local marketplace.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="rounded-2xl border border-gray-100 bg-gray-50 p-7 sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <ShoppingBag size={25} />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              A Better Shopping Experience
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              As online shopping continues to evolve, we strive to improve
              our platform and deliver a smooth, user-friendly experience
              across devices. Our aim is to make discovering products
              and connecting with sellers simple and convenient.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              What Matters to Us
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Shopping with a purpose
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Everything we do is guided by our commitment to customers,
              local businesses, and a better online shopping experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gray-900 px-6 py-12 text-center text-white sm:px-12 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Discover eshop.lk
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Find something you love. Support something local.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-300">
            Explore products and discover what Sri Lankan businesses
            have to offer.
          </p>

          <a
            href="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-orange-600 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-700"
          >
            Start Shopping
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Aboutus;