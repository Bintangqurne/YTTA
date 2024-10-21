"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function UserNavbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src="https://ovgheqxxfhjbwdblqxyf.supabase.co/storage/v1/object/sign/user%20image/profile.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyIGltYWdlL3Byb2ZpbGUuanBnIiwiaWF0IjoxNzI1NTYwOTM5LCJleHAiOjE3NTcwOTY5Mzl9.LtTLsVVDhX2_y1JgtebWchSpNtGNFwz2E4viPp4N5Kg&t=2024-09-05T18%3A29%3A00.026Z" />
            <AvatarFallback className="rounded-sm">JAN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">JAN</p>
            <p className="text-xs leading-none text-muted-foreground">
              nlas@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
