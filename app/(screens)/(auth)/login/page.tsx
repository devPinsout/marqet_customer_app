'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  const [mobile, setMobile] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number")
      return
    }
    setError("")
    console.log("Sending OTP to:", mobile)

    // After successful OTP request, navigate to verify-otp
    router.push("/verify-otp")
  }

  return (
    <div className="min-h-screen h-full flex items-center justify-center bg-gray-100 px-4">
      <Card className="flex w-full max-w-4xl flex-col md:flex-row shadow-xl h-[80vh]">

        {/* Left Side Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="/images/login.jpg"
            alt="Login Illustration"
            fill
            className="object-cover rounded-l-md"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl text-center">Login with Mobile</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
              <Button onClick={handleLogin} className="w-full">
                Send OTP
              </Button>
              <p className="text-sm text-center mt-2">
                New on Market?{" "}
                <Link href="/register" className="text-blue-600 hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
