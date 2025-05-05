import { Card, CardContent } from "@/components/ui/card";

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ProfileSection({ title, children }: ProfileSectionProps) {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">{title}</h3>
        {children}
      </CardContent>
    </Card>
  );
}
