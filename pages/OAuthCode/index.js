import React, { useEffect } from "react";
import { useRouter } from "next/router";
const OAuthCode = () => {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      const { code } = router.query;

      console.log("code:", code);
      if (code !== undefined) {
        const clientId =
          "201720427247-ia5omhd4ee8pt82n5n1g674t9ukdcdqv.apps.googleusercontent.com";
        const clientSecret = "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";
        const redirectUri = "https://blend-metrics2.vercel.app/OAuthCode";
        const authorizationCode = code;

        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `grant_type=authorization_code&code=${authorizationCode}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}`,
        };

        fetch(tokenEndpoint, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log("data in the code grant", data);
            const accessToken = data.access_token;
            console.log("Access Token:", accessToken);

            const gmailApiEndpoint =
              "https://gmail.googleapis.com/gmail/v1/users/me/messages";
            const reqOptions = {
              method: "GET",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            };

            fetch(gmailApiEndpoint, reqOptions)
              .then((response) => response.json())
              .then((data) => {
                console.log("Emails in Inbox:", data);
                const lastEmailId = data.messages[0].id;

                fetch(
                  `https://www.googleapis.com/gmail/v1/users/me/messages/${lastEmailId}`,
                  reqOptions
                )
                  .then((response) => response.json())
                  .then((data) => {
                    console.log("newest email", data);
                  })
                  .catch((error) =>
                    console.error("Error fetching emails:", error)
                  );
              })
              .catch((error) => console.error("Error fetching emails:", error));
            //   to check for mew email with attachments

            fetch(
              "https://gmail.googleapis.com/gmail/v1/users/me/labels",
              reqOptions
            )
              .then((response) => response.json())
              .then((data) => {
                console.log("Emails in Inbox:", data);
              })
              .catch((error) => console.error("Error fetching emails:", error));
          })
          .catch((error) =>
            console.error(
              "Error exchanging authorization code for access token:",
              error
            )
          );
      }
    }, 3000);
  }, [router.query]);

  return <div>OAuthCode</div>;
};

export default OAuthCode;
