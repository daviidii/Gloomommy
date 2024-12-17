import { doc, FirestoreDataConverter, Timestamp } from "firebase/firestore";
import { ArticleProps } from "../../types/ArticleProps";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { useFirestoreFetchSingleDoc } from "../../hooks/useFirestoreFetchSingleDoc";

import DOMpurify from "dompurify";
import Loader1 from "../../components/loaders/Loader1";
import { format } from "date-fns";

const articleFetchConverter: FirestoreDataConverter<ArticleProps> = {
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

const ArticlePage = () => {
  const { articleId } = useParams();
  const docRef = useMemo(() => {
    if (!articleId) return null;

    return doc(db, "articles", articleId).withConverter(articleFetchConverter);
  }, []);

  const { data: article, isLoading } = useFirestoreFetchSingleDoc(docRef);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader1 />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p>The article does not exist</p>
      </div>
    );
  }

  return (
    <article className="space-y-10 mt-20">
      <header>
        <div className="max-w-4xl mx-auto flex flex-col gap-6 z-10 px-10">
          <div className="flex flex-col gap-6">
            <div>
              <p>
                <span className="capitalize">{article.author}</span> -{" "}
                <span>
                  {article.created_at instanceof Timestamp
                    ? format(article.created_at.toDate(), "MMMM d, yyyy")
                    : "Unknown date"}
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">{article.title}</h2>

              <p className="leading-relaxed font-light">{article.summary}</p>
            </div>
          </div>
          <div className="h-[50vw] w-full max-h-125 rounded-lg overflow-hidden">
            <img
              src={article.cover_url}
              alt={`${article.title} cover image`}
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </header>

      <div
        dangerouslySetInnerHTML={{
          __html: DOMpurify.sanitize(article.content),
        }}
      />
    </article>
  );
};

export default ArticlePage;
