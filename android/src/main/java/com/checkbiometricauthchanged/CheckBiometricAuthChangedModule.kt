package com.checkbiometricauthchanged

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class CheckBiometricAuthChangedModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun checkChanged(promise: Promise) {
    promise.resolve(false)
  }

  companion object {
    const val NAME = "CheckBiometricAuthChanged"
  }
}
