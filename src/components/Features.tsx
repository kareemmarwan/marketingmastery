import { motion } from "framer-motion";
// import { Palette, Layout, Type, Smartphone, Zap, Award } from "lucide-react";
import {
  Lightbulb,     // فكرة
  DollarSign,    // رأس مال / مال
  Tag,           // تسعير
  CalendarDays,  // خطة زمنية
  Megaphone,     // تسويق
  AlertTriangle  // أخطاء
} from "lucide-react";

// const features = [
//   {
//     icon: Palette,
//     title: " كيف تختار فكرة مشروع مناسبة لك ",
//     description:
//       "تتعلم طريقة اختيار فكرة مشروع تناسب إمكانياتك الحالية ووقتك وخبرتك، مع معايير واضحة تساعدك على تجنب الأفكار الخاطئة والتركيز على مشروع قابل للتنفيذ والربح."
//   },
//   {
//     icon: Layout,
//     title: "مشاريع مجرّبة برأس مال 100–500$",
//     description:
//       "ستتعرف على نماذج مشاريع حقيقية تم تنفيذها برأس مال بسيط، مع شرح كيفية البدء خطوة بخطوة واستغلال الميزانية المحدودة لتحقيق نتائج فعلية."
//   },
//   {
//     icon: Type,
//     title: "كيفية التسعير دون خسارة.",
//     description:
//       "شرح عملي لكيفية تحديد سعر المنتج أو الخدمة بشكل يضمن لك الربح دون المبالغة أو الخسارة، مع أمثلة تساعدك على اتخاذ قرار تسعير ذكي."
//   },
//   {
//     icon: Smartphone,
//     title: " خطة 30 يوم عملية للربح",
//     description:
//       "خطة واضحة لمدة 30 يومًا توضح لك ما يجب فعله يومًا بيوم للبدء في تحقيق أول دخل، دون تعقيد أو خطوات غير ضرورية."
//   },
//   {
//     icon: Zap,
//     title: " أدوات تسويق بسيطة بدون إعلانات مدفوعة",
//     description:
//       "تعرف على أدوات وأساليب تسويق مجانية وبسيطة تساعدك على الوصول إلى العملاء وبناء أول قاعدة جمهور دون الحاجة لدفع أموال على الإعلانات."
//   },
//   {
//     icon: Award,
//     title: " أخطاء قاتلة يجب تجنبها منذ اليوم الأول",
//     description:
//       "ستتعلم أهم الأخطاء الشائعة التي يقع فيها المبتدئون وكيفية تجنبها من البداية، مما يوفر عليك الوقت والمال ويزيد فرص نجاح مشروعك."
//   }
// ];
const features = [
  {
    icon: Lightbulb,
    title: " كيف تختار فكرة مشروع مناسبة لك ",
    description:
      "تتعلم طريقة اختيار فكرة مشروع تناسب إمكانياتك الحالية ووقتك وخبرتك، مع معايير واضحة تساعدك على تجنب الأفكار الخاطئة والتركيز على مشروع قابل للتنفيذ والربح."
  },
  {
    icon: Lightbulb, title: "مشاريع مجرّبة برأس مال 100–500$",
    description:
      "ستتعرف على نماذج مشاريع حقيقية تم تنفيذها برأس مال بسيط، مع شرح كيفية البدء خطوة بخطوة واستغلال الميزانية المحدودة لتحقيق نتائج فعلية."
  },
  {
    icon: Lightbulb, title: "كيفية التسعير دون خسارة.",
    description:
      "شرح عملي لكيفية تحديد سعر المنتج أو الخدمة بشكل يضمن لك الربح دون المبالغة أو الخسارة، مع أمثلة تساعدك على اتخاذ قرار تسعير ذكي."
  },
  {
    icon: Lightbulb, title: " خطة 30 يوم عملية للربح",
    description:
      "خطة واضحة لمدة 30 يومًا توضح لك ما يجب فعله يومًا بيوم للبدء في تحقيق أول دخل، دون تعقيد أو خطوات غير ضرورية."
  },
  {
    icon: Lightbulb, title: " أدوات تسويق بسيطة بدون إعلانات مدفوعة",
    description:
      "تعرف على أدوات وأساليب تسويق مجانية وبسيطة تساعدك على الوصول إلى العملاء وبناء أول قاعدة جمهور دون الحاجة لدفع أموال على الإعلانات."
  },
  {
    icon: Lightbulb, title: " أخطاء قاتلة يجب تجنبها منذ اليوم الأول",
    description:
      "ستتعلم أهم الأخطاء الشائعة التي يقع فيها المبتدئون وكيفية تجنبها من البداية، مما يوفر عليك الوقت والمال ويزيد فرص نجاح مشروعك."
  }
];


export function Features() {
  return (
    <section
      id="features"
      dir="rtl" // اتجاه عربي
      className="py-24 bg-secondary/50 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* العنوان */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-wider text-sm mb-4 block"
          >
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            هل تحلم بمشروعك الخاص لكن رأس المال يقف في طريقك؟          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            هذا الكتاب صُمم خصيصًا لك إذا كنت طالبًا أو في بداية طريقك، تمتلك دخلًا محدودًا، تبحث عن مشروع واقعي قابل للتنفيذ، وتريد البدء فورًا بدون تعقيد أو مخاطرة عالية.
          </motion.p>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-wider text-sm mb-4 block"
          >
            ماذا ستتعلم في الكتاب
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            {/* كل ما تحتاجه لتصبح مسوقًا محترفًا */}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            {/* دليل شامل يحتوي على استراتيجيات تسويقية مجربة، نصائح عملية، وأمثلة واقعية لزيادة المبيعات وتحقيق النجاح الرقمي. */}
          </motion.p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group text-right"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-display font-bold text-primary mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
