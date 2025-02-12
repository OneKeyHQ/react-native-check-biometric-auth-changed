import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-check-biometric-auth-changed' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const CheckBiometricAuthChanged = NativeModules.CheckBiometricAuthChanged
  ? NativeModules.CheckBiometricAuthChanged
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function checkBiometricAuthChanged(): Promise<boolean> {
  return CheckBiometricAuthChanged.checkChanged();
}
