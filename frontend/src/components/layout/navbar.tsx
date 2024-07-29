import { Button } from "../ui/button";
import UserMenu from "./user-menu";
import Link from "next/link";
import { Logo } from "../icons/logo";
import { User } from "@supabase/supabase-js";

interface NavBarProps {
    user?: User | null,
}

export default function NavBar({ user }: NavBarProps) {
    return (
        <div className="bg-white">
            <div className="flex max-w-7xl mx-auto p-8 items-center">
                <div className="flex-1">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                </div>
                <div>
                    {user
                        ? <div className="flex gap-8 items-center">
                            <Link href="/courses" className="uppercase font-bold underline hover:no-underline">Courses</Link>
                            <UserMenu user={user} />
                        </div>
                        : <Button variant={"outline"} asChild>
                            <Link href="/login">
                                Login
                            </Link>
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}
