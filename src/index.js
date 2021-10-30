import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import './Translation/index';

function App() {
  const {t, i18n} = useTranslation();
  
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Text>{t('paragraph')}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => changeLanguage('en')}>
        <Text>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => changeLanguage('pt')}>
        <Text>Brasil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => changeLanguage('sp')}>
        <Text>Spanish</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => changeLanguage('fr')}>
        <Text>French</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;