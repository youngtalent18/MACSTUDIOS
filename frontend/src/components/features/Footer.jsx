import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
  FaInstagram as Instagram,
  FaFacebook as Facebook,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import mac from "/MAC STUDIOS.png?url";


// ============================================================
// ANIMATION VARIANTS
// ============================================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


// ============================================================
// FOOTER
// ============================================================

const Footer = () => {
  const phoneNumber = "0203629223";
  const whatsappNumber = "233203629223";

  return (
    <footer className="border-t border-white/10 bg-black text-white">

      {/* ======================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">

        {/* ====================================================
            FOOTER COLUMNS
        ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >

          {/* ==================================================
              BRAND
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >

            <Link
              to="/"
              className="inline-block"
            >
              <img
                src={mac}
                alt="MAC STUDIOS"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              We create bold visual stories through photography,
              videography, content creation, commercials, design
              and digital media.
            </p>


            {/* ================================================
                SOCIALS
            ================================================= */}

            <motion.div
              variants={containerVariants}
              className="mt-7 flex items-center gap-3"
            >

              {/* Instagram */}

              <motion.a
                variants={socialVariants}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Instagram size={18} />
              </motion.a>


              {/* Facebook */}

              <motion.a
                variants={socialVariants}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Facebook size={18} />
              </motion.a>


              {/* TikTok */}

              <motion.a
                variants={socialVariants}
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaTiktok size={17} />
              </motion.a>


              {/* YouTube */}

              <motion.a
                variants={socialVariants}
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaYoutube size={18} />
              </motion.a>

            </motion.div>

          </motion.div>


          {/* ==================================================
              QUICK LINKS
          ================================================== */}

          <motion.div variants={itemVariants}>

            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-white/60">

              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="transition-colors hover:text-white"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/booking"
                  className="transition-colors hover:text-white"
                >
                  Book a Session
                </Link>
              </li>

            </ul>

          </motion.div>


          {/* ==================================================
              SERVICES
          ================================================== */}

          <motion.div variants={itemVariants}>

            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Services
            </h3>

            <ul className="space-y-4 text-sm text-white/60">

              <li>Photography</li>
              <li>Videography</li>
              <li>Content Creation</li>
              <li>Skit Making</li>
              <li>Commercials</li>
              <li>Design & Printing</li>
              <li>Social Media Management</li>

            </ul>

          </motion.div>


          {/* ==================================================
              CONTACT
          ================================================== */}

          <motion.div variants={itemVariants}>

            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Contact
            </h3>

            <div className="space-y-5">

              {/* ==============================================
                  PHONE
              ============================================== */}

              <motion.a
                href={`tel:${phoneNumber}`}
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group flex items-start gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Phone size={16} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-white/35">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm text-white/75 transition group-hover:text-orange-500">
                    020 362 9223
                  </p>

                </div>

              </motion.a>


              {/* ==============================================
                  WHATSAPP
              ============================================== */}

              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group flex items-start gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <FaWhatsapp size={18} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-white/35">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-white/75 transition group-hover:text-orange-500">
                    Chat with us
                  </p>

                </div>

              </motion.a>


              {/* ==============================================
                  EMAIL
              ============================================== */}

              <motion.a
                href="mailto:info@macstudios.com"
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group flex items-start gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Mail size={16} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-white/35">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white/75 transition group-hover:text-orange-500">
                    info@macstudios.com
                  </p>

                </div>

              </motion.a>


              {/* ==============================================
                  LOCATION
              ============================================== */}

              <motion.div
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex items-start gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <MapPin size={16} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-white/35">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/75">
                    Ghana
                  </p>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </motion.div>


        {/* ====================================================
            CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Let's Create
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Have a project in mind?
              </h3>

              <p className="mt-2 text-sm text-white/50">
                Let's turn your ideas into something worth watching.
              </p>

            </div>


            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500/69 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >

              Start a Project

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />

            </Link>

          </div>

        </motion.div>

      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="border-t border-white/10"
      >

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/35 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">

          {/* Copyright */}

          <p>
            © {new Date().getFullYear()} MACSTUDIOS. All rights reserved.
          </p>


          {/* Designer */}

          <p>

            Designed by{" "}

            <a
              href="https://wa.me/233554373790"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 transition hover:text-white"
            >
              Codecraze | Stephen Anti
            </a>

          </p>


          {/* Legal */}

          <div className="flex items-center gap-5">

            <Link
              to="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>

          </div>

        </div>

      </motion.div>

    </footer>
  );
};

export default Footer;