import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Icon = ({ children, info, color }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={
            "text-6xl md:text-[8rem] bg-slate-300 w-fit p-2 m-3 rounded-lg"
          }
          style={{ color: `${color}` }}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>{info}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Icon;
