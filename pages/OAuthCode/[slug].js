import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const Slug = () => {
  const router = useRouter();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const { slug, code, error } = router.query;
    if (error === "access_denied") {
      window.close();
    }

    if (slug !== undefined && code !== undefined && sent === false) {
      getTokens(slug, code);
      setSent(true);
    }
  }, [router.query]);

  const getTokens = async (integrationId, code) => {
    try {
      const response = await axios.post(
        "https://5n5obo6nik.execute-api.us-east-1.amazonaws.com/tokens/token",
        { integrationId, code }
      );

      if (response.status === 200) {
        // Send a message to the parent window
        window.opener.postMessage(
          response.data,
          "https://blend-metrics2.vercel.app/workflow/76a3b9a5-c19e-4f11-8202-1aadac3fa311"
        );
        window.close();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return <div>redirecting ...</div>;
};

export default Slug;
