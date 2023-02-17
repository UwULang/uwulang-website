export default function Hero() {
  return (
    <div className="video_container" id="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        // className="absolute h-screen w-screen bg-center object-cover"
        className="video_container__video"
      >
        <source src="/background.webm" type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        playsInline
        // className="absolute h-screen w-screen bg-center object-cover"
        className="video_container__video"
      >
        <source src="/main.webm" type="video/mp4" />
      </video>
    </div>
  );
}
