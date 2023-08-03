/* eslint-disable max-params */
/* eslint-disable unused-imports/no-unused-vars */
// @ts-nocheck
import React from 'react';
import { showMessage } from 'react-native-flash-message';
// import { Container } from './styles';

const FlashMessages: React.FC = () => {
  function showSimpleMessage(
    messagem: string,
    description: string,
    types = 'default',
    props = {}
  ) {
    const message = {
      message: messagem,
      description: description,
      icon: { icon: 'auto', position: 'left' },
      type: types,
      ...props,
    };
    showMessage(message);
  }

  function messageWithPosition(
    messages: string,
    descriptions: string,
    position = 'top',
    hasDescription = true,
    extra = {}
  ) {
    let message = {
      message: messages,
      type: 'info',
      position,
      ...extra,
    };
    if (hasDescription) {
      message = { ...message, description: descriptions };
    } else {
      message = { ...message, floating: true };
    }
    showMessage(message);
  }

  function onMessage(
    messages: string,
    descriptions: string = '',
    types: any = 'success'
  ) {
    showMessage({
      message: messages,
      description: descriptions,
      type: types, // danger // success
      //backgroundColor: 'purple', // background color
      // color: '#606060', // text color
      duration: 4000,
      icon: 'success', // danger
      onPress: () => {
        onMessageClick();
        /* THIS FUNC/CB WILL BE CALLED AFTER MESSAGE PRESS */
      },
    });
  }

  function onMessageClick() {
    console.log('CLICK');
  }

  return <></>;
};

export default FlashMessages;

// ------------------------------MESSAGE-------------
/*

  showSimpleMessage("","")
  showMessage({ message: "Just one single line in this", type: "info" })}
  showMessage({
    message: "Message that hide your status bar",
    description: "Cool, uhm?",
    type: "success",
    hideStatusBar: true,
  })
  showSimpleMessage("success")
  showSimpleMessage("info")
  showSimpleMessage("warning")
  showSimpleMessage("danger")
  showSimpleMessage("default", { backgroundColor: "pink" })
  showSimpleMessage("default", { backgroundColor: "cyan", color: "red" })
  showSimpleMessage("success", { floating: true })
  messageWithPosition("bottom")
  messageWithPosition("bottom", false)
  messageWithPosition("center")
  messageWithPosition({ top: 60, left: 30, right: 30 })
  showSimpleMessage("info", {
    renderCustomContent: () => (
      <View style={{ padding: 9 }}>
        <Text>What?</Text>
      </View>
    ),
  })
  showSimpleMessage("info", { animated: false })
  showMessage({
    message: "This message will desapear only if you press",
    type: "warning",
    autoHide: false,
  })
  hideMessage()
  */
// {/*in the last */}
//       <FlashMessage />
