import FooterGallery from "./FooterGallery";
import FooterSlogan from "./FooterSlogan/FooterSlogan";
import SmallDevicesFooter from "./SmallDevicesFooter";

type Props = {};

function Footer({}: Props) {
  return (
    <>
      <FooterSlogan/>
      <div className="text-caption text-neutral-500 text-center items-center flex-col justify-between border-complete-t py-8 hidden lg:flex">
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
        کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
        آنلاین دیجی‌کالا) است.
      </div>
      <FooterGallery />
      <SmallDevicesFooter />
    </>
  );
}

export default Footer;
