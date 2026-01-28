"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'es' | 'fr' | 'zh' | 'ja' | 'ar';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
];

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': {
    en: 'Home',
    de: 'Startseite',
    es: 'Inicio',
    fr: 'Accueil',
    zh: '首页',
    ja: 'ホーム',
    ar: 'الرئيسية',
  },
  'nav.about': {
    en: 'About',
    de: 'Über uns',
    es: 'Acerca de',
    fr: 'À propos',
    zh: '关于',
    ja: '概要',
    ar: 'حول',
  },
  'nav.attorney': {
    en: 'Attorney Bio',
    de: 'Anwalt Bio',
    es: 'Biografía del Abogado',
    fr: 'Bio Avocat',
    zh: '律师简介',
    ja: '弁護士のプロフィール',
    ar: 'سيرة المحامي',
  },
  'nav.practice': {
    en: 'Practice Areas',
    de: 'Rechtsgebiete',
    es: 'Áreas de Práctica',
    fr: 'Domaines de Pratique',
    zh: '业务领域',
    ja: '業務分野',
    ar: 'مجالات الممارسة',
  },
  'nav.testimonials': {
    en: 'Testimonials',
    de: 'Referenzen',
    es: 'Testimonios',
    fr: 'Témoignages',
    zh: '客户评价',
    ja: 'お客様の声',
    ar: 'شهادات',
  },
  'nav.faqs': {
    en: 'FAQs',
    de: 'Häufige Fragen',
    es: 'Preguntas Frecuentes',
    fr: 'FAQ',
    zh: '常见问题',
    ja: 'よくある質問',
    ar: 'الأسئلة الشائعة',
  },
  'nav.blog': {
    en: 'Blog',
    de: 'Blog',
    es: 'Blog',
    fr: 'Blog',
    zh: '博客',
    ja: 'ブログ',
    ar: 'مدونة',
  },
  'nav.contact': {
    en: 'Contact Us',
    de: 'Kontakt',
    es: 'Contáctenos',
    fr: 'Contactez-nous',
    zh: '联系我们',
    ja: 'お問い合わせ',
    ar: 'اتصل بنا',
  },
  'nav.clientPortal': {
    en: 'Client Portal',
    de: 'Mandantenportal',
    es: 'Portal de Clientes',
    fr: 'Portail Client',
    zh: '客户门户',
    ja: 'クライアントポータル',
    ar: 'بوابة العملاء',
  },
  'nav.viewAllPractice': {
    en: 'View All Practice Areas',
    de: 'Alle Rechtsgebiete ansehen',
    es: 'Ver todas las áreas',
    fr: 'Voir tous les domaines',
    zh: '查看所有业务领域',
    ja: 'すべての業務分野を見る',
    ar: 'عرض جميع المجالات',
  },

  // CTA Buttons
  'cta.contactForm': {
    en: 'Fill Out the Contact Form',
    de: 'Kontaktformular ausfüllen',
    es: 'Complete el formulario de contacto',
    fr: 'Remplir le formulaire de contact',
    zh: '填写联系表格',
    ja: 'お問い合わせフォームに記入',
    ar: 'املأ نموذج الاتصال',
  },
  'cta.callUs': {
    en: 'Call (239) 821-6504',
    de: 'Anrufen: (239) 821-6504',
    es: 'Llamar (239) 821-6504',
    fr: 'Appeler (239) 821-6504',
    zh: '致电 (239) 821-6504',
    ja: '電話する (239) 821-6504',
    ar: 'اتصل (239) 821-6504',
  },
  'cta.getInTouch': {
    en: 'Get in Touch',
    de: 'Kontakt aufnehmen',
    es: 'Ponerse en contacto',
    fr: 'Nous contacter',
    zh: '联系我们',
    ja: 'お問い合わせ',
    ar: 'تواصل معنا',
  },
  'cta.scheduleConsultation': {
    en: 'Schedule a Consultation',
    de: 'Beratung vereinbaren',
    es: 'Programar una consulta',
    fr: 'Planifier une consultation',
    zh: '预约咨询',
    ja: '相談を予約する',
    ar: 'حدد موعداً للاستشارة',
  },
  'cta.learnMore': {
    en: 'Learn More',
    de: 'Mehr erfahren',
    es: 'Más información',
    fr: 'En savoir plus',
    zh: '了解更多',
    ja: '詳細を見る',
    ar: 'اعرف المزيد',
  },

  // Footer
  'footer.contact': {
    en: 'Contact',
    de: 'Kontakt',
    es: 'Contacto',
    fr: 'Contact',
    zh: '联系方式',
    ja: '連絡先',
    ar: 'اتصل',
  },
  'footer.hours': {
    en: 'Hours',
    de: 'Öffnungszeiten',
    es: 'Horario',
    fr: 'Horaires',
    zh: '营业时间',
    ja: '営業時間',
    ar: 'ساعات العمل',
  },
  'footer.byAppointment': {
    en: 'By Appointment Only',
    de: 'Nur nach Terminvereinbarung',
    es: 'Solo con cita previa',
    fr: 'Sur rendez-vous uniquement',
    zh: '仅限预约',
    ja: '予約制',
    ar: 'بموعد مسبق فقط',
  },
  'footer.connect': {
    en: 'Connect',
    de: 'Verbinden',
    es: 'Conectar',
    fr: 'Connecter',
    zh: '联系',
    ja: '接続',
    ar: 'تواصل',
  },
  'footer.helpDesign': {
    en: 'Let us help you design your path to success in the United States.',
    de: 'Lassen Sie uns Ihnen helfen, Ihren Weg zum Erfolg in den USA zu gestalten.',
    es: 'Permítanos ayudarle a diseñar su camino hacia el éxito en los Estados Unidos.',
    fr: 'Laissez-nous vous aider à concevoir votre chemin vers le succès aux États-Unis.',
    zh: '让我们帮助您规划在美国的成功之路。',
    ja: 'アメリカでの成功への道を一緒に設計しましょう。',
    ar: 'دعنا نساعدك في تصميم طريقك نحو النجاح في الولايات المتحدة.',
  },
  'footer.quickLinks': {
    en: 'Quick Links',
    de: 'Schnelllinks',
    es: 'Enlaces rápidos',
    fr: 'Liens rapides',
    zh: '快速链接',
    ja: 'クイックリンク',
    ar: 'روابط سريعة',
  },
  'footer.privacyPolicy': {
    en: 'Privacy Policy',
    de: 'Datenschutzrichtlinie',
    es: 'Política de privacidad',
    fr: 'Politique de confidentialité',
    zh: '隐私政策',
    ja: 'プライバシーポリシー',
    ar: 'سياسة الخصوصية',
  },
  'footer.terms': {
    en: 'Terms & Conditions',
    de: 'Allgemeine Geschäftsbedingungen',
    es: 'Términos y condiciones',
    fr: 'Conditions générales',
    zh: '条款和条件',
    ja: '利用規約',
    ar: 'الشروط والأحكام',
  },
  'footer.accessibility': {
    en: 'Accessibility',
    de: 'Barrierefreiheit',
    es: 'Accesibilidad',
    fr: 'Accessibilité',
    zh: '无障碍',
    ja: 'アクセシビリティ',
    ar: 'إمكانية الوصول',
  },

  // Legal Disclaimers (Bar Compliance)
  'legal.attorneyAdvertising': {
    en: 'Attorney Advertising | Bar Complaint Information',
    de: 'Anwaltswerbung | Informationen zur Kammer­beschwerde',
    es: 'Publicidad de Abogados | Información de quejas del Colegio',
    fr: 'Publicité d\'avocat | Informations sur les plaintes au Barreau',
    zh: '律师广告 | 律师协会投诉信息',
    ja: '弁護士広告 | 弁護士会苦情情報',
    ar: 'إعلان المحامي | معلومات شكاوى نقابة المحامين',
  },
  'legal.floridaBarComplaints': {
    en: 'Florida Bar Complaints',
    de: 'Beschwerden bei der Florida Bar',
    es: 'Quejas del Colegio de Abogados de Florida',
    fr: 'Plaintes au Barreau de Floride',
    zh: '佛罗里达律师协会投诉',
    ja: 'フロリダ弁護士会への苦情',
    ar: 'شكاوى نقابة المحامين في فلوريدا',
  },
  'legal.minnesotaBarComplaints': {
    en: 'Minnesota Bar Complaints',
    de: 'Beschwerden bei der Minnesota Bar',
    es: 'Quejas del Colegio de Abogados de Minnesota',
    fr: 'Plaintes au Barreau du Minnesota',
    zh: '明尼苏达律师协会投诉',
    ja: 'ミネソタ弁護士会への苦情',
    ar: 'شكاوى نقابة المحامين في مينيسوتا',
  },
  'legal.hiringDecision': {
    en: 'The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Before you decide, ask us to send you free written information about our qualifications and experience.',
    de: 'Die Beauftragung eines Anwalts ist eine wichtige Entscheidung, die nicht allein auf der Grundlage von Werbung getroffen werden sollte. Bevor Sie sich entscheiden, bitten Sie uns, Ihnen kostenlose schriftliche Informationen über unsere Qualifikationen und Erfahrungen zu senden.',
    es: 'La contratación de un abogado es una decisión importante que no debe basarse únicamente en anuncios. Antes de decidir, pídanos que le enviemos información escrita gratuita sobre nuestras cualificaciones y experiencia.',
    fr: 'L\'engagement d\'un avocat est une décision importante qui ne doit pas reposer uniquement sur la publicité. Avant de décider, demandez-nous de vous envoyer des informations écrites gratuites sur nos qualifications et notre expérience.',
    zh: '聘请律师是一项重要决定，不应仅基于广告。在做出决定之前，请要求我们向您发送有关我们资质和经验的免费书面信息。',
    ja: '弁護士の選任は重要な決定であり、広告だけに基づくべきではありません。決定する前に、私たちの資格と経験に関する無料の書面情報を送るようお申し付けください。',
    ar: 'توظيف محامٍ قرار مهم لا ينبغي أن يستند فقط إلى الإعلانات. قبل أن تقرر، اطلب منا إرسال معلومات مكتوبة مجانية حول مؤهلاتنا وخبراتنا.',
  },
  'legal.floridaBarContact': {
    en: 'Complaints may be filed with the Florida Bar by calling toll-free 1-866-352-0707 or visiting',
    de: 'Beschwerden können bei der Florida Bar eingereicht werden unter der gebührenfreien Nummer 1-866-352-0707 oder unter',
    es: 'Las quejas pueden presentarse ante el Colegio de Abogados de Florida llamando al número gratuito 1-866-352-0707 o visitando',
    fr: 'Les plaintes peuvent être déposées auprès du Barreau de Floride en appelant le numéro gratuit 1-866-352-0707 ou en visitant',
    zh: '可以通过拨打免费电话 1-866-352-0707 或访问以下网站向佛罗里达律师协会提出投诉',
    ja: 'フリーダイヤル1-866-352-0707に電話するか、以下のサイトにアクセスして、フロリダ弁護士会に苦情を申し立てることができます',
    ar: 'يمكن تقديم الشكاوى إلى نقابة المحامين في فلوريدا عن طريق الاتصال بالرقم المجاني 1-866-352-0707 أو زيارة',
  },
  'legal.minnesotaBarContact': {
    en: 'Complaints may be filed with the Minnesota Board of Professional Responsibility by calling 1-800-657-3600 or visiting',
    de: 'Beschwerden können beim Minnesota Board of Professional Responsibility eingereicht werden unter 1-800-657-3600 oder unter',
    es: 'Las quejas pueden presentarse ante la Junta de Responsabilidad Profesional de Minnesota llamando al 1-800-657-3600 o visitando',
    fr: 'Les plaintes peuvent être déposées auprès du Board of Professional Responsibility du Minnesota en appelant le 1-800-657-3600 ou en visitant',
    zh: '可以通过拨打 1-800-657-3600 或访问以下网站向明尼苏达州职业责任委员会提出投诉',
    ja: '1-800-657-3600に電話するか、以下のサイトにアクセスして、ミネソタ州職業責任委員会に苦情を申し立てることができます',
    ar: 'يمكن تقديم الشكاوى إلى مجلس المسؤولية المهنية في مينيسوتا عن طريق الاتصال بالرقم 1-800-657-3600 أو زيارة',
  },

  // Form Disclaimer
  'legal.formDisclaimer': {
    en: 'Submitting this form does not create an attorney-client relationship. Please do not send confidential information until a formal engagement is confirmed.',
    de: 'Das Absenden dieses Formulars begründet kein Mandatsverhältnis. Bitte senden Sie keine vertraulichen Informationen, bis eine formelle Beauftragung bestätigt wurde.',
    es: 'El envío de este formulario no crea una relación abogado-cliente. No envíe información confidencial hasta que se confirme un compromiso formal.',
    fr: 'La soumission de ce formulaire ne crée pas de relation avocat-client. Veuillez ne pas envoyer d\'informations confidentielles avant qu\'un engagement formel ne soit confirmé.',
    zh: '提交此表格不会建立律师-客户关系。在正式委托确认之前，请勿发送机密信息。',
    ja: 'このフォームの送信は弁護士とクライアントの関係を作成しません。正式な契約が確認されるまで、機密情報を送信しないでください。',
    ar: 'إرسال هذا النموذج لا ينشئ علاقة محامي-موكل. يرجى عدم إرسال معلومات سرية حتى يتم تأكيد التعاقد الرسمي.',
  },

  // Testimonial Disclaimer
  'legal.testimonialDisclaimer': {
    en: 'These testimonials reflect the personal experiences of individual clients. Results vary based on the specific facts and circumstances of each case. Past results do not guarantee future outcomes.',
    de: 'Diese Erfahrungsberichte spiegeln die persönlichen Erfahrungen einzelner Mandanten wider. Ergebnisse variieren je nach den spezifischen Umständen jedes Falls. Frühere Ergebnisse garantieren keine zukünftigen Resultate.',
    es: 'Estos testimonios reflejan las experiencias personales de clientes individuales. Los resultados varían según los hechos y circunstancias específicos de cada caso. Los resultados pasados no garantizan resultados futuros.',
    fr: 'Ces témoignages reflètent les expériences personnelles de clients individuels. Les résultats varient en fonction des faits et circonstances spécifiques de chaque cas. Les résultats passés ne garantissent pas les résultats futurs.',
    zh: '这些证言反映了个别客户的个人经历。结果因每个案件的具体事实和情况而异。过去的结果不能保证未来的结果。',
    ja: 'これらの推薦文は個々のクライアントの個人的な経験を反映しています。結果は各ケースの特定の事実と状況によって異なります。過去の結果は将来の結果を保証するものではありません。',
    ar: 'تعكس هذه الشهادات التجارب الشخصية للعملاء الأفراد. تختلف النتائج بناءً على الحقائق والظروف المحددة لكل حالة. النتائج السابقة لا تضمن النتائج المستقبلية.',
  },

  // Results Disclaimer
  'legal.resultsDisclaimer': {
    en: 'Results depend on individual circumstances. No outcome is guaranteed.',
    de: 'Ergebnisse hängen von den individuellen Umständen ab. Kein Ergebnis wird garantiert.',
    es: 'Los resultados dependen de las circunstancias individuales. Ningún resultado está garantizado.',
    fr: 'Les résultats dépendent des circonstances individuelles. Aucun résultat n\'est garanti.',
    zh: '结果取决于个人情况。不保证任何结果。',
    ja: '結果は個々の状況によって異なります。結果は保証されません。',
    ar: 'تعتمد النتائج على الظروف الفردية. لا يُضمن أي نتيجة.',
  },

  // Jurisdiction Disclosure
  'legal.jurisdictionDisclosure': {
    en: 'Norma Henning is licensed to practice law in Florida and Minnesota.',
    de: 'Norma Henning ist als Anwältin in Florida und Minnesota zugelassen.',
    es: 'Norma Henning está licenciada para ejercer la abogacía en Florida y Minnesota.',
    fr: 'Norma Henning est autorisée à exercer le droit en Floride et au Minnesota.',
    zh: 'Norma Henning 获准在佛罗里达州和明尼苏达州执业。',
    ja: 'Norma Henningはフロリダ州とミネソタ州で弁護士資格を持っています。',
    ar: 'نورما هينينغ مرخص لها بممارسة المحاماة في فلوريدا ومينيسوتا.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && languages.some((lang) => lang.code === savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};