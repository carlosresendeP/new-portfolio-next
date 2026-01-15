import { cn } from "@/lib/utils";

export const PageContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("space-y-6 p-5 mx-auto max-w-7xl", className)}>
      {children}
    </div>
  );
};

export const PageSectionTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <h3 className="text-xs font-bold uppercase mb-4">{children}</h3>;
};

interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "article" | "div";
}

export const PageSection = ({
  children,
  className,
  as: Component = "section",
  ...props
}: PageSectionProps) => {
  return (
    <Component className={cn("py-24 px-6", className)} {...props}>
      {children}
    </Component>
  );
};

export const PageGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-[5fr_4fr] gap-16 items-center max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export const AnimatedBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
      <span className="size-2 rounded-full bg-primary animate-pulse" />
      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
};

export const GradientCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-border/30 shadow-2xl shadow-primary/10",
        className
      )}
    >
      {children}
    </div>
  );
};
