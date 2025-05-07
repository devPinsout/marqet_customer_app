import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";


interface CartItemProps {
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export function CartItem({ title, price, quantity, image }: CartItemProps) {
  return (
    <Card className="py-2 rounded-none">
      <CardContent className="flex py-1">

        <div className="flex flex-col gap-2">

          <div className="border border-gray-300 flex justify-between items-center">
          <img
          src={image}
          alt={title}
          className=" w-20 h-20 sm:w-50 sm:h-50 object-cover rounded"
        />
       
          </div>
          <Select defaultValue={quantity.toString()}>
        <SelectTrigger className="w-24 text-xs rounded-none">
          <SelectValue placeholder="Select Qty" />
        </SelectTrigger>
        <SelectContent>
          {[1, 2, 3, 4, 5].map((qty) => (
            <SelectItem key={qty} value={qty.toString()}>
              {qty}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
        </div>
        
       <div className="flex flex-col gap-2 ml-4">
        <h1>iphone13 pro max (128GB)</h1>
        <h1 className="text-[15px] text-gray-500">Size: 30</h1>
        <div className="flex items-center gap-2 mt-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" stroke="currentColor" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.8)</span>
          </div>
          <h1 className="text-[18px]">Rs. 1099877</h1>
       </div>

       
      </CardContent>
    </Card>
  );
}
