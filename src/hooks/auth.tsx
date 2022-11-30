import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StackRoutes } from "constants/routes";
interface AuthProviderProps {
  children: ReactNode;
}

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

interface RecoverPasswordData {
  email: string;
}

interface IUser {
  id: string;
  username: string;
}

interface AuthContextData {
  signIn: ({ email, password }: SignInData) => Promise<void>;
  signUp: ({ username, email, password }: SignUpData) => Promise<void>;
  recoverPassword: ({ email }: RecoverPasswordData) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
  user: IUser | null;
}

const USER_COLLECTION = "@waterreminder:users";
const { HOME, SIGNIN } = StackRoutes;

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const signUp = async ({ username, email, password }: SignUpData) => {
    if (!username || !email || !password) {
      return Alert.alert(
        "SignUp",
        "Enter username, e-mail and password to create your account.",
      );
    }

    if (password.length < 6) {
      return Alert.alert("SignUp", "Senha deve ter pelo menos 6 caracteres.");
    }

    try {
      setIsLoading(true);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(account => {
          const { uid } = account.user;

          // Using .doc instead of .add to create a register because .add will generate a random uid, and we want
          // to use the same id we are using in auth() to create a register for the user.
          firestore()
            .collection("users")
            .doc(uid)
            .set({
              id: uid,
              username,
              email,
            })
            .then(() => {
              Alert.alert("SignUp", "Nova conta criada com sucesso!", [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate(HOME),
                },
              ]);
            });

          setIsLoading(false);
        })
        .catch(error => {
          const { code } = error;

          if (code === "auth/email-already-in-use") {
            return Alert.alert("SignUp", "E-mail já está cadastrado");
          }
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {}
  };

  const signIn = async ({ email, password }: SignInData) => {
    if (!email || !password) {
      return Alert.alert("SignIn", "E-mail e senha estão em branco.");
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const { uid } = response.user;
        firestore()
          .collection("users")
          .doc(uid)
          .get()
          .then(async profile => {
            const { id, username } = profile.data() as IUser;

            if (profile.exists) {
              const userData = {
                id,
                username,
              };

              setUser(userData);

              AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
              navigation.navigate(HOME);
            }

            setIsLoading(false);
          });
      })
      .catch(error => {
        const { code } = error;

        if (code === "auth/wrong-password") {
          return Alert.alert(
            "SignIn",
            "The password is invalid or the user does not have a password.",
          );
        }

        if (code === "auth/user-not-found") {
          Alert.alert(
            "SignIn",
            "There is no user record corresponding to this e-mail.",
          );
        }
      })
      .finally(() => setIsLoading(false));
  };

  const signOut = async () => {
    setIsLoading(true);
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
    setIsLoading(false);

    navigation.navigate(SIGNIN);
  };

  const recoverPassword = async ({ email }: RecoverPasswordData) => {
    if (!email) {
      return Alert.alert("Recovery password", "E-mail is required.");
    }

    await auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          "Recovery password",
          "Mandamos um link para alterar seu password por meio do email cadastrado.",
          [
            {
              text: "Ok",
              onPress: () => navigation.navigate(SIGNIN),
            },
          ],
        );
      })
      .catch(error => {
        const { code } = error;

        if (code === "auth/user-not-found") {
          Alert.alert(
            "Recovery password",
            "Não foi possível enviar o e-mail de recuperação de senha, pois esse e-mail não está cadastrado.",
          );
        }
      });
  };

  const loadUserStorageData = async () => {
    setIsLoading(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as IUser;
      navigation.navigate(HOME);

      setUser(userData);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadUserStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, signIn, signOut, recoverPassword, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
