import { Box } from "@mui/material";
function Card() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <h2>Link</h2>
      <img
        src="/images/anim.gif"
        alt="img1"
        width={"200px"}
        height={"200px"}
        style={{ borderRadius: "20px", boxShadow: "10px 10px 20px black" }}
      />
      <button>Ir</button>
    </Box>
  );
}

export default Card;
