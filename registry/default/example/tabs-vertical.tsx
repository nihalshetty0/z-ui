import {
  TabContent,
  TabList,
  Tabs,
  TabVerticalTrigger,
} from "@/registry/default/ui/tabs"

export default function TabsVertical() {
  return (
    <Tabs defaultValue="account" contained orientation="vertical">
      <TabList>
        <TabVerticalTrigger value="account">Account</TabVerticalTrigger>
        <TabVerticalTrigger value="password">Password</TabVerticalTrigger>
        <TabVerticalTrigger value="notifications">
          Notifications
        </TabVerticalTrigger>
        <TabVerticalTrigger value="integrations" disabled>
          Integrations
        </TabVerticalTrigger>
      </TabList>
      <TabContent value="account">
        Make changes to your account here.
      </TabContent>
      <TabContent value="password">Change your password here.</TabContent>
      <TabContent value="notifications">
        Change your notifications here.
      </TabContent>
      <TabContent value="integrations">
        Change your integrations here.
      </TabContent>
    </Tabs>
  )
}
