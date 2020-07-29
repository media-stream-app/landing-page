---
id: getting-started
title: Getting Started with Media Stream
hide_title: false
hide_table_of_contents: false
sidebar_label: Getting Started
description: How to get started with Media Stream app
keywords:
  - getting-started
  - media-stream app
# image: https://i.imgur.com/mErPwqL.png
---

There are 2 main phases in the media app integration,

1. [Onboarding Phase](#onboarding-phase)
2. [Integration Phase](#integration-phase)

### Onboarding Phase

1. You sign up to use for Media stream app, by visiting the [onboarding page](https://media-stream.app/onboarding). Please ensure that you provide us with accurate details for fast processing
2. You'll recieve an email from `contact.us.media.stream [at] gmail [dot] com` with the subject "Welcome to Media Stream App". It may take upto 24 hours to onboard a regular user.

In the onboarding email you'll have the following important information

1. [Stream Key](glossary#stream-key)
2. [Embed Script](glossary#embed-script)

### Integration Phase

## OBS

### Profile integration

1. Open OBS.

2. Select Profile -> Import.

![Step 2](/img/profile-integration-1.png)

3. Select 'media-stream-profile.config' folder (in system folder selection screen) that is sent as an attachment in the onboarding email from media stream app team.

![Step 3](/img/profile-integration-2.png)

4. After importing, select Profile -> media-stream-profile

![Step 4](/img/profile-integration-3.png)

5. The OBS profile title changes to 'media-stream-profile' on successful Profile selection

![Step 5](/img/profile-integration-4.png)

### Streaming with laptop

#### 1. Select video capture device:

Click the + symbol under the 'Sources' section.

![Step 1.1](../static/img/video-capture-device-1.png)

You should see the 'video capture device' option, click on that.

![Step 1.2](../static/img/video-capture-device-2.png)

#### 2. Name the layer

When adding multiple layers it's important to ensure you label the layer.

![Step 2](../static/img/video-capture-device-3.png)

#### 3. Select the device

- a) Select the webcam from the 'devices' drop down.
- b) Specify the 'Resolution/FPS type'.
- c) Specify the resolution from 'Resolution' dropdown, if you have selected 'custom' from 'Resolution/FPS type.

#### 4. Start streaming from laptop camera

![Step 4](../static/img/video-capture-device-7.png)

### Streaming with external camera

#### 1. Select video capture device:

Click the + symbol under the 'Sources' section.

![Step 1.1](../static/img/video-capture-device-1.png)

You should see the 'video capture device' option, click on that.

![Step 1.2](../static/img/video-capture-device-2.png)

#### 2. Name the layer

When adding multiple layers it's important to ensure you label the layer.

![Step 2](../static/img/video-capture-device-3.png)

#### 3. Select the device

- a) Select the webcam from the 'devices' drop down.
- b) Specify the 'Resolution/FPS type'.
- c) Specify the resolution from 'Resolution' dropdown, if you have selected 'custom' from 'Resolution/FPS type'.

![Step 3](../static/img/video-capture-device-5.png)

#### 4. Optional - Adding the webcam's microphone

You'll need to manually add the webcam's microphone as an audio source in settings. Click the 'settings' button.

![alt text](https://cdn.streamshark.io/obs-guide/img/image-4-adding-webcam-to-obs.png "Step 4")

#### 5. Select the webcam under the audio tab

- a) Select the audio tab which is located on the left of the settings window.
- b) Under the 'Mic/Auxiliary Audio Device' dropdown select the webcam.

![alt text](https://cdn.streamshark.io/obs-guide/img/image-5-adding-webcam-to-obs.png "Step 5")

## HTML

### Script integration

1. Copy the 'iframe' tag from step 2 of the onboarding email received from media stream app team (will be highlighted in light blue colour in received mail).

![Step 1](../static/img/script-integration-1.png)

2. Integrate the 'iframe' tag onto your code (HTML code to be specific).

![Step 2](../static/img/script-integration-2.png)

3. Compile the code to observe changes. Start streaming using OBS from earlier mentioned steps and see how younew embedded solution works.

![Step 3](../static/img/script-integration-3.png)
