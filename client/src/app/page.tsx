import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1000px] h-[800px] bg-amber-100">
      <Image
        // src={"/images/girl-anime.jpg"}
        // alt="girl-anime"
        src={"https://cdn.pixabay.com/photo/2023/05/23/02/12/girl-8011732_1280.jpg"}
        alt="Girl AI CBi"
        width={600}
        height={400} 
        quality={100}
        style={{
          width: 600,
          height: 400,
        }}
      />
    </div>
  );
}
