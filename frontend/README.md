# Madadgar - Frontend

## Installation (Windows)
- Install [Android Studio](https://developer.android.com/studio)
- For the SDK version, choose `Android API 33` or `Android API 34`
  - **ALTERNATIVELY**, when prompted during the installation, just proceed as is, should work fine for now (`27/September/2023`)
- `cd` to `frontend`
- Run `npm install`

## Setup/Build (Windows)
- Run `ionic cap sync` to sync all changes made to `android`
  - This will generate an `android` folder if one doesn't exist, and sync it with your current web state

## Run (Windows)
- Run `ionic cap open android` to automatically open *Android Studio*
- Run the default emulator from Android Studio, should be something like `Pixel_3a_API_34...`
- Run the app
