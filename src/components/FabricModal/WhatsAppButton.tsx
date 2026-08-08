// import contact from "../../config/contact";
// import Button from "../UI/Button/Button";

// interface WhatsAppButtonProps {
//   message: string;
//   label: string;
// }

// function WhatsAppButton({
//   message,
//   label,
// }: WhatsAppButtonProps) {


//   const whatsappLink =
//     `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;


//   return (
//     <Button
//       href={whatsappLink}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       {label}
//     </Button>
//   );
// }

// export default WhatsAppButton;




import contact from "@/config/contact";
import Button from "../UI/Button/Button";

interface WhatsAppButtonProps {
  message: string;
  label: string;
}

function WhatsAppButton({
  message,
  label,
}: WhatsAppButtonProps) {
  const whatsappLink =
    `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Button>
  );
}

export default WhatsAppButton;

