
import contact from "@/config/contact";

interface WhatsAppButtonProps {
  message: string;
  label: string;
  className?: string;
}

function WhatsAppButton({
  message,
  label,
  className = "",
}: WhatsAppButtonProps) {
  const whatsappLink = `https://wa.me/${
    contact.whatsapp
  }?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-[#C08A5B]
        px-8
        py-4
        font-medium
        text-white
        transition
        duration-300
        hover:bg-[#A97449]
        ${className}
      `}
    >
      {label}
    </a>
  );
}

export default WhatsAppButton;
