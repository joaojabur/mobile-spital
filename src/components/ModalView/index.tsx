import React, { ReactNode } from "react";
import {
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { styles } from "./styles";

interface ModalViewProps extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

const ModalView = ({ children, closeModal, ...rest }: ModalViewProps) => {
  return (
    <Modal statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalView;
