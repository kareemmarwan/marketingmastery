import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "	مكتوب بلغة عربية واضحة وبسيطة وسهلة الفهم.",
//     answer:
//       "ستحصل على ملف PDF عالي الجودة مهيأ للقراءة على جميع الأجهزة، بالإضافة إلى صيغ EPUB وMOBI لتناسب أجهزة القراءة المختلفة."
//   },
//   {
//     question: "	عملي 100% (لا نظريات ولا حشو).",
//     answer:
//       "ستحصل على ملف PDF عالي الجودة مهيأ للقراءة على جميع الأجهزة، بالإضافة إلى صيغ EPUB وMOBI لتناسب أجهزة القراءة المختلفة."
//   },
//   {
//     question: "	مناسب للتطبيق في كل الدول العربية. ",
//     answer:
//       "نعم، يتضمن الكتاب شرحًا عمليًا لأهم الأدوات الرقمية مثل Google Ads، Facebook Ads، وتحليلات البيانات لتطبيق استراتيجيات التسويق بشكل مباشر."
//   },
//   {
//     question: "	يمكن تطبيقه فورًا حتى لو كنت مبتدئًا.",
//     answer:
//       "الرخصة مخصصة لمستخدم واحد. إذا رغبت بشراء رخصة جماعية لعدة مستخدمين، يمكنك التواصل معنا للحصول على خصم خاص للفريق."
//   },
//   {
//     question: "	مبني على تجارب واقعية وأمثلة حقيقية ",
//     answer:
//       "نعم، يتناول الكتاب استراتيجيات تحسين المبيعات الرقمية، زيادة التفاعل مع العملاء، وتحليل نتائج الحملات لتحقيق أفضل عائد استثمار."
//   }
// ];

const faqs = [
  {
    question: "	مكتوب بلغة عربية واضحة وبسيطة وسهلة الفهم.",
    answer:
      "تمت كتابة المحتوى بأسلوب عربي سلس وخالٍ من التعقيد والمصطلحات الصعبة، مع شرح كل فكرة خطوة بخطوة وأمثلة توضيحية تساعدك على الفهم السريع والتطبيق دون الحاجة لأي خلفية مسبقة."
  },
  {
    question: "	عملي 100% (لا نظريات ولا حشو).",
    answer:
      "الكتاب يركز على التطبيق العملي فقط، حيث ستتعلم ما يجب عليك فعله بالضبط في كل مرحلة، مع خطوات واضحة، أدوات جاهزة، ونماذج عملية يمكنك استخدامها مباشرة دون إضاعة الوقت في النظريات."
  },
  {
    question: "	مناسب للتطبيق في كل الدول العربية. ",
    answer:
      "تم تصميم المحتوى ليستناسب جميع الأسواق العربية دون استثناء، مع مراعاة اختلاف الثقافات وأساليب الشراء، مما يجعله قابلًا للتطبيق سواء كنت تعمل محليًا أو تستهدف جمهورًا عربيًا واسعًا."
  },
  {
    question: "	يمكن تطبيقه فورًا حتى لو كنت مبتدئًا.",
    answer:
      "لا تحتاج لأي خبرة سابقة، فالكتاب يبدأ معك من الأساسيات ثم ينتقل تدريجيًا إلى التطبيق العملي، مما يمكنك من البدء فورًا وتنفيذ الأفكار خطوة بخطوة بثقة ووضوح."
  },
  {
    question: "	مبني على تجارب واقعية وأمثلة حقيقية ",
    answer:
      "جميع الشروحات مبنية على تجارب حقيقية وأمثلة عملية من السوق، مع حالات واقعية توضح ما ينجح وما يجب تجنبه، لتتعلم من الخبرة الفعلية وليس من الافتراضات."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      dir="rtl" // اتجاه عربي كامل
      className="py-24 bg-primary text-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center mb-12">
          الأسئلة الشائعة
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm "
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex flex-row justify-between items-center p-6 text-right hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-white/70 leading-relaxed text-right">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
