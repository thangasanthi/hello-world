import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../redux/helloActions";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

const Button = styled.button`
  background: tomato;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function HelloOne() {
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  const overlayModal = {
    overlay: {
      backgroundColor: "grey",
    },
    content: {
      color: "tomato",
    },
  };

  const openModal = () => {
    dispatch(open());
  };

  const closeModal = () => {
    dispatch(close());
  };

  return (
    <>
      <section>
        <h1>Heading 1</h1>
        <article>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure? On the other hand, we denounce with righteous
          indignation and dislike men who are so beguiled and demoralized by the
          charms of pleasure of the moment, so blinded by desire, that they
          cannot foresee
        </article>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure? On the other hand, we denounce with righteous
          indignation and dislike men who are so beguiled and demoralized by the
          charms of pleasure of the moment, so blinded by desire, that they
          cannot foresee
        </p>
      </section>

      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={overlayModal}>
        <section>
          <h2>Hello World!</h2>
          <aside>
            <h4>Epcot Center</h4>
            <p>
              Epcot is a theme park at Walt Disney World Resort featuring
              exciting attractions, international pavilions, award-winning
              fireworks and seasonal special events. The European languages are
              members of the same family. Their separate existence is a myth.
              For science, music, sport, etc, Europe uses the same vocabulary.
              The languages only differ in their grammar, their pronunciation
              and their most common words. Everyone realizes why a new common
              language would be desirable: one could refuse to pay expensive
              translators. To achieve this, it would be necessary to have
              uniform grammar, pronunciation and more common words. If several
              languages coalesce, the grammar of the resulting language is more
              simple and regular than that of the individual languages. The new
              common language will be more simple and regular than the existing
              European languages. It will be as simple as Occidental; in fact,
              it will be Occidental. To an English person, it will seem like
              simplified English, as a skeptical Cambridge friend of mine told
              me what Occidental is.The European languages are members of the
              same family. Their separate existence is a myth. For science,
              music, sport, etc, Europe uses the same vocabulary. The languages
              only differ in their grammar, their pronunciation and their most
              common words. Everyone realizes why a new common language would be
              desirable: one could refuse to pay expensive translators.
            </p>
          </aside>
          <div>
            <Button onClick={closeModal}>Close</Button>
          </div>
        </section>
      </Modal>
    </>
  );
}

export default HelloOne;
