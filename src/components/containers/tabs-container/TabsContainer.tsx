import { TabProps } from "../../../types/TabProps";
import { Button } from "../../buttons/Button";

interface ResourcesContainerProps {
  tabs: TabProps[];
  title: string;
  activeTab: string | null;
  handleTabChange: (value: string) => void;
}

const TabsContainer: React.FC<ResourcesContainerProps> = ({
  tabs,
  title,
  activeTab,
  handleTabChange,
}) => {
  return (
    <div className=" relative min-h-14 px-10 space-y-6 lg:space-y-0">
      <div className="text-center mt-14 lg:hidden">
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 lg:absolute lg:top-0 lg:left-0 lg:bg-primaryContainer lg:text-onPrimaryContainer lg:w-full lg:justify-start lg:px-6 lg:gap-2">
        {tabs.map((tab, i) => (
          <Button
            key={i}
            onClick={() => handleTabChange(tab.value)}
            className={`lg:rounded-none ${
              activeTab === tab.value
                ? `bg-primary text-onPrimary lg:bg-transparent lg:text-onPrimaryContainer lg:border-b-2 lg:border-onPrimaryContainer`
                : ``
            }`}
          >
            {tab.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TabsContainer;
