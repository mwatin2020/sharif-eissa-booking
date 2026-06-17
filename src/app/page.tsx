"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Star, 
  Compass, 
  DollarSign, 
  CheckCircle2, 
  Play, 
  Menu, 
  X,
  MessageSquare,
  Award,
  Sparkles,
  ShieldCheck,
  Flame
} from "lucide-react";

// Hotel Data
const hotels = [
  {
    id: 1,
    name: "سانت ريجيس القاهرة",
    englishName: "St. Regis Cairo",
    tagline: "Riverside Luxury - فخامة على ضفاف النيل",
    price: 320,
    rating: 5.0,
    image: "/st-regis.png",
    location: "وسط القاهرة، كورنيش النيل",
    features: ["إطلالة بانورامية كاملة على النيل", "خدمة خادم شخصي (Butler Service)", "مطاعم عالمية حائزة على جوائز", "سبا فاخر ونادٍ صحي متكامل"],
    whatsappMessage: "مرحباً شريف، أود الاستفسار عن أسعار وحجز غرف في فندق سانت ريجيس القاهرة."
  },
  {
    id: 2,
    name: "فيرمونت نايل سيتي",
    englishName: "Fairmont Nile City",
    tagline: "Rooftop Pool - مسبح معلق وإطلالة ساحرة",
    price: 210,
    rating: 4.9,
    image: "/fairmont.png",
    location: "أبراج نايل سيتي، القاهرة",
    features: ["أشهر مسبح معلق فوق سطح القاهرة", "تصميم عصري يدمج الفخامة بالراحة", "إطلالات نيلية خلابة وقت الغروب", "خيارات ترفيهية وحياة ليلية راقية"],
    whatsappMessage: "مرحباً شريف، أود الاستفسار عن أسعار وحجز غرف في فندق فيرمونت نايل سيتي."
  },
  {
    id: 3,
    name: "ماريوت عمر الخيام الزمالك",
    englishName: "Cairo Marriott Zamalek",
    tagline: "Historic Palace - قصر تاريخي عريق",
    price: 165,
    rating: 4.8,
    image: "/marriott.png",
    location: "حي الزمالك الراقي، القاهرة",
    features: ["الإقامة داخل قصر ملكي تاريخي", "حدائق ملكية شاسعة وهادئة وسط المدينة", "موقع متميز بقلب حي الزمالك الدبلوماسي", "أكثر من 15 خياراً لتناول الطعام"],
    whatsappMessage: "مرحباً شريف، أود الاستفسار عن أسعار وحجز غرف في فندق ماريوت الزمالك."
  },
  {
    id: 4,
    name: "سوفيتيل النيل الجزيرة",
    englishName: "Sofitel Nile El Gezirah",
    tagline: "French Luxury - اللمسة الفرنسية الأنيقة",
    price: 240,
    rating: 4.9,
    image: "/sofitel.png",
    location: "جزيرة الزمالك، القاهرة",
    features: ["موقع فريد على طرف جزيرة النيل", "تصميم فرنسي عصري بلمسات فرعونية", "مسبح نيلى لا متناهي (Infinity Pool)", "جميع الغرف تتميز بإطلالة مباشرة على النيل"],
    whatsappMessage: "مرحباً شريف، أود الاستفسار عن أسعار وحجز غرف في فندق سوفيتيل النيل الجزيرة."
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "أحمد بن عبد الله",
    country: "المملكة العربية السعودية",
    review: "تعامل راقٍ جداً وأسعار حصرية حقيقية. حجزت في سانت ريجيس القاهرة ووفرت أكثر من 20% مقارنة بالأسعار المعروضة أونلاين. شريف عيسى دائماً خياري الأول.",
    hotel: "سانت ريجيس القاهرة",
    videoThumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "د. ماجد العنزي",
    country: "الكويت",
    review: "الخدمة سريعة والرد فوري. حجزت في فيرمونت نايل سيتي وحصلت على ترقية مجانية للغرفة بفضل ترتيب الأستاذ شريف. أنصح بالتعامل معه بشدة.",
    hotel: "فيرمونت نايل سيتي",
    videoThumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "م. محمد المصري",
    country: "الإمارات",
    review: "كل شيء كان مرتباً وممتازاً. حجز سوفيتيل كان سلساً للغاية والأسعار لا تقارن. شكراً جزيلاً أستاذ شريف على حسن الاستقبال والاهتمام بجميع التفاصيل.",
    hotel: "سوفيتيل النيل الجزيرة",
    videoThumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const whatsappBaseUrl = "https://wa.me/201016273104";

  const getWhatsappUrl = (message: string) => {
    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-gold selection:text-background">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image 
              src="/header-logo.png" 
              alt="شريف عيسى - Sharif Eissa" 
              width={180} 
              height={55} 
              className="object-contain max-h-14 w-auto"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#hero" className="text-gray-300 hover:text-gold transition-colors">الرئيسية</a>
            <a href="#hotels" className="text-gray-300 hover:text-gold transition-colors">الفنادق المتاحة</a>
            <a href="#reviews" className="text-gray-300 hover:text-gold transition-colors">آراء النخبة</a>
            <a href="#features" className="text-gray-300 hover:text-gold transition-colors">لماذا نحن؟</a>
          </nav>

          {/* Header CTA */}
          <div className="hidden md:block">
            <a 
              href={getWhatsappUrl("مرحباً أستاذ شريف، أود الاستفسار عن حجز الفنادق المتاحة وأسعارها الحصرية.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-gold text-gold hover:bg-gold hover:text-background font-semibold transition-all duration-300 text-sm flex items-center gap-2"
            >
              <Phone size={14} />
              <span>اتصل بنا الآن</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-gold transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROP-DOWN */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 left-0 w-full bg-background border-b border-gold/10 z-30 py-6 px-4 flex flex-col gap-4 shadow-xl md:hidden"
        >
          <a 
            href="#hero" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-gold transition-colors py-2 border-b border-white/5 text-right font-medium"
          >
            الرئيسية
          </a>
          <a 
            href="#hotels" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-gold transition-colors py-2 border-b border-white/5 text-right font-medium"
          >
            الفنادق المتاحة
          </a>
          <a 
            href="#reviews" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-gold transition-colors py-2 border-b border-white/5 text-right font-medium"
          >
            آراء النخبة
          </a>
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-gold transition-colors py-2 border-b border-white/5 text-right font-medium"
          >
            لماذا نحن؟
          </a>
          
          <a 
            href={getWhatsappUrl("مرحباً أستاذ شريف، أود الاستفسار عن حجز الفنادق المتاحة وأسعارها الحصرية.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 rounded-full gold-btn-gradient text-background font-bold transition-all duration-300 flex items-center justify-center gap-2 mt-2"
          >
            <Phone size={16} />
            <span>احجز الآن عبر الواتساب</span>
          </a>
        </motion.div>
      )}

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-4">
        {/* Background Gradients and Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-navy-light/40 via-background to-background -z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Hero Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Image 
              src="/logo.jpg" 
              alt="شريف عيسى - Sharif Eissa" 
              width={480} 
              height={150} 
              className="object-contain w-64 sm:w-80 md:w-[420px] h-auto drop-shadow-[0_0_20px_rgba(197,160,89,0.2)]"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-8"
          >
            <Sparkles size={14} className="text-gold animate-pulse" />
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-wider">أسعار مباشرة وحصرية لعملاء النخبة</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white leading-tight sm:leading-tight mb-6"
          >
            احجز أفخم فنادق القاهرة <br />
            <span className="gold-gradient gold-glow">بأسعار حصرية</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10"
          >
            تجربة إقامة ملكية استثنائية في فنادق الـ 5 نجوم الأرقى المطلة على النيل. 
            احصل على خصومات حقيقية وحجوزات مباشرة ومضمونة عبر شريف عيسى.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4"
          >
            <a 
              href={getWhatsappUrl("مرحباً أستاذ شريف، أود الاستفسار عن حجز فنادق 5 نجوم في القاهرة بأسعار حصرية.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full gold-btn-gradient text-background font-bold text-lg transition-all duration-300 shadow-[0_4px_20px_rgba(197,160,89,0.3)] hover:shadow-[0_6px_25px_rgba(197,160,89,0.45)] flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
            >
              <MessageSquare size={20} className="fill-current" />
              <span>احجز الآن عبر الواتساب</span>
            </a>
            
            <a 
              href="#hotels"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold/40 text-white font-semibold text-lg hover:border-gold hover:bg-gold/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>استكشف الفنادق</span>
            </a>
          </motion.div>

          {/* Trust Factors */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 border-t border-gold/10 pt-8 w-full max-w-2xl text-center"
          >
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-gold font-serif">100%</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1 block">حجوزات مضمونة مباشرة</span>
            </div>
            <div className="border-x border-gold/10">
              <span className="block text-2xl sm:text-3xl font-extrabold text-gold font-serif">24/7</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1 block">دعم عملاء شخصي</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-gold font-serif">-25%</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1 block">توفير حصري مباشر</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS / FEATURES */}
      <section id="features" className="py-20 bg-card-bg/30 border-y border-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-gold uppercase tracking-wider">التميز في الخدمة</h2>
            <p className="text-3xl font-bold text-white mt-2">لماذا تحجز معنا؟</p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-card-bg/60 p-8 rounded-2xl border border-gold/10 hover:border-gold/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">أسعار حصرية حقيقية</h3>
              <p className="text-gray-400 leading-relaxed">
                علاقاتنا المباشرة والوطيدة مع إدارات الفنادق تمكننا من توفير أسعار خاصة ومميزات إضافية لا تتوفر على أي منصة حجز عامة أخرى.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-card-bg/60 p-8 rounded-2xl border border-gold/10 hover:border-gold/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">حجز مباشر وتأكيد فوري</h3>
              <p className="text-gray-400 leading-relaxed">
                لا وسطاء ولا إجراءات معقدة. يتم إرسال طلبك فوراً وتأكيد حجزك مع الفندق مباشرة مع إرسال رقم التأكيد الرسمي إليك.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-card-bg/60 p-8 rounded-2xl border border-gold/10 hover:border-gold/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">اهتمام شخصي بكافة التفاصيل</h3>
              <p className="text-gray-400 leading-relaxed">
                من لحظة استفسارك وحتى مغادرتك للفندق، ستحظى بمتابعة شخصية لتلبية طلباتك الخاصة مثل نوع الإطلالة، الغرف المتصلة، والمناسبات.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOTEL GRID SECTION */}
      <section id="hotels" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-3">
              <Flame size={12} className="text-gold" />
              <span className="text-gold text-xs font-semibold">باقة الصيف الأكثر طلباً</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">فنادق 5 نجوم المتاحة في القاهرة</h2>
            <p className="text-gray-400 mt-3">اختر وجهتك المفضلة، واضغط على زر التفاصيل للحجز المباشر بالخصم الحصري</p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {hotels.map((hotel) => (
              <motion.div 
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-card-bg rounded-3xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300 flex flex-col md:flex-row group"
              >
                {/* Hotel Image Container */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] overflow-hidden">
                  <Image 
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md border border-gold/30 px-3.5 py-1.5 rounded-full flex items-center gap-1">
                    <span className="text-xs text-gray-400">يبدأ من</span>
                    <span className="text-lg font-bold text-gold">${hotel.price}</span>
                    <span className="text-[10px] text-gray-400">/ ليلة</span>
                  </div>
                  {/* Feature Tag */}
                  <div className="absolute bottom-4 left-4 bg-gold px-3 py-1 rounded-lg text-background text-xs font-bold shadow-md">
                    معدل حصرى
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Header Details */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1 text-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className="fill-current" />
                        ))}
                        <span className="text-xs text-gray-400 mr-2">({hotel.rating})</span>
                      </div>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <MapPin size={12} className="text-gold" />
                        {hotel.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight">{hotel.name}</h3>
                    <p className="text-xs text-gold/80 font-medium tracking-wide mt-0.5 mb-4">{hotel.tagline}</p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-8">
                      {hotel.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-normal">
                          <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto">
                    <a 
                      href={getWhatsappUrl(hotel.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl border border-gold text-gold hover:bg-gold hover:text-background font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={16} />
                      <span>احجز الآن بـ ${hotel.price} بالواتساب</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIALS */}
      <section id="reviews" className="py-24 bg-card-bg/25 border-y border-gold/5 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-gold uppercase tracking-wider">آراء النخبة</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white mt-2">ماذا يقول عملاؤنا عنا؟</p>
            <p className="text-gray-400 mt-3">تجارب حقيقية لضيوفنا الكرام الذين استمتعوا بإقامة فاخرة بأسعار مميزة</p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          {/* Testimonial Cards & Video Playbacks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card-bg p-6 sm:p-8 rounded-3xl border border-gold/10 flex flex-col justify-between"
              >
                {/* User Content */}
                <div>
                  {/* Luxury Quote Icon */}
                  <span className="text-5xl font-serif text-gold/20 leading-none block -mb-4">“</span>
                  <p className="text-gray-300 text-sm leading-relaxed relative z-10 mb-6">
                    {t.review}
                  </p>
                </div>

                {/* Video Placeholder (Luxury Style) */}
                <div className="relative h-44 rounded-2xl overflow-hidden mb-6 group border border-gold/10 bg-black">
                  <Image 
                    src={t.videoThumbnail} 
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setActiveVideo(t.id)}
                      className="w-14 h-14 rounded-full bg-gold/90 hover:bg-gold text-background flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                    >
                      <Play size={20} className="fill-current translate-x-[-1px]" />
                    </button>
                  </div>
                  
                  {/* Tag on Video */}
                  <span className="absolute bottom-3 right-3 text-xs text-gold font-bold bg-background/95 px-2.5 py-1 rounded-md border border-gold/20">
                    تقرير بالفيديو من {t.hotel}
                  </span>
                </div>

                {/* Author Details */}
                <div className="flex items-center justify-between border-t border-gold/10 pt-4 mt-auto">
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <span className="text-xs text-gray-400 block mt-0.5">{t.country}</span>
                  </div>
                  <div className="bg-gold/10 border border-gold/20 px-3 py-1 rounded-full text-[10px] text-gold font-bold">
                    حجز مؤكد
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background text-gray-400 border-t border-gold/10 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">
          {/* Column 1 - Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image 
              src="/logo.jpg" 
              alt="شريف عيسى - Sharif Eissa" 
              width={180} 
              height={56} 
              className="object-contain max-h-16 w-auto"
            />
            <p className="text-sm text-gray-400 max-w-sm mt-2 leading-relaxed text-center md:text-right">
              حجوزات مباشرة ومعتمدة لدى أفضل فنادق الخمس نجوم في القاهرة. تواصل مباشر بدون وسطاء وبأقل الأسعار.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-lg mb-2">روابط سريعة</h4>
            <a href="#hero" className="hover:text-gold transition-colors text-sm">الرئيسية</a>
            <a href="#hotels" className="hover:text-gold transition-colors text-sm">الفنادق المتاحة</a>
            <a href="#reviews" className="hover:text-gold transition-colors text-sm">آراء النخبة</a>
            <a href="#features" className="hover:text-gold transition-colors text-sm">لماذا تحجز معنا؟</a>
          </div>

          {/* Column 3 - Contact details */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="text-white font-bold text-lg mb-2 w-full text-center md:text-right">بيانات التواصل</h4>
            <p className="text-sm flex items-center gap-2 justify-center md:justify-start w-full">
              <Phone size={16} className="text-gold" />
              <span dir="ltr" className="text-gray-300">+20 101 627 3104</span>
            </p>
            <p className="text-sm flex items-center gap-2 justify-center md:justify-start w-full">
              <span className="text-gold">★</span>
              <span className="text-gray-300">متاحون على مدار الساعة عبر الواتساب</span>
            </p>
            <a 
              href={getWhatsappUrl("مرحباً أستاذ شريف، أود الاستفسار عن تفاصيل الحجز الفوري.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-2.5 rounded-full gold-btn-gradient text-background font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              مراسلة فورية
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto border-t border-gold/10 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} شريف عيسى (sharifeissa.com). جميع الحقوق محفوظة.</p>
          <p className="mt-2">تصميم وتطوير راقٍ لفنادق الـ 5 نجوم في القاهرة.</p>
        </div>
      </footer>

      {/* VIDEO DIALOG MODAL (POPUP) */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-card-bg border border-gold/20 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-gold transition-colors z-10"
            >
              <X size={20} />
            </button>
            <div className="relative pt-[56.25%] bg-black">
              {/* Showcase dynamic placeholder video layout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full border-2 border-gold/40 flex items-center justify-center text-gold mb-4 animate-pulse">
                  <Play size={24} className="fill-current" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">فيديو تجربة العميل المتميزة</h4>
                <p className="text-sm text-gray-400 max-w-md">
                  تم تصوير هذا التقرير مباشرة من داخل فندق {testimonials.find(t => t.id === activeVideo)?.hotel} لعرض فخامة الغرف والإطلالة.
                </p>
                <div className="mt-6 flex gap-3">
                  <a 
                    href={getWhatsappUrl(`مرحباً أستاذ شريف، شاهدت تقرير الفيديو وأود الاستفسار عن عروض فندق ${testimonials.find(t => t.id === activeVideo)?.hotel}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full gold-btn-gradient text-background font-bold text-xs"
                  >
                    اسأل عن العروض المماثلة
                  </a>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="px-6 py-2 rounded-full border border-white/20 text-white text-xs hover:bg-white/5"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PERSISTENT FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={getWhatsappUrl("مرحباً أستاذ شريف، أود الاستفسار عن أسعار فنادق 5 نجوم بالقاهرة والحصول على العروض الحصرية المباشرة.")}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300"
        aria-label="Contact Sharif Eissa on WhatsApp"
        id="whatsapp-floating-button"
      >
        <svg 
          viewBox="0 0 448 512" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-117zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </motion.a>
    </div>
  );
}
