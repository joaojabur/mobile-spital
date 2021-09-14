import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Avatar from "../../components/Avatar";
import Background from "../../components/Background";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthProvider";

const Profile = () => {
  const { signOut, user } = useAuth();

  const navigation = useNavigation();
  const { primary100, white } = theme.colors;
  let porcentage = 60;

  function handleGoEdit() {
    navigation.navigate("Edit");
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar
            uri="https://hsmuniversity.com.br/wp-content/uploads/2019/04/jeff_bezos-150x150.jpg"
            source={{
              uri: "https://hsmuniversity.com.br/wp-content/uploads/2019/04/jeff_bezos-150x150.jpg",
            }}
          />

          <Text style={styles.name}>
            {user?.firstName} {user?.lastName}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleGoEdit}
          activeOpacity={0.7}
          style={styles.box}
        >
          <Feather name="edit" size={30} color={primary100} />
          <Text style={styles.boxText}>Editar informações do perfil</Text>
        </TouchableOpacity>

        <View style={styles.level}>
          <Text style={styles.levelTitle}>Nível</Text>

          <View style={styles.levelBox}>
            <View style={styles.levelText}>
              <Text style={styles.levelTextItem}>Nível 21</Text>
              <Text style={styles.levelTextItem}>350/500</Text>
            </View>

            <View style={styles.levelBar}>
              <View style={[styles.levelBarExp, { width: `${porcentage}%` }]}>
                <Text style={styles.levelBarExpText}>350</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={signOut}
          style={styles.leaveButton}
        >
          <MaterialIcons
            onPress={signOut}
            name="logout"
            size={30}
            color={white}
          />
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Profile;
