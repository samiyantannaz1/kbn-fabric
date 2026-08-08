
import contact from "@/config/contact";
import Button from "../UI/Button/Button";

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
  const whatsappLink =
    `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </Button>
  );
}

export default WhatsAppButton;

