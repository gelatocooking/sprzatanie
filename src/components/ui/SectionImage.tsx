import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export default function SectionImage({
  src,
  alt,
  className,
  sizes = "(max-width: 900px) 100vw, 50vw",
}: SectionImageProps) {
  return (
    <figure className={["ui-section-image", className].filter(Boolean).join(" ")}>
      <Image alt={alt} className="ui-section-image__asset" fill sizes={sizes} src={src} />
    </figure>
  );
}
