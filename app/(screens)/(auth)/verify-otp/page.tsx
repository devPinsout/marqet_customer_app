'use client'

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [resendCount, setResendCount] = useState(0)

  const router = useRouter()

  const handleVerify = () => {
    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP")
      return
    }
    setError("")
    console.log("Verifying OTP:", otp)
    router.push("/")
  }

  const handleResend = () => {
    setResendCount(resendCount + 1)
  
    console.log("OTP resent")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="flex w-full max-w-4xl flex-col md:flex-row shadow-xl min-h-[500px]">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="/images/otp.jpg" 
            alt="OTP Illustration"
            fill
            className="object-cover rounded-l-md"
          />
        </div>

        {/* Right OTP Form */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl text-center">Verify OTP</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="6-digit code"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
              <Button onClick={handleVerify} className="w-full">
                Verify OTP
              </Button>
              <p className="text-sm text-center mt-2 text-gray-600">
                Didn’t get the OTP?{" "}
                <button
                  onClick={handleResend}
                  className="text-blue-600 hover:underline ml-1"
                >
                  Resend OTP
                </button>
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
