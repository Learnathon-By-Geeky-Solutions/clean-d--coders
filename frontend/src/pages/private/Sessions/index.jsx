import {
  DashboardHeading,
  FullScreenLoading,
  OnlyUserRole,
  TabButtons,
} from "@/components";
import { useTitle } from "@/hooks";
import { useSessionStore, useUserStore } from "@/store";
import { isValidRole } from "@/utils";
import { useEffect, useState } from "react";
import SessionList from "./SessionList";

const Sessions = () => {
  useTitle("Sessions");
  const { user } = useUserStore();
  let initialTab = "";
  if (isValidRole(user.role, ["mentee"])) {
    initialTab = "as mentee";
  } else if (isValidRole(user.role, ["mentor"])) {
    initialTab = "as mentor";
  }
  const [tab, setTab] = useState(initialTab);
  const { sessions, isLoading, setSessions } = useSessionStore();
  useEffect(() => {
    (async () => await setSessions(user.role))();
  }, [setSessions, user]);

  if (isLoading)
    return (
      <div className="flex-1 overflow-hidden">
        <DashboardHeading>Sessions</DashboardHeading>
        <FullScreenLoading />
      </div>
    );

  if (!initialTab)
    return (
      <div className="flex-1 overflow-hidden">
        <DashboardHeading>Sessions</DashboardHeading>
        <OnlyUserRole />
      </div>
    );
  return (
    <div className="flex-1 overflow-hidden">
      <DashboardHeading>Sessions</DashboardHeading>
      {isValidRole(user.role, ["mentee"]) &&
        isValidRole(user.role, ["mentor"]) && (
          <TabButtons
            tab={tab}
            setTab={setTab}
            tabList={["as mentee", "as mentor"]}
          />
        )}
      {tab === "as mentee" && (
        <SessionList users={sessions.mentee} role="mentee" />
      )}
      {tab === "as mentor" && (
        <SessionList users={sessions.mentor} role="mentor" />
      )}
    </div>
  );
};

export default Sessions;
