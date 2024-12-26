import ProfilePic from "./assets/image1.png";

export default function Card() {
  return (
    <div className="Card w-52 justify-center text-center flex flex-col items-center shadow-2xl m-3 p-5 px-10 py-10 drop-shadow-xl">
      <img src={ProfilePic} alt="Image Ahja" className="rounded-full mb-2" />
      <h2 className="text-center text-2xl font-semibold mb-1">ahja</h2>
      <p className="text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        provident.
      </p>
    </div>
  );
}
