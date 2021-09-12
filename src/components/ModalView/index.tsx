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
}

const ModalView = ({ children, ...rest }: ModalViewProps) => {
  return (
    <Modal statusBarTranslucent {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
};

export default ModalView;
