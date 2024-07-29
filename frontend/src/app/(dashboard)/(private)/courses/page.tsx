import { createClient } from "@/utils/supabase/server";
import CoursesList from "./_components/courses"
import { handleSubscribe } from "../../action";
import { Button } from "@/components/ui/button";
import { priceId } from "@/utils/constants";

export default async function CoursesPage() {
    const supabaseClient = createClient();
    const user = await supabaseClient.auth.getUser();
    const userEmail = user.data.user?.email;
    let hasActiveSub = false;

    if (userEmail) {
        const { error } = await supabaseClient
            .from("subscription")
            .select()
            .eq("email", userEmail)
            .eq("active", true)
            .single();

        if (!error) {
            hasActiveSub = true;
        }
    }

    const maxAvailableCourses = hasActiveSub ? 100 : 1;
    const { data } = await supabaseClient.from("courses").select().limit(maxAvailableCourses);

    if (!data) {
        return <div>There are no courses at the moment.</div>
    }

    return <div className="p-24">
        <h1 className="text-2xl font-bold">Video courses</h1>
        <CoursesList courses={data} />
        { !hasActiveSub && <form action={handleSubscribe}>
            <input hidden value={priceId} name="price" />
            <Button className="w-full mt-4" type="submit">
                Get access
            </Button>
        </form>}
    </div>
}