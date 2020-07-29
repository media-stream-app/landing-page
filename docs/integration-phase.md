---
id: integration-phase
title: Integration Phase
hide_title: false
hide_table_of_contents: false
sidebar_label: Integration
description: How to get started with Media Stream app
keywords:
  - getting-started
  - media-stream app
# image: https://i.imgur.com/mErPwqL.png
---

## OBS Integration

Open Broadcaster Software (OBS) is a free and open-source cross-platform streaming and recording program built with Qt and maintained by the OBS Project. As of 2016, the software is now referred to as OBS Studio.

Please ensure that you download and install OBS before proceeding. [Download OBS](https://obsproject.com/download)

### Importing Media-Stream-Profile

1. Open OBS.
2. Select Profile (in title bar) -> Import. ![Step 2](/img/profile-integration-1.png)
3. Select 'media-stream-profile.config' folder (in system folder selection screen) that is sent as an attachment in the onboarding email. (Note: The team sends a zip file, you'll have to unzip the file before use) ![Step 3](/img/profile-integration-2.png)
4. After importing, select Profile -> media-stream-profile ![Step 4](/img/profile-integration-3.png)
5. The OBS profile title changes to 'media-stream-profile' on successful Profile selection ![Step 5](/img/profile-integration-4.png)

### Streaming with laptop

<details>
<summary> <h4 class="inline-header">Click here to read more on streaming with laptop</h4></summary>

1. Select video capture device. Then click the + symbol under the 'Sources' section. ![Step 1.1](../static/img/video-capture-device-1.png) You should see the 'video capture device' option, click on that. ![Step 1.2](../static/img/video-capture-device-2.png)
2. Please ensure that you name your layers appropriately. Click on ok when done. ![Step 2](../static/img/video-capture-device-3.png)
3. Select the device  
   a. Select the webcam from the 'devices' drop down.  
   b. Specify the 'Resolution/FPS type'.  
   c. Specify the resolution from 'Resolution' dropdown, if you have selected 'custom' from 'Resolution/FPS type. ![Step 3](../static/img/video-capture-device-5.png)
4. Start streaming from laptop camera ![Step 4](../static/img/video-capture-device-7.png)

</details>

### Streaming with external camera

<details>
<summary> <h4 class="inline-header">Click here to read more on streaming with external camera</h4></summary>

1. Select video capture device. Then click the + symbol under the 'Sources' section. ![Step 1.1](../static/img/video-capture-device-1.png) You should see the 'video capture device' option, click on that. ![Step 1.2](../static/img/video-capture-device-2.png)
2. Name the layer. When adding multiple layers it's important to ensure you label the layer. ![Step 2](../static/img/video-capture-device-3.png)
3. Select the device  
   a. Select the webcam from the 'devices' drop down.  
   b. Specify the 'Resolution/FPS type'.  
   c. Specify the resolution from 'Resolution' dropdown, if you have selected 'custom' from 'Resolution/FPS type'. ![Step 3](../static/img/video-capture-device-5.png)
4. Optional - Adding the webcam's microphone. You'll need to manually add the webcam's microphone as an audio source in settings. Click the 'settings' button. ![alt text](https://cdn.streamshark.io/obs-guide/img/image-4-adding-webcam-to-obs.png "Step 4")
5. Select the webcam under the audio tab  
   a. Select the audio tab which is located on the left of the settings window.  
   b. Under the 'Mic/Auxiliary Audio Device' dropdown select the webcam. ![alt text](https://cdn.streamshark.io/obs-guide/img/image-5-adding-webcam-to-obs.png "Step 5")

</details>

## Client-side Integration

Integration of Scripts into front end application.

### Script Integration

<!-- ![Step 1](../static/img/script-integration-1.png) -->

1. Copy the Embed Script from the onboarding email (will be highlighted in light blue colour in received mail).
2. Integrate the Embed Script in your markup. ![Step 2](../static/img/script-integration-2.png)
3. Publish your front end application.

## Congratulations 🎉

If you have followed the steps as mentioned, your solution should start working. Start streaming using OBS from earlier mentioned steps and see how the solution works.

![Step 3](../static/img/script-integration-3.png)
