"use client";

// import Categories from "@/components/_pages/home/Categories/Categories";
// import MarketBtn from "@/components/_pages/home/MarketButton";
// import ShoppingByCategory from "@/components/_pages/home/ShoppingByCategory/ShoppingByCategory";
import Footer from "@/components/layout/Footer/Footer";
import SmallDevicesFooter from "@/components/layout/Footer/SmallDevicesFooter";
import Header from "@/components/layout/Header/Header";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import Categories from "./(home)/home/components/Categories/Categories";
import MarketBtn from "./(home)/home/components/MarketButton";
import ShoppingByCategory from "./(home)/home/components/ShoppingByCategory/ShoppingByCategory";
import { useRouter } from "next/router";
import { useEffect } from "react";

// import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function page() {
  const { push } = useRouter();

  useEffect(() => {
    push("/home");
  }, []);

  return (
    <div className="bg-white dark:bg-[#2e2b27] flex flex-col justify-between min-h-screen">
      <Header />
      <main className="grow">
        <Categories />
        <div className="flex-1 z-50 lg:block hidden">
          <MarketBtn />
          <Link
            href="#"
            id="btn-back-to-top"
            className="rounded-full fixed bottom-[32px] right-[50px] me-3 z-50 flex items-center justify-center bg-red-500 text-white text-2xl w-12 h-12"
          >
            <BiSupport />
          </Link>
        </div>
        <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 px-5">
          <div className="flex flex-wrap">
            <a
              className="w-full block relative"
              target="_blank"
              style={{
                width: "calc(100% + 0px)",
                marginRight: "0px",
                marginTop: "0px",
              }}
            >
              <div>
                <div
                  className="h-full styles_Banner--d__24zzm"
                  style={{ borderRadius: "16px", lineHeight: "0" }}
                >
                  <img
                    className="w-full h-full styles_Banner__image__C8h94 inline-block"
                    src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a17381eef202b3f963bde5b80254ce9f9b1f57b9_1735717964.gif?x-oss-process=image"
                    alt="پارتنرشیپ-ری بن"
                    title="پارتنرشیپ-ری بن"
                    style={{ objectFit: "cover", borderRadius: "16px" }}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <ShoppingByCategory />
      </main>
      <footer>
        {/* <div className="grow">
          <div className="relative seo lg:ml-10 ml-0 text-neutral-500 text-body-2 overflow-hidden">
            <h1>
              <strong>
                فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
              </strong>
            </h1>

            <p>
              یک<strong> خرید</strong> اینترنتی مطمئن، نیازمند فروشگاهی است که
              بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی
              کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
              ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار
              کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
              <br />
              یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌
              اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان
              می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده
              کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار
              می‌دهد. هر یک&nbsp;از روش های ارسال دیجی کالا شرایط و ویژگی‌های
              خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده
              به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این
              فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های
              ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8
              نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری،
              دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای
              بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست
            </p>

            <p>کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</p>

            <p>
              تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود
              در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته
              و تمامی شبانه روز&nbsp;دیجی‌کالا که محصولات دارای تخفیف عالی
              می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی
              مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر
              مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در
              ادامه به معرفی آن‌ها می‌پردازیم که&nbsp;امکان{" "}
              <strong>ارسال امروز</strong> برای آن ها وجود دارد.&nbsp;
            </p>

            <p>
              دیجی کالا در جشنواره‌های سالیانه خود به طور معمول روی تمام دسته
              بندی‌های کالایی تخفیف‌های عالی قرار‌می‌دهد. به عنوان مثال در زمان{" "}
              <a href="https://www.digikala.com/landing/black-friday/">
                بلک فرایدی
              </a>{" "}
              یا حراج جمعه سیاه، در این سال‌ها بیشترین درصد تخفیف در اختیار
              مشتریان دیجی‌کالا قرار گرفته‌است و شامل دسته بندی های مختلف از
              موبایل و لپ تاپ تا عطر و لباس و حتی غذای حیوانات خانگی
              بوده‌است.&nbsp;
            </p>

            <p>کالای دیجیتال</p>

            <p>
              انواع گوشی موبایل از برندهای مختلفی مثل آیفون، &nbsp;
              <a
                href="https://www.digikala.com/search/category-mobile-phone/samsung/"
                target="_blank"
              >
                گوشی سامسونگ
              </a>
              ،&nbsp;
              <a
                href="https://www.digikala.com/search/category-mobile-phone/nokia/"
                target="_blank"
              >
                گوشی نوکیا
              </a>
              ،&nbsp;
              <a
                href="https://www.digikala.com/search/category-mobile-phone/xiaomi/"
                target="_blank"
              >
                گوشی شیائومی
              </a>
              ،&nbsp;
              <a
                href="https://www.digikala.com/search/category-mobile-phone/huawei/"
                target="_blank"
              >
                گوشی هواوی
              </a>
              ، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار
              مثل&nbsp;
              <a
                href="https://www.digikala.com/search/category-tablet/samsung/"
                target="_blank"
              >
                تبلت سامسونگ
              </a>
              &nbsp;نوت 10، انواع هندزفری مثل&nbsp;
              <a
                href="https://www.digikala.com/search/category-headphone/"
                target="_blank"
              >
                هندزفری بی سیم
              </a>
              ،&nbsp;
              <a
                href="https://www.digikala.com/search/category-tv2/"
                target="_blank"
              >
                تلوزیون
              </a>
              &nbsp;از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع
              مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل&nbsp;مودم
              ایرانسل،&nbsp;آنتن&nbsp;و ... تنها بخشی از محصولاتی هستند که زیر
              مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.
            </p>

            <p>خودرو، ابزار و تجهیزات صنعتی</p>

            <p>
              انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا
              و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی
              خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه
              کلاج و... و لوازم مصرفی خودرو مثل&nbsp;کفپوش سانا&nbsp;در این گروه
              قرار می‌گیرند.
            </p>

            <p>مد و پوشاک</p>

            <p>
              محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی،
              لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری
              و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی
              و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا
              و... خریداری کنید.
            </p>

            <p>اسباب بازی کودک و نوزاد</p>

            <p>
              در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک
              و نوزاد، انواع پوشاک و کفش،&nbsp;
              <a
                href="https://www.digikala.com/search/category-tablet/"
                target="_blank"
              >
                تبلت
              </a>
              ،&nbsp;
              <a
                href="https://www.digikala.com/search/category-toys/"
                target="_blank"
              >
                اسباب‌بازی
              </a>
              ، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ...
              قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان
              تبدیل کند.
            </p>

            <p>کالاهای سوپر مارکتی</p>

            <p>
              هر چیزی از مواد خوراکی که به آن نیاز دارید، در&nbsp;
              <a
                href="https://www.digikala.com/main/food-beverage/"
                target="_blank"
              >
                سوپرمارکت
              </a>
              &nbsp;دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل&nbsp;کره
              بادام‌زمینی،&nbsp;عسل،&nbsp;سس،&nbsp;قهوه،&nbsp;زعفران، شکلات،
              انواع نان و ... از برندهای معتبر و معروفی مثل&nbsp;نستله، نوتلا،
              استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا رسیدن
              به آشپزخانه شما تنها چند کلیک فاصله دارند.
            </p>

            <h2>زیبایی و سلامت</h2>

            <p>
              انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و...
              همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع
              شامپو،{" "}
              <a href="https://www.digikala.com/search/category-sunscreen-cream/">
                کرم ضد آفتاب
              </a>
              ،&nbsp;ماسک صورت، ضد تعریق،&nbsp;ماسک مو&nbsp; و...، انواع لوازم
              شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری،{" "}
              <a href="https://www.digikala.com/search/category-foundation/">
                کرم پودر
              </a>
              ، ریمل و رژلب وانواع زیورآلات طلا و نقره مثل&nbsp;سرویس طلا، سرویس
              نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و سلامت
              دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه
              ریز، سینره و... حضور دارند.همچنین میتوانید انواع مکمل غذایی و
              دارویی مثل داروی مناسب{" "}
              <a href="https://www.digikala.com/landing/common-cold/">
                سرماخوردگی
              </a>{" "}
              را در دیجی کالا تهیه کنید.
            </p>

            <p>خانه و آشپزخانه</p>

            <p>
              یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است
              که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا
              انواع&nbsp;مبل راحتی، انواع آبگرمکن مثل&nbsp;آبگرمکن بوتان،
              لباسشویی‌های متنوع مثل انواع&nbsp;لباسشویی اسنوا، شیرآلات مختلف
              مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل
              توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم
              کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال،
              اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.
            </p>

            <p>کتاب، لوازم تحریر و هنر</p>

            <p>
              بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین
              بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله، کتاب زبان،
              بازی، لوازم تحریر با طرح‌های مختلف مانند دختر کفشدوزکی، سازهایی
              مثل&nbsp;پیانو،&nbsp;سنتور،&nbsp;هنگ درام&nbsp; و... با بهترین
              قیمت‌ها و از بهترین برندها در دسترس شما قرار دارند.
            </p>

            <p>ورزش و سفر</p>

            <p>
              هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و
              کوهنوردی، ساک و قمقمه ورزشی و وسایل سفر اربعین و... در این بخش
              قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس
              نوع ورزش (آبی، هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا
              پیدا کنید.
            </p>

            <p>محصولات بومی و محلی</p>

            <p>
              و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی
              متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین
              هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش
              شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به&nbsp;سفره
              هفت‌سین&nbsp; و پذیرایی از مهمانان در روزهای&nbsp;نوروز، انواع
              آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری
              به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید.
              همچنین در صفحه <strong>برچسب ها</strong>، امکان مشاهده و خرید
              انواع محصولات با طرح های بومی وجود دارد.&nbsp;&nbsp;دیجی‌کالا
              همچنین برای اینکه حال و هوای عید را به اعضای خود هدیه
              کند،&nbsp;تقویم ۱۴۰۱، انواع ایده&nbsp;عکس پروفایل عید
              نوروز،&nbsp;آهنگ‌های عید نوروز&nbsp;و موزیک‌های شاد بهاری، وسایل
              مربوط به&nbsp;خانه‌تکانیی و&nbsp;انواع لباس های عید&nbsp; را برای
              شما فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و هوای
              تازه نهایت لذت را ببرید.
            </p>

            <p>&nbsp;</p>
          </div>
          <span className="inline-flex items-center cursor-pointer styles_Anchor--secondary__3KsgY text-button-2  mt-2 user-select-none">
            <span>مشاهده بیشتر</span>
            <div className="flex">icon</div>
          </span>
        </div> */}
        <Footer />
        <SmallDevicesFooter />
      </footer>
    </div>
  );
}
