import "react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { YoutubeButton } from "../../styled-components/CustomButton";
import { YoutubeVideoIcon } from "../../custom-icons";

const PopupVideo = ({ width, height, videoId, center }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />

      <YoutubeButton
        onClick={() => setOpen(true)}
        width={width}
        height={height}>
        <YoutubeVideoIcon />
      </YoutubeButton>
    </>
  );
};

export default PopupVideo;
