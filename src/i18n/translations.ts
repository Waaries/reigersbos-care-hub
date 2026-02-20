export type Language = "NL" | "EN" | "TW" | "YO" | "TR" | "AR";

export const languages: { code: Language; flag: string; label: string; rtl?: boolean }[] = [
  { code: "NL", flag: "🇳🇱", label: "Nederlands" },
  { code: "EN", flag: "🇬🇧", label: "English" },
  { code: "TW", flag: "🇬🇭", label: "Twi" },
  { code: "YO", flag: "🇳🇬", label: "Yoruba" },
  { code: "TR", flag: "🇹🇷", label: "Türkçe" },
  { code: "AR", flag: "🇲🇦", label: "العربية", rtl: true },
];

export type TranslationKey =
  // Hero
  | "hero.welcome"
  | "hero.tagline"
  | "hero.cta"
  // About
  | "about.heading"
  | "about.p1"
  | "about.p2"
  | "about.p3"
  | "about.cta"
  // Contact card
  | "contact.title"
  | "contact.hours.label"
  | "contact.hours.weekdays"
  | "contact.hours.weekend"
  | "contact.open"
  // Services
  | "services.label"
  | "services.heading"
  | "services.gp.title"
  | "services.gp.desc"
  | "services.physio.title"
  | "services.physio.desc"
  | "services.chronic.title"
  | "services.chronic.desc"
  // Navigation
  | "nav.huisartspraktijk"
  | "nav.fysiotherapie"
  | "nav.overigzorgaanbod"
  | "nav.onsteam"
  | "nav.vacatures"
  | "nav.contact"
  | "nav.poh_s"
  | "nav.poh_ggz"
  | "nav.praktijkassistente"
  | "nav.klachten"
  | "nav.omgangsregels"
  | "nav.privacyreglement"
  // Floating buttons
  | "btn.inschrijven"
  | "btn.herhaalrecept"
  | "btn.spoed"
  | "btn.fysiotherapie"
  // Footer
  | "footer.tagline"
  | "footer.hours.practice"
  | "footer.hours.physio"
  | "footer.hours.weekend"
  | "footer.medical_sites"
  | "footer.support"
  | "footer.news"
  | "footer.copyright";

type Translations = Record<Language, Record<TranslationKey, string>>;

export const translations: Translations = {
  NL: {
    "hero.welcome": "Welkom op onze website",
    "hero.tagline": "\"Because the greatest wealth is health\"",
    "hero.cta": "Schrijf je nu in",
    "about.heading": "Wie zijn wij! Reigersbos Medical Center",
    "about.p1": "Welkom bij Reigersbos Medical Center, een kleinschalige huisartspraktijk gelegen aan de Reigersbos 100K op de 3e etage. Wij streven naar persoonlijke en kwalitatieve zorg en werken nauw samen met onze fysiotherapeuten om u de beste zorg te bieden.",
    "about.p2": "Bij ons kunt u terecht voor diverse medische diensten, waaronder algemene huisartsenzorg, bloedafname, preventieve zorg en chronische zorg. Ons team van zorgverleners staat voor u klaar om u te helpen bij uw gezondheidsbehoeften en vragen.",
    "about.p3": "We begrijpen dat elke patiënt uniek is en daarom vinden wij het belangrijk om persoonlijke zorg te bieden die is afgestemd op uw individuele behoeften. Onze fysiotherapeuten werken nauw samen met onze huisartsen om u te helpen uw gezondheidsdoelen te bereiken.",
    "about.cta": "Schrijf u in als patiënt",
    "contact.title": "Contactgegevens",
    "contact.hours.label": "Openingstijden:",
    "contact.hours.weekdays": "Maandag - Vrijdag: 08:00 - 17:00",
    "contact.hours.weekend": "Zaterdag - Zondag: Gesloten",
    "contact.open": "✓ Open voor nieuwe patiënten",
    "services.label": "WAT WIJ BIEDEN",
    "services.heading": "Onze Diensten",
    "services.gp.title": "Huisarts",
    "services.gp.desc": "Voor al uw medische vragen en zorg",
    "services.physio.title": "Fysiotherapie",
    "services.physio.desc": "Moderne behandelingen, 30 min per sessie",
    "services.chronic.title": "Chronische Zorg",
    "services.chronic.desc": "Begeleiding bij langdurige aandoeningen",
    "nav.huisartspraktijk": "Huisartspraktijk",
    
    "nav.fysiotherapie": "Fysiotherapie",
    "nav.overigzorgaanbod": "Overig Zorgaanbod",
    "nav.onsteam": "Ons Team",
    "nav.vacatures": "Vacatures",
    "nav.contact": "Contact",
    "nav.poh_s": "POH-S",
    "nav.poh_ggz": "POH-GGZ",
    "nav.praktijkassistente": "Praktijkassistente",
    "nav.klachten": "Klachten",
    "nav.omgangsregels": "Omgangsregels",
    "nav.privacyreglement": "Privacyreglement",
    "btn.inschrijven": "Inschrijven",
    "btn.herhaalrecept": "Herhaalrecept",
    "btn.spoed": "SPOED",
    "btn.fysiotherapie": "Afspraak Fysiotherapie",
    
    "footer.tagline": "\"Because the greatest wealth is health\"",
    "footer.hours.practice": "Openingstijden praktijk",
    "footer.hours.physio": "Openingstijden fysiotherapie",
    "footer.hours.weekend": "Weekend op afspraak",
    "footer.medical_sites": "Medische websites",
    "footer.support": "Online ondersteuning",
    "footer.news": "Laatste nieuws",
    "footer.copyright": "Copyright © 2026 Reigersbos Medical Center | Powered by MWB Services",
  },
  EN: {
    "hero.welcome": "WELCOME TO OUR WEBSITE",
    "hero.tagline": "\"Because the greatest wealth is health\"",
    "hero.cta": "Register now",
    "about.heading": "Who are we? Reigersbos Medical Center",
    "about.p1": "Welcome to Reigersbos Medical Center, a small-scale general practice located at Reigersbos 100K on the 3rd floor. We strive for personal and quality care and work closely with our physiotherapists to provide you with the best care.",
    "about.p2": "With us you can go for various medical services, including general GP care, blood sampling, preventive care and chronic care. Our team of healthcare providers is ready to help you with your health needs and questions.",
    "about.p3": "We understand that every patient is unique and therefore we find it important to provide personal care tailored to your individual needs. Our physiotherapists work closely with our GPs to help you achieve your health goals.",
    "about.cta": "Register as a patient",
    "contact.title": "Contact Details",
    "contact.hours.label": "Opening hours:",
    "contact.hours.weekdays": "Monday - Friday: 08:00 - 17:00",
    "contact.hours.weekend": "Saturday - Sunday: Closed",
    "contact.open": "✓ Open for new patients",
    "services.label": "WHAT WE OFFER",
    "services.heading": "Our Services",
    "services.gp.title": "GP Care",
    "services.gp.desc": "For all your medical questions and care",
    "services.physio.title": "Physiotherapy",
    "services.physio.desc": "Modern treatments, 30 min per session",
    "services.chronic.title": "Chronic Care",
    "services.chronic.desc": "Guidance for long-term conditions",
    "nav.huisartspraktijk": "GP Practice",
    
    "nav.fysiotherapie": "Physiotherapy",
    "nav.overigzorgaanbod": "Other Care Services",
    "nav.onsteam": "Our Team",
    "nav.vacatures": "Vacancies",
    "nav.contact": "Contact",
    "nav.poh_s": "POH-S",
    "nav.poh_ggz": "POH-GGZ",
    "nav.praktijkassistente": "Practice Assistant",
    "nav.klachten": "Complaints",
    "nav.omgangsregels": "House Rules",
    "nav.privacyreglement": "Privacy Policy",
    "btn.inschrijven": "Register",
    "btn.herhaalrecept": "Repeat prescription",
    "btn.spoed": "EMERGENCY",
    "btn.fysiotherapie": "Physiotherapy",
    
    "footer.tagline": "\"Because the greatest wealth is health\"",
    "footer.hours.practice": "PRACTICE OPENING HOURS",
    "footer.hours.physio": "PHYSIOTHERAPY OPENING HOURS",
    "footer.hours.weekend": "Weekend by appointment",
    "footer.medical_sites": "Medical websites",
    "footer.support": "Online support",
    "footer.news": "Latest news",
    "footer.copyright": "Copyright © 2026 Reigersbos Medical Center | Powered by MWB Services",
  },
  TW: {
    "hero.welcome": "YƐ KÔ BRA WO HEN WEBSITE SO",
    "hero.tagline": "\"Efisem saa na ahoofe ne ahonya\"",
    "hero.cta": "Kɔ wo din ase",
    "about.heading": "Yɛn ho asɛm bɛn? Reigersbos Medical Center",
    "about.p1": "Akwaaba Reigersbos Medical Center, huhuduurɔ kɛseɛ bi a ɛwɔ Reigersbos 100K so, 3rd floor. Yɛpɛ saa kwan so sɛ yɛboa wo yiye wɔ wo yiye ho.",
    "about.p2": "Wo betumi aba yɛn hɔ ma yɛboa wo wɔ okurom aduru, mogya were ho, ne yadeɛ a ɛtena hɔ. Yɛn team wɔ hɔ sɛ yɛboa wo.",
    "about.p3": "Yɛhunu sɛ ɔyarefɔ biara yɛ onipa pa ara. Enti yɛpɛ sɛ yɛhyɛ wo ayɛ a ɛfata wo pɛpɛɛpɛ. Yɛn fysiotherapeuten yɛ adwuma ne yɛn adɔkono.",
    "about.cta": "Kɔ wo din ase sɛ ɔyarefɔ",
    "contact.title": "Kyer me Ho Nsɛm",
    "contact.hours.label": "Bere a yɛwɔ hɔ:",
    "contact.hours.weekdays": "Dwoada - Fiada: 08:00 - 17:00",
    "contact.hours.weekend": "Memeneda - Kwasida: Yɛatoa",
    "contact.open": "✓ Yɛgye mpanimfoɔ foforo",
    "services.label": "ƐDE BƐN A YƐDE BƐMA WO",
    "services.heading": "Yɛn Nnwuma",
    "services.gp.title": "Ɔdɔkono",
    "services.gp.desc": "Ma wo adwene nyinaa",
    "services.physio.title": "Honam Aduro",
    "services.physio.desc": "Nnwuma foforo, dɔnhwere 30",
    "services.chronic.title": "Yadeɛ a Ɛtena Hɔ",
    "services.chronic.desc": "Mmoa wɔ yadeɛ tenten mu",
    "nav.huisartspraktijk": "Ɔdɔkono Dwumadi",
    
    "nav.fysiotherapie": "Honam Aduro",
    "nav.overigzorgaanbod": "Ahofado Ahoɔden Mu",
    "nav.onsteam": "Yɛn Team",
    "nav.vacatures": "Adwuma",
    "nav.contact": "Kyer me",
    "nav.poh_s": "POH-S",
    "nav.poh_ggz": "POH-GGZ",
    "nav.praktijkassistente": "Ɔboafo",
    "nav.klachten": "Nsɛm",
    "nav.omgangsregels": "Mmara",
    "nav.privacyreglement": "Honam Nsɛm",
    "btn.inschrijven": "Din ase",
    "btn.herhaalrecept": "Dawuro bio",
    "btn.spoed": "BƆNE",
    "btn.fysiotherapie": "Honam",
    
    "footer.tagline": "\"Efisem saa na ahoofe ne ahonya\"",
    "footer.hours.practice": "Bere a Ɔdɔkono Wɔ Hɔ",
    "footer.hours.physio": "Bere a Honam Aduro Wɔ Hɔ",
    "footer.hours.weekend": "Dapɛn so wɔ apɔntɔ so",
    "footer.medical_sites": "Aduro Websites",
    "footer.support": "Mmoa Wɔ Intanɛt So",
    "footer.news": "Ɔkwan Foforɔ Nsɛm",
    "footer.copyright": "Copyright © 2026 Reigersbos Medical Center | Powered by MWB Services",
  },
  YO: {
    "hero.welcome": "E KU ABỌ SI ỌJỌ́ WA",
    "hero.tagline": "\"Nítorí ìlera ni ọrọ tòótọ́\"",
    "hero.cta": "Forúkọ sílẹ̀ báyìí",
    "about.heading": "Ta ni àwa? Reigersbos Medical Center",
    "about.p1": "Ẹ káàbọ̀ sí Reigersbos Medical Center, ile-iwosan kekere kan ti o wa ni Reigersbos 100K, ìpele kẹta. A ń gbiyanjú láti pèsè ìtọ́jú tí ó dára jùlọ fún ọ.",
    "about.p2": "A le ran ọ lọwọ pẹlu iṣẹ iṣoogun gbogboogbo, gbigba ẹjẹ, itọju idena ati itọju onibaje. Ẹgbẹ wa ti awọn olupese ilera wa lati ran ọ lọwọ.",
    "about.p3": "A mọ̀ pé gbogbo aláìsàn jẹ́ alailẹgbẹ. Nítorí náà, a wà níbí láti pèsè ìtọ́jú àdáni tí ó báamu àwọn àìní rẹ.",
    "about.cta": "Forúkọ sílẹ̀ gẹ́gẹ́ bí aláìsàn",
    "contact.title": "Àlàyé Ìbánisọ̀rọ̀",
    "contact.hours.label": "Àkókò Ṣíṣí:",
    "contact.hours.weekdays": "Ọjọ́ Àìkú - Ọjọ́ Ẹtì: 08:00 - 17:00",
    "contact.hours.weekend": "Ọjọ́ Àbámẹ́ta - Ọjọ́ Àìkú: Tì",
    "contact.open": "✓ A ṣí fún àwọn aláìsàn tuntun",
    "services.label": "ÀWỌ̀N TÍ A N PÈSẸ̀",
    "services.heading": "Àwọn Iṣẹ́ Wa",
    "services.gp.title": "Dọkita",
    "services.gp.desc": "Fun gbogbo ibeere iṣoogun rẹ",
    "services.physio.title": "Itọju ara",
    "services.physio.desc": "Awọn itọju ode oni, iṣẹju 30",
    "services.chronic.title": "Itọju Onibaje",
    "services.chronic.desc": "Itọsọna fun awọn ipo igba pipẹ",
    "nav.huisartspraktijk": "Iṣẹ Dọkita",
    
    "nav.fysiotherapie": "Itọju Ara",
    "nav.overigzorgaanbod": "Awọn Iṣẹ Ilera Miiran",
    "nav.onsteam": "Ẹgbẹ Wa",
    "nav.vacatures": "Awọn Iṣẹ",
    "nav.contact": "Kan Si",
    "nav.poh_s": "POH-S",
    "nav.poh_ggz": "POH-GGZ",
    "nav.praktijkassistente": "Olùrànlọ́wọ́",
    "nav.klachten": "Ẹdun",
    "nav.omgangsregels": "Àwọn Òfin",
    "nav.privacyreglement": "Àṣírí",
    "btn.inschrijven": "Forúkọ",
    "btn.herhaalrecept": "Oògùn lẹ́ẹ̀kan",
    "btn.spoed": "PAJAWIRI",
    "btn.fysiotherapie": "Itọju",
    
    "footer.tagline": "\"Nítorí ìlera ni ọrọ tòótọ́\"",
    "footer.hours.practice": "ÀKÓKÒ ṢÍṢÍ DỌKITA",
    "footer.hours.physio": "ÀKÓKÒ ṢÍṢÍ ITỌJU ARA",
    "footer.hours.weekend": "Ọjọ́ ìsinmi lórí àpèjẹ",
    "footer.medical_sites": "Àwọn Ìkànnì Ìṣoogun",
    "footer.support": "Ìrànlọ́wọ́ Alánìkànjọ̀pọ̀",
    "footer.news": "Ìròyìn Tuntun",
    "footer.copyright": "Copyright © 2026 Reigersbos Medical Center | Powered by MWB Services",
  },
  TR: {
    "hero.welcome": "WEBSİTEMİZE HOŞ GELDİNİZ",
    "hero.tagline": "\"Çünkü en büyük zenginlik sağlıktır\"",
    "hero.cta": "Şimdi kayıt ol",
    "about.heading": "Biz kimiz? Reigersbos Medical Center",
    "about.p1": "Reigersbos Medical Center'a hoş geldiniz, Reigersbos 100K, 3. katta yer alan küçük ölçekli bir aile hekimliği kliniğiyiz. Kişisel ve kaliteli bakım sunmaya çalışıyoruz.",
    "about.p2": "Genel aile hekimliği, kan alma, koruyucu bakım ve kronik bakım dahil çeşitli tıbbi hizmetler sunuyoruz. Sağlık ekibimiz ihtiyaçlarınız için her zaman hazır.",
    "about.p3": "Her hastanın benzersiz olduğunu anlıyoruz ve bu nedenle bireysel ihtiyaçlarınıza göre kişisel bakım sağlamayı önemli buluyoruz.",
    "about.cta": "Hasta olarak kayıt ol",
    "contact.title": "İletişim Bilgileri",
    "contact.hours.label": "Açılış saatleri:",
    "contact.hours.weekdays": "Pazartesi - Cuma: 08:00 - 17:00",
    "contact.hours.weekend": "Cumartesi - Pazar: Kapalı",
    "contact.open": "✓ Yeni hastalara açığız",
    "services.label": "NE SUNUYORUZ",
    "services.heading": "Hizmetlerimiz",
    "services.gp.title": "Aile Hekimi",
    "services.gp.desc": "Tüm tıbbi sorularınız için",
    "services.physio.title": "Fizyoterapi",
    "services.physio.desc": "Modern tedaviler, 30 dakika",
    "services.chronic.title": "Kronik Bakım",
    "services.chronic.desc": "Uzun süreli hastalıklarda rehberlik",
    "nav.huisartspraktijk": "Aile Hekimliği",
    
    "nav.fysiotherapie": "Fizyoterapi",
    "nav.overigzorgaanbod": "Diğer Sağlık Hizmetleri",
    "nav.onsteam": "Ekibimiz",
    "nav.vacatures": "İş İlanları",
    "nav.contact": "İletişim",
    "nav.poh_s": "POH-S",
    "nav.poh_ggz": "POH-GGZ",
    "nav.praktijkassistente": "Asistan",
    "nav.klachten": "Şikayetler",
    "nav.omgangsregels": "Kurallar",
    "nav.privacyreglement": "Gizlilik",
    "btn.inschrijven": "Kayıt",
    "btn.herhaalrecept": "Tekrar reçete",
    "btn.spoed": "ACİL",
    "btn.fysiotherapie": "Fizyoterapi",
    
    "footer.tagline": "\"Çünkü en büyük zenginlik sağlıktır\"",
    "footer.hours.practice": "KLİNİK AÇILIŞ SAATLERİ",
    "footer.hours.physio": "FİZYOTERAPİ AÇILIŞ SAATLERİ",
    "footer.hours.weekend": "Hafta sonu randevuyla",
    "footer.medical_sites": "Tıbbi web siteleri",
    "footer.support": "Çevrimiçi destek",
    "footer.news": "Son haberler",
    "footer.copyright": "Copyright © 2026 Reigersbos Medical Center | Powered by MWB Services",
  },
  AR: {
    "hero.welcome": "مرحباً بكم في موقعنا",
    "hero.tagline": "\"لأن أعظم ثروة هي الصحة\"",
    "hero.cta": "سجّل الآن",
    "about.heading": "من نحن؟ مركز رايخرسبوس الطبي",
    "about.p1": "مرحباً بكم في مركز رايخرسبوس الطبي، عيادة طب عام صغيرة تقع في رايخرسبوس 100K، الطابق الثالث. نسعى لتقديم رعاية شخصية وعالية الجودة.",
    "about.p2": "نقدم خدمات طبية متنوعة تشمل رعاية الطب العام، سحب الدم، الرعاية الوقائية والرعاية المزمنة. فريقنا مستعد لمساعدتك في جميع احتياجاتك الصحية.",
    "about.p3": "نفهم أن كل مريض فريد من نوعه، ولذلك نسعى لتقديم رعاية شخصية مصممة وفق احتياجاتك الفردية.",
    "about.cta": "سجّل كمريض",
    "contact.title": "بيانات الاتصال",
    "contact.hours.label": "ساعات العمل:",
    "contact.hours.weekdays": "الاثنين - الجمعة: 08:00 - 17:00",
    "contact.hours.weekend": "السبت - الأحد: مغلق",
    "contact.open": "✓ مفتوح لاستقبال مرضى جدد",
    "services.label": "ما نقدمه",
    "services.heading": "خدماتنا",
    "services.gp.title": "طبيب الأسرة",
    "services.gp.desc": "لجميع أسئلتك الطبية",
    "services.physio.title": "العلاج الطبيعي",
    "services.physio.desc": "علاجات حديثة، 30 دقيقة",
    "services.chronic.title": "الرعاية المزمنة",
    "services.chronic.desc": "توجيه للحالات طويلة الأمد",
    "nav.huisartspraktijk": "الممارسة العامة",
    
    "nav.fysiotherapie": "العلاج الطبيعي",
    "nav.overigzorgaanbod": "خدمات رعاية أخرى",
    "nav.onsteam": "فريقنا",
    "nav.vacatures": "الوظائف",
    "nav.contact": "اتصل بنا",
    "nav.poh_s": "POH-S",
    "nav.poh_ggz": "POH-GGZ",
    "nav.praktijkassistente": "المساعد",
    "nav.klachten": "الشكاوى",
    "nav.omgangsregels": "القواعد",
    "nav.privacyreglement": "الخصوصية",
    "btn.inschrijven": "تسجيل",
    "btn.herhaalrecept": "وصفة متكررة",
    "btn.spoed": "طوارئ",
    "btn.fysiotherapie": "علاج طبيعي",
    
    "footer.tagline": "\"لأن أعظم ثروة هي الصحة\"",
    "footer.hours.practice": "ساعات عمل العيادة",
    "footer.hours.physio": "ساعات العلاج الطبيعي",
    "footer.hours.weekend": "نهاية الأسبوع بموعد مسبق",
    "footer.medical_sites": "المواقع الطبية",
    "footer.support": "الدعم عبر الإنترنت",
    "footer.news": "آخر الأخبار",
    "footer.copyright": "حقوق النشر © 2026 مركز رايخرسبوس الطبي | بدعم من MWB Services",
  },
};
