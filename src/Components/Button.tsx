import { Button, Navbar, Text } from "@mantine/core";
import { useContext, useState } from "react";
import { BrandTwitter } from "tabler-icons-react";

function CustomButton() {

    return (
        <Text>Bouton</Text>
    );

}

function TwitterButton() {
    return (
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/momokinou_"
        leftIcon={<BrandTwitter size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,
  
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
  
          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        Follow on Twitter
      </Button>
    );
  }

export default CustomButton;
export { TwitterButton };