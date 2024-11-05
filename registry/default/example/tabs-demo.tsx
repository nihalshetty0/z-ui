import {
  TabContent,
  TabList,
  Tabs,
  TabTrigger,
} from "@/registry/default/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabList>
        <TabTrigger value="account">Account</TabTrigger>
        <TabTrigger value="password">Password</TabTrigger>
        <TabTrigger value="notifications">Notifications</TabTrigger>
        <TabTrigger value="integrations" disabled>
          Integrations
        </TabTrigger>
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
