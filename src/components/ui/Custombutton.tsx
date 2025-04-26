import { cn } from "@/lib/utils";

const Custombutton = ({
  disabled,
  isRounded,
}: {
  disabled: boolean;
  isRounded: boolean;
}) => {
  return;
  //   <button className={`text-sm ${disabled ? "bg-gray-300" : "bg-blue-500"} p-4`}>
  //     Hello
  //   </button>;
  <button
    className={cn(
      "text-sm",
      disabled ? "bg-gray-300 " : "bg-blue-500",
      isRounded && "rounded-rull",
      "p-4"
    )}
  ></button>;
};
export default Custombutton;
