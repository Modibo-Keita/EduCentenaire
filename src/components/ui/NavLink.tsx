import { Link, useRoute } from "wouter";
import { cn } from "@/lib/utils"; // si tu utilises shadcn, sinon remplace par clsx

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: Props) {
  const [isActive] = useRoute(href);

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary",
        isActive && "text-primary font-semibold border-b-2 border-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}
