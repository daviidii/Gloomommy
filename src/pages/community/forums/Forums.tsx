import { useEffect, useMemo, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommunityTabs } from "../../../objects/community/community-tabs";

import BoxContainer from "../../../components/containers/box-container/BoxContainer";
import TabsContainer from "../../../components/containers/tabs-container/TabsContainer";
import ClickOutside from "../../../components/containers/click-outisde-container/ClickOutside";
import { InputForm } from "../../../components/forms/input-forms/InputForm";
import { Button } from "../../../components/buttons/Button";
import {
  addDoc,
  collection,
  FirestoreDataConverter,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import toast from "react-hot-toast";
import DefaultError from "../../../components/error/default/DefaultError";
import { PostProp } from "../../../types/PostProp";
import { useFirestoreColListener } from "../../../hooks/useFirestoreColListener";
import Loader1 from "../../../components/loaders/Loader1";
import PostContainer from "../../../components/containers/posts-container/PostContainer";

const postsFetchConverter: FirestoreDataConverter<PostProp> = {
  toFirestore(data: PostProp) {
    return data;
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      comment_count: data.comment_count,
      anonymous: data.anonymous,
      created_at: data.created_at,
      message: data.message,
      title: data.title,
    } as PostProp;
  },
};

interface PostFormProp {
  title: string;
  message: string;
}

const Forums: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<PostFormProp>();

  const [activeTab, setActiveTab] = useState<string | null>(
    CommunityTabs[0].value
  );

  const tabContainerRef = useRef<HTMLDivElement>(null);
  const [contentMarginTop, setcontentMarginTop] = useState<number>(0);
  const [openPostForm, setOpenPostForm] = useState<boolean>(false);

  const collectionRef = useMemo(() => {
    return collection(db, "posts").withConverter(postsFetchConverter);
  }, []);

  const { data: posts } = useFirestoreColListener(collectionRef);

  const updateMarginTop = () => {
    if (tabContainerRef.current) {
      setcontentMarginTop(tabContainerRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // Initially set paddingTop when the component mounts
    updateMarginTop();

    // Set up the resize event listener
    window.addEventListener("resize", updateMarginTop);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateMarginTop);
    };
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleOpenPostForm = () => {
    setOpenPostForm((prev) => !prev);
  };

  const submit: SubmitHandler<PostFormProp> = async (data) => {
    const toastId = toast.loading("please wait...");
    const collectionRef = collection(db, "posts");

    try {
      await addDoc(collectionRef, {
        title: data.title,
        message: data.message,
        created_at: serverTimestamp(),
        anonymous: true,
      });

      toast.success("Post success", {
        id: toastId,
      });
    } catch (error) {
      toast.error("Something went wrong", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    reset();
  }, [isSubmitted]);

  useEffect(() => {
    if (openPostForm) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup when the component unmounts or `openPostForm` changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [openPostForm]);

  if (!posts) {
    return (
      <div className="flex items-center justify-center">
        <Loader1 />
      </div>
    );
  }

  return (
    <>
      <section>
        <div ref={tabContainerRef}>
          <TabsContainer
            activeTab={activeTab}
            handleTabChange={handleTabChange}
            title="Community"
            tabs={CommunityTabs}
          />
        </div>

        <div style={{ marginTop: `${contentMarginTop + 10}px` }}>
          <BoxContainer variant="900">
            <div>
              <Button
                className="w-full"
                variant="outline"
                onClick={handleOpenPostForm}
              >
                Share your thoughts
              </Button>
            </div>
            <div className="flex flex-col">
              {posts.map((post) => (
                <PostContainer post={post} key={post.id} />
              ))}
            </div>
          </BoxContainer>
        </div>
      </section>

      {openPostForm && (
        <div className="z-999999 absolute left-0 top-0 w-full h-screen bg-black/50 flex items-center justify-center overflow-y-hidden cursor-pointer">
          <ClickOutside
            onClick={handleOpenPostForm}
            className="min-w-100 cursor-default"
          >
            <BoxContainer
              variant="400"
              className="bg-background text-onBackground p-4 space-y-6 rounded-lg font-inria"
            >
              <div className="text-center">
                <h3 className="text-xl">Create a post</h3>
              </div>
              <form
                className="grid grid-cols-3 gap-6"
                onSubmit={handleSubmit(submit)}
              >
                <div className="col-span-full">
                  <InputForm
                    label="Title"
                    placeholder="title"
                    {...register("title", {
                      required: "This field is required",
                    })}
                  />

                  {errors.title?.message && (
                    <DefaultError message={errors.title.message} />
                  )}
                </div>
                <div className="col-span-full">
                  <InputForm
                    label="Message"
                    placeholder="Something you want to share."
                    textarea={true}
                    {...register("message", {
                      required: "This field is required",
                    })}
                  />

                  {errors.message?.message && (
                    <DefaultError message={errors.message.message} />
                  )}
                </div>

                <div className="col-span-full space-x-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={handleOpenPostForm}
                    disabled={isSubmitting}
                  >
                    cancel
                  </Button>
                  <Button type="submit" size="sm" disabled={isSubmitting}>
                    create post
                  </Button>
                </div>
              </form>
            </BoxContainer>
          </ClickOutside>
        </div>
      )}
    </>
  );
};

export default Forums;
