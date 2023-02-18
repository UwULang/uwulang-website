export default function Hero() {
  return (
    <>
      <div className="video_container sm:hidden" id="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          // className="absolute h-screen w-screen bg-center object-cover"
          className="video_container__video"
        >
          <source src="/background_m.webm" type="video/webm" />
        </video>
        <video
          autoPlay
          muted
          playsInline
          // className="absolute h-screen w-screen bg-center object-cover"
          className="video_container__video"
        >
          <source src="/main_m.webm" type="video/webm" />
        </video>
      </div>
      <div className="video_container -sm:hidden" id="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          // className="absolute h-screen w-screen bg-center object-cover"
          className="video_container__video"
        >
          <source src="/background.webm" type="video/webm" />
        </video>
        <video
          autoPlay
          muted
          playsInline
          // className="absolute h-screen w-screen bg-center object-cover"
          className="video_container__video"
        >
          <source src="/main.webm" type="video/webm" />
        </video>
      </div>
    </>
  );
}
