import { useSelector } from "react-redux";
import { useVideoBackground } from "../../Hooks/useVideoBackground";

function BackgroundVideo({ id }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useVideoBackground(id);

  return (
    <div className="w-screen ">
      <iframe
        className=" aspect-video w-screen bg-black bg-opacity-30"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0&modestbranding=1&showinfo=0&rel=0`}
        title="YouTube video player"
        allow=" autoplay; encrypted-media; "
      ></iframe>
    </div>
  );
}

export default BackgroundVideo;
