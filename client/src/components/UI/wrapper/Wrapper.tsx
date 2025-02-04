import { ReactNode } from "react";
import "./Wrapper.css";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <main id="main-content" className="wrapper">{children}</main>;
};

export default Wrapper;
