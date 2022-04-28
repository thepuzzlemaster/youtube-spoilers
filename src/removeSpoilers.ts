const channels = ['onivia', 'loleventvods']

setTimeout(() => {
  const uploadInfo = document
    .getElementById('meta-contents')
    ?.querySelector('#upload-info')

  if (
    channels.some((channelName) =>
      uploadInfo?.textContent?.toLowerCase().includes(channelName.toLowerCase())
    )
  ) {
    const videoControls: HTMLElement | undefined =
      document.getElementsByClassName('ytp-chrome-bottom')[0] as HTMLElement

    const otherVideos: HTMLElement | undefined = document.body.querySelector(
      '#items.ytd-watch-next-secondary-results-renderer'
    ) as HTMLElement

    const comments: HTMLElement | undefined = document.body.querySelector(
      'ytd-comments'
    ) as HTMLElement

    if (videoControls) {
      videoControls.style.display = 'none'
    }

    if (otherVideos) {
      otherVideos.style.display = 'none'
    }

    if (comments) {
      comments.style.display = 'none'
    }
  }
}, 1000)
