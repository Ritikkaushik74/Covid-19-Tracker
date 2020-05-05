import React from "react";
import { Typography, Link, Box } from "@material-ui/core";

const copyright = () => {
  return (
    <Typography pt={5} variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Ritikkaushik74" >
         by Ritik Kaushik </Link>{" "}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return <Box marginTop='40px'>{copyright}</Box>;
};
export default Footer;
