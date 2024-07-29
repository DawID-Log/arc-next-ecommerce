interface VideoCourseProps {
    videoId: string;
    title: string;
}

export default function videoCourses({videoId, title}: VideoCourseProps) {
    return <iframe 
        width="941" 
        height="539" 
        src={videoId} 
        title={title}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
    </iframe>
}