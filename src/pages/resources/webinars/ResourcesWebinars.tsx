import { useMemo, useState } from "react";
import TabsContainer from "../../../components/containers/tabs-container/TabsContainer";
import { webinarTabs } from "../../../objects/resources/resource-tabs";
import {
  collection,
  FirestoreDataConverter,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useFirestoreFetchMultiDoc } from "../../../hooks/useFirestoreFetchMultiDoc";
import Loader1 from "../../../components/loaders/Loader1";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { WebinarProp } from "../../../types/WebinarProps";

const webinarFetchConverter: FirestoreDataConverter<WebinarProp> = {
  toFirestore(data: WebinarProp) {
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
      type: data.isLive,
      scheduled_date: data.scheduled_date,
      webinar_link_url: data.webinar_link_url,
      created_at: data.created_at,
    } as WebinarProp;
  },
};

const ResourcesWebinars = () => {
  const [activeTab, setActiveTab] = useState<string | null>(
    webinarTabs[0].value
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  const collectionRef = useMemo(() => {
    return query(
      collection(db, "webinars").withConverter(webinarFetchConverter),
      where("tags", "array-contains", activeTab)
    );
  }, [activeTab]);

  const { data: webinars, isLoading } =
    useFirestoreFetchMultiDoc(collectionRef);

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
        tabs={webinarTabs}
        title="webinars"
      />

      <div className="max-w-7xl mx-auto px-10">
        {!webinars ? (
          <div className="flex items-center justify-center min-h-230">
            <p>The article does not exist</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {webinars.length > 0 ? (
              webinars.map((webinars) => (
                <Link
                  to={`${webinars.id}`}
                  key={webinars.id}
                  className="bg-background rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={webinars.thumbnail_url}
                    alt={webinars.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 space-y-2.5">
                    <span className="mt-4 text-sm">
                      {webinars.created_at instanceof Timestamp
                        ? format(webinars.created_at.toDate(), "MMMM d, yyyy")
                        : "Unknown date"}
                    </span>
                    <h3 className="text-xl font-semibold">{webinars.title}</h3>
                    <p className="mt-2">{webinars.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div>
                <span>No webinars available yet.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesWebinars;
