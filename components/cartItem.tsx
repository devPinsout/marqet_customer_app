import { Card, CardContent } from "@/components/ui/card";

interface CartItemProps {
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export function CartItem({ title, price, quantity, image }: CartItemProps) {
  return (
    <Card>
      <CardContent className="flex items-center space-x-4 p-4">
        <img
          src={image}
          alt={title}
          className=" w-30 h-30 sm:w-50 sm:h-50 object-fill rounded"
        />
        <div className="flex-1">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
        </div>
        <div className="text-sm font-semibold">₹{price * quantity}</div>
      </CardContent>
    </Card>
  );
}
