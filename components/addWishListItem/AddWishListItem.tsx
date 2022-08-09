import { Button, Modal, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function AddWishListItem() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <View style={styles.buttonContainer}>
      <Button title="Add Item" onPress={openModal} />
      <Modal visible={modalIsOpen} onRequestClose={closeModal}>
        <Button title="Add" />
      </Modal>
    </View>
  );
}
