import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AboutPhilosophy from "./pages/our-philosophy/AboutPhilosophy";
import AboutPostpartum from "./pages/postpartum-depression/AboutPostpartum";
import Resources from "./pages/resources/Resources";
import ResourcesArticles from "./pages/resources/articles/ResourcesArticles";
import ResourcesVideos from "./pages/resources/videos/ResourcesVideos";
import ArticlePage from "./pages/article/ArticlePage";
import Forums from "./pages/community/forums/Forums";
import VideoPage from "./pages/video/VideoPage";
import ResourcesWebinars from "./pages/resources/webinars/ResourcesWebinars";
import OurDoctors from "./pages/our-doctors/OurDoctors";
import Help from "./pages/help/Help";
import PageNotFound from "./pages/not-found/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="about/our_philosophy" element={<AboutPhilosophy />} />

        <Route
          path="about/about_postpartum_depression"
          element={<AboutPostpartum />}
        />

        <Route path="our-doctors" element={<OurDoctors />} />

        <Route path="resources" element={<Resources />} />

        <Route path="resources/articles" element={<ResourcesArticles />} />

        <Route path="resources/articles/:articleId" element={<ArticlePage />} />

        <Route path="resources/videos" element={<ResourcesVideos />} />

        <Route path="resources/videos/:videoId" element={<VideoPage />} />

        <Route path="resources/webinars" element={<ResourcesWebinars />} />

        <Route path="community" element={<Navigate to="forums" replace />} />

        <Route path="community/forums" element={<Forums />} />

        <Route path="help" element={<Help />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
