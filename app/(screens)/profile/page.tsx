
import BottomNavBar from "@/components/bottomNavbar";
import { ProfileSection } from "@/components/profileSection";
import { Button } from "@/components/ui/button";
import { UserProfileCard } from "@/components/userProfileCard";
import { BoxIcon, ChevronRightIcon, GiftIcon, HeadphonesIcon, HeartIcon, ListOrdered, MapPinIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block bg-muted min-h-screen pb-24 px-4 pt-4 md:px-20">
        <h1 className="text-xl font-semibold mb-4 md:text-2xl">My Profile</h1>

        <div className="space-y-4">
          <UserProfileCard
            name="Shalini Yadav"
            email="shalini@example.com"
            imageUrl="/images/user-avatar.jpg"
          />

          <ProfileSection title="Account Settings">
            <Button variant="ghost" className="w-full justify-start">
              Change Password
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Privacy Preferences
            </Button>
          </ProfileSection>

          <ProfileSection title="Order History">
            <Link href="/orders" className="w-full">
              <Button variant="ghost" className="w-full justify-start">
                Orders
              </Button>
            </Link>
          </ProfileSection>

          <ProfileSection title="Help & Support">
            <Button variant="ghost" className="w-full justify-start">
              Contact Support
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              FAQ
            </Button>
          </ProfileSection>
        </div>

      
      </div>

     {/* Mobile View */}
<div className="block md:hidden bg-accent">
  <div className="flex items-center justify-center bg-accent p-4">
    <h2 className="text-lg font-bold">My Profile</h2>
  </div>

  <div className="grid grid-cols-2 gap-4 p-4 bg-white">
   
   <Link href="/orders">
   <div className="flex items-center justify-center gap-4 bg-white px-4 py-2 border-accent border-2 rounded-sm">
      <BoxIcon className="h-7 w-7"/>
      <span className="text-sm font-medium">Orders</span>
    </div>

   </Link>
 
    <div className="flex items-center justify-center gap-4 bg-white px-4 py-2 border-accent border-2 rounded-sm">
      <HeartIcon className="h-7 w-7"/>
      <span className="text-sm font-medium">Wishlist</span>
    </div>

    <div className="flex items-center justify-center gap-4 bg-white px-4 py-2 border-accent border-2 rounded-sm">
      <GiftIcon className="h-7 w-7"/>
      <span className="text-sm font-medium">Coupons</span>
    </div>

    <div className="flex items-center justify-center gap-4 bg-white px-4 py-2 border-accent border-2 rounded-sm">
      <HeadphonesIcon className="h-7 w-7"/>
      <span className="text-sm font-medium">Help Center</span>
    </div>
  </div>
  <hr/>

  {/* Account Settings */}

  <div className="p-4 mt-3 bg-white flex flex-col gap-5">
    <h1 className="text-sm font-semibold">Account Settings</h1>

    <div className="space-y-4 flex flex-col gap-1">

      <Link href="/profile/edit-profile">
      <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-3">
            <UserIcon className="h-5 w-5 text-gray-500" />
            <span className="text-sm">Edit Profile</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </div>
      </Link>
       

       <Link href="/addresses">
       <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MapPinIcon className="h-5 w-5 text-gray-500" />
            <span className="text-sm">Saved Addresses</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </div>

       </Link>
             </div>

  </div>

  <BottomNavBar />
</div>

    </>
  );
}

