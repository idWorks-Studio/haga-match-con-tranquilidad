import Image from "next/image";

export const TikTokThumbnail = ({ src, onClick }: { src: string; onClick: () => void }) => {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-2xl w-[300px] h-[530px] bg-black shadow-xl"
      onClick={onClick}
    >
      {/* Imagen de fondo / Miniatura */}
      <Image 
        src={src} 
        alt="TikTok Preview" 
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
      
      {/* Botón de Play central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-[#fe2c55] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};