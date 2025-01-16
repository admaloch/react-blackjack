import { ReactNode } from "react";
import "./BGSectionstyle.css";

interface BGSectionProps {
  children: ReactNode;
  bgClass: string;
}

const BGSection: React.FC<BGSectionProps> = ({ children, bgClass }) => {
  return <section className={`${bgClass} photo-container`}>{children}</section>;
};

export default BGSection;
