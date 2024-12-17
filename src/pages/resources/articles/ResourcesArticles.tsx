import { useMemo, useState } from "react";

import { articleTabs } from "../../../objects/resources/resource-tabs";
import {
  collection,
  FirestoreDataConverter,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../../../config/firebase";

import { ArticleProps } from "../../../types/ArticleProps";
import { useFirestoreFetchMultiDoc } from "../../../hooks/useFirestoreFetchMultiDoc";
import { format } from "date-fns";
import Loader1 from "../../../components/loaders/Loader1";
import { Link } from "react-router-dom";
import TabsContainer from "../../../components/containers/tabs-container/TabsContainer";

const articlesFetchConverter: FirestoreDataConverter<ArticleProps> = {
  toFirestore(data: ArticleProps) {
    return data;
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      author: data.author,
      content: data.content,
      cover_url: data.cover_url,
      created_at: data.created_at,
      referenced_links: data.referenced_links,
      tags: data.tags,
      summary: data.summary,
      title: data.title,
      id: snapshot.id,
    } as ArticleProps;
  },
};

const ResourcesArticles: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(
    articleTabs[0].value
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  const collectionRef = useMemo(() => {
    return query(
      collection(db, "articles").withConverter(articlesFetchConverter),
      where("tags", "array-contains", activeTab)
    );
  }, [activeTab]);

  const { data: articles, isLoading } =
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
        activeTab={activeTab ? activeTab : null}
        handleTabChange={handleTabChange}
        tabs={articleTabs}
        title="Articles"
      />
      <div className="max-w-7xl mx-auto px-10">
        {!articles ? (
          <div className="flex items-center justify-center min-h-230">
            <p>We'll be back to you soon...</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Link
                  to={`${article.id}`}
                  key={article.id}
                  className="bg-background rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={article.cover_url}
                    alt={article.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 space-y-2.5">
                    <span className="mt-4 text-sm">
                      {article.created_at instanceof Timestamp
                        ? format(article.created_at.toDate(), "MMMM d, yyyy")
                        : "Unknown date"}
                    </span>
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                    <p className="mt-2">{article.summary}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div>
                <span>No articles yet.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesArticles;
