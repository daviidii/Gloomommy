import React, { useMemo } from "react";
import { Button } from "../../../components/buttons/Button";
import { Link } from "react-router-dom";
import { latestArticles } from "../../../objects/resources/resource-list";
import {
  collection,
  FirestoreDataConverter,
  limit,
  query,
  Timestamp,
} from "firebase/firestore";
import { ArticleProps } from "../../../types/ArticleProps";
import { db } from "../../../config/firebase";
import { useFirestoreFetchMultiDoc } from "../../../hooks/useFirestoreFetchMultiDoc";
import { format } from "date-fns";

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

const HomeLatestArticles: React.FC = () => {
  const collectionRef = useMemo(() => {
    return query(
      collection(db, "articles").withConverter(articlesFetchConverter),
      limit(3)
    );
  }, []);

  const { data: articles } = useFirestoreFetchMultiDoc(collectionRef);

  if (!articles) {
    return (
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p>No available articles as of now</p>
      </div>
    );
  }
  return (
    <section className="px-10 mb-10 ">
      <Link
        to="/"
        className="block max-w-7xl mx-auto space-y-6 text-onBackground"
      >
        <div className="space-y-2.5 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Latest Articles
          </h2>
          <p>Stay updated with the latest articles from our blog.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              to={`/resources/articles/${article.id}`}
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
          ))}
        </div>
        <div className="text-center">
          <Button href="/resources/articles" className="inline-block">
            View all articles
          </Button>
        </div>
      </Link>
    </section>
  );
};

export default HomeLatestArticles;
