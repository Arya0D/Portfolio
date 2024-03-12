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
          className={`text-6xl bg-slate-300 w-fit p-2 m-3 rounded-lg hover:bg-[rgb(215,181,30)]`}
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
