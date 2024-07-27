import { Button } from "../ui/button";
import Image from "next/image";
import UserMenu from "./user-menu";

interface NavBarProps {
    isLoggedIn: boolean
}

export default function NavBar({ isLoggedIn }: NavBarProps) {
    return (
        <div className="bg-white">
            <div className="flex max-w-7xl mx-auto p-8 items-center">
                <div className="flex-1">
                    <Image src="/availability-svgrepo-com.svg" width={80} height={80} alt="logo" />
                </div>
                <div>
                    {isLoggedIn ? <UserMenu /> : <Button variant={"outline"}>Login</Button>}
                </div>
            </div>;
        </div>
    )
}
