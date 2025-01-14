import FooterGallery from "./FooterGallery";

type Props = {};

function Footer({}: Props) {
  return (
    <>
      <div className="text-caption text-neutral-500 text-center items-center flex-col justify-between border-complete-t py-8 hidden lg:flex">
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
        کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
        آنلاین دیجی‌کالا) است.
      </div>
      <FooterGallery />
    </>
  );
}

export default Footer;
