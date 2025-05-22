import "./SocialMediaBox.css";
interface SocialMediaBoxProps {
  src: string;
}

export default function SocialMediaBox({ src }: SocialMediaBoxProps) {
  return (
    <div className="SocialMediaBox Flex Center Items">
      <img src={src} alt="Social media icon" />
    </div>
  );
}
