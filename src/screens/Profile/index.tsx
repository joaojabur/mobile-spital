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
import levels, { LevelProps } from "../../utils/levels";
import calcPercentage from "../../utils/calcPercentage";

const Profile = () => {
  const { signOut, user } = useAuth();

  let level = Math.floor(user?.xp ** (1 / 2) / 4 - 1);

  if (level === -1 || level === 0) {
    level = 1;
  }

  const navigation = useNavigation();
  const { primary100, white } = theme.colors;

  const levelObj = levels.filter((obj: LevelProps) => obj.level === level);
  const percentage = calcPercentage(levelObj[0]?.nextLevelXp, user?.xp);

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
          <Feather name="edit" size={26} color={primary100} />
          <Text style={styles.boxText}>Editar informações do perfil</Text>
        </TouchableOpacity>

        <View style={styles.level}>
          <Text style={styles.levelTitle}>Nível</Text>

          <View style={styles.levelBox}>
            <View style={styles.levelText}>
              <Text style={styles.levelTextItem}>
                Nível {level === -1 ? 1 : level}
              </Text>
              <Text style={styles.levelTextItem}>
                {user?.xp}/{levelObj[0]?.nextLevelXp}
              </Text>
            </View>

            <View style={styles.levelBar}>
              <View style={[styles.levelBarExp, { width: `${percentage}%` }]}>
                <Text style={styles.levelBarExpText}>{user?.xp}</Text>
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
