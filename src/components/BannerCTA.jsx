import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function BannerCTA(props) {

  return (
    <>
      <Typography variant="h3" color="textPrimary" gutterBottom>
      Your product playbook, <strong>right at your fingertips.</strong>
      </Typography>
      <Typography variant="body1" color="textPrimary" gutterBottom>
        Let us help you cater to your consumer's demands by using our advanced
        recommendation system based on over
        <strong> 50 million</strong> products.
      </Typography>
    </>
  );
}
