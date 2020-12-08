import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    CheckBox_2: false,
    CheckBox_4: false,
    CheckBox_5: true,
    CheckBox_6: true
  }

  render = () => (
    <View>
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_2}
        onPress={nextChecked => this.setState({ CheckBox_2: nextChecked })}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("SignupScreen315578")}
      >
        <Icon name="star" style={styles.Icon_3} />
      </TouchableOpacity>
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_6}
        onPress={nextChecked => this.setState({ CheckBox_6: nextChecked })}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("SignupScreen315578")}
      >
        <Icon name="star" style={styles.Icon_7} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  CheckBox_2: {},
  Icon_3: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderStyle: "dotted",
    borderWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4
  },
  CheckBox_4: {},
  CheckBox_5: {},
  CheckBox_6: {},
  Icon_7: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderColor: "#2dd248",
    borderStyle: "dashed",
    borderWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4
  }
})
