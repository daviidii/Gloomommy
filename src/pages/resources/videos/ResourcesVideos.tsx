import { useMemo, useState } from "react";
import TabsContainer from "../../../components/containers/tabs-container/TabsContainer";
import { videosTabs } from "../../../objects/resources/resource-tabs";
import {
  collection,
  FirestoreDataConverter,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { VideoProps } from "../../../types/VideoProps";
import { db } from "../../../config/firebase";
import { useFirestoreFetchMultiDoc } from "../../../hooks/useFirestoreFetchMultiDoc";
import Loader1 from "../../../components/loaders/Loader1";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const videosFetchConverter: FirestoreDataConverter<VideoProps> = {
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

const ResourcesVideos = () => {
  const [activeTab, setActiveTab] = useState<string | null>(
    videosTabs[0].value
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  const collectionRef = useMemo(() => {
    return query(
      collection(db, "videos").withConverter(videosFetchConverter),
      where("tags", "array-contains", activeTab)
    );
  }, [activeTab]);

  const { data: videos, isLoading } = useFirestoreFetchMultiDoc(collectionRef);

  if (isLoading) {
    return (
      <div className="max-w-7xl min-h-100 mx-auto flex items-center justify-center">
        <Loader1 />
      </div>
    );
  }

  return (
    <div className="space-y-20 min-h-230">
      <TabsContainer
        handleTabChange={handleTabChange}
        activeTab={activeTab}
        tabs={videosTabs}
        title="Videos"
      />

      <div className="max-w-7xl mx-auto px-10">
        {!videos ? (
          <div className="flex items-center justify-center min-h-230">
            <p>We'll be back to you soon...</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {videos.length > 0 ? (
              videos.map((video) => (
                <Link
                  to={`${video.id}`}
                  key={video.id}
                  className="bg-background rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={video.thumbnail_url}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 space-y-2.5">
                    <span className="mt-4 text-sm">
                      {video.created_at instanceof Timestamp
                        ? format(video.created_at.toDate(), "MMMM d, yyyy")
                        : "Unknown date"}
                    </span>
                    <h3 className="text-xl font-semibold">{video.title}</h3>
                    <p className="mt-2">{video.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div>
                <span>No videos yet.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesVideos;
