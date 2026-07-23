import gsap from 'gsap';

gsap.to("img", {
  backgroundColor: "red", // background-color
  fontSize: 12, // font-size
  boxShadow: "0px 0px 20px 20px red", // animate complex strings
  borderRadius: "50% 50%",
  height: "auto", // animate between auto and a px value 🪄
});