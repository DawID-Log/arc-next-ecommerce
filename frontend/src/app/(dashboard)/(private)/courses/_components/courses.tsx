import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Database } from "@/types/supabase";
import VideoCourse from "./video-course";

interface CoursesListProps {
    courses: Database["public"]["Tables"]["courses"]["Row"][];
}

export default function CoursesList({ courses }: CoursesListProps) {
    return (
        <Accordion type="single" collapsible>
            {courses.map(course => <AccordionItem value={course.title} key={course.id}>
                <AccordionTrigger>{course.title}</AccordionTrigger>
                <AccordionContent>
                    <VideoCourse title={course.title} videoId={course.video_id || "https://www.youtube.com/embed/eEqCEFuQqF8?list=PL7pkSK1xbGD6g2_BSXgScugMC1CJkkdBW"}/>
                </AccordionContent>
                <AccordionContent>{course.description}</AccordionContent>
            </AccordionItem>)}
        </Accordion>
    )
}