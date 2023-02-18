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
        <source src="/background.webm" type="video/webm" />
        <source
          src="/background_mobile.webm"
          type="video/webm"
          media="all and (max-width: 480px)"
        />
      </video>
      <video
        autoPlay
        muted
        playsInline
        // className="absolute h-screen w-screen bg-center object-cover"
        className="video_container__video"
      >
        <source src="/main.webm" type="video/webm" />
        <source
          src="/main_mobile.webm"
          type="video/webm"
          media="all and (max-width: 480px)"
        />
      </video>
    </div>
  );
}
