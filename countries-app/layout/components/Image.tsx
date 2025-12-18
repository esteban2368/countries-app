interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    classCss: string;
    lazy?: boolean;
}

export const Image = ({ src, alt, width, height, lazy, classCss }: ImageProps) => {
  return (
    <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        loading={lazy ? "lazy" : "eager"} 
        className={classCss} />
  );
}