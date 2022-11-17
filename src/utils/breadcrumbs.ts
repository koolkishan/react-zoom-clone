import { NavigateFunction } from "react-router-dom";

export const getDashboardBreadCrumbs = (navigate: NavigateFunction) => [
  {
    text: "Dashboard",
  },
];

export const getCreateMeetingBreadCrumbs = (navigate: NavigateFunction) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/");
    },
  },
  {
    text: "Create Meeting",
  },
];

export const getOneOnOneMeetingBreadCrumbs = (navigate: NavigateFunction) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/");
    },
  },
  {
    text: "Create Meeting",
    href: "#",
    onClick: () => {
      navigate("/create");
    },
  },
  {
    text: "Create 1 on 1 Meeting",
  },
];

export const getVideoConferenceBreadCrumbs = (navigate: NavigateFunction) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/");
    },
  },
  {
    text: "Create Meeting",
    href: "#",
    onClick: () => {
      navigate("/create");
    },
  },
  {
    text: "Create Video Conference",
  },
];

export const getMyMeetingsBreadCrumbs = (navigate: NavigateFunction) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/");
    },
  },
  {
    text: "My Meetings",
  },
];

export const getMeetingsBreadCrumbs = (navigate: NavigateFunction) => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/");
    },
  },
  {
    text: "Meetings",
  },
];
