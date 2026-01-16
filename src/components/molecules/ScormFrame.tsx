"use client";

interface ScormFrameProps {
  src: string;
}

export const ScormFrame = ({ src }: ScormFrameProps) => {
  // <div className="w-[90vw] max-w-6xl h-[85vh] rounded-2xl overflow-hidden bg-black">
  return (
    <div className="aspect-video w-full">
      <iframe
        src={src}
        title="SCORM Content"
        className="w-full h-full border-none block"
        allow="fullscreen"
      />
    </div>
  );
};
