import { Text, Grid } from "@nextui-org/react";

export const Header = () => {
  return (
    <header>
      <nav className="navegacion">
        <Grid.Container
          css={{ height: "100%", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;" }}
          justify="center"
          alignItems="center"
          
        >
          <Grid>
            <Text
              css={{
                fontWeight: "$bold",
                color: "$black",
                textAlign: "center",
                fontSize: "35px"
              }}
              transform="capitalize"
            >
              CRUD
            </Text>
          </Grid>
        </Grid.Container>
      </nav>
    </header>
  );
};
