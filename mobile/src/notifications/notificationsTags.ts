import OneSignal from 'react-native-onesignal'

type addTagsProps = {
  userName: string
  email: string
}

export function tagUserInfo({ userName, email }: addTagsProps) {
  OneSignal.sendTags({
    user_name: userName,
    user_email: email,
  })
}
