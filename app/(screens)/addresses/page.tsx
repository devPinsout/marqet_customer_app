import BackButton from "@/components/backButton";
import { DeleteIcon, Edit2, LocateIcon, MapPin, SearchIcon, ShoppingBag, ShoppingBasket, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Sample data for addresses (You can replace this with actual data from your API)
const addresses = [
  {
    id: 1,
    name: "John Doe",
    street: "115, Green Enclave",
    city: "Chipiyana Buzurg",
    state: "Ghaziabad",
    zip: "201009",
    phone: "9812457856",
  },
  {
    id: 2,
    name: "Jane Smith",
    street: "21, Maple Street",
    city: "Noida",
    state: "Uttar Pradesh",
    zip: "201301",
    phone: "9912457856",
  },
];

export default function AddressPage() {


  return (
    <div className="bg-white">
      <div className="flex justify-between items-center bg-accent px-3 w-full">
        <BackButton label="My Addresses" />
      </div>

      <div className="p-4 space-y-4 bg-white rounded-md">
        {/* Add New Address Button */}
        <div className="flex justify-between items-center">

            <Link href="/addresses/add-new-address" className="w-full">
            <button
            
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition w-full"
          >
            Add New Address
          </button>
            </Link>
         
        </div>
        <div className="space-y-2 mt-4">
          {addresses.map((address) => (
            <div key={address.id} className="p-4 border border-gray-300 rounded-sm">
            <div className="flex justify-between">

            <div className="flex gap-2 items-center">
                <MapPin height={20}/>
            <h3 className="text-lg font-semibold">{address.name}</h3>

            </div>    
            
            <div className="flex gap-2">
                <Edit2 height={20}/>
            <Trash2 height={20}/>
             </div>   
             
            </div>
              <p>{address.street}</p>
              <p>{address.city}, {address.state} - {address.zip}</p>
              <p>Phone: {address.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
