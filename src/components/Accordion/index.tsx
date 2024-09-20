import { ReactNode, useState } from "react";
interface AccordionProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
}
export const Accordion = ({ children, title, icon }: AccordionProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        {icon} {title}
      </div>
      <div className="pl-4 bg-blue-400"> {open && children} </div>
    </div>
  );
};
