import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      resources:{
          en: {
              translations: {
                "Overview dashboard": "Overview dashboard",
              }
          },
          ar: {
              translations: {
                "Overview":   "ناظر کلی",
                "Weekly Sales":   "نوبت های هفته",
                "Increased by":   "بیشتر شده",
                "Decreased by":   "کمترشده",
                "Weekly Orders":   "نوبت های هفتگی",
                "Visitors Online":   "بازدید کنندگان",
                "Visit And Sales Statistics":   "آمار های بازدید و فروش",
                "CHN":   "چین",
                "USA":   "آمریکا",
                "UK":   "بریتانیا",
                "Search Engines":   "متور های جستجو",
                "Direct Click":   "کلیک مستقیم",
                "Bookmarks Click":   "کلیک صفحاتذخیره شده",
                "Recent Tickets":   "نوبت های جدید",
                "Assignee":   "تعيين",
                "Subject":   "موضوع",
                "Status":   "موقعیت",
                "Last Update":   "آخرین به روز رسانی",
                "Tracking ID":   "نشانه ی پیگیری",
                "Fund is not recieved":   "لم يتم تلقي مربع",
                "DONE":   "هو فعل",
                "Dec":   "ديسمبر",
                "Stella Johnson":   "ستيلا جونسون",
                "High loading time":   "ارتفاع وقت التحميل",
                "PROGRESS":   "تقدم",
                "Marina Michel":   "مارينا ميشيل",
                "Website down for one week":   "الموقع لأسفل لمدة أسبوع واحد",
                "ON HOLD":   "أنا منتظر",
                "John Doe":   "فلان الفلاني",
                "Loosing control on server":   "فقدان تحكم الخادم",
                "REJECTED":   "غير مقبول",
                "Recent Updates":   "التحديثات الأخيرة",
                "October":   "شهر اكتوبر",
                "School Website":   "موقع المدرسة",
                "Authentication Module":   "وحدة المصادقة",
                "It is a long established fact that a reader will be distracted by the readable content of a page":   "إنها حقيقة ثابتة منذ فترة طويلة وهي أن القراء سوف يصرفهم المحتوى المقروء للصفحة",
                "Project Status":   "حالة المشروع",
                "Name":   "نون",
                "Due Date":   "تاريخ الاستحقاق",
                "Progress":   "تقدم",
                "Herman Beck":   "هيرمان بيك",
                "May":   "مايو",
                "Messsy Adam":   "آدم فوضوي",
                "Jul":   "يوليو",
                "John Richards":   "جون ريتشاردز",
                "Apr":   "أبريل",
                "Peter Meggik":   "بيتر ميجيك",
                "Edward":   "إدوارد",
                "Ronald":   "رونالد",
                "Add":   "حفظ",
                "jack Menqu":"جاك مينكو",
                "Traffic Sources":"مصادر حركة المرور",
                

                "Main":                         "الرئيسي",
                "Dashboard":                    "لوحة القيادة",
                "Widgets":                      "الحاجيات",
                "UI Elements":                  "عناصر واجهة المستخدم",
                "UI Features":                  "ميزات واجهة المستخدم",
                "Basic UI Elements":            "العناصر الأساسية",
                "Accordions":                   "أكورديون",
                "Buttons":                      "زر",
                "Badges":                       "شارات",
                "Breadcrumbs":                  "فتات الخبز",
                "Form Elements":                        "نماذج",
                "Data Representation":          "شرح البيانات",
                "Dropdowns":                    "قائِمة مُنْسَدِلة",
                "Modals":                       "الحوار",
                "Progress bar":                 "شريط التقدم",
                "Pagination":                   "ترقيم الصفحات",
                "Tabs":                         "علامات التبويب",
                "Typography":                   "الاسلوب والظهور",
                "Tooltips":                     "تلميح",
                "Advanced UI":                  "واجهة المستخدم المتقدمة",
                "Clipboard":                    "الحافظة",
                "Context menu":                 "قائمة السياق",
                "Sliders":                      "الانزلاق",
                "Carousel":                     "دائري",
                "Loaders":                      "رافعاتs",
                "Form elements":                "نماذج",
                "Basic Elements":               "عناصر النموذج",
                "Advanced Elements":            "العناصر المتقدمة",
                "Validation":                   "التحقق من صحة",
                "Wizard":                       "ساحر",
                "Editors":                      "المحررين",
                "Text Editor":                 "محرري النصوص",
                "Code Editor":                 "محرري الكود",
                "Charts":                       "الرسوم البيانية",
                "Tables":                       "الطاولةs",
                "Basic Table":                  "الجداول الأساسية",
                "Data Table":                   "جداول البيانات",
                "Sortable Table": "جدول قابل للفرز",
                "Popups":                       "يظهر فجأةs",
                "Notifications":                "إخطاراتs",
                "Icons":                        "الرموز",
                "Maps":                         "خرائط",
                "Sample Pages":                  "صفحات عينة",
                "User Pages":                   "صفحات المستخدم",
                "User Listing": "قائمة المستخدم",
                "Login":                        "تسجيل الدخول",
                "Login 2":                      " تسجيل الدخول 2 ",
                "Register":                     "سجل",
                "Register 2":                   " سجل 2 ",
                "Lockscreen":                   " قفل الشاشة ",
                "Error Pages":                  "صفحات خطأ",
                "General Pages":                "الصفحات العامة",
                "Blank Page":                   " صفحة فارغة ",
                "Profile":                      "الملف الشخصي ",
                "FAQ":"تعليمات",  
                "FAQ 2":                        " أسئلة مكررة 2 ",
                "News Grid":                    " شبكة الأخبار ",
                "Timeline":                     " الجدول الزمني ",
                "Search Results":               " نتائج البحث ",
                "Chats":                         " دردشة",
                "Tickets":                      " تذاكر ",
                "Gallery":                      " صالة عرض",
                "Todo List":                    "قوائم المهام",
                "E-commerce":                   "التجارة الإلكترونية",
                "Invoice":                      " فاتورة ",
                "Pricing":                " جدول التسعير ",
                "Apps":                 "تطبيقات",
                "E-mail":                       "البريد الإلكتروني",
                "Kanban Board" :"كانبان بورد",
                "Calendar":                     "التقويم",
                "Help":                         "مساعدة",
                "Documentation":                "توثيق",
                "David Greymaax":                  "ديفيد جريماكس",
                "Project Manager":"مدير المشروع",
                "Take Tour":                    "خذ جولة",
                "Log Out":                      "تسجيل خروج",
                "Gold Member": "عضو ذهبي",
                "Tree View":"عرض الشجرة",
                "Landing Page":"الصفحة المقصودة",
                "Product Catalogue":"بيان المنتج",
                "Project List":"قائمة المشروع",
                "Orders": "طلب",
                "Navigation":"قائمة طعام",
                "Account settings": "إعدادت الحساب",
                "Change Password":"تغيير كلمة السر",
                "To-do list":"حضر قائمة",
                "Richard V.Welsh":"ريتشارد ف. ولش",
                "Manager":"مدير",
                "New Project":"مشروع جديد",


                "Reports":"تقارير",
                "PDF":"بي دي إف",
                "doc":"وثيقة",
                "Projects":"وثيقة",
                "View Project":"عرض المشاريع",
                "Edit Project":"تحرير المشاريع",
                "English":"الإنجليزية",
                "Arabic":"عربى",
                "User Options":"خيارات المستخدم",
                "Actions":"عمل",
                "Lock Account":"قفل الحساب",
                "Messages":"رسائل",
                "Mark send you a message":"مارك يرسل لك رسالة",
                "Minutes ago":"منذ 1 دقيقة",
                "Cregh send you a message":"إنشاء نرسل لك رسالة",
                "Profile picture updated":"تحديث صورة ملفك الشخصي",
                "Update dashboard" : "تحديث لوحة القيادة",
                "new messages":"4 رسائل جديدة",
                "Event today":"حدث اليوم",
                "Just a reminder that you have an event today":"مجرد تذكير بأن لديك حدث اليوم",
                "Launch Admin":"تشغيل المسؤول",
                "New admin wow":"مشرف جديد واو!",
                "See all notifications":"اطلع على جميع الإشعارات",
                "Inbox" : "صندوق الوارد",
                "All rights reserved":"كل الحقوق محفوظة",
                "Hand-crafted":"الحرف اليدوية",
                "made with":"مصنوع من",
                "Copyright":"حقوق التأليف والنشر",
                "Settings":"الإعدادات",
                "Advanced settings":"إعدادات متقدمة",
                "Create New Project":"إنشاء مشروع جديد",
                "Software Development": "تطوير البرمجيات",
                "UI Development": "تطوير واجهة المستخدم",
                "Software Testing":"اختبار البرمجيات",
                "See all projects": "رؤية جميع المشاريع",
                "Manage Accounts":"ادارة الحساب",
                "Check Inbox":"تحقق من بريدك الوارد",
                "Sign Out":"خروج",
                "Score":"أحرز هدفا",
                "Schedule" : "الطاولة",
                "New": "جديد",
                "You have":"عندك",
                "Application Error": "خطأ في تطبيق",
                "Just now":"الان فقط",
                "View all": "عرض الكل",
                "Private message":"رسالة خاصة",
                "New user registration":"تسجيل مستخدم جديد",
                "days ago":"أيام مضت",
                "unread mails":"رسائل غير مقروءة",
                "Marian Garner":"ماريان غارنر",
                "The meeting is cancelled":"تم الغاء الاجتماع",
                "David Grey":"ديفيد جراي",
                "Travis Jenkins":"ترافيس جنكينز",
                "new notifications":"إخطارات جديدة",
                "Activity Log":"سجل الأنشطة",
                "Signout":"خروج",

                "Creating component page":"إنشاء صفحة المكون",
                "build a js based app":"بناء التطبيق على أساس JS",
                "Meeting with Alisa":"مقابلة مع اليسا",
                "Call Sarah Graves":"استدعاء سارة القبور",
                "FRIENDS":"اصحاب",
                "See All":"عرض الكل",
                "Thomas Douglas":"توماس دوغلاس",
                "Available":"متاح",
                "Catherine":"كاثرين",
                "min":"دقيق",
                "Daniel Russell":"دانيال راسل",
                "James Richardson":"جيمس ريتشاردسون",
                "Madeline Kennedy":"مادلين كينيدي",
                "Sarah Graves":"مقابر سارة",
                "Feb": "شهر فبراير"

            }
          }
      },
      fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
