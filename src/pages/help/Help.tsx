import BoxContainer from "../../components/containers/box-container/BoxContainer";
import SubpageContainer from "../../components/containers/subpage-container/SubpageContainer";
import { motion } from "framer-motion";
import { help_contacts } from "../../objects/help/help-contacts";

const Help = () => {
  return (
    <SubpageContainer
      title="Help and Crisis Resources"
      description="If you or someone you know is experiencing a mental health crisis, help is available. Reach out to the organizations below for professional support and guidance."
    >
      <BoxContainer className="flex flex-wrap gap-6">
        {help_contacts.map((resource, index) => (
          <motion.div
            whileHover={{
              scale: 1.02,
              background: "#FFD9E0",
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            key={index}
            className="md:h-115 bg-background text-onBackground border rounded-lg p-6 lg:basis-[calc(50%_-_24px)] grow"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {resource.title}
              </h2>
              <p className="text-gray-700 mb-4">{resource.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {resource.detail &&
                  resource.detail.map((detail, i) => (
                    <li key={i}>
                      <strong>{detail.label}:</strong>{" "}
                      {detail.contacts.join(" / ")}
                      {detail.extra && (
                        <p className="text-sm text-gray-600">{detail.extra}</p>
                      )}
                    </li>
                  ))}
                {resource.telephone_number &&
                  resource.telephone_number.map((contact, i) => (
                    <li key={i}>{contact}</li>
                  ))}
                {resource.email && (
                  <li>
                    <strong>Email:</strong> {resource.email}
                  </li>
                )}
                {resource.phone_number &&
                  resource.phone_number.map((contact, i) => (
                    <li key={i}>{contact}</li>
                  ))}
                {resource.extra && (
                  <li>
                    <span className="text-sm text-gray-600">
                      {resource.extra}
                    </span>
                  </li>
                )}
                {resource.social && (
                  <li>
                    <strong>Social:</strong> {resource.social}
                  </li>
                )}
              </ul>
              {resource.trunkline && (
                <p className="mt-4">
                  <strong>Trunkline:</strong> {resource.trunkline}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </BoxContainer>
    </SubpageContainer>
  );
};

export default Help;
