import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface UserProfileCardProps {
  name: string;
  email: string;
  imageUrl?: string;
}

export function UserProfileCard({ name, email, imageUrl }: UserProfileCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={imageUrl} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="font-semibold text-lg">{name}</h2>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </CardContent>
    </Card>
  );
}
