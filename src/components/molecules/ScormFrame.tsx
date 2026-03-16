"use client";

interface ScormFrameProps {
  src: string;
  className?: string;
  scale?: number;
}

export const ScormFrame = ({ src, className = "", scale = 1 }: ScormFrameProps) => {
  // <div className="w-[90vw] max-w-6xl h-[85vh] rounded-2xl overflow-hidden bg-black">
  return (
    <div className={`aspect-video w-full overflow-hidden ${className}`}>
      <iframe
        src={src}
        title="SCORM Content"
        className="w-full h-full border-none block"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
        allow="fullscreen"
      />
    </div>
  );
};
