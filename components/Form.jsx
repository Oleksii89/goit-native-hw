import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { Formik } from "formik";

export default function Form({ register }) {
  return (
    <View>
      <Formik
        initialValues={{
          login: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, action) => {
          register(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.login}
              placeholder="Логін"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.email}
              multiline
              placeholder="Адреса електронної пошти"
              onChangeText={props.handleChange("email")}
            />
            <TextInput
              style={styles.input}
              value={props.values.password}
              multiline
              placeholder="Пароль"
              onChangeText={props.handleChange("password")}
            />

            <Button
              style={styles.buttonAdd}
              title="Add"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    borderRadius: 1,
    borderColor: "#E8E8E8",
  },
  buttonAdd: {
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "yellow",
  },
});
