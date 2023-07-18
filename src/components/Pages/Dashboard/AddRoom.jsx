import React, { useContext, useState } from "react";
import AddRoomForm from "../../Forms/AddRoomForm";
import { imageUpload } from "../../../api/utils";
import { UNSAFE_getPathContributingMatches } from "@remix-run/router";
import { AuthContext } from "../../../providers/AuthProvider";

const AddRoom = () => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  // handle form Submit
  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const location = event.target.title.value;
    const title = event.target.title.value;
    // const from = dates.startDate;
    // const to = dates.endData;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const image = event.target.image.files[0];
    //   uplodad image
    imageUpload(image)
      .then((data) => {
        const roomData = {
          image: data.data.display_url,
          location,
          title,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  return (
    <AddRoomForm
      handleImageChange={handleImageChange}
      handleSubmit={handleSubmit}
      loading={loading}
      uploadButtonText={uploadButtonText}
    ></AddRoomForm>
  );
};

export default AddRoom;
