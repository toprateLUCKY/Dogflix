import { Carousel } from "@mantine/carousel";
import { caroselList } from "./CaroselList";
import { Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";

// import { useDisclosure } from "@mantine/hooks";
// import { Modal } from "@mantine/core";

function Carosel() {
  // const [opened, { open, close }] = useDisclosure(false);
  // <Button onClick={open}>Open modal</Button>

  const { hovered, ref } = useHover();

  return caroselList.map((group) => (
    <div>
      {/* <Modal opened={opened} onClose={close} title="Authentication">
        Hello 
      </Modal> */}

      <div ref={ref}>
        {hovered ? "I am hovered" : "Put mouse over me please"}
      </div>

      <>
        <Title order={5}>{group.title}</Title>
      </>

      <Carousel
        withIndicators
        height="100%"
        slideSize="15%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        slidesToScroll={3}
      >
        {group.images.map((image) => {
          return (
            <Carousel.Slide onClick={open}>
              <img src={image} alt="dog" width="100%" height="100%" />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  ));
}

export default Carosel;
