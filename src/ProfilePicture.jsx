export default function ProfilePicture() {
  const imageUrl = "./src/assets/image1.png";

  const handleClick = (event) => (event.target.style.display = "none");

  return (
    <div className="translate-x-1/2 translate-y-1/2">
      <img
        src={imageUrl}
        alt="Profile picture"
        onClick={handleClick}
        className="w-52"
      />
    </div>
  );
}
