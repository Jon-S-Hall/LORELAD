import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import PlayIcon from "./play_icon.png";

const Player = (props) => {
  const { source } = props;
  return (
    <AudioPlayer
      src={source}
      autoPlay={false}
      onPlay={(e) => console.log("onPlay")}
      customAdditionalControls={[]}
      customVolumeControls={[]}
      customProgressBarSection={[
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.CURRENT_TIME,
        <div>/</div>,
        RHAP_UI.DURATION,
      ]}
      showDownloadProgress={false}
      layout={"horizontal-reverse"}
      // customIcons={{
      //   play: "./play_icon.png",
      // }}
    />
  );
};

export default Player;
