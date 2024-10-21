"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import GooglePhoto from "@/photo/google-logo-search-new-svgrepo-com.svg";
import { signIn } from "next-auth/react";

export default function GoogleSignIn() {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={GooglePhoto} alt="Google icon" className="w-6 h-6" />
    </Button>
  );
}
