import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabaseClient = createClient();
  const { data } = await supabaseClient.auth.getUser();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar user={data.user} />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
