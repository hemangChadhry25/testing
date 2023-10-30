import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
import axios from "axios";

const IntegrationLogo = ({ id }: any) => {
  const [logo, setLogo] = useState("");

  const fetchLogo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/integration/getIntegrationLogo?id=${id}`,
        { responseType: "arraybuffer" }
      );
      const blob = new Blob([response.data], { type: "image/jpeg" });
      const imageUrl = URL.createObjectURL(blob);

      setLogo(imageUrl);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogo();
  }, []);
  return (
    <div className="h-[40px] w-[40px] ">
      <img src={logo} alt="I" className="h-[40px] w-[40px]" />
    </div>
  );
};

export default IntegrationLogo;
