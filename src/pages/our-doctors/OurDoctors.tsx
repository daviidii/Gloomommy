import { Link } from "react-router-dom";
import BoxContainer from "../../components/containers/box-container/BoxContainer";
import SubpageContainer from "../../components/containers/subpage-container/SubpageContainer";
import { collection, FirestoreDataConverter, query } from "firebase/firestore";
import { DoctorsProp } from "../../types/DoctorsProp";
import { useMemo } from "react";
import { db } from "../../config/firebase";
import { useFirestoreFetchMultiDoc } from "../../hooks/useFirestoreFetchMultiDoc";
import Loader1 from "../../components/loaders/Loader1";

const doctorsFetchConverter: FirestoreDataConverter<DoctorsProp> = {
  toFirestore(data: DoctorsProp) {
    return data;
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      name: data.name,
      specialization: data.specialization,
      image_url: data.image_url,
    } as DoctorsProp;
  },
};

const OurDoctors = () => {
  const collectionRef = useMemo(() => {
    return query(
      collection(db, "doctors").withConverter(doctorsFetchConverter)
    );
  }, []);

  const { data: doctors, isLoading } = useFirestoreFetchMultiDoc(collectionRef);

  if (isLoading) {
    return (
      <div className="max-w-7xl min-h-100 mx-auto flex items-center justify-center">
        <Loader1 />
      </div>
    );
  }

  return (
    <SubpageContainer
      title="Meet Our Trusted Medical Professionals"
      description="At Gloomommy, we understand the importance of compassionate and knowledgeable care during the postpartum journey. That’s why we’ve partnered with a network of highly qualified doctors who specialize in postpartum health, mental wellness, and maternal care. Our affiliated doctors are here to provide expert guidance, personalized treatment plans, and ongoing support to help you navigate this transformative phase of life."
    >
      <BoxContainer>
        {!doctors ? (
          <div className="flex items-center justify-center min-h-230">
            <div className="text-center">
              <p>No available doctors as of now</p>
              <p>We'll be back to you soon...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <Link
                  to={doctor.id}
                  key={doctor.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <div>
                    <img
                      src={doctor.image_url}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {doctor.specialization}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center">
                <span>No doctors available yet.</span>
              </div>
            )}
          </div>
        )}
      </BoxContainer>
    </SubpageContainer>
  );
};

export default OurDoctors;
