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
    TextInput_4: "",
    TextInput_5: "",
    Switch_6: true,
    Switch_7: true,
    Switch_8: true,
    Switch_9: true,
    Switch_10: true,
    Switch_11: true,
    Switch_12: true,
    Switch_13: true,
    Switch_14: true,
    Switch_15: true,
    Switch_16: true,
    Switch_17: true,
    Switch_18: true
  }

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_6}
        value={this.state.Switch_6}
        onValueChange={nextChecked => this.setState({ Switch_6: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_7}
        value={this.state.Switch_7}
        onValueChange={nextChecked => this.setState({ Switch_7: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_8}
        value={this.state.Switch_8}
        onValueChange={nextChecked => this.setState({ Switch_8: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_9}
        value={this.state.Switch_9}
        onValueChange={nextChecked => this.setState({ Switch_9: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_10}
        value={this.state.Switch_10}
        onValueChange={nextChecked => this.setState({ Switch_10: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_11}
        value={this.state.Switch_11}
        onValueChange={nextChecked => this.setState({ Switch_11: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_12}
        value={this.state.Switch_12}
        onValueChange={nextChecked => this.setState({ Switch_12: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_13}
        value={this.state.Switch_13}
        onValueChange={nextChecked => this.setState({ Switch_13: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_14}
        value={this.state.Switch_14}
        onValueChange={nextChecked => this.setState({ Switch_14: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_15}
        value={this.state.Switch_15}
        onValueChange={nextChecked => this.setState({ Switch_15: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_16}
        value={this.state.Switch_16}
        onValueChange={nextChecked => this.setState({ Switch_16: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_17}
        value={this.state.Switch_17}
        onValueChange={nextChecked => this.setState({ Switch_17: nextChecked })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_18}
        value={this.state.Switch_18}
        onValueChange={nextChecked => this.setState({ Switch_18: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_2: {},
  Text_3: {},
  TextInput_4: {},
  TextInput_5: {},
  Switch_6: { alignSelf: "flex-start" },
  Switch_7: { alignSelf: "flex-start" },
  Switch_8: { alignSelf: "flex-start" },
  Switch_9: { alignSelf: "flex-start" },
  Switch_10: { alignSelf: "flex-start" },
  Switch_11: { alignSelf: "flex-start" },
  Switch_12: { alignSelf: "flex-start" },
  Switch_13: { alignSelf: "flex-start" },
  Switch_14: { alignSelf: "flex-start" },
  Switch_15: { alignSelf: "flex-start" },
  Switch_16: { alignSelf: "flex-start" },
  Switch_17: { alignSelf: "flex-start" },
  Switch_18: { alignSelf: "flex-start" }
})
