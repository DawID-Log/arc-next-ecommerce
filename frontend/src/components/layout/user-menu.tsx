"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "@supabase/supabase-js"
import Image from "next/image"
import { createClient } from "@/utils/supabase/client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface UserMenuProps {
    user?: User | null,
}

export default function UserMenu({ user }: UserMenuProps) {
    const router = useRouter();
    const logout = async () => {
        const supabaseClient = createClient()
        const { error } = await supabaseClient.auth.signOut();
        if (!error) {
            router.refresh();
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Image
                    alt="avatar user"
                    src="/user.png"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}