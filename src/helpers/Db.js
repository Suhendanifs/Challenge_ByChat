import {firebase} from '@react-native-firebase/database';

export const myDb = firebase
  .app()
  .database(
    'https://bychat-352fc-default-rtdb.asia-southeast1.firebasedatabase.app/',
  );
