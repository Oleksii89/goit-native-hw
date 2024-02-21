import React from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import Button from "./Button";

export default function Form() {
  return (
    <View>
      <Formik
        initialValues={{
          login: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
        // onSubmit={(values, action) => {
        //   register(values);
        //   action.resetForm();
        // }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <View>
            <TextInput
              style={styles.input}
              value={values.login}
              placeholder="Логін"
              onChangeText={handleChange("login")}
            />
            <TextInput
              style={styles.input}
              value={values.email}
              // onBlur={handleBlur("email")}
              placeholder="Адреса електронної пошти"
              onChangeText={handleChange("email")}
            />
            <TextInput
              style={styles.input}
              value={values.password}
              placeholder="Пароль"
              onChangeText={handleChange("password")}
            />

            <Button
              style={styles.registerBtn}
              label={"Зареєструватися"}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 343,
    height: 50,
    borderWidth: 1,
    marginTop: 15,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
});
