
import BottomNavBar from "@/components/bottomNavbar";
import { ProfileSection } from "@/components/profileSection";
import { Button } from "@/components/ui/button";
import { UserProfileCard } from "@/components/userProfileCard";

export default function ProfilePage() {
  return (
    <div className="bg-muted min-h-screen pb-24 px-4 pt-4 md:px-20">
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
          <Button variant="ghost" className="w-full justify-start">
            View Past Orders
          </Button>
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

      {/* Mobile nav only on small screens */}
      <BottomNavBar />
    </div>
  );
}
