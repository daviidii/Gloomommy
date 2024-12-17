import VideoPlayer from "../../components/video/video-player/VideoPlayer";
import SubpageContainer from "../../components/containers/subpage-container/SubpageContainer";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { doc, FirestoreDataConverter } from "firebase/firestore";
import { VideoProps } from "../../types/VideoProps";
import { db } from "../../config/firebase";
import { useFirestoreFetchSingleDoc } from "../../hooks/useFirestoreFetchSingleDoc";
import Loader1 from "../../components/loaders/Loader1";

const videoFetchConverter: FirestoreDataConverter<VideoProps> = {
  toFirestore(data: VideoProps) {
    return data;
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      title: data.title,
      thumbnail_url: data.thumbnail_url,
      description: data.description,
      video_url: data.video_url,
      created_at: data.created_at,
    } as VideoProps;
  },
};

const VideoPage = () => {
  const { videoId } = useParams();

  const docRef = useMemo(() => {
    if (!videoId) return null;

    return doc(db, "videos", videoId).withConverter(videoFetchConverter);
  }, []);

  const { data: video } = useFirestoreFetchSingleDoc(docRef);

  if (!video) {
    return (
      <div className="flex items-center justify-center">
        <Loader1 />
      </div>
    );
  }
  return (
    <SubpageContainer title={video.title} description={video.description}>
      <VideoPlayer
        title={video.title}
        videoUrl="https://www.youtube.com/watch?v=01T9RIKhEQc"
        description={video.description}
      />
    </SubpageContainer>
  );
};

export default VideoPage;
